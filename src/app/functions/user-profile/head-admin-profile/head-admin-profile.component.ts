import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from 'src/app/dialog/update-profile/update-profile.component';

@Component({
  selector: 'head-admin-profile',
  templateUrl: './head-admin-profile.component.html',
  styleUrls: ['./head-admin-profile.component.css']
})
export class HeadAdminProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreate(){
    this.dialog.open(UpdateProfileComponent);
  }

}
