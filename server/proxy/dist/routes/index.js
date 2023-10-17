"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res, next) => {
            return res.status(200).json({
                message: `App Raccoon Ecommerce Portal`
            });
        });
        this.router.get("/home", (req, res, next) => {
            return res.status(200).json({
                message: `Testing route`
            });
        });
    }
}
const indexRoutes = new IndexRoutes();
indexRoutes.routes();
exports.default = indexRoutes.router;
