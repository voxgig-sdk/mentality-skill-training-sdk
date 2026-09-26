# MentalitySkillTraining SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "MentalitySkillTraining",
            "slug": "mentality-skill-training",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://melodious-squirrel-e72cff.netlify.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "exercise": {},
                "training_program": {},
            },
        },
        "entity": {
      "exercise": {
        "fields": [
          {
            "name": "benefits",
            "title": "Benefits",
            "type": "`$ARRAY`",
            "short": "Benefits of performing this exercise",
          },
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
            "short": "Category of mental skill",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the exercise",
          },
          {
            "name": "difficulty",
            "title": "Difficulty",
            "type": "`$STRING`",
            "short": "Difficulty level of the exercise",
          },
          {
            "name": "duration",
            "title": "Duration",
            "type": "`$INTEGER`",
            "short": "Exercise duration in minutes",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the exercise",
          },
          {
            "name": "instructions",
            "title": "Instructions",
            "type": "`$ARRAY`",
            "short": "Step-by-step instructions",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the exercise",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "exercise",
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
                    "lit": "api",
                  },
                  {
                    "lit": "exercises",
                  },
                ],
                "parts": [
                  "api",
                  "exercises",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "duration",
                      "orig": "duration",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "category",
                    "duration",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "training_program": {
        "fields": [
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the program",
          },
          {
            "name": "duration",
            "title": "Duration",
            "type": "`$INTEGER`",
            "short": "Program duration in weeks",
          },
          {
            "name": "exercises",
            "title": "Exercises",
            "type": "`$ARRAY`",
            "short": "Exercise IDs included in the program",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the training program",
          },
          {
            "name": "level",
            "title": "Level",
            "type": "`$STRING`",
            "short": "Skill level required for the program",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the training program",
          },
          {
            "name": "objectives",
            "title": "Objectives",
            "type": "`$ARRAY`",
            "short": "List of learning objectives",
          },
          {
            "name": "sport",
            "title": "Sport",
            "type": "`$STRING`",
            "short": "Sport type the program is designed for",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "api",
                  },
                  {
                    "lit": "training-programs",
                  },
                ],
                "parts": [
                  "api",
                  "training-programs",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "level",
                      "orig": "level",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "sport",
                      "orig": "sport",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "level",
                    "sport",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
