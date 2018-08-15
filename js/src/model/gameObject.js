define(["require", "exports", "./position"], function (require, exports, position_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameObject = /** @class */ (function () {
        function GameObject() {
            this.pos = new position_1.Position(); //位置
            this.v = new position_1.Position(); //速度
            this.m = 0; //質量
            this.shape = 0 /* circle */; //形狀
            this.friction = 0.9; //摩擦力
            this.r = 10; //半徑(圓形)
            this.wh = new position_1.Position();
        }
        GameObject.prototype.beenTouch = function (obj) {
            switch (obj.shape) {
                case 0 /* circle */:
                    this.circleRebound(obj);
                    break;
                case 1 /* rect */:
                    this.rectRebound(obj);
                    break;
            }
        };
        GameObject.prototype.circleRebound = function (obj) {
            /*
              處理對圓形的反彈
              由sub object 定義
            */
        };
        GameObject.prototype.rectRebound = function (obj) {
            /*
              處理對矩形的反彈
            由sub object 定義
            */
        };
        return GameObject;
    }());
    exports.GameObject = GameObject;
});
