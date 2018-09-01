define(["require", "exports", "./position"], function (require, exports, position_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function set_range(minimal, maximum, number) {
        if (number < minimal) {
            return minimal;
        }
        else if (number > maximum) {
            return maximum;
        }
        else {
            return number;
        }
    }
    function turnPosition(pos, angle) {
        /**旋轉座標函數
         * pos 待旋轉座標
         * angle 旋轉角度
         */
        return new position_1.Position(pos.x * Math.cos(angle) - pos.y * Math.sin(angle), pos.x * Math.sin(angle) + pos.y * Math.cos(angle));
    }
    var PhysicalController = /** @class */ (function () {
        function PhysicalController() {
        }
        PhysicalController.prototype.circle_to_circle = function (c1, c2) {
            var d = Math.pow((c1.pos.x - c2.pos.x), 2) + Math.pow((c1.pos.y - c2.pos.y), 2);
            return d < (Math.pow((c1.r + c2.r), 2));
        };
        PhysicalController.prototype.circle_to_rect = function (c, r) {
            var x = set_range(r.pos.x, r.pos.x + r.wh.x, c.pos.x);
            var y = set_range(r.pos.y, r.pos.y + r.wh.y, c.pos.y);
            var d = Math.pow((c.pos.x - x), 2) + Math.pow((c.pos.y - y), 2);
            return d < (Math.pow(c.r, 2));
        };
        PhysicalController.prototype.circleRebound = function (c1, c2, k) {
            /**圓形反彈函數
             * k 恢復係數
             */
            var angle = Math.atan((c1.pos.y - c2.pos.y) / (c1.pos.x - c2.pos.x)); //求兩圓圓心連線角度
            var c1_turn = turnPosition(c1.v, angle); //取得兩圓速度旋轉成以圓心連線為0度之向量
            var c2_turn = turnPosition(c2.v, angle);
            c1_turn.x = c2_turn.x * k; //交換值，乘上恢復係數
            return turnPosition(c1_turn, -angle); //轉回原向量
        };
        PhysicalController.prototype.rectRebound = function (c, r, k) {
            /**矩形反彈函數
             * k 恢復係數
             * 取出最近點，將座標系旋轉至圓心連線水平向量
             * 將x * -k反彈
             * 旋轉回原座標系
             */
            var x = set_range(r.pos.x, r.pos.x + r.wh.x, c.pos.x);
            var y = set_range(r.pos.y, r.pos.y + r.wh.y, c.pos.y);
            var angle = Math.atan((c.pos.y - y) / (c.pos.x - x));
            var turn = turnPosition(c.v, angle);
            turn.x *= -k;
            return turnPosition(turn, -angle);
        };
        PhysicalController.prototype.frictionCompute = function (obj, fps) {
            var positive = function (num) { return num / Math.abs(num); };
            var a = (obj.f - obj.friction) / obj.m / fps;
            var r_v = obj.v.add(new position_1.Position(Math.cos(obj.angle) * a, Math.sin(obj.angle) * a));
            if (positive(r_v.x) !== positive(obj.v.x) && obj.f === 0) {
                r_v.x = 0;
            }
            if (positive(r_v.y) !== positive(obj.v.y) && obj.f === 0) {
                r_v.y = 0;
            }
            obj.v = r_v;
            return obj.pos.add(r_v.multiply(1 / fps));
        };
        return PhysicalController;
    }());
    exports.PhysicalController = PhysicalController;
});
