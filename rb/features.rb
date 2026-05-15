# MentalitySkillTraining SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MentalitySkillTrainingFeatures
  def self.make_feature(name)
    case name
    when "base"
      MentalitySkillTrainingBaseFeature.new
    when "test"
      MentalitySkillTrainingTestFeature.new
    else
      MentalitySkillTrainingBaseFeature.new
    end
  end
end
