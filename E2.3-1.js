// E2.3

// Задание 1

let userInput = prompt("Задание 1\nВведите в поле некоторое значение:");

if (isNaN(+userInput) || userInput == false && userInput !== '0') {
    console.log("Упс, кажется, вы ошиблись.");
} else if (userInput % 2 === 0) {
    console.log("Введено чётное число.");
} else {
    console.log("Введено нечётное число.");
}
