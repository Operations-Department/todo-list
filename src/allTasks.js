import { tasks, createTask, getTasks } from "./todo-factory";
import { pageElementsObject } from "./page-elements";
import { taskFormObject } from "./task-form";
import { formActionsObject } from "./task-form-actions";

//main function to populate the page
export function createAllQuestsPage() {
    const titleElement = pageElementsObject.createPageTitle();
    const addTaskButton = pageElementsObject.createAddTaskButton();
    const formContainer = pageElementsObject.createFormContainer();

    addTaskButton.addEventListener('click', function() {
        handleAddTaskClick(addTaskButton, formContainer);
    });

    return { titleElement, addTaskButton };
}

//creates form when add task clicked
function handleAddTaskClick(addTaskButton, formContainer) {
    addTaskButton.disabled = true;

    const { form, formLeft, formRight, formBottom } = taskFormObject.createFormLayout(formContainer);
    const bodyContentContainer = document.getElementById('body-content-container');
    bodyContentContainer.appendChild(formContainer);
    formContainer.appendChild(form);

    //call form functions to fill in the form...
    taskFormObject.createFormTitle(formLeft);
    taskFormObject.createFormDescription(formLeft);
    taskFormObject.createFormDate(formRight);

    // taskFormObject.createFormPrioritySelector(formRight);
    const { submitButton, cancelButton } = taskFormObject.createFormButtons(formBottom);

    //attach event listeners to created submit/cancel buttons
    formActionsObject.attachSubmitListener(submitButton, cancelButton, formContainer, addTaskButton);
    formActionsObject.attachCancelListener(submitButton, cancelButton, formContainer, addTaskButton);
}

const bodyContentContainer = document.getElementById('body-content-container');

bodyContentContainer.addEventListener('click', function(event) {

    if(event.target.classList.contains('task-complete-button')) {

        //extract parent elements
        const taskContainer = event.target.closest('.task-container');
        const taskElementLeft = event.target.closest('.task-element-left');

        //extract title and desc. of the dom element
        const domTitle = taskElementLeft.querySelector('.task-title');
        const domDescription = taskElementLeft.querySelector('.task-description');

        const clickedTask = tasks.find(task => {

            //extract task id from dom and object
            const taskID = task.taskID;
            const taskContainerID = parseInt(taskContainer.dataset.taskId);

            //compare to make sure only the clicked element is affected
            return taskID == taskContainerID;
        });

        //update task status
        clickedTask.status = 'complete';

        //css to display completed status
        taskContainer.classList.add('completed-task');
        event.target.classList.add('completed-checked');
        domTitle.classList.add('completed-task-text');
        domDescription.classList.add('completed-task-text');
    }
});