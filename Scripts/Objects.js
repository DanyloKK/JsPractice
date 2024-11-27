let person = {
    name: "John",
    age: 25,
    city: "Brasov"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

delete person.city;
person.profession = "IT";
console.log(person)

const personName = person.name;
console.log(personName);


const countries = {
    France: "Paris",
    Germany: "Berlin"
};

for (let key in countries) {
    console.log(key);
    console.log(countries[key]);
}
;

const checkObject = "Ghimbav" in countries
console.log(checkObject);

const user = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zipcode: "10001"
    }
};

for (let key in user.address) {
    console.log(key);
    console.log(user.address[key]);
}

function Calculator(a, b, c, ...others) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.others = others;

    this.sum = function () {
        return a + b + c + others.reduce((acc, curr) => acc + curr, 0);
    }

    this.multiply = function () {
        return a * b * c * others.reduce((acc, curr) => acc * curr, 1);
    }
}

const calculatorInstance = new Calculator(2, 2, 2, 2, 2);
const sumResult = calculatorInstance.sum();
const multiplyResult = calculatorInstance.multiply();
console.log(multiplyResult);

const userAge = {
    name: "Angel",
    age: 25,
}

const car = {
    model: "Toyota",
    mark: "X5VW",
    year: 2012,
}

const newCarCopy = Object.assign({}, car);
newCarCopy.year = 2009;
console.log(newCarCopy)
console.log(car);


const students = [
    {name: 'Alice', gpa: 3.4},
    {name: 'Dan', gpa: 3.5},
    {name: 'John', gpa: 3.9},
    {name: 'Ally', gpa: 5},
    {name: 'Wolter', gpa: 2.5},
    {name: 'Grisha', gpa: 4.2}
]

const studentsGood = students.filter(function (item) {
    if (item.gpa > 3.5)
        return item.gpa;

})
console.log(studentsGood);

const users = {
    name: "Alice",
    age: 30,
    friends: ["Bob", "Charlie", "David"],
    addFriendsName(friendName) {
        return this.friends.push(friendName)
    },
    removeFriend(friendName) {
        this.friends = this.friends.filter((item) => item !== friendName)
    },
    getFriends() {
        return this.friends.join(",")
    },

};
users.addFriendsName("Sally");
users.removeFriend("Charlie")
console.log(users.getFriends());


const school = {
    name: "Greenwood High",
    students: [
        {
            name: "Alice",
            age: 15,
            grades: [85, 90, 78]
        },
        {
            name: "Bob",
            age: 16,
            grades: [88, 92, 80]
        },
        {
            name: "Charlie",
            age: 15,
            grades: [90, 85, 95]
        }
    ],
    getAverageGrade: function () {
        // Суммируем оценки всех студентов и считаем количество оценок
        let totalGrades = 0;
        let totalStudents = this.students.length;

        this.students.forEach(student => {
            const sumGrades = student.grades.reduce((acc, grade) => acc + grade, 0);
            totalGrades += sumGrades / student.grades.length; // Средняя оценка для каждого студента
        });

        return totalGrades / totalStudents
    }
};

const result = school.getAverageGrade();
console.log(`Общая средняя оценка: ${result.toFixed(2)}`);


function createEmployee(name, position, salary) {
    return {
        name: name,
        position: position,
        salary: salary,
        getDetails: function () {
            return `${this.name}, ${this.position}, ${this.salary}`;
        },
        giveRaise: function (percent) {
            this.salary += this.salary * (percent / 100);
        }
    };
}

const result2 = createEmployee("Danylo", "Junior", 3000);
console.log(result2.getDetails()); // "
result2.giveRaise(10);
console.log(result2.getDetails());


const arr = [1, 2, 3, 4, 5, 6];

function sumEvenNumbers(arr) {
    let sum = 0;
    let method = arr.reduce(function (previousValue, item, index) {
        if (item % 2 === 0) {
            return previousValue + item
        }
        return previousValue
    }, 0)
    return method;
}

console.log(sumEvenNumbers(arr));


const products = [
    {name: 'Laptop', price: 1000},
    {name: 'Phone', price: 500},
    {name: 'Tablet', price: 700}
];

function filterByPrice(products, minPrice, maxPrice) {
    const method = products.filter(function (item) {
        if (item.price > minPrice && item.price < maxPrice) {
            return item.price
        }
    })
    return method
}

const filterByProducts = filterByPrice(products, 600, 1200);
console.log(filterByProducts)


