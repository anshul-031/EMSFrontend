import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ModalPopService {
  constructor(private http: HttpClient) { }
  readonly baseurl = '/mcafoportal/cinLookup.do'
  companySearch(values: any) {
    return this.http.post(this.baseurl, values);
  }
}
