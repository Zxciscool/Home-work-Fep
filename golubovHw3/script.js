let secondNumber;
let firstNumber;
let alonenumber
const operation = prompt("Выберите просчет :  +, -, /, *, %, cos, sin, pow,");
if (operation == "cos" || operation == "sin") {
    alonenumber = +prompt("Введите  число ")
} else if (operation == "+" || operation == "-" || operation == "/" || operation == "*" ||
    operation == "%" || operation == "pow" || operation == "reversePow") {
    firstNumber = +prompt("Введите первое число ")
    secondNumber = +prompt("Введите второе  число ")
}

if (operation == "cos")
    console.log(`Операция выполненна !
Косинус ${alonenumber} = ` + Math.cos(alonenumber));

if (operation == "sin")
    console.log(`Операция выполненна !
Синус ${alonenumber} = ` + Math.sin(alonenumber));


if (operation == "+")
    console.log(`Операция выполненна !
Сумма: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);

if (operation == "-")
    console.log(`Операция выполненна !
Разница: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);

if (operation == "/")
    console.log(`Операция выполненна !
Деление: ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);

if (operation == "*")
    console.log(`Операция выполненна !
Умножение: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);

if (operation == "%")
    console.log(`Операция выполненна !
Процент на остаток: ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);

if (operation == "pow")
    console.log(`Операция выполненна !
Возведение в степень:
 ${firstNumber} в степени ${secondNumber} = ${firstNumber ** secondNumber}`);