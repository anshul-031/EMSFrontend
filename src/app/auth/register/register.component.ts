import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router, private userService: UserService,) { }
  registerForm = this.fb.group({
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    country: ['', Validators.required],
    orgName: ['', Validators.required],
    website: ['', Validators.required],
    referredBy: '',
    password: ['', Validators.required]
  })
  ngOnInit(): void {
    
  }
  submit() {

    const role = localStorage.getItem("role");
    console.info(this.registerForm.value)
    this.userService.register(this.registerForm.value, role as string).subscribe(
      (response: any) => {
        console.info(response, "response")
        this.router.navigate(['/login'])
      },
      (error) => {
        if(error.status === 200) {
          this.router.navigate(['/login'])
        } else {
          console.error(error)
        }
      }
    );


  }

}
