import { TestBed, inject } from '@angular/core/testing';

import { SrvService } from './srv.service';

describe('SrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrvService]
    });
  });

  it('should be created', inject([SrvService], (service: SrvService) => {
    expect(service).toBeTruthy();
  }));
});
