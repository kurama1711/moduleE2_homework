// E2.6

// Задание 6

let myArray = ["hello", "hello", "hello", "hello", "hello"];

function allSame(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] != arr[i]) {
            return false;
        }
    }
    return true;
}
console.log("Задание 6\nМассив задан в коде скрипта.\nВсе элементы в массиве одинаковые: " + allSame(myArray));
