import './style.css';
import { createAllQuestsPage } from './allTasks.js';
import { tasks, taskCounterObject } from './todo-factory.js';
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

    //prevent counter from starting with wrong id number on page reload
    if (tasks.length !== 0) {
        let previousTaskId = tasks[tasks.length - 1].taskID;
        taskCounterObject.taskCounter = previousTaskId + 1;
    }

    formActionsObject.updateTaskList(tasks);
}