import createTask from "./todo-factory";

//updates the dom for the alltask page
export default function displayAllTasks() {

    const titleElement = document.createElement('h1');
    titleElement.innerHTML = 'All Quests';
    titleElement.classList.add('body-title');

    const addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = '|+| Add Quest';

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    addTaskButton.addEventListener('click', function() {
        const task = document.createElement('div');
        task.textContent = `${createTask.title}, ${createTask.description}, ${createTask.dueDate}, ${createTask.priority}, ${createTask.status}`;
        task.classList.add('tasks')
        taskContainer.appendChild(task);
    });

    return [titleElement, taskContainer, addTaskButton];
}