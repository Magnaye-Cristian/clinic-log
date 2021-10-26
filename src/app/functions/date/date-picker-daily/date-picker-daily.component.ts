import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;


export const MY_FORMATS = {
  parse: {
    dateInput: 'D/MM/YYYY',
  },
  display: {
    dateInput: 'D/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DDDD MMMM YYYY',
  },
};


@Component({
  selector: 'date-picker-daily',
  templateUrl: './date-picker-daily.component.html',
  styleUrls: ['./date-picker-daily.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatePickerDailyComponent implements OnInit {
  @Output() dateSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // this.dateOnValueChanges()
  }
  date = new FormControl(moment());

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());

    console.log(`test year`)
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());

    console.log(`test month`)
    this.date.setValue(ctrlValue);
  }

  close() {
    this.dateSelected.emit(this.date.value)
    console.log(this.date.value)
  }
  chosenDayHandler(normalizedDay: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.day(normalizedDay.day());
    this.date.setValue(ctrlValue);
    console.log(`test day`)
    datepicker.close();
  }

}
