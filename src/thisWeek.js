import { bodyContentContainer } from './allTasks.js';
import { tasks } from './todo-factory.js';
import { formActionsObject } from './task-form-actions.js';
import { pageElementsObject } from './page-elements.js';
import { daysQuestObject } from './today.js';


export const weeksQuestObject = {
    
    weeksQuestPage() {
        //clear the page
        bodyContentContainer.innerHTML = '';

        //import elements
        const titleElement = pageElementsObject.createPageTitle();

        //append tools to page
        bodyContentContainer.appendChild(titleElement);
        
        //get today's date
        const { startOfWeek, endOfWeek } = weeksQuestObject.getWeekRange();

        //get variables to display in header
        let startOfWeekDay = startOfWeek.getDate();
        let endOfWeekDay = endOfWeek.getDate();
        let thisMonth = new Date().toLocaleString('en-US', { month: 'short' });

        //update page title
        titleElement.textContent = `Week's Quests: ${thisMonth} ${startOfWeekDay} - ${endOfWeekDay}`;

        //filter today's tasks
        let weeksTasks = tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            return taskDate >= startOfWeek && taskDate <= endOfWeek;
            });

        //display filtered array to dom
        formActionsObject.renderTasks(weeksTasks, bodyContentContainer);

        const taskContainer = document.querySelector('.task-container');
        if(!taskContainer) {
            daysQuestObject.showNoTaskToday(bodyContentContainer);
            const noTask = document.querySelector('.no-task');
            noTask.textContent = 'No Quests Due This Week';
        }

        return weeksTasks;
    },

    getWeekRange() {
        const currentDate = new Date();
        const currentDay = currentDate.getDay(); //0 (sunday) to 6 (saturday)
    
        //calculate the difference between the current day and the start of the week (sunday)
        const startOfWeekDiff = currentDay === 0 ? 0 : currentDay;
    
        //calculate the start of the week by subtracting the difference
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - startOfWeekDiff);
    
        //calculate the end of the week by adding the remaining days until saturday
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
    
        return { startOfWeek, endOfWeek };
    }
};