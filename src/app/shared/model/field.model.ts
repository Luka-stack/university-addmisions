import { SpecializationModel } from "./specialization.model";

export interface FieldModel {
    id: number;
    name: string;
    description: string;
    benefits: string;
    faculty: string;
    specializations: Array<SpecializationModel>;
}