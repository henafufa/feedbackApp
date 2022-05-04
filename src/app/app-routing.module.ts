import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { ResponsePageComponent } from './components/response-page/response-page.component';
import { AuthGaurd } from './services/authGuard';


const routes: Routes = [
  {
  path:'',
  component:FeedbackFormComponent
  },
  {
    path:'response',
    component:ResponsePageComponent,
    canActivate: [AuthGaurd]
  },
  {
    path:'*',
    component:FeedbackFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
