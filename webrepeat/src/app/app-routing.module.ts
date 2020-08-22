import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeightComponentComponent } from './weight-component/weight-component.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guards';
import {HomeComponent} from './home/home.component';

import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'weight', component: WeightComponentComponent},
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
