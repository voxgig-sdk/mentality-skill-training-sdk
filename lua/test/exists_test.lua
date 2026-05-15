-- ProjectName SDK exists test

local sdk = require("mentality-skill-training_sdk")

describe("MentalitySkillTrainingSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
