let num, n1, n2, result;
let operate; // "operate" will be an arithmetic function.
let negative = true;
let addDigit = true;

function compute(digit) {
    switch (digit) {
        case 'sin':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }
            
            num = Math.sin(document.getElementById("output").innerHTML);
            document.getElementById("output").innerHTML = Number(num.toFixed(11)).toPrecision();

            // The AC/CE switches from 'CE' to 'AC' following this function button press.
            if (document.getElementById("AC/CE").innerHTML === "CE") {
                document.getElementById("AC/CE").innerHTML = "AC";
            }

            num = "";
            break;
        case 'cos':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Math.cos(document.getElementById("output").innerHTML);
            document.getElementById("output").innerHTML = Number(num.toFixed(11)).toPrecision();

            // The AC/CE switches from 'CE' to 'AC' following this function button press.
            if (document.getElementById("AC/CE").innerHTML === "CE") {
                document.getElementById("AC/CE").innerHTML = "AC";
            }

            num = "";
            break;
        case 'tan':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Math.tan(document.getElementById("output").innerHTML);
            document.getElementById("output").innerHTML = Number(num.toFixed(11)).toPrecision();

            // The AC/CE switches from 'CE' to 'AC' following this function button press.
            if (document.getElementById("AC/CE").innerHTML === "CE") {
                document.getElementById("AC/CE").innerHTML = "AC";
            }

            num = "";
            break;
        case 'π':
            num = "";
            num += Number(Math.PI.toFixed(11)).toPrecision();
            document.getElementById("output").innerHTML = num;
            negative = true;

            addDigit = false;

            // The AC/CE button switches from 'AC' to 'CE' when you start a new real number.
            if (document.getElementById("AC/CE").innerHTML === "AC") {
                document.getElementById("AC/CE").innerHTML = "CE";
            }

            break;
        case '√':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Math.sqrt(document.getElementById("output").innerHTML);
            document.getElementById("output").innerHTML = Number(num.toFixed(11)).toPrecision();

            // The AC/CE switches from 'CE' to 'AC' following this function button press.
            if (document.getElementById("AC/CE").innerHTML === "CE") {
                document.getElementById("AC/CE").innerHTML = "AC";
            }

            num = "";
            break;
        case 'pow':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Number(document.getElementById("output").innerHTML);

            if (operate != undefined) {
                n1 = operate(n1, num);
                document.getElementById("output").innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }

            operate = function(num1, num2) {
                return Math.pow(num1, num2);
            }

            num = "";
            break;
        case '+/-':
            if (num != "") {
                if (negative) {
                    if (!(document.getElementById("output").innerHTML.includes('-'))) {
                        num = '-'.concat(document.getElementById("output").innerHTML); // Rendering the number negative.
                        document.getElementById("output").innerHTML = num;
                        negative = false;
                    }
                    else {
                        num = document.getElementById("output").innerHTML.substring(1); // Rendering back the number positive.
                        document.getElementById("output").innerHTML = num;
                    }
                }
                else {
                    num = document.getElementById("output").innerHTML.substring(1); // Rendering back the number positive.
                    document.getElementById("output").innerHTML = num;
                    negative = true;
                }
            }
            else {
                num = "-0";
                document.getElementById("output").innerHTML = num;
            }

            // The AC/CE button switches from 'AC' to 'CE' when you start a new arithmetic expression.
            if (document.getElementById("AC/CE").innerHTML === "AC") {
                document.getElementById("AC/CE").innerHTML = "CE";
            }
            break;
        case 'AC/CE':
            if (document.getElementById("AC/CE").innerHTML === "AC") {
                document.getElementById("AC/CE").innerHTML = "CE";
                document.getElementById("output").innerHTML = "0";
            }
            else {
                if (document.getElementById("output").innerHTML !== Number(Math.PI.toFixed(11)).toPrecision() && document.getElementById("output").innerHTML !== Number(-Math.PI.toFixed(11)).toPrecision()) {
                    if ((document.getElementById("output").innerHTML.length === 9 && !(document.getElementById("output").innerHTML.includes('-'))) || (document.getElementById("output").innerHTML.length === 10 && document.getElementById("output").innerHTML.includes('-'))) {
                        addDigit = true;
                    }
                    num = document.getElementById("output").innerHTML.slice(0, -1); // Removing the last character of the string
                    document.getElementById("output").innerHTML = num;
                }
                if (document.getElementById("output").innerHTML === "") {
                    document.getElementById("output").innerHTML = "0";
                }
                if (document.getElementById("output").innerHTML === "-") {
                    document.getElementById("output").innerHTML = "-0";
                }
            }
            break;
        case '+':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Number(document.getElementById("output").innerHTML);

            if (operate !== undefined) {
                n1 = operate(n1, num);
                document.getElementById("output").innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }
            
            operate = function(num1, num2) {
                return num1 + num2;
            }

            num = "";
            break;
        case '-':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Number(document.getElementById("output").innerHTML);

            if (operate !== undefined) {
                n1 = operate(n1, num);
                document.getElementById("output").innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }

            operate = function(num1, num2) {
                return num1 - num2;
            } 

            num = "";
            break;
        case '×':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Number(document.getElementById("output").innerHTML);

            if (operate !== undefined) {
                n1 = operate(n1, num);
                document.getElementById("output").innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }

            operate = function(num1, num2) {
                return num1 * num2;
            }

            num = "";
            break;
        case '÷':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            num = Number(document.getElementById("output").innerHTML);

            if (operate !== undefined) {
                n1 = operate(n1, num);
                document.getElementById("output").innerHTML = Number(n1.toFixed(11)).toPrecision();
            }
            else {
                n1 = num;
            }

            operate = function(num1, num2) {
                return num1 / num2;
            }

            num = "";
            break;
        case '=':
            if (document.getElementById("output").innerHTML.length >= 9) {
                addDigit = true;
            }

            if (n1 !== undefined && n2 === undefined && operate !== undefined) {
                num = Number(document.getElementById("output").innerHTML); 
                n2 = num;
                result = operate(n1, n2);
                document.getElementById("output").innerHTML = Number(result.toFixed(11)).toPrecision();
                n1 = undefined;
                n2 = undefined;
                result = undefined;
                operate = undefined;
            }
            if (n1 === undefined && n2 === undefined && operate === undefined) {
                n1 = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = Number(Number(n1).toFixed(11)).toPrecision();
                n1 = undefined;
            }

            // The AC/CE switches from 'CE' to 'AC' following the '=' button press.
            if (document.getElementById("AC/CE").innerHTML === "CE") {
                document.getElementById("AC/CE").innerHTML = "AC";
            } 

            num = "";
            break;
        case '.': // The digit is equal to '.' only if we go to this case.
            negative = true;    

            if (num != "") {
                if (!(document.getElementById("output").innerHTML.includes('.'))) {
                    if (document.getElementById("output").innerHTML === "0") {
                        num = `0${digit}`; 
                        document.getElementById("output").innerHTML = num; 
                    }
                    else if (document.getElementById("output").innerHTML === "-0") {
                        num = `-0${digit}`;
                        document.getElementById("output").innerHTML = num; 
                    }
                    else if (document.getElementById("output").innerHTML === "-") {
                        num = `-0${digit}`;
                        document.getElementById("output").innerHTML = num;
                    }
                    else {
                        num += digit;
                        document.getElementById("output").innerHTML = num;
                        if (document.getElementById("output").innerHTML == ".") {
                            num = `0${digit}`;
                            document.getElementById("output").innerHTML = num;
                        }
                    }
                }
            }
            else {
                num = "0.";
                document.getElementById('output').innerHTML = num;
            }

            // The AC/CE button switches from 'AC' to 'CE' when you start a new arithmetic expression.
            if (document.getElementById("AC/CE").innerHTML === "AC") {
                document.getElementById("AC/CE").innerHTML = "CE";
            }
            break;
        default: // The default case is only for number digits.
            negative = true;

            /* When I start with the "0" digit, I cannot add more zeros as there must be only one at the beginning. */
            if (document.getElementById("output").innerHTML === "0" && digit === '0') {
                document.getElementById("output").innerHTML = "0";
            }
            else if (document.getElementById("output").innerHTML === "0" && digit !== '0') {
                num = "";
                num += digit;
                document.getElementById("output").innerHTML = num;
            }
            else if (document.getElementById("output").innerHTML === "-0" && digit === '0') {
                document.getElementById("output").innerHTML = "-0";
            }
            else if (document.getElementById("output").innerHTML === "-0" && digit !== '0') {
                num = "-";
                num += digit;
                document.getElementById("output").innerHTML = num;
            }
            else {
                if (addDigit) {
                    num += digit;
                    document.getElementById("output").innerHTML = num;
                    if ((document.getElementById("output").innerHTML.length === 9 && !(document.getElementById("output").innerHTML.includes('-'))) || (document.getElementById("output").innerHTML.length === 10 && document.getElementById("output").innerHTML.includes('-'))) {
                        addDigit = false;
                    }
                }
            }

            // The AC/CE button switches from 'AC' to 'CE' when you start a new arithmetic expression.
            if (document.getElementById("AC/CE").innerHTML === "AC") {
                document.getElementById("AC/CE").innerHTML = "CE";
            }
    }
}