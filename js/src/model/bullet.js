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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet(angle, pos, power) {
            var _this = _super.call(this) || this;
            _this.angle = angle;
            _this.pos = pos;
            _this.v = new position_1.Position(pos.x + Math.cos(angle) * _this.speed * power, pos.y + Math.sin(angle) * _this.speed * power);
            return _this;
        }
        return Bullet;
    }(gameObject_1.GameObject));
    exports.Bullet = Bullet;
});
