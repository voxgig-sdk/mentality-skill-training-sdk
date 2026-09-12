import { ExercisEntity } from './entity/ExercisEntity';
import { TrainingProgramEntity } from './entity/TrainingProgramEntity';
export type * from './MentalitySkillTrainingTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { MentalitySkillTrainingEntityBase } from './MentalitySkillTrainingEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class MentalitySkillTrainingSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Exercis(entopts?: Record<string, any>): ExercisEntity;
    TrainingProgram(entopts?: Record<string, any>): TrainingProgramEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): MentalitySkillTrainingSDK;
    tester(testopts?: any, sdkopts?: any): MentalitySkillTrainingSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof MentalitySkillTrainingSDK;
export { stdutil, config, BaseFeature, MentalitySkillTrainingEntityBase, MentalitySkillTrainingSDK, SDK, };
