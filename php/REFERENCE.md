# MentalitySkillTraining PHP SDK Reference

Complete API reference for the MentalitySkillTraining PHP SDK.


## MentalitySkillTrainingSDK

### Constructor

```php
require_once __DIR__ . '/mentalityskilltraining_sdk.php';

$client = new MentalitySkillTrainingSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MentalitySkillTrainingSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = MentalitySkillTrainingSDK::test();
```


### Instance Methods

#### `Exercis($data = null)`

Create a new `ExercisEntity` instance. Pass `null` for no initial data.

#### `TrainingProgram($data = null)`

Create a new `TrainingProgramEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): MentalitySkillTrainingUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ExercisEntity

```php
$exercis = $client->Exercis();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefits` | `array` | No | Benefits of performing this exercise |
| `category` | `string` | No | Category of mental skill |
| `description` | `string` | No | Detailed description of the exercise |
| `difficulty` | `string` | No | Difficulty level of the exercise |
| `duration` | `int` | No | Exercise duration in minutes |
| `id` | `string` | No | Unique identifier for the exercise |
| `instructions` | `array` | No | Step-by-step instructions |
| `name` | `string` | No | Name of the exercise |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Exercis()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExercisEntity`

Create a new `ExercisEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TrainingProgramEntity

```php
$training_program = $client->TrainingProgram();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Detailed description of the program |
| `duration` | `int` | No | Program duration in weeks |
| `exercises` | `array` | No | Exercise IDs included in the program |
| `id` | `string` | No | Unique identifier for the training program |
| `level` | `string` | No | Skill level required for the program |
| `name` | `string` | No | Name of the training program |
| `objectives` | `array` | No | List of learning objectives |
| `sport` | `string` | No | Sport type the program is designed for |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TrainingProgram()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TrainingProgramEntity`

Create a new `TrainingProgramEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new MentalitySkillTrainingSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

