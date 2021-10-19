import { TestBed } from '@angular/core/testing';

import { HeadAdminGuard } from './head-admin.guard';

describe('HeadAdminGuard', () => {
  let guard: HeadAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeadAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
