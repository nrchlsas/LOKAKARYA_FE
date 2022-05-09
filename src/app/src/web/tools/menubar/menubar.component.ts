import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  userData: any;
  userId: any;
  constructor(private Router: Router) { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
        { label:'Home', icon:'pi pi-fw pi-home', routerLink:'/homeAdmin' },
        { label:'Table Admin', icon:'pi pi-fw pi-users',  routerLink:'/tableAdmin'},

    ];


  }

  logout():void {

    Swal.fire({
      title: 'Are you sure Logout?',
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Logout', '', 'success')
        localStorage.clear();
        // window.location.reload();
        this.Router.navigate(['/homeLogin']);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
