import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  public getAllEmploymentOffers(searchData: any) {
    let queryParam = '?tin=';
    if(searchData.tin && searchData.tin !== '') {
      queryParam = queryParam + searchData.tin;
    } 
    if(searchData.employeecountry && searchData.employeecountry !== '') {
      queryParam = queryParam + '&employeecountry=' + searchData.employeecountry;
    } 
    return this.httpclient.get(environment.API_URL + '/employer/employmentoffer/search' + queryParam, {
      headers: this.requestHeader,
    });
  }
}
