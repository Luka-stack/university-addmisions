import { SpecializationModel } from "./specialization.model";

export interface FieldModel {
    id: number;
    name: string;
    faculty: string;
    description: string;
    benefits: string;
    specializations: Array<SpecializationModel>;
}