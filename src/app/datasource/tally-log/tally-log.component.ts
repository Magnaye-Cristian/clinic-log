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
  displayedColumns = [];
  tableData = [];
  _maxDateOfTheMonth = 0;
  constructor() {
    this._maxDateOfTheMonth = this.lastDateOfTheMonth(9, 2021)

    console.log(this._maxDateOfTheMonth)
    this.columnGenerator()
    this.dataSource = new MatTableDataSource();

  }
  private lastDateOfTheMonth(month: number, year: number): number {
    return new Date(year, month+1, 0).getDate();
  }
  private fakeDataGenerator(): void{

  }
  private columnGenerator(): void{
    this.displayedColumns.push(`Complaints`)
    for(let i = 1; this._maxDateOfTheMonth >= i   ; i++){
      this.displayedColumns.push(`${i}`)
    }
    this.displayedColumns.push(`Total`)
    console.log(this.displayedColumns)
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
