import { Component, OnInit } from '@angular/core';

interface Purpose {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  purpose: Purpose[] = [
    {value: '0', viewValue: 'Head Admin'},
    {value: '1', viewValue: 'Admin'},
    {value: '2', viewValue: 'Student'},
    {value: '3', viewValue: 'Faculty'},
    {value: '4', viewValue: 'Staff'},
  ];

}
