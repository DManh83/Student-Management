import db from '../models'
import { Op } from 'sequelize'

//Get list
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
        // console.log(response)
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
export const updateStudent = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Student.findOne({
            where: { id: body.id }
        })
        //console.log(response)

        if (resolve) {
            response.name = body.name
            response.gender = body.gender
            response.email = body.email
            response.phone = body.phone
            response.address = body.address

            await response.save()
            const allStudents = await db.Student.findAll()
            resolve(allStudents)
        }
    } catch (error) {
        reject(error)
    }
})

//Delete
export const deleteStudentById = (id) => new Promise(async (resolve, reject) => {
    try {
        const student = await db.Student.findOne({
            where: { id: id }
        })
        if (student) {
            await student.destroy()
        }
        resolve()
    } catch (e) {
        reject(e)
    }
})

export const getStudentInfoById = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Student.findOne({
            where: { id: id },
            raw: true
        })

        if (response) {
            resolve(response)
        } else resolve({
            err: response ? 0 : 1,
            mes: response ? 'Ok' : 'Cannot found Student'
        })

    } catch (e) {
        reject(e)
    }
})

export const deleteStudent = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Student.destroy({
            where: { id: id }
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'student deleted' : 'Cannot found Student'
        })
    } catch (error) {
        reject(error)
    }
})

// export const getAllStudents = () => Promise(async (resolve, reject) => {
//     try {
//         const students = await db.Student.findAll({
//             raw: true
//         })
//         resolve(students)
//     } catch (e) {
//         reject(e)
//     }
// })




