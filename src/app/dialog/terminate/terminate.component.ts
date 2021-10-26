import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-terminate',
  templateUrl: './terminate.component.html',
  styleUrls: ['./terminate.component.css']
})
export class TerminateComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: number, first_name: string, last_name: string }, private logService: LogService) { }
  terminateMessage = ''

  ngOnInit(): void {
    console.log('terminate')
    this.terminateMessage = `Terminate Log for ${this.data.first_name} ${this.data.last_name}`
    console.log()
  }

  timeout(): void {
    console.log(`delete button is selected`)
    this.logService.timeout(this.data.id).subscribe((x: any) => {
      console.log(x)
      if (x.message === 'success')
        console.log('success')
      else
        console.log('failed')
    })
  }

}
