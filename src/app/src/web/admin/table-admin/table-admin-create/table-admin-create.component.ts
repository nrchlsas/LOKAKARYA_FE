import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-admin-create',
  templateUrl: './table-admin-create.component.html',
  styleUrls: ['./table-admin-create.component.css']
})
export class TableAdminCreateComponent implements OnInit {
  displayAdminCreate: boolean = false;
  action = '';
  displayBasic = true;

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
