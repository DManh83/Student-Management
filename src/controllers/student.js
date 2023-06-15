import * as services from "../services"
import { id, ids, name, gender, email, phone, address } from "../helpers/joi_schema"
import joi from "joi"
import { internalServerError, badRequest } from "../middlewares/handle_errors"


//Get list
export const getStudents = async (req, res) => {
    try {
        const response = await services.getStudents(req.query)
        const data = response.studentData.rows
        // console.log(data)
        return res.render('listStudent.ejs', {
            data: data
        })
    } catch (error) {
        return internalServerError(res)
    }
}

//Create
export const createStudent = async (req, res) => {
    try {
        const { error } = joi.object({ name, gender, email, phone, address }).validate(req.body)
        // console.log(name)
        if (error) return badRequest(error.details[0].message, res)
        const response = await services.createStudent(req.body)
        console.log('Create new student succeed!')
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}

export const formCreateStudent = async (req, res) => {
    return res.render('createStudent.ejs')
}


//Update
export const updateStudent = async (req, res) => {
    try {
        // console.log({ id })
        //console.log(req.body)
        const { error } = joi.object({ id }).validate({ id: req.body.id })
        // console.log(error)
        if (error) return badRequest(error.details[0].message, res)
        const response = await services.updateStudent(req.body)
        return res.render('listStudent.ejs', {
            data: response
        })

    } catch (error) {
        return internalServerError(res)
    }
}

export const formEditStudent = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate(req.query)
        if (error) return badRequest(error.details[0].message, res)
        const response = await services.getStudentInfoById(req.query.id)
        return res.render('editStudent.ejs', {
            student: response
        })

    } catch (error) {
        return internalServerError(res)
    }
}


export const putStudent = async (req, res) => {
    const data = req.body
    const allStudents = await services.updateStudent(data)
    return res.render('listStudent.ejs', {
        data: allStudents
    })
}


//Delete
export const deleteStudent = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate(req.query)
        if (error) return badRequest(error.details[0].message, res)
        const response = await services.deleteStudent(req.query.id)
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}
