// E2.7

// Задание 8

let myMap = new Map();
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(4, "four");

for (let key of myMap.keys()) {
    console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
}
