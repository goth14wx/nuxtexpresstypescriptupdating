import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import routesArticles from "./articles/routes"

class Server{

    app:Application =  express();

    constructor(){
        this.config();
        this.routes();
    }

    config(){
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use("/",routesArticles.router);
    }

}

const server = new Server();


export default {
    path: '/api/back',
    handler: server.app
  }