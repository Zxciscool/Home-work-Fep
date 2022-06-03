const historyOperation = [];
do {
    let secondNumber;
    let firstNumber;
    let alonenumber;
    let result;
    const operation = prompt("Выберите просчет :  +, -, /, *, %, cos, sin, pow, 0 - история");
    if (operation == "cos" || operation == "sin") {
        do {
            alonenumber = +prompt("Введите  число ")
        } while (alonenumber !== alonenumber);

    } else if (operation == "+" || operation == "-" || operation == "/" || operation == "*" ||
        operation == "%" || operation == "pow" || operation == "reversePow") {
        do {
            firstNumber = +prompt("Введите первое число ")
        } while (firstNumber !== firstNumber);

        do {
            secondNumber = +prompt("Введите второе  число ")
        } while (secondNumber !== secondNumber);
    }

    switch (operation) {
        case "cos":
            result = `cos(${alonenumber}) это ${Math.cos(alonenumber)}`;
            break;

        case "sin":
            result = `sin(${alonenumber}) это ${Math.sin(alonenumber)}`;
            break;

        case "+":
            result = `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
            break;

        case "-":
            result = `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`;
            break;

        case "/":
            result = `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
            break;

        case "*":
            result = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
            break;

        case "pow":
            result = `${firstNumber} в степени ${secondNumber} = ${firstNumber ** secondNumber}`;
            break;
    }

    if (operation == 0) {
        console.log(`Ваши операции :  ${historyOperation} `);
        alert(`Ваши операции : ${historyOperation} `);
    } else {
        historyOperation[historyOperation.length] = result;
        alert(`Результат операции : ${result}`);
    }

} //конец do

while (confirm("Повторим?"))