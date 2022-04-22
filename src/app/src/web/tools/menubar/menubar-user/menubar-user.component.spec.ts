import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarUserComponent } from './menubar-user.component';

describe('MenubarUserComponent', () => {
  let component: MenubarUserComponent;
  let fixture: ComponentFixture<MenubarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
