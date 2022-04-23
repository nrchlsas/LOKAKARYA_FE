import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private Router: Router) { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
        { label:'Home', icon:'pi pi-fw pi-home', routerLink:'/homeAdmin' },
        { label:'Table Admin', icon:'pi pi-fw pi-users',  routerLink:'/tableAdmin'},

    ];


  }

  logout():void {
    localStorage.clear();
    // window.location.reload();
    this.Router.navigate(['/homeLogin']);
  }
}
