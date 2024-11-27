"use strict"



const bodyElement = document.body;
console.log(bodyElement)
const childOfElement = bodyElement.childNodes;
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;
console.log(firstChildNode);
console.log(lastChildNode);
for (let node of childOfElement) {
    console.log(node);
}

const checkSibling = bodyElement.previousSibling;
const checkLastSibling = bodyElement.nextSibling;
const checkParent = bodyElement.parentNode;

console.log(checkSibling);
console.log(checkLastSibling);
console.log(checkParent);

const checkChild = bodyElement.children[1];
console.log(checkChild);

const checkElement = bodyElement.firstElementChild;
console.log(checkElement);
const yy = checkElement.children;
console.log(yy);







const list = document.querySelectorAll(`.list`);
console.log(list);
const checkList = document.getElementsByClassName(`list`)
console.log(checkList);


const getElementOfHtml = document.querySelector(`.My_Title`);
const seeElement = getElementOfHtml.innerHTML;
console.log(seeElement);
// Изменякм содержимое и добавлякм вложенности
getElementOfHtml.innerHTML = `<h2>${seeElement}</h2><p>Hello its me!!</p><p>Hello its me!!</p><p>Hello its me!!</p>`;
console.log(getElementOfHtml.innerHTML);
const getElementOfHtml2 = document.querySelector(`h1`);
const newTitle = getElementOfHtml2.innerHTML;
getElementOfHtml2.innerHTML = `Hello my best friend!!!<p class="Greeting">Goodbye</p>`
console.log(seeElement);

const getOneMoreElement = document.querySelector(`#about`);
// Разница от иннер в том что тут мы получаем целый обьект а не только его содержимое
const changeElement = getOneMoreElement.children[0].outerHTML;
console.log(changeElement);
getOneMoreElement.children[0].outerHTML = `<h3>Get it!</h3>`
const changeElementMain = getOneMoreElement.outerHTML;
// Поменяли тэг и все внутри также удалилось
getOneMoreElement.outerHTML = `<aside></aside>`
// Если хотим менять элементы нужно обрщаться к элементу а не к коллекции
const getText = document.querySelector(`.My_Href`);

const changeText = getText.textContent;
console.log(changeText);
//Безопасный способ смены содержимого так как мы не лезем в тэги
getText.textContent = `Not my href`;


const getNeedElement = document.querySelector(`.My_Paragraph`);

const putElement = document.createElement(`span`);

putElement.innerHTML = `Put your message here!`

getNeedElement.before(putElement);

const putDivElement = document.createElement(`div`);

putDivElement.innerHTML = `<h5 class="newH5">Thats a new one!</h5>`

getNeedElement.after(putDivElement);

//Тут не получится вставить элементы с тегами в скобки только элементы заранее созданый и текст
const addQuote = document.createElement(`blockquote`)

addQuote.innerHTML = `Life is life`

putDivElement.prepend(addQuote);
const getElement = document.querySelector(`.First-Div`);
//Можно вставить уже с тэгами сами элементы а не просто текст
const getMyElement = document.querySelector(`.Last_Paragraph`);
getMyElement.insertAdjacentHTML(
    `afterbegin`,
    `Heelloo my baddasss!<span><title>Hey</title>Why are u so sour?</span></span>Why are u so sours?</span>`,
);

getElement.append(getMyElement);

const getArticle = document.querySelector(`.Article`);
const getParagraph = document.querySelector(`.ParagraphOF`);

getArticle.append(getParagraph);

const getList = document.querySelector(`.List`);
const cloneList = getList.cloneNode(true);//Если ставим тру то глубокое клонирование если нет то только верхнее
getArticle.prepend(cloneList);
cloneList.remove();
const childOfList = getList.children[0];
getList.removeChild(childOfList);//Удаляем дочерний элемент но если клонировали то клон вооббще никак не меняется;

const getElems = bodyElement.children[10];
console.log(getElems);
getElems.classList.add(`active`)
getElems.classList.add(`actives`);//Just add class
getElems.classList.remove(`actives`);// Add if have and if does not have delete it

//Проверка на наличие класса
if(getElems.classList.contains(`active`)){
   console.log(`True`)
}else{
    console.log("False")
}

getParagraph.style.color = `Blue`
getParagraph.style.marginTop = `160px`
getParagraph.style.fontSize = `10px`
//Get styles and its values
const getElementStyle = getComputedStyle(getParagraph,"::before");//Can add pseudoelement
console.log(getElementStyle.fontSize);

const input = document.querySelector(`.Input`);
const linka = document.querySelector(`.Linka`);

console.log(linka.href);
console.log(input.value);
console.dir(linka);//Show all classes

console.log(input.hasAttribute(`name`));
input.getAttribute(`name`);
input.setAttribute(`name`,`value`);//Change attribute with other cant create a new one;
linka.removeAttribute(`target`);

//link.hidden - прячет ссылку или что то ещё

console.log(window.innerWidth); // Ширина окна браузера
console.log(navigator.userAgent);




