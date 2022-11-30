import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/shared/Employees/employees.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  searchfunc = false;
  mainfunc=true;
  postfunc=false;
  tableshow = false;
  updateShow = false;
  PANVALID = false;
  constructor(
    private service: EmployeesService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  searchForm = this.fb.group({
    PanNumber: '',
  });
  postForm=this.fb.group({
    name:'',
    company:'',
    offerReceivedDate:Date,
    joiningDate:Date,
    jobTitle:'',
    ctc:'',
    panNumber:''
  })
  users: any = [];
  ngOnInit(): void {
    this.onAuthCheck();
  }
  onAuthCheck() {
    debugger;
    let data = JSON.parse(JSON.stringify(localStorage.getItem('res')));
    debugger;
    if (data == null) {
      this.router.navigateByUrl('/login');
    }
  }
  onSearchFunctionality(value: number) {
    if (value == 0) {
      this.searchfunc = true;
      this.mainfunc=false;
      this.postfunc=false;
    } else {
      window.location.reload();
      this.searchfunc = false;
    }
  }
  onPostFunctionality(value: number) {
    if (value == 0) {
      this.postfunc = true;
      this.mainfunc=false;
      this.searchfunc=false;
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
  logout(){
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
  createOffer(){
    this.service.createOffer(this.postForm.value).subscribe(res=>{
      window.location.reload();
    },err=>{
      console.log(err);
      alert(err.message);
    })
  }
}
