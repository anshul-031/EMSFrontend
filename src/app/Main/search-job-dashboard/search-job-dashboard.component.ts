import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobOfferService } from '../../_services/job-offer.service';
import { UserService } from '../../_services/user.service';
import Swal from 'sweetalert2';

export interface OffersElemnet {
  srNo: number;
  employeeCountry: string;
  offerUpdatedOn: Date;
  joiningDate: Date;
  employmentType: string,
  employerOrgName: string,
  employerEmail: string,
  employmentOfferStatus: string,
}

const ELEMENT_DATA: OffersElemnet[] = [];

@Component({
  selector: 'app-search-job-dashboard',
  templateUrl: './search-job-dashboard.component.html',
  styleUrls: ['./search-job-dashboard.component.css']
})
export class SearchJobDashboardComponent {
  displayedColumns: string[] = ['srNo', 'offerUpdatedOn', 'joiningDate', 'employmentType', 'employerOrgName', 'employerEmail', 'employmentOfferStatus'];
  dataSource = ELEMENT_DATA;
  public searchFormGroup: FormGroup;
  constructor(private jobOfferService: JobOfferService, private router: Router,private userService: UserService) {
    this.searchFormGroup = new FormGroup({
      tin : new FormControl('', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      employeecountry: new FormControl('India'),
    });
   }

  searchOffer() {
    if(this.userService.roleMatch(['EMPLOYER_UNPAID'])) {
      this.userService.accessDenied();
      return;
    }

    this.jobOfferService.getAllEmploymentOffers(this.searchFormGroup.value).subscribe(
      (response: any) => {
        if(response) {
          this.dataSource = response.map((item: any, index : number) => {
            item.srNo = index + 1;
            return item
          });
          this.searchFormGroup.controls['tin'].reset()
        }
      },
      (error) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: error.error,
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }
    );
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.searchFormGroup.controls[controlName].hasError(errorName);
  }

}
