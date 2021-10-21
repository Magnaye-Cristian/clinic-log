import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  code_type: code_type[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'student', viewValue: 'Student' },
    { value: 'faculty', viewValue: 'Faculty' },
    { value: 'staff', viewValue: 'Staff' },
  ];

}
