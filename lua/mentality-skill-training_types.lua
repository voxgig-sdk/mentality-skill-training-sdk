-- Typed models for the MentalitySkillTraining SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Exercis
---@field benefits? table
---@field category? string
---@field description? string
---@field difficulty? string
---@field duration? number
---@field id? string
---@field instructions? table
---@field name? string

---@class ExercisListMatch
---@field category? string
---@field duration? number

---@class TrainingProgram
---@field description? string
---@field duration? number
---@field exercises? table
---@field id? string
---@field level? string
---@field name? string
---@field objectives? table
---@field sport? string

---@class TrainingProgramListMatch
---@field level? string
---@field sport? string

local M = {}

return M
