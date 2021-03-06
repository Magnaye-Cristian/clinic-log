import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupLoginComponent } from 'src/app/dialog/popup-login/popup-login.component';
import { ILogin } from 'src/app/models/login.model';
import { ROLEENUM } from 'src/app/models/role.enum';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';

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
    private router: Router,
    private accountService: AccountService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginViaToken();
  }
  loginViaToken() {
    const account = this.accountService.getProfileFromToken();
    if (!account)
      return
    this.accountService.navigateByRole(account.role)
  }

  private dialogOpen(message): void {
    // this.dialog.open(DialogComponent, {
    //   data: { message: 'Invalid'}
    // });

  }

  login(loginForm: ILogin) {
    // this.disablebutton = true;
    console.log(loginForm);

    this.accountService.login(loginForm).subscribe(
      (x: any) => {
        this.accountService.navigateByRole(x.role)
      },
      error => {
        console.log(error)
        console.log('invalid credentials')
        this.dialogOpen('Invalid Credentials')
        this.dialog.open(PopupLoginComponent, { panelClass: 'custom-dialog-container' });
      }
    )

    //redirect to admin
    // if (!this.validate(loginForm)) {
    //   console.log(`Invalid`);
    // }
    // else {
    //   // save token generated
    //   // move to head-admin page
    //   console.log(`Validated`)
    // }
  }


  validate(loginForm: ILogin): boolean {
    if (!loginForm.schoolId.match('[0-9-]') &&
      loginForm.password.match('[a-z0-9]')
    ) { return false; }
    return true;
  }
}
