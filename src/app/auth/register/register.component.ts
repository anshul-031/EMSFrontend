import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService,) {
  }
  loading = false;
  registerForm = this.fb.group({
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    country: ['', Validators.required],
    orgName: ['', Validators.required],
    website: ['', Validators.required],
    referredBy: '',
    password: ['', Validators.required]
  })

  submit() {

    const role = localStorage.getItem("role");
    console.info(this.registerForm.value)
    this.loading = true;
    this.userService.register(this.registerForm.value, role as string).subscribe(
      (response: any) => {
        console.info(response, "response")
        this.loading = false;
        Swal.fire({
          title: 'Success!',
          text: 'Please verify your email by clicking on the link on the email',
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
        if (error.status === 200) {
          this.loading = false;
          Swal.fire({
            title: 'Success!',
            text: 'Please verify your email by clicking on the link on the email',
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
          this.loading = false;
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
