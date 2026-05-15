<?php
declare(strict_types=1);

// MentalitySkillTraining SDK utility: prepare_body

class MentalitySkillTrainingPrepareBody
{
    public static function call(MentalitySkillTrainingContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
