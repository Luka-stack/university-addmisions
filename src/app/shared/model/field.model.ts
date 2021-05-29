export interface FieldModel {
    id?: number;
    name: string;
    identifier: string;
    faculty: string;
    description: string;
    benefits: string;
    imageUrn: string;
    specializations?: Array<String>;
}