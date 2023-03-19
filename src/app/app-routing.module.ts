import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { ListInstructorComponent } from './pages/instructor/list-instructor/list-instructor.component';
import { AddReviewComponent } from './pages/review/add-review/add-review.component';
import { ListReviewComponent } from './pages/review/list-review/list-review.component';
import { ListSchoolComponent } from './pages/school/list-school/list-school.component';

const routes: Routes = [
  {path: 'head', component: HeaderComponent},
  {path: 'add_review', component: AddReviewComponent},
  {path: 'reviews', component: ListReviewComponent},
  {path: 'instructors', component: ListInstructorComponent},
  {path: 'schools', component: ListSchoolComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
