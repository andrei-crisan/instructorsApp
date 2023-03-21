import { Instructor } from "./instructor.mode";

export class Review{
    id?: number;
    instructorReview: string;
    experienceRating: number;
    instructor?: Instructor;
}