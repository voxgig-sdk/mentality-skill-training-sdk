# Typed models for the MentalitySkillTraining SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Exercis:
    benefit: Optional[list] = None
    category: Optional[str] = None
    description: Optional[str] = None
    difficulty: Optional[str] = None
    duration: Optional[int] = None
    id: Optional[str] = None
    instruction: Optional[list] = None
    name: Optional[str] = None


@dataclass
class ExercisListMatch:
    benefit: Optional[list] = None
    category: Optional[str] = None
    description: Optional[str] = None
    difficulty: Optional[str] = None
    duration: Optional[int] = None
    id: Optional[str] = None
    instruction: Optional[list] = None
    name: Optional[str] = None


@dataclass
class TrainingProgram:
    description: Optional[str] = None
    duration: Optional[int] = None
    exercis: Optional[list] = None
    id: Optional[str] = None
    level: Optional[str] = None
    name: Optional[str] = None
    objectif: Optional[list] = None
    sport: Optional[str] = None


@dataclass
class TrainingProgramListMatch:
    description: Optional[str] = None
    duration: Optional[int] = None
    exercis: Optional[list] = None
    id: Optional[str] = None
    level: Optional[str] = None
    name: Optional[str] = None
    objectif: Optional[list] = None
    sport: Optional[str] = None

