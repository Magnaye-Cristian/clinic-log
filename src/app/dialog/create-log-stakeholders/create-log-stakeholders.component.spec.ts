import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLogStakeholdersComponent } from './create-log-stakeholders.component';

describe('CreateLogStakeholdersComponent', () => {
  let component: CreateLogStakeholdersComponent;
  let fixture: ComponentFixture<CreateLogStakeholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLogStakeholdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLogStakeholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
