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
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
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
                    "title": "Benefits",
                    "type": "`$ARRAY`",
                    "short": "Benefits of performing this exercise"
                },
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "short": "Category of mental skill"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Detailed description of the exercise"
                },
                {
                    "name": "difficulty",
                    "title": "Difficulty",
                    "type": "`$STRING`",
                    "short": "Difficulty level of the exercise"
                },
                {
                    "name": "duration",
                    "title": "Duration",
                    "type": "`$INTEGER`",
                    "short": "Exercise duration in minutes"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the exercise"
                },
                {
                    "name": "instructions",
                    "title": "Instructions",
                    "type": "`$ARRAY`",
                    "short": "Step-by-step instructions"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name of the exercise"
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
                            "parts": [
                                "api",
                                "exercises"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "duration",
                                        "orig": "duration",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "category",
                                    "duration"
                                ]
                            }
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
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Detailed description of the program"
                },
                {
                    "name": "duration",
                    "title": "Duration",
                    "type": "`$INTEGER`",
                    "short": "Program duration in weeks"
                },
                {
                    "name": "exercises",
                    "title": "Exercises",
                    "type": "`$ARRAY`",
                    "short": "Exercise IDs included in the program"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the training program"
                },
                {
                    "name": "level",
                    "title": "Level",
                    "type": "`$STRING`",
                    "short": "Skill level required for the program"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name of the training program"
                },
                {
                    "name": "objectives",
                    "title": "Objectives",
                    "type": "`$ARRAY`",
                    "short": "List of learning objectives"
                },
                {
                    "name": "sport",
                    "title": "Sport",
                    "type": "`$STRING`",
                    "short": "Sport type the program is designed for"
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
                            "parts": [
                                "api",
                                "training-programs"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "level",
                                        "orig": "level",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sport",
                                        "orig": "sport",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "level",
                                    "sport"
                                ]
                            }
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