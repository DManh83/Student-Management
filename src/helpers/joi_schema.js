import joi from "joi";

export const name = joi.string().required()
export const sex = joi.string().required()
export const phone = joi.string().required()
export const email = joi.string().pattern(new RegExp('gmail.com$')).required()
export const address = joi.string().required()
export const id = joi.number().required()
export const ids = joi.array().required()