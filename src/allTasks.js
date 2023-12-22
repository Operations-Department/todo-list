export default function allTasks() {

    const titleElement = document.createElement('h1');
    titleElement.innerHTML = 'All Tasks';
    titleElement.classList.add('body-title');

    const addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = '|+| Add Task';

    return [titleElement, addTaskButton];
}