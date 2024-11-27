

class Person {
    constructor(key,name) {
        this[key] = name;
    }
}

const person = new Person("First name","Danil");
console.log(person);
/*
const mainElement = document.documentElement;
const checkWidth = mainElement.clientWidth;
const checkHeight = mainElement.clientHeight;
// Without scroll
console.log(checkWidth);
console.log(checkHeight);
const checkFullWidth = window.innerWidth;
const checkFullHeight = window.innerHeight;
//with scroll
console.log(checkFullWidth);
console.log(checkFullHeight);


const scrollDown = window.pageYOffset;// подсчкт прокрута пикселей вниз
console.log(scrollDown);
const scrollSide = window.pageXOffset;
console.log(scrollSide);

const findItem = document.querySelector(`.lesson__item`)
function controlScroll (){
    window.scrollBy(0,150);//Когда выучим события то можно будет подвязать к кнопке и при нажатии будет прокрут по этой функции
}

function controlScrollTo (){
    window.scrollTo(0,150);//Разница в том что тут идет по абсолютным координатам и скролл будет работать лишь раз от 0 до 150 window.scroll- идентичное свойство
}

function scrollTo (){
    window.scrollTo({
        top:200,
        left:200,
        behavior: 'smooth', // может быть instant, по умолчанию auto
    })
}//С доп свойствами Internet Explorer: не поддерживает свойство behavior, и анимация прокрутки не будет плавной.

function scrollIntoView (top){
    const selected = document.querySelector(`.lesson__item`);
    selected.scrollIntoView(top);
}
scrollIntoView(true);//елемент окажется сверху экрана


function scrollIntoViewFull (top){
    const selected = document.querySelector(`.lesson__item`);
    selected.scrollIntoView(
        {
            block:"center",//start , end, auto , nearest вертикальное позици
            inline:"start",// горизонтальное
            behavior: "instant",
        });
}
scrollIntoViewFull(false);//елемент окажется снизу экрана
//Internet Explorer:
//
// не поддерживает параметры block, inline, и не поддерживает плавную прокрутку (behavior: "smooth").
// В IE метод scrollIntoView() поддерживает только булевый аргумент для прокрутки вверх или вниз (старый синтаксис).
//В старых можно использовать fallback или полифилл


const block = document.querySelector(`.lesson__block`);
const addCharacteristics = block.offsetParent;
console.log(addCharacteristics);//но если мы укажем элементу в котором он находится position relative то будет не боди
// а тот родительский элемент

//Показывают смещение блока относительно боди или родительского элемента
const toOffSetLeft = block.offsetLeft;
const toOffSetTop = block.offsetTop;
console.log(toOffSetLeft,toOffSetTop);

//размеры рамок слева и сверху скролл тоже вкл если он слева
const sizeOfClients = block.clientTop;
const sizeOfClient = block.clientLeft;
console.log(sizeOfClients,sizeOfClient);

//Ширина и высота без скрола без рамки слева и справа
const checkSizes = block.clientWidth;
const checkSize = block.clientHeight;
console.log(checkSizes,checkSize);
//scrollWidth,scrollHeight - работают также за исключением того что scrollHeight вернет полную высоту даже если оно спрятано за скроллом

const scrollsToSide = block.scrollTop;
const scrollsTop = block.clientTop;
console.log(scrollsTop,scrollsToSide);
block.scrollTop = 350;//можно задать степень прокрутки скролла

//Относительно окна браузера
const newItem = findItem.getBoundingClientRect().top;
console.log(newItem);//Выведет обьект значений координат данного обьекта

console.log(findItem.getBoundingClientRect().left);
const item = findItem.getBoundingClientRect().top;

//Размер относительно документа
const getRelativeToDocumentCoord = item + window.pageYOffset;
console.log(item)
console.log(getRelativeToDocumentCoord);

const elem = document.elementFromPoint(50,50);
console.log(elem);//Выводит обьект с данными координатами
*/
/*
const getButton = document.getElementById(`getSizeButton`);


getButton.addEventListener("click", function (event) {
    const getWindow = document.documentElement;
    const getWidth = getWindow.clientWidth;
    const getHeight = getWindow.clientHeight;
    if (event.target === getButton) {
        console.log(`${getWidth},${getHeight}`);
    }
});

const findButton = document.getElementById("checkVisibilityButton");
findButton.addEventListener("click", function () {
    const getBlock = document.getElementById("targetElement");
    const rect = getBlock.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        console.log("isSeen");
    } else {
        console.log("Can't be seen");
    }
});
// проверяет, что верхняя граница элемента не выше верхней границы окна.
// rect.bottom <= window.innerHeight проверяет, что нижняя граница элемента не ниже нижней границы окна.


const getElement = document.getElementById(`sizeElement`);
getElement.addEventListener("click", function (event) {
    const getWidthOfElement = getElement.clientWidth;//получакм размеры обьекта без полос прокрутки
    const getHeightOfElement = getElement.clientHeight;

    console.log(`Width: ${getWidthOfElement}, Height: ${getHeightOfElement}`);
})

const getBut = document.getElementById(`getPositionButton`);

getBut.addEventListener(`click`, function (event) {
    const getElement = document.getElementById(`positionElement`);
    const getPosition = getElement.getBoundingClientRect();
    console.log(getPosition.top, getPosition.left, getPosition.right, getPosition.bottom)
})


const getYellowButton = document.querySelector(`.highlighted`);
getYellowButton.addEventListener(`click`, function (event) {
    const getWindowUp = window.pageYOffset;
    const getWindowSide = window.pageXOffset;//выводим количество прокрученных пикселей
    if (event.target === getYellowButton) {
        console.log(getWindowUp, getWindowSide)
    }
})


const getScrollButton = document.getElementById('scrollToBottomButton');

getScrollButton.addEventListener('click', function (event) {
    const getSize = document.documentElement;
    const getFullSize = getSize.scrollHeight;//получили полный размер всего документа
    //clientHeight получает только видимую облась

    // Прокручиваем страницу до конца с плавной анимацией
    scrollTo({top: getFullSize, behavior: "smooth"});

    console.log(getFullSize);
});

const getBody = document.querySelector('body');

const getOffButton = document.getElementById('disableScrollButton');
const getOnButton = document.getElementById('enableScrollButton');

// Обработчик для отключения прокрутки
getOffButton.addEventListener('click', function () {
    getBody.classList.add('Overflow');
});

// Обработчик для включения прокрутки
getOnButton.addEventListener('click', function () {
    getBody.classList.remove('Overflow');
});

const getMovingElement = document.getElementById('resizeElement');

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Получаем количество пикселей, на которые прокручена страница

    // Проверяем, если прокрутка больше или равна 100 пикселей
    if (scrollY >= 100) {
        // Изменяем размеры элемента
        getMovingElement.style.width = '200px';
        getMovingElement.style.height = '200px';
    } else {
        // Возвращаем начальные размеры, если прокрутка меньше 100
        getMovingElement.style.width = '150px';
        getMovingElement.style.height = '150px';
    }
});


const getRedBlock = document.querySelector('#bgElement');

window.addEventListener('scroll', function () {
    const scrollDown = window.pageYOffset; // Получаем количество пикселей, на которые прокручена страница
    if (scrollDown >= 100) {
        getRedBlock.style.backgroundColor = "Blue"; // Меняем цвет фона на синий
    } else {
        getRedBlock.style.backgroundColor = "Red"; // Возвращаем цвет фона на красный
    }
});

const getBackButton = document.getElementById(`backToTopButton`);
getBackButton.addEventListener(`click`, function (event) {
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
});


const getChangeColorButton = document.getElementById('colorChangeButton');
const getBody1 = document.querySelector('body');


const findGreenBlock = document.querySelector(`.dblclickBlock`);
findGreenBlock.addEventListener(`dblclick`, function (event) {
    if (event.target === findGreenBlock) {
        findGreenBlock.classList.toggle(`dblclickBlock-active`)
    }
})


const getImage = document.querySelector(`#contextImage`);

getImage.addEventListener(`contextmenu`, function (event) {
    const getBlock = document.querySelector(`.show`)
    if (event.target === getImage) {
        getBlock.classList.toggle(`show-active`)
    }
});

const keyOutput = document.getElementById('keyOutput');

// Добавляем обработчик события keydown
document.addEventListener('keydown', (event) => {
    // Отображаем название нажатой клавиши
    keyOutput.textContent = `Вы нажали клавишу: ${event.key}`;
});
const keyupInput = document.getElementById('keyupInput');
keyupInput.addEventListener('keyup', (event) => {
    // Проверяем, была ли нажата клавиша Escape
    if (event.key === 'Escape') {
        // Очищаем поле ввода
        keyupInput.value = '';
    }
});
*/
/*
const findElement = document.querySelector(`#themeToggle`);
const findBody = document.querySelector(`body`);
const findEle = document.querySelector(`.content`);

findElement.addEventListener(`click`, function () {
    findBody.classList.toggle(`dark`);
    findEle.classList.toggle(`color-text`);
});

const findButton = document.querySelector(`#clickButton`);
let clickCount = 0;

findButton.addEventListener(`click`, function () {
    clickCount++
    let findSpan = document.querySelector(`#clickCount`);
    findSpan.textContent = clickCount;

})

const getButton = document.querySelector(`#addButton`);
const getBlock = document.querySelector(`#cardContainer`);
const getInput = document.querySelector(`#nameInput`);
const getInputAge = document.querySelector(`#ageInput`);

getButton.addEventListener(`click`, function (event) {
    const inputValue = getInput.value;
    const inputAge = getInputAge.value;

    if (inputValue && inputAge) {
        const userDiv = document.createElement("div");
        userDiv.classList.add("User");
        userDiv.innerHTML = `<span>${inputValue}</span>,<br> <span>${inputAge}</span>`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete button";

        // Добавляем обработчик события для кнопки удаления
        deleteButton.addEventListener("click", function () {
            userDiv.remove(); // Удаляем только элемент userDiv
        });

        userDiv.appendChild(deleteButton); // Добавляем кнопку в userDiv
        getBlock.insertAdjacentElement("afterbegin", userDiv); // Вставляем userDiv в getBlock
    }

    getInput.value = '';
    getInputAge.value = '';
});
 */

