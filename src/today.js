import { bodyContentContainer } from './allTasks.js';
import { tasks } from './todo-factory.js';
import { formActionsObject } from './task-form-actions.js';
import { pageElementsObject } from './page-elements.js';

//load the day's quest page
export const daysQuestObject = {
    
    daysQuestPage() {
        //clear the page
        bodyContentContainer.innerHTML = '';

        //import elements
        const titleElement = pageElementsObject.createPageTitle();

        //append tools to page
        bodyContentContainer.appendChild(titleElement);

        let currentDate = new Date();
        let todaysDate = currentDate.getDate();
        let thisMonth = new Date().toLocaleString('en-US', { month: 'short' });
        let thisYear = currentDate.getFullYear();

        //update page title
        titleElement.textContent = `Day's Quests:  ${todaysDate} ${thisMonth} ${thisYear}`;
        
        //get today's date
        const today = daysQuestObject.getTodayDate();

        //filter today's tasks
        let todaysTasks = tasks.filter(task => task.dueDate == today);

        //display filtered array to dom
        formActionsObject.renderTasks(todaysTasks, bodyContentContainer);

        const taskContainer = document.querySelector('.task-container');
        if(!taskContainer) {
            daysQuestObject.showNoTaskToday(bodyContentContainer);
        }

        return todaysTasks;
    },

    showNoTaskToday(bodyContentContainer) {
        const noTaskMessage = document.createElement('div');
        noTaskMessage.classList.add('no-task');
        noTaskMessage.textContent = 'No Quests Due Today';
        bodyContentContainer.appendChild(noTaskMessage);

        return noTaskMessage;
    },

    getTodayDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }
};