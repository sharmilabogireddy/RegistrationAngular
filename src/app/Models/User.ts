import { RoleEnum } from './RoleEnum';

export class User{
  userName: string;
  emailId: string;
  role: RoleEnum;
  token?: string;
}
