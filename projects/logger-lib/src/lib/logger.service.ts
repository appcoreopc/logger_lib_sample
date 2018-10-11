import { Injectable, Optional, Inject } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { LogFormatter } from './log-formatter';
import { LogAppender } from './log-appender';
import { LOG_APPENDERS } from './log-appender';

@Injectable({
  providedIn: 'root' 
})
export class LoggerService {

  constructor(
    @Optional() private config: LoggerConfig,
    private formatter: LogFormatter,
    @Inject(LOG_APPENDERS) private appenders: LogAppender[]
    ) {
  }

  debug(message: string): void {
    if (this.config && !this.config.enableDebug) return;
    console.debug(this.formatter.format(message));

    for(const a of this.appenders) {
      a.append('debug', this.formatter.format(message));
    }

  }

  log(message: string): void {
    console.log(this.formatter.format(message));

    for(const a of this.appenders) {
      a.append('log', this.formatter.format(message));
    }

  }

}
