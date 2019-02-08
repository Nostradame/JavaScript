;
mathfun = {
    Calculator: function() {
        var operand1;
        var operand2;

        this.operand1 = function() {
            return operand1;
        };

        this.operand2 = function() {
            return operand2;
        };

        this.read = function() {
            var input = prompt("Укажите через запятую два аргумента", "0, 0");
            var operands = input.split(",");
            operand1 = Number.parseInt(operands[0].trim()) || 0;
            operand2 = Number.parseInt(operands[1].trim()) || 0;
        };

        this.sum = function() {
            return operand1 + operand2;
        };

        this.mul = function() {
            return operand1 * operand2;
        };
    },
    Accumulator: function (startingValue) {
        this.value = startingValue || 0;
        this.read = function() {
            var input = prompt("Укажите начальное значение", "0");
            this.value += Number.parseInt(input.trim());
        }
    },
    CalculatorExt: function () {
        debugger;
        var handlers = [];

        function addHandler(operation, handler) {
            handlers.push(new Handler(operation, handler));
        };

        function getHandler(operation) {
            return handlers.filter(function(handler) {
                return handler.operation === operation;
            })[0].handler;
        }

        addHandler("+", function (op1, op2) {
            return op1 + op2;
        });

        addHandler("-", function(op1, op2) {
            return op1 - op2;
        });

        function Handler(operation, handler) {
            return {
                operation,
                handler
            };
        };
        
        this.calculate = function (expression) {
            debugger;
            var operandsAndOperation = expression.split(" ");
            var operand1 = Number.parseInt(operandsAndOperation[0].trim()) || 0;
            var operand2 = Number.parseInt(operandsAndOperation[2].trim()) || 0;
            var operation = operandsAndOperation[1].trim();
            var handler = getHandler(operation);

            if (handler === undefined) {
                return "Handler for operation(" + operation + ") not fount";
            }

            return handler(operand1, operand2);
        };

        this.addMethod = function(operation, handler) {
            addHandler(operation, handler);
        };
    }
};