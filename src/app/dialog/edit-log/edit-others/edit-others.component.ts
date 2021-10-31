import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMPLAINTENUM } from 'src/app/models/complaint.enum';
import { PURPOSEENUM } from 'src/app/models/purpose.enum';
import { AccountService } from 'src/app/services/account.service';
import { LogService } from 'src/app/services/log.service';

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
  public get logService(): LogService {
    return this._logService;
  }
  public set logService(value: LogService) {
    this._logService = value;
  }

  constructor(private fb: FormBuilder, private accountService: AccountService, @Inject(MAT_DIALOG_DATA) public data, private _logService: LogService, private matDialogRef: MatDialog) { }
  editOthersLog;
  _data;
  ngOnInit(): void {

    this._data = JSON.parse(JSON.stringify(this.data))
    const { school_id, purpose, complaint, medicine, first_name, last_name, middle_name, department, address, type_spec } = this._data
    this.editOthersLog = this.fb.group({
      type_spec: this.fb.control(type_spec),
      first_name: this.fb.control(first_name),
      last_name: this.fb.control(last_name),
      middle_name: this.fb.control(middle_name),
      address: this.fb.control(address),
      purpose: this.fb.control(purpose),
      complaint: this.fb.control(complaint),
      medicine: this.fb.control(medicine),
    })
  }


  get firstnameControl(): AbstractControl { return this.editOthersLog.get('first_name') }
  get lastnameControl(): AbstractControl { return this.editOthersLog.get('last_name') }
  get middlenameControl(): AbstractControl { return this.editOthersLog.get('middle_name') }
  get purposeControl(): AbstractControl { return this.editOthersLog.get('purpose') }
  get complaintControl(): AbstractControl { return this.editOthersLog.get('complaint') }
  get addressControl(): AbstractControl { return this.editOthersLog.get('address') }
  get typeSpecControl(): AbstractControl { return this.editOthersLog.get('type_spec') }
  get medicineControl(): AbstractControl { return this.editOthersLog.get('medicine') }

  updateLog() {
    console.log(this.editOthersLog.value)
    const id = this._data.id;
    let updateObject: any = {
      id: this._data.id,
      purpose: this.purposeControl.value,
      complaint: this.complaintControl.value,
      medicine: this.medicineControl.value,
      first_name: this.firstnameControl.value,
      middle_name: this.middlenameControl.value,
      last_name: this.lastnameControl.value,
      address: this.addressControl.value,
      type_spec: this.typeSpecControl.value,
    }
    // this._data.purpose = this.purposeControl.value;
    // this._data.complaint = this.complaintControl.value;
    // this._data.medicine = this.medicineControl.value;
    // this._data.first_name = this.firstnameControl.value;
    // this._data.middle_name = this.middlenameControl.value;
    // this._data.last_name = this.lastnameControl.value;
    // this._data.address = this.addressControl.value;
    // this._data.type_spec = this.typeSpecControl.value;
    // console.log(this._data)
    // console.log(`profile_id ${updateObject.people_id}`)
    // delete updateObject.school_id;
    // delete updateObject.timein;
    // delete updateObject.timeout;
    // delete updateObject.university_id;
    // delete updateObject.name;
    // console.log(updateObject)
    this.logService.update(updateObject).subscribe((x: any) => {
      if (x.message === 'success')
        console.log('success')
      else
        console.log('failed')
    })
  }

  cancel(): void {
    this.matDialogRef.closeAll();
  }

  type: Type[] = [
    { value: 'guardian', viewValue: 'Guardian' },
    { value: 'parent', viewValue: 'Parent' },
    { value: 'visitor', viewValue: 'Visitor' },
    { value: 'guest', viewValue: 'Guest' },
    { value: 'others', viewValue: 'Others' },
  ];

  purpose: Purpose[] = [
    { value: PURPOSEENUM.BPMONITORING, viewValue: 'BP Monitoring' },
    { value: PURPOSEENUM.CHECK_UP, viewValue: 'Check-up' },
    { value: PURPOSEENUM.CONSULTATION, viewValue: 'Consultation' },
    { value: PURPOSEENUM.EMERGENCYCASE, viewValue: 'Emergency Case' },
    { value: PURPOSEENUM.FIRSTAID, viewValue: 'First Aid' },
    { value: PURPOSEENUM.MEDICAL, viewValue: 'Medical' },
    { value: PURPOSEENUM.MEDICINE, viewValue: 'Medicine' },
    { value: PURPOSEENUM.OTHERS, viewValue: 'Others' },
  ];

  complaint: Complaint[] = [
    { value: COMPLAINTENUM.ABDOMINALPAIN, viewValue: 'Abdominal Pain' },
    { value: COMPLAINTENUM.ALLERGY, viewValue: 'Allergy' },
    { value: COMPLAINTENUM.BODYMALAISE, viewValue: 'Body Malaise' },
    { value: COMPLAINTENUM.CHESTPAIN, viewValue: 'Chest Pain' },
    { value: COMPLAINTENUM.COLD, viewValue: 'Cold' },
    { value: COMPLAINTENUM.DYSMENORRHEA, viewValue: 'Dysmenorrhea' },
    { value: COMPLAINTENUM.HEADACHE, viewValue: 'Headache' },
    { value: COMPLAINTENUM.NAUSEA, viewValue: 'Nausea' },
    { value: COMPLAINTENUM.SKIN_RASH, viewValue: 'Skin Rash' },
    // { value: COMPLAINTENUM., viewValue: 'Sore Throat' },
    { value: COMPLAINTENUM.SPRAIN, viewValue: 'Sprain' },
    { value: COMPLAINTENUM.VOMNITING, viewValue: 'Vomiting' },
    { value: COMPLAINTENUM.WOUND, viewValue: 'Wound' },
    { value: COMPLAINTENUM.OTHERS, viewValue: 'Others' },
  ];

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
