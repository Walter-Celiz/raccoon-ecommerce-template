import { Router } from "express";
import * as controllers from "../controllers";

class ProductRoutes {
    router: Router;
    constructor () {
        this.router = Router();
        this.routes();
    }

    routes () {
        this.router.get("/", controllers.getProducts);        
    }
}

const indexRoutes = new ProductRoutes();
indexRoutes.routes();

export default indexRoutes.router;