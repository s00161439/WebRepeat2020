import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Goals } from './models/goals';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'

 
})
export class GoalsService {
  private goalsurl = 'http://localhost:4200/weight';

  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }
  getPrivateGoals() {
    return this.http
      .get<Goals[]>(this.goalsurl, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }
 private handleError(err: HttpErrorResponse | any) {
        console.error('An error occurred', err);
        return throwError(err.message || err);
      }
}
