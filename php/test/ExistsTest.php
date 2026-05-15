<?php
declare(strict_types=1);

// MentalitySkillTraining SDK exists test

require_once __DIR__ . '/../mentalityskilltraining_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MentalitySkillTrainingSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
