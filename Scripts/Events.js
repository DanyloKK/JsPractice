const findMenu = document.querySelector("#menu"); // Получаем родительский элемент <ul>

function highLightElement(event) { // Добавляем параметр event
    if (event.target.closest(".menu-item")) { // Проверяем, был ли клик по элементу <li>
        const items = findMenu.querySelectorAll("li"); // Получаем все элементы <li> внутри <ul>
        items.forEach(item => item.classList.remove("selected")); // Убираем класс "selected" у всех
        event.target.classList.add("selected");
    }
}

findMenu.addEventListener("click", highLightElement);


const findAnotherButton = document.querySelector(`#openModal`);
const findModalMenu = document.querySelector(`.modal `);
const findCross = document.querySelector(`.modal-content .close`)
addEventListener("click", function (event) {
    if (event.target === findAnotherButton) {
        findModalMenu.style.display = "block"
    }
    if (event.target === findCross) {
        findModalMenu.style.display = "none"
    }
    window.addEventListener("click", function (event) {
        if (event.target === findModalMenu) {
            findModalMenu.style.display = "none"
        }//убирает окно при нажатии на любое место
    })
})


const findInput = document.querySelector(`#itemInput`);
const findButton = document.querySelector(`#addButton`);
const findList = document.querySelector(`#itemList`);

document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('itemInput');
    const newItemText = input.value;

    if (newItemText) {
        const li = document.createElement('li');
        li.textContent = newItemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.className = 'delete-button';

        li.appendChild(deleteButton);
        document.getElementById('itemList').appendChild(li);
        input.value = ''; // Очистить поле ввода
    }
});

document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        const li = event.target.parentElement;
        li.remove(); // Удалить элемент списка
    }
});


document.getElementById('itemList1').addEventListener('click', function(event) {
    // Проверяем, является ли кликнутый элемент элементом списка
    if (event.target.tagName === 'LI') {
        // Находим счётчик внутри этого элемента
        const counter = event.target.querySelector('.counter');//указываем именно на тот элемент с классом
        // Увеличиваем значение счётчика на 1
        counter.textContent = parseInt(counter.textContent) + 1;
    }
});
