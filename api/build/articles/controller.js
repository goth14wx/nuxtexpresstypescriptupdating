"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticlesController = /** @class */ (function () {
    function ArticlesController() {
    }
    ArticlesController.prototype.index = function (req, res) {
        res.json({
            "msg": "api updating with typescript"
        });
    };
    return ArticlesController;
}());
var articlesController = new ArticlesController();
exports.default = articlesController;
