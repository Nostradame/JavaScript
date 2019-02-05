mathfun = (function () {
    debugger;
    
    return {
        sum: function() {
            var result = 0;
            var sumf = function(operand) {
                result += operand;
                return sumf;
            };
            var resultf = function() {
                return result;
            }
            var resetf = function() {
                result = 0;
            }

            return {
                sum: sumf,
                result: resultf,
                reset: resetf
            };
        },
        buffer: function() {
            var buffer = "";
            var bufferf = function (str) {
                if (arguments.length === 0) {
                    return buffer;
                }

                buffer += str.toString();
            };

            bufferf.clear = function() {
                buffer = "";
            }
            return bufferf;
        }
    }
})();