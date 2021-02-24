import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()

import createConnection from'./database'
import express from 'express'
import morgan from 'morgan'
import routes from './routes'
import { error } from './middlewares/index'

createConnection()
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use(routes)
error(app)

export { app }