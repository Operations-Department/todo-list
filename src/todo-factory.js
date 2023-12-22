let tasks = [];

//manages the creation of task objects
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