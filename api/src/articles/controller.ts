import {Request,Response} from "express";

class ArticlesController{

    index(req:Request,res:Response){
        res.json({
            "msg":"api updating with typescript"
        });
    }

}



const articlesController = new ArticlesController();

export default articlesController;