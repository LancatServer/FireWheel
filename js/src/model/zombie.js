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
    var Zombie = /** @class */ (function (_super) {
        __extends(Zombie, _super);
        function Zombie() {
            var _this = _super.call(this) || this;
            _this.r = 15;
            _this.speed = 5;
            return _this;
        }
        Zombie.prototype.update = function (player) {
            this.near(player.pos, this.speed);
        };
        return Zombie;
    }(monster_1.Monster));
    exports.Zombie = Zombie;
});
