import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewRestUrl = 'http://localhost:8080/reviews';

  constructor(private httpClient : HttpClient) { }

  getAllReviews() : Observable<Review[]>{
    return this.httpClient.get<Array<Review>>(this.reviewRestUrl);
  }
}
