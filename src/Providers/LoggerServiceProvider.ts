import * as Logger from "bunyan";

/**
 * @function Providers Log service
 * @returns Logger
 */
export function logger(): Logger {
    return Logger.createLogger({
        name: "logger",
        streams: [{
            level: "trace",
            stream: process.stdout,
        }],
    });
}
