"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const getProducts = (req, res, next) => {
    return res.status(200).json({ data: `Products route` });
};
exports.getProducts = getProducts;
