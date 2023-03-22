import { Review } from "./review.model";
import { School } from "./school.model";

export class Instructor{
    id?: number;
    instructorName: string;
    instructorSurname: string;
    drivingSchooldId?: number;
    drivingSchoolName : string;
    drivingSchoolAddress: string;
    reviews?: Review[] = [];
}