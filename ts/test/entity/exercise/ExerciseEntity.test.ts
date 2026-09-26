

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MentalitySkillTrainingSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ExerciseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MENTALITY_SKILL_TRAINING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MENTALITY_SKILL_TRAINING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MentalitySkillTrainingSDK.test()
    const ent = testsdk.Exercise()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MENTALITY_SKILL_TRAINING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'exercise.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"benefits":{"a":true,"h":"Benefits","n":"benefits","r":false,"sh":"Benefits of performing this exercise","t":"`$ARRAY`","key$":"benefits","index$":0},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Category of mental skill","t":"`$STRING`","key$":"category","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed description of the exercise","t":"`$STRING`","key$":"description","index$":2},"difficulty":{"a":true,"h":"Difficulty","n":"difficulty","r":false,"sh":"Difficulty level of the exercise","t":"`$STRING`","key$":"difficulty","index$":3},"duration":{"a":true,"h":"Duration","n":"duration","r":false,"sh":"Exercise duration in minutes","t":"`$INTEGER`","key$":"duration","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the exercise","t":"`$STRING`","key$":"id","index$":5},"instructions":{"a":true,"h":"Instructions","n":"instructions","r":false,"sh":"Step-by-step instructions","t":"`$ARRAY`","key$":"instructions","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the exercise","t":"`$STRING`","key$":"name","index$":7}},"id":{"field":"id","name":"id"},"name":"exercise","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/exercises","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"duration","or":"duration","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/exercises","q":{"exist":["category","duration"]},"r":{},"s":[{"lit":"api"},{"lit":"exercises"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"exercise","name__orig":"exercise","Name":"Exercise","name_":"exercise","name-":"exercise","NAME":"EXERCISE","index$":0}, {"active":true,"entity":"exercise","key$":"BasicExerciseFlow","kind":"basic","name":"BasicExerciseFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"exercise_ref01"}}],"index$":0}]}, 'Exercise', {"GET /api/exercises":{"protocol":"http","operationId":"getExercises","responses":{"200":{"description":"Successful response with list of exercises","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the exercise","key$":"id"},"name":{"type":"string","description":"Name of the exercise","key$":"name"},"description":{"type":"string","description":"Detailed description of the exercise","key$":"description"},"category":{"type":"string","enum":["focus","visualization","confidence","stress-management"],"description":"Category of mental skill","key$":"category"},"duration":{"type":"integer","description":"Exercise duration in minutes","key$":"duration"},"instructions":{"type":"array","items":{"type":"string"},"description":"Step-by-step instructions","key$":"instructions"},"benefits":{"type":"array","items":{"type":"string"},"description":"Benefits of performing this exercise","key$":"benefits"},"difficulty":{"type":"string","enum":["easy","moderate","challenging"],"description":"Difficulty level of the exercise","key$":"difficulty"}},"x-ref":"#/components/schemas/Exercise","index$":0}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"category","in":"query","description":"Filter exercises by category (focus, visualization, confidence, stress-management)","required":false,"schema":{"type":"string","enum":["focus","visualization","confidence","stress-management"]},"index$":0},{"name":"duration","in":"query","description":"Filter exercises by duration in minutes","required":false,"schema":{"type":"integer","minimum":1},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let exercise_ref01_data = Object.values(setup.data.existing.exercise)[0] as any

    // LIST
    const exercise_ref01_ent = client.Exercise()
    const exercise_ref01_match: any = {}

    const exercise_ref01_list = (await exercise_ref01_ent.list(exercise_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/exercise/ExerciseTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MentalitySkillTrainingSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['exercise01','exercise02','exercise03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MENTALITY_SKILL_TRAINING_TEST_EXERCISE_ENTID': idmap,
    'MENTALITY_SKILL_TRAINING_TEST_LIVE': 'FALSE',
    'MENTALITY_SKILL_TRAINING_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MENTALITY_SKILL_TRAINING_TEST_EXERCISE_ENTID']

  const live = 'TRUE' === env.MENTALITY_SKILL_TRAINING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MENTALITY_SKILL_TRAINING_TEST_EXERCISE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MentalitySkillTrainingSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MENTALITY_SKILL_TRAINING_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