/*
const getResult = document.querySelector(`.screen`);
const getButtons = document.querySelectorAll(`.button, .divide, .multiply, .minus, .plus, .equal, .clear`);
let currentInput = '';
let previousInput = '';
let operator = '';

// Обработчик событий для кнопок
getButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        const value = event.target.textContent;

        // Обработка нажатия на число или оператор
        if (value >= '0' && value <= '9') {
            currentInput += value;
            getResult.textContent = currentInput; // Обновление экрана
        } else if (value === 'C') {
            // Очистка данных
            currentInput = '';
            previousInput = '';
            operator = '';
            getResult.textContent = '0'; // Вернуть экран в начальное состояние
        } else if (value === '=') {
            // Выполнение вычисления
            if (previousInput && operator) {
                const result = calculate(parseFloat(previousInput), operator, parseFloat(currentInput));
                getResult.textContent = result; // Обновление экрана с результатом
                previousInput = result; // Сохраняем результат для последующих операций
                currentInput = ''; // Очищаем текущее значение
            }
        } else {
            // Установка оператора
            if (currentInput) {
                if (previousInput) {
                    const result = calculate(parseFloat(previousInput), operator, parseFloat(currentInput));
                    getResult.textContent = result; // Обновление экрана с результатом
                    previousInput = result; // Сохраняем результат
                } else {
                    previousInput = currentInput; // Сохраняем текущее значение
                }
                operator = value; // Устанавливаем новый оператор
                currentInput = ''; // Очищаем текущее значение
            }
        }
    });
});

// Функция для выполнения вычислений
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return null;
    }
}


const getButton = document.querySelector(`.open-modal-btn`);
const getSpan = document.querySelector(`.close-btn`);
const getModal = document.querySelector(`.modal`);
const getBodyy = document.querySelector(`body`)

getButton.addEventListener(`keyup`,function (event){
    if(event.code === "Enter"){
      getModal.classList.toggle(`modal-active`)
    }
})

getSpan.addEventListener(`click`,function (event){
    getModal.classList.toggle(`modal-active`);
})

const getButtonAction = document.querySelector(`.theme-toggle-btn`);
const getPar = document.querySelector(`.Par`);

getButtonAction.addEventListener(`keyup`,function (event){
    if(event.code === "KeyZ" && (event.ctrlKey)){
        getBodyy.classList.toggle(`dark-theme`)
        getPar.classList.toggle(`paragraph`)
    }
})

const originalData = [
    ['Иван', '25', 'Москва'],
    ['Мария', '30', 'Санкт-Петербург'],
    ['Алексей', '22', 'Казань']
];

const table = document.getElementById('editableTable');
const resetButton = document.getElementById('resetButton');

// Обработчик события двойного щелчка по ячейке таблицы
table.addEventListener('dblclick', (event) => {
    const target = event.target;
    if (target.tagName === 'TD') {
        const originalText = target.innerText; // Сохраняем оригинальный текст
        const input = document.createElement('input'); // Создаем новый input
        input.value = originalText; // Устанавливаем значение input в оригинальный текст

        target.innerHTML = ''; // Очищаем содержимое ячейки
        target.appendChild(input); // Добавляем input в ячейку
        input.focus(); // Устанавливаем фокус на input

        // Обработчик события для сохранения изменений при нажатии Enter
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                target.innerText = input.value; // Сохраняем новое значение в ячейку
            } else if (e.key === 'Escape') {
                target.innerText = originalText; // Отменяем изменения
            }
        });

        // Сохраняем значение при потере фокуса
        input.addEventListener('blur', () => {
            target.innerText = input.value; // Сохраняем новое значение в ячейку
        });
    }
});

// Обработчик события для сброса таблицы к оригинальным данным
resetButton.addEventListener('click', () => {
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ''; // Очищаем текущие строки
    originalData.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.innerText = cell; // Заполняем ячейку оригинальными данными
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
});



const getAddButton = document.querySelector(`#addButton`);

const getInput = document.querySelector(`#itemInput`);
const getUlka = document.querySelector(`#itemList`);

getAddButton.addEventListener(`click`, function (event) {
    const userData = getInput.value;
    const createElement = document.createElement(`li`);
    createElement.textContent = userData;
    getUlka.appendChild(createElement);
    const deleteButton = document.createElement(`button`);
    deleteButton.textContent = "Delete button";
    createElement.appendChild(deleteButton)
    deleteButton.addEventListener(`click`, function (event) {
        if(event.target === deleteButton) {
            createElement.remove();
        }
    })
})

const getDiv = document.querySelector(`.toggle-visibility`);
const getToggleButton = document.querySelector(`#toggleButton`);
const findDiv = document.getElementById(`toggleText`)
const createEl = document.createElement(`button`);
createEl.textContent = "Hide";
getDiv.addEventListener("click", function (event) {
    if(event.target === getToggleButton){
        findDiv.style.display = "block"
        findDiv.appendChild(createEl);
        createEl.addEventListener("click", function (event) {
            findDiv.style.display = "none"
        })
    }

})


const getDivOfImages = document.querySelector(`.thumbnails`);

getDivOfImages.addEventListener(`click`, function (event) {
    const target = event.target;
   if(target.classList.contains(`thumbnail`)){
       target.classList.toggle(`large-image`)
   }
})

*/

