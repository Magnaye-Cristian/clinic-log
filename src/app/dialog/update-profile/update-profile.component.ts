import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProfile } from 'src/app/models/profile.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateForm: FormGroup;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      first_name: new FormControl(account.first_name),
      last_name: new FormControl(account.last_name),
      middle_name: new FormControl(account.middle_name),
      department: new FormControl(account.department),
      program: new FormControl(account.program),
    });
    this.setProfileValues()


  }
  setProfileValues(): IProfile {
    let account: IProfile;
    this.accountService.getProfileFromServer().subscribe((res: any) => {
      console.log(res.body)
      this.updateForm.patchValue(res.body);
    });
    return account;
  }

  updateProfile(): void {
    const first_name = this.updateForm.get('first_name').value;
    const updateForm = {
      "first_name": "first_name",
      "last_name": "laaaaaaname",
      "middle_name": "mplace",
      "password": "1231aA%1234567",
      "department": 'department1',
      "program": 'program1'
    }
    console.log(updateForm)
    this.accountService.updateProfile(updateForm).subscribe(x => {
      console.log(x)
    })
  }

}
