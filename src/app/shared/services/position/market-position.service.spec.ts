import { TestBed } from '@angular/core/testing';

import { MarketPositionService } from './market-position.service';

describe('MarketPositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketPositionService = TestBed.get(MarketPositionService);
    expect(service).toBeTruthy();
  });
});
