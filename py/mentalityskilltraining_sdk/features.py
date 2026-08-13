# MentalitySkillTraining SDK feature factory

from mentalityskilltraining_sdk.feature.base_feature import MentalitySkillTrainingBaseFeature
from mentalityskilltraining_sdk.feature.test_feature import MentalitySkillTrainingTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MentalitySkillTrainingBaseFeature(),
        "test": lambda: MentalitySkillTrainingTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
