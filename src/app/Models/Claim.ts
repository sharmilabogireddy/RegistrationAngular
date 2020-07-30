import { IClaim } from './IClaim';
import { IServiceLine } from './IServiceLine';

export class Claim implements IClaim{
  NetworkName: string;
  MedicareId: string;
  ProviderName: string;
  ClaimId: string;
  ClaimNumber: string;
  ClaimType: string;
  ClientClaimId: string;
  ProviderId: string;
  ProviderTaxId: string;
  BillProvAddress: string;
  BillProvCityStateZip: string;
  PatientName: string;
  PatientDOB: string;
  PatientAddress: string;
  ServiceLines: Array<IServiceLine>;
}
