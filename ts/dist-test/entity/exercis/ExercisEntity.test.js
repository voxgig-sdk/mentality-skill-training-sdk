"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ExercisEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MENTALITY_SKILL_TRAINING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MENTALITY_SKILL_TRAINING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MentalitySkillTrainingSDK.test();
        const ent = testsdk.Exercis();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MENTALITY_SKILL_TRAINING_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'exercis.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "benefits": { "a": true, "h": "Benefits", "n": "benefits", "r": false, "sh": "Benefits of performing this exercise", "t": "`$ARRAY`", "key$": "benefits", "index$": 0 }, "category": { "a": true, "h": "Category", "n": "category", "r": false, "sh": "Category of mental skill", "t": "`$STRING`", "key$": "category", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Detailed description of the exercise", "t": "`$STRING`", "key$": "description", "index$": 2 }, "difficulty": { "a": true, "h": "Difficulty", "n": "difficulty", "r": false, "sh": "Difficulty level of the exercise", "t": "`$STRING`", "key$": "difficulty", "index$": 3 }, "duration": { "a": true, "h": "Duration", "n": "duration", "r": false, "sh": "Exercise duration in minutes", "t": "`$INTEGER`", "key$": "duration", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the exercise", "t": "`$STRING`", "key$": "id", "index$": 5 }, "instructions": { "a": true, "h": "Instructions", "n": "instructions", "r": false, "sh": "Step-by-step instructions", "t": "`$ARRAY`", "key$": "instructions", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the exercise", "t": "`$STRING`", "key$": "name", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "exercis", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/exercises", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "category", "or": "category", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "duration", "or": "duration", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/exercises", "q": { "exist": ["category", "duration"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "exercises" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "exercis", "name__orig": "exercis", "Name": "Exercis", "name_": "exercis", "name-": "exercis", "NAME": "EXERCIS", "index$": 0 }, { "active": true, "entity": "exercis", "key$": "BasicExercisFlow", "kind": "basic", "name": "BasicExercisFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "exercis_ref01" } }], "index$": 0 }] }, 'Exercis', { "GET /api/exercises": { "protocol": "http", "operationId": "getExercises", "responses": { "200": { "description": "Successful response with list of exercises", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "string", "description": "Unique identifier for the exercise", "key$": "id" }, "name": { "type": "string", "description": "Name of the exercise", "key$": "name" }, "description": { "type": "string", "description": "Detailed description of the exercise", "key$": "description" }, "category": { "type": "string", "enum": ["focus", "visualization", "confidence", "stress-management"], "description": "Category of mental skill", "key$": "category" }, "duration": { "type": "integer", "description": "Exercise duration in minutes", "key$": "duration" }, "instructions": { "type": "array", "items": { "type": "string" }, "description": "Step-by-step instructions", "key$": "instructions" }, "benefits": { "type": "array", "items": { "type": "string" }, "description": "Benefits of performing this exercise", "key$": "benefits" }, "difficulty": { "type": "string", "enum": ["easy", "moderate", "challenging"], "description": "Difficulty level of the exercise", "key$": "difficulty" } }, "x-ref": "#/components/schemas/Exercise", "index$": 0 } } } } }, "400": { "description": "Bad request" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "category", "in": "query", "description": "Filter exercises by category (focus, visualization, confidence, stress-management)", "required": false, "schema": { "type": "string", "enum": ["focus", "visualization", "confidence", "stress-management"] }, "index$": 0 }, { "name": "duration", "in": "query", "description": "Filter exercises by duration in minutes", "required": false, "schema": { "type": "integer", "minimum": 1 }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let exercis_ref01_data = Object.values(setup.data.existing.exercis)[0];
        // LIST
        const exercis_ref01_ent = client.Exercis();
        const exercis_ref01_match = {};
        const exercis_ref01_list = (await exercis_ref01_ent.list(exercis_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/exercis/ExercisTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MentalitySkillTrainingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['exercis01', 'exercis02', 'exercis03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MENTALITY_SKILL_TRAINING_TEST_EXERCIS_ENTID': idmap,
        'MENTALITY_SKILL_TRAINING_TEST_LIVE': 'FALSE',
        'MENTALITY_SKILL_TRAINING_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['MENTALITY_SKILL_TRAINING_TEST_EXERCIS_ENTID'];
    const live = 'TRUE' === env.MENTALITY_SKILL_TRAINING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MENTALITY_SKILL_TRAINING_TEST_EXERCIS_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MentalitySkillTrainingSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ExercisEntity.test.js.map