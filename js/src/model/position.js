define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Position = /** @class */ (function () {
        function Position(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Position.prototype.add = function (vector) {
            /**加法
             * 將加上另一個Vector
             */
            this.x += vector.x;
            this.y += vector.y;
        };
        Position.prototype.multiply = function (number) {
            /**乘法
             * 將數值乘上一個number
             */
            this.x *= number;
            this.y *= number;
        };
        return Position;
    }());
    exports.Position = Position;
});
