import { ChangePasswordComponent } from './src/web/user/change-password/change-password.component';
import { UserTableComponent } from './src/web/user/user-table/user-table.component';
import { MenubarUserComponent } from './src/web/tools/menubar/menubar-user/menubar-user.component';
import { TableAdminMenuComponent } from './src/web/admin/table-admin/table-admin-menu/table-admin-menu.component';
import { TableAdminCreateComponent } from './src/web/admin/table-admin/table-admin-create/table-admin-create.component';
import { TableAdminComponent } from './src/web/admin/table-admin/table-admin.component';
import { NotfoundComponent } from './src/web/notFound/notfound/notfound.component';
import { HomeUserComponent } from './src/web/user/home-user/home-user.component';
import { HomeloginComponent } from './src/web/login/homelogin/homelogin.component';
import { HomeAdminComponent } from './src/web/admin/home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenubarComponent } from './src/web/tools/menubar/menubar.component';

const routes: Routes = [
  { path: 'homeAdmin', component: HomeAdminComponent },
  { path: 'tableAdmin', component: TableAdminComponent },
  { path: 'tableAdminCreate', component: TableAdminCreateComponent},
  { path: 'tableAdminMenu', component: TableAdminMenuComponent},
  { path: 'home', component: MenubarComponent },


  { path: 'homeLogin', component: HomeloginComponent },

  { path: 'user', component: HomeUserComponent },
  { path: 'homeU', component: MenubarUserComponent },
  { path: 'tableUser', component: UserTableComponent },
  { path: 'Cpassword', component: ChangePasswordComponent },



  { path: '', redirectTo: '/homeLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
