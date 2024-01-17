import './style.css';
import { createAllQuestsPage } from './allTasks.js';
import { tasks } from './todo-factory.js';
import { formActionsObject } from './task-form-actions.js';
import { localStorageObject } from './local-storage.js';

document.addEventListener('DOMContentLoaded', allQuestsPage);

function allQuestsPage() {
    //import task creation tools
    const { titleElement, addTaskButton } = createAllQuestsPage();

    //append tools to page
    const content = document.getElementById('body-content-container');
    content.appendChild(titleElement);
    content.appendChild(addTaskButton);

    const retrievedTasks = localStorageObject.getTasksFromLocalStorage();

    tasks.length = 0;
    tasks.push(...retrievedTasks);

    formActionsObject.updateTaskList(tasks);
}