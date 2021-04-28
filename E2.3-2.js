// E2.3

// Задание 2

console.log("Задание 2\nПеременная X задаётся в коде скрипта.");
let userInput; // = 1 // = "это строка!" // = true

switch (typeof userInput) {
    case ("number"):
        console.log("X - число.");
        break;

    case ("string"):
        console.log("X - строка.");
        break;

    case ("boolean"):
        console.log("X - булево значение.");
        break;

    default:
        console.log("Тип X не определён.");
}
