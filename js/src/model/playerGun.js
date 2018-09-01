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
define(["require", "exports", "./gun"], function (require, exports, gun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayerGun = /** @class */ (function (_super) {
        __extends(PlayerGun, _super);
        function PlayerGun() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.speed = 1;
            _this.R = 30;
            _this.r = 5;
            return _this;
        }
        return PlayerGun;
    }(gun_1.Gun));
    exports.PlayerGun = PlayerGun;
});
