import { Component, OnInit } from '@angular/core';

interface Purpose {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent implements OnInit {
  viewMode = 'stakeholders';

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
