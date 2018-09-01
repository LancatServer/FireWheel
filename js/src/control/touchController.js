define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**碰撞檢測控制
     * 負責檢測所有 GameObject 型別物件的碰撞
     * 如有物件碰撞，將呼叫物件的 beenTouch 方法，並傳入碰撞到的物件
     * 可使用 add 方法增加監聽器，在指定的物件碰撞時呼叫
     */
    var TouchController = /** @class */ (function () {
        function TouchController() {
        }
        return TouchController;
    }());
    exports.TouchController = TouchController;
});
