import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MedicineLogTableDataSource, MedicineLogTableItem } from './medicine-log-table-datasource';

@Component({
  selector: 'app-medicine-log-table',
  templateUrl: './medicine-log-table.component.html',
  styleUrls: ['./medicine-log-table.component.css']
})
export class MedicineLogTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MedicineLogTableItem>;
  dataSource: MedicineLogTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['num', 'name', 'srCode', 'department', 'complaint', 'medicine', 'date'];

  constructor() {
    this.dataSource = new MedicineLogTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
