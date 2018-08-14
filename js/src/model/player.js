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
define(["require", "exports", "./gameObject", "./position", "./physical"], function (require, exports, gameObject_1, position_1, physical_1) {
    "use strict";
    exports.__esModule = true;
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this) || this;
            _this.pos = new position_1.Position(0, 0);
            _this.v = new position_1.Position(0, 0);
            _this.m = 10;
            _this.shape = 0 /* circle */;
            _this.friction = 0.9;
            _this.r = 15;
            //遊戲屬性
            _this.blood = 5;
            _this.hp = 5;
            _this.def = 0;
            _this.cd = 500;
            _this.speed = 2;
            return _this;
        }
        Player.prototype.hurt = function (power) {
            /* 受傷處理 */
        };
        Player.prototype.update = function (key) {
            /**狀態更新
             * key: 各個按鍵之狀態
            */
            this.v.multiply(this.friction); //將速度乘上摩擦力
            if (key.up)
                this.v.y += this.speed;
            if (key.down)
                this.v.y -= this.speed;
            if (key.right)
                this.v.x += this.speed;
            if (key.left)
                this.v.x -= this.speed;
            this.pos.add(this.v);
        };
        Player.prototype.circleRebound = function (obj) {
            /**碰到圓形處理
             * obj: GameObject物件
             * 圓形反彈程式
            */
            this.v = physical_1.circleRebound(this, obj, 1.5);
        };
        Player.prototype.rectRebound = function (obj) {
            /**碰到牆壁處理
             * 牆壁反彈/抵銷程式
             */
            this.v = physical_1.rectRebound(this, obj, 1);
        };
        return Player;
    }(gameObject_1.GameObject));
    exports.Player = Player;
});
