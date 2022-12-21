import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }
  resetForm = this.fb.group({
    newPassword: '',
    confirmpassword: '',
    id: ''
  })

  ngOnInit(): void {
    this.resetForm.setValue({
      newPassword: '',
      confirmpassword: '',
      id: this.route.snapshot.paramMap.get('id')
    })
  }
  submit() {
   console.info(this.resetForm.value)
  }

}
