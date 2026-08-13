// Typed models for the MentalitySkillTraining SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Exercis {
  benefits?: any[]
  category?: string
  description?: string
  difficulty?: string
  duration?: number
  id?: string
  instructions?: any[]
  name?: string
}

export interface ExercisListMatch {
  benefits?: any[]
  category?: string
  description?: string
  difficulty?: string
  duration?: number
  id?: string
  instructions?: any[]
  name?: string
}

export interface TrainingProgram {
  description?: string
  duration?: number
  exercises?: any[]
  id?: string
  level?: string
  name?: string
  objectives?: any[]
  sport?: string
}

export interface TrainingProgramListMatch {
  description?: string
  duration?: number
  exercises?: any[]
  id?: string
  level?: string
  name?: string
  objectives?: any[]
  sport?: string
}

