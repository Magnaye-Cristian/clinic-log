import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface LogbookRecordsItem {
  num: number;
  name: string;
  srCode: string;
  department: string;
  purpose: string
  date: string;
  timeIn: string;
  timeOut: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: LogbookRecordsItem[] = [
  {num: 1, name: 'Hydrogen', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 2, name: 'Helium', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 3, name: 'Lithium', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '10:15 am', timeOut: '10:35 am'},
  {num: 4, name: 'Beryllium', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '10:15 am', timeOut: '10:35 am'},
  {num: 5, name: 'Boron', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '11:15 am', timeOut: '11:35 am'},
  {num: 6, name: 'Carbon', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '11:15 am', timeOut: '11:35 am'},
  {num: 7, name: 'Nitrogen', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '1:15 am', timeOut: '1:35 am'},
  {num: 8, name: 'Oxygen', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 9, name: 'Fluorine', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 10, name: 'Neon', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 11, name: 'Sodium', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 12, name: 'Magnesium', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 13, name: 'Aluminum', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 14, name: 'Silicon', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 15, name: 'Phosphorus', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 16, name: 'Sulfur', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 17, name: 'Chlorine', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 18, name: 'Argon', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 19, name: 'Potassium', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
  {num: 20, name: 'Calcium', srCode: '00-00000', department: 'CICS', purpose: 'medical', date: '00/01/2021', timeIn: '9:15 am', timeOut: '9:35 am'},
];

/**
 * Data source for the LogbookRecords view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class LogbookRecordsDataSource extends DataSource<LogbookRecordsItem> {
  data: LogbookRecordsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<LogbookRecordsItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: LogbookRecordsItem[]): LogbookRecordsItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: LogbookRecordsItem[]): LogbookRecordsItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'num': return compare(+a.num, +b.num, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'srCode': return compare(a.srCode, b.srCode, isAsc);
        case 'department': return compare(a.department, b.department, isAsc);
        case 'purpose': return compare(a.purpose, b.purpose, isAsc);
        case 'date': return compare(+a.date, +b.date, isAsc);
        case 'timeIn': return compare(+a.timeIn, +b.timeIn, isAsc);
        case 'timeOut': return compare(+a.timeOut, +b.timeOut, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
