import './style.css';
import allTasks from './allTasks.js';
import createTask from './todo-factory.js';

function pageLoad() {
    const elements = allTasks();
    const content = document.getElementById('body-content-container');

    elements.forEach(element => {
        content.appendChild(element)
    });

    return elements;
}

createTask();

document.addEventListener('DOMContentLoaded', pageLoad());