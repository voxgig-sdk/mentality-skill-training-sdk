
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MentalitySkillTrainingSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await MentalitySkillTrainingSDK.test()
    equal(null !== testsdk, true)
  })

})
