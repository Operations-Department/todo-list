let tasks = [];

export default function createTask(title, description, dueDate, priority, status) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        status: status
    };

    tasks.push(task);
    return task;
}

const task1 = createTask('Complete Anime', 'watch that new anime', '2023-12-23', 'high', 'pending');
const task2 = createTask('Study', 'study for the test', '2023-12-24', 'high', 'pending');

console.log(tasks);