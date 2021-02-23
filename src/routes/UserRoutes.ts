import { Router } from 'express'
const routes = Router()

import { UserController } from '../controllers/UserController'

const userController = new UserController()

routes.post('/', userController.create)
routes.get('/', userController.findAll)

export default routes