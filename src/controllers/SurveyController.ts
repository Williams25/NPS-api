import { Request, response, Response } from 'express'
import { SurveyRepository } from '../repository/SurveyRepository '

export class SurveyController {

  async create(req: Request, res: Response) {
    const { title, description } = req.body

    await SurveyRepository.create({ title, description }).then(survey => {
      return res.status(201).json(survey)
    }).catch(error => {
      res.status(400).json({ message: error.message })
    })
  }

  async findAll(req: Request, res: Response) {
    const survey = await SurveyRepository.findAll()
    return res.status(200).json(survey)
  }
}