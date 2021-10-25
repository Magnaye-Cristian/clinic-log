import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { COMPLAINTENUM } from 'src/app/models/complaint.enum';
import { LogCreateDTO } from 'src/app/models/log-create-dto.model';
import { LOGTYPEENUM } from 'src/app/models/log-type.enum';
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

@Component({
  selector: 'app-create-log-stakeholders',
  templateUrl: './create-log-stakeholders.component.html',
  styleUrls: ['./create-log-stakeholders.component.css']
})
export class CreateLogStakeholdersComponent implements OnInit {

  constructor(private fb: FormBuilder, private LogService: LogService, private accountService: AccountService) { }
  createLog: FormGroup;
  department: string = '';
  name: string = ''
  ngOnInit(): void {
    this.createLog = this.fb.group({
      student_id: this.fb.control(''),
      purpose: this.fb.control(''),
      complaint: this.fb.control(''),
    })
  }
  profile: IProfile;
  get isCreateActive(): boolean { return !!this.profile }
  get student_id(): AbstractControl { return this.createLog.get('student_id') }
  get purposeControl(): AbstractControl { return this.createLog.get('purpose') }
  get complaintControl(): AbstractControl { return this.createLog.get('complaint') }

  create(): void {
    console.log(`create`)
    console.log(this.purposeControl.value)

    const logCreateDTO: LogCreateDTO = {
      people_id: this.profile.id,
      type: LOGTYPEENUM.UNIVERSITY,
      type_spec: '',
      school_id: this.student_id.value,
      first_name: this.profile.first_name,
      last_name: this.profile.last_name,
      middle_name: this.profile.middle_name,
      purpose: this.purposeControl.value,
      complaint: this.complaintControl.value,
      department: this.profile.department,
      address: ''
    }
    this.LogService.create(logCreateDTO).subscribe((x) => {
      console.log(x)
    });
  }
  search(): void {
    console.log('search is clicked')
    console.log(this.student_id.value)
    if (!this.student_id.value)
      return;

    this.accountService.get(this.student_id.value).subscribe((profile: IProfile) => {
      this.department = ''
      this.name = ''
      this.profile = null;
      console.log(profile)
      if (!profile)
        return;
      this.profile = profile
      this.department = profile.department;
      this.name = `${profile.first_name} ${profile.last_name}`
    })
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

}
