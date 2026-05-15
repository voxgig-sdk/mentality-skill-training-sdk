# MentalitySkillTraining SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MentalitySkillTrainingUtility.registrar = ->(u) {
  u.clean = MentalitySkillTrainingUtilities::Clean
  u.done = MentalitySkillTrainingUtilities::Done
  u.make_error = MentalitySkillTrainingUtilities::MakeError
  u.feature_add = MentalitySkillTrainingUtilities::FeatureAdd
  u.feature_hook = MentalitySkillTrainingUtilities::FeatureHook
  u.feature_init = MentalitySkillTrainingUtilities::FeatureInit
  u.fetcher = MentalitySkillTrainingUtilities::Fetcher
  u.make_fetch_def = MentalitySkillTrainingUtilities::MakeFetchDef
  u.make_context = MentalitySkillTrainingUtilities::MakeContext
  u.make_options = MentalitySkillTrainingUtilities::MakeOptions
  u.make_request = MentalitySkillTrainingUtilities::MakeRequest
  u.make_response = MentalitySkillTrainingUtilities::MakeResponse
  u.make_result = MentalitySkillTrainingUtilities::MakeResult
  u.make_point = MentalitySkillTrainingUtilities::MakePoint
  u.make_spec = MentalitySkillTrainingUtilities::MakeSpec
  u.make_url = MentalitySkillTrainingUtilities::MakeUrl
  u.param = MentalitySkillTrainingUtilities::Param
  u.prepare_auth = MentalitySkillTrainingUtilities::PrepareAuth
  u.prepare_body = MentalitySkillTrainingUtilities::PrepareBody
  u.prepare_headers = MentalitySkillTrainingUtilities::PrepareHeaders
  u.prepare_method = MentalitySkillTrainingUtilities::PrepareMethod
  u.prepare_params = MentalitySkillTrainingUtilities::PrepareParams
  u.prepare_path = MentalitySkillTrainingUtilities::PreparePath
  u.prepare_query = MentalitySkillTrainingUtilities::PrepareQuery
  u.result_basic = MentalitySkillTrainingUtilities::ResultBasic
  u.result_body = MentalitySkillTrainingUtilities::ResultBody
  u.result_headers = MentalitySkillTrainingUtilities::ResultHeaders
  u.transform_request = MentalitySkillTrainingUtilities::TransformRequest
  u.transform_response = MentalitySkillTrainingUtilities::TransformResponse
}
