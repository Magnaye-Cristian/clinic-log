import { Component, OnInit } from '@angular/core';

interface Type {
  value: string;
  viewValue: string;
}

interface Purpose {
  value: string;
  viewValue: string;
}

interface Complaint {
  value: string;
  viewValue: string;
}

interface Medicine {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-others',
  templateUrl: './edit-others.component.html',
  styleUrls: ['./edit-others.component.css']
})
export class EditOthersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  type: Type[] = [
    {value: '0', viewValue: 'Guardian'},
    {value: '1', viewValue: 'Parent'},
    {value: '2', viewValue: 'Visitor'},
    {value: '3', viewValue: 'Guest'},
    {value: '4', viewValue: 'Others'},
  ];

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

  medicine: Medicine[] = [
    {value: '0', viewValue: 'Antacid'},
    {value: '1', viewValue: 'Antibiotics'},
    {value: '2', viewValue: 'Antihistamine'},
    {value: '3', viewValue: 'Aspirin'},
    {value: '4', viewValue: 'Bio Flu'},
    {value: '5', viewValue: 'Biogesic'},
    {value: '6', viewValue: 'Buscopan'},
    {value: '7', viewValue: 'Heat Pack Bag'},
    {value: '8', viewValue: 'Ice Pack Bag'},
    {value: '9', viewValue: 'Loperamide'},
    {value: '10', viewValue: 'Mefenamic Acid'},
    {value: '11', viewValue: 'Strepsils'},
    {value: '12', viewValue: 'Vomiting'},
    {value: '13', viewValue: 'Wound Dressing'},
    {value: '14', viewValue: 'Others'},
  ];

}
