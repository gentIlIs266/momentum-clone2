const toDoForm = document.querySelector("#todo__form");
const doc_toDoList = document.querySelector("#todo__list");
let toDolists = [];
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDolists));
}   
function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
    toDolists = toDolists.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo (newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newToDo.id;
    span.textContent = newToDo.text;
    button.textContent = "X";
    span.classList.add("todo__list-set");
    button.classList.add("todo__button-set");
    li.appendChild(span);
    li.appendChild(button);
    doc_toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo);
}
function toDoSubmitObserver (event) {
    event.preventDefault();
    const toDoInput = toDoForm.querySelector("input");
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDoInput.value = null;
    toDolists.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos()
} toDoForm.addEventListener("submit", toDoSubmitObserver);
const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDolists = parsedToDos;
    parsedToDos.forEach(paintToDo);
}