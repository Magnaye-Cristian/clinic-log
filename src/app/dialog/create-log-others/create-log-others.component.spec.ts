import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLogOthersComponent } from './create-log-others.component';

describe('CreateLogOthersComponent', () => {
  let component: CreateLogOthersComponent;
  let fixture: ComponentFixture<CreateLogOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLogOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLogOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
