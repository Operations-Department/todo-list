import { tasks, createTask, getTasks } from "./todo-factory";
import { pageElementsObject } from "./page-elements";
import { taskFormObject } from "./task-form";
import { formActionsObject } from "./task-form-actions";

const bodyContentContainer = document.getElementById('body-content-container');

//main function to populate the page
export function createAllQuestsPage() {
    const titleElement = pageElementsObject.createPageTitle();
    const addTaskButton = pageElementsObject.createAddTaskButton();
    const formContainer = pageElementsObject.createFormContainer();

    //click to add new task
    addTaskButton.addEventListener('click', function() {
        handleAddTaskClick(addTaskButton, formContainer);
    });

    //click to toggle task completion
    bodyContentContainer.addEventListener('click', function(event) {
        handleCompleteTaskClick(event);
    });

    //click to delete task
    bodyContentContainer.addEventListener('click', function(event) {
        handleDeleteTaskClick(event);
    });

    return { titleElement, addTaskButton };
}

//creates the task creation form
function handleAddTaskClick(addTaskButton, formContainer) {
    addTaskButton.disabled = true;

    const { form, formLeft, formRight, formBottom } = taskFormObject.createFormLayout(formContainer);
    bodyContentContainer.appendChild(formContainer);
    formContainer.appendChild(form);

    //call form functions to fill in the form...
    taskFormObject.createFormTitle(formLeft);
    taskFormObject.createFormDescription(formLeft);
    taskFormObject.createFormDate(formRight);
    taskFormObject.createFormPrioritySelector(formRight);
    const { submitButton, cancelButton } = taskFormObject.createFormButtons(formBottom);

    //attach event listeners to created submit/cancel buttons
    formActionsObject.attachSubmitListener(submitButton, cancelButton, formContainer, addTaskButton);
    formActionsObject.attachCancelListener(submitButton, cancelButton, formContainer, addTaskButton);
}

//matches id of task object and dom element
function findClickedTask(event) {
    const taskComplete = event.target.classList.contains('task-complete-button');

    if (taskComplete) {
        const taskContainer = event.target.closest('.task-container');
        const taskContainerID = parseInt(taskContainer.dataset.taskId);

        return tasks.find(task => task.taskID == taskContainerID);
    }
        
    return null; //if no task found
}

//toggles task between complete and incomplete
function handleCompleteTaskClick(event) {
    const clickedTask = findClickedTask(event);

    if (clickedTask) {
        const taskContainer = event.target.closest('.task-container');
        const taskElementLeft = event.target.closest('.task-element-left');
        const domTitle = taskElementLeft.querySelector('.task-title');
        const domDescription = taskElementLeft.querySelector('.task-description');

        if (clickedTask.status === 'incomplete') return isComplete(clickedTask, taskContainer, event, domTitle, domDescription);
        if (clickedTask.status === 'complete') return isIncomplete(clickedTask, taskContainer, event, domTitle, domDescription);
    }
}

//deletes object in task array and removes dom display element
function handleDeleteTaskClick(event) {
    const taskDelete = event.target.classList.contains('task-delete');
    const taskContainer = event.target.closest('.task-container');

    if (taskDelete) {
        const taskContainerID = parseInt(taskContainer.dataset.taskId);

        const indexToRemove = tasks.findIndex(task => task.taskID === taskContainerID);

        tasks.splice(indexToRemove, 1);
        bodyContentContainer.removeChild(taskContainer);
    }
}

//changes status + dom to complete
function isComplete(task, taskContainer, event, domTitle, domDescription) {

    //update task object status
    task.status = 'complete';

    //css to display completed status
    taskContainer.classList.add('completed-task');
    event.target.classList.add('completed-checked');
    domTitle.classList.add('completed-task-text');
    domDescription.classList.add('completed-task-text');
}

//changes status + dom to incomplete
function isIncomplete(task, taskContainer, event, domTitle, domDescription) {

    //update task object status
    task.status = 'incomplete';

    //css to display completed status
    taskContainer.classList.remove('completed-task');
    event.target.classList.remove('completed-checked');
    domTitle.classList.remove('completed-task-text');
    domDescription.classList.remove('completed-task-text');
}