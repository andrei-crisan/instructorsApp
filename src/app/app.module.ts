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
import { FormsModule } from '@angular/forms';
import { DataSchoolComponent } from './pages/school/data-school/data-school.component';
import { DataInstructorComponent } from './pages/instructor/data-instructor/data-instructor.component';
import { DataReviewComponent } from './pages/review/data-review/data-review.component';
import { MatCardModule} from '@angular/material/card';
import { DetailsInstructorComponent } from './pages/instructor/details-instructor/details-instructor.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorProvider } from './auth.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './pages/register/register.component';
import { DetailsSchoolComponent } from './pages/school/details-school/details-school.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    AddReviewComponent,
    ListReviewComponent,
    HeaderComponent,
    AddInstructorComponent,
    ListInstructorComponent,
    AddSchoolComponent,
    ListSchoolComponent,
    DataSchoolComponent,
    DataInstructorComponent,
    DataReviewComponent,
    DetailsInstructorComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    DetailsSchoolComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

    MatFormFieldModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
