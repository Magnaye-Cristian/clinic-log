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

  // export var purpose = [
  //   {
  //     "name": "Check-up",
  //     "value": "15"
  //   },{
  //     "name": "Consultation",
  //     "value": "6"
  //   },{
  //     "name": "Emergency Case",
  //     "value": "4"
  //   },{
  //     "name": "First Aid",
  //     "value": "7"
  //   },{
  //     "name": "Medical",
  //     "value": "45"
  //   },{
  //     "name": "Medicine",
  //     "value": "18"
  //   },{
  //     "name": "Others",
  //     "value": "4"
  //   }
  // ]


  constructor(private dashboardService: DashboardService) {

    // Object.assign(this, { complaintsMulti })

  }
  ngOnInit(): void {
    this.monthlyComplaintsChangeYear(2021);

    this.dashboardService.getDashboardInfo().subscribe(x => {
      this.stakeholders = x.role
      // purpose of visit needs to pass month and year
      this.purpose = x.purposes
      console.log(x)
    })
  }

  monthlyComplaintsChangeYear($event: any) {
    console.log(`${$event}`)
    this.dashboardService.getMonthlyComplaintsOnYear($event).subscribe(x => {
      console.log(JSON.stringify(x))
      this.complaintsMulti = x
    })

  }
}


