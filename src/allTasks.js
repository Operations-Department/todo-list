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

    //create form-container
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    //here
    const bodyContentContainer = document.getElementById('body-content-container');

    addTaskButton.addEventListener('click', function() {
        //disable button until form is canceled/submitted
        addTaskButton.disabled = true;

        //form layout
        const form = document.createElement('form');
        const formLeft = document.createElement('div');
        const formRight = document.createElement('div');
        const formBottom = document.createElement('div');

        //title of todo item
        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        const titleInput = document.createElement('input');
        titleInput.setAttribute('placeholder', 'Title');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        titleInput.setAttribute('name', 'title');
        titleInput.setAttribute('required', '');

        //description of todo
        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        const descriptionInput = document.createElement('textarea');
        descriptionInput.setAttribute('placeholder', 'Description (optional)');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('id', 'description');
        descriptionInput.setAttribute('name', 'description');
        descriptionInput.rows = 2;

        //due date of todo
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'date');
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('name', 'date');

        //priority todo selector
        const selectLabel = document.createElement('label');
        selectLabel.setAttribute('for', 'priority-selection');
        const selectInput = document.createElement('select');
        selectInput.setAttribute('id', 'priority-selection');
        const placeholderOption = document.createElement('option');
        placeholderOption.text = 'Priority';
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        const option1 = document.createElement('option');
        option1.value = 'low';
        option1.text = 'Low';
        const option2 = document.createElement('option');
        option2.value = 'medium';
        option2.text = 'Medium';
        const option3 = document.createElement('option');
        option3.value = 'high';
        option3.text = 'High';

        //submit/add and cancel buttons
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'cancel');
        cancelButton.textContent = 'Cancel';

        //adds form to page after button is clicked
        bodyContentContainer.appendChild(formContainer);

        //append elements to form and add classes
        formContainer.appendChild(form);
        form.appendChild(formLeft);
        form.appendChild(formRight);
        form.appendChild(formBottom);

        form.classList.add('form');
        formLeft.classList.add('form-left');
        formRight.classList.add('form-right');
        formBottom.classList.add('form-bottom');
        formLeft.appendChild(titleLabel);
        formLeft.appendChild(titleInput);
        titleInput.classList.add('form-title');

        formLeft.appendChild(descriptionLabel);
        formLeft.appendChild(descriptionInput);
        descriptionInput.classList.add('form-description');

        formRight.appendChild(dateLabel);
        formRight.appendChild(dateInput);
        dateInput.classList.add('form-date');

        formRight.appendChild(selectLabel);
        formRight.appendChild(selectInput);
        selectInput.appendChild(placeholderOption);
        selectInput.appendChild(option1);
        selectInput.appendChild(option2);
        selectInput.appendChild(option3);
        selectInput.classList.add('form-select');

        formBottom.appendChild(submitButton);
        submitButton.classList.add('submit-button')
        formBottom.appendChild(cancelButton);
        cancelButton.classList.add('cancel-button');
        formBottom.classList.add('form-bottom');
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
    return [titleElement, addTaskButton];
}