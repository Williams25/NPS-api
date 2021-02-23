import { Router } from 'express'
const routes = Router()

import UserRoutes from './UserRoutes'

routes.use('/users', UserRoutes)

export default routes