/*
const getForm = document.querySelector(`#userForm`);
const getInputName = document.querySelector(`#name`);
const getInputEmail = document.querySelector(`#email`);
const getText = document.querySelector(`#message`);
const getButton = document.querySelector(`.Confirm`);

getButton.addEventListener(`click`, function (event) {
    event.preventDefault();
    let getName = getInputName.value;
    let getEmail = getInputEmail.value;
    let getMessage = getText.value;
    if (getName && getEmail && getMessage) {
        console.log(`You added your data, name:${getName},email:${getEmail},message:${getMessage}`)
    } else {
        alert(`You didnt fill data`)
    }

});


const getContainer = document.querySelector(`.task-container`);
const getInputField = document.querySelector(`.Input__Field`);
const getList = document.querySelector(`.Main__List`);
const getAddButton = document.querySelector(`.Add__Button`);

getAddButton.addEventListener(`click`, function () {
    let inputValue = getInputField.value.trim();
    if (inputValue) {
        // Создаем элемент списка <li>
        const createInnerElement = document.createElement(`li`);
        createInnerElement.textContent = inputValue;

        // Создаем кнопки "Delete" и "Edit"
        const createDeleteButton = document.createElement(`button`);
        createDeleteButton.textContent = "Delete";
        const createEditButton = document.createElement(`button`);
        createEditButton.textContent = "Edit";

        // Добавляем кнопки внутрь <li>
        createInnerElement.appendChild(createEditButton);
        createInnerElement.appendChild(createDeleteButton);

        // Добавляем <li> в основной список
        getList.appendChild(createInnerElement);

        // Очищаем поле ввода после добавления задачи
        getInputField.value = "";

        // Удаление задачи при клике на "Delete"
        createDeleteButton.addEventListener(`click`, function () {
            getList.removeChild(createInnerElement);
        });

        // Редактирование задачи при клике на "Edit"
        createEditButton.addEventListener(`click`, function () {
            getInputField.value = inputValue; // Вставляем значение в поле ввода
            getList.removeChild(createInnerElement); // Удаляем элемент списка для обновления
        });
    } else {
        alert("Please enter a task.");
    }
});

const getMain = document.querySelector(`.main-container`);
const getInput1 = document.getElementById(`name`);
const getInputt = document.getElementById(`age`);
const getBut = document.getElementById(`navigateButton`);
const findDisplay = document.getElementById(`displayData`);

getMain.addEventListener(`click`, function (event) {
    const name = getInput1.value.trim();
    const age = getInputt.value.trim();

    // Проверка нажатия на кнопку
    if (event.target === getBut) {
        if (name && age) {
            // Вставляем данные в элемент
            findDisplay.innerHTML = `<span>${name}, ${age}</span>`;
            // Очищаем поля ввода
            getInput1.value = '';
            getInputt.value = '';
        } else {
            alert("Пожалуйста, введите имя и возраст.");
        }
    }
});


const regex = /([^&=]+)=([^&]*)/g;
const queryString = "name=John&age=30";
let match;

while ((match = regex.exec(queryString)) !== null) {
    console.log(`Полное совпадение: ${match[0]}`);
    console.log(`Ключ: ${match[1]}, Значение: ${match[2]}`);
}
*/

