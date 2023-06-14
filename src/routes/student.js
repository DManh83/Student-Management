import * as controllers from '../controllers'
import express from 'express'

const router = express.Router()

router.get('/', controllers.getStudents)
router.post('/', controllers.createStudent)

module.exports = router