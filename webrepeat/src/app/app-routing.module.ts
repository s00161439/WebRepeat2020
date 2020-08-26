import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeightComponentComponent } from './weight-component/weight-component.component';
import {CallbackComponent} from './callback/callback.component';
import {AuthGuard} from './auth/auth.guard';





const routes: Routes = [
 
 {path: 'callback', component: CallbackComponent},
  {path: 'weight', component: WeightComponentComponent,  canActivate: [AuthGuard]},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
