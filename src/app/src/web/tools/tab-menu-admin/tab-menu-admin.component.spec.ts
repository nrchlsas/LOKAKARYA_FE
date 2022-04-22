import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenuAdminComponent } from './tab-menu-admin.component';

describe('TabMenuAdminComponent', () => {
  let component: TabMenuAdminComponent;
  let fixture: ComponentFixture<TabMenuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMenuAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
