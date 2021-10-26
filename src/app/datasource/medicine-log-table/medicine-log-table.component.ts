import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LogService } from 'src/app/services/log.service';
import { MedicineLogTableDataSource, MedicineLogTableItem } from './medicine-log-table-datasource';

@Component({
  selector: 'app-medicine-log-table',
  templateUrl: './medicine-log-table.component.html',
  styleUrls: ['./medicine-log-table.component.css']
})
export class MedicineLogTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MedicineLogTableItem>;
  dataSource: MedicineLogTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['num', 'name', 'srCode', 'department', 'complaint', 'medicine', 'date'];
  constructor(private logService: LogService) {

  }
  ngOnInit(): void {
    // const date = this.transformDate(new Date())
    // console.log(date)
    const date = new Date();
    this.logService.getMedicineRecord(date.getFullYear(), date.getMonth() + 1, date.getDate()).subscribe((records: any) => {
      records.forEach((record, index) => {
        console.log(record)
        // let column: { num: number, name: string, srCode: string, department: string, complaint: string, medicine: string, date: string };
        Object.assign(record, { num: index + 1, name: record.first_name + record.lastname, date: new Date(record.timeout).toDateString(), srCode: record.school_id })
      });
      this.dataSource = records;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })

  }

  ngAfterViewInit(): void {

  }
}
