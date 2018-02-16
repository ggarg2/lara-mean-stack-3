import { MenuItemModel } from '../../models/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItemModel = new MenuItemModel();

  constructor(private dashboardService: DashboardService) {

    console.log("Menu component is created")

   }

  ngOnInit() {
    this.getAllMenu();
  }

  createMenu(menu){
    this.dashboardService.createMenu(menu).subscribe(
      (data)=>{
        console.log("Menu is created successfully ", data)
      },
      (error)=>{
        console.log("Error while creating menu ", error)
        if(error.status == 401 || error.status == 403){
          console.log("navigate user to the login page")
        }else if(error.status == 404){
          console.log("navigate user to the resource not found page")          
        }
      }
    );
  }

  updateMenu(menu){ 
    this.dashboardService.updateMenu(menu).subscribe(
      (data)=>{
        console.log("Menu is updated successfully ", data)
      },
      (error)=>{
        console.log("Error while updating menu ", error)
      }
    );
  }

  deleteMenu(id: string){
    this.dashboardService.deleteMenu(id).subscribe(
      (data)=>{
        console.log("Menu is deleted successfully ", data)
      },
      (error)=>{
        console.log("Error while deleting menu ", error)
      }
    );
  }

  getAllMenu(){
    this.dashboardService.getAllMenu().subscribe(
      (data)=>{
        console.log("Menu items are fetched successfully ", data)
      },
      (error)=>{
        console.log("Error while fetching menu items ", error)
        if(error.status == 401 || error.status == 403){
          console.log("navigate user to the login page")
        }else if(error.status == 404){
          console.log("navigate user to the resource not found page")          
        }
      }
    );
  }

  getMenuById(id){
    this.dashboardService.getMenuById(id).subscribe(
      (data)=>{
        console.log("Menu item by id is fetched successfully ", data)
      },
      (error)=>{
        console.log("Error while fetching menu by id", error)
      }
    );
  }

}
