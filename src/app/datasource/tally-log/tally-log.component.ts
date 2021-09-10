import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  rows = [];
  tableData = [];
  _maxDateOfTheMonth = 0;
  columns: [];
  constructor() {
    this._maxDateOfTheMonth = this.lastDateOfTheMonth(9, 2021)
    this.columnGenerator()
    this.columns = this.rows[0];
    this.fakeDataGenerator()
    console.log(this._maxDateOfTheMonth)
    this.dataSource = new MatTableDataSource(this.rows);

  }
  private lastDateOfTheMonth(month: number, year: number): number {
    return new Date(year, month+1, 0).getDate();
  }
  private fakeDataGenerator(): void{
    this.rows[1] = ['ankle', 1]
    this.rows[2] = ['ankle', 1,3]
    this.rows[3] = ['ankle', 2,4]
    this.rows[4] = ['ankle', 8]
  }
  private columnGenerator(): void{
    let header = []
    header.push('complaints')
    for(let i = 1; 1 >= i   ; i++){
      header.push(`${i}`)
    }
    header.push(`Total`)
    this.rows[0] = header;
    console.log(this.rows)
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
