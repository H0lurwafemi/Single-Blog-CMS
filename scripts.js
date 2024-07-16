document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task === '') return;

        const li = document.createElement('li');
        li.className = 'task';
        li.appendChild(document.createTextNode(task));

        const deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('X'));
        deleteBtn.className = 'delete';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
    }
});


// document.addEventListener('DOMContentLoaded', function() { ... });: Ensures the DOM is fully loaded before running the script.
// const form = document.getElementById('task-form');: Selects the form element by its ID.
// const taskInput = document.getElementById('task-input');: Selects the input field by its ID.
// const taskList = document.getElementById('task-list');: Selects the task list element by its ID.
// form.addEventListener('submit', function(event) { ... });: Adds an event listener to the form for the submit event.
// event.preventDefault();: Prevents the form from submitting the traditional way.
// addTask(taskInput.value);: Calls the addTask function with the input value.
// taskInput.value = '';: Clears the input field.
// function addTask(task) { ... }: Defines the addTask function.
// if (task === '') return;: Returns early if the task is an empty string.
// const li = document.createElement('li');: Creates a new li element.
// li.className = 'task';: Sets the class name of the li element.
// li.appendChild(document.createTextNode(task));: Adds the task text to the li element.
// const deleteBtn = document.createElement('button');: Creates a new button element.
// deleteBtn.appendChild(document.createTextNode('X'));: Adds text to the delete button.
// deleteBtn.className = 'delete';: Sets the class name of the delete button.
// deleteBtn.addEventListener('click', function() { ... });: Adds an event listener to the delete button for the click event.
// taskList.removeChild(li);: Removes the task item from the task list.
// li.appendChild(deleteBtn);: Adds the delete button to the task item.
// li.addEventListener('click', function() { ... });: Adds an event listener to the task item for the click event.
// li.classList.toggle('completed');: Toggles the completed class on the task item.
// taskList.appendChild(li);: Adds the task item to the task list.