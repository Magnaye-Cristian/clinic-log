import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { ICode } from 'src/app/models/code.model';
import { AccountService } from 'src/app/services/account.service';
import { CodeService } from 'src/app/services/code.service';

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

  constructor(private fb: FormBuilder, private accountService: AccountService, private codeService: CodeService) { }
  codeGroup;
  ngOnInit(): void {
    this.codeGroup = this.fb.group({
      role: this.fb.control('student'),
      number_of_codes: this.fb.control('0')
    })
  }
  get number_of_codes(): AbstractControl { return this.codeGroup.get('number_of_codes') };
  get role(): AbstractControl { return this.codeGroup.get('role') };

  generateCode() {
    if (!this.number_of_codes.value || !this.role.value.value || this.number_of_codes.value < 1)
      return console.log('cannot proceed with generation of codes');
    const codeRequests = {
      number_of_codes: this.number_of_codes.value,
      role: this.role.value.value
    }

    this.accountService.generateCode(codeRequests).subscribe((code: ICode[]) => {
      console.log(code)
      this.codeService.codeList.next(code);
    });

  }
  code_type: code_type[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'student', viewValue: 'Student' },
    { value: 'faculty', viewValue: 'Faculty' },
    { value: 'staff', viewValue: 'Staff' },
  ];

}
