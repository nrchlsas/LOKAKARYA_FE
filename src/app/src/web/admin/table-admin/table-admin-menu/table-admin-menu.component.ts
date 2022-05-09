import { MenuService } from './../../../../../../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { HakAksesService } from 'src/service/hak-akses.service';
import { UserService } from 'src/service/user.service';
import { GroupService } from 'src/service/group.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table-admin-menu',
  templateUrl: './table-admin-menu.component.html',
  styleUrls: ['./table-admin-menu.component.css'],
  providers: [MessageService]
})
export class TableAdminMenuComponent implements OnInit {
Nama = '';
Icon = '';
Url = '';
ProgramName = '';
CreateDate = Date;
CreateBy = '';
UpdateBy = '';
UpdateDate = Date;
data: any;

displayAdminCreate: boolean = false;
action = '';
actionResult = '';
users: any;
icon = '';

displayModal: boolean = false;
displayBasic: boolean = false;
displayBasic2: boolean = false;
displayMaximizable: boolean = false;
displayPosition: boolean = false;
position: string = '';
submitted: boolean = false;

password: string = '';
username: string = '';
address: string = '';
phoneNumber: string = '';
checkUser: boolean = false;
checkEmail: boolean = false;
mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
userData: any;

email: string = '';
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
name: string = '';

dataUser: any;
wrongConfirmPassword: boolean = false;
wrongPassword: boolean = false;



  constructor(private router : Router,private confirmationService: ConfirmationService,private MenuService : MenuService, private HakAksesService :HakAksesService, private UserService : UserService,private groupsService: GroupService,private messageService: MessageService ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.MenuService.getMenu().subscribe({
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
   this.row = { createdBy: "",
    createdDate: "",
    icon: "",
    menuId: 1,
    menuName: "",
    programName: "",
    updatedBy: null,
    updatedDate: null,
    url: ""
  }
  }

  ShowopenEdit(row: any) {
    this.row = { ...row };
    this.submitted = false;
    this.displayAdminCreate = true;
    this.action = 'edit';
  }

  deletemenu(id: any) {
    Swal.fire({
      title: 'Are you sure Delete Row?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
    }).then(() => {
    this.MenuService.deleteMenu(id).subscribe((res) => {
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
        this.MenuService.postMenu(this.row)
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

      } else {
        this.MenuService.putMenu(
          this.row
        ).subscribe(
          (event: any) => {
            this.icon = 'success'
            this.displayAdminCreate = false;

      },
          (err: any) => {
          }
        );
      }
      window.location.reload();
    });

  }




}
