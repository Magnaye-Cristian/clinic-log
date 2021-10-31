import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMPLAINTENUM } from 'src/app/models/complaint.enum';
import { ILogUpdateDTO } from 'src/app/models/log-update-dto.model';
import { IProfile } from 'src/app/models/profile.model';
import { PURPOSEENUM } from 'src/app/models/purpose.enum';
import { AccountService } from 'src/app/services/account.service';
import { LogService } from 'src/app/services/log.service';

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
  selector: 'app-edit-stakeholder',
  templateUrl: './edit-stakeholder.component.html',
  styleUrls: ['./edit-stakeholder.component.css']
})
export class EditStakeholderComponent implements OnInit {
  editLog: FormGroup;
  department: string = '';
  profile: any;
  first_name: string = '';
  middle_name: string = '';
  last_name: string = '';
  updateValue: any;
  profile_id: number;

  constructor(private fb: FormBuilder, private accountService: AccountService, @Inject(MAT_DIALOG_DATA) public data, private logService: LogService, private matDialogRef: MatDialog) { }
  _data: any;
  ngOnInit(): void {
    /**
     * populate logic
     * get all data from row
     * populate fields
     */
    this._data = JSON.parse(JSON.stringify(this.data))
    const { school_id, purpose, complaint, medicine, first_name, last_name, middle_name, department } = this._data
    this.first_name = first_name;
    this.last_name = last_name;
    this.middle_name = middle_name;
    this.department = department;
    console.log(this._data)
    this.updateValue = this._data;
    this.editLog = this.fb.group({
      school_id: this.fb.control(school_id),
      purpose: this.fb.control(purpose),
      complaint: this.fb.control(complaint),
      medicine: this.fb.control(medicine),
    })
    this.search()
  }

  get student_id(): AbstractControl { return this.editLog.get('school_id') }
  get purposeControl(): AbstractControl { return this.editLog.get('purpose') }
  get complaintControl(): AbstractControl { return this.editLog.get('complaint') }
  get medicineControl(): AbstractControl { return this.editLog.get('medicine') }

  search(): void {
    console.log('search is clicked')
    console.log(this.student_id.value)
    if (!this.student_id.value)
      return;

    this.accountService.get(this.student_id.value).subscribe((profile: IProfile) => {
      this.profile_id = profile.id;
      this.department = ''
      this.first_name = ''
      this.middle_name = ''
      this.last_name = ''
      this.profile = null;
      console.log(profile)
      if (!profile)
        return;
      this.profile = profile
      this.department = profile.department;
      this.first_name = profile.first_name;
      this.last_name = profile.last_name;
      this.middle_name = profile.middle_name;
      console.log(profile)
    })
  }
  updateLogUniversity() {
    console.log(this.editLog.value)
    const id = this._data.id;
    this.updateValue.purpose = this.purposeControl.value;
    this.updateValue.complaint = this.complaintControl.value;
    this.updateValue.medicine = this.medicineControl.value;
    this.updateValue.department = this.department;
    // console.log(this.updateValue)
    let updateObject: any = this.updateValue;
    updateObject.people_id = this.profile.id;
    console.log(`profile_id ${updateObject.people_id}`)
    delete updateObject.school_id;
    delete updateObject.timein;
    delete updateObject.timeout;
    delete updateObject.university_id;
    delete updateObject.name;
    delete updateObject.school_id_placeholder;
    delete updateObject.department_placeholder;
    console.log(updateObject)
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
    { value: 'Vomiting', viewValue: 'Vomiting' },
    { value: 'Wound', viewValue: 'Wound Dressing' },
    { value: 'Others', viewValue: 'Others' },
  ];

}
