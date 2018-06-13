import { Request, Response } from "express";

import { Order } from "../domain/model/order";

import { getNamespace } from "continuation-local-storage";
import { getManager } from "typeorm";

import { context } from "../config/context";

export const order = {
    get: async (request: Request, response: Response) => {
        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(Order);
        const id = request.params.id;
        // load a post by a given post id
        const result = await postRepository.findOne(id);
        // return loaded posts
        if (result === undefined) {
            response.statusCode = 404;
            response.send({ message: "Not found" });
        } else {
            response.send(result);
        }
    },
    post: async (request: Request, response: Response) => {
        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(Order);
        const newOrder = new Order();
        const reqBody = request.body;
        newOrder.id = reqBody.id;
        newOrder.foodId = reqBody.foodId;
        newOrder.orderAt = new Date();
        // load a post by a given post id
        await postRepository.save(newOrder);

        // return loaded posts
        response.statusCode = 201;
        response.send(newOrder);
    }
};
