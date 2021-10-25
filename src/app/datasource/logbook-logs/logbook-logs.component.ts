import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LogbookLogsDataSource, LogbookLogsItem } from './logbook-logs-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateLogComponent } from 'src/app/dialog/create-log/create-log.component';
import { TerminateComponent } from 'src/app/dialog/terminate/terminate.component';
import { EditLogComponent } from 'src/app/dialog/edit-log/edit-log.component';
import { AddMedicineComponent } from 'src/app/dialog/add-medicine/add-medicine.component';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logbook-logs',
  templateUrl: './logbook-logs.component.html',
  styleUrls: ['./logbook-logs.component.css']
})
export class LogbookLogsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<LogbookLogsItem>;
  // dataSource: LogbookLogsDataSource;
  dataSource: any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['school id', 'name', 'department', 'purpose', 'medicine', 'edit', 'terminate'];
  constructor(private dialog: MatDialog, private logService: LogService) {
    // this.dataSource = new LogbookLogsDataSource();

  }

  ngOnInit(): void {
    // this.dataSource = [{ school_id: '22-22222', name: 'Juan Dela Cruz', department: 'CICS', purpose: 'medical' }]

    console.log(this.dataSource)
    this.getLogs();
    // this.onCreate();
  }
  getLogs() {
    // https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
    this.logService.getLogsNoTimeOut().subscribe(x => {
      for (let z of x) {
        console.log(z)
        const appendObject = { name: `${z.first_name} ${z.last_name}` }
        Object.assign(z, appendObject)
      }

      this.dataSource = x;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      console.log(x)
    })
  }
  onCreate() {
    const dialog = this.dialog.open(CreateLogComponent);
    dialog.afterClosed().subscribe(() => {
      this.getLogs()
    })
  }

  onEdit() {
    this.dialog.open(EditLogComponent);
  }

  onMedicine(row: any) {
    const dialog = this.dialog.open(AddMedicineComponent, {
      data: row
    })
    dialog.afterClosed().subscribe(() => {
      console.log(`medicine is closed`)
      this.getLogs();
    })
  }

  onTerminate(row: any) {
    console.log(row)
    const dialog = this.dialog.open(TerminateComponent, {
      data: row
    });
    dialog.afterClosed().subscribe(() => {
      this.getLogs();
    })
  }

  ngAfterViewInit(): void {
  }
}
