import { Component, OnInit } from '@angular/core';

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

displayAdminCreate: boolean = false;
action = '';
displayBasic = true;
submitted: boolean = false;
actionResult = '';


  constructor() { }

  ngOnInit(): void {
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
    this.displayAdminCreate = false;
  }
}
