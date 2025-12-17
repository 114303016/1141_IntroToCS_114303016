function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Result = Invalid input";
        return;
    }

    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else if (operator === "/") {
        result = divide(num1, num2);
    }

    if (typeof result === "string") {
        document.getElementById("result").innerText = "Result = " + result;
    } else {
        document.getElementById("result").innerText =
            "Result = " + result.toFixed(2);
    }
}





