import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from '@app/services/provider.service';
import { IProvider } from '@app/Models/IProvider';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
  displayedColumns: string[] = [
    'CHClaimId',
    'PatientCtrlNbr',
    'RePriceClaimNum',
    'ClaimType',
  ];
  private paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private providerService: ProviderService
  ) {}

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.providers.paginator = this.paginator;
  }

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

  search() {
    // console.log("Form Submission:", this.providerForm.value);
    //console.log("Provider TaxId: ", this.providerForm.value.providerTaxId);

    this.providerService
      .getProviderByTaxId(this.providerForm.value.providerTaxId)
      .subscribe((data) => {
        //console.log("Data :", data);
        this.providers = new MatTableDataSource(data);
        this.providers.paginator = this.paginator;

      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.providers.filter = filterValue.trim().toLowerCase();

    if (this.providers.paginator) {
      this.providers.paginator.firstPage();
    }
  }
}
