import * as services from "../services"
import { name, sex, email, phone, address } from "../helpers/joi_schema"
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
        if (error) return badRequest(error.details[0].message, res)
        const response = await services.createStudent(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}