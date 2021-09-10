import { Component, OnInit } from '@angular/core';

interface Purpose {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})



export class CreateLogComponent implements OnInit {
  viewMode = 'stakeholders';

  constructor() { }


  ngOnInit(): void {
  }

}
