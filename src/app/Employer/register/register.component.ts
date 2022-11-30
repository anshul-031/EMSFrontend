import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompanysearchDialogComponent } from 'src/app/modal/companysearch-dialog/companysearch-dialog.component';
import { AuthService } from 'src/app/shared/Employer/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private dialog:MatDialog
  ) {}
  registerForm = this.fb.group({
    username: '',
    companyName: '',
    cinNumber: '',
    website: '',
    mobile: '',
    emailId: '',
    password: '',
  });
  ngOnInit(): void {}
  submit() {
    return this.service.register(this.registerForm.value).subscribe(
      (res) => {
        this.router.navigateByUrl('/login');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  openDialog(){
    this.dialog.open(CompanysearchDialogComponent);
  }
}
