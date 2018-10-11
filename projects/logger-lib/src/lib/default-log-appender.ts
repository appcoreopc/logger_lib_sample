import { LogAppender } from "./log-appender";
import { Injectable } from "@angular/core";

@Injectable()
export class DefaultLogAppender implements LogAppender {
    
    append(level: string, msg: string): void {
        if (level === 'debug') {
            console.debug(msg);
        }
        else {
            console.log(msg);
        }
    }

}