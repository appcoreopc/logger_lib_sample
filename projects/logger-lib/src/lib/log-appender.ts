import { InjectionToken } from '@angular/core';

export abstract class LogAppender {
    abstract append(level: string, msg: string): void;
}

// LogAppender[] ---> nicht als Token verwendbar
export const LOG_APPENDERS = new InjectionToken<LogAppender>('LOG_APPENDERS');