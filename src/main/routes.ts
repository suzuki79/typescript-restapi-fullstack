import { order } from "./handlers/order";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/orders/:id",
        method: "get",
        action: order.get
    },
    {
        path: "/orders",
        method: "post",
        action: order.post
    }
];
