<?php
declare(strict_types=1);

// Typed models for the MentalitySkillTraining SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Exercis entity data model. */
class Exercis
{
    public ?array $benefit = null;
    public ?string $category = null;
    public ?string $description = null;
    public ?string $difficulty = null;
    public ?int $duration = null;
    public ?string $id = null;
    public ?array $instruction = null;
    public ?string $name = null;
}

/** Request payload for Exercis#list. */
class ExercisListMatch
{
    public ?array $benefit = null;
    public ?string $category = null;
    public ?string $description = null;
    public ?string $difficulty = null;
    public ?int $duration = null;
    public ?string $id = null;
    public ?array $instruction = null;
    public ?string $name = null;
}

/** TrainingProgram entity data model. */
class TrainingProgram
{
    public ?string $description = null;
    public ?int $duration = null;
    public ?array $exercis = null;
    public ?string $id = null;
    public ?string $level = null;
    public ?string $name = null;
    public ?array $objectif = null;
    public ?string $sport = null;
}

/** Request payload for TrainingProgram#list. */
class TrainingProgramListMatch
{
    public ?string $description = null;
    public ?int $duration = null;
    public ?array $exercis = null;
    public ?string $id = null;
    public ?string $level = null;
    public ?string $name = null;
    public ?array $objectif = null;
    public ?string $sport = null;
}

