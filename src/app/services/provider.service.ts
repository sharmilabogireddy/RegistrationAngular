import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProvider } from '@app/Models/IProvider';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { IProviderBackend } from '@app/Models/IProviderBackend';
import { Provider } from '@app/Models/Provider';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(private http: HttpClient) {}

  getProviderByTaxId(ProvTaxId: number): Observable<IProvider[]> {
    // console.log(`${environment.jsonPlaceholderUrl}/providerdb/SIMPLEQUERY?PROVTAXID=` +
    // ProvTaxId);
    return this.http
      .get<IProviderBackend[]>(
        `${environment.jsonPlaceholderUrl}/providerdb/SIMPLEQUERY?PROVTAXID=` +
          ProvTaxId
      )
      .pipe(
        map((response) => {
          let provider: IProvider = null;
          //console.log(response);
          const providerArray: Array<IProvider> = [];
          for (const obj of response) {
            provider = new Provider();
            provider.CHClaimId = obj.CHCLAIMID;
            provider.PatientCtrlNbr = obj.PATIENTCTRLNBR;
            provider.RePriceClaimNum = obj.REPRICECLAIMNUM;
            provider.ClaimType = obj.CLAIMTYPE;
            provider.Patient = obj.PATIENT;
            provider.Provider = obj.PROVIDER;
            provider.ProvId = obj.PROVID;
            provider.ReceiverId = obj.RECEIVERID;
            providerArray.push(provider);
          }
          //console.log('Result: ', providerArray);
          return providerArray;
        })
      );
  }
}
