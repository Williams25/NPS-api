import { Survey } from '../models/Survey'
import { EntityRepository, getRepository, Repository, Like } from 'typeorm'

interface createInterface {
  title: string,
  description: string
}

interface updateInterface extends createInterface {
  id: number
}

@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey> {

  static repository() {
    return getRepository(Survey)
  }

  static async create({ title, description }: createInterface) {
    const user = SurveyRepository.repository().create({ title, description })
    return await SurveyRepository.repository().save(user)
  }

  static async findOne(campo: string, value: string) {
    return await SurveyRepository.repository().findOne({ [campo]: Like(`%${[value]}%`) })
  }

  static async findAll() {
    return await SurveyRepository.repository().find()
  }
}