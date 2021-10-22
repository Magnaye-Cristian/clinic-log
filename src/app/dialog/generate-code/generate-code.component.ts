import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

interface code_type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.css']
})
export class GenerateCodeComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountService: AccountService) { }
  codeGroup;
  ngOnInit(): void {
    this.codeGroup = this.fb.group({
      role: this.fb.control('student')
    })
  }
  generateCode() {
    const { value } = this.codeGroup.get('role').value;
    this.accountService.generateCode(value).subscribe(x => console.log(x));

  }
  code_type: code_type[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'student', viewValue: 'Student' },
    { value: 'faculty', viewValue: 'Faculty' },
    { value: 'staff', viewValue: 'Staff' },
  ];

}
