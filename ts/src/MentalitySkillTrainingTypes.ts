// Typed models for the MentalitySkillTraining SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Exercis {
  benefit?: any[]
  category?: string
  description?: string
  difficulty?: string
  duration?: number
  id?: string
  instruction?: any[]
  name?: string
}

export type ExercisListMatch = Partial<Exercis>

export interface TrainingProgram {
  description?: string
  duration?: number
  exercis?: any[]
  id?: string
  level?: string
  name?: string
  objectif?: any[]
  sport?: string
}

export type TrainingProgramListMatch = Partial<TrainingProgram>

