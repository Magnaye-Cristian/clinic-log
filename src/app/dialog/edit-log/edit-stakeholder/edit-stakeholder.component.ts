import { Component, OnInit } from '@angular/core';

interface Purpose {
  value: string;
  viewValue: string;
}

interface Complaint {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-stakeholder',
  templateUrl: './edit-stakeholder.component.html',
  styleUrls: ['./edit-stakeholder.component.css']
})
export class EditStakeholderComponent implements OnInit {

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

  complaint: Complaint[] = [
    {value: '0', viewValue: 'Abdominal Pain'},
    {value: '1', viewValue: 'Allergy'},
    {value: '2', viewValue: 'Body Malaise'},
    {value: '3', viewValue: 'Chest Pain'},
    {value: '4', viewValue: 'Cold'},
    {value: '5', viewValue: 'Dysmenorrhea'},
    {value: '6', viewValue: 'Headache'},
    {value: '7', viewValue: 'Nausea'},
    {value: '8', viewValue: 'Skin Rash'},
    {value: '9', viewValue: 'Sore Throat'},
    {value: '10', viewValue: 'Sprain'},
    {value: '11', viewValue: 'Vomiting'},
    {value: '12', viewValue: 'Wound'},
    {value: '13', viewValue: 'Others'},
  ];

}
