import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdminMenuComponent } from './table-admin-menu.component';

describe('TableAdminMenuComponent', () => {
  let component: TableAdminMenuComponent;
  let fixture: ComponentFixture<TableAdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAdminMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
