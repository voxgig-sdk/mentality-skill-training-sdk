package = "voxgig-sdk-mentality-skill-training"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/mentality-skill-training-sdk.git"
}
description = {
  summary = "MentalitySkillTraining SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
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
