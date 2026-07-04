# MentalitySkillTraining TypeScript SDK Reference

Complete API reference for the MentalitySkillTraining TypeScript SDK.


## MentalitySkillTrainingSDK

### Constructor

```ts
new MentalitySkillTrainingSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MentalitySkillTrainingSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = MentalitySkillTrainingSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `MentalitySkillTrainingSDK` instance in test mode.


### Instance Methods

#### `Exercis(data?: object)`

Create a new `Exercis` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExercisEntity` instance.

#### `TrainingProgram(data?: object)`

Create a new `TrainingProgram` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrainingProgramEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `MentalitySkillTrainingSDK.test()`.

**Returns:** `MentalitySkillTrainingSDK` instance in test mode.


---

## ExercisEntity

```ts
const exercis = client.Exercis()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `benefit` | ``$ARRAY`` | No |  |
| `category` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `difficulty` | ``$STRING`` | No |  |
| `duration` | ``$INTEGER`` | No |  |
| `id` | ``$STRING`` | No |  |
| `instruction` | ``$ARRAY`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Exercis().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExercisEntity` instance with the same client and
options.

#### `client()`

Return the parent `MentalitySkillTrainingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrainingProgramEntity

```ts
const training_program = client.TrainingProgram()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | ``$STRING`` | No |  |
| `duration` | ``$INTEGER`` | No |  |
| `exercis` | ``$ARRAY`` | No |  |
| `id` | ``$STRING`` | No |  |
| `level` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `objectif` | ``$ARRAY`` | No |  |
| `sport` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TrainingProgram().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrainingProgramEntity` instance with the same client and
options.

#### `client()`

Return the parent `MentalitySkillTrainingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new MentalitySkillTrainingSDK({
  feature: {
    test: { active: true },
  }
})
```

