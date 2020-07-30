import { IServiceLine } from './IServiceLine';

export interface IClaim{
  ClaimId: string,
  ClaimNumber: string,
  ClaimType: string,
  NetworkName: string,
  MedicareId: string,
  ProviderName: string,
  ClientClaimId: string,
  ProviderId: string,
  ProviderTaxId: string,
  BillProvAddress: string,
  BillProvCityStateZip: string,
  PatientName: string,
  PatientDOB: string,
  PatientAddress: string,
  ServiceLines: Array<IServiceLine>
}
