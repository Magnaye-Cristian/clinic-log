import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TallyLogDataSource, TallyLogItem } from './tally-log-datasource';

@Component({
  selector: 'tally-log',
  templateUrl: './tally-log.component.html',
  styleUrls: ['./tally-log.component.css']
})
export class TallyLogComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TallyLogItem>;
  dataSource: TallyLogDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'complaints'];

  constructor() {
    this.dataSource = new TallyLogDataSource();

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
