export interface IClaim{
  CHClaimId: number,
  PatientCtrlNbr: number,
  RePriceClaimNum: number,
  ClaimType: string,
  Patient: string,
  Provider: string,
  ProvId: number,
  ProvTaxId: number,
  ReceiverId: number,
  TotalCharges: number,
  NetworkName: string,
  RePriceAllow: number,
  RePriceSave: number
}
