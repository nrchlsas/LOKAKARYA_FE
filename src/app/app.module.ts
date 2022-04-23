import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';    //accordion and accordion tab
import {PasswordModule} from 'primeng/password';
import {MenuItem} from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {SidebarModule} from 'primeng/sidebar';
import {SliderModule} from 'primeng/slider';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {FieldsetModule} from 'primeng/fieldset';
import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import {PanelModule} from 'primeng/panel';
import {DividerModule} from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';





import { MenubarComponent } from './src/web/tools/menubar/menubar.component';
import { HomeAdminComponent } from './src/web/admin/home-admin/home-admin.component';
import { HomeUserComponent } from './src/web/user/home-user/home-user.component';
import { NotfoundComponent } from './src/web/notFound/notfound/notfound.component';
import { HomeloginComponent } from './src/web/login/homelogin/homelogin.component';
import { TableAdminComponent } from './src/web/admin/table-admin/table-admin.component';
import { TabMenuAdminComponent } from './src/web/tools/tab-menu-admin/tab-menu-admin.component';
import { TableAdminCreateComponent } from './src/web/admin/table-admin/table-admin-create/table-admin-create.component';
import { TableAdminMenuComponent } from './src/web/admin/table-admin/table-admin-menu/table-admin-menu.component';
import { MenubarUserComponent } from './src/web/tools/menubar/menubar-user/menubar-user.component';
import { UserTableComponent } from './src/web/user/user-table/user-table.component';
import { ChangePasswordComponent } from './src/web/user/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeAdminComponent,
    HomeUserComponent,
    HomeloginComponent,
    NotfoundComponent,
    TableAdminComponent,
    TabMenuAdminComponent,
    TableAdminCreateComponent,
    TableAdminMenuComponent,
    MenubarUserComponent,
    UserTableComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    PasswordModule,
    PanelModule,
    DividerModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextModule,
    TabMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    FieldsetModule,
    HttpClientModule,
    MessagesModule,
    MessageModule



  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
