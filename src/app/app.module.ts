import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReviewComponent } from './pages/review/add-review/add-review.component';
import { ListReviewComponent } from './pages/review/list-review/list-review.component';
import { HeaderComponent } from './pages/header/header.component';
import { AddInstructorComponent } from './pages/instructor/add-instructor/add-instructor.component';
import { ListInstructorComponent } from './pages/instructor/list-instructor/list-instructor.component';
import { AddSchoolComponent } from './pages/school/add-school/add-school.component';
import { ListSchoolComponent } from './pages/school/list-school/list-school.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AddReviewComponent,
    ListReviewComponent,
    HeaderComponent,
    AddInstructorComponent,
    ListInstructorComponent,
    AddSchoolComponent,
    ListSchoolComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