/*
const str = "Name%@1wrlq";
const regex = /\d+/;
const match = regex.exec(str);
console.log(match[0]);
// ищет первое совпадение


function updateDimensions() {
    // Получаем размеры окна
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Получаем полные размеры документа
    const documentWidth = document.documentElement.scrollWidth;
    const documentHeight = document.documentElement.scrollHeight;

    // Обновляем значения на странице
    document.getElementById("viewportWidth").textContent = viewportWidth;
    document.getElementById("viewportHeight").textContent = viewportHeight;
    document.getElementById("documentWidth").textContent = documentWidth;
    document.getElementById("documentHeight").textContent = documentHeight;
}

// Обновляем размеры при загрузке и изменении окна
updateDimensions();
window.addEventListener("resize", updateDimensions);


const getContainer = document.querySelector(`.button-container`);
const getScrollButtonDown = document.getElementById(`scrollDown`);
const getScrollButtonUp = document.getElementById(`scrollUp`);

getScrollButtonDown.addEventListener(`click`, function (event) {
    window.scrollBy({
        top: 300,
        behavior: "smooth",
    })
})

getScrollButtonUp.addEventListener(`click`, function (event) {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


let getElementVert = document.getElementById(`verticalPosition`);
let getElementHorizont = document.getElementById(`horizontalPosition`);
const getElementt = document.querySelector(`.myElement`);

function getCoordinates (){
    const rect = getElementt.getBoundingClientRect();
    const verticalPosition = rect.top;
    const horizontalPosition = rect.left;

     getElementVert.textContent = verticalPosition.toFixed(2);
     getElementHorizont.textContent = horizontalPosition.toFixed(2);
}
getCoordinates();
window.addEventListener(`resize`,getCoordinates);


const myElement = document.querySelector('.myElement');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            // Означает что нижняя часть элемента наход на коорд прев знвчение окна бразуера
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVisibility() {
    if (!isElementInViewport(myElement)) {
        console.log('Элемент больше не виден на экране.');
    } else {
        console.log('Элемент виден на экране.');
    }
}

// Проверка видимости при прокрутке
window.addEventListener('scroll', checkVisibility);

// Начальная проверка видимости
checkVisibility();

 */

