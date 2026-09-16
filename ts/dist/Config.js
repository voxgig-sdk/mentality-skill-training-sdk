"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'MentalitySkillTraining',
        slug: "mentality-skill-training",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://melodious-squirrel-e72cff.netlify.app",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            exercis: {},
            training_program: {},
        }
    };
    entity = {
        "exercis": {
            "fields": [
                {
                    "name": "benefits",
                    "short": "Benefits of performing this exercise",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "category",
                    "short": "Category of mental skill",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Detailed description of the exercise",
                    "type": "`$STRING`"
                },
                {
                    "name": "difficulty",
                    "short": "Difficulty level of the exercise",
                    "type": "`$STRING`"
                },
                {
                    "name": "duration",
                    "short": "Exercise duration in minutes",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the exercise",
                    "type": "`$STRING`"
                },
                {
                    "name": "instructions",
                    "short": "Step-by-step instructions",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "short": "Name of the exercise",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "exercis",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "duration",
                                        "orig": "duration",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/exercises",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "exercises"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "category",
                                    "duration"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "exercises"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "training_program": {
            "fields": [
                {
                    "name": "description",
                    "short": "Detailed description of the program",
                    "type": "`$STRING`"
                },
                {
                    "name": "duration",
                    "short": "Program duration in weeks",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "exercises",
                    "short": "Exercise IDs included in the program",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the training program",
                    "type": "`$STRING`"
                },
                {
                    "name": "level",
                    "short": "Skill level required for the program",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the training program",
                    "type": "`$STRING`"
                },
                {
                    "name": "objectives",
                    "short": "List of learning objectives",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "sport",
                    "short": "Sport type the program is designed for",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "training_program",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "level",
                                        "orig": "level",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "sport",
                                        "orig": "sport",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/training-programs",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "training-programs"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "level",
                                    "sport"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "training-programs"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map