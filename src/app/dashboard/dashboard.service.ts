import { DASHBOARD_CONSTANTS } from './dashboard.constants';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CoreServices } from '../util/core.service';
import { environment } from '../../environments/environment';
import { MenuItemModel } from '../models/menu-item.model';

@Injectable()
export class DashboardService{

    API_URL: string;

    constructor(private coreServices: CoreServices){
        this.API_URL = environment.API_URL
    }

    createMenu(data: MenuItemModel): Observable<MenuItemModel>{
        return this.coreServices.post(this.API_URL + DASHBOARD_CONSTANTS.CREATE_MENU, data, {});
    }

    updateMenu(data: MenuItemModel){
        return this.coreServices.put(this.API_URL + DASHBOARD_CONSTANTS.UPDATE_MENU, data, {});
    }

    getAllMenu(): Observable<MenuItemModel>{   
        return this.coreServices.get(this.API_URL + DASHBOARD_CONSTANTS.FETCH_ALL_MENU, {});
    }

    getMenuById(id: string): Observable<MenuItemModel>{
        return this.coreServices.get(this.API_URL + DASHBOARD_CONSTANTS.FETCH_MENU_BY_ID + id, {})
    }

    deleteMenu(id: string): Observable<any>{
        return this.coreServices.delete(this.API_URL + DASHBOARD_CONSTANTS.DELETE_MENU + id, {})
    }

}