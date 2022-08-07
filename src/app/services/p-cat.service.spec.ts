import { TestBed } from '@angular/core/testing';

import { PCatService } from './p-cat.service';

describe('PCatService', () => {
  let service: PCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
