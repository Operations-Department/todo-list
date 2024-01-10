//task array to store all tasks
const tasks = [];

//creates task objects
export function createTask(title, description, dueDate) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
    };

    tasks.push(task);
    return task;
}

//send task array to be displayed
export function getTasks() {
    return tasks;
}