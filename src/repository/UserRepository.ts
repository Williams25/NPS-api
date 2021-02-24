import { User } from '../models/User'
import { EntityRepository, getRepository, Repository, Like } from 'typeorm'

interface createInterface {
  name: string,
  email: string
}

interface updateInterface extends createInterface {
  id: number
}

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  constructor() {
    super()
  }

  static repository() {
    return getRepository(User)
  }

  static async create({ name, email }: createInterface) {
    const user = UserRepository.repository().create({ name, email })
    return await UserRepository.repository().save(user)
  }

  static async findOne(campo: string, value: string) {
    return await UserRepository.repository().findOne({ [campo]: Like(`%${[value]}%`) })
  }

  static async findAll() {
    return await UserRepository.repository().find()
  }
}