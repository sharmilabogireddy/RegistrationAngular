import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  public providerForm: FormGroup;
  floatLabelControl = new FormControl('auto');

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    //floatLabel: this.floatLabelControl,

  }

}
