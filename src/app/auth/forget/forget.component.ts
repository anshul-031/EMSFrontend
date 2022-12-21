import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  forgetForm = this.fb.group({
    emailId: ''
  })
  ngOnInit(): void {
  }
  submit() {
    console.info(this.forgetForm.value)
  }
}
