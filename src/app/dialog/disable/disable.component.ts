import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-disable',
  templateUrl: './disable.component.html',
  styleUrls: ['./disable.component.css']
})
export class DisableComponent implements OnInit {
  school_id: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private accountService: AccountService, private matDialogRef: MatDialog) { }

  ngOnInit(): void {
    this.school_id = this.data.school_id
  }
  deactivate() {
    console.log(this.data)
    this.accountService.deactivateAccount(this.data.school_id).subscribe(x => { console.log(x) })
    this.matDialogRef.closeAll();
  }

  cancel(): void {
    this.matDialogRef.closeAll();
  }


}
