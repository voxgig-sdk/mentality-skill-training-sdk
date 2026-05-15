<?php
declare(strict_types=1);

// MentalitySkillTraining SDK utility: result_body

class MentalitySkillTrainingResultBody
{
    public static function call(MentalitySkillTrainingContext $ctx): ?MentalitySkillTrainingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
