import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPrintModule } from 'ngx-print';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { Content1Component } from './components/content1/content1.component';
import { Content2Component } from './components/content2/content2.component';
import { RegisterComponent } from './components/register/register.component';
import { HeadAdminComponent } from './head-admin/head-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ManageAccountsComponent } from './functions/manage-accounts/manage-accounts.component';
import { LogbookComponent } from './functions/logbook/logbook.component';
import { TallyComponent } from './functions/tally/tally.component';
import { RecordsComponent } from './functions/records/records.component';
import { AdminListComponent } from './datasource/admin-list/admin-list.component';
import { DashboardComponent } from './functions/dashboard/dashboard.component';
import { StudentListComponent } from './datasource/student-list/student-list.component';
import { LogbookRecordsComponent } from './datasource/logbook-records/logbook-records.component';
import { CreateLogComponent } from './dialog/create-log/create-log.component';
import { LogbookLogsComponent } from './datasource/logbook-logs/logbook-logs.component';
import { CreateLogOthersComponent } from './dialog/create-log/create-log-others/create-log-others.component';
import { CreateLogStakeholdersComponent } from './dialog/create-log/create-log-stakeholders/create-log-stakeholders.component';
import { UpdateProfileComponent } from './dialog/update-profile/update-profile.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { DatePickerComponent } from './functions/services/date-picker/date-picker.component';
import { TallyLogComponent } from './datasource/tally-log/tally-log.component';
import { StudentProfileComponent } from './functions/user-profile/student-profile/student-profile.component';
import { AdminProfileComponent } from './functions/user-profile/admin-profile/admin-profile.component';
import { HeadAdminProfileComponent } from './functions/user-profile/head-admin-profile/head-admin-profile.component';
import { FacultyProfileComponent } from './functions/user-profile/faculty-profile/faculty-profile.component';
import { StaffProfileComponent } from './functions/user-profile/staff-profile/staff-profile.component';
import { StaffAccountComponent } from './staff-account/staff-account.component';
import { FacultyAccountComponent } from './faculty-account/faculty-account.component';
import { FacultyListComponent } from './datasource/faculty-list/faculty-list.component';
import { StaffListComponent } from './datasource/staff-list/staff-list.component';
import { LogOutComponent } from './dialog/log-out/log-out.component';
import { TerminateComponent } from './dialog/terminate/terminate.component';
import { EditLogComponent } from './dialog/edit-log/edit-log.component';
import { DisableComponent } from './dialog/disable/disable.component';
import { EditStakeholderComponent } from './dialog/edit-log/edit-stakeholder/edit-stakeholder.component';
import { EditOthersComponent } from './dialog/edit-log/edit-others/edit-others.component';
import { CodeGeneratorComponent } from './dialog/code-generator/code-generator.component';
import { MedicineLogTableComponent } from './datasource/medicine-log-table/medicine-log-table.component';
import { MedicineLogComponent } from './functions/medicine-log/medicine-log.component';
import { AddMedicineComponent } from './dialog/add-medicine/add-medicine.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BaseUrlInterceptorService } from './services/base-url-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Content1Component,
    Content2Component,
    RegisterComponent,
    HeadAdminComponent,
    ManageAccountsComponent,
    LogbookComponent,
    TallyComponent,
    RecordsComponent,
    AdminListComponent,
    DashboardComponent,
    StudentListComponent,
    LogbookRecordsComponent,
    CreateLogComponent,
    LogbookLogsComponent,
    CreateLogOthersComponent,
    CreateLogStakeholdersComponent,
    UpdateProfileComponent,
    StudentAccountComponent,
    AdminAccountComponent,
    DatePickerComponent,
    TallyLogComponent,
    StudentProfileComponent,
    AdminProfileComponent,
    HeadAdminProfileComponent,
    StaffProfileComponent,
    StaffAccountComponent,
    FacultyProfileComponent,
    FacultyAccountComponent,
    FacultyListComponent,
    StaffListComponent,
    LogOutComponent,
    TerminateComponent,
    EditLogComponent,
    DisableComponent,
    EditStakeholderComponent,
    EditOthersComponent,
    CodeGeneratorComponent,
    MedicineLogTableComponent,
    MedicineLogComponent,
    AddMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LayoutModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxChartsModule,
    NgxPrintModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
