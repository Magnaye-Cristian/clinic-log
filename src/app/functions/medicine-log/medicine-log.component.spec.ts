import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineLogComponent } from './medicine-log.component';

describe('MedicineLogComponent', () => {
  let component: MedicineLogComponent;
  let fixture: ComponentFixture<MedicineLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
