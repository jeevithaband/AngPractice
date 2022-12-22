import { TestBed } from '@angular/core/testing';

import { DairyserviceService } from './dairyservice.service';

describe('DairyserviceService', () => {
  let service: DairyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DairyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
