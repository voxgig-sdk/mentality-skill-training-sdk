import { MentalitySkillTrainingEntityBase } from '../MentalitySkillTrainingEntityBase';
import type { MentalitySkillTrainingSDK } from '../MentalitySkillTrainingSDK';
import type { Control } from '../types';
import type { Exercise, ExerciseListMatch } from '../MentalitySkillTrainingTypes';
declare class ExerciseEntity extends MentalitySkillTrainingEntityBase<Exercise> {
    constructor(client: MentalitySkillTrainingSDK, entopts: any);
    make(this: ExerciseEntity): ExerciseEntity;
    list(this: any, reqmatch?: ExerciseListMatch, ctrl?: Control): Promise<ExerciseEntity[]>;
}
export { ExerciseEntity };
