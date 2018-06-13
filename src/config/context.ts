
import * as cls from "continuation-local-storage";
import { getNamespace } from "continuation-local-storage";

const namespace = cls.createNamespace("com.domain");

export const context = {
    setUp: (req, res, next) => {
        const nameSpace = cls.getNamespace("com.domain");
        // wrap the events from request and response
        nameSpace.bindEmitter(req);
        nameSpace.bindEmitter(res);
        const userId = req.header("x-userid") as string;
        // run middleware in the scope of the namespace that we have created
        nameSpace.run(() => {
            // set data to the namespace that we want to access in different events/callbacks
            namespace.set("userId", userId);
            next();
        });
    },
    get: (key) => {
        const nameSpace = getNamespace("com.domain");
        return nameSpace.get(key);
    }
};
