import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OpenEmployeeComponent } from 'src/app/modal/open-employee/open-employee.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  selectPage(){
    this.dialog.open(OpenEmployeeComponent);
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView()
  }
  tohome(){
    document.getElementById("about")?.scrollIntoView()
  }
  toabout(){
    document.getElementById("home")?.scrollIntoView()
  }
}
