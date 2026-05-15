<?php
declare(strict_types=1);

// MentalitySkillTraining SDK utility: feature_add

class MentalitySkillTrainingFeatureAdd
{
    public static function call(MentalitySkillTrainingContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
