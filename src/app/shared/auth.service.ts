import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  readonly baseurl = '/api/employer/'
  register(values: any) {
    return this.http.post(this.baseurl + 'save', values);
  }
  login(values: any) {
    return this.http.post(this.baseurl + 'login', values);
  }
  forget(email: any) {
    return this.http.get(this.baseurl + `forget/${email}`);
  }
  reset(values: any) {
    return this.http.post(this.baseurl + `reset`, values);
  }
}
