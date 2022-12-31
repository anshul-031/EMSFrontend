import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import Swal from 'sweetalert2';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private metaService: Meta,
    private titleService: Title,) { 
      this.addTag();
    }
  registerForm = this.fb.group({
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    country: ['', Validators.required],
    orgName: ['', Validators.required],
    website: ['', Validators.required],
    referredBy: '',
    password: ['', Validators.required]
  })

  addTag() {
    this.titleService.setTitle("Register | YourEmployeeCheck")
    this.metaService.updateTag({ name: 'description', content: "Register | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });
    this.metaService.updateTag({ property: 'og:title', content: 'Register | YourEmployeeCheck' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://youremployeecheck.com/register' });
  }

  submit() {

    const role = localStorage.getItem("role");
    console.info(this.registerForm.value)
    this.userService.register(this.registerForm.value, role as string).subscribe(
      (response: any) => {
        console.info(response, "response")
        Swal.fire({
          title: 'Success!',
          text: 'Your user id and password created. validate user via email link and login to continue',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/login'])
          }
        })
        
      },
      (error) => {
        if(error.status === 200) {
          Swal.fire({
            title: 'Success!',
            text: 'Your user id and password created. validate user via email link and login to continue',
            icon: 'success',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/login'])
            }
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: error.error,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        }
      }
    );


  }

}
