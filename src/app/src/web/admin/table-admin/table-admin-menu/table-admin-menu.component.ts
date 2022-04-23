import { MenuService } from './../../../../../../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table-admin-menu',
  templateUrl: './table-admin-menu.component.html',
  styleUrls: ['./table-admin-menu.component.css']
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
displayBasic = true;
submitted: boolean = false;
actionResult = '';
users: any;
icon = '';

row : any = {
  createdBy: "",
createdDate: "",
icon: "",
menuId: 1,
menuName: "",
programName: "",
updatedBy: null,
updatedDate: null,
url: ""
}


  constructor(private MenuService : MenuService ) { }

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
