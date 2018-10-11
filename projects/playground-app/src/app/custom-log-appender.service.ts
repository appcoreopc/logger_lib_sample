import { Injectable } from '@angular/core';
import { LogAppender } from '@my/logger-lib';

@Injectable()
export class CustomLogAppenderService implements LogAppender {
  
  append(level: string, msg: string): void {
    let log = sessionStorage.getItem('log') || '';
    log += `\n[${level}] ${msg}`;

    sessionStorage.setItem('log', log);
  }

  constructor() { }

}
