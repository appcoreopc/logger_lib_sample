import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
import { DefaultLogFormatterService } from './default-log-formatter.service';
import { LogFormatter } from './log-formatter';
import { LogAppender, LOG_APPENDERS } from './log-appender';
import { DefaultLogAppender } from './default-log-appender';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogMonitorComponent
  ],
  // providers: [
  //   LoggerService
  // ],
  exports: [
    LogMonitorComponent
  ]
})
export class LoggerModule {

  // Setup
  static forRoot(config: LoggerConfig, formatter = DefaultLogFormatterService): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        { provide: LogFormatter, useClass: formatter },
        { 
          provide: LOG_APPENDERS, 
          useClass: DefaultLogAppender,
          multi: true
        }
      ]
    }
  }
  
 
}
