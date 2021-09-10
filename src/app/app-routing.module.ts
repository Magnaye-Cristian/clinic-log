import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeadAdminComponent } from './head-admin/head-admin.component';
import { StudentAccountComponent} from './student-account/student-account.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'head-admin', component: HeadAdminComponent },
  { path: 'student-account', component: StudentAccountComponent },
  { path: 'admin-account', component: AdminAccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
