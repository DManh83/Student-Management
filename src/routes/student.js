import * as controllers from '../controllers'
import express from 'express'

const router = express.Router()

router.get('/', controllers.getStudents)
router.post('/', controllers.createStudent)
router.delete('/', controllers.deleteStudent)

//api test on ui
router.get('/delete-student', controllers.deleteStudent)
router.get('/create-form', controllers.formCreateStudent)
router.get('/edit-form', controllers.formEditStudent)
router.post('/put-student', controllers.updateStudent)

module.exports = router