import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LogOutComponent } from '../dialog/log-out/log-out.component';
import { GenerateCodeComponent } from '../dialog/generate-code/generate-code.component';

@Component({
  selector: 'app-head-admin',
  templateUrl: './head-admin.component.html',
  styleUrls: ['./head-admin.component.css']
})
export class HeadAdminComponent {
  viewMode = 'profile';
  panelOpenState = false;

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
