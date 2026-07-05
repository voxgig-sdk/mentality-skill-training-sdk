# frozen_string_literal: true

# Typed models for the MentalitySkillTraining SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Exercis entity data model.
#
# @!attribute [rw] benefit
#   @return [Array, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] difficulty
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] instruction
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Exercis = Struct.new(
  :benefit,
  :category,
  :description,
  :difficulty,
  :duration,
  :id,
  :instruction,
  :name,
  keyword_init: true
)

# Request payload for Exercis#list.
#
# @!attribute [rw] benefit
#   @return [Array, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] difficulty
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] instruction
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ExercisListMatch = Struct.new(
  :benefit,
  :category,
  :description,
  :difficulty,
  :duration,
  :id,
  :instruction,
  :name,
  keyword_init: true
)

# TrainingProgram entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] exercis
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] objectif
#   @return [Array, nil]
#
# @!attribute [rw] sport
#   @return [String, nil]
TrainingProgram = Struct.new(
  :description,
  :duration,
  :exercis,
  :id,
  :level,
  :name,
  :objectif,
  :sport,
  keyword_init: true
)

# Request payload for TrainingProgram#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] exercis
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] objectif
#   @return [Array, nil]
#
# @!attribute [rw] sport
#   @return [String, nil]
TrainingProgramListMatch = Struct.new(
  :description,
  :duration,
  :exercis,
  :id,
  :level,
  :name,
  :objectif,
  :sport,
  keyword_init: true
)

