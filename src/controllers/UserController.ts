import { Request, response, Response } from 'express'
import { UserRepository } from '../repository/UserRepository'
import * as yup from 'yup'

export class UserController {

  async create(req: Request, res: Response) {
    const { name, email } = req.body

    const schema = yup.object().shape({
      name: yup.string().required('Name obrigatorio'),
      email: yup.string().email().required('Email obrigatorio'),
    })

    try {
      await schema.validate(req.body, { abortEarly: false })
    } catch (error) {
      return res.status(400).json(error.inner)
    }

    const userAlreadyExists = await UserRepository.findOne('email', email)

    if (userAlreadyExists) return res.status(400).json({ message: 'Email não disponivel' })

    UserRepository.create({ name, email }).then(user => {
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