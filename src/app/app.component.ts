import { Component } from '@angular/core';
import { UserRegistration } from './Models/UserRegistration';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LogIn';
  user: UserRegistration;

  constructor(private authenticationService:AuthenticationService){}

  logout() {
    this.authenticationService.logout();
}
}
