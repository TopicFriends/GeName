import { TestBed, inject } from '@angular/core/testing';

import { CheckDomainService } from './check-domain.service';

describe('CheckDomainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckDomainService]
    });
  });

  it('should be created', inject([CheckDomainService], (service: CheckDomainService) => {
    expect(service).toBeTruthy();
  }));
});
