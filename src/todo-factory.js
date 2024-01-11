//task array to store all tasks
export const tasks = [];

//creates task objects
export function createTask(title, description, dueDate, status) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        status: 'incomplete',
    };

    tasks.push(task);
    console.log(tasks);
    return task;
}

//send task array to be displayed
export function getTasks() {
    return tasks;
}