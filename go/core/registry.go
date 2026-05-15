package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewExercisEntityFunc func(client *MentalitySkillTrainingSDK, entopts map[string]any) MentalitySkillTrainingEntity

var NewTrainingProgramEntityFunc func(client *MentalitySkillTrainingSDK, entopts map[string]any) MentalitySkillTrainingEntity

