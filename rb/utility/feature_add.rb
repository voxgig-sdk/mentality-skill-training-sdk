# MentalitySkillTraining SDK utility: feature_add
module MentalitySkillTrainingUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
