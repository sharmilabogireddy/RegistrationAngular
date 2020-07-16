import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRole } from '../Models/IRoles';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Role } from '../Models/Role';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserRegistration } from '../Models/UserRegistration';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getRoles(): Observable<any> {
    return this.http.get<IRole[]>(`${environment.apiUrl}/roles`).pipe(
      map((data) => {
        //console.log(data);
        // let roles: IRole[] = [];
        // let role: IRole = null;
        // for(let dataRole of data){
        //     role = new Role();
        //     role.RoleId = dataRole.RoleId;
        //     role.RoleName = dataRole.RoleName;
        //     roles.push(role);
        // }

        return data;
      })
    );
  }

  userRegistration(registrationModel: UserRegistration) {
    return this.http
      .post<any>(`${environment.apiUrl}/registration`, registrationModel);
  }
}
