import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeightComponentComponent } from './weight-component/weight-component.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'userWeight', component: WeightComponentComponent},
  {path: 'userlogin', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
