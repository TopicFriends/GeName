import { TestBed, inject } from '@angular/core/testing';

import { NameGenService } from './name-gen.service';

describe('NameGenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameGenService]
    });
  });

  it('should be created', inject([NameGenService], (service: NameGenService) => {
    expect(service).toBeTruthy();
  }));
});
