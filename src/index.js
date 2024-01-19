import './style.css';
import { bodyContentContainer, createAllQuestsPage } from './allTasks.js';
import { tasks, taskCounterObject } from './todo-factory.js';
import { formActionsObject } from './task-form-actions.js';
import { localStorageObject } from './local-storage.js';
import { editTasksObject } from './editTasks.js';

const allQuests = document.getElementById('all-quests');
const daysQuests = document.getElementById('days-quests');
// const weeksQuests = document.getElementById('weeks-quests');

document.addEventListener('DOMContentLoaded', allQuestsPage);
allQuests.addEventListener('click', allQuestsPage);

daysQuests.addEventListener('click', daysQuestsPage);

function allQuestsPage() {
    //import task creation tools
    const { titleElement, addTaskButton } = createAllQuestsPage();

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
}

function daysQuestsPage() {
    //import elements
    const { titleElement } = createAllQuestsPage();

    //clear the page
    bodyContentContainer.innerHTML = '';

    //append tools to page
    bodyContentContainer.appendChild(titleElement);

    //update page title
    titleElement.textContent = `Day's Quests`;
    
    //get today's date
    const today = getTodayDate();

    //filter today's tasks
    let todaysTasks = tasks.filter((task => task.dueDate == today));

    //dipslay to dom
    formActionsObject.renderTasks(todaysTasks, bodyContentContainer);
}

function getTodayDate() {

    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}