//task array to store all tasks
export const tasks = [];
let taskCounter = 0;

//creates task objects
export function createTask(title, description, dueDate, priority) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
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


//local storage api

//save tasks to local storage
// function saveTasksToLocalStorage(tasks) {
//     const tasksJSON = JSON.stringify(tasks);
//     localStorage.setItem('tasks', tasksJSON);
//   }
  
//   //retrieve tasks from local storage
//   function getTasksFromLocalStorage() {
//     const tasksJSON = localStorage.getItem('tasks');
//     return JSON.parse(tasksJSON) || [];
//   }
  
//   //example usage:
//   const tasks = [
//     { title: 'Task 1', description: 'Do something', dueDate: '2022-01-20', status: 'incomplete' },
//     { title: 'Task 2', description: 'Do something else', dueDate: '2022-01-25', status: 'incomplete' }
//   ];
  
//   //save tasks to local storage
//   saveTasksToLocalStorage(tasks);
  
//   //retrieve tasks from local storage
//   const retrievedTasks = getTasksFromLocalStorage();
//   console.log(retrievedTasks);
  