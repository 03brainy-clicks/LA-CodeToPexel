import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'learn', component: LearnComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
