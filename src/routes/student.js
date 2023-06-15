import * as controllers from '../controllers'
import express from 'express'

const router = express.Router()

router.get('/', controllers.getStudents)
router.post('/', controllers.createStudent)
router.put('/', controllers.updateStudent)
router.delete('/', controllers.deleteStudent)

module.exports = router