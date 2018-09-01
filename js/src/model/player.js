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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(color) {
            var _this = _super.call(this) || this;
            _this.color = color;
            _this.m = 1;
            _this.r = 15;
            _this.friction = 500;
            _this.shape = 0 /* circle */;
            _this.f = 0;
            _this.reset();
            return _this;
        }
        Player.prototype.reset = function () {
            this.pos = new position_1.Position(0, 0);
            this.v = new position_1.Position(0, 0);
            //遊戲屬性
            this.blood = 5;
            this.hp = 5;
            this.def = 0;
            this.cd = 500;
            this.speed = 5000;
        };
        Player.prototype.injury = function (power) {
            /* 受傷處理 */
            this.blood -= power - this.blood;
            return (this.blood <= 0);
        };
        Player.prototype.update = function (key) {
            /**狀態更新
             * key: 各個按鍵之狀態
            */
            var compute = new position_1.Position();
            if (key.up)
                compute.y += 1;
            if (key.down)
                compute.y -= 1;
            if (key.right)
                compute.x += 1;
            if (key.left)
                compute.x -= 1;
            console.log(this.angle / Math.PI);
            if (key.up || key.down || key.right || key.left) {
                this.f = this.speed;
                this.angle = Math.atan2(compute.y, compute.x);
            }else
                this.f = 0;
        };
        return Player;
    }(gameObject_1.GameObject));
    exports.Player = Player;
});
