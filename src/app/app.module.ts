import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule} from '@angular/material/select';
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
import { ProfileComponent } from './functions/profile/profile.component';
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
import { CreateLogOthersComponent } from './dialog/create-log-others/create-log-others.component';
import { CreateLogStakeholdersComponent } from './dialog/create-log-stakeholders/create-log-stakeholders.component';
import { UpdateProfileComponent } from './dialog/update-profile/update-profile.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { DatePickerComponent } from './functions/services/date-picker/date-picker.component';
import { TallyLogComponent } from './datasource/tally-log/tally-log.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Content1Component,
    Content2Component,
    RegisterComponent,
    HeadAdminComponent,
    ProfileComponent,
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
    TallyLogComponent
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
    MatNativeDateModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
