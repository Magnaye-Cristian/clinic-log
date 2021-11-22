import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IProfile } from 'src/app/models/profile.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateForm: FormGroup;
  constructor(private accountService: AccountService, private matDialogRef: MatDialog) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      middle_name: new FormControl(''),
      department: new FormControl(''),
      program: new FormControl(''),
      password: new FormControl(''),
    });
    this.setProfileValues()
  }

  setProfileValues(): IProfile {
    let account: IProfile;
    this.accountService.getProfileFromServer().subscribe((profile: IProfile) => {
      console.log(profile)
      this.updateForm.patchValue(profile);
    });
    return account;
  }

  updateProfile(): void {
    const updateForm = {
      "first_name": this.updateForm.get('first_name').value,
      "last_name": this.updateForm.get('last_name').value,
      "middle_name": this.updateForm.get('middle_name').value,
      "password": this.updateForm.get('password').value,
      "department": this.updateForm.get('department').value,
      "program": this.updateForm.get('program').value
    }
    console.log(updateForm)
    this.accountService.updateProfile(updateForm).subscribe(x => {
      console.log(x)
      this.matDialogRef.closeAll();
    })
  }

  cancel(): void {
    this.matDialogRef.closeAll();
  }

}
