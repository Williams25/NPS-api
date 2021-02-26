import { Request, Response } from 'express'
import { SurveyUserRepository } from '../repository/SurveyUserRepository'

export class AnswerController {
  async execute(req: Request, res: Response) {
    const { value } = req.params
    const { u } = req.query

    const surveyUser = await SurveyUserRepository.findOne({
      id: u
    })

    if (!surveyUser) return res.status(400).json({ message: 'Survey user não disponivel' })

    surveyUser.value = Number(value)

    await SurveyUserRepository.update(surveyUser).then(survey => {
      return res.send(`
        <h1>Obrigado pela resposta</h1>
      `)
    }).catch(error => {
      res.status(400).json({ message: error.message })
    })
  }
}