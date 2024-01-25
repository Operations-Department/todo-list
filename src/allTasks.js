import { tasks, createTask, getTasks } from "./todo-factory";
import { pageElementsObject } from "./page-elements";
import { taskFormObject } from "./task-form";
import { formActionsObject } from "./task-form-actions";
import { editTasksObject } from "./editTasks";

export const bodyContentContainer = document.getElementById('body-content-container');

//main function to populate the page
export const createAllQuestsPage = {

    titleElement: pageElementsObject.createPageTitle(),
    addTaskButton: pageElementsObject.createAddTaskButton(),
    formContainer: pageElementsObject.createFormContainer(),

    //click to add new task
    addTask() {
        handleAddTask(createAllQuestsPage.addTaskButton, createAllQuestsPage.formContainer);
    },

    //click to mark task complete
    completeTask(event) {
        editTasksObject.handleCompleteTask(event);
    },
    
    //click to delete task
    deleteTask(event) {
        editTasksObject.handleDeleteTask(event);
    },

    //double click to edit tasks
    editTask(event) {
        editTasksObject.handleTaskEdit(event);
    },

    //attach event listeners
    init() {
        this.addTaskButton.addEventListener('click', this.addTask);
        bodyContentContainer.addEventListener('click', this.completeTask);
        bodyContentContainer.addEventListener('click', this.deleteTask);
        bodyContentContainer.addEventListener('dblclick', this.editTask);
    },

    get elements() {
        return { titleElement: this.titleElement, addTaskButton: this.addTaskButton };
    },
};

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