define(["require", "exports", "./position", "./physical"], function (require, exports, position_1, physical_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var physical = new physical_1.PhysicalController();
    var GameObject = /** @class */ (function () {
        function GameObject() {
            this.v = new position_1.Position();
            this.m = 1;
            this.restitu = 1;
            this.r = 0;
            this.f = 0;
            this.angle = 0;
        }
        GameObject.prototype.circleRebound = function (obj) {
            this.v = physical.circleRebound(this, obj, this.restitu);
        };
        GameObject.prototype.rectRebound = function (obj) {
            this.v = physical.rectRebound(this, obj, this.restitu);
        };
        GameObject.prototype.updateV = function (fps) {
            this.v = physical.updateV(this, fps);
        };
        GameObject.prototype.updatePos = function (fps) {
            this.pos = this.pos.add(this.v.multiply(1 / fps));
        };
        GameObject.prototype.frictionCompute = function (fps) {
            this.v = physical.frictionCompute(this, fps);
        };
        return GameObject;
    }());
    exports.GameObject = GameObject;
});
