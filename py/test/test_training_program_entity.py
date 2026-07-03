# TrainingProgram entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from mentalityskilltraining_sdk import MentalitySkillTrainingSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTrainingProgramEntity:

    def test_should_create_instance(self):
        testsdk = MentalitySkillTrainingSDK.test(None, None)
        ent = testsdk.TrainingProgram(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _training_program_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "training_program." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MENTALITYSKILLTRAINING_TEST_TRAINING_PROGRAM_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        training_program_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.training_program")))
        training_program_ref01_data = None
        if len(training_program_ref01_data_raw) > 0:
            training_program_ref01_data = helpers.to_map(training_program_ref01_data_raw[0][1])

        # LIST
        training_program_ref01_ent = client.TrainingProgram(None)
        training_program_ref01_match = {}

        training_program_ref01_list_result, err = training_program_ref01_ent.list(training_program_ref01_match, None)
        assert err is None
        assert isinstance(training_program_ref01_list_result, list)



def _training_program_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/training_program/TrainingProgramTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MentalitySkillTrainingSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["training_program01", "training_program02", "training_program03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "MENTALITYSKILLTRAINING_TEST_TRAINING_PROGRAM_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MENTALITYSKILLTRAINING_TEST_TRAINING_PROGRAM_ENTID": idmap,
        "MENTALITYSKILLTRAINING_TEST_LIVE": "FALSE",
        "MENTALITYSKILLTRAINING_TEST_EXPLAIN": "FALSE",
        "MENTALITYSKILLTRAINING_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("MENTALITYSKILLTRAINING_TEST_TRAINING_PROGRAM_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("MENTALITYSKILLTRAINING_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("MENTALITYSKILLTRAINING_APIKEY"),
            },
            extra or {},
        ])
        client = MentalitySkillTrainingSDK(helpers.to_map(merged_opts))

    _live = env.get("MENTALITYSKILLTRAINING_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("MENTALITYSKILLTRAINING_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
