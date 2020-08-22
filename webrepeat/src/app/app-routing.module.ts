import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeightComponentComponent } from './weight-component/weight-component.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guards';
import {HomeComponent} from './home/home.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
    { path: '',  redirectTo: '/home', pathMatch: 'full' }, // catch all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
