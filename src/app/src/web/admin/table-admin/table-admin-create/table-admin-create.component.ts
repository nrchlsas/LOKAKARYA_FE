import { UserService } from './../../../../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import Swal from 'sweetalert2';


export interface admin {
  User: string;
  password: string;
  name: string;
  address: string;
  email: string;
  phone: Number;
  programName: string;
  createdDate: Date;
  CreateBy: string;
  updatedBy: string;
  updatedDate: Date;
}
@Component({
  selector: 'app-table-admin-create',
  templateUrl: './table-admin-create.component.html',
  styleUrls: ['./table-admin-create.component.css']
})
export class TableAdminCreateComponent implements OnInit {
  displayAdminCreate: boolean = false;
  action = '';
  displayBasic = true;
  users: any;
  username = '';
  password = '';
  name = '';
  address = '';
  email = '';
  phone = 0;
  programName = '';
  createdDate = new Date;
  createdBy = '';
  updatedBy = '';
  updatedDate = new Date;
  icon = '';

  submitted: boolean = false;
  actionResult = '';
  data: any;

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

  constructor(
    private UserService: UserService,
    // private messageService: MessageService,
    // private confirmationService: ConfirmationService

  ) { }

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
  ShowopenEdit(row: any) {
    this.row = { ...row };
    this.submitted = false;
    this.displayAdminCreate = true;
    this.action = 'edit';
  }

  handleSave(event: any) {
    this.displayAdminCreate = false;
  }


  handleReset(event: any): void {
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

  deleteUser(id: any) {
    Swal.fire({
      title: 'Are you sure Delete Row?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
    }).then(() => {
    this.UserService.deleteUser(id).subscribe((res) => {
      console.log(res.data);
      this.users = res.data;
    });
    window.location.reload();
  })
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
                window.location.reload();
              }
            },
            error => {
              console.log(error, 'ERROR');
              this.displayAdminCreate = false;
              window.location.reload();
            });
            window.location.reload();

      } else {
        this.UserService.putUser(
          this.row
        ).subscribe(
          (event: any) => {
            this.icon = 'success'
            this.displayAdminCreate = false;
            window.location.reload();
      },
          (err: any) => {
          }
        );
      }
    });

  }
}
