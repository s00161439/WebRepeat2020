import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/authentication.service';
import { CheckRequiredField } from '../helpers/form-helper';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    processing: Boolean = false;
    error: Boolean = false;
  
    checkField  = CheckRequiredField;
  
    constructor(
      private authService: AuthenticationService,
      private router: Router,
    ) { }
  
    ngOnInit() {
      if (this.authService.hasToken()) {
        this.handleLoginSuccess();
      } else {
        this.initForm();
      }
    }
  
    // checkRequiredClass(frmControl: string) {
    //   const t  = this.loginForm.get()
    //   return {
    //     'required' : false
    //   };
    // }
  
    onSubmitButtonClicked() {
      this.error  = false;
      this.processing  = false;
      if (this.loginForm.valid) {
        this.login();
      }
    }
  
    private login() {
      this.processing  = true;
      this.authService.login(this.loginForm.value).then(
        data => {
          if (data) {
            this.handleLoginSuccess();
          } else {
            this.handleLoginError();
          }
        },
        err => {
          console.log('---- ERROR ---- ');
          console.log(err);
          this.handleLoginError();
        });
    }
  
    private handleLoginSuccess() {
      this.processing = false;
      this.error  = false;
      this.router.navigate(['/home']);
    }
  
    private handleLoginError() {
      this.processing = false;
      this.error  = true;
    }
  
    private initForm() {
      this.loginForm = new FormGroup({
        username: new FormControl('', [ Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      });
    }
}

