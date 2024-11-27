const body = document.body;
const findId = document.querySelector(`#main-heading`);
const changeText = findId.textContent;
findId.textContent = `Hello world!!`;

const findByClass = document.querySelector(`.Head`);
findByClass.style.color = `Red`;

const findList = document.querySelector(`#item-list`);
const createElement = document.createElement(`li`);
createElement.textContent = `New Item`;
findList.prepend(createElement);

const findImage = document.querySelector(`#image`);
findImage.setAttribute(`src`, `https://via.placeholder.com/1502`);

const findButton = document.querySelector(`#theme-toggle`);
findButton.style.display = `none`;

findList.classList.add(`highlight`);

const changeTag = findId.textContent;
findId.textContent = `My title`;

const findFirstList = findList.children[0];
const findSecondList = findList.children[1];


