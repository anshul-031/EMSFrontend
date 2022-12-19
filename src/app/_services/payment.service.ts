import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  requestHeader = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private httpclient: HttpClient,) { }

  public createOrder(orderData: any) {
    return this.httpclient.post(environment.API_URL + '/order/order', orderData, {
      headers: this.requestHeader,
    });
  }

  verifyPayment(paymentResponse: any) {
    return this.httpclient.put(environment.API_URL + '/order/order', paymentResponse, {
      headers: this.requestHeader,
    });
  }
}
