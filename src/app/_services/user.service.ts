import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  requestHeader = new HttpHeaders({ 'Content-type': 'application/json', 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public login(loginData: any) {
    return this.httpclient.post('/api-proxy/register/signin', loginData, {
      headers: this.requestHeader,
    });
  }

  public register(data: any, role: string) {
    let path = '';
    if (role === `"Employeer"`) {
      path = '/register/employer'
    } else if (role === `"Employee"`) {
      path = '/register/employee'
    }
    return this.httpclient.post("/api-proxy" + path, data, {
      headers: this.requestHeader,
    });
  }

  public roleMatch(allowedRoles: any[]): any {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    console.info(userRoles, "userRoles")
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i] === allowedRoles[j]) {
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
