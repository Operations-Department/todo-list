import './style.css';
import { createAllQuestsPage } from './allTasks.js';

function allTasksPage() {
    const elements = createAllQuestsPage();

    const content = document.getElementById('body-content-container');
    elements.forEach(element => {
        content.appendChild(element)
    });

    return elements;
}

document.addEventListener('DOMContentLoaded', allTasksPage);