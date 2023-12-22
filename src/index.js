import './style.css';
import displayAllTasks from './allTasks.js';

function allTasksPage() {
    const elements = displayAllTasks();

    const content = document.getElementById('body-content-container');
    elements.forEach(element => {
        content.appendChild(element)
    });

    return elements;
}

document.addEventListener('DOMContentLoaded', allTasksPage);