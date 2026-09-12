
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'MentalitySkillTraining',
        slug: "mentality-skill-training",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://melodious-squirrel-e72cff.netlify.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      exercis: {
      },

      training_program: {
      },

    }
  }


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
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

