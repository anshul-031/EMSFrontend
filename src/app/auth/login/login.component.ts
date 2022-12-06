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

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  submit() {
    console.info(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setToken(response.token);
        console.info(this.parseJwt(response.token))
        this.userAuthService.setRoles(this.parseJwt(response.token).roles);
        this.router.navigate(['/'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
