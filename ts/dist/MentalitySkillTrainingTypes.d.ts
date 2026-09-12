export interface Exercis {
    benefits?: any[];
    category?: string;
    description?: string;
    difficulty?: string;
    duration?: number;
    id?: string;
    instructions?: any[];
    name?: string;
}
export interface ExercisListMatch {
    category?: string;
    duration?: number;
}
export interface TrainingProgram {
    description?: string;
    duration?: number;
    exercises?: any[];
    id?: string;
    level?: string;
    name?: string;
    objectives?: any[];
    sport?: string;
}
export interface TrainingProgramListMatch {
    level?: string;
    sport?: string;
}
