import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.css']
})
export class HomeloginComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      this.Router.navigate(['/home']);
    }
  }

  login(): void {
    localStorage.setItem('token','x')
    localStorage.setItem('name','Adminstrator')
    window.location.reload();
  }


}
