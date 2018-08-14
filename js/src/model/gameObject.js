define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GameObject = /** @class */ (function () {
        function GameObject() {
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
