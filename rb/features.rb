# MentalitySkillTraining SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MentalitySkillTrainingFeatures
  def self.make_feature(name)
    case name
    when "base"
      MentalitySkillTrainingBaseFeature.new
    when "ratelimit"
      MentalitySkillTrainingRatelimitFeature.new
    when "retry"
      MentalitySkillTrainingRetryFeature.new
    when "test"
      MentalitySkillTrainingTestFeature.new
    when "timeout"
      MentalitySkillTrainingTimeoutFeature.new
    else
      MentalitySkillTrainingBaseFeature.new
    end
  end
end
