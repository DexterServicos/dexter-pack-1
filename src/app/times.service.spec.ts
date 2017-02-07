/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimesService } from './times.service';

describe('TimesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimesService]
    });
  });

  it('should ...', inject([TimesService], (service: TimesService) => {
    expect(service).toBeTruthy();
  }));
});
