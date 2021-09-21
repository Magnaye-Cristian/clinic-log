import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from 'src/app/dialog/update-profile/update-profile.component';

@Component({
  selector: 'faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.css']
})
export class FacultyProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreate(){
    this.dialog.open(UpdateProfileComponent);
  }

}
