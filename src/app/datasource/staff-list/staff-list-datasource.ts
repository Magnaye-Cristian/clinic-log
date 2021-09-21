import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface StaffListItem {
  name: string;
  id: number;
  department: string;
  status: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: StaffListItem[] = [
  {id: 1, name: 'Hydrogen', department: 'CICS', status: 'active'},
  {id: 2, name: 'Helium', department: 'CICS', status: 'active'},
  {id: 3, name: 'Lithium', department: 'CICS', status: 'active'},
  {id: 4, name: 'Beryllium', department: 'CICS', status: 'active'},
  {id: 5, name: 'Boron', department: 'CICS', status: 'active'},
  {id: 6, name: 'Carbon', department: 'CIT', status: 'active'},
  {id: 7, name: 'Nitrogen', department: 'CICS', status: 'active'},
  {id: 8, name: 'Oxygen', department: 'CICS', status: 'active'},
  {id: 9, name: 'Fluorine', department: 'CICS', status: 'active'},
  {id: 10, name: 'Neon', department: 'CICS', status: 'active'},
  {id: 11, name: 'Sodium', department: 'CICS', status: 'active'},
  {id: 12, name: 'Magnesium', department: 'CICS', status: 'active'},
  {id: 13, name: 'Aluminum', department: 'CICS', status: 'active'},
  {id: 14, name: 'Silicon', department: 'CICS', status: 'active'},
  {id: 15, name: 'Phosphorus', department: 'CICS', status: 'active'},
  {id: 16, name: 'Sulfur', department: 'CICS', status: 'active'},
  {id: 17, name: 'Chlorine', department: 'CICS', status: 'active'},
  {id: 18, name: 'Argon', department: 'CICS', status: 'active'},
  {id: 19, name: 'Potassium', department: 'Library', status: 'active'},
  {id: 20, name: 'Calcium', department: 'CICS', status: 'active'},
];

/**
 * Data source for the StaffList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StaffListDataSource extends DataSource<StaffListItem> {
  data: StaffListItem[] = EXAMPLE_DATA;
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
  connect(): Observable<StaffListItem[]> {
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
  private getPagedData(data: StaffListItem[]): StaffListItem[] {
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
  private getSortedData(data: StaffListItem[]): StaffListItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
