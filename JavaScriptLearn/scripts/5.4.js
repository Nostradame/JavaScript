mathfun = (function () {
    debugger;

    return {
        sum: function () {
            var result = 0;
            var sumf = function (operand) {
                result += operand;
                return sumf;
            };
            var resultf = function () {
                return result;
            }
            var resetf = function () {
                result = 0;
            }

            return {
                sum: sumf,
                result: resultf,
                reset: resetf
            };
        },
        buffer: function () {
            var buffer = "";
            var bufferf = function (str) {
                if (arguments.length === 0) {
                    return buffer;
                }

                buffer += str.toString();
            };

            bufferf.clear = function () {
                buffer = "";
            }
            return bufferf;
        },
        byField: function (field) {
            return function (objA, objB) {
                return objA[field] > objB[field] ? 1 : -1;
            };
        },
        getFilter: function () {
            var inBetween = function (a, b) {
                return function (element) {
                    return element >= a && element <= b;
                };
            }
            var inArray = function (arr) {
                return function (element) {
                    return arr.some(function () {
                        return arguments[0] === element;
                    });
                };
            }
            return {
                filter: function (arr, func) {
                    return arr.filter(func);
                },
                defaultFilters: { inBetween, inArray }
            }
        },
        makeArmy: function () {
            var shooters = [];

            function shooter(idx) {
                return function() {
                    return idx;
                }
            }

            for (var i = 0; i < 10; i++) {
                shooters.push(shooter(i));
            };

            return shooters;
        }
    }
})();