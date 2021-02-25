import { Request, Response } from 'express'
import { UserRepository } from '../repository/UserRepository'
import { SurveyRepository } from '../repository/SurveyRepository'
import { SurveyUserRepository } from '../repository/SurveyUserRepository'
import SendMailServices from '../services/SendMailServices'
import { resolve } from 'path'

export class SendMailController {

  async execute(req: Request, res: Response) {
    const { email, survey_id } = req.body

    const userAlreadyExists = await UserRepository.findOne('email', email)
    if (!userAlreadyExists) return res.status(400).json({ message: 'Email não disponivel' })

    const surveyAlreadyExists = await SurveyRepository.findOne('id', survey_id)
    if (!surveyAlreadyExists) return res.status(400).json({ message: 'Pesquisa não disponivel' })

    const surveyUserAlreadyExists = await SurveyUserRepository.findOne({
      where: [
        { user_id: userAlreadyExists.id },
        { value: null }
      ],
      relations: [
        'user',
        'survey'
      ]
    })

    const variables = {
      name: userAlreadyExists.name,
      title: surveyAlreadyExists.title,
      description: surveyAlreadyExists.description,
      id: userAlreadyExists.id,
      link: process.env.URL_MAIL
    }
    const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs')

    if (surveyUserAlreadyExists) {
      SendMailServices.execute(email, surveyAlreadyExists.title, variables, npsPath)
      return res.status(200).json(surveyUserAlreadyExists)
    }

    await SurveyUserRepository.create({ survey_id: surveyAlreadyExists.id, user_id: userAlreadyExists.id })
      .then(survey => {
        SendMailServices.execute(email, surveyAlreadyExists.title, variables, npsPath)

        return res.status(201).json(survey)
      }).catch(error => {
        res.status(400).json({ message: error.message })
      })
  }

  async findAll(req: Request, res: Response) {
    const survey = await SurveyUserRepository.findAll()
    return res.status(200).json(survey)
  }
}