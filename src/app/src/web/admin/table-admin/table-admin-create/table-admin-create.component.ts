import { MenuService } from './../../../../../../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { HakAksesService } from 'src/service/hak-akses.service';
import { UserService } from 'src/service/user.service';
import { GroupService } from 'src/service/group.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


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
  styleUrls: ['./table-admin-create.component.css'],
  providers: [MessageService]
})
export class TableAdminCreateComponent implements OnInit {
  displayAdminCreate: boolean = false;
  action = '';
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

  displayModal: boolean = false;
  displayBasic: boolean = false;
  displayBasic2: boolean = false;
  displayMaximizable: boolean = false;
  displayPosition: boolean = false;
  position: string = '';

  phoneNumber: string = '';
  checkUser: boolean = false;
  checkEmail: boolean = false;
  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  userData: any;

  nama: string = '';
  actions: string = '';
  valuepass1: string = '';
  newPass: string = '';
  confirmNewPass: string = '';
  valuepass4: string = '';
  today: any = new Date();
  userIdxGroup: any;
  first = 0;
  rows = 10;

  showSearch: boolean = false;
  selectedGroup: any[] = [];
  checked: boolean = false;

  submitEdit: boolean = false;
  submitAdd: boolean = false;

  newUserValid: boolean = false;


  groups: any;

  row: any = {
    // userId: 0,
    username: '',
    password: '',
    name: '',
    address: '',
    email: '',
    phone: '',
    groupName: [],
    createdBy: '',
    permissions: [],
    menus: [],
  };

  newAccess: any = {
    userId: '',
    groupId: '',
    createdBy: '',
    createdDate: '',
    isActive: '',
  }

  bro: any;
  editGroups: any;

  groupList: any;

  putIsActive: any;

  hakAksess: any;

  keyword:string='';

  arrayGroup: any[] = [];
  arrayGroupIsActive: any[] = [];

  dataUser: any;
  wrongConfirmPassword: boolean = false;
  wrongPassword: boolean = false;

  constructor(
    private router : Router,private confirmationService: ConfirmationService,private MenuService : MenuService, private HakAksesService :HakAksesService, private UserService : UserService,private groupsService: GroupService,private messageService: MessageService
    // private messageService: MessageService,
    // private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
    this.UserService.getUser().subscribe((res) => {
      console.log(res.data, 'ini apaa11');
      res.data.forEach((row: any) => {
        this.groupsService.getGroupByUserId(row.userId).subscribe((result) => {
          row.groupName = result.data;
        });
      });
      this.users = res.data;
    });

    this.UserService.getByUserId(Number(localStorage.getItem('token'))).subscribe(
      res => {
        this.dataUser = res.data;
      }
    )

    this.groupsService.getGroup().subscribe((res) => {
      this.groups = res.data;
    })
  }
  showBasicDialog2(row: any) {
    this.displayBasic = false;
    this.displayBasic2 = true;
    this.submitted = false;
    this.actions = 'add';
    this.row = {
      ...row.createdBy
    };
    this.UserService.getByUserId(Number(localStorage.getItem('token'))).subscribe(
      res => {
        this.row.createdBy = res.data.name;
      }
    )
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

  openEdit(row: any) {
    this.displayBasic2 = true;
    this.actions = 'edit';
    this.row = {
      ...row
    };
    this.UserService.getByUserId(Number(localStorage.getItem('token'))).subscribe(
      res => {
        this.name = res.data.name;
      }
    )
  }


  showBasicDialog() {
    this.displayBasic2 = false;
    this.displayBasic = true;
    this.submitted = false;
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

  // handlepost(event: any) {
  //   console.log(this.action,"action");
  //   // let date = this.DatePipe.transform(this.HIRE_DATE, 'MM/dd/yyyy');

  //   this.submitted = true;
  //   Swal.fire({
  //     title: 'Are you sure Add Row?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //   }).then(() => {
  //     if (this.action === 'add') {
  //       this.UserService.postUser(this.row)
  //         .subscribe(
  //           data => {
  //             if (data && data.status === 200) {
  //               console.log(data, 'CREATE');
  //               this.submitted = false;
  //               this.displayAdminCreate = false;
  //               window.location.reload();
  //             }
  //           },
  //           error => {
  //             console.log(error, 'ERROR');
  //             this.displayAdminCreate = false;
  //             window.location.reload();
  //           });
  //           window.location.reload();

  //     } else {
  //       this.UserService.putUser(
  //         this.row
  //       ).subscribe(
  //         (event: any) => {
  //           this.icon = 'success'
  //           this.displayAdminCreate = false;
  //           window.location.reload();
  //     },
  //         (err: any) => {
  //         }
  //       );
  //     }
  //   });

  // }

  checkUsername() {
    if (this.username.length >= 5) {
      this.checkUser = false;
    } else {
      this.checkUser = true;
    }
  }
  checkEmailFunc() {
    if (this.email.match(this.mailformat)) {
      this.checkEmail = false;
    } else {
      this.checkEmail = true;
    }
  }
  searchByGroup() {
    this.HakAksesService.getByGroupName(this.keyword).subscribe({
      next: (data: any) => {
        if (data.data.length == 0) {
        }
        this.groups = data.data;
      },
      error: (err) => {},
    });
  }
  invalidUsername() {
    this.messageService.add({
      key: 'tc',
      severity: 'error',
      summary: 'Sorry',
      detail: 'Please type a valid username'
    });
  }

  invalidEmail() {
    this.messageService.add({
      key: 'tc',
      severity: 'error',
      summary: 'Sorry',
      detail: 'Please type a valid email'
    });
  }
  dupEmail() {
    this.messageService.add({
      key: 'tc',
      severity: 'error',
      summary: 'Sorry',
      detail: 'Email already exist'
    });
  }
  toLogin() {
    console.log(this.newUserValid)
    if (this.newUserValid) {
      this.confirmationService.confirm({
        message: 'Do you want to login now?',
        header: 'Login now?',
        icon: 'pi pi-sign-in',
        accept: () => {
          this.router.navigate(['/login']);
        },
        reject: () => {
          window.location.reload();
        }
      });
    }
  }

  newUser() {
    this.UserService.getByUsername(this.username).subscribe((res) => {
      if (!res.status) {
        if (this.checkUser == true) {
          this.invalidUsername();
          return
        } else if (this.checkEmail == true) {
          this.invalidEmail();
          return
        }
        this.UserService.getUserByEmail(this.email).subscribe(
          res => {
            console.log(res)
            if (res.status) {
              this.dupEmail();
              return;
            }
            this.row.username = this.username;
            this.row.password = this.password;
            this.row.email = this.email;
            this.row.phone = this.phoneNumber;
            this.row.address = this.address;
            this.row.name = this.name;
            this.row.createdBy = this.username;
            if (this.row.username != '' && this.row.password != '' &&
              this.row.email != '' &&
              this.row.phone != '' &&
              this.row.address != '' &&
              this.row.name != '') {
              this.newUserValid = true;
              this.UserService.postUser(this.row).subscribe({
                next: (data) => {
                  console.log(data)
                  if (data.status) {
                    this.groupsService.getGroup().subscribe(
                      res => {
                        if (this.selectedGroup.length != res.data.length) {
                          for (let i = 0; i < res.data.length; i++) {
                            if (this.selectedGroup[i] == undefined) {
                              this.newAccess.userId = data.data.userId;
                              this.newAccess.createdBy = data.data.createdBy;
                              this.newAccess.groupId = res.data[i].groupId;
                              this.newAccess.isActive = 'N';
                              this.HakAksesService.postAccess(this.newAccess).subscribe(
                                res => {
                                  console.log(res);
                                }
                              )
                            } else {
                              this.newAccess.userId = data.data.userId;
                              this.newAccess.createdBy = data.data.createdBy;
                              this.newAccess.groupId = this.selectedGroup[i];
                              this.newAccess.isActive = 'Y';
                              this.HakAksesService.postAccess(this.newAccess).subscribe(
                                res => {
                                  console.log(res);
                                }
                              )
                            }
                          }
                        } else {
                          for (let i = 0; i < res.data.length; i++) {
                            this.newAccess.userId = data.data.userId;
                            this.newAccess.createdBy = data.data.createdBy;
                            this.newAccess.groupId = res.data[i].groupId;
                            this.newAccess.isActive = 'Y'
                            console.log(this.newAccess)
                            this.HakAksesService.postAccess(this.newAccess).subscribe(
                              res => {
                                console.log(res);
                              }
                            )
                          }
                        }
                        setInterval(function () {
                          window.location.reload();
                        }, 5000);
                        return
                      }
                    )
                  }
                },
                error: (err) => {}
              })
            }
          }
        )
      }
    })

  }

  successSignUp() {
    this.messageService.add({
      key: 'tc',
      severity: 'success',
      summary: 'Congratulations',
      detail: 'You can login now'
    });
  }

  invalidSignUp() {
    this.messageService.add({
      key: 'tc',
      severity: 'error',
      summary: 'Sorry',
      detail: 'There are some invalid data'
    });
  }

  editUser() {
    this.UserService.putUser(this.row).subscribe({
      next: (data) => {
        console.log(data)
        if (data.status) {
          this.successSignUp();
          this.groupsService.getGroup().subscribe(
            res => {
              this.groupsService.getGroupByUserId(this.row.userId).subscribe(result => {
                console.log(result.data, 'weew')
                if (result.data.length != 0) {
                  for (let i = 0; i < result.data.length; i++) {
                    if (this.selectedGroup[i] != undefined) {
                      console.log(result.data[i].groupId, 'isi arraynya')
                      this.newAccess.userId = data.data.userId;
                      this.newAccess.groupId = result.data[i].groupId;
                      // this.newAccess.issActive = 'Y';
                      this.HakAksesService.putUserxGroupId(this.newAccess.userId, this.newAccess.groupId).subscribe(
                        res => {
                          console.log(res);
                        }
                      )
                    }
                  }
                  for (let j = 0; j < this.selectedGroup.length; j++) {
                    if (this.selectedGroup[j] != undefined) {
                      this.newAccess.userId = data.data.userId;
                      this.newAccess.groupId = this.selectedGroup[j];
                      // this.newAccess.isActive = 'N';
                      this.HakAksesService.putUserxGroupId(this.newAccess.userId, this.newAccess.groupId).subscribe(
                        res => {
                          console.log(res);
                        }
                      )
                    }
                  }
                } else {
                  for (let j = 0; j < this.selectedGroup.length; j++) {
                    if (this.selectedGroup[j] != undefined) {
                      this.newAccess.userId = data.data.userId;
                      this.newAccess.groupId = this.selectedGroup[j];
                      // this.newAccess.isActive = 'N';
                      this.HakAksesService.putUserxGroupId(this.newAccess.userId, this.newAccess.groupId).subscribe(
                        res => {
                          console.log(res);
                        }
                      )
                    }
                  }
                }
              })
              setInterval(function () {
                window.location.reload();
              }, 5000);
              return
            }
          )
        }
      },
      error: (err) => {}
    })

  }

  getUsers(){
    this.UserService.getUser().subscribe((res)=>{
      this.users=res.data;
    })
  }

  handleDelete(value: Event) {
    Swal.fire({
      title: 'Are you sure Delete Row?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
    }).then(() => {
        this.UserService.deleteUser(value).subscribe((res) => {
          console.log(res);
          this.getUsers();
          this.messageService.add({
            severity: 'success',
            summary: 'Delete',
            detail: 'Data has been deleted',
          });
        });
      })
  }
}
