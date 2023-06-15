import student from './student'
import { notFound } from '../middlewares/handle_errors'

const initRoutes = (app) => {
    app.use('/api/v1/student/', student)


    app.use(notFound)
}

module.exports = initRoutes