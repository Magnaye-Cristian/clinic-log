import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { COMPLAINTENUM } from 'src/app/models/complaint.enum';
import { LogCreateDTO } from 'src/app/models/log-create-dto.model';
import { LOGTYPEENUM } from 'src/app/models/log-type.enum';
import { PURPOSEENUM } from 'src/app/models/purpose.enum';
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


@Component({
  selector: 'app-create-log-others',
  templateUrl: './create-log-others.component.html',
  styleUrls: ['./create-log-others.component.css']
})
export class CreateLogOthersComponent implements OnInit {
  createLog: FormGroup;

  constructor(private logService: LogService, private fb: FormBuilder) { }

  get firstnameControl(): AbstractControl { return this.createLog.get('first_name') }
  get lastnameControl(): AbstractControl { return this.createLog.get('last_name') }
  get middlenameControl(): AbstractControl { return this.createLog.get('middle_name') }
  get purposeControl(): AbstractControl { return this.createLog.get('purpose') }
  get complaintControl(): AbstractControl { return this.createLog.get('complaint') }
  get addressControl(): AbstractControl { return this.createLog.get('address') }
  get typeSpecControl(): AbstractControl { return this.createLog.get('type_spec') }
  ngOnInit(): void {
    this.createLog = this.fb.group({
      type_spec: this.fb.control(''),
      first_name: this.fb.control(''),
      last_name: this.fb.control(''),
      middle_name: this.fb.control(''),
      address: this.fb.control(''),
      purpose: this.fb.control(''),
      complaint: this.fb.control('')
    })
  }



  create(): void {
    console.log(`create`)
    console.log(this.purposeControl.value)

    const logCreateDTO: LogCreateDTO = {
      type: LOGTYPEENUM.NON_UNIVERSITY,
      type_spec: this.typeSpecControl.value,
      first_name: this.firstnameControl.value,
      last_name: this.lastnameControl.value,
      middle_name: this.middlenameControl.value,
      purpose: this.purposeControl.value,
      complaint: this.complaintControl.value,
      department: '',
      address: this.addressControl.value
    }
    this.logService.create(logCreateDTO).subscribe((x) => {
      console.log(x)
    });
  }

  // create(): void {
  //   console.log(this.createLog)
  // }
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

}
