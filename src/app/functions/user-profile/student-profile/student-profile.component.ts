import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from 'src/app/dialog/update-profile/update-profile.component';
import { IProfile } from 'src/app/models/profile.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  first_name: string = '';
  last_name: string = '';
  middle_name: string = '';
  department: string = '';
  school_id: string = '';
  university: string = '';
  program: string = '';

  constructor(private dialog: MatDialog, private accountService: AccountService) { }

  ngOnInit(): void {
    this.setProfileValue();
  }

  setProfileValue() {
    this.accountService.getProfileFromServer().subscribe((profile: IProfile) => {
      console.log(profile)
      this.school_id = profile.school_id;
      this.first_name = profile.first_name;
      this.last_name = profile.last_name;
      this.middle_name = profile.middle_name;
      this.department = profile.department;
      this.university = profile.university;
      this.program = profile.program
    })
  }

  onUpdate(){
    this.dialog.open(UpdateProfileComponent);
  }

}
