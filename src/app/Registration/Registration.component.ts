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
      //role.roleId: new FormControl('', [Validators.required]),
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
    console.log(this.regForm);
    this.submitted = true;
    // stop here if form is invalid
    if (this.regForm.invalid) {
      return;
    }
    this.loading = true;

    let reg = new UserRegistration();
    reg.userName = this.f.userName.value;
    reg.password = this.f.password.value;
    reg.emailId = this.f.email.value;
    //console.log(.selectedValue,"selected value");

    reg.roleId = 2;
    console.log(reg);
    this.userService.userRegistration(reg).pipe(first())
    .subscribe(
      (data) => {
        this.loading = false;
        this.regForm.reset();
        this.successMessage = "User Created!";
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
    //console.log('Successfully submitted');
  }
}
