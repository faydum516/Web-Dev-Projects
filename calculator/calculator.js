let output = document.getElementById("output");
let clear = document.getElementById("AC/CE");
let num, n1, n2, result;
let operate; // "operate" will be an arithmetic function.
let negative = true;
let addDigit = true;

function compute(digit) {
    switch (digit) {
        case 'sin':
            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Math.sin(output.innerHTML);
            output.innerHTML = Number(num.toFixed(11)).toPrecision();
            negative = true;

            // The AC/CE switches from 'CE' to 'AC' following this function button press.
            if (clear.innerHTML == "CE") {
                clear.innerHTML = "AC";
            }

            num = "";
            break;
        case 'cos':
            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Math.cos(output.innerHTML);
            output.innerHTML = Number(num.toFixed(11)).toPrecision();
            negative = true;

            // The AC/CE switches from 'CE' to 'AC' following this function button press.
            if (clear.innerHTML == "CE") {
                clear.innerHTML = "AC";
            }
            
            num = "";
            break;
        case 'tan':
            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Math.tan(output.innerHTML);
            output.innerHTML = Number(num.toFixed(11)).toPrecision();
            negative = true;

            // The AC/CE switches from 'CE' to 'AC' following this function button press.
            if (clear.innerHTML == "CE") {
                clear.innerHTML = "AC";
            }

            num = "";
            break;
        case 'π':
            num = "";
            num += Number(Math.PI.toFixed(11)).toPrecision();
            output.innerHTML = num;
            negative = true;

            addDigit = false;

            // The AC/CE button switches from 'AC' to 'CE' when you start a new real number.
            if (clear.innerHTML == "AC") {
                clear.innerHTML = "CE";
            }

            break;
        case '√':
            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Math.sqrt(output.innerHTML);
            output.innerHTML = Number(num.toFixed(11)).toPrecision();
            negative = true;

            // The AC/CE switches from 'CE' to 'AC' following this function button press.
            if (clear.innerHTML == "CE") {
                clear.innerHTML = "AC";
            }

            num = "";
            break;
        case 'pow':
            num = Number(output.innerHTML);

            if (operate != undefined) {
                n1 = operate(n1, num);
                output.innerHTML = n1;
            }
            else {
                n1 = num;
            }

            operate = function(num1, num2) {
                return Math.pow(num1, num2);
            }

            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }
            
            num = "";
            break;
        case '+/-':
            if (num != "") {
                if (negative) {
                    if (!(output.innerHTML.includes('-'))) {
                        num = '-'.concat(output.innerHTML); // Rendering the number negative.
                        output.innerHTML = num;
                        negative = false;
                    }
                    else {
                        num = output.innerHTML.substring(1); // Rendering back the number positive.
                        output.innerHTML = num;
                    }
                }
                else {
                    num = output.innerHTML.substring(1); // Rendering back the number positive.
                    output.innerHTML = num;
                    negative = true;
                }
            }
            else {
                num = "-0";
                output.innerHTML = num;
            }

            // The AC/CE button switches from 'AC' to 'CE' when you start a new arithmetic expression.
            if (clear.innerHTML == "AC") {
                clear.innerHTML = "CE";
            }
            break;
        case 'AC/CE':
            if (clear.innerHTML === "AC") {
                clear.innerHTML = "CE";
                output.innerHTML = "0";
            }
            else {
                if (output.innerHTML != Number(Math.PI.toFixed(11)).toPrecision()) {
                    if ((output.innerHTML.length === 9 && !(output.innerHTML.includes('-'))) || (output.innerHTML.length === 10 && output.innerHTML.includes('-'))) {
                        addDigit = true;
                    }
                    num = output.innerHTML.slice(0, -1); // Removing the last character of the string
                    output.innerHTML = num;
                }
                if (output.innerHTML == "") {
                    output.innerHTML = "0";
                }
            }
            break;
        case '+':
            num = Number(output.innerHTML);
            negative = true;

            if (operate != undefined) {
                n1 = operate(n1, num);
                output.innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }

            operate = function(num1, num2) {
                return num1 + num2;
            }

            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            num = "";
            break;
        case '-':
            num = Number(output.innerHTML);
            negative = true;

            if (operate != undefined) {
                n1 = operate(n1, num);
                output.innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }

            operate = function(num1, num2) {
                return num1 - num2;
            }

            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            num = "";
            break;
        case '×':
            num = Number(output.innerHTML);
            negative = true;

            if (operate != undefined) {
                n1 = operate(n1, num);
                output.innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }
           
            operate = function(num1, num2) {
                return num1 * num2;
            }

            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            num = "";
            break;
        case '÷':
            num = Number(output.innerHTML);
            negative = true;

            if (operate != undefined) {
                n1 = operate(n1, num);
                output.innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }

            operate = function(num1, num2) {
                return num1 / num2;
            }

            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            num = "";
            break;
        case '=':
            if (output.innerHTML.length >= 9) {
                addDigit = true;
            }

            if (n1 != undefined && n2 == undefined && operate != undefined) {
                num = Number(output.innerHTML); 
                n2 = num;
                result = operate(n1, n2);
                output.innerHTML = Number(result.toFixed(11)).toPrecision();
                n1 = undefined;
                n2 = undefined;
                result = undefined;
                operate = undefined;
            }
            if (n1 == undefined && n2 == undefined && operate == undefined) {
                n1 = output.innerHTML;
                output.innerHTML = Number(Number(n1).toFixed(11)).toPrecision();
                n1 = undefined;
            }

            // The AC/CE switches from 'CE' to 'AC' following the '=' button press.
            if (clear.innerHTML == "CE") {
                clear.innerHTML = "AC";
            }
            
            num = "";
            break;
        case '.': // The digit is equal to '.' only if we go to this case.
            if (num != "") {
                if (!(output.innerHTML.includes('.'))) {
                    if (output.innerHTML == "0") {
                        num = `0${digit}`; 
                        output.innerHTML = num; 
                    }
                    else if (output.innerHTML == "-0") {
                        num = `-0${digit}`;
                        output.innerHTML = num; 
                    }
                    else if (output.innerHTML == "-") {
                        num = `-0${digit}`;
                        output.innerHTML = num;
                    }
                    else {
                        num += digit;
                        output.innerHTML = num;
                        if (output.innerHTML == ".") {
                            num = `0${digit}`;
                            output.innerHTML = num;
                        }
                    }
                }
            }
            else {
                num = "0.";
                output.innerHTML = num;
            }

            // The AC/CE button switches from 'AC' to 'CE' when you start a new arithmetic expression.
            if (clear.innerHTML == "AC") {
                clear.innerHTML = "CE";
            }
            break;
        default: // The default case is only for number digits.
            negative = true;

            /* When I start with the "0" digit, I cannot add more zeros as there must be only one at the beginning. */
            if (output.innerHTML == "0" && digit == '0') {
                output.innerHTML = "0";
            }
            else if (output.innerHTML == "0" && digit != '0') {
                num = "";
                num += digit;
                output.innerHTML = num;
            }
            else if (output.innerHTML == "-0" && digit == '0') {
                output.innerHTML = "-0";
            }
            else if (output.innerHTML == "-0" && digit != '0') {
                num = "-";
                num += digit;
                output.innerHTML = num;
            }
            else {
                if (addDigit) {
                    num += digit;
                    output.innerHTML = num;
                    if ((output.innerHTML.length === 9 && !(output.innerHTML.includes('-'))) || (output.innerHTML.length === 10 && output.innerHTML.includes('-'))) {
                        addDigit = false;
                    }
                }
            }

            // The AC/CE button switches from 'AC' to 'CE' when you start a new arithmetic expression.
            if (clear.innerHTML == "AC") {
                clear.innerHTML = "CE";
            }
    }
}