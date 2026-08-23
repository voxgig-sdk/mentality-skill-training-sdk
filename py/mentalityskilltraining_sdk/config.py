# MentalitySkillTraining SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://melodious-squirrel-e72cff.netlify.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "exercis": {},
                "training_program": {},
            },
        },
        "entity": {
      "exercis": {
        "fields": [
          {
            "name": "benefits",
            "short": "Benefits of performing this exercise",
            "type": "`$ARRAY`",
          },
          {
            "name": "category",
            "short": "Category of mental skill",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Detailed description of the exercise",
            "type": "`$STRING`",
          },
          {
            "name": "difficulty",
            "short": "Difficulty level of the exercise",
            "type": "`$STRING`",
          },
          {
            "name": "duration",
            "short": "Exercise duration in minutes",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the exercise",
            "type": "`$STRING`",
          },
          {
            "name": "instructions",
            "short": "Step-by-step instructions",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "short": "Name of the exercise",
            "type": "`$STRING`",
          },
        ],
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "duration",
                      "orig": "duration",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/exercises",
                "parts": [
                  "api",
                  "exercises",
                ],
                "select": {
                  "exist": [
                    "category",
                    "duration",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "short": "Detailed description of the program",
            "type": "`$STRING`",
          },
          {
            "name": "duration",
            "short": "Program duration in weeks",
            "type": "`$INTEGER`",
          },
          {
            "name": "exercises",
            "short": "Exercise IDs included in the program",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the training program",
            "type": "`$STRING`",
          },
          {
            "name": "level",
            "short": "Skill level required for the program",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the training program",
            "type": "`$STRING`",
          },
          {
            "name": "objectives",
            "short": "List of learning objectives",
            "type": "`$ARRAY`",
          },
          {
            "name": "sport",
            "short": "Sport type the program is designed for",
            "type": "`$STRING`",
          },
        ],
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sport",
                      "orig": "sport",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/training-programs",
                "parts": [
                  "api",
                  "training-programs",
                ],
                "select": {
                  "exist": [
                    "level",
                    "sport",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
