# MentalitySkillTraining SDK feature factory

from mentalityskilltraining_sdk.feature.base_feature import MentalitySkillTrainingBaseFeature
from mentalityskilltraining_sdk.feature.ratelimit_feature import MentalitySkillTrainingRatelimitFeature
from mentalityskilltraining_sdk.feature.retry_feature import MentalitySkillTrainingRetryFeature
from mentalityskilltraining_sdk.feature.test_feature import MentalitySkillTrainingTestFeature
from mentalityskilltraining_sdk.feature.timeout_feature import MentalitySkillTrainingTimeoutFeature


_FEATURES = {
    "base": lambda: MentalitySkillTrainingBaseFeature(),
    "ratelimit": lambda: MentalitySkillTrainingRatelimitFeature(),
    "retry": lambda: MentalitySkillTrainingRetryFeature(),
    "test": lambda: MentalitySkillTrainingTestFeature(),
    "timeout": lambda: MentalitySkillTrainingTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
