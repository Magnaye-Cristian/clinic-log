import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface LogbookLogsItem {
  srCode: string;
  name: string;
  department: string;
  purpose: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: LogbookLogsItem[] = [
  {srCode: '22-22222', name: 'Juan Dela Cruz', department: 'CICS', purpose: 'medical'},
  {srCode: '23-22222', name: 'Hydrogen', department: 'CICS', purpose: 'BP Monitoring'},
  {srCode: '22-22222', name: 'Hydrogen', department: 'CICS', purpose: 'medicine'},
  {srCode: '24-22222', name: 'Hydrogen', department: 'CICS', purpose: 'medical'},
  {srCode: '25-22222', name: 'Hydrogen', department: 'CICS', purpose: 'medical'},
  {srCode: '26-22222', name: 'Hydrogen', department: 'CICS', purpose: 'medical'},
  {srCode: '28-22222', name: 'Hydrogen', department: 'CICS', purpose: 'medical'},
];

/**
 * Data source for the LogbookLogs view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class LogbookLogsDataSource extends DataSource<LogbookLogsItem> {
  data: LogbookLogsItem[] = EXAMPLE_DATA;
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
  connect(): Observable<LogbookLogsItem[]> {
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
  private getPagedData(data: LogbookLogsItem[]): LogbookLogsItem[] {
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
  private getSortedData(data: LogbookLogsItem[]): LogbookLogsItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'department': return compare(a.department, b.department, isAsc);
        case 'purpose': return compare(a.purpose, b.purpose, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
