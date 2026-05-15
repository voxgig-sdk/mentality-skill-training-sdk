<?php
declare(strict_types=1);

// MentalitySkillTraining SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MentalitySkillTrainingMakeContext
{
    public static function call(array $ctxmap, ?MentalitySkillTrainingContext $basectx): MentalitySkillTrainingContext
    {
        return new MentalitySkillTrainingContext($ctxmap, $basectx);
    }
}
