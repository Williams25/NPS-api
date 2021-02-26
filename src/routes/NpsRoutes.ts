import { Router } from 'express'
const routes = Router()

import { NpsController } from '../controllers/NpsController'

const npsController = new NpsController()

routes.get('/:survey_id', npsController.execute)

export default routes