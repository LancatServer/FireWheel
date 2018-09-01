define(["require", "exports", "../model/player", "../model/key", "../model/playerGun", "../view/playerView"], function (require, exports, player_1, key_1, playerGun_1, playerView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var keyMap = /** @class */ (function () {
        function keyMap() {
        }
        return keyMap;
    }());
    var PlayerController = /** @class */ (function () {
        function PlayerController(setting) {
            var _this = this;
            this.key = new key_1.Key();
            this.player = new player_1.Player(setting.color);
            this.gun = new playerGun_1.PlayerGun(setting.color);
            this.key_map = setting.key;
            this.playerView = new playerView_1.PlayerView(this.player, this.gun);
            document.addEventListener("keydown", function (event) { return _this.keySet(event, true); });
            document.addEventListener("keyup", function (event) { return _this.keySet(event, false); });
            setInterval(function () { return console.log(_this.player.v); }, 1000);
        }
        PlayerController.prototype.update = function (fps) {
            this.player.update(this.key);
            this.gun.update(fps);
            this.player.updateV(fps);
            this.player.updatePos(fps);
            this.player.frictionCompute(fps);
        };
        PlayerController.prototype.paint = function (canvas, ctx) {
            this.playerView.paint(canvas, ctx);
        };
        PlayerController.prototype.keySet = function (key, type) {
            switch (key.key) {
                case this.key_map.up:
                    this.key.up = type;
                    break;
                case this.key_map.down:
                    this.key.down = type;
                    break;
                case this.key_map.right:
                    this.key.right = type;
                    break;
                case this.key_map.left:
                    this.key.left = type;
                    break;
                case this.key_map.space:
                    this.key.space = type;
                    if (type) {
                        this.gun.keyDown();
                    }
                    else {
                        this.gun.keyUp();
                    }
                    break;
                case this.key_map.enter:
                    this.key.enter = type;
            }
        };
        return PlayerController;
    }());
    exports.PlayerController = PlayerController;
});
