import { TestBed } from '@angular/core/testing';

import { LoanofficerService } from './loanofficer.service';

describe('LoanofficerService', () => {
  let service: LoanofficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanofficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
