import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menubar-user',
  templateUrl: './menubar-user.component.html',
  styleUrls: ['./menubar-user.component.css']
})
export class MenubarUserComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private Router: Router) { }

  ngOnInit(): void {
    this.items = [
        { label:'Home', icon:'pi pi-fw pi-home', routerLink:'/user' },
        { label:'Table User', icon:'pi pi-fw pi-users',  routerLink:'/tableUser'},
    ];


  }

  logout():void {
    localStorage.clear();
    window.location.reload();
    this.Router.navigate(['/hoomeLogin']);
  }
}
