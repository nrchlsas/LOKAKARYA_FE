import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tab-menu-admin',
  templateUrl: './tab-menu-admin.component.html',
  styleUrls: ['./tab-menu-admin.component.css']
})
export class TabMenuAdminComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'Admin Create', icon: 'pi pi-fw pi-home', routerLink:'/tableAdminCreate'},
      {label: 'Admin Menu', icon: 'pi pi-fw pi-calendar', routerLink:'/tableAdminMenu'},
  ];
}

  }
