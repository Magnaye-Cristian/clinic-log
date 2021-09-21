import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAdminProfileComponent } from './head-admin-profile.component';

describe('HeadAdminProfileComponent', () => {
  let component: HeadAdminProfileComponent;
  let fixture: ComponentFixture<HeadAdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadAdminProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
