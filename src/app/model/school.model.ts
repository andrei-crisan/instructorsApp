import { Instructor } from "./instructor.mode";

export class School{
    id?: number;
    drivingSchoolName: string;
    drivingSchoolAddress: string;
    instructors?: Instructor[] = [];
}
