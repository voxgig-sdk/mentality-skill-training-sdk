<?php
declare(strict_types=1);

// MentalitySkillTraining SDK utility: result_headers

class MentalitySkillTrainingResultHeaders
{
    public static function call(MentalitySkillTrainingContext $ctx): ?MentalitySkillTrainingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
