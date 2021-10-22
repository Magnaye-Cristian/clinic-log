import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LogOutComponent } from '../dialog/log-out/log-out.component';

@Component({
  selector: 'faculty-account',
  templateUrl: './faculty-account.component.html',
  styleUrls: ['./faculty-account.component.css']
})
export class FacultyAccountComponent {
  viewMode ='profile';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  onLogout(){
    this.dialog.open(LogOutComponent);
  }
}
