import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TallyLogItem {
  id: number;
  complaints: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TallyLogItem[] = [
  {id: 1, complaints: 'Hydrogen'},
  {id: 2, complaints: 'Helium'},
  {id: 3, complaints: 'Lithium'},
  {id: 4, complaints: 'Beryllium'},
  {id: 5, complaints: 'Boron'},
  {id: 6, complaints: 'Carbon'},
  {id: 7, complaints: 'Nitrogen'},
  {id: 8, complaints: 'Oxygen'},
  {id: 9, complaints: 'Fluorine'},
  {id: 10, complaints: 'Neon'},
  {id: 11, complaints: 'Sodium'},
  {id: 12, complaints: 'Magnesium'},
  {id: 13, complaints: 'Aluminum'},
  {id: 14, complaints: 'Silicon'},
  {id: 15, complaints: 'Phosphorus'},
  {id: 16, complaints: 'Sulfur'},
  {id: 17, complaints: 'Chlorine'},
  {id: 18, complaints: 'Argon'},
  {id: 19, complaints: 'Potassium'},
  {id: 20, complaints: 'Calcium'},
];

/**
 * Data source for the TallyLog view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TallyLogDataSource extends DataSource<TallyLogItem> {
  data: TallyLogItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TallyLogItem[]> {
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
  private getPagedData(data: TallyLogItem[]): TallyLogItem[] {
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
  private getSortedData(data: TallyLogItem[]): TallyLogItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'complaints': return compare(a.complaints, b.complaints, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
