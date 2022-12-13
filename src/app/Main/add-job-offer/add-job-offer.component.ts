import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobOfferService } from '../../_services/job-offer.service';
import { UserAuthService } from '../../_services/user-auth.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-job-offer',
  templateUrl: './add-job-offer.component.html',
  styleUrls: ['./add-job-offer.component.css'],
  providers: [ DatePipe ]
})
export class AddJobOfferComponent implements OnInit {
  public addJobFormGroup: FormGroup;
  employmentTypes = [
    {value: 'JOB', viewValue: 'Job'},
    {value: 'FREELANCING', viewValue: 'Freelancing'},
    {value: 'INTERNSHIP', viewValue: 'Internship'},
    {value: 'OTHERS', viewValue: 'Others'},
  ];
  constructor(private userAuthService: UserAuthService, private jobOfferService: JobOfferService, private router: Router, public datePipe: DatePipe) { 
    this.addJobFormGroup = new FormGroup({
      ern : new FormControl(''),
      employerOrgName : new FormControl('',),
      employerEmail : new FormControl('', [Validators.required]),
      joiningDate : new FormControl('', [Validators.required]),
      employmentType : new FormControl('JOB', [Validators.required]),
      tin : new FormControl('', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      employeeCountry: new FormControl(''),
      updatedBy : new FormControl(this.userAuthService.getUserName()),
      enableEmploymentOfferMonitoring : new FormControl(true),

    });
  }

  ngOnInit(): void {
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addJobFormGroup.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.addJobFormGroup.value.joiningDate = this.datePipe.transform(this.addJobFormGroup.value.joiningDate, 'yyyy-MM-dd')

    this.jobOfferService.createJobOffers(this.addJobFormGroup.value).subscribe(
      (response: any) => {
        console.info(response)
        this.router.navigate(['/dashboard'])
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: error.error,
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }
    );
  }

}
