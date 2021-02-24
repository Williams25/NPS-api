import { Router } from 'express'
const routes = Router()

import { SurveyController } from '../controllers/SurveyController'

const surveyController = new SurveyController()

routes.post('/', surveyController.create)
routes.get('/', surveyController.findAll)

export default routes