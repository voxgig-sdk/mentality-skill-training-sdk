# MentalitySkillTraining Python SDK Reference

Complete API reference for the MentalitySkillTraining Python SDK.


## MentalitySkillTrainingSDK

### Constructor

```python
from mentalityskilltraining_sdk import MentalitySkillTrainingSDK

client = MentalitySkillTrainingSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MentalitySkillTrainingSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = MentalitySkillTrainingSDK.test()
```


### Instance Methods

#### `Exercis(data=None)`

Create a new `ExercisEntity` instance. Pass `None` for no initial data.

#### `TrainingProgram(data=None)`

Create a new `TrainingProgramEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ExercisEntity

```python
exercis = client.Exercis()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit` | `list` | No |  |
| `category` | `str` | No |  |
| `description` | `str` | No |  |
| `difficulty` | `str` | No |  |
| `duration` | `int` | No |  |
| `id` | `str` | No |  |
| `instruction` | `list` | No |  |
| `name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Exercis().list()
for exercis in results:
    print(exercis)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExercisEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TrainingProgramEntity

```python
training_program = client.TrainingProgram()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `duration` | `int` | No |  |
| `exercis` | `list` | No |  |
| `id` | `str` | No |  |
| `level` | `str` | No |  |
| `name` | `str` | No |  |
| `objectif` | `list` | No |  |
| `sport` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TrainingProgram().list()
for training_program in results:
    print(training_program)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrainingProgramEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = MentalitySkillTrainingSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

