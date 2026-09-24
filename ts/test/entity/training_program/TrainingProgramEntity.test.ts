

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed description of the program","t":"`$STRING`","key$":"description","index$":0},"duration":{"a":true,"h":"Duration","n":"duration","r":false,"sh":"Program duration in weeks","t":"`$INTEGER`","key$":"duration","index$":1},"exercises":{"a":true,"h":"Exercises","n":"exercises","r":false,"sh":"Exercise IDs included in the program","t":"`$ARRAY`","key$":"exercises","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the training program","t":"`$STRING`","key$":"id","index$":3},"level":{"a":true,"h":"Level","n":"level","r":false,"sh":"Skill level required for the program","t":"`$STRING`","key$":"level","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the training program","t":"`$STRING`","key$":"name","index$":5},"objectives":{"a":true,"h":"Objectives","n":"objectives","r":false,"sh":"List of learning objectives","t":"`$ARRAY`","key$":"objectives","index$":6},"sport":{"a":true,"h":"Sport","n":"sport","r":false,"sh":"Sport type the program is designed for","t":"`$STRING`","key$":"sport","index$":7}},"id":{"field":"id","name":"id"},"name":"training_program","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/training-programs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"level","or":"level","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"sport","or":"sport","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/training-programs","q":{"exist":["level","sport"]},"r":{},"s":[{"lit":"api"},{"lit":"training-programs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"training_program","name__orig":"training_program","Name":"TrainingProgram","name_":"training_program","name-":"training-program","NAME":"TRAINING_PROGRAM","index$":1}, {"active":true,"entity":"training_program","key$":"BasicTrainingProgramFlow","kind":"basic","name":"BasicTrainingProgramFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"training_program_ref01"}}],"index$":0}]}, 'TrainingProgram', {"GET /api/training-programs":{"protocol":"http","operationId":"getTrainingPrograms","responses":{"200":{"description":"Successful response with list of training programs","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the training program","key$":"id"},"name":{"type":"string","description":"Name of the training program","key$":"name"},"description":{"type":"string","description":"Detailed description of the program","key$":"description"},"sport":{"type":"string","description":"Sport type the program is designed for","key$":"sport"},"level":{"type":"string","enum":["beginner","intermediate","advanced"],"description":"Skill level required for the program","key$":"level"},"duration":{"type":"integer","description":"Program duration in weeks","key$":"duration"},"objectives":{"type":"array","items":{"type":"string"},"description":"List of learning objectives","key$":"objectives"},"exercises":{"type":"array","items":{"type":"string"},"description":"Exercise IDs included in the program","key$":"exercises"}},"x-ref":"#/components/schemas/TrainingProgram","index$":0}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"sport","in":"query","description":"Filter programs by sport type","required":false,"schema":{"type":"string"},"index$":0},{"name":"level","in":"query","description":"Filter programs by skill level (beginner, intermediate, advanced)","required":false,"schema":{"type":"string","enum":["beginner","intermediate","advanced"]},"index$":1}],"securitySource":"unspecified"}})
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
  
