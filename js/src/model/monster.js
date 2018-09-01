var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./gameObject", "./position"], function (require, exports, gameObject_1, position_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Monster = /** @class */ (function (_super) {
        __extends(Monster, _super);
        function Monster() {
            var _this = _super.call(this) || this;
            _this.blood = 1;
            _this.r = 15;
            _this.shape = 0 /* circle */;
            _this.friction = 0.85;
            return _this;
        }
        Monster.prototype.reset = function (pos, color) {
            this.pos = pos;
            this.v = new position_1.Position(0, 0);
            this.color = color;
        };
        Monster.prototype.update = function (player) {
            /**遊戲更新
             * player 玩家物件，以GameObject型別參考
             * 可以取得玩家的 physical資訊
             */
        };
        Monster.prototype.move = function (angle, distance) {
            this.v.x += Math.cos(angle) * distance;
            this.v.y += Math.sin(angle) * distance;
        };
        Monster.prototype.near = function (pos, speed) {
            var x = pos.x - this.pos.x;
            var y = pos.y - this.pos.y;
            var distance = Math.pow((Math.pow(x, 2) + Math.pow(y, 2)), 0.5);
            this.v.x += x / distance * speed;
            this.v.y += y / distance * speed;
        };
        Monster.prototype.injury = function (power) {
            this.blood -= power;
            return (this.blood <= 0);
        };
        return Monster;
    }(gameObject_1.GameObject));
    exports.Monster = Monster;
});
