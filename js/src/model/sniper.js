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
define(["require", "exports", "./monster"], function (require, exports, monster_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sniper = /** @class */ (function (_super) {
        __extends(Sniper, _super);
        function Sniper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.max_d = 800;
            _this.min_d = 400;
            _this.speed = 10;
            return _this;
        }
        Sniper.prototype.update = function (player) {
            var distance = Math.pow((this.pos.x - player.pos.x), 2) + Math.pow((this.pos.y - player.pos.y), 2);
            if (distance > Math.pow(this.max_d, 2)) {
                this.near(player.pos, this.speed);
            }
            else if (distance < Math.pow(this.min_d, 2)) {
                this.near(player.pos, -this.speed);
            }
        };
        return Sniper;
    }(monster_1.Monster));
    exports.Sniper = Sniper;
});
