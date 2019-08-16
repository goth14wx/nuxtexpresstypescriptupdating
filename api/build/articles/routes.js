"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = __importDefault(require("./controller"));
var RoutesArticles = /** @class */ (function () {
    function RoutesArticles() {
        this.router = express_1.Router();
        this.config();
    }
    RoutesArticles.prototype.config = function () {
        this.router.get("/", controller_1.default.index);
    };
    return RoutesArticles;
}());
var routesArticles = new RoutesArticles();
exports.default = routesArticles;
