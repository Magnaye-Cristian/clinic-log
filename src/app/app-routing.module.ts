import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeadAdminComponent } from './head-admin/head-admin.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { StaffAccountComponent } from './staff-account/staff-account.component';
import { FacultyAccountComponent } from './faculty-account/faculty-account.component';
import { AuthGuard } from './services/guards/auth.guard';
import { AdminGuard } from './services/guards/admin.guard';
import { HeadAdminGuard } from './services/guards/head-admin.guard';
import { StudentGuard } from './services/guards/student.guard';
import { FacultyGuard } from './services/guards/faculty.guard';
import { StaffGuard } from './services/guards/staff.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'head-admin', component: HeadAdminComponent, canActivate: [AuthGuard, HeadAdminGuard] },
  { path: 'admin-account', component: AdminAccountComponent, canActivate: [AdminGuard, AdminGuard] },
  { path: 'student-account', component: StudentAccountComponent, canActivate: [AuthGuard, StudentGuard] },
  { path: 'faculty-account', component: FacultyAccountComponent, canActivate: [AuthGuard, FacultyGuard] },
  { path: 'staff-account', component: StaffAccountComponent, canActivate: [AuthGuard, StaffGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
