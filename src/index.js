import './style.css';
import { bodyContentContainer, createAllQuestsPage } from './allTasks.js';
import { tasks, taskCounterObject } from './todo-factory.js';
import { formActionsObject } from './task-form-actions.js';
import { localStorageObject } from './local-storage.js';
import { pageElementsObject } from './page-elements.js';

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
        daysQuestsPage();
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

function daysQuestsPage() {
    //clear the page
    bodyContentContainer.innerHTML = '';

    //import elements
    const titleElement = pageElementsObject.createPageTitle();

    //append tools to page
    bodyContentContainer.appendChild(titleElement);

    //update page title
    titleElement.textContent = `Day's Quests`;
    
    //get today's date
    const today = getTodayDate();

    //filter today's tasks
    let todaysTasks = tasks.filter(task => task.dueDate == today);

    //display filtered array to dom
    formActionsObject.renderTasks(todaysTasks, bodyContentContainer);

    const taskContainer = document.querySelector('.task-container');
    if(!taskContainer) {
        showNoTaskToday(bodyContentContainer);
    }

    return todaysTasks;
}

function showNoTaskToday(bodyContentContainer) {
    const noTaskMessage = document.createElement('div');
    noTaskMessage.classList.add('no-task');
    noTaskMessage.textContent = 'No Quests Due Today';
    bodyContentContainer.appendChild(noTaskMessage);
}

function getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}