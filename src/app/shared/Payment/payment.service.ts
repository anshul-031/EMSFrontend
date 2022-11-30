import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http:HttpClient) { }
  readonly baseurl='http://localhost:9000/v1/payment/'
  createOrder(values:any){
    return this.http.post(this.baseurl+'create',values);
  }
}
