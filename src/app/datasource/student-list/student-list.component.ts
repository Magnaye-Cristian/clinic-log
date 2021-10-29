import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentListDataSource, StudentListItem } from './student-list-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DisableComponent } from 'src/app/dialog/disable/disable.component';
import { AccountService } from 'src/app/services/account.service';
import { ROLEENUM } from 'src/app/models/role.enum';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StudentListItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'department', 'status', 'disable'];
  searchControl: FormControl;
  backup: any;

  constructor(private dialog: MatDialog, private accountService: AccountService) {
    // this.dataSource = new StudentListDataSource();
  }
  ngOnInit(): void {
    this.searchControl = new FormControl();
    console.log(`student accounts`)
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
      this.table.dataSource = newDataSource;
      console.log(this.dataSource)
    })
  }
  getList() {
    this.accountService.getAccounts(ROLEENUM.STUDENT).subscribe((accounts: any) => {
      console.log(accounts)
      for (let account of accounts) {
        Object.assign(account, { name: `${account.first_name} ${account.last_name}` })
      }
      this.dataSource = accounts;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      this.backup = JSON.parse(JSON.stringify(this.dataSource))
    })
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
