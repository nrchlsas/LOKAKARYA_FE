import { UserService } from './../../../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MenuItem, MessageService } from 'primeng/api';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.css'],
  providers: [MessageService]
})
export class HomeloginComponent implements OnInit {
  password: string = '';
  username: string = '';
  checkUser: boolean = false;
  userData: any;
  userId: any;

  constructor(private Router: Router, private UserService: UserService,private messageService: MessageService) { }

  ngOnInit(): void {

  }

  login() {
    this.UserService.getByUsername(this.username).subscribe(
      res => {
        this.userData = res.data;
        if (res.status) {
          console.log('wfafwa')
          if (this.userData.username == this.username && this.userData.password == this.password) {
            this.successLogin()
            localStorage.setItem('token', this.userData.userId)
            localStorage.setItem('name', 'Administrator')
            this.aceessuser();
            return
          }
        //     this.wrongUser();
        //   }
        // } else {
        //   this.wrongUser();
        } else if (this.username =='admin'  &&  this.password == 'admin' ) {
          this.successLoginaadmin()
          localStorage.setItem('token', 'x')
          localStorage.setItem('name', 'Administrator')
          this.aceess();
          return
        } else {
          this.wrongUser();
    }
      }
    );
  }

  // login(): void {
  //   localStorage.setItem('token','x')
  //   localStorage.setItem('name','Adminstrator')
  //   this.aceess();
  // }
  aceess(): void {
    if(localStorage.getItem('token')) {
      this.Router.navigate(['/home']);
    }
  }


  loginadmin(): void {
      if (this.username =='admin'  &&  this.password == 'admin' ) {
        this.successLoginaadmin()
        localStorage.setItem('token', 'x')
        localStorage.setItem('name', 'Administrator')
        this.aceessuser();
        return
      } else {
        this.wrongUser();
  }
}
  aceessuser(): void {
    if(localStorage.getItem('token')) {
      this.Router.navigate(['/homeU']);
    }
  }

  checkUsername() {
    if (this.username.length < 5) {
      this.checkUser = true;
    } else {
      this.checkUser = false;
    }
  }

  wrongUser() {
    Swal.fire(
      'Sorry Password Wrong',
      'Thanks'
    )
  }

  successLogin() {
    Swal.fire(
      'password Benar anda memiliki token ' +this.userData.userId ,
      'That thing is still around?',
      'question'
    )
  }

  successLoginaadmin() {
    Swal.fire(
      'You Admin',
      'That thing is still around?',
      'question'
    )
  }

}
