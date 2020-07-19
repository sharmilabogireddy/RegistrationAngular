import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Role } from '../Models/Role';
import { IRole } from '../Models/IRoles';
import { ActivatedRoute } from '@angular/router';
import { UserRegistration } from '../Models/UserRegistration';
import { registerLocaleData } from '@angular/common';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  floatLabelControl = new FormControl('auto');
  public regForm: FormGroup;
  roles: Array<Role> = [];
  role: any;
  submitted = false;
  error = '';
  successMessage = '';
  loading = false;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    public authenticationService: UserService
  ) {}

  ngOnInit(): void {
    this.getRoles();
    this.regForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      //confirmPassword: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      floatLabel: this.floatLabelControl,
    });
  }

  getRoles() {
    this.userService.getRoles().subscribe((data) => {
      this.roles = data;
      //console.log('Roles are:', this.roles);
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.regForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.successMessage = '';
    this.error = '';
    // stop here if form is invalid
    if (this.regForm.invalid) {
      return;
    }

    let reg = new UserRegistration();
    reg.userName = this.f.userName.value;
    reg.password = this.f.password.value;
    reg.emailId = this.f.email.value;
    reg.roleId = parseInt(this.f.role.value);
    this.userService.userRegistration(reg).pipe(first())
    .subscribe(
      (data) => {
        this.loading = false;
        this.submitted = false;
        this.reset();
        this.successMessage = "User Created!";
      },
      (error) => {
        this.error = error;
        this.loading = false;
        this.submitted = false;
      }
    );
    //console.log('Successfully submitted');
  }

  reset() {
    this.loading = false;
    this.submitted = false;
    this.regForm.reset();
    //this.regForm.get('userName').clearAsyncValidators();
    this.regForm.get('userName').clearValidators();
    this.regForm.get('userName').updateValueAndValidity();
    this.regForm.get('email').clearValidators();
    this.regForm.get('email').updateValueAndValidity();
    this.regForm.get('password').clearValidators();
    this.regForm.get('password').updateValueAndValidity();
    this.regForm.get('role').clearValidators();
    this.regForm.get('role').updateValueAndValidity();
  }

}
