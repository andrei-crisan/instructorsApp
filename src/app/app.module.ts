import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReviewComponent } from './pages/review/add-review/add-review.component';
import { ListReviewComponent } from './pages/review/list-review/list-review.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReviewComponent,
    ListReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
