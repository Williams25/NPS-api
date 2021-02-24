import { Router } from 'express'
const routes = Router()

import UserRoutes from './UserRoutes'
import SurveyRoutes from './SurveyRoutes'

routes.use('/users', UserRoutes)
routes.use('/surveys', SurveyRoutes)

export default routes