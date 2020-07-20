import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from '@app/services/provider.service';
import { IProvider } from '@app/Models/IProvider';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css'],
})
export class ProviderComponent implements OnInit {
  provider: IProvider;
  providers;
  public providerForm: FormGroup;
  floatLabelControl = new FormControl('auto');
  displayedColumns: string[] = ['CHClaimId', 'PatientCtrlNbr', 'RePriceClaimNum', 'ClaimType'];


  constructor(
    private route: ActivatedRoute,
     private router: Router,
     private providerService: ProviderService
     ) {}

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

  search(){
   // console.log("Form Submission:", this.providerForm.value);
    //console.log("Provider TaxId: ", this.providerForm.value.providerTaxId);

    this.providerService.getProviderByTaxId(this.providerForm.value.providerTaxId).subscribe(
      (data)=>{
        //console.log("Data :", data);
        this.providers = new MatTableDataSource(data);

      }
    );

  }
}
