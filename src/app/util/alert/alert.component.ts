import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  successAlert(msg, action){
    this.snackBar.open(msg, action, {
      duration: 2000,
    });
  }

  errorAlert(msg, action){
    this.snackBar.open(msg, action, {
      duration: 2000,
    });
  }

}
