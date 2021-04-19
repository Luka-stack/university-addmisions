export interface AdmissionModel {
    id?: number;
    field: string;
    faculty: string;
    capacity: number;
    lecturersPlace: string;
    submissionPlace: string;
    startDate: Date;
    endDate: Date;
    requirements: string;
    description: string;
}