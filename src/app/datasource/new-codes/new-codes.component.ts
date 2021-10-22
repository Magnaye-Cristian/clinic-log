import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GenerateCodeComponent } from 'src/app/dialog/generate-code/generate-code.component';
import { NewCodesDataSource, NewCodesItem } from './new-codes-datasource';

@Component({
  selector: 'new-codes',
  templateUrl: './new-codes.component.html',
  styleUrls: ['./new-codes.component.css']
})
export class NewCodesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<NewCodesItem>;
  dataSource: NewCodesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor( public dialog: MatDialog) {
    this.dataSource = new NewCodesDataSource();
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onClick(){
    this.dialog.open(GenerateCodeComponent);
  }
}
