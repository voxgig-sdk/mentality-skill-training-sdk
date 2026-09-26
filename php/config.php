<?php
declare(strict_types=1);

// MentalitySkillTraining SDK configuration

class MentalitySkillTrainingConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "MentalitySkillTraining",
                "slug" => "mentality-skill-training",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://melodious-squirrel-e72cff.netlify.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "exercise" => [],
                    "training_program" => [],
                ],
            ],
            "entity" => [
        'exercise' => [
          'fields' => [
            [
              'name' => 'benefits',
              'title' => 'Benefits',
              'type' => '`$ARRAY`',
              'short' => 'Benefits of performing this exercise',
            ],
            [
              'name' => 'category',
              'title' => 'Category',
              'type' => '`$STRING`',
              'short' => 'Category of mental skill',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Detailed description of the exercise',
            ],
            [
              'name' => 'difficulty',
              'title' => 'Difficulty',
              'type' => '`$STRING`',
              'short' => 'Difficulty level of the exercise',
            ],
            [
              'name' => 'duration',
              'title' => 'Duration',
              'type' => '`$INTEGER`',
              'short' => 'Exercise duration in minutes',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the exercise',
            ],
            [
              'name' => 'instructions',
              'title' => 'Instructions',
              'type' => '`$ARRAY`',
              'short' => 'Step-by-step instructions',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Name of the exercise',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'exercise',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/exercises',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'exercises',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'exercises',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'duration',
                        'orig' => 'duration',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'duration',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'training_program' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Detailed description of the program',
            ],
            [
              'name' => 'duration',
              'title' => 'Duration',
              'type' => '`$INTEGER`',
              'short' => 'Program duration in weeks',
            ],
            [
              'name' => 'exercises',
              'title' => 'Exercises',
              'type' => '`$ARRAY`',
              'short' => 'Exercise IDs included in the program',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the training program',
            ],
            [
              'name' => 'level',
              'title' => 'Level',
              'type' => '`$STRING`',
              'short' => 'Skill level required for the program',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Name of the training program',
            ],
            [
              'name' => 'objectives',
              'title' => 'Objectives',
              'type' => '`$ARRAY`',
              'short' => 'List of learning objectives',
            ],
            [
              'name' => 'sport',
              'title' => 'Sport',
              'type' => '`$STRING`',
              'short' => 'Sport type the program is designed for',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'training_program',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/training-programs',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'training-programs',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'training-programs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'level',
                        'orig' => 'level',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sport',
                        'orig' => 'sport',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'level',
                      'sport',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MentalitySkillTrainingFeatures::make_feature($name);
    }
}
