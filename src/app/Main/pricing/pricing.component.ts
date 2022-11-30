import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "HttpOnly");

    var formdata = new FormData();
    formdata.append("companyname", "infosys");

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("/mcafoportal/cinLookup.do", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

}
