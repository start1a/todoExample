const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS = 'todos';
let toDos = [];

// save
const saveTodos = () => {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

const paintToDo = (newTodo) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    li.id = newTodo.id;
    span.innerText = newTodo.text;
    button.innerText = 'X';

    button.addEventListener('click', deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);    
}

const handleToDoSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
        text: toDoInput.value,
        id: Date.now()
    };
    toDoInput.value = '';

    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

// delete
const deleteToDo = (e) => {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();
}


// init
const savedTodos = localStorage.getItem(TODOS);
if (savedTodos) {
    console.log(`parse: ${savedTodos}`);
    toDos = JSON.parse(savedTodos);
    toDos.forEach(paintToDo);
    console.log(toDos);
}