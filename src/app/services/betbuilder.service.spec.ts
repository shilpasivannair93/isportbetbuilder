import { TestBed } from '@angular/core/testing';

import { BetbuilderService } from './betbuilder.service';

describe('BetbuilderService', () => {
  let service: BetbuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetbuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
