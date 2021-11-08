import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupRegisterComponent } from 'src/app/dialog/popup-register/popup-register.component';
import { IRegister } from 'src/app/models/register.models';
import { AccountService } from 'src/app/services/account.service';
import { RegisterService } from 'src/app/services/register.service';

interface user_type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  requiredForm: FormGroup;

  constructor(private accountService: AccountService, private fb: FormBuilder, public dialog: MatDialog) {
    form: this.requiredForm;
  }

  ngOnInit(): void {
    this.requiredForm = this.fb.group({
      role: [null, Validators.required],
      code: ['', [Validators.required,
        Validators.pattern("^[a-z0-9A-Z]{2,}$")]],
      school_id: ['', [Validators.required,
        Validators.pattern("^[a-z0-9A-Z_ -]{5,}$")]],
      first_name: ['', [Validators.required,
        Validators.pattern("^[a-zA-Z_ ]{2,}$")]],
      last_name: ['', [Validators.required,
        Validators.pattern("^[a-zA-Z_ ]{2,}$")]],
      middle_name: ['', [Validators.required,
        Validators.pattern("^[a-zA-Z_ ]{1,}$")]],
      university: ['', [Validators.required,
        Validators.pattern("^[a-zA-Z0-9_ ]*$")]],
      department: ['', [Validators.required,
        Validators.pattern("^[a-zA-Z0-9_ ]*$")]],
      program: ['', [Validators.required,
        Validators.pattern("^[a-zA-Z-_ ]*$")]],
      password: ['', [Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirmPassword: ['', [Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]
    });
  }
  user: user_type[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'student', viewValue: 'Student' },
    { value: 'faculty', viewValue: 'Faculty' },
    { value: 'staff', viewValue: 'Staff' },
  ];
  register(registrationForm: IRegister): void {
    console.log('register')
    /**
     * on register
     * redirect to default page according to accounttype
     */
    const registrationObject = JSON.parse(JSON.stringify(registrationForm));
    delete registrationObject.confirmPassword;
    console.log(registrationObject);
    this.accountService.register(registrationObject).subscribe((x: any) => {
      console.log(x)
      this.accountService.navigateByRole(x.role)
    },error => {
      console.log(error)
      console.log('invalid credentials')
      this.dialog.open(PopupRegisterComponent, { panelClass: 'custom-dialog-container' });
    })
  }

}
