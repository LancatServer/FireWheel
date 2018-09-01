define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Painter = /** @class */ (function () {
        function Painter(bg) {
            this.canvas = document.getElementById('my_canvas');
            this.ctx = this.canvas.getContext('2d');
            this.background = bg;
        }
        Painter.prototype.circle = function (c, color, stroke, beginAngle, endAngle, anticlockwise) {
            if (stroke === void 0) { stroke = false; }
            if (beginAngle === void 0) { beginAngle = 0; }
            if (endAngle === void 0) { endAngle = Math.PI * 2; }
            if (anticlockwise === void 0) { anticlockwise = false; }
            this.ctx.beginPath();
            this.ctx.arc(c.pos.x, c.pos.y, c.r, beginAngle, endAngle, anticlockwise);
            this.ctx.fillStyle = color.get();
            if (stroke) {
                this.ctx.stroke();
            }
            else {
                this.ctx.fill();
            }
            this.ctx.closePath();
        };
        return Painter;
    }());
    exports.Painter = Painter;
});
