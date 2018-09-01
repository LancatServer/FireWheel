define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Key = /** @class */ (function () {
        function Key() {
            this.up = false;
            this.down = false;
            this.right = false;
            this.left = false;
            this.space = false;
            this.enter = false;
        }
        return Key;
    }());
    exports.Key = Key;
});
