import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/shared/Employees/employees.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:EmployeesService,private router:Router) { }
  loginForm=this.fb.group({
    email:"",
    password:""
  })
  ngOnInit(): void {
  }
  submit(){
    this.service.login(this.loginForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl("/dashboard")
    },err=>{
      console.log(err);
      alert(err.message)
    })
  }
}
