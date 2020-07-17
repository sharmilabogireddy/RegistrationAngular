import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  floatLabelControl = new FormControl('auto');

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    public authenticationService: UserService
  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
  }
}
