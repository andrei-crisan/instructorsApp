import { Review } from "./review.model";

export class Instructor{
    id: number;
    instructorName: string;
    instructorSurname: string;
    reviews: Array<Review> = [];
}