const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 22},
    {name: 'Charlie', age: 30},
]

function peoples(people) {
    const sortPeopleByAge = people.sort((a, b) => a.age - b.age);
    return sortPeopleByAge;
}

const resultOfSort = peoples(people);
console.log(resultOfSort)


const array = [5, 1, 9, 3, 7];

function secondLargest(arr) {
    const maxValue = Math.max(...arr); // Находим максимальное значение

    // Фильтруем элементы, оставляя только те, которые меньше максимального
    const filteredArr = arr.filter(item => item < maxValue);

    // Если после фильтрации остались элементы, находим максимальное из них
    if (filteredArr.length > 0) {
        const secondValue = Math.max(...filteredArr);
        return secondValue; // Возвращаем второй по величине элемент
    }

    return null; // Если нет второго по величине элемента
}

const resultOfCheck = secondLargest(array);
console.log(resultOfCheck); // 7

const userOf = [
    {
        id: 1,
        name: "Alice",
        age: 30,
        hobbies: ["reading", "sports"],
        address: {
            city: "London",
            country: "UK"
        }
    },
    {
        id: 2,
        name: "Bob",
        age: 25,
        hobbies: ["music", "programming", "art"],
        address: {
            city: "London",
            country: "UK"
        },
        changeAge(age) {
            this.age += age;
            return this
        }
    }
];
userOf.push({
    id: 3,
    name: "John",
    age: 33,
    hobbies: ["art", "gym"],
    address: {
        city: "Brasov",
        country: "Romania"
    }
});


function sortUsersByCity() {
    const result = userOf.reduce(function (previousValue, item, index) {
        let city = item.address.city; // 1
        let user = item.name; // 2
        if (!previousValue[city]) { // 3
            previousValue[city] = []; // 4
        }
        previousValue[city].push(user); // 5
        return previousValue; // 6
    }, {}); // 7
    return result; // 8
}

const resultFinal = sortUsersByCity();
console.log(resultFinal);


const users1 = [
    {
        id: 1,
        name: "Alice",
        age: 30,
        hobbies: ["reading", "sports"],
        address: {
            city: "New York",
            country: "USA"
        }
    },
    {
        id: 2,
        name: "Bob",
        age: 25,
        hobbies: ["music", "programming"],
        address: {
            city: "London",
            country: "UK"
        }
    },
    {
        id: 3,
        name: "Charlie",
        age: 35,
        hobbies: ["sports", "music"],
        address: {
            city: "Paris",
            country: "France"
        }
    }
];

function findUsersByHobby(hobby) {
    return users1.filter(user => user.hobbies.includes(hobby));
}

// Пример использования:
const result22 = findUsersByHobby("sports");
console.log(result22);


const categories = {
    electronics: {
        laptops: [
            {id: 1, name: "MacBook Pro"},
            {id: 2, name: "Dell XPS"}
        ],
        phones: [
            {id: 3, name: "iPhone 12"},
            {id: 4, name: "Samsung Galaxy S21"}
        ]
    },
    furniture: {
        chairs: [
            {id: 5, name: "Office Chair"},
            {id: 6, name: "Gaming Chair"}
        ],
        tables: [
            {id: 7, name: "Dining Table"},
            {id: 8, name: "Coffee Table"}
        ]
    }
};


const order = {
    orderId: 1234,
    customer: {
        name: "John Doe",
        email: "john.doe@example.com"
    },
    items: [
        {productId: 1, productName: "Laptop", quantity: 2, price: 1000},
        {productId: 2, productName: "Mouse", quantity: 2, price: 25}
    ],
    totalAmount: 1050
};

function recalculateTotalAmount() {
    const total = order.items.reduce((sum, item) => {
        return sum + (item.quantity * item.price);
    }, 0); // 0 — начальное значение суммы

    // Обновляем общую сумму в объекте заказа
    order.totalAmount = total;

    return total;
}

// Пример использования:
const updatedTotal = recalculateTotalAmount();
console.log("Обновленная общая стоимость:", updatedTotal);
console.log("Обновленный заказ:", order);


/*
function addQuantity(productId, add) {
    // Найдем товар по productId
    order.items.forEach(item => {
        if (item.productId === productId) {
            item.quantity += add;  // Увеличиваем количество товара
        }
    });
}

// Пример: добавим 3 единицы к товару с productId 2 (Mouse)
addQuantity(2, 3);

// Проверим результат
console.log(order.items);
console.log(order);
*/

