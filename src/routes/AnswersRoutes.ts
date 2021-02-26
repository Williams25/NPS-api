import { Router } from 'express'
const routes = Router()

import { AnswerController } from '../controllers/AnswerController'

const answerController = new AnswerController()

routes.get('/:value', answerController.execute)

export default routes