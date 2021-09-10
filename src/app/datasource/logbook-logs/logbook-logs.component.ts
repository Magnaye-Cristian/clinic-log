import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LogbookLogsDataSource, LogbookLogsItem } from './logbook-logs-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateLogComponent } from 'src/app/dialog/create-log/create-log.component';

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
  displayedColumns = ['srCode', 'name', 'department', 'purpose', 'edit', 'terminate'];

  constructor( private dialog: MatDialog ) {
    this.dataSource = new LogbookLogsDataSource();
  }

  onCreate(){
    this.dialog.open(CreateLogComponent);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
