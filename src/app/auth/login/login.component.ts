import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../_services/user-auth.service';
import { UserService } from '../../_services/user.service';
import Swal from 'sweetalert2';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,
    private metaService: Meta,
    private titleService: Title,
    private router: Router,
    private userService: UserService,
    private userAuthService: UserAuthService,) {
      this.addTag();
     }
  loginForm = this.fb.group({
    username: ['', Validators.required],
    userpwd: ['', Validators.required]
  })


  addTag() {
    this.titleService.setTitle("Login | YourEmployeeCheck")
    this.metaService.updateTag({ name: 'description', content: "Login | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });
    this.metaService.updateTag({ property: 'og:title', content: 'Login | YourEmployeeCheck' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://youremployeecheck.com/login' });
  }

  submit() {
    this.userService.login(this.loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setToken(response.token);
        this.userAuthService.setRoles(this.userAuthService.parseJwt(response.token).roles);
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
          console.info("called")
        }, 500)
        
      },
      (error) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: error.error,
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }
    );
  }

}
