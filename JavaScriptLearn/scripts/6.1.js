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
        }
    }
}