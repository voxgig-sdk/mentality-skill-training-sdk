<?php
declare(strict_types=1);

// MentalitySkillTraining SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MentalitySkillTrainingUtility::setRegistrar(function (MentalitySkillTrainingUtility $u): void {
    $u->clean = [MentalitySkillTrainingClean::class, 'call'];
    $u->done = [MentalitySkillTrainingDone::class, 'call'];
    $u->make_error = [MentalitySkillTrainingMakeError::class, 'call'];
    $u->feature_add = [MentalitySkillTrainingFeatureAdd::class, 'call'];
    $u->feature_hook = [MentalitySkillTrainingFeatureHook::class, 'call'];
    $u->feature_init = [MentalitySkillTrainingFeatureInit::class, 'call'];
    $u->fetcher = [MentalitySkillTrainingFetcher::class, 'call'];
    $u->make_fetch_def = [MentalitySkillTrainingMakeFetchDef::class, 'call'];
    $u->make_context = [MentalitySkillTrainingMakeContext::class, 'call'];
    $u->make_options = [MentalitySkillTrainingMakeOptions::class, 'call'];
    $u->make_request = [MentalitySkillTrainingMakeRequest::class, 'call'];
    $u->make_response = [MentalitySkillTrainingMakeResponse::class, 'call'];
    $u->make_result = [MentalitySkillTrainingMakeResult::class, 'call'];
    $u->make_point = [MentalitySkillTrainingMakePoint::class, 'call'];
    $u->make_spec = [MentalitySkillTrainingMakeSpec::class, 'call'];
    $u->make_url = [MentalitySkillTrainingMakeUrl::class, 'call'];
    $u->param = [MentalitySkillTrainingParam::class, 'call'];
    $u->prepare_auth = [MentalitySkillTrainingPrepareAuth::class, 'call'];
    $u->prepare_body = [MentalitySkillTrainingPrepareBody::class, 'call'];
    $u->prepare_headers = [MentalitySkillTrainingPrepareHeaders::class, 'call'];
    $u->prepare_method = [MentalitySkillTrainingPrepareMethod::class, 'call'];
    $u->prepare_params = [MentalitySkillTrainingPrepareParams::class, 'call'];
    $u->prepare_path = [MentalitySkillTrainingPreparePath::class, 'call'];
    $u->prepare_query = [MentalitySkillTrainingPrepareQuery::class, 'call'];
    $u->result_basic = [MentalitySkillTrainingResultBasic::class, 'call'];
    $u->result_body = [MentalitySkillTrainingResultBody::class, 'call'];
    $u->result_headers = [MentalitySkillTrainingResultHeaders::class, 'call'];
    $u->transform_request = [MentalitySkillTrainingTransformRequest::class, 'call'];
    $u->transform_response = [MentalitySkillTrainingTransformResponse::class, 'call'];
});
