import { MentalitySkillTrainingEntityBase } from '../MentalitySkillTrainingEntityBase';
import type { MentalitySkillTrainingSDK } from '../MentalitySkillTrainingSDK';
import type { Control } from '../types';
import type { TrainingProgram, TrainingProgramListMatch } from '../MentalitySkillTrainingTypes';
declare class TrainingProgramEntity extends MentalitySkillTrainingEntityBase<TrainingProgram> {
    constructor(client: MentalitySkillTrainingSDK, entopts: any);
    make(this: TrainingProgramEntity): TrainingProgramEntity;
    list(this: any, reqmatch?: TrainingProgramListMatch, ctrl?: Control): Promise<TrainingProgramEntity[]>;
}
export { TrainingProgramEntity };
