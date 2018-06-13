
import { Connection, createConnection } from "typeorm";
import logger from "./config/logger";

let connection: Connection;
let initPromise: Promise<void>;
export function init() {
    if (initPromise) {
        console.log("twice?");
        return initPromise;
    }
    initPromise = createConnection().then((conn) => {
        connection = conn;
        logger.info("connection created");
    }).catch((error) => { logger.info("TypeORM connection error: ", error); });
    return initPromise;
}
export function stop(): Promise<void> {
    return connection.close();
}
