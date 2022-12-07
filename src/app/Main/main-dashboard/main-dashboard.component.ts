import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../../shared/Employees/employees.service';
import { UserAuthService } from '../../_services/user-auth.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  searchfunc = false;
  mainfunc = true;
  postfunc = false;
  tableshow = false;
  updateShow = false;
  PANVALID = false;
  constructor(
    private service: EmployeesService,
    private fb: FormBuilder,
    private router: Router,
    private userAuthService: UserAuthService
  ) { }
  searchForm = this.fb.group({
    PanNumber: '',
  });
  postForm = this.fb.group({
    name: '',
    company: '',
    offerReceivedDate: Date,
    joiningDate: Date,
    jobTitle: '',
    ctc: '',
    panNumber: ''
  })
  users: any = [];
  ngOnInit(): void {
    
  }

  public setUserName() {
    return this.userAuthService.getUserName();
  }

  onSearchFunctionality(value: number) {
    if (value == 0) {
      this.searchfunc = true;
      this.mainfunc = false;
      this.postfunc = false;
    } else {
      window.location.reload();
      this.searchfunc = false;
    }
  }
  onPostFunctionality(value: number) {
    if (value == 0) {
      this.postfunc = true;
      this.mainfunc = false;
      this.searchfunc = false;
    } else {
      window.location.reload();
      this.postfunc = false;
    }
  }
  checkPan() {
    if (this.searchForm.value.PanNumber?.length == 10) {
      debugger
      this.tableshow = true;
      this.Search();
    } else {
      this.tableshow = false;
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  Search() {
    debugger
    this.service.search(this.searchForm.value.PanNumber).subscribe(
      (res) => {
        debugger
        this.users = JSON.parse(JSON.stringify(res));
        console.log(this.users);

      },
      (err) => {
        console.log(err);
      }
    );
  }
  onupdateFunctionality(values: number) {
    this.updateShow = true;
  }
  createOffer() {
    this.service.createOffer(this.postForm.value).subscribe(res => {
      window.location.reload();
    }, err => {
      console.log(err);
      alert(err.message);
    })
  }
}
