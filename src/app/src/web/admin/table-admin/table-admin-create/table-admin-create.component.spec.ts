import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdminCreateComponent } from './table-admin-create.component';

describe('TableAdminCreateComponent', () => {
  let component: TableAdminCreateComponent;
  let fixture: ComponentFixture<TableAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAdminCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
