# ProjectName SDK exists test

import pytest
from mentalityskilltraining_sdk import MentalitySkillTrainingSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MentalitySkillTrainingSDK.test(None, None)
        assert testsdk is not None
