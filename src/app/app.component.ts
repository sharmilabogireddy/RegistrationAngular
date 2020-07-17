import { Component } from '@angular/core';
import { User } from './Models/User';
import { AuthenticationService } from './services/authentication.service';
import { RoleEnum } from './Models/RoleEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LogIn';
  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  get isAdmin() {
    // RoleId 1 is admin
    return this.user && this.user.role === RoleEnum.Admin;
  }

  logout() {
    this.authenticationService.logout();
  }
}
