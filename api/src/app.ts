import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import indexRoutes from "./routes";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config (): void {
        this.app.set("port", process.env["PORT"]);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({ limit: "50mb" }));
        this.app.use(express.urlencoded({extended: true, limit: "50mb"}));
        this.app.use(cookieParser());
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
            next();
        });
    }

    public routes(): void {
        const router: express.Router = express.Router();        
        // Error catching endware
        this.app.use("/api", indexRoutes);
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            res.status(500).json({message: err.message});
        });
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is listening on port', this.app.get('port'));
        });
    }
}

export { Server };