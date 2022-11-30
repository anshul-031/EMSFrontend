import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalPopService } from 'src/app/shared/ModalPop/ModalPopUp.Service';

@Component({
  selector: 'app-companysearch-dialog',
  templateUrl: './companysearch-dialog.component.html',
  styleUrls: ['./companysearch-dialog.component.css'],
})
export class CompanysearchDialogComponent implements OnInit {
  companySearchForm=this.fb.group({
    companyname:''
  })
  constructor(private fb:FormBuilder,private service:ModalPopService) {}
  users: any = [];
  visiblemodal = false;
  ngOnInit(): void {}
  visible() {
    this.visiblemodal = true;
    this.service.companySearch(this.companySearchForm.value).subscribe(res=>{
      
      
      this.users=JSON.parse(JSON.stringify(res));
      console.log(this.users);
    },err=>{
      console.log(err);
      
    })
  }
}
