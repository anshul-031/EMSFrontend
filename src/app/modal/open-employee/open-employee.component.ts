import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-employee',
  templateUrl: './open-employee.component.html',
  styleUrls: ['./open-employee.component.css']
})
export class OpenEmployeeComponent implements OnInit {

  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  goToEmployee(number:any){
    if(number==1){
     this.router.navigateByUrl("/register")

      
    }else{
      this.router.navigateByUrl("/employee/register")
    }
    this.dialog.closeAll();
  }
}
