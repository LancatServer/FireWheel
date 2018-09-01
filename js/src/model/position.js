define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Position = /** @class */ (function () {
        function Position(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Position.prototype.add = function (pos) {
            /**加法
             * 將加上另一個Vector
             */
            return new Position(this.x + pos.x, this.y + pos.y);
        };
        Position.prototype.multiply = function (number) {
            return new Position(this.x * number, this.y * number);
        };
        return Position;
    }());
    exports.Position = Position;
});