const url = "https://www.example.com/page?param1=value1&param2=value2";

// Создание объекта URL
const parsedUrl = new URL(url);//Здесь мы создаем новый объект URL, передавая ему вашу строку URL. Этот объект разбивает URL на части, такие как протокол, хост, путь и параметры.
console.log(typeof parsedUrl.protocol);
console.log(parsedUrl.host);
/*
Например, из URL https://www.example.com/page?param1=value1&param2=value2 объект URL предоставляет удобный доступ к следующим компонентам:
parsedUrl.protocol: "https:"
parsedUrl.hostname: "www.example.com"
parsedUrl.pathname: "/page"
parsedUrl.search: "?param1=value1&param2=value2"
Объект URL предоставляет методы для изменения компонентов URL
 (например, searchParams.append(), searchParams.delete()).
 Это позволяет легко управлять параметрами, добавлять или удалять их,
 без необходимости вручную обрабатывать строки.
 */

// Отримання параметрів запиту
const searchParams = new URLSearchParams(parsedUrl.search);
console.log(searchParams);//обьект уже
/*
Мы используем parsedUrl.search, чтобы получить строку параметров
(например, ?param1=value1&param2=value2).
Здесь вы создаете новый экземпляр URLSearchParams, передавая
ему строку параметров запроса, которая была получена с помощью parsedUrl.search.
Например, если ваш parsedUrl.search равен "?param1=value1&param2=value2",
то searchParams будет содержать параметры param1 и param2.

Вы можете добавлять параметры с помощью append(name, value) и удалять их с помощью delete(name).
Например:
searchParams.append("param3", "value3"); // Добавляет новый параметр
searchParams.delete("param1"); // Удаляет param1
Конвертация обратно в строку:

Чтобы получить строку параметров обратно, вы можете использовать метод toString():

const newQueryString = searchParams.toString()
 */
