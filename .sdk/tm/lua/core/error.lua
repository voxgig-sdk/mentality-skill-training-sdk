-- MentalitySkillTraining SDK error

local MentalitySkillTrainingError = {}
MentalitySkillTrainingError.__index = MentalitySkillTrainingError


function MentalitySkillTrainingError.new(code, msg, ctx)
  local self = setmetatable({}, MentalitySkillTrainingError)
  self.is_sdk_error = true
  self.sdk = "MentalitySkillTraining"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MentalitySkillTrainingError:error()
  return self.msg
end


function MentalitySkillTrainingError:__tostring()
  return self.msg
end


return MentalitySkillTrainingError
