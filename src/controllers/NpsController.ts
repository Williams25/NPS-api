import { Request, Response } from 'express'
import { SurveyUserRepository } from '../repository/SurveyUserRepository'
import { Not, IsNull } from 'typeorm'

export class NpsController {

  async execute(req: Request, res: Response) {
    const { survey_id } = req.params

    const surveyUser = await SurveyUserRepository.findAll({ survey_id, value: Not(IsNull()) })

    const detractor = surveyUser.filter(survey => {
      return (survey.value >= 0 && survey.value <= 6)
    }).length

    const passives = surveyUser.filter(survey => {
      return (survey.value >= 7 && survey.value <= 8)
    }).length

    const promoters = surveyUser.filter(survey => {
      return (survey.value >= 9 && survey.value <= 10)
    }).length

    const totalAnswers = surveyUser.length

    let calculate = ((promoters - detractor) / totalAnswers) * 100
    calculate = Number(calculate.toFixed(2))

    return res.status(200).json({
      detractor,
      passives,
      promoters,
      totalAnswers,
      nps: calculate,
      surveyUser
    })
  }
}