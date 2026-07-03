package = "voxgig-sdk-mentality-skill-training"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/mentality-skill-training-sdk.git",
  tag = "lua/v0.0.1",
  dir = "mentality-skill-training-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Mentality Skill Training public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/mentality-skill-training-sdk",
  issues_url = "https://github.com/voxgig-sdk/mentality-skill-training-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "mentality-skill-training" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["mentality-skill-training_sdk"] = "mentality-skill-training_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
