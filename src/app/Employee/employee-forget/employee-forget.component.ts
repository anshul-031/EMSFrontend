import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/shared/Employees/employees.service';

@Component({
  selector: 'app-employee-forget',
  templateUrl: './employee-forget.component.html',
  styleUrls: ['./employee-forget.component.css']
})
export class EmployeeForgetComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:EmployeesService,private router:Router) { }
  forgetForm=this.fb.group({
    emailId:''
  })
  ngOnInit(): void {
  }
  submit(){
    this.service.forget(this.forgetForm.value.emailId).subscribe(res=>{
      console.log(JSON.parse(JSON.stringify(res)));
      
      
    },err=>{
      console.log(err);
      
    })
  }
}

