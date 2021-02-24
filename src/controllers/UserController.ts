import { Request, response, Response } from 'express'
import { UserRepository } from '../repository/UserRepository'

export class UserController {

  async create(req: Request, res: Response) {
    const { name, email } = req.body

    const userAlreadyExists = await UserRepository.findOne('email', email)

    if (userAlreadyExists) return res.status(400).json({ message: 'Email não disponivel' })
    
    UserRepository.create({ name, email}).then(user => {
      res.status(201).json(user)
    }).catch(error => {
      res.status(400).json({ message: error.message })
    })
  }

  async findAll(req: Request, res: Response) {
    const users = await UserRepository.findAll()
    return res.status(200).json(users)
  }
}