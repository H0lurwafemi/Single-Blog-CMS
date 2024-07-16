


document.addEventListener('DOMContentLoaded', function () {
    // waiting for the browser to LOAD
    let form = document.getElementById('post-form');
    let titleInput = document.getElementById('title-input');
    let contentInput = document.getElementById('content-input');
    let postsContainer = document.getElementById('posts-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addPost(titleInput.value, contentInput.value);
        titleInput.value = '';
        contentInput.value = '';
    });

    function addPost(title, content) {
        let postDiv = document.createElement('div');
        postDiv.className = 'post';

        let postTitle = document.createElement('div');
        postTitle.className = 'post-title';
        postTitle.textContent = title;

        let postContent = document.createElement('div');
        postContent.className = 'post-content';
        postContent.textContent = content;

        let postButtons = document.createElement('div');
        postButtons.className = 'post-buttons';

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editPost(postDiv, postTitle, postContent);
        });

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deletePost(postDiv);
        });

        postButtons.appendChild(editButton);
        postButtons.appendChild(deleteButton);

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postDiv.appendChild(postButtons);

        postsContainer.appendChild(postDiv);
    }

    function editPost(postDiv, postTitle, postContent) {
        let newTitle = prompt('Edit title:', postTitle.textContent);
        let newContent = prompt('Edit content:', postContent.textContent);

        if (newTitle !== null) postTitle.textContent = newTitle;
        if (newContent !== null) postContent.textContent = newContent;
    }

    function deletePost(postDiv) {
        postsContainer.removeChild(postDiv);
    }
});




















// document.addEventListener('DOMContentLoaded', function() { ... });: Ensures the DOM is fully loaded before running the script.
// const form = document.getElementById('post-form');: Selects the form element by its ID.
// const titleInput = document.getElementById('title-input');: Selects the title input field by its ID.
// const contentInput = document.getElementById('content-input');: Selects the content input field by its ID.
// const postsContainer = document.getElementById('posts-container');: Selects the posts container element by its ID.
// form.addEventListener('submit', function(event) { ... });: Adds an event listener to the form for the submit event.
// event.preventDefault();: Prevents the form from submitting the traditional way.
// addPost(titleInput.value, contentInput.value);: Calls the addPost function with the input values.
// titleInput.value = '';: Clears the title input field.
// contentInput.value = '';: Clears the content input field.
// function addPost(title, content) { ... }: Defines the addPost function.
// const postDiv = document.createElement('div');: Creates a new div element for the post.
// postDiv.className = 'post';: Sets the class name of the post div.
// const postTitle = document.createElement('div');: Creates a new div element for the post title.
// postTitle.className = 'post-title';: Sets the class name of the post title div.
// postTitle.textContent = title;: Sets the text content of the post title div.
// const postContent = document.createElement('div');: Creates a new div element for the post content.
// postContent.className = 'post-content';: Sets the class name of the post content div.
// postContent.textContent = content;: Sets the text content of the post content div.
// const postButtons = document.createElement('div');: Creates a new div element for the post buttons.
// postButtons.className = 'post-buttons';: Sets the class name of the post buttons div.
// const editButton = document.createElement('button');: Creates a new button element for editing.
// editButton.textContent = 'Edit';: Sets the text content of the edit button.
// editButton.addEventListener('click', function() { ... });: Adds a click event listener to the edit button.
// editPost(postDiv, postTitle, postContent);: Calls the editPost function with the post elements.
// const deleteButton = document.createElement('button');: Creates a new button element for deleting.
// deleteButton.textContent = 'Delete';: Sets the text content of the delete button.
// deleteButton.addEventListener('click', function() { ... });: Adds a click event listener to the delete button.
// deletePost(postDiv);: Calls the deletePost function with the post div.
// postButtons.appendChild(editButton);: Appends the edit button to the post buttons div.
// postButtons.appendChild(deleteButton);: Appends the delete button to the post buttons div.
// postDiv.appendChild(postTitle);: Appends the post title div to the post div.
// postDiv.appendChild(postContent);: Appends the post content div to the post div.
// postDiv.appendChild(postButtons);: Appends the post buttons div to the post div.
// postsContainer.appendChild(postDiv);: Appends the post div to the posts container.
// function editPost(postDiv, postTitle, postContent) { ... }: Defines the editPost function.
// const newTitle = prompt('Edit title:', postTitle.textContent);: Prompts the user to edit the title.
// const newContent = prompt('Edit content:', postContent.textContent);: Prompts the user to edit the content.
// if (newTitle !== null) postTitle.textContent = newTitle;: Updates the post title if a new title is provided.
// if (newContent !== null) postContent.textContent = newContent;: Updates the post content if new content is provided.
// function deletePost(postDiv) { ... }: Defines the deletePost function.
// postsContainer.removeChild(postDiv);: Removes the post div from the posts container.



// JavaScript Concepts Used
// Event Listeners: Used to listen for form submission and button clicks.
// DOM Manipulation: Creating, updating, and deleting HTML elements dynamically.
// Functions: Used to encapsulate code for adding, editing, and deleting posts.
// Prompt: Used to get input from the user for editing posts.
// Conditional Statements: Used to check if the user provided new title or content before updating the post.
// This project will help you understand the basics of web development and how to make a simple, interactive application using HTML, CSS, and JavaScript.