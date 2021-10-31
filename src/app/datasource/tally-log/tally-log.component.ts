import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LogService } from 'src/app/services/log.service';
import { TallyLogItem } from './tally-log-datasource';

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
  columns: string[];

  constructor(private logService: LogService) {
    const date = new Date();
    this.setTallyLog(date)
    // this.columns = this.rows[0];

    // this.fakeDataGenerator();
  }

  setTallyLog(_date: any) {
    const date = new Date(_date);
    const month = date.getMonth() + 1;
    const numberOfDays = this.lastDateOfTheMonth(date.getMonth(), date.getFullYear())
    console.log(numberOfDays)
    this.columnGenerator(numberOfDays)
    // this.fakeDataGenerator()
    this.logService.getTally(month, date.getFullYear()).subscribe((tally: { timein: Date, complaint: string, count: number }[]) => {
      console.log(tally)
      /**
       * get all unique complaint
       * loop through numberOfDays
       * if complaint timein is equal to numberOfDay i then use that value
       * else if no equals then push 0
       * 
       */

      var unique = [];
      var complaints = [];
      for (let i = 0; i < tally.length; i++) {
        if (!unique[tally[i].complaint]) {
          complaints.push(tally[i].complaint);
          unique[tally[i].complaint] = 1;
        }
      }
      console.log(complaints)
      let singleRow = []
      let data = []
      let grandTotal = 0;
      for (let complaint of complaints) {
        singleRow = [];
        singleRow.push(complaint)
        let total = 0;
        for (let i = 1; i <= numberOfDays; i++) {
          for (const tal of tally) {
            if (tal.complaint === complaint) {
              if (new Date(tal.timein).getDate() === i) {
                singleRow[i] = tal.count;
                total += tal.count;
                grandTotal += tal.count;
              } else {
                if (!singleRow[i])
                  singleRow[i] = 0;
              }
            }
          }
        }
        singleRow.push(total)
        data.push(singleRow)
      }
      let total = [];
      total[0] = 'TOTAL';
      total[numberOfDays + 1] = grandTotal;
      data.push(total)
      console.log(grandTotal)
      console.log(data)

      this.dataSource = data
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  private lastDateOfTheMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }


  private fakeDataGenerator(): void {
    this.rows[0] = ['Abdominal Pain', 1]
    this.rows[1] = ['Allergy', 1, 3]
    this.rows[2] = ['Body Malaise', 1, 3]
    this.rows[3] = ['Chest Pain', 2, 4]
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

  private columnGenerator(numberOfDays: number): void {
    let header = []
    header.push('complaints')
    for (let i = 1; numberOfDays >= i; i++) {
      header.push(`${i}`)
    }
    header.push(`Total`)
    this.columns = header;
    console.log(this.rows)
  }


  ngAfterViewInit(): void {

  }
}
