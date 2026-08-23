# MentalitySkillTraining Ruby SDK Reference

Complete API reference for the MentalitySkillTraining Ruby SDK.


## MentalitySkillTrainingSDK

### Constructor

```ruby
require_relative 'MentalitySkillTraining_sdk'

client = MentalitySkillTrainingSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MentalitySkillTrainingSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = MentalitySkillTrainingSDK.test
```


### Instance Methods

#### `Exercis(data = nil)`

Create a new `Exercis` entity instance. Pass `nil` for no initial data.

#### `TrainingProgram(data = nil)`

Create a new `TrainingProgram` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ExercisEntity

```ruby
exercis = client.Exercis
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefits` | `Array` | No | Benefits of performing this exercise |
| `category` | `String` | No | Category of mental skill |
| `description` | `String` | No | Detailed description of the exercise |
| `difficulty` | `String` | No | Difficulty level of the exercise |
| `duration` | `Integer` | No | Exercise duration in minutes |
| `id` | `String` | No | Unique identifier for the exercise |
| `instructions` | `Array` | No | Step-by-step instructions |
| `name` | `String` | No | Name of the exercise |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Exercis.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ExercisEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TrainingProgramEntity

```ruby
training_program = client.TrainingProgram
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No | Detailed description of the program |
| `duration` | `Integer` | No | Program duration in weeks |
| `exercises` | `Array` | No | Exercise IDs included in the program |
| `id` | `String` | No | Unique identifier for the training program |
| `level` | `String` | No | Skill level required for the program |
| `name` | `String` | No | Name of the training program |
| `objectives` | `Array` | No | List of learning objectives |
| `sport` | `String` | No | Sport type the program is designed for |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TrainingProgram.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TrainingProgramEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = MentalitySkillTrainingSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

