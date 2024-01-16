import { tasks, createTask, getTasks } from "./todo-factory";
import { pageElementsObject } from "./page-elements";
import { taskFormObject } from "./task-form";
import { formActionsObject } from "./task-form-actions";
import { editTasksObject } from "./editTasks";

export const bodyContentContainer = document.getElementById('body-content-container');

//main function to populate the page
export function createAllQuestsPage() {
    const titleElement = pageElementsObject.createPageTitle();
    const addTaskButton = pageElementsObject.createAddTaskButton();
    const formContainer = pageElementsObject.createFormContainer();

    //click to add new task
    addTaskButton.addEventListener('click', function() {
        handleAddTask(addTaskButton, formContainer);
    });

    //click to toggle task completion
    bodyContentContainer.addEventListener('click', function(event) {
        editTasksObject.handleCompleteTask(event);
    });

    //click to delete task
    bodyContentContainer.addEventListener('click', function(event) {
        editTasksObject.handleDeleteTask(event);
    });

    //click to edit tasks
    bodyContentContainer.addEventListener('dblclick', function(event) {
        editTasksObject.handleTaskEdit(event)
    });

    return { titleElement, addTaskButton };
}

//creates the task creation form
function handleAddTask(addTaskButton, formContainer) {
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