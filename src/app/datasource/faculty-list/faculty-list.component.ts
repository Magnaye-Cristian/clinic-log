import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FacultyListDataSource, FacultyListItem } from './faculty-list-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DisableComponent } from 'src/app/dialog/disable/disable.component';
import { AccountService } from 'src/app/services/account.service';
import { ROLEENUM } from 'src/app/models/role.enum';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FacultyListItem>;
  dataSource: FacultyListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'status', 'department', 'disable'];

  constructor(private dialog: MatDialog, private accountService: AccountService) {
    // this.dataSource = new FacultyListDataSource();
  }
  ngOnInit(): void {
    console.log(`faculty accounts`)
    this.getList();
  }

  getList() {
    this.accountService.getAccounts(ROLEENUM.FACULTY).subscribe((accounts: any) => {
      console.log(accounts)
      for (let account of accounts) {
        Object.assign(account, { name: `${account.first_name} ${account.last_name}` })
      }
      this.dataSource = accounts;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }
  onDisable(row){
    const dialog = this.dialog.open(DisableComponent, {
      data: row
    });
    dialog.afterClosed().subscribe(() => this.getList())
  }

  ngAfterViewInit(): void {
  }
}
