import { Component, OnInit } from '@angular/core';

interface Purpose {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-log-stakeholders',
  templateUrl: './create-log-stakeholders.component.html',
  styleUrls: ['./create-log-stakeholders.component.css']
})
export class CreateLogStakeholdersComponent implements OnInit {

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
