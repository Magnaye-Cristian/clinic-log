import { Component, OnInit } from '@angular/core';

interface Medicine {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
