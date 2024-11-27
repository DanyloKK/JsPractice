"use strict"

const array = [2, 5, "Anton", 55, true, {name: "Danil", age: 25}];
console.log(array[5]);
console.log(array[5].age);

let newArray = array;
//Сократили массив также повлияв и на старый
newArray.length = 4;
console.log(newArray);

const myArray = [2, 5, 11, 44, "true"];
// Просто создает копию и эти массывы уже никак не взаимодействуют
const myNewArray = myArray.slice()
myArray[0] = 122;
console.log(myNewArray);
myNewArray[1] = 22;
console.log(myNewArray);
console.log(myArray);


//Spread operator с массивом работает также первый уровень копирует а все вложенности дает как ссылку
const arrays = [2, 55, "True", [2, 6, 11, "Viki"], 56];
const newArrays = [...arrays];
newArrays[3][0] = "Dani";
console.log(arrays)


const arrayMy = [2, 55, "Danylo", 11, true, {name: "Viki", age: 25, hobbies: ["Basketball", "Football"]}];
const arrayTwo = [25, 22, "Viki", 11, true, {name: "Danylo", age: 30, hobbies: ["Gym", "IT"]}];

const bigArray = [...arrayMy, ...arrayTwo];
console.log(bigArray);


const copyArray = [...bigArray];
copyArray[1] = 22;
console.log(bigArray, arrayMy)
// Тут во второй вложенности поменялось так как spread а в первой нет
copyArray[5].name = "Busya";
console.log(copyArray, bigArray, arrayMy);


//Ищет на какой позиции
console.log(copyArray.indexOf("Danylo"));
console.log(copyArray.indexOf(11, 1));
// Ищем есть ли такой элемент работает на true/false
console.log(copyArray.includes(11, 1));

// Методы find/findIndex - возвращают значение и под каким индексом , а filter - возвращает новый массив со знач которые удовлетворяют условию

// Ищем элемент подходит или нет

let findinArray = copyArray.find(function (item) {
    if (typeof item === "number") {
        console.log(item);
        return true
    }
})

//Искали строку

findinArray = copyArray.find(function (item) {
    if (typeof item === "string") {
        console.log(item);
        return true
    }
})

//Искали булевое
findinArray = copyArray.find(function (item) {
    if (typeof item === "boolean") {
        console.log(item);
        return true
    }
})

findinArray = copyArray.filter(function (item) {
    if (typeof item === "number") {
        console.log(item);
        return true
    }
})

findinArray = copyArray.filter(function (item) {
    if (typeof item === "string") {
        console.log(item);
        return true
    }
})

findinArray = copyArray.filter(function (item) {
    if (typeof item === "object" && item.hobbies[0] && item.hobbies[1]) {
        console.log(item.hobbies[0], item.hobbies[1]);
    }
})

// Вернули только тот индекс который нам нужен без второго
findinArray = copyArray.filter(function (item, index) {
    if (typeof item === "object" && item !== null && index < 6) {
        console.log(`Index: ${index}, Item:`, item);
    }
})


function add(a, b) {

    return a + b // Возвращает сумму a и b
}

const result = add(2, 3); // result будет равно 5
console.log(result); // Выводит


function createAccumulator(initialValue) {
    let sum = initialValue; // Инициализируем переменную sum

    return function add(value) { // Возвращаем внутреннюю функцию
        sum += value; // Обновляем sum
        return sum; // Возвращаем текущее значение sum
    }
}

// Пример использования
const accumulator = createAccumulator(0); // Начальное значение 0
console.log(accumulator(5)); // 5
console.log(accumulator(10)); // 15
console.log(accumulator(3)); // 18


const products = [
    {name: "Book", price: 15, category: "Education"},
    {name: "Pen", price: 5, category: "Stationery"},
    {name: "Laptop", price: 800, category: "Electronics"},
    {name: "Phone", price: 600, category: "Electronics"},
];

const result1 = products
    .filter((item) => item.price > 20)
    .map((item) => item.name);

console.log(result1);


const users = [
    {name: "John", age: 17, active: false},
    {name: "Jane", age: 22, active: true},
    {name: "Mike", age: 25, active: false},
    {name: "Alice", age: 19, active: true},
];

const userResult = users
    .filter((item) => item.age > 18 && item.active === true)
    .map((item) => item.name);
console.log(userResult);


const numbers = [2, 4, 11, 5, 9, 4];
numbers.sort((a, b) => a - b)

const resultOfNumbers = numbers.reduce((previousValue, item) => {

    return previousValue * item
}, 1)
console.log(resultOfNumbers);


const products1 = [
    {name: "Book", price: 15, category: "Education"},
    {name: "Pen", price: 5, category: "Stationery"},
    {name: "Laptop", price: 800, category: "Electronics"},
    {name: "Phone", price: 600, category: "Electronics"},
    {name: "Notebook", price: 10, category: "Stationery"}
];

const productsSum = products1.reduce((previousValue, item) => {
    return previousValue + item.price
}, 0)
console.log(productsSum);

const productsResult = products1.reduce((previousValue, item) => {
    if (previousValue[item.category]) {
        previousValue[item.category] += item.price;
    } else {
        previousValue[item.category] = item.price;
    }
    return previousValue
}, {})

console.log(productsResult);


const orders = [
    {
        orderId: 1,
        products: [
            {name: "Book", price: 10, quantity: 2},
            {name: "Pen", price: 1, quantity: 5}
        ]
    },
    {
        orderId: 2,
        products: [
            {name: "Laptop", price: 1000, quantity: 1},
            {name: "Mouse", price: 25, quantity: 2}
        ]
    },
    {
        orderId: 3,
        products: [
            {name: "Notebook", price: 5, quantity: 10},
            {name: "Pencil", price: 0.5, quantity: 20}
        ]
    }
];


