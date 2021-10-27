import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private accountService: AccountService, private matDialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.matDialogRef.closeAll();
  }

  logout(): void {
    this.matDialogRef.closeAll();
    this.accountService.logout();
  }
}