const param1 = searchParams.get("param1");//получаем параметры
const param2 = searchParams.get("param2");

console.log("param1:", param1); // Выводит: param1: value1
console.log("param2:", param2);

const newQueryString = searchParams.toString();
console.log(newQueryString);

if (searchParams.has("param1")) {//проверка наличия параметра
    console.log("IT has param1");
} else {
    console.log("Does not have param1");
}

// Проверка наличия параметра с конкретным значением
if (searchParams.get("param1") === "value1") {
    console.log("IT has param1 with value1");
} else {
    console.log("Does not have param1 with value1");
}

const queryString1 = "name=John&age=30&city=NewYork";

const searchParams1 = new URLSearchParams(queryString1);

const name = searchParams1.get("name");
const age = searchParams1.get("age");
const city = searchParams1.get("city");

console.log("Name:", name); // Выводит: Name: John
console.log("Age:", age);   // Выводит: Age: 30
console.log("City:", city)

const queryString2 = "param1=value1&param2=value2";

const searchParams2 = new URLSearchParams(queryString2);

// Добавление нового параметра
searchParams2.append("param3", "value3");

// Изменение значения существующего параметра
searchParams2.set("param2", "newValue1");

// Вывод обновленной строки запроса
const updatedQueryString2 = searchParams2.toString();
console.log(updatedQueryString2);




const queryString4 = "status=active&user=admin";


const queryString5 = "paramA=apple&paramB=banana&paramC=cherry";