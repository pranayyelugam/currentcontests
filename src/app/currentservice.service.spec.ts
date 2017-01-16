/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentserviceService } from './currentservice.service';

describe('CurrentserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentserviceService]
    });
  });

  it('should ...', inject([CurrentserviceService], (service: CurrentserviceService) => {
    expect(service).toBeTruthy();
  }));
});
