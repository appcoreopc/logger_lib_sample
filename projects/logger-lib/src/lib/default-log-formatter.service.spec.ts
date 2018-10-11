/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultLogFormatterService } from './default-log-formatter.service';

describe('Service: DefaultLogFormatter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultLogFormatterService]
    });
  });

  it('should ...', inject([DefaultLogFormatterService], (service: DefaultLogFormatterService) => {
    expect(service).toBeTruthy();
  }));
});
