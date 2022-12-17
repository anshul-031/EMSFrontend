import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  requestHeader = new HttpHeaders({ 'Content-type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200", });
  proxyURL = "https://cors-anywhere.herokuapp.com/";

  constructor(private httpclient: HttpClient,) { }

  public createJobOffers(jobOfferData: any) {
    return this.httpclient.post(this.proxyURL + environment.API_URL + '/employer/employmentoffer', jobOfferData, {
      headers: this.requestHeader,
    });
  }

  public getAllEmploymentOffers(searchData: any) {
    let queryParam = '?tin=';
    if (searchData.tin && searchData.tin !== '') {
      queryParam = queryParam + searchData.tin;
    }
    if (searchData.employeecountry && searchData.employeecountry !== '') {
      queryParam = queryParam + '&employeecountry=' + searchData.employeecountry;
    }
    
    return this.httpclient.get(this.proxyURL + environment.API_URL + '/employer/employmentoffer/search' + queryParam, {
      headers: this.requestHeader,
    });
  }
}
