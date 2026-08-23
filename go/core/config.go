package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "MentalitySkillTraining",
			"slug": "mentality-skill-training",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://melodious-squirrel-e72cff.netlify.app",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"exercis": map[string]any{},
				"training_program": map[string]any{},
			},
		},
		"entity": map[string]any{
			"exercis": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "benefits",
						"short": "Benefits of performing this exercise",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of mental skill",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the exercise",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "difficulty",
						"short": "Difficulty level of the exercise",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration",
						"short": "Exercise duration in minutes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the exercise",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "instructions",
						"short": "Step-by-step instructions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the exercise",
						"type": "`$STRING`",
					},
				},
				"name": "exercis",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "duration",
											"orig": "duration",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/exercises",
								"parts": []any{
									"api",
									"exercises",
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"duration",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"training_program": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Detailed description of the program",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration",
						"short": "Program duration in weeks",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "exercises",
						"short": "Exercise IDs included in the program",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the training program",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "level",
						"short": "Skill level required for the program",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the training program",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "objectives",
						"short": "List of learning objectives",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sport",
						"short": "Sport type the program is designed for",
						"type": "`$STRING`",
					},
				},
				"name": "training_program",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "level",
											"orig": "level",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sport",
											"orig": "sport",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/training-programs",
								"parts": []any{
									"api",
									"training-programs",
								},
								"select": map[string]any{
									"exist": []any{
										"level",
										"sport",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
