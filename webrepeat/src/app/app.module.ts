import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeightComponentComponent } from './weight-component/weight-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightComponentComponent,
  

    CallbackComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
   BrowserAnimationsModule,
    
    HttpClientModule
  ],


    // provider used to create fake backend
   
  bootstrap: [AppComponent]
})
export class AppModule { }
