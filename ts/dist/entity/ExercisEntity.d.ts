import { MentalitySkillTrainingEntityBase } from '../MentalitySkillTrainingEntityBase';
import type { MentalitySkillTrainingSDK } from '../MentalitySkillTrainingSDK';
import type { Control } from '../types';
import type { Exercis, ExercisListMatch } from '../MentalitySkillTrainingTypes';
declare class ExercisEntity extends MentalitySkillTrainingEntityBase<Exercis> {
    constructor(client: MentalitySkillTrainingSDK, entopts: any);
    make(this: ExercisEntity): ExercisEntity;
    list(this: any, reqmatch?: ExercisListMatch, ctrl?: Control): Promise<ExercisEntity[]>;
}
export { ExercisEntity };
