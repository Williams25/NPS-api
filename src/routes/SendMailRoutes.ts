import { Router } from 'express'
const routes = Router()

import { SendMailController } from '../controllers/SendMailController'

const sendMailController = new SendMailController()

routes.post('/', sendMailController.execute)
// routes.get('/', surveyController.findAll)

export default routes