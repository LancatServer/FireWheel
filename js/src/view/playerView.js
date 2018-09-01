define(["require", "exports", "../model/position"], function (require, exports, position_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayerView = /** @class */ (function () {
        function PlayerView(player, gun) {
            this.player = player;
            this.gun = gun;
        }
        PlayerView.prototype.paint = function (canvas, ctx) {
            ctx.beginPath();
            ctx.arc(this.player.pos.x, this.player.pos.y, this.player.r, 0, Math.PI * 2);
            var gunPos = new position_1.Position(this.player.pos.x + Math.cos(this.gun.angle) * this.gun.R, this.player.pos.y + Math.sin(this.gun.angle) * this.gun.R);
            ctx.arc(gunPos.x, gunPos.y, this.gun.r, 0, Math.PI * 2);
            ctx.fillStyle = this.player.color.get();
            ctx.fill();
            ctx.closePath();
        };
        return PlayerView;
    }());
    exports.PlayerView = PlayerView;
});
