// E2.6

// Задание 7

let myArray = ["hello", 1, true, 2, "", 3, "5", 0, null, "@", 4];
let sumEven = 0, sumZero = 0, sumOdd = 0;

for (let i = 1; i < myArray.length; i++) {
    if (typeof myArray[i] == "number") {
        if (myArray[i] % 2 === 0) {
            sumEven++;
            if (myArray[i] == 0) {
                sumZero++;
            } else {
                sumOdd++;
            }
        }
    }
}
console.log(`Задание 7\nМассив задан в коде скрипта.\nЧётных элементов: ${sumEven}\nИз них нулевых: ${sumZero}\nНечётных элементов: ${sumOdd}`);
