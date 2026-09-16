

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ExercisEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MENTALITY_SKILL_TRAINING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MENTALITY_SKILL_TRAINING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MentalitySkillTrainingSDK.test()
    const ent = testsdk.Exercis()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MENTALITY_SKILL_TRAINING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'exercis.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"benefits","req":false,"short":"Benefits of performing this exercise","type":"`$ARRAY`","index$":0},{"active":true,"name":"category","req":false,"short":"Category of mental skill","type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"short":"Detailed description of the exercise","type":"`$STRING`","index$":2},{"active":true,"name":"difficulty","req":false,"short":"Difficulty level of the exercise","type":"`$STRING`","index$":3},{"active":true,"name":"duration","req":false,"short":"Exercise duration in minutes","type":"`$INTEGER`","index$":4},{"active":true,"name":"id","req":false,"short":"Unique identifier for the exercise","type":"`$STRING`","index$":5},{"active":true,"name":"instructions","req":false,"short":"Step-by-step instructions","type":"`$ARRAY`","index$":6},{"active":true,"name":"name","req":false,"short":"Name of the exercise","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"exercis","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"category","orig":"category","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"duration","orig":"duration","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/exercises","json":"{\"operationId\":\"getExercises\",\"parameters\":[{\"description\":\"Filter exercises by category (focus, visualization, confidence, stress-management)\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"enum\":[\"focus\",\"visualization\",\"confidence\",\"stress-management\"],\"type\":\"string\"}},{\"description\":\"Filter exercises by duration in minutes\",\"in\":\"query\",\"name\":\"duration\",\"required\":false,\"schema\":{\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"benefits\":{\"description\":\"Benefits of performing this exercise\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"category\":{\"description\":\"Category of mental skill\",\"enum\":[\"focus\",\"visualization\",\"confidence\",\"stress-management\"],\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the exercise\",\"type\":\"string\"},\"difficulty\":{\"description\":\"Difficulty level of the exercise\",\"enum\":[\"easy\",\"moderate\",\"challenging\"],\"type\":\"string\"},\"duration\":{\"description\":\"Exercise duration in minutes\",\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the exercise\",\"type\":\"string\"},\"instructions\":{\"description\":\"Step-by-step instructions\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"Name of the exercise\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of exercises\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/exercises","segments":[{"lit":"api"},{"lit":"exercises"}],"select":{"exist":["category","duration"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"exercis","name__orig":"exercis","Name":"Exercis","name_":"exercis","name-":"exercis","NAME":"EXERCIS","index$":0}, {"active":true,"entity":"exercis","key$":"BasicExercisFlow","kind":"basic","name":"BasicExercisFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"exercis_ref01"}}],"index$":0}]}, 'Exercis')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let exercis_ref01_data = Object.values(setup.data.existing.exercis)[0] as any

    // LIST
    const exercis_ref01_ent = client.Exercis()
    const exercis_ref01_match: any = {}

    const exercis_ref01_list = (await exercis_ref01_ent.list(exercis_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/exercis/ExercisTestData.json')

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
    ['exercis01','exercis02','exercis03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MENTALITY_SKILL_TRAINING_TEST_EXERCIS_ENTID': idmap,
    'MENTALITY_SKILL_TRAINING_TEST_LIVE': 'FALSE',
    'MENTALITY_SKILL_TRAINING_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MENTALITY_SKILL_TRAINING_TEST_EXERCIS_ENTID']

  const live = 'TRUE' === env.MENTALITY_SKILL_TRAINING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MENTALITY_SKILL_TRAINING_TEST_EXERCIS_ENTID']
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
  
