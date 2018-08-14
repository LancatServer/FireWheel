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
define("src/model/key", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Key = /** @class */ (function () {
        function Key() {
        }
        return Key;
    }());
    exports.Key = Key;
});
define("src/model/position", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Position = /** @class */ (function () {
        function Position(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Position.prototype.add = function (vector) {
            /**加法
             * 將加上另一個Vector
             */
            this.x += vector.x;
            this.y += vector.y;
        };
        Position.prototype.multiply = function (number) {
            /**乘法
             * 將數值乘上一個number
             */
            this.x *= number;
            this.y *= number;
        };
        return Position;
    }());
    exports.Position = Position;
});
define("src/model/gameObject", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GameObject = /** @class */ (function () {
        function GameObject() {
        }
        GameObject.prototype.beenTouch = function (obj) {
            switch (obj.shape) {
                case 0 /* circle */:
                    this.circleRebound(obj);
                    break;
                case 1 /* rect */:
                    this.rectRebound(obj);
                    break;
            }
        };
        GameObject.prototype.circleRebound = function (obj) {
            /*
              處理對圓形的反彈
              由sub object 定義
            */
        };
        GameObject.prototype.rectRebound = function (obj) {
            /*
              處理對矩形的反彈
            由sub object 定義
            */
        };
        return GameObject;
    }());
    exports.GameObject = GameObject;
});
define("src/model/physical", ["require", "exports", "src/model/position"], function (require, exports, position_1) {
    "use strict";
    exports.__esModule = true;
    function circle_to_circle(c1, c2) {
        var d = (c1.pos.x - c2.pos.x) ^ 2 + (c1.pos.y - c2.pos.y) ^ 2;
        return d < ((c1.r + c2.r) ^ 2);
    }
    exports.circle_to_circle = circle_to_circle;
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
    function circle_to_rect(c, r) {
        var x = set_range(r.pos.x, r.pos.x + r.wh.x, c.pos.x);
        var y = set_range(r.pos.y, r.pos.y + r.wh.y, c.pos.y);
        var d = (c.pos.x - x) ^ 2 + (c.pos.y - y) ^ 2;
        return d < (c.r ^ 2);
    }
    exports.circle_to_rect = circle_to_rect;
    function turnPosition(pos, angle) {
        /**旋轉座標函數
         * pos 待旋轉座標
         * angle 旋轉角度
         */
        return new position_1.Position(pos.x * Math.cos(angle) - pos.y * Math.sin(angle), pos.x * Math.sin(angle) + pos.y * Math.cos(angle));
    }
    function circleRebound(c1, c2, k) {
        /**圓形反彈函數
         * k 恢復係數
         */
        var angle = Math.atan((c1.pos.y - c2.pos.y) / (c1.pos.x - c2.pos.x)); //求兩圓圓心連線角度
        var c1_turn = turnPosition(c1.v, angle); //取得兩圓速度旋轉成以圓心連線為0度之向量
        var c2_turn = turnPosition(c2.v, angle);
        c1_turn.x = c2_turn.x * k; //交換值，乘上恢復係數
        return turnPosition(c1_turn, -angle); //轉回原向量
    }
    exports.circleRebound = circleRebound;
    function rectRebound(c, r, k) {
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
    }
    exports.rectRebound = rectRebound;
});
define("src/model/player", ["require", "exports", "src/model/gameObject", "src/model/position", "src/model/physical"], function (require, exports, gameObject_1, position_2, physical_1) {
    "use strict";
    exports.__esModule = true;
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this) || this;
            _this.pos = new position_2.Position(0, 0);
            _this.v = new position_2.Position(0, 0);
            _this.m = 10;
            _this.shape = 0 /* circle */;
            _this.friction = 0.9;
            _this.r = 15;
            //遊戲屬性
            _this.blood = 5;
            _this.hp = 5;
            _this.def = 0;
            _this.cd = 500;
            _this.speed = 2;
            return _this;
        }
        Player.prototype.hurt = function (power) {
            /* 受傷處理 */
        };
        Player.prototype.update = function (key) {
            /**狀態更新
             * key: 各個按鍵之狀態
            */
            this.v.multiply(this.friction); //將速度乘上摩擦力
            if (key.up)
                this.v.y += this.speed;
            if (key.down)
                this.v.y -= this.speed;
            if (key.right)
                this.v.x += this.speed;
            if (key.left)
                this.v.x -= this.speed;
            this.pos.add(this.v);
        };
        Player.prototype.circleRebound = function (obj) {
            /**碰到圓形處理
             * obj: GameObject物件
             * 圓形反彈程式
            */
            this.v = physical_1.circleRebound(this, obj, 1.5);
        };
        Player.prototype.rectRebound = function (obj) {
            /**碰到牆壁處理
             * 牆壁反彈/抵銷程式
             */
            this.v = physical_1.rectRebound(this, obj, 1);
        };
        return Player;
    }(gameObject_1.GameObject));
    exports.Player = Player;
});
define("test/testApp", ["require", "exports", "src/model/key", "src/model/player", "src/model/gameObject", "src/model/position", "src/model/physical"], function (require, exports, key_1, player_1, gameObject_2, position_3, physical_2) {
    "use strict";
    exports.__esModule = true;
    var key = new key_1.Key();
    var player = new player_1.Player();
    var rect = new gameObject_2.GameObject();
    var circle = new gameObject_2.GameObject();
    var canvas = document.getElementById('my_canvas');
    var ctx = canvas.getContext('2d');
    function update() {
        player.update(key);
        touch();
        paint();
    }
    function paint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(rect.pos.x, rect.pos.y, rect.wh.x, rect.wh.y);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(player.pos.x, player.pos.y, player.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#00FF00';
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(circle.pos.x, circle.pos.y, circle.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#0000FF';
        ctx.fill();
        ctx.closePath();
    }
    function touch() {
        if (physical_2.circle_to_circle(player, circle)) {
            player.beenTouch(circle);
        }
        if (physical_2.circle_to_rect(player, rect)) {
            player.beenTouch(rect);
        }
    }
    function keyDown(e) {
        if (e.defaultPrevented)
            return;
        switch (e.key) {
            case "ArrowUp":
                key.up = true;
                break;
            case "ArrowDown":
                key.down = true;
                break;
            case 'ArrowRight':
                key.right = true;
                break;
            case 'ArrowLeft':
                key.left = true;
                break;
            default:
                console.log(e.key);
                return;
        }
    }
    function keyUp(e) {
        if (e.defaultPrevented)
            return;
        switch (e.key) {
            case "ArrowUp":
                key.up = false;
                break;
            case "ArrowDown":
                key.down = false;
                break;
            case 'ArrowRight':
                key.right = false;
                break;
            case 'ArrowLeft':
                key.left = false;
                break;
            default:
                console.log(e.key);
                return;
        }
    }
    function main() {
        console.log('begin');
        player.pos = new position_3.Position(50, 50);
        rect.pos = new position_3.Position(100, 100);
        rect.wh = new position_3.Position(80, 60);
        circle.pos = new position_3.Position(200, 200);
        circle.r = 20;
        circle.v = new position_3.Position(3, 5);
        document.addEventListener('keydown', keyDown);
        document.addEventListener('keyup', keyUp);
        debugger;
        setInterval(50, update);
    }
    debugger;
    main();
});
