import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewRestUrl = 'http://instructors.azurewebsites.net/reviews';

  constructor(private httpClient: HttpClient) { }

  getAllReviews(): Observable<Review[]> {
    return this.httpClient.get<Array<Review>>(this.reviewRestUrl);
  }

  getReviewById(reviewId: number): Observable<Review> {
    const reviewRestUrlFindOne = `${this.reviewRestUrl}/${reviewId}`;
    return this.httpClient.get<Review>(reviewRestUrlFindOne);
  }

  saveReview(review: Review): Observable<Review> {
    return this.httpClient
      .post<Review>(this.reviewRestUrl, review);
  }

  updateReview(review: Review): Observable<Review> {
    return this.httpClient
      .put<Review>(this.reviewRestUrl, review);
  }

  deleteReviewById(reviewId: number): Observable<Review> {
    const reviewRestUrlDeleteOne = `${this.reviewRestUrl}/rm/${reviewId}`;
    return this.httpClient.delete<Review>(reviewRestUrlDeleteOne);
  }
}
