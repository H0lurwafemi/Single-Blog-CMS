// 1.  Waiting for the Page to Load:
document.addEventListener('DOMContentLoaded', function () {
    
// 2. Getting the Form and Inputs:
const form = document.getElementById('post-form');
const titleInput = document.getElementById('title-input');
const contentInput = document.getElementById('content-input');
const postsContainer = document.getElementById('posts-container');

// These lines find specific parts of the notebook:
// the form where you write the post, the title input box, the content input box, and the place where all the posts are shown.

// 3. Listening for the Submit Event:
form.addEventListener('submit', function(event) {
    event.preventDefault();
    addPost(titleInput.value, contentInput.value);
    titleInput.value = '';
    contentInput.value = '';
});

// This part listens for when you press the button to add a post.
// When you do, it stops the notebook from doing anything else (event.preventDefault()), and instead, it uses a magic spell(addPost) to create a new post.
// After adding, it clears the input boxes so you can write another post.

// 4. Creating a New Post:
function addPost(title, content) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const postTitle = document.createElement('div');
    postTitle.className = 'post-title';
    postTitle.textContent = title;

    const postContent = document.createElement('div');
    postContent.className = 'post-content';
    postContent.textContent = content;

    const postButtons = document.createElement('div');
    postButtons.className = 'post-buttons';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        editPost(postDiv, postTitle, postContent);
    });

    const deleteButton = document.createElement('button');
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

// addPost(title, content): This is the magic spell that makes a new post. It uses the title and content you wrote.
// const postDiv = document.createElement('div');: Creates a new invisible box for the post.
// postDiv.className = 'post';: Styles the box to look nice.
// const postTitle = document.createElement('div'); postTitle.className = 'post-title'; postTitle.textContent = title;: Creates and styles a box for the title, then puts the title text in it.
// const postContent = document.createElement('div'); postContent.className = 'post-content'; postContent.textContent = content;: Creates and styles a box for the content, then puts the content text in it.
// const postButtons = document.createElement('div'); postButtons.className = 'post-buttons';: Creates a box for buttons to edit and delete the post.
// const editButton = document.createElement('button'); editButton.textContent = 'Edit';: Makes an edit button.
// editButton.addEventListener('click', function() { editPost(postDiv, postTitle, postContent); });: Adds a spell to the edit button to change the post when clicked.
// const deleteButton = document.createElement('button'); deleteButton.textContent = 'Delete';: Makes a delete button.
// deleteButton.addEventListener('click', function() { deletePost(postDiv); });: Adds a spell to the delete button to remove the post when clicked.
// postButtons.appendChild(editButton); postButtons.appendChild(deleteButton);: Puts the buttons inside the buttons box.
// postDiv.appendChild(postTitle); postDiv.appendChild(postContent); postDiv.appendChild(postButtons);: Puts the title, content, and buttons into the post box.
// postsContainer.appendChild(postDiv);: Puts the post box into the notebook.


    // 5. Editing a Post:
function editPost(postDiv, postTitle, postContent) {
    const newTitle = prompt('Edit title:', postTitle.textContent);
    const newContent = prompt('Edit content:', postContent.textContent);

    if (newTitle !== null) postTitle.textContent = newTitle;
    if (newContent !== null) postContent.textContent = newContent;
}

// a. Starting the Edit Function:
function editPost(postDiv, postTitle, postContent) {
// This line defines a function called editPost which will be used to edit a post.
// The function takes three things: the whole post box(postDiv), the title box(postTitle), and the content box(postContent).

// b. Asking for New Title:
const newTitle = prompt('Edit title:', postTitle.textContent);

// prompt('Edit title:', postTitle.textContent): This shows a little window that asks you to type a new title. It starts with the current title already in the box.
// const newTitle = ...: This saves whatever you type into the new title.

// c. Asking for New Content:
const newContent = prompt('Edit content:', postContent.textContent);

// prompt('Edit content:', postContent.textContent): This shows another window that asks you to type new content. It starts with the current content already in the box.
// const newContent = ...: This saves whatever you type into the new content.

// d.  Updating the Title:
if (newTitle !== null) postTitle.textContent = newTitle;

// This checks if you actually typed something new. If you did, it changes the title to the new title.

// e. Updating the Content:
if (newContent !== null) postContent.textContent = newContent;

// This checks if you typed something new for the content. If you did, it changes the content to the new content.

// 6. Deleting a Post

// a. Code for Deleting a Post
function deletePost(postDiv) {
    postsContainer.removeChild(postDiv);
}

// Explanation:
// b. Starting the Delete Function:
function deletePost(postDiv) {

    // This line defines a function called deletePost which will be used to delete a post.
// The function takes one thing: the whole post box(postDiv).
    
// c. Removing the Post:
postsContainer.removeChild(postDiv);

// postsContainer: This is the place where all the posts are kept (like a big box for all posts).
// removeChild(postDiv): This tells the big box to remove the specific post box (postDiv).