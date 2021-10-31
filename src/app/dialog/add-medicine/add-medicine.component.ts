import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/services/log.service';

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

  constructor(private logService: LogService, @Inject(MAT_DIALOG_DATA) public data: { id: number, medicine: string }, private matDialogRef: MatDialog) { }
  selectedMedicine
  ngOnInit(): void {
    this.selectedMedicine = this.data?.medicine ? this.data.medicine : '';

  }

  addMedicine() {
    const medInfo = {
      id: this.data.id,
      medicine: this.selectedMedicine
    }
    console.log(medInfo)
    this.logService.updateMedicine(medInfo).subscribe((x: any) => {
      this.matDialogRef.closeAll()
      if (x.message === 'success')
        console.log('success')
      else
        console.log('failed')
    })
  }

  cancel(): void {
    this.matDialogRef.closeAll();
  }

  medicines: Medicine[] = [
    { value: 'Antacid', viewValue: 'Antacid' },
    { value: 'Antibiotics', viewValue: 'Antibiotics' },
    { value: 'Antihistamine', viewValue: 'Antihistamine' },
    { value: 'Aspirin', viewValue: 'Aspirin' },
    { value: 'Bio Flu', viewValue: 'Bio Flu' },
    { value: 'Biogesic', viewValue: 'Biogesic' },
    { value: 'Buscopan', viewValue: 'Buscopan' },
    { value: 'Heat Pack Bag', viewValue: 'Heat Pack Bag' },
    { value: 'Ice Pack Bag', viewValue: 'Ice Pack Bag' },
    { value: 'Loperamide', viewValue: 'Loperamide' },
    { value: 'Mefenamic Acid', viewValue: 'Mefenamic Acid' },
    { value: 'Strepsils', viewValue: 'Strepsils' },
    { value: 'Antiemetics', viewValue: 'Antiemetics' },
    { value: 'Wound Dressing', viewValue: 'Wound Dressing' },
    { value: 'Others', viewValue: 'Others' },
  ];
}
