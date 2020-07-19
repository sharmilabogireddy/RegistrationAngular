import { IProvider } from './IProvider';

export class Provider implements IProvider{
  CHClaimId: number;
  PatientCtrlNbr: number;
  RePriceClaimNum: number;
  ClaimType: string;
  Patient: string;
  Provider: string;
  ProvId: number;
  ProvTaxId: number;
  ReceiverId: number;
  TotalCharges: number;
  RePriceAllow: number;
  RePriceSave: number;
}
