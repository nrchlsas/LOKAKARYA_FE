import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
        // { label:'Change Password', icon:'pi pi-fw pi-users',  routerLink:'/Cpassword'},
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
