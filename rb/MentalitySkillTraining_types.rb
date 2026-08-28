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
# @!attribute [rw] benefits
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
# @!attribute [rw] instructions
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Exercis = Struct.new(
  :benefits,
  :category,
  :description,
  :difficulty,
  :duration,
  :id,
  :instructions,
  :name,
  keyword_init: true
)

# Request payload for Exercis#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
ExercisListMatch = Struct.new(
  :category,
  :duration,
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
# @!attribute [rw] exercises
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
# @!attribute [rw] objectives
#   @return [Array, nil]
#
# @!attribute [rw] sport
#   @return [String, nil]
TrainingProgram = Struct.new(
  :description,
  :duration,
  :exercises,
  :id,
  :level,
  :name,
  :objectives,
  :sport,
  keyword_init: true
)

# Request payload for TrainingProgram#list.
#
# @!attribute [rw] level
#   @return [String, nil]
#
# @!attribute [rw] sport
#   @return [String, nil]
TrainingProgramListMatch = Struct.new(
  :level,
  :sport,
  keyword_init: true
)

