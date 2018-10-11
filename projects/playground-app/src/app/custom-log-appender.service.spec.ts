/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomLogAppenderService } from './custom-log-appender.service';

describe('Service: CustomLogAppender', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomLogAppenderService]
    });
  });

  it('should ...', inject([CustomLogAppenderService], (service: CustomLogAppenderService) => {
    expect(service).toBeTruthy();
  }));
});
