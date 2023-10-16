import { Request, Response, NextFunction, Router } from "express";

class IndexRoutes {
    router: Router;
    constructor () {
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
            return res.status(200).json({
                message: `App Raccoon Ecommerce Portal`
            })
        });
        this.router.get("/home", (req: Request, res: Response, next: NextFunction) => {
            return res.status(200).json({
                message: `Testing route`
            })
        });
    }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;