import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LogbookLogsDataSource, LogbookLogsItem } from './logbook-logs-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateLogComponent } from 'src/app/dialog/create-log/create-log.component';
import { TerminateComponent } from 'src/app/dialog/terminate/terminate.component';
import { EditLogComponent } from 'src/app/dialog/edit-log/edit-log.component';
import { AddMedicineComponent } from 'src/app/dialog/add-medicine/add-medicine.component';

@Component({
  selector: 'app-logbook-logs',
  templateUrl: './logbook-logs.component.html',
  styleUrls: ['./logbook-logs.component.css']
})
export class LogbookLogsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<LogbookLogsItem>;
  dataSource: LogbookLogsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['srCode', 'name', 'department', 'purpose', 'medicine', 'edit', 'terminate'];

  constructor( private dialog: MatDialog ) {
    this.dataSource = new LogbookLogsDataSource();
  }

  onCreate(){
    this.dialog.open(CreateLogComponent);
  }

  onEdit(){
    this.dialog.open(EditLogComponent);
  }

  onMedicine(){
    this.dialog.open(AddMedicineComponent);
  }

  onTerminate(){
    this.dialog.open(TerminateComponent);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
