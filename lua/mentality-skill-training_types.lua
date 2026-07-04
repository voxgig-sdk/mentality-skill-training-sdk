-- Typed models for the MentalitySkillTraining SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Exercis
---@field benefit? table
---@field category? string
---@field description? string
---@field difficulty? string
---@field duration? number
---@field id? string
---@field instruction? table
---@field name? string

---@class ExercisListMatch

---@class TrainingProgram
---@field description? string
---@field duration? number
---@field exercis? table
---@field id? string
---@field level? string
---@field name? string
---@field objectif? table
---@field sport? string

---@class TrainingProgramListMatch

local M = {}

return M
