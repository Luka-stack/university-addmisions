import { FieldModel } from "./field.model";

export interface SpecializationModel {
    id: number;
    name: string;
    description: string;
    knowledge: string;
    jobs: string;
    field: FieldModel;
}