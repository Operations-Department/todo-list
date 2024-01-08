import './style.css';
import createAllQuestsPage from './allTasks.js';

function allTasksPage() {
    const { titleElement, addTaskButton } = createAllQuestsPage();

    const content = document.getElementById('body-content-container');
    content.appendChild(titleElement);
    content.appendChild(addTaskButton);
}

document.addEventListener('DOMContentLoaded', allTasksPage);