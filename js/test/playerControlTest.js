define(["require", "exports", "../src/control/playerController", "../src/model/obj"], function (require, exports, playerController_1, obj_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var setting = {
        color: new obj_1.Color([200, 150, 80]),
        key: {
            up: 'w',
            down: 's',
            right: 'd',
            left: 'a',
            space: ' ',
            enter: 'Enter'
        }
    };
    var controller = new playerController_1.PlayerController(setting);
    var fps = 40;
    var canvas = document.getElementById('my_canvas');
    var ctx = canvas.getContext('2d');
    function main() {
        controller.update(fps);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        controller.paint(canvas, ctx);
    }
    setInterval(main, 1000 / fps);
});
