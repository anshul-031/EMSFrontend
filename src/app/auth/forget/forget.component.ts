import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:AuthService,private router:Router) { }
  forgetForm=this.fb.group({
    emailId:''
  })
  ngOnInit(): void {
  }
  submit(){
    this.service.forget(this.forgetForm.value.emailId).subscribe(res=>{
      console.log("res",res);
      
    },err=>{
      console.log(err);
      
    })
  }
}
