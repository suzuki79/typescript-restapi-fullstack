import "reflect-metadata";

import * as cls from "continuation-local-storage";

import * as bodyParser from "body-parser";
import * as express from "express";

import { Request, Response } from "express";

import { AppRoutes } from "./routes";

import { context } from "./config/context";

import logger from "./config/logger";

export const app = express();
// run app
app.set("port", 3000);

app.use((req, res, next) => {
    context.setUp(req, res, next);
});
app.use(bodyParser.json());

// register all application routes
AppRoutes.forEach((route) => {
    app[route.method](route.path, (request: Request, response: Response, next: any) => {
        route.action(request, response)
            .then(() => next)
            .catch((err) => next(err));
    });
});
logger.info("Express application is up and running on port 3000");
