import { localStorageObject } from "./local-storage";

//task array to store all tasks
export const tasks = [];

export const projects = [];

export const taskCounterObject = {
    taskCounter: 0,
}

export const projectCounterObject = {
    projectID: 0,
}

//creates task objects
export function createTask(title, description, dueDate, priority, projectName) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        status: 'incomplete',
        taskID: taskCounterObject.taskCounter,
        projectName: projectName,
    };

    taskCounterObject.taskCounter++;

    tasks.push(task);
    // console.log(tasks);

    //save tasks to local storage after creating a new task
    localStorageObject.saveTasksToLocalStorage(tasks);

    return task;
}

//send task array to be displayed
export function getTasks() {

    //retrieve tasks from local storage before returning
    return localStorageObject.getTasksFromLocalStorage();
}

export function getProjects() {

    return localStorageObject.getProjectsFromLocalStorage();
}