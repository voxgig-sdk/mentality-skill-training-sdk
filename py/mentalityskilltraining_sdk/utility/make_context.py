# MentalitySkillTraining SDK utility: make_context

from mentalityskilltraining_sdk.core.context import MentalitySkillTrainingContext


def make_context_util(ctxmap, basectx):
    return MentalitySkillTrainingContext(ctxmap, basectx)
