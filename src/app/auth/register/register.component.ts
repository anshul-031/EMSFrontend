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
    orgName:'',
    cinNumber:'',
    website:'',
    mobile:'',
    email:'',
    password:'',
    country: 'India'
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
    return this.service.register(this.registerForm.value).subscribe({
      next: (response) => {
        alert(response);
        this.router.navigateByUrl("/login")
      },
      error: (err: any) => {
        console.log(err);
        alert(err);
      } 
    });    
  }
  comingSoon(){
    alert("Employee signup feature is coming soon!");
    this.router.navigateByUrl("/");
  }
}
