//ДОМАШКА
/*
1) Придумай имя переменной для хранения цвета
	глаз пользователя сайта
2) Объяви две переменных - user и userName.
	Присвой значение "Вася" переменной userName.
	Скопируй значение переменной userName в переменную user.
	Выведи в консоль переменную user. Результат должен быть Вася
3) Напиши в комментариях какой вариант
	либо варианты записаны НЕ верно?
*/
/*
//Вариант №1
let user = 'Вася' let age = 36

//Вариант №2
let myage = 36;

//Вариант №3
const BLOCK_SIZE = 14 + 50;

//Вариант №4
const BLOCK_HEIGHT = 100;

//Вариант №5
if (true) {
	var size = 15;
}
console.log(size);
*/

//============================================

//ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ

//Ключевое слово let для
//объявления переменной

//Имя переменной может содержать 
//только буквы, лучше латинского 
//алфавита, цифры и символы 
//$ и _.При этом первый символ 
//не должен быть цифрой. 

/*
//Верное объявление
let age;
let info123;
let $size;
let _color;

//Неверное объявление
let 123info;
let my-age;
*/

//---------------------------

//Названия переменных
/*
//Вместо
let s;
let sdkljghfasdfkgl;
let leftsidebarsize;

//Лучше писать
let size;
let age;
let leftSidebarSize;

//Регистр имеет значение!
let sidebarsize;
let sidebarSize;
*/

//-------------------------------------------

/*
//Использование других символов

let яПеременная;
let 我;
*/

//-------------------------------------------

/*
//Нельзя использовать зарезервированные имена

let let;
let break;
let for;

*/

//-------------------------------------------


//ПРИСВОЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
/*
//Объявление без значения
let myLifeStyle;

//Присвоение значения
myLifeStyle = 'freelance';


//Объявление переменной и присвоение значения
let myLifeStyle = 'freelance';

console.log(myLifeStyle);
*/

//-------------------------------------------

//ОБЪЯВЛЕНИЕ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ
/*
//В строку через запятую
let myName = 'Фрилансер по жизни', myAge = 36, myMessage = 'Живи, а работай в свободное время!';

//Через запятую с новой строки
let myName = 'Фрилансер по жизни',
	myAge = 36,
	myMessage = 'Живи, а работай в свободное время!';


//Отдельно
let myName = 'Фрилансер по жизни';
let myAge = 36;
let myMessage = 'Живи, а работай в свободное время!';
*/

//-------------------------------------------

//ИЗМЕНЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
/*
let myAge = 36;
myAge = 18;
console.log(myAge);
*/

//-------------------------------------------

//ПЕРЕДАЧА ЗНАЧЕНИЙ ПЕРЕМЕННЫХ
/*
let myAge = 36;
let myNewAge = 18;

//Копируем значение переменной myNewAge
//в переменную myAge

myAge = myNewAge;
console.log(myAge);
*/

//-------------------------------------------

//USE STRICT И ПЕРЕМЕННЫЕ

/*
// "use strict" строгий режим отключен

myAge = 36;
console.log(myAge);
*/

/*
"use strict" //строгий режим включен

let myAge = 36;
console.log(myAge);
*/

//-------------------------------------------

//ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ

/*
//Пример блока инструкций
function testBlock() {
	console.log('Учим');
	console.log('JS');
}
testBlock();

*/

/*
//Видимость переменной только внутри блока инструкций
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock();

console.log(myAge); //Переменная не видна за пределами блока
*/

/*
//Переменные внутри и за пределами блока
let myAge = 36;

function testBlock() {
	let myAge = 18;
	console.log(myAge); //Вывод переменной
}
testBlock();

console.log(myAge); //Вывод переменной
*/


/*
//В рамках одного блока, переменную стоит использовать
//только после её объявления.

//Ошибка, мы не можем использовать
//переменную перед объявлением
console.log(myAge);
let myAge = 18;
*/

/*
//Повторное объявление переменной
//в рамках одногоблока запрещено
//let myAge = 36;
//let myAge = 15; //Ошибка - переменная уже объявлена

//В то же время внутри блока (например цикла) проблем нет
for (let i = 0; i < 3; i++) {
	//Тут своя переменная i
	console.log(i);

}
for (let i = 0; i < 3; i++) {
	//И тут своя переменная i
	console.log(i);
}
*/

//-------------------------------------------

//КОНСТАНТЫ

/*
const myAge = 36;
myAge = 18; //Нельзя изменить константу

*/

/*
//Имена констант с заранее известными значениями
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

//Имя константы со значением присвоенным
//в процессе выполнения программы
const summSizes = 25 + 30;
*/

/*
//Смена значений в константе
//Объект с данными
const userProfile = {
	name: 'Фрилансер',
	age: 36,
	message: 'Живи, а работай в свободное время!'
}
console.log(userProfile);

//Далее я меняю значение одного из полей объекта
userProfile.age = 18;
//Ошибки нет, данные изменились
console.log(userProfile);

*/

//-------------------------------------------

//КЛЮЧЕВОЕ СЛОВО VAR

//Области видимости

/*
//Использование переменной до её объявления

"use strict"

age = 35;
console.log(age);

var age;

*/


/*
function testBlockLet() {
	let myAgeLet = 36;
}
testBlockLet();

//Переменная НЕ видна за пределами блока
//console.log(myAgeLet);

function testBlockVar() {
	var myAgeVar = 36;
}
testBlockVar();

//Переменная НЕ видна за пределами блока
console.log(myAgeVar);
*/

/*
if (true) {
	let sizeLet = 50;
}
//Переменная НЕ видна за пределами блока
//console.log(sizeLet);

if (true) {
	var sizeVar = 50;
}
//Переменная ВИДНА за пределами блока
console.log(sizeVar);
*/

//-------------------------------------------

//Стоит ли каждый раз создавать новую переменную или,
//все таки, переназначать объявленную ранее?


/*
let userName = 'Фрилансер по жизни';

// ... некий код c использованием userName ...

userName = 36;

// ... некий код c использованием userName ...

userName = 'Живи, а работай в свободное время!';

// ... некий код c использованием userName ...

// ????????????

*/

/*
let userName = 'Фрилансер по жизни';
let userAge = 36;
let userMassage = 'Живи, а работай в свободное время!';

// ... некий код c использованием
// userName, userAge, userMassage ...

*/


//-------------------------------------------