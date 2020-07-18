import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RoleEnum } from '@app/Models/RoleEnum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAdmin: Boolean = false;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.isAdmin = this.authenticationService.userValue.role == RoleEnum.Admin;
  }
  logout() {
    this.authenticationService.logout();
  }
}
