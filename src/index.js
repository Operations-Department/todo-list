import './style.css';
import { createAllQuestsPage } from './allTasks.js';

document.addEventListener('DOMContentLoaded', allQuestsPage);

function allQuestsPage() {
    //import task creation tools
    const { titleElement, addTaskButton } = createAllQuestsPage();

    //append tools to page
    const content = document.getElementById('body-content-container');
    content.appendChild(titleElement);
    content.appendChild(addTaskButton);
}