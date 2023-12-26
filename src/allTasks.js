import createTask from "./todo-factory";

//dom stuff for the all-tasks page
export function createAllQuestsPage() {

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

    const bodyContentContainer = document.getElementById('body-content-container');

    addTaskButton.addEventListener('click', function() {

        //disable button until form is canceled/submitted
        addTaskButton.disabled = true;

        //call create form functions****************

        //adds form to page after button is clicked
        bodyContentContainer.appendChild(formContainer);
    });

    //returns to index.js page
    return { titleElement, addTaskButton };
}

function createFormLayout(formContainer) {

    //create form objects
    const form = document.createElement('form');
    const formLeft = document.createElement('div');
    const formRight = document.createElement('div');
    const formBottom = document.createElement('div');

    //append elements to form
    formContainer.appendChild(form);
    form.appendChild(formLeft);
    form.appendChild(formRight);
    form.appendChild(formBottom);

    //add classes
    form.classList.add('form');
    formLeft.classList.add('form-left');
    formRight.classList.add('form-right');
    formBottom.classList.add('form-bottom');

    return { form, formLeft, formRight, formBottom };
}

function createFormTitle(formLeft) {

    //create title elements
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    const titleInput = document.createElement('input');
    titleInput.setAttribute('placeholder', 'Title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('required', '');

    //append to left side
    formLeft.appendChild(titleLabel);
    formLeft.appendChild(titleInput);
    
    //add class
    titleInput.classList.add('form-title');

    return { titleLabel, titleInput };
}

function createFormDescription(formLeft) {

    //create description elements
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('placeholder', 'Description (optional)');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.rows = 2;

    //append to left side 
    formLeft.appendChild(descriptionLabel);
    formLeft.appendChild(descriptionInput);

    //add class
    descriptionInput.classList.add('form-description');

    return { descriptionLabel, descriptionInput };
}

function createFormDate(formRight) {

    //create date elements
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('name', 'date');

    //append to right side
    formRight.appendChild(dateLabel);
    formRight.appendChild(dateInput);

    //add class
    dateInput.classList.add('form-date');

    return { dateLabel, dateInput };
}

function createFormPrioritySelector(formRight) {

    //create priority selection dropbox and options
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

    //append to right side
    formRight.appendChild(selectLabel);
    formRight.appendChild(selectInput);
    selectInput.appendChild(placeholderOption);
    selectInput.appendChild(option1);
    selectInput.appendChild(option2);
    selectInput.appendChild(option3);

    //add class
    selectInput.classList.add('form-select');

    return { selectLabel, selectInput, placeholderOption, option1, option2, option3 };
}

function createFormButtons(formBottom) {

    //create button elements
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Add';
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.textContent = 'Cancel';

    //append to bottom
    formBottom.appendChild(submitButton);
    submitButton.setAttribute('id', 'submit-button');
    formBottom.appendChild(cancelButton);

    //add classes
    submitButton.classList.add('submit-button')
    cancelButton.classList.add('cancel-button');    

    return { submitButton, cancelButton };
}

export function addTask() {

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const priority = document.getElementsByName('priority-selection').value;

        const newTask = {
            title: title,
            description: description,
            date: date,
            priority: priority,
        };

    tasks.push(newTask);
    return tasks;
}