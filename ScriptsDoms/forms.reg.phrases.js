/*
const getForm = document.getElementById(`registrationForm`);
const getUser = getForm.elements.user_name;
const getEmail = getForm.elements.email;


getForm.addEventListener(`submit`, function (event) {
    event.preventDefault();
    const dataName = getUser.value;
    const dataEmail = getEmail.value;
    console.log(`Name:${dataName},email:${dataEmail}`);
})


const getSecondForm = document.getElementById(`passwordForm`)
const getInnerInput = getSecondForm.elements.password;
const getSecondPassword = getSecondForm.elements.confirmPassword;

getSecondForm.addEventListener(`submit`, function (event) {
    event.preventDefault()
    const firstPassword = getInnerInput.value;
    const secondPassword = getSecondPassword.value;
    if (firstPassword !== secondPassword) {
        console.log(`Passwords are not equal!`)
    } else {
        console.log(`Your password:${secondPassword}`)
    }
});


const getThirdForm = document.getElementById(`countryForm`);
const getSelection = getThirdForm.elements.country;
getThirdForm.addEventListener(`submit`, function (event) {
    event.preventDefault();
    const country = event.target.country.value;
    console.log('Выбранная страна:', country);
});


const fourthForm = document.getElementById('interestsForm');
const getElements = fourthForm.elements.interests;

fourthForm.addEventListener('submit', function (event) {
    event.preventDefault(); // предотвращаем стандартное поведение отправки формы

    const selectedInterests = Array.from(getElements) // создаем массив из чекбоксов
        .filter(checkbox => checkbox.checked) // оставляем только отмеченные
        .map(checkbox => checkbox.value); // получаем значения отмеченных чекбоксов

    if (selectedInterests.length > 0) {
        console.log('Ваши интересы:', selectedInterests.join(', '));
    } else {
        console.log('Вы не выбрали интересы.');
    }
});


document.getElementById('fileUploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // предотвращаем стандартное поведение отправки формы
    const fileInput = document.getElementById('file'); // получаем элемент файла
    const file = fileInput.files[0]; // получаем первый загруженный файл

    if (file) {
        console.log('Название файла:', file.name);
    } else {
        console.log('Файл не выбран.');
    }
});
const getElement = document.getElementById(`review`);
document.getElementById(`reviewForm`).addEventListener(`submit`, function (event) {
    const value = getElement.value;
    console.log(`You entered:${value}`)
})

const textInput = document.getElementById('textInput');
const output = document.getElementById('output');

textInput.addEventListener('input', function() {
    output.textContent = this.value; // Обновляем текст в реальном времени
});


const fileInput = document.getElementById(`fileInput`);
const getFileName = document.getElementById(`fileName`);

fileInput.addEventListener(`change`,function (event){
    const file = fileInput.files[0];
    getFileName.textContent = file.name;//прокидываем его имя
});

const getFocus = document.getElementById('focusInput');

getFocus.addEventListener('focus', function(event) {
    event.preventDefault()
    getFocus.classList.add('focused'); // Добавляем класс 'focused'
});

getFocus.addEventListener('blur', function(event) {
    getFocus.classList.remove('focused'); // Удаляем класс 'focused' при потере фокуса
});



const getForm = document.getElementById('userInfoForm');
const getNameInput = getForm.elements.name;
const getAgeInput = getForm.elements.age;
const getMale = getForm.elements.gender;

getForm.addEventListener('submit', function (event) {
    event.preventDefault(); // предотвращаем стандартное поведение отправки формы

    const ageValue = parseInt(getAgeInput.value); // преобразуем значение в число

    // Проверка на NaN (не число)
    if (isNaN(ageValue)) {
        alert('Это не число');
        return; // прерываем выполнение, если это не число
    }

    // Получаем выбранный пол
    const gender = getMale.value;

    // Проверка возраста в зависимости от пола
    if (gender === 'male') {
        if (ageValue <= 16) {
            alert('Мужчины должны быть старше 16 лет!');
        } else {
            alert('Вы взрослый мужчина!');
        }
    } else if (gender === 'female') {
        if (ageValue <= 18) {
            alert('Женщины должны быть старше 18 лет!');
        } else {
            alert('Вы взрослая женщина!');
        }
    }
});

let obj = {};
Object.defineProperty(obj,`name`,{
    value:`John`,
    enumerable:true,
    writable:false,// отвечает за изменение свойств
    configurable:false,// запрещает изменять другие дескрипторы удалять свойства и тд
});
console.log(obj.name);
obj.name = `Jane`;
console.log(Object.keys(obj));
//Object.preventExtensions();запрещает - предотвр добавление новых свойств но можно изменять и удалять изнутри
//Object.seal() - нельзя добавлять и удалять но можно измен существ
// если он writtable:true
//Object.freeze() - полностью убирает возможность редактировать обьект
//structuredClone() - Объекты и массивы — создается независимая копия, включая все вложенные объекты и массивы (глубокое копирование).



let str = `abc...abc...abc`;
let result = str.match(/abc/g);
let result2 = str.match(/abc/i);//только первое совпадение
console.log(result,result2)

 */

let str = "(123) 456-7890";
let regexStr = /^\(?\d{3}\)?[-\s]\d{3}[-]\d{4}$/;

const passw = "domik12560@gmail.com";
let regPass = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneMmber = "(123) 456-7890";
const regPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/;

const password = "Kuzka2015!";

const passReg = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/;

const obj = {
    name: "Vasya",
    age:22,
}

const {adult,ab} = obj

