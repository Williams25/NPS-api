import { Request, response, Response } from 'express'
import { repository } from '../repository/UserRepository'

export class UserController {

  async create(req: Request, res: Response) {
    const { name, email } = req.body

    const userAlreadyExists = await repository().findOne({ email })

    if (userAlreadyExists) return res.status(400).json({ message: 'Email não disponivel' })

    const user = repository().create({ name, email })
    await repository().save(user).then(() => {
      res.status(201).json(user)
    }).catch((error) => {
      res.status(400).json({ error })
    })
  }

  async findAll(req: Request, res: Response) {
    const users = await repository().find()
    return res.status(200).json(users)
  }
}