import { app } from "./app";
import { init as initDb } from "./db";

const server = app.listen(app.get("port"), () => {
    console.log(`Service is listening on port ${app.get("port")} in ${app.get("env")} mode`);
});

initDb();
