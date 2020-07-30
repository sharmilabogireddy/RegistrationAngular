import { IServiceLineBackend } from './IServiceLineBackend';

export interface IClaimBackend{
  CLAIMID: string,
  CLAIMTYPE: string,
  PROVIDERTAXID: string,
  BILLPROVADDRESS: string,
  BILLPROVCITYSTATEZIP: string,
  PROVIDERNAME: string,
  CLAIMNMBER: string,
  NETWORKNAME: string,
  MEDICAREID: string,
  CLIENTCLAIMID: string,
  PROVIDERID: string,
  PATIENTNAME: string,
  PATIENTDOB: string,
  PATADDRESS: string,
  SERVICELINES: Array<IServiceLineBackend>
}
