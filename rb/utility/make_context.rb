# MentalitySkillTraining SDK utility: make_context
require_relative '../core/context'
module MentalitySkillTrainingUtilities
  MakeContext = ->(ctxmap, basectx) {
    MentalitySkillTrainingContext.new(ctxmap, basectx)
  }
end
