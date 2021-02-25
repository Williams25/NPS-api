import { SurveyUser } from '../models/SurveyUser'
import { EntityRepository, getRepository, Repository, Like } from 'typeorm'

interface createInterface {
  user_id:number
  survey_id:number 
  value?:number
}

interface updateInterface extends createInterface {
  id: number
}

@EntityRepository(SurveyUser)
export class SurveyUserRepository extends Repository<SurveyUser> {

  static repository() {
    return getRepository(SurveyUser)
  }

  static async create({ user_id, survey_id, value }: createInterface) {
    const user = SurveyUserRepository.repository().create({ user_id, survey_id, value })
    return await SurveyUserRepository.repository().save(user)
  }

  static async findOne(param: any) {
    return await SurveyUserRepository.repository().findOne({ ...param })
  }

  static async findAll() {
    return await SurveyUserRepository.repository().find()
  }
}