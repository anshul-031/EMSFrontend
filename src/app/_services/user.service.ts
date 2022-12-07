import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  requestHeader = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public login(loginData: any) {
    return this.httpclient.post(environment.API_URL + '/register/signin', loginData, {
      headers: this.requestHeader,
    });
  }

  public forEmployer(employerData: any) {
    return this.httpclient.post(environment.API_URL + '/register/employer', employerData, {
      headers: this.requestHeader,
    });
  }


  public forEmployee(employeeData: any) {
    return this.httpclient.post(environment.API_URL + '/register/employee', employeeData, {
      headers: this.requestHeader,
    });
  }

  public roleMatch(allowedRoles: any[]): any {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
