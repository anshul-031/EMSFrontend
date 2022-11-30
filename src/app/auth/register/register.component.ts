import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private fb:FormBuilder,private service:AuthService,private router:Router) { }
  registerForm=this.fb.group({
    username:'',
    companyName:'',
    cinNumber:'',
    website:'',
    mobile:'',
    emailId:'',
    password:''
  })
  roles=false;
  ngOnInit(): void {
    const data=JSON.parse(JSON.stringify(localStorage.getItem("role")));
    if(data=="Employee"){
    this.roles=true;
    }else{
      this.roles=false
    }
    
  }
  submit(){
    return this.service.register(this.registerForm.value).subscribe(res=>{
      this.router.navigateByUrl("/login")
    },err=>{
      console.log(err);
      
    })
    
  }

}
