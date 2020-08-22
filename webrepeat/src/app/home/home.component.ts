import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private usersService: UsersService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.usersService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }
    private loadAllUsers() {
        this.usersService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}

