import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IsAuthGuard } from './is-auth.guard';
import { HeaderComponent } from './pages/header/header.component';
import { ListInstructorComponent } from './pages/instructor/list-instructor/list-instructor.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddReviewComponent } from './pages/review/add-review/add-review.component';
import { ListReviewComponent } from './pages/review/list-review/list-review.component';
import { ListSchoolComponent } from './pages/school/list-school/list-school.component';

const routes: Routes = [
  {path: 'head', component: HeaderComponent, canActivate:[IsAuthGuard]},
  {path: 'add_review', component: AddReviewComponent, canActivate:[IsAuthGuard]},
  {path: 'reviews', component: ListReviewComponent, canActivate:[IsAuthGuard]},
  {path: 'instructors', component: ListInstructorComponent, canActivate:[IsAuthGuard]},
  {path: 'instructors/:id', component: ListInstructorComponent, canActivate:[IsAuthGuard]},
  {path: 'reviews/:id', component: ListReviewComponent, canActivate:[IsAuthGuard]},
  {path: 'schools/:id', component: ListSchoolComponent, canActivate:[IsAuthGuard]},
  {path: 'schools', component: ListSchoolComponent, canActivate:[IsAuthGuard]},
  {path: 'login', component: LoginComponent}, 
  {path: 'register', component: RegisterComponent},
  {path: 'app', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
