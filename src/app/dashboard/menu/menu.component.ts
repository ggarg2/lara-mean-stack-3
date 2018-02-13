import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  createMenu(){
    this.dashboardService.createMenu();
  }

  updateMenu(){ 
    this.dashboardService.updateMenu();
  }

  deleteMenu(){
    this.dashboardService.deleteMenu();
  }

  getAllMenu(){
    this.dashboardService.getAllMenu()
  }

  getMenuById(){
    this.dashboardService.getMenuById()
  }

}
