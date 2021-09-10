import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {
  disablebutton: boolean;

  constructor(
    // public dialog: MatDialog,
    // public dialogRef: MatDialogRef<Content1Component>,
    // @Inject(MAT_DIALOG_DATA) data,
    // private _ngZone: NgZone
    ) { }

  ngOnInit(): void {
  }


  login(loginForm: any) {
    this.disablebutton = true;
    console.log(loginForm);
    if (!this.validate(loginForm)){
      console.log(`Invalid`);
      // this.dialog.open(DialogComponent, {
      //   data: { message: 'Invalid'}
      // });
    }
    else {
      console.log(`Validated`)
    }
  }


  validate(loginForm: any): boolean {
    if (!loginForm.srcode.match('[0-9-]') &&
         loginForm.password.match('[a-z0-9]')
         ) { return false; }
    return true;
  }
}
