import * as logger from "winston";

logger.configure({
    level: "debug",
    transports: [
        new logger.transports.Console({
            // colorize: true
            level: process.env.NODE_ENV === "production" ? "info" : "debug"
        }),
        new logger.transports.File({
            filename: "debug.log",
            level: "debug"
        })
    ]
});
if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;
