define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 定時器
     * 避免受環境影響
     */
    function timer(callback, time) {
        setInterval(callback, time);
    }
    exports.timer = timer;
});
