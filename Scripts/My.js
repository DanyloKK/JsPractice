"use strict"

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

function sortByAge(users){
    return users.sort((a,b)=> a.age - b.age);
}
const result = sortByAge(users);
console.log(result)


/*
const object = {
    name: "Danylo", age: 22, hobbies: "Gym"
}

delete object.age;
object.age = 23;
console.log(object);

const person = {
    name: "Albert", age: 26, greet: function (greeting) {
        console.log(`${greeting} ${this.name}, your age is ${this.age}`)
    }
}
person.greet("Hello");


const fruits = {
    banana: 22, apple: 32, papaya: 11, mulberry: 8, mango: 56, strawberry: 122,
}

//Тут мы из обьектв вывели массив его ключей
const newFruits = Object.keys(fruits);
console.log(newFruits);
//Тут перебрали с помощью метода forEach предварительно преобразова в массив
newFruits.forEach(value => {
    console.log(value);
    console.log(fruits[value]);
})
newFruits.forEach((key, value) => {
    console.log(`${value}:${key}`)
})


//Метод Object.entries() возвращает массив, состоящий из массивов, где каждый элемент — это пара [ключ, значение].
// Он удобен, если нужно одновременно получить и ключ, и значение.
const newFruits2 = Object.entries(fruits);
console.log(newFruits2);
newFruits2.forEach(([key, value]) => {
    console.log(`${key}:${value}`)
})
newFruits2.forEach((key, value) => {
    console.log(`${value}:${key}`)
})


const student = {
    name: 'John', age: 21, courses: ['Math', 'Physics'], grades: {
        Math: 'A', Physics: 'B'
    }
};

function countProperties(student) {
    let sum = 0;
    for (const key in student) {
        if (student.hasOwnProperty(key)) {
            ++sum;
            if (typeof student[key] === "object" && student[key] !== null) {
                sum += countProperties(student[key]);
            }
        }
    }
    return sum;
}

const totalProperties = countProperties(student);
console.log(totalProperties);


const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

function findKey(car, value) {
    for (const key in car) {
        if (car.hasOwnProperty(key) && car[key] === value) {
            return key
        }
    }
    return "Not found"
}

console.log(findKey(car, 2020));


const data = {
    name: 'Alice',
    age: 25,
    isStudent: true,
    salary: 5000,
    courses: ['Math', 'Science']
}

let newObject = {}

function newData(data) {

    for (const key in data) {
        if (typeof data[key] === "number") {
            newObject[key] = data[key]
        }
    }
    return newObject
}

console.log(newData(data));
console.log(newObject);


const myObject = {
    name: "Вася",
    age: 33,
}


const myNewObject = Object.create(myObject);
myNewObject.hobbies = "Waterpolo";
console.log(myObject)
console.log(myNewObject)

myNewObject.hobbies = "Football"
console.log(myObject)

const obj = {
    name: "Vasya",
    age: 35,
    ages: 44,
}

const newObj = Object.assign(obj);
console.log(newObj);
console.log(obj)

delete newObj.name;
console.log(obj);


const person1 = {
    name: 'Alice',
    age: 25
};

const keys = Object.keys(person1);

keys.forEach(key => {
    console.log(key, person1[key]);
});
*/
