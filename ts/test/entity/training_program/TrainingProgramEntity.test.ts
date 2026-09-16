

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


describe('TrainingProgramEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MENTALITY_SKILL_TRAINING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MENTALITY_SKILL_TRAINING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MentalitySkillTrainingSDK.test()
    const ent = testsdk.TrainingProgram()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MENTALITY_SKILL_TRAINING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'training_program.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Detailed description of the program","type":"`$STRING`","index$":0},{"active":true,"name":"duration","req":false,"short":"Program duration in weeks","type":"`$INTEGER`","index$":1},{"active":true,"name":"exercises","req":false,"short":"Exercise IDs included in the program","type":"`$ARRAY`","index$":2},{"active":true,"name":"id","req":false,"short":"Unique identifier for the training program","type":"`$STRING`","index$":3},{"active":true,"name":"level","req":false,"short":"Skill level required for the program","type":"`$STRING`","index$":4},{"active":true,"name":"name","req":false,"short":"Name of the training program","type":"`$STRING`","index$":5},{"active":true,"name":"objectives","req":false,"short":"List of learning objectives","type":"`$ARRAY`","index$":6},{"active":true,"name":"sport","req":false,"short":"Sport type the program is designed for","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"training_program","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"level","orig":"level","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"sport","orig":"sport","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/training-programs","json":"{\"operationId\":\"getTrainingPrograms\",\"parameters\":[{\"description\":\"Filter programs by sport type\",\"in\":\"query\",\"name\":\"sport\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter programs by skill level (beginner, intermediate, advanced)\",\"in\":\"query\",\"name\":\"level\",\"required\":false,\"schema\":{\"enum\":[\"beginner\",\"intermediate\",\"advanced\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the program\",\"type\":\"string\"},\"duration\":{\"description\":\"Program duration in weeks\",\"type\":\"integer\"},\"exercises\":{\"description\":\"Exercise IDs included in the program\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the training program\",\"type\":\"string\"},\"level\":{\"description\":\"Skill level required for the program\",\"enum\":[\"beginner\",\"intermediate\",\"advanced\"],\"type\":\"string\"},\"name\":{\"description\":\"Name of the training program\",\"type\":\"string\"},\"objectives\":{\"description\":\"List of learning objectives\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"sport\":{\"description\":\"Sport type the program is designed for\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of training programs\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/training-programs","segments":[{"lit":"api"},{"lit":"training-programs"}],"select":{"exist":["level","sport"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"training_program","name__orig":"training_program","Name":"TrainingProgram","name_":"training_program","name-":"training-program","NAME":"TRAINING_PROGRAM","index$":1}, {"active":true,"entity":"training_program","key$":"BasicTrainingProgramFlow","kind":"basic","name":"BasicTrainingProgramFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"training_program_ref01"}}],"index$":0}]}, 'TrainingProgram')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let training_program_ref01_data = Object.values(setup.data.existing.training_program)[0] as any

    // LIST
    const training_program_ref01_ent = client.TrainingProgram()
    const training_program_ref01_match: any = {}

    const training_program_ref01_list = (await training_program_ref01_ent.list(training_program_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/training_program/TrainingProgramTestData.json')

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
    ['training_program01','training_program02','training_program03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MENTALITY_SKILL_TRAINING_TEST_TRAINING_PROGRAM_ENTID': idmap,
    'MENTALITY_SKILL_TRAINING_TEST_LIVE': 'FALSE',
    'MENTALITY_SKILL_TRAINING_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MENTALITY_SKILL_TRAINING_TEST_TRAINING_PROGRAM_ENTID']

  const live = 'TRUE' === env.MENTALITY_SKILL_TRAINING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MENTALITY_SKILL_TRAINING_TEST_TRAINING_PROGRAM_ENTID']
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
  
