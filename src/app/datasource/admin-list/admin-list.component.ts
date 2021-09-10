import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AdminListDataSource, AdminListItem } from './admin-list-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateLogComponent } from 'src/app/dialog/create-log/create-log.component';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AdminListItem>;
  dataSource: AdminListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'status', 'disable'];

  constructor(private dialog: MatDialog) {
    this.dataSource = new AdminListDataSource();
  }

  onDisable(){
    this.dialog.open(CreateLogComponent);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
