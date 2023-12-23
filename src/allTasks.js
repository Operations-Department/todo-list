import createTask from "./todo-factory";

//dom stuff for the all-tasks page
export default function displayAllTasks() {

    //title of the page
    const titleElement = document.createElement('h1');
    titleElement.innerHTML = 'All Quests';
    titleElement.classList.add('body-title');

    //add task button
    const addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = '|+| Add Quest';

    //create form 
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    addTaskButton.addEventListener('click', function() {
        addTaskButton.disabled = true;

        const form = document.createElement('form');

        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        const titleInput = document.createElement('input');
        titleInput.setAttribute('placeholder', 'Title');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        titleInput.setAttribute('name', 'title');
        titleInput.setAttribute('required', '');

        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        const descriptionInput = document.createElement('textarea');
        descriptionInput.setAttribute('placeholder', 'Description (optional)');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('id', 'description');
        descriptionInput.setAttribute('name', 'description');
        descriptionInput.rows = 2;

        formContainer.appendChild(form);

        form.classList.add('form');
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        titleInput.classList.add('form-title');

        form.appendChild(descriptionLabel);
        form.appendChild(descriptionInput);
        descriptionInput.classList.add('form-description');
    });









    //container; hold task/quest
    // const taskContainer = document.createElement('div');
    // taskContainer.classList.add('task-container');

    // //event listener; add task to task container
    // submitButton.addEventListener('click', function() {
    //     const task = document.createElement('div');
    //     task.textContent = `${createTask.title}, ${createTask.description}, ${createTask.dueDate}, ${createTask.priority}, ${createTask.status}`;
    //     task.classList.add('tasks')
    //     taskContainer.appendChild(task);
    // });

    //returns to index.js page
    return [titleElement, formContainer, addTaskButton];
}