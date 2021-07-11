import { TestBed } from '@angular/core/testing';

import { GuestGardService } from './guest-gard.service';

describe('GuestGardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestGardService = TestBed.get(GuestGardService);
    expect(service).toBeTruthy();
  });
});
