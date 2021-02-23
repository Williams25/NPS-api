import { User } from '../models/User'
import { getRepository } from 'typeorm'

export const repository = () => getRepository(User)