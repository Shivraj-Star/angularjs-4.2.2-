import { TestBed, inject } from '@angular/core/testing';

import { EmpstoreService } from './empstore.service';

describe('EmpstoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpstoreService]
    });
  });

  it('should be created', inject([EmpstoreService], (service: EmpstoreService) => {
    expect(service).toBeTruthy();
  }));
});
