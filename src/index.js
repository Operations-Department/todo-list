import './style.css';
import { bodyContentContainer, createAllQuestsPage } from './allTasks.js';
import { tasks, taskCounterObject } from './todo-factory.js';
import { formActionsObject } from './task-form-actions.js';
import { localStorageObject } from './local-storage.js';
import { daysQuestObject } from './today.js';
import { weeksQuestObject } from './thisWeek.js';

const sideBarMenu = document.getElementById('home-tasks');
const allQuestsTab = document.querySelector('.all-quests');
const daysQuestTab = document.querySelector('.days-quests');
const weeksQuestTab = document.querySelector('.weeks-quests');

document.addEventListener('DOMContentLoaded', function() {
    //load all tasks page first
    allQuestsPage();

    //show selected menu tab
    allQuestsTab.classList.add('menu-selected');
    
    //initialize the event listeners
    createAllQuestsPage.init();
});

sideBarMenu.addEventListener('click', function(event) {
    if (event.target.classList.contains('all-quests')) {
        allQuestsPage();

        //show selected menu tab
        addClass(event);

        //remove selected menu tab
        daysQuestTab.classList.remove('menu-selected');
        weeksQuestTab.classList.remove('menu-selected');
    }
    if (event.target.classList.contains('days-quests')) {
        daysQuestObject.daysQuestPage();

        //show selected menu tab
        addClass(event);

        //remove selected menu tab
        allQuestsTab.classList.remove('menu-selected');
        weeksQuestTab.classList.remove('menu-selected');
    }
    if (event.target.classList.contains('weeks-quests')) {
        weeksQuestObject.weeksQuestPage();

        //show selected menu tab
        addClass(event);

        //remove selected menu tab
        allQuestsTab.classList.remove('menu-selected');
        daysQuestTab.classList.remove('menu-selected');
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

    //sort tasks in order on page load
    sortTasksByDate(tasks);

    formActionsObject.updateTaskList(tasks);

    return tasks;
}

function addClass(event) {
    event.target.classList.add('menu-selected');
}

export function sortTasksByDate(tasks) {
    return  tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}