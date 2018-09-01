define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Color = /** @class */ (function () {
        function Color(c) {
            this.r = c[0];
            this.g = c[1];
            this.b = c[2];
            this.color = c;
        }
        Color.prototype.get = function () {
            var result = '';
            for (var c in this.color) {
                var n = this.color[c].toString(16);
                if (n.length === 1) {
                    n = '0' + n;
                }
                result += n;
            }
            return '##' + result;
        };
        return Color;
    }());
    exports.Color = Color;
});
