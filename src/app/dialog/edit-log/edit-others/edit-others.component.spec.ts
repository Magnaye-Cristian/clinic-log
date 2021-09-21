import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOthersComponent } from './edit-others.component';

describe('EditOthersComponent', () => {
  let component: EditOthersComponent;
  let fixture: ComponentFixture<EditOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
