"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
const AppRouter_1 = require("./AppRouter");
const MetadataKeys_1 = require("./MetadataKeys");
exports.router = AppRouter_1.AppRouter.getInstance();
function controller(routePrefix) {
    return function (target) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            if (path) {
                exports.router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
            }
        }
    };
}
exports.controller = controller;
