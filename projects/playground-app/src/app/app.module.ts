import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoggerModule, LOG_APPENDERS } from '@my/logger-lib';
import { CustomLogFormatterService } from './custom-log-formatter.service';
import { CustomLogAppenderService } from './custom-log-appender.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({enableDebug: true}, CustomLogFormatterService)
  ],
  providers:[ {
    provide: LOG_APPENDERS,
    useClass: CustomLogAppenderService,
    multi: true
  }]
 
  bootstrap: [AppComponent]
})
export class AppModule { }
