# MentalitySkillTraining SDK

Mental skills training resources and structured programs for athletes

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Mentality Skill Training

The Mentality Skill Training API exposes resources focused on improving the mental side of athletic performance — concentration, composure, visualisation, and other cognitive skills that complement physical training. It is catalogued on [Free Public APIs](https://freepublicapis.com/mentality-skill-training) and served from a small Netlify-hosted backend.

What you get from the API:

- A library of mental-skills **exercises** an athlete can practise.
- Curated **training programs** that group exercises into structured routines.

The service is a lightweight public endpoint with no documented authentication. CORS behaviour and rate limits are not published; treat it as a best-effort community API and cache responses where practical.

## Try it

**TypeScript**
```bash
npm install mentality-skill-training
```

**Python**
```bash
pip install mentality-skill-training-sdk
```

**PHP**
```bash
composer require voxgig/mentality-skill-training-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/mentality-skill-training-sdk/go
```

**Ruby**
```bash
gem install mentality-skill-training-sdk
```

**Lua**
```bash
luarocks install mentality-skill-training-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { MentalitySkillTrainingSDK } from 'mentality-skill-training'

const client = new MentalitySkillTrainingSDK({})

// List all exerciss
const exerciss = await client.Exercis().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o mentality-skill-training-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "mentality-skill-training": {
      "command": "/abs/path/to/mentality-skill-training-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Exercis** | An individual mental-skills exercise that an athlete can perform (e.g. focus, visualisation, or composure drills). | `/api/exercises` |
| **TrainingProgram** | A structured program that organises multiple exercises into a coherent mental-training routine. | `/api/training-programs` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from mentalityskilltraining_sdk import MentalitySkillTrainingSDK

client = MentalitySkillTrainingSDK({})

# List all exerciss
exerciss, err = client.Exercis(None).list(None, None)
```

### PHP

```php
<?php
require_once 'mentalityskilltraining_sdk.php';

$client = new MentalitySkillTrainingSDK([]);

// List all exerciss
[$exerciss, $err] = $client->Exercis(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/mentality-skill-training-sdk/go"

client := sdk.NewMentalitySkillTrainingSDK(map[string]any{})

// List all exerciss
exerciss, err := client.Exercis(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "MentalitySkillTraining_sdk"

client = MentalitySkillTrainingSDK.new({})

# List all exerciss
exerciss, err = client.Exercis(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("mentality-skill-training_sdk")

local client = sdk.new({})

-- List all exerciss
local exerciss, err = client:Exercis(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MentalitySkillTrainingSDK.test()
const result = await client.Exercis().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MentalitySkillTrainingSDK.test(None, None)
result, err = client.Exercis(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MentalitySkillTrainingSDK::test(null, null);
[$result, $err] = $client->Exercis(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Exercis(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MentalitySkillTrainingSDK.test(nil, nil)
result, err = client.Exercis(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Exercis(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Mentality Skill Training

- Upstream: [https://melodious-squirrel-e72cff.netlify.app](https://melodious-squirrel-e72cff.netlify.app)
- API docs: [https://freepublicapis.com/mentality-skill-training](https://freepublicapis.com/mentality-skill-training)

---

Generated from the Mentality Skill Training OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
