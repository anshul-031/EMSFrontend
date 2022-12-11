import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  requestHeader = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private httpclient: HttpClient,) { }

  public createJobOffers(jobOfferData: any) {
    return this.httpclient.post(environment.API_URL + '/employer/employmentoffer', jobOfferData, {
      headers: this.requestHeader,
    });
  }
}
