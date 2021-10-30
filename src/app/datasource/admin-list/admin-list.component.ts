import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AdminListDataSource, AdminListItem } from './admin-list-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DisableComponent } from 'src/app/dialog/disable/disable.component';
import { AccountService } from 'src/app/services/account.service';
import { ROLEENUM } from 'src/app/models/role.enum';
import { IAccount } from 'src/app/models/account.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AdminListItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'status', 'disable'];
  searchControl: FormControl;
  backup: any;
  pageIndex: 0
  currentPage: any = 0;
  pageSize: any = 10;
  totalSize = 0;
  pageEvent: PageEvent;
  paginator: any;
  backupCurrentPage: any = 0;
  constructor(private dialog: MatDialog, private accountService: AccountService) {
    // this.dataSource = new AdminListDataSource();
  }
  ngOnInit(): void {
    this.searchControl = new FormControl();
    console.log(`admin accounts`)
    this.getList();
    setTimeout(() => {
      this.search()
    }, 1100);
  }
  search() {
    console.log(`search`)
    console.log(this.dataSource)
    this.searchControl.valueChanges.subscribe((search: string) => {
      let newDataSource = [];
      for (let item of this.backup) {
        if (item.school_id.toLowerCase().startsWith(search.toLowerCase())) {
          newDataSource.push(item)
          console.log(`pushing`)
          console.log(item)
        }
      }
      this.currentPage = 0;
      this.dataSource = newDataSource;
      this.iterator()
      console.log(this.dataSource)
    })
  }
  getList() {
    this.accountService.getAccounts(ROLEENUM.ADMIN).subscribe((accounts: any) => {
      console.log(accounts)
      for (let account of accounts) {
        Object.assign(account, { name: `${account.first_name} ${account.last_name}` })
      }
      this.dataSource = accounts;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      this.backup = JSON.parse(JSON.stringify(this.dataSource))
      this.totalSize = this.dataSource.length;
      this.iterator();
    })
  }
  handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.backupCurrentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
    console.log(e)
  }
  iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.dataSource.slice(start, end);
    this.totalSize = this.dataSource.length;
    this.table.dataSource = part;
  }
  onDisable(row) {
    const dialog = this.dialog.open(DisableComponent, {
      data: row
    });
    dialog.afterClosed().subscribe(() => this.getList())
  }

  ngAfterViewInit(): void {
  }
}
