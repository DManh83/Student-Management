import * as services from "../services"
import { id, ids, name, sex, email, phone, address } from "../helpers/joi_schema"
import joi from "joi"
import { internalServerError, badRequest } from "../middlewares/handle_errors"

export const getStudents = async (req, res) => {
    try {
        const response = await services.getStudents(req.query)
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}

//Create
export const createStudent = async (req, res) => {
    try {
        const { error } = joi.object({ name, sex, email, phone, address }).validate(req.body)
        // console.log(name)
        if (error) return badRequest(error.details[0].message, res)
        const response = await services.createStudent(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
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
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}

//Delete
export const deleteStudent = async (req, res) => {
    try {
        const { error } = joi.object({ ids }).validate(req.query)
        if (error) return badRequest(error.details[0].message, res)
        const response = await services.deleteStudent(req.query)
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}