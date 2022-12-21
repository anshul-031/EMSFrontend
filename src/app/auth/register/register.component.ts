import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService,) { }
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
