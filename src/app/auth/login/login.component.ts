import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../_services/user-auth.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private userAuthService: UserAuthService,) { }
  loginForm = this.fb.group({
    username: ['', Validators.required],
    userpwd: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  submit() {
    this.userService.login(this.loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setToken(response.token);
        this.userAuthService.setRoles(this.userAuthService.parseJwt(response.token).roles);
        this.router.navigate(['/dashboard'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
