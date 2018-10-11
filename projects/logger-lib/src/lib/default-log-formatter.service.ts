import { Injectable } from '@angular/core';
import { LogFormatter } from './log-formatter';

@Injectable()
export class DefaultLogFormatterService implements LogFormatter {
  format(msg: string): string {
    return "> " + msg;
  }
}
