import { TestBed } from '@angular/core/testing';

import { ContractopsService } from './contractops.service';

describe('ContractopsService', () => {
  let service: ContractopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
