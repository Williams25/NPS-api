import 'reflect-metadata'
import './database'
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import morgan from 'morgan'
import routes from './routes'
import { error } from './middlewares/index'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use(routes)
error(app)

app.listen(process.env.PORT || 3333, () => console.log(`http://localhost:${process.env.PORT || 3333}`))