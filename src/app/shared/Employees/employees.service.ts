import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http:HttpClient) { }
  readonly baseurl='http://localhost:9000/v1/employees/'
  register(values:any){
    return this.http.post(this.baseurl+'save',values);
  }
  login(values:any){
    return this.http.post(this.baseurl+'login',values);
  }
  forget(email:any){
    return this.http.get(this.baseurl+`forget/${email}`);
  }
  reset(values:any){
    return this.http.post(this.baseurl+`reset`,values);
  }
  search(values:any){
    return this.http.get(this.baseurl+`searchByPan/${values}`)
  }
  createOrder(values:any){
    return this.http.post(this.baseurl+'create',values);
  }
  createOffer(values:any){
    return this.http.post(this.baseurl+'offer',values);
  }
}
