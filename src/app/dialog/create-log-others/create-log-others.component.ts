import { Component, OnInit } from '@angular/core';

interface Purpose {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-log-others',
  templateUrl: './create-log-others.component.html',
  styleUrls: ['./create-log-others.component.css']
})
export class CreateLogOthersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  purpose: Purpose[] = [
    {value: '0', viewValue: 'BP Monitoring'},
    {value: '1', viewValue: 'Check-up'},
    {value: '2', viewValue: 'Consultation'},
    {value: '3', viewValue: 'Emergency Case'},
    {value: '4', viewValue: 'First Aid'},
    {value: '5', viewValue: 'Medical'},
    {value: '6', viewValue: 'Medicine'},
    {value: '7', viewValue: 'Others'},
  ];

}
