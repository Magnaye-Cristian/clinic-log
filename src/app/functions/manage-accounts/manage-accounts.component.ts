import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css']
})
export class ManageAccountsComponent implements OnInit {
  viewMode = 'admin-list';

  constructor() { }

  ngOnInit(): void {
  }

}
