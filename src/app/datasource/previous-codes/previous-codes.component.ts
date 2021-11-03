import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ICode } from 'src/app/models/code.model';
import { CodeService } from 'src/app/services/code.service';
import { PreviousCodesDataSource, PreviousCodesItem } from './previous-codes-datasource';

@Component({
  selector: 'app-previous-codes',
  templateUrl: './previous-codes.component.html',
  styleUrls: ['./previous-codes.component.css']
})
export class PreviousCodesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PreviousCodesItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'code', 'role', 'date'];

  constructor(private codeService: CodeService) {
    // this.dataSource = new PreviousCodesDataSource();

  }

  ngOnInit(): void {
    // this.dataSource = []
    this.codeService.getAllCodes().subscribe((codes: ICode[]) => {
      if (codes.length < 1)
        return;
      let id = 0
      for (let code of codes) {
        ++id;
        Object.assign(code, { date: new Date(code.created_on).toDateString(), _id: id })
      }

      console.log(codes)
      console.log(`sdasdjaskj`)
      this.dataSource = codes;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })

  }
}
