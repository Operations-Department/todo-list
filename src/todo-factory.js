//task array to store all tasks
export const tasks = [];
let taskCounter = 0;

//creates task objects
export function createTask(title, description, dueDate) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        status: 'incomplete',
        taskID: taskCounter,
    };

    taskCounter++;

    tasks.push(task);
    console.log(tasks);
    return task;
}

//send task array to be displayed
export function getTasks() {
    return tasks;
}