import { tasks, createTask, getTasks } from "./todo-factory";

//object to store functions related to task creation / form submission
export const formActionsObject = {

    attachSubmitListener(submitButton, cancelButton, formContainer, addTaskButton) {

        submitButton.addEventListener('click', function(event) {
            event.preventDefault();

            const titleInput = document.getElementById('title').value.trim();

            if (!titleInput) {
                alert ('Please fill in the title');
                return;
            }

            formActionsObject.addTask();
            const tasks = getTasks();
            formActionsObject.updateTaskList(tasks);
            addTaskButton.disabled = false;
            formActionsObject.removeForm(formContainer);
        });
    },

    attachCancelListener(submitButton, cancelButton, formContainer, addTaskButton) {

        cancelButton.addEventListener('click', function() {
            addTaskButton.disabled = false;
            formActionsObject.removeForm(formContainer);
        });
    },
    
    updateTaskList(tasks) {

        const bodyContentContainer = document.getElementById('body-content-container');
        const taskContainer = document.createElement('div');
        const addTaskButton = document.getElementById('add-task-button');
        bodyContentContainer.appendChild(taskContainer);
        bodyContentContainer.appendChild(addTaskButton);
    
        tasks.forEach(task => {
            taskContainer.innerHTML = '';
            
            const taskElementLeft = document.createElement('div');
            const taskElementRight = document.createElement('div');
    
            taskElementLeft.innerHTML = `
                <button id="task-complete-button" class="task-complete-button"></button>
                <h2 class="task-title">${task.title}</h2>
                <p class="task-description">${task.description}</p>
                `;
            taskElementRight.innerHTML = `
                <p class="task-due-date">${task.dueDate}</p>
                <button class="task-delete">delete</button>
                `;
    
            taskContainer.appendChild(taskElementLeft);
            taskContainer.appendChild(taskElementRight);
            taskContainer.setAttribute('data-task-id', task.taskID);
            taskContainer.classList.add('task-container');
            taskElementLeft.classList.add('task-element-left');
            taskElementRight.classList.add('task-element-right');
        });    
    },
    
    removeForm(formContainer) {

        const bodyContentContainer = document.getElementById('body-content-container');
        formContainer.removeChild(formContainer.firstChild);
        bodyContentContainer.removeChild(formContainer);
    },

    //called by submit button to put task onto page
    addTask() {

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('date').value;
        // const priority = document.getElementById('priority-selection').value;

        const newTask = createTask(title, description, dueDate);

        return newTask;
    }
}