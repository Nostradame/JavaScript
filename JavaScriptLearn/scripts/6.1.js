mathfun = {
    calculator: { 
        operand1: 0,
        operand2: 0,
        read: function() {
            var input = prompt("Укажите через запятую два аргумента", "0, 0");
            debugger;
            var operands = input.split(",");
            this.operand1 = Number.parseInt(operands[0].trim()) || 0;
            this.operand2 = Number.parseInt(operands[1].trim()) || 0;
        },
        sum: function() {
            return this.operand1 + this.operand2;
        },
        mul: function() {
            return this.operand1 * this.operand2;
        }
    },

    ladder: {
        step: 0,
        up: function () {
            this.step++;
            return this;
        },
        down: function () {
            this.step--;
            return this;
        },
        showStep: function () {
            return this.step;
        }
    }
}