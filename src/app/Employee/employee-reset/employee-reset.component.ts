import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/shared/Employees/employees.service';

@Component({
  selector: 'app-employee-reset',
  templateUrl: './employee-reset.component.html',
  styleUrls: ['./employee-reset.component.css']
})
export class EmployeeResetComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:EmployeesService,private router:Router,
    private route:ActivatedRoute) { }
  resetForm=this.fb.group({
    newPassword:'',
    confirmpassword:'',
    id:''
  })

  ngOnInit(): void {
    this.resetForm.setValue({
      newPassword:'',
      confirmpassword:'',
      id:this.route.snapshot.paramMap.get('id')
    })
  }
  submit(){    
    return this.service.reset(this.resetForm.value).subscribe(res=>{
      this.router.navigateByUrl("/")
    },err=>{
      console.log(err);
    })
    
  }

}
