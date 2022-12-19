import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserAuthService } from './user-auth.service';
import Swal from 'sweetalert2';

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
    return this.httpclient.post(environment.API_URL +'/register/signin', loginData, {
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
    if(!role){
      path = '/register/employer'
    }
    return this.httpclient.post(environment.API_URL + path, data, {
      headers: this.requestHeader,
    });
  }

  public accessDenied() {
    if(this.roleMatch(['EMPLOYER_UNPAID'])) {
      Swal.fire({
        title: 'Access Denied',
        text: "You have not done payment",
        icon: 'info',
        confirmButtonText: 'Okay'
      })
      return;
    }
  }

  public roleMatch(allowedRoles: any[]): any {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    if (userRoles != null && userRoles) {
      const foundRole = userRoles.some((role: string) => allowedRoles.includes(role));
      if(foundRole) {
        isMatch = true
        return isMatch;
      } else {
        return isMatch;
      }
    }
  }
}
