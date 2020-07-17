import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { UserRegistration } from '../Models/UserRegistration';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<UserRegistration>;
  constructor(private router: Router, private http: HttpClient) {}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
}
}
