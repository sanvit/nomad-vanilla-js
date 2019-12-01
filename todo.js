const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = form.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function handleSubmit(event)

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        
    }
}

function hand

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit
}

init();