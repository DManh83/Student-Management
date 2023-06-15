import db from '../models'
import { Op } from 'sequelize'

//Search
export const getStudents = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true }
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_STUDENT

        queries.offset = offset * fLimit
        queries.limit = fLimit

        if (order) queries.order = [order]
        if (name) query.name = { [Op.substring]: name }
        const response = await db.Student.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Cannot found students',
            studentData: response
        })
    } catch (error) {
        reject(error)
    }
})

//Create

export const createStudent = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Student.findOrCreate({
            where: { name: body?.name },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Cannot create new student'
        })
    } catch (error) {
        reject(error)
    }
})

//Update
export const updateStudent = ({ id, ...body }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Student.update(body, {
            where: { id }
        })
        //console.log(response)
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} student update` : 'Cannot update student / Student id not found'
        })
    } catch (error) {
        reject(error)
    }
})

//Delete
export const deleteStudent = ({ ids }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Student.destroy({
            where: { id: ids }
        })
        resolve({
            err: response > 0 ? 0 : 1,
            mes: `${response} student(s) delete`
        })
    } catch (error) {
        reject(error)
    }
})