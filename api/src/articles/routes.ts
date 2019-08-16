import { Router } from "express";
import articlesController from "./controller";
class RoutesArticles{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get("/",articlesController.index);
    }

}

const routesArticles = new RoutesArticles();

export default routesArticles;