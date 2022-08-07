/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatService } from './cat.service';

describe('Service: Cat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatService]
    });
  });

  it('should ...', inject([CatService], (service: CatService) => {
    expect(service).toBeTruthy();
  }));
});
