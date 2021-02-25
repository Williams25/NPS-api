import { Router } from 'express'
const routes = Router()

import UserRoutes from './UserRoutes'
import SurveyRoutes from './SurveyRoutes'
import SendMailRoutes from './SendMailRoutes'

routes.use('/users', UserRoutes)
routes.use('/surveys', SurveyRoutes)
routes.use('/sendMail', SendMailRoutes)

export default routes