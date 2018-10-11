import { Injectable } from '@angular/core';
import { LogFormatter } from '@my/logger-lib';

@Injectable()
export class CustomLogFormatterService implements LogFormatter {

  constructor() { }

  format(msg: string): string {
    return `[${new Date().toISOString()}] ${msg}`;
  }

}
