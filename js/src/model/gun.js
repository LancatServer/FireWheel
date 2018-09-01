define(["require", "exports", "./timer"], function (require, exports, timer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gun = /** @class */ (function () {
        function Gun(color) {
            this.color = color;
            this.angle = 0;
            this.shoting = false;
            this.direction = 1;
            this.cycle = 2000;
        }
        Gun.prototype.update = function (fps) {
            //是否按下發射鍵
            this.angle += this.speed * this.direction / fps;
        };
        Gun.prototype.keyDown = function () {
            this.shoting = true;
            this.direction *= -1;
            timer_1.timer(this.changeDirection, this.cycle);
        };
        Gun.prototype.keyUp = function () {
            this.shoting = false;
            this.shot();
        };
        Gun.prototype.changeDirection = function () {
            if (this.shoting) {
                this.direction *= -1;
                timer_1.timer(this.changeDirection, this.cycle);
            }
        };
        Gun.prototype.shot = function () {
        };
        return Gun;
    }());
    exports.Gun = Gun;
});
