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


  constructor(private dashboardService: DashboardService) {
    Object.assign(this, { purpose, complaintsMulti })
  }
  ngOnInit(): void {

    this.dashboardService.getDashboardInfo().subscribe(x => console.log(this.stakeholders = x))
  }

}


