import { Request, Response, NextFunction } from "express";

const getProducts = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ data: `Products route` });
}

export { getProducts };