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

// a.  Waiting for the Page to Load:
document.addEventListener('DOMContentLoaded', function () {
    
    // This line tells the browser to wait until the whole web page is ready before running the rest of the code.
    // It's like waiting for your notebook to open before you start writing in it.

//b.  Finding Important Parts of the Page:
    
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


// These lines find specific parts of the web page:

// form is where you write your task.
// taskInput is the box where you type your task.
// taskList is the place where all the tasks will be shown.

// c. Listening for the Form Submission:

form.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
});

// This part listens for when you press the button to add a task:

// When you press the button, it stops the page from doing anything else (event.preventDefault()).
// It uses a function (addTask) to create a new task with the text you typed in the box.
// After adding the task, it clears the input box so you can write another task.


// d. Creating a New Task:
function addTask(task) {
    if (task === '') return;

//     This function (addTask) creates a new task:

// It first checks if the task is empty. If it is, it does nothing (return).


// Making a New List Item:
    const li = document.createElement('li');
    li.className = 'task';
    li.appendChild(document.createTextNode(task));

//     const li = document.createElement('li');: This makes a new list item (<li>) for the task.
// li.className = 'task';: This gives the list item a class name so we can style it with CSS.
// li.appendChild(document.createTextNode(task));: This puts the text of the task inside the list item.


// e . Creating a Delete Button:

    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

//     const deleteBtn = document.createElement('button');: This makes a new button for deleting the task.
// deleteBtn.appendChild(document.createTextNode('X'));: This puts an "X" on the button to show it's for deleting.
// deleteBtn.className = 'delete';: This gives the button a class name so we can style it with CSS.
// deleteBtn.addEventListener('click', function() { taskList.removeChild(li); });: This tells the button to remove the task when clicked.


// f Adding the Delete Button to the Task:

    li.appendChild(deleteBtn);

// This adds the delete button to the list item.
    
// g. Marking a Task as Completed:

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

//     This adds a way to mark a task as completed when you click on it:

// li.addEventListener('click', function() { li.classList.toggle('completed'); });: This tells the list item to toggle (add/remove) the completed class when clicked, which can change how the task looks (like crossing it out).

// h. Adding the Task to the List:
    taskList.appendChild(li);

    This adds the new task (list item) to the list of tasks.