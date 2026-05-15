
import { Context } from './Context'


class MentalitySkillTrainingError extends Error {

  isMentalitySkillTrainingError = true

  sdk = 'MentalitySkillTraining'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MentalitySkillTrainingError
}

