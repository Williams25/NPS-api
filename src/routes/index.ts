import { Router } from 'express'
const routes = Router()

import UserRoutes from './UserRoutes'
import SurveyRoutes from './SurveyRoutes'
import SendMailRoutes from './SendMailRoutes'
import AnswersRoutes from './AnswersRoutes'
import NpsRoutes from './NpsRoutes'

routes.use('/users', UserRoutes)
routes.use('/surveys', SurveyRoutes)
routes.use('/sendMail', SendMailRoutes)
routes.use('/answers', AnswersRoutes)
routes.use('/nps', NpsRoutes)

export default routes