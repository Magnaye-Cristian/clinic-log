import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {  TallyLogItem } from './tally-log-datasource';

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
  columns: string [];

  constructor() {
    this._maxDateOfTheMonth = this.lastDateOfTheMonth(9, 2021)
    this.columnGenerator()
    // this.columns = this.rows[0];
    this.fakeDataGenerator()
    console.log(this._maxDateOfTheMonth)
    this.dataSource = new MatTableDataSource(this.rows);
  }

  private lastDateOfTheMonth(month: number, year: number): number {
    return new Date(year, month+1, 0).getDate();
  }

  private fakeDataGenerator(): void{
    this.rows[0] = ['Abdominal Pain', 1]
    this.rows[1] = ['Allergy', 1,3]
    this.rows[2] = ['Body Malaise', 1,3]
    this.rows[3] = ['Chest Pain', 2,4]
    this.rows[4] = ['Cold', 8]
    this.rows[5] = ['Dysmenorrhea', 8]
    this.rows[6] = ['Headache', 8]
    this.rows[7] = ['Nausea', 8]
    this.rows[8] = ['Skin Rash', 8]
    this.rows[9] = ['Sore Throat', 8]
    this.rows[10] = ['Sprain', 8]
    this.rows[11] = ['Vomiting', 8]
    this.rows[12] = ['Wound', 8]
    this.rows[13] = ['Others', 8]
    this.rows[14] = ['Total']
  }

  private columnGenerator(): void{
    let header = []
    header.push('complaints')
    for(let i = 1; this._maxDateOfTheMonth >= i   ; i++){
      header.push(`${i}`)
    }
    header.push(`Total`)
    this.columns = header;
    console.log(this.rows)
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
