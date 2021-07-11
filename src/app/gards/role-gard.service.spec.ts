import { TestBed } from '@angular/core/testing';

import { RoleGardService } from './role-gard.service';

describe('RoleGardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleGardService = TestBed.get(RoleGardService);
    expect(service).toBeTruthy();
  });
});
