import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeadAdminComponent } from './head-admin/head-admin.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { StaffAccountComponent } from './staff-account/staff-account.component';
import { FacultyAccountComponent } from './faculty-account/faculty-account.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'head-admin', component: HeadAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin-account', component: AdminAccountComponent },
  { path: 'student-account', component: StudentAccountComponent },
  { path: 'faculty-account', component: FacultyAccountComponent },
  { path: 'staff-account', component: StaffAccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
