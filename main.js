window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const todoList = document.querySelector('#todo-list');

    console.log("Init name is " + nameInput);
    console.log("Alt log");
})

