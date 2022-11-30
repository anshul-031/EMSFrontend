import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:AuthService,private router:Router,
    private route:ActivatedRoute) { }
  resetForm=this.fb.group({
    newPassword:'',
    confirmpassword:'',
    id:''
  })

  ngOnInit(): void {
    this.resetForm.setValue({
      newPassword:'',
      confirmpassword:'',
      id:this.route.snapshot.paramMap.get('id')
    })
  }
  submit(){    
    return this.service.reset(this.resetForm.value).subscribe(res=>{
      this.router.navigateByUrl("/")
    },err=>{
      console.log(err);
    })
    
  }

}
