# MentalitySkillTraining SDK configuration

module MentalitySkillTrainingConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "MentalitySkillTraining",
        "slug" => "mentality-skill-training",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://melodious-squirrel-e72cff.netlify.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "exercis" => {},
          "training_program" => {},
        },
      },
      "entity" => {
        "exercis" => {
          "fields" => [
            {
              "name" => "benefits",
              "short" => "Benefits of performing this exercise",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "category",
              "short" => "Category of mental skill",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Detailed description of the exercise",
              "type" => "`$STRING`",
            },
            {
              "name" => "difficulty",
              "short" => "Difficulty level of the exercise",
              "type" => "`$STRING`",
            },
            {
              "name" => "duration",
              "short" => "Exercise duration in minutes",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the exercise",
              "type" => "`$STRING`",
            },
            {
              "name" => "instructions",
              "short" => "Step-by-step instructions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "short" => "Name of the exercise",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "exercis",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "duration",
                        "orig" => "duration",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/exercises",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "exercises",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "category",
                      "duration",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "exercises",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "training_program" => {
          "fields" => [
            {
              "name" => "description",
              "short" => "Detailed description of the program",
              "type" => "`$STRING`",
            },
            {
              "name" => "duration",
              "short" => "Program duration in weeks",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "exercises",
              "short" => "Exercise IDs included in the program",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the training program",
              "type" => "`$STRING`",
            },
            {
              "name" => "level",
              "short" => "Skill level required for the program",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the training program",
              "type" => "`$STRING`",
            },
            {
              "name" => "objectives",
              "short" => "List of learning objectives",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "sport",
              "short" => "Sport type the program is designed for",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "training_program",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "level",
                        "orig" => "level",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sport",
                        "orig" => "sport",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/training-programs",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "training-programs",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "level",
                      "sport",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "training-programs",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MentalitySkillTrainingFeatures.make_feature(name)
  end
end
