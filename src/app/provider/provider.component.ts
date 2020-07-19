import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css'],
})
export class ProviderComponent implements OnInit {
  public providerForm: FormGroup;
  floatLabelControl = new FormControl('auto');

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.providerForm = new FormGroup({
      providerTaxId: new FormControl('', [Validators.required]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      floatLabel: this.floatLabelControl,
    });
  }
  get f() {
    return this.providerForm.controls;
  }
}
