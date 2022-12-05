import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-popup',
  templateUrl: './dashboard-popup.component.html',
  styleUrls: ['./dashboard-popup.component.css']
})
export class DashboardPopupComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router) {}
  selected:any;
  ngOnInit(): void {
    //this.selected=""
  }
  submit(){
    this.dialog.closeAll();
    //localStorage.setItem("role",JSON.stringify(this.selected))
    localStorage.setItem("role",this.selected)
    this.router.navigateByUrl("/register")
    
  }

}
