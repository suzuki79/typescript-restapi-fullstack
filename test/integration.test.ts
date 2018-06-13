import { app } from "../src/app";

import { getManager } from "typeorm";
import { init as initDb, stop as stopDb } from "../src/db";
import { Order } from "../src/domain/model/order";

import * as mock from "supertest";

describe("typeorm with jest tests", async () => {
    beforeAll(async () => {
        await initDb();
    });

    afterAll(async () => {
        await stopDb();
    });
    it("post /orders should return 201", async (done) => {
        mock(app)
            .post("/orders")
            .send({ id: 1, foodId: 11 })
            .set("Accept", "application/json")
            .expect(201)
            .then((res) => {
                done();
            });
    });
    it("/orders/1 should return 200", async (done) => {
        mock(app)
            .get("/orders/1")
            .expect(200)
            .then((res) => {
                done();
            });
    });

    test("/orders/10 should return 404", async (done) => {
        mock(app)
            .get("/orders/10")
            .expect(404)
            .then(() => {
                done();
            });
    });

    test("Get data with id=1", async (done) => {
        const postRepository = getManager().getRepository(Order);
        // load a post by a given post id
        postRepository.findOne(1).then((obj) => {
            done();
        });
    });
});
