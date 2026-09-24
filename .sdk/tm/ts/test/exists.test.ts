
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MentalitySkillTrainingSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MentalitySkillTrainingSDK.test()
    equal(testsdk instanceof MentalitySkillTrainingSDK, true,
      'MentalitySkillTrainingSDK.test() must return a client synchronously')
  })

})
