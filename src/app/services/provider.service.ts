import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProvider } from '@app/Models/IProvider';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

constructor(private http: HttpClient) { }

getProviderByTaxId(ProvTaxId: number): Observable<IProvider[]>{
  return this.http.get<IProviderBackend>(`${environment.jsonPlaceholderUrl}/providerdb/SIMPLEQUERY?PROVTAXID = ` + ProvTaxId)
  .pipe(
    map(() => {

    )
  )

  return;
}
}
