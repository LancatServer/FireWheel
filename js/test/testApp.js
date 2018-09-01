"use strict";
exports.__esModule = true;
var key_1 = require("../src/model/key");
var player_1 = require("../src/model/player");
var gameObject_1 = require("../src/model/gameObject");
var position_1 = require("../src/model/position");
var physical_1 = require("../src/model/physical");
var key = new key_1.Key();
var player = new player_1.Player();
var rect = new gameObject_1.GameObject();
var circle = new gameObject_1.GameObject();
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
    if (physical_1.circle_to_circle(player, circle)) {
        player.beenTouch(circle);
    }
    if (physical_1.circle_to_rect(player, rect)) {
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
    player.pos = new position_1.Position(50, 50);
    rect.pos = new position_1.Position(100, 100);
    rect.wh = new position_1.Position(80, 60);
    circle.pos = new position_1.Position(200, 200);
    circle.r = 20;
    circle.v = new position_1.Position(3, 5);
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    debugger;
    setInterval(50, update);
}
debugger;
main();
