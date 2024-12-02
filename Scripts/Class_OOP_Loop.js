"use strict"

/*
let getData = (data) => {
    data = 20 * 6;
    processsData(data, (processData) => {
        finalData(processData, (final) => {
                console.log(`final result:${final}`)
            }
        )
    })
};

function processsData(datas, callback) {
    const processData = datas + 2;
    callback(processData);
}

function finalData(final, callback) {
    const finalData = final * 2;
    callback(finalData)
}

getData();

let greetUser = (name, callback) => {
    setTimeout(() => {
        callback(name);
    }, 2000);
};

greetUser("Danil", (name) => {
    console.log(`Привет, ${name}!`);
});
greetUser();

let calculate = (numbers, sum, callback) => {
    setTimeout(() => {
        callback(numbers, sum);
    }, 0);
}

calculate(5, 22, (number, sum) => {
    const total = number * sum;
    console.log(total)
})

let checkNumber = (num, callback) => {
    setTimeout(() => {
        if (num % 2 === 0) {
            callback("Число четное")
        } else {
            callback("Число нечетное")
        }
    }, 1000)
}

checkNumber(5, (message) => {
    console.log(message);
})


function sayHello(greet) {
    console.log(`Hello,${greet}`)
}

setTimeout(() => {
    sayHello("Danil")
}, 2000)

sayHello("Danil")

let filterArray = (array, callback) => {
    setTimeout(() => {
        const filteredArray = array.filter(item => item <= 10);
        callback(filteredArray)
    }, 2000)
}

filterArray([10, 5, 2, 11, 55, 2], (callback) => {
    console.log(callback)
})

filterArray();

let sumNumbers = (massive, callback) => {
    setTimeout(() => {
        const result = massive.reduce(function (initial, item) {
            return initial + item
        }, 0);
        callback(result)
    }, 2000)
}

sumNumbers([2, 42, 1, 5, 1, 4, 33, 2], (callback) => {
    console.log(callback)
})

function getName(callbacks) {
    const name = "Dan"; // Пример имени
    callbacks(name); // Передаем имя в callback
}

function callback(name) {
    console.log(`${name}`);
}

getName(callback);

let transformString = (string, callback) => {
    setTimeout(() => {
        let changeString = string.replace(/ /g, "_")
        callback(changeString)
    }, 1000)
}

transformString("Hello world my name is Danylo", (changeString) => {
    console.log(changeString)
});

let divideNumbers = (firstNum, secondNum, callbackNumber) => {
    if (secondNum === 0) {
        console.log("Ошибка, нельзя делить на 0!")
    } else {
        let divide = firstNum / secondNum;
        callbackNumber(divide)
    }
}
divideNumbers(5, 5, (divideNumber) => {
    console.log(divideNumber)
})
divideNumbers()

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Дані завантажено';
            resolve(data);
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = `${data} і оброблено`;
            resolve(processedData);
        }, 1000);
    });
}

function updateUI(processedData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(processedData);
            resolve();
        }, 1000);
    });
}

// Виклик функцій
loadData()
    .then(processsData)
    .then(updateUI)
    .catch((error) => console.error(`Помилка: ${error}`))
    .finally(() => console.log('Операції завершено'));




const promise = new Promise(function (resolve, reject) {
    const success = true;
    if (success) {
        resolve("Операция прошла успешно")
    } else {
        reject("Операция провалилась")
    }
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error("Ошибка:", error);
    })

const wait = (milliseconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Прошло:${milliseconds} мс`)
        })
    })
}
wait(4000)
    .then((result) => {
        console.log(result)
        return wait(2000)
    })
    .then((result) => {
        console.log(result); // Вывод: "Прошло 1000 мс" через еще 1 секунду
    });


const checkNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("Успех!")
        } else if (num <= 10) {
            reject("Провал!")
        }
    })
}
checkNumber(15)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error);
    })

const waitSeconds = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Я ждал:${millisecond} мс
            `)
        }, millisecond);
    })
}

waitSeconds(3000)
    .then((result) => {
        console.log(result)
        return waitSeconds(2000)
    })
    .then((result) => {
        console.log(result) // сюда вернулась функция return waitSeconds(2000) то есть второй then будет ждать окончания первого и ссылаться на его результат
    })



const promises = (step) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, step)
    })
}

promises(1000)
    .then(() => {
        console.log("Шаг 1");
        return promises(2000)
    })
    .then(() => {
        console.log("Шаг 2");
        return promises(3000)
    })
    .then(() => {
        console.log("Шаг 3");
    })


const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Прошло:1000 после выполнения 1`)
    }, 1000)
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Прошло:2000 после выполнения 2}`)
    }, 2000)
})
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Прошло:3000 после выполнения 3`)
    }, 3000)
})
const p4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Прошло:4000 после выполнения 4`)
    }, 4000)
})
Promise.all([p1, p2, p3, p4]).then(value => {
    console.log(value[0])
    console.log(value[1])
    console.log(value[2])
    console.log(value[3])
})


function cacheBack(usd) {
    console.log(usd * 1.2);
}

function shopping(usd) {
    const newCashBalance = usd - 100;
    console.log('newCashBalance:', newCashBalance);

    return new Promise((resolve) => resolve(newCashBalance))
}

function getMoney(resolve) {
    console.log('balance: 1000');

    resolve(1000);
}

const spentMoneyPromise = new Promise(getMoney);
spentMoneyPromise
    .then((result) => shopping(result))
    .then((result) => shopping(result))
    .then((result) => shopping(result))
    .then((result) => shopping(result))
    .then((result) => shopping(result))
    .then((result) => shopping(result))
    .then((result) => cacheBack(result))


function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedMessage(message, delay) {
    await wait(delay); // Ждём указанную задержку
    console.log(message); // Выводим сообщение
}

// Тестируем функцию
delayedMessage("Привет, мир!", 2000)

let data1 = `https://jsonplaceholder.typicode.com/posts`;
let data2 = `https://jsonplaceholder.typicode.com/users`;

async function getData() {
    try {
        // Параллельный запрос с использованием Promise.all
        let [posts, users] = await Promise.all([
            fetch(data1),
            fetch(data2)
        ]);

        // Проверка успешности ответов
        if (!posts.ok || !users.ok) {
            throw new Error('Ошибка при загрузке данных');
        }

        // Преобразование данных в формат JSON
        let postsResponse = await posts.json();
        let usersResponse = await users.json();

        // Выводим данные в консоль
        console.log('Posts:', postsResponse);
        console.log('Users:', usersResponse);

    } catch (error) {
        // Обработка ошибок
        console.log('Ошибка:', error);
    }
}

getData();

const data = "http://localhost:3000/posts"

async function request() {
    try {
        let posts = await fetch(data, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: "Danil", age: 23})
        });
        if (!posts.ok) {
            throw new Error("Oops")
        }
        let result = await posts.json();
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

request()


async function updateComment() {
    try {
        let response = await fetch(`${data}/1`, {  // /1 - ID ресурса
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "Danil updated", age: 24 })
        });

        if (!response.ok) {
            throw new Error("Ошибка при обновлении комментария");
        }

        let result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

updateComment();
class FormsValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]'
    }
}

new FormsValidation()
const formElement = document.querySelector(".form")
formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const formObject = new FormData(formElement)
    /*
    new FormData — это встроенный объект в JavaScript,
    который используется для сборки и отправки данных формы
    (например, при отправке формы с помощью AJAX или Fetch API).
    Он предоставляет удобный способ для работы с данными формы,
    извлекая значения из элементов формы и упрощая их отправку на сервер.
    formObject.append("example", "hello-hello");

console.log(formObject.get("example"))// получакм value
console.log(formObject.get("name"))// проверили знач поля
console.log(formObject.has("name"))// проверяет записано ли что-то
formObject.delete("example")//удаляем из formObject
console.log(Object.fromEntries(formObject))//тут мы просто вывели данные ,но для сервера хватит и команды сверху
})
 */

class FormsValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]'
    }

    constructor() {
        this.bindEvents()
    }

    manageErrors(fieldControlElement, errorMessages) {
        const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors);
        fieldErrorsElement.innerHTML = errorMessages
            .map((message) => `<span class=field__errors>${message}</span>`)
            .join("")//соед массив в строку
    }

    errorMessages = {
        valueMissing: () => "Пожалуйста заполните это поле",
        patternMismatch: ({title}) => title || "Данные не соответствуют формату",
        tooShort: ({minLength}) => `Слишком короткое значение, минимум - ${minLength} `,
        tooLong: ({maxLength}) => `Слишком длинное значение, ограничение - ${maxLength}`,
        /*
        свойства из validity которые указ
        на сост полей по разным ошибкам
        а тут мы будем выводить сообщения
        тут мы деструкт title и другие
        по другому не сработает чтобы вывести то самое знач
        и чтобы оно извлеклось нужно в функцию
        снизу положить fieldControlElement для
        получения єлемента на котором мы фокусимся
         */
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity;
        const errorMessages = [];
        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
            if (errors[errorType]) {
                /*
                тут делаем доступ к значению
                и проверям true или false
                 */
                errorMessages.push(getErrorMessage(fieldControlElement))
            }
        })
        this.manageErrors(fieldControlElement, errorMessages)
    }

    onBlur(event) {
        const {target} = event;
        const isFormField = target.closest(this.selectors.form);
        const isRequired = target.required
        if (isFormField && isRequired) {
            this.validateField(event.target)
            /*
            тут мы передали дом элемент в аргумент метода
            а валидити для обработки этих ошибок
             */
        }
    }

    bindEvents() {
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, {capture: true})
        /*
        здесь мы передали (ивент) чтобы
        вызвать функцию и обработать событие с использ данных
        Когда происходит событие blur, срабатывает метод onBlur, который
        в свою очередь вызывает метод validateField для выполнения валидаци
        blur событие не всплывает
        и поэтому его нужно принудительно захватить
        Когда вы пишете this.onBlur(event) внутри bindEvents(),
        это означает, что метод onBlur будет вызван на объекте класса,
        а this внутри этого метода будет ссылаться на тот же экземпляр класса.
        Метод onBlur:
        В методе onBlur вы снова используете
        this.validateField(event.target), что означает,
        что метод validateField будет вызван на текущем экземпляре класса,
        и контекст this будет указывать на этот экземпляр.
        тут мы писали this исключительно для того чтобы
        при созд нового экземпляра класса все методы не теряли контекст
         */
        console.log('Контекст:', this);
        /*
        тут this указ на сам класс
        то есть то что наход внутри него
        Контекст this в этом случае не теряется,
        потому что метод вызывается на экземпляре (this.bindEvents()).
        Нет необходимости в bind:
        Пока метод bindEvents не передается
        как коллбек (например, в обработчик события),
        он будет работать корректно без дополнительной привязки контекста.
        но если надо будет его запихнуть в обработчик функция
        например и тд то нужен будет bind

         */
    }
}

new FormsValidation()


class Person {
    getName(names) {
        this.addName(names)
    }

    addName(names) {
        console.log(`${names}`)
    }
}

const result = new Person;
result.getName("Данило")
const res = document.getElementById("login")
const errors = res.validity;
console.log(errors)
