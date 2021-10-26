import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GenerateCodeComponent } from 'src/app/dialog/generate-code/generate-code.component';
import { ICode } from 'src/app/models/code.model';
import { ROLEENUM } from 'src/app/models/role.enum';
import { CodeService } from 'src/app/services/code.service';
import { NewCodesDataSource, NewCodesItem } from './new-codes-datasource';

@Component({
  selector: 'new-codes',
  templateUrl: './new-codes.component.html',
  styleUrls: ['./new-codes.component.css']
})
export class NewCodesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<NewCodesItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'code', 'role', 'date'];

  constructor(public dialog: MatDialog, private codeService: CodeService) {
    // this.dataSource = new NewCodesDataSource();

    console.log(this.dataSource)
  }
  ngOnInit(): void {
    this.codeService.codeList.subscribe((codes: ICode[]) => {
      console.log(codes)
      console.log('codelist subscription')
      if (!codes)
        return;
      let tableData: { id: number, code: string, role: string, date: string }[] = [];
      for (let i = 0; i < codes.length; i++) {
        tableData.push({
          id: i + 1,
          code: codes[i].code,
          role: codes[i].role,
          date: new Date(codes[i].created_on).toDateString(),
        })
      }
      this.dataSource = tableData;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

}
