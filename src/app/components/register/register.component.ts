import { Component, OnInit } from '@angular/core';
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

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  user: user_type[] = [
    { value: 'head admin', viewValue: 'Head Admin' },
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

    console.log(registrationForm);
    this.accountService.register(registrationForm).subscribe((x: any) => {
      console.log(x)
      this.accountService.navigateByRole(x.body.role)
    })

  }

}
