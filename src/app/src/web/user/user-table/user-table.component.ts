import  Swal  from 'sweetalert2';
import { UserService } from './../../../../../service/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  displayAdminCreate: boolean = false;
  action = '';
  displayBasic = true;

  data : any;
  User =  '';
  Password = '';
  Nama = '';
  Alamat = '';
  Email = '';
  Telp = 0;
  ProgramName = '';
  CreateDate = Date;
  CreateBy = '';
  UpdateBy = '';
  UpdateDate = Date;

  row: any = {
    User: '',
    password: '',
    name: '',
    address: '',
    email: '',
    phone: 0,
    programName: '',
    createdBy: '',
    updatedBy: ''
  };


  submitted: boolean = false;
  actionResult = '';
  constructor(private UserService : UserService) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.UserService.getUser().subscribe({
      next: (data) => {
        console.log(data.data, "data masih kosong")
        this.data = data.data;

      },
      error: (err) => {
        console.log(err);
      },
    })
  }
  showAdmin(event: any) {
    this.action = 'add';
    this.submitted = false;
    this.displayAdminCreate = true;
  }

  handleSave(event: any) {
    this.displayAdminCreate = false;
  }


  handleReset(event: any) {
    this.row = {
      username: '',
      password: '',
      name: '',
      address: '',
      email: '',
      phone: 0,
      programName: '',
      createdBy: '',
      updatedBy: ''
    };
  }

  handlepost(event: any) {
    console.log(this.action,"action");
    // let date = this.DatePipe.transform(this.HIRE_DATE, 'MM/dd/yyyy');

    this.submitted = true;
    Swal.fire({
      title: 'Are you sure Add Row?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
    }).then(() => {
      if (this.action === 'add') {
        this.UserService.postUser(this.row)
          .subscribe(
            data => {
              if (data && data.status === 200) {
                console.log(data, 'CREATE');
                this.submitted = false;
                this.displayAdminCreate = false;

              }
            },
            error => {
              console.log(error, 'ERROR');
              this.displayAdminCreate = false;

            });
            window.location.reload();
          }
        })
      }
}
