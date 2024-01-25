import './style.css';
import { bodyContentContainer, createAllQuestsPage } from './allTasks.js';
import { tasks, taskCounterObject } from './todo-factory.js';
import { formActionsObject } from './task-form-actions.js';
import { localStorageObject } from './local-storage.js';
import { daysQuestObject } from './today.js';
import { weeksQuestObject } from './thisWeek.js';

document.addEventListener('DOMContentLoaded', function() {

    allQuestsPage();
    
    //initialize the event listeners
    createAllQuestsPage.init();

});

const sideBarMenu = document.getElementById('home-tasks');

sideBarMenu.addEventListener('click', function(event) {
    if (event.target.classList.contains('all-quests')) {
        allQuestsPage();
    }
    if (event.target.classList.contains('days-quests')) {
        daysQuestObject.daysQuestPage();
    }
    if (event.target.classList.contains('weeks-quests')) {
        weeksQuestObject.weeksQuestPage();
    }
});

function allQuestsPage() {
    //clear the page
    bodyContentContainer.innerHTML = '';

    //import task page elements
    const { titleElement, addTaskButton } = createAllQuestsPage.elements;

    //append tools to page
    bodyContentContainer.appendChild(titleElement);
    bodyContentContainer.appendChild(addTaskButton);

    const retrievedTasks = localStorageObject.getTasksFromLocalStorage();

    tasks.length = 0;
    tasks.push(...retrievedTasks);

    //prevent counter from starting with wrong id number on page reload
    if (tasks.length !== 0) {
        let previousTaskId = tasks[tasks.length - 1].taskID;
        taskCounterObject.taskCounter = previousTaskId + 1;
    }

    formActionsObject.updateTaskList(tasks);
    return tasks;
}