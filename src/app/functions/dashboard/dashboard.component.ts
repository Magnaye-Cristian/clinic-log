import { Component, OnInit } from '@angular/core';
import { stakeholders, purpose, complaintsMulti } from 'src/app/datasource/sources';
import { LegendPosition } from '@swimlane/ngx-charts';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // shared-configuration of charts
  view: any = [1020, 400];
  xAxis: boolean = true;
  yAxis: boolean = true;
  legend: boolean = true;
  right = LegendPosition.Right;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  showGridLines: boolean = true;
  showDataLabel: boolean = false;

  // number-cards
  cardColor: string = '#ffff';
  stakeholders: object[];

  // barchart
  purpose: object[];
  alegendTitle: string = 'Purpose';

  // Line Chart
  complaintsMulti: object[];
  legendTitle: string = 'Complaints';

  // testPurpose = [
  //   {
  //     "name": "Check-up",
  //     "value": "15"
  //   }, {
  //     "name": "Consultation",
  //     "value": "6"
  //   }, {
  //     "name": "Emergency Case",
  //     "value": "4"
  //   }, {
  //     "name": "First Aid",
  //     "value": "7"
  //   }, {
  //     "name": "Medical",
  //     "value": "45"
  //   }, {
  //     "name": "Medicine",
  //     "value": "18"
  //   }, {
  //     "name": "Others",
  //     "value": "4"
  //   }
  // ]


  constructor(private dashboardService: DashboardService) {

    // Object.assign(this, { complaintsMulti })

  }
  ngOnInit(): void {
    const date = new Date()
    this.monthlyComplaintsChangeYear(date.getFullYear());
    this.setRoles();
    this.purposeRequest(date);
  }
  setRoles() {
    this.dashboardService.getRoles().subscribe(roles => {
      console.log(roles)
      this.stakeholders = roles;
    })
  }
  purposeRequest(_date: Date) {
    const date = new Date(_date)
    const month = date.getMonth() + 1;
    console.log(date.getDate())
    console.log(month)
    console.log(date.getFullYear())
    this.dashboardService.getPurpose(date.getFullYear(), month, date.getFullYear()).subscribe((records: any) => {
      console.log(records)
      this.purpose = records
      console.log(this.purpose)
    });
  }

  monthlyComplaintsChangeYear($event: any) {
    console.log(`${$event}`)
    this.dashboardService.getMonthlyComplaintsOnYear($event).subscribe(x => {
      console.log(JSON.stringify(x))
      this.complaintsMulti = x
    })

  }
}


