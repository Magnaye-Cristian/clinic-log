import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LogService } from 'src/app/services/log.service';
import { LogbookRecordsDataSource, LogbookRecordsItem } from './logbook-records-datasource';

@Component({
  selector: 'app-logbook-records',
  templateUrl: './logbook-records.component.html',
  styleUrls: ['./logbook-records.component.css']
})
export class LogbookRecordsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<LogbookRecordsItem>;
  dataSource: LogbookRecordsDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['num','srCode', 'name' , 'department', 'purpose', 'date', 'timeIn', 'timeOut'];

  constructor(private logService: LogService) {

  }
  ngOnInit(): void {

    this.getLogsWithTimeout(new Date())
  }
  dateChanged($event: any) {
    const date = new Date($event);
    this.getLogsWithTimeout(date);
  }

  getLogsWithTimeout(date: Date) {
    const month = date.getMonth() + 1;
    console.log(date.getDate())
    console.log(month)
    console.log(date.getFullYear())
    this.logService.getLogsWithTimeout(date.getFullYear(), month, date.getDate()).subscribe((records: any) => {
      records.forEach((z, index) => {
        console.log(z)
        const appendObject = {
          num: index + 1,
          name: `${z.first_name} ${z.last_name}`,
          school_id_placeholder: z.school_id,
          department_placeholder: z.department,
          date: new Date(z.timeout).toDateString(),
          srCode: z.school_id
        }
        z.timein = new Date(z.timein)
        z.timeout = new Date(z.timeout)
        if (z?.type === 'non-university') {
          appendObject.school_id_placeholder = z.type_spec;
          appendObject.department_placeholder = z.address;
        }
        // let column: { num: number, name: string, srCode: string, department: string, complaint: string, medicine: string, date: string };
        Object.assign(z, appendObject)
      });
      this.dataSource = records;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })

  }

  // ngAfterViewInit(): void {



  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
}
