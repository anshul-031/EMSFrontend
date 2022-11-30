import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from "../../shared/Employees/employees.service";
@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  
  constructor(private fb:FormBuilder,private service:EmployeesService,private router:Router) { }
 
  ngOnInit(): void {
  }
  registerForm=this.fb.group({
    safeHiringRegistration:'',
    panCard:'',
    name:'',
    email:'',
    password:'',
    phoneNo:'',
    dob:'',
    address:'',
    permanentAddress:'',
    preferredWorkLocation:''
  })
  submit(){
    this.service.register(this.registerForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl("/employee/login")
    },err=>{
      console.log(err);
      alert(err.message);
      
    })
  }
}
