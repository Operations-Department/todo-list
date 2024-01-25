import { tasks, createTask, getTasks } from "./todo-factory";
import { bodyContentContainer } from "./allTasks";
import { localStorageObject } from "./local-storage";

export const editTasksObject = {

    //toggles task between complete and incomplete
    handleCompleteTask(event) {
        const taskComplete = event.target.classList.contains('task-complete-button');

        if (taskComplete) { //can get these from getElements()
            const taskContainer = event.target.closest('.task-container');
            const taskContainerID = parseInt(taskContainer.dataset.taskId);
            const taskElementLeft = event.target.closest('.task-element-left');
            const domTitle = taskElementLeft.querySelector('.task-title');
            const domDescription = taskElementLeft.querySelector('.task-description');

            const foundTask = tasks.find(task => task.taskID == taskContainerID);

            if (foundTask.status === 'incomplete') return editTasksObject.isComplete(foundTask, taskContainer, event, domTitle, domDescription);
            if (foundTask.status === 'complete') return editTasksObject.isIncomplete(foundTask, taskContainer, event, domTitle, domDescription);
        }
    },

    //deletes object in task array and removes dom display element
    handleDeleteTask(event) {
        const taskDelete = event.target.classList.contains('task-delete');
        const taskContainer = event.target.closest('.task-container');

        if (taskDelete) {
            const taskContainerID = parseInt(taskContainer.dataset.taskId);

            const indexToRemove = tasks.findIndex(task => task.taskID === taskContainerID);

            tasks.splice(indexToRemove, 1);
            bodyContentContainer.removeChild(taskContainer);

            //update local storage
            localStorageObject.saveTasksToLocalStorage(tasks);
        }
    },

    //changes status + dom to complete
    isComplete(task, taskContainer, event, domTitle, domDescription) {

        //update task object status
        task.status = 'complete';

        //css to display completed status
        taskContainer.classList.add('completed-task');
        event.target.classList.add('completed-checked');
        domTitle.classList.add('completed-task-text');
        domDescription.classList.add('completed-task-text');

        //update local storage
        localStorageObject.saveTasksToLocalStorage(tasks);
    },

    //changes status + dom to incomplete
    isIncomplete(task, taskContainer, event, domTitle, domDescription) {

        //update task object status
        task.status = 'incomplete';

        //css to display completed status
        taskContainer.classList.remove('completed-task');
        event.target.classList.remove('completed-checked');
        domTitle.classList.remove('completed-task-text');
        domDescription.classList.remove('completed-task-text');

        //update local storage
        localStorageObject.saveTasksToLocalStorage(tasks);
    },

    retrieveTaskElements(event) {
        const taskContainer = event.target.closest('.task-container');
        if (!taskContainer) return null;
      
        const taskElementLeft = taskContainer.querySelector('.task-element-left');
        const taskTitle = taskElementLeft.querySelector('.task-title');
        const taskDescription = taskElementLeft.querySelector('.task-description');

        const taskElementRight = taskContainer.querySelector('.task-element-right');
        const taskDueDate = taskElementRight.querySelector('.task-due-date');
        const taskPriority = taskElementRight.querySelector('.task-priority');

        const editInputBox = document.createElement('input');
        editInputBox.classList.add('form-title');
      
        const taskIDNumber = parseInt(taskContainer.dataset.taskId);
        const task = tasks.find((task) => task.taskID === taskIDNumber);
      
        return {
            taskContainer,
            taskElementLeft,
            taskTitle,
            taskDescription,
            taskElementRight,
            taskDueDate,
            taskPriority,
            editInputBox,
            taskIDNumber,
            task
        };
    },
        
    submitEdit(event, taskTitle, editInputBox) {

        const { taskElementLeft, task } = editTasksObject.retrieveTaskElements(event);
        
        //remove input box and restore original element
        taskElementLeft.replaceChild(taskTitle, editInputBox);

        //update task title
        task.title = editInputBox.value;

        //update DOM display
        taskTitle.textContent = task.title;
    
        //update local storage
        localStorageObject.saveTasksToLocalStorage(tasks);
    },
      
    handleTaskEdit(event) {
        const { 
            taskElementLeft, 
            editInputBox, 
            taskContainer, 
            taskTitle 
        } = editTasksObject.retrieveTaskElements(event);

        if (!taskContainer || !taskElementLeft) return;
      
        if (event.target.classList.contains('task-title')) {
            taskElementLeft.replaceChild(editInputBox, taskTitle);
            editInputBox.focus();
            editInputBox.addEventListener('keyup', (event) => {
                if (event.key === 'Enter' && editInputBox.value.trim() !== '') {
                    event.preventDefault();
                    event.stopPropagation();    
                    editTasksObject.submitEdit(event, taskTitle, editInputBox);
                }
            });
        }
    },
};
      
        
        
        
        
        
        
        
        
        
        
//         else if (taskDescription) {        

//             //add input to edit title
//             taskElementLeft.replaceChild(editInputBox, taskDescription);
//             editInputBox.focus();

//             //take edited title and submit
//             editInputBox.addEventListener('keyup', function(event) {
//                 if (event.key === 'Enter' && editInputBox.value.trim() !== '') {

//                     //extract values
//                     const tasks = getTasks();

//                     const task = tasks.find(task => task.taskID === taskIDNumber);

//                     //update task title 
//                     task.description = editInputBox.value;

//                     //update dom display
//                     taskDescription.textContent = editInputBox.value;

//                     //re-append element
//                     taskElementLeft.replaceChild(taskDescription, editInputBox);

//                     //update local storage
//                     localStorageObject.saveTasksToLocalStorage(tasks);
//                 }
//             });
//         } 
        
        
        
        
//         else if (taskDueDate) {        
//             editInputBox.type = 'date';

//             //add input to edit title
//             taskElementRight.replaceChild(editInputBox, taskDueDate);

//             //take edited title and submit
//             editInputBox.addEventListener('change', function(event) {
                    
//                 //extract values
//                 const tasks = getTasks();
//                 const task = tasks.find(task => task.taskID === taskIDNumber);

//                 //update task title
//                 task.dueDate = editInputBox.value;

//                 //update dom display
//                 taskDueDate.innerText = editInputBox.value;

//                 //re-append element
//                 taskElementRight.replaceChild(taskDueDate, editInputBox);
        
//                 //update local storage
//                 localStorageObject.saveTasksToLocalStorage(tasks);
//             });
//         }

//         //edit priority button
//         else if (taskPriority) {

//             //extract values
//             const tasks = getTasks();
//             const task = tasks.find(task => task.taskID === taskIDNumber);

//             //cycle between low-mid-high priority
//             switch (true) {
//                 case taskPriority.classList.contains('task-priority-low'):

//                     taskPriority.classList.remove('task-priority-low');
//                     taskContainer.classList.remove('task-container-low-priority');
//                     taskPriority.classList.add('task-priority-mid');
//                     taskContainer.classList.add('task-container-mid-priority');
//                     task.priority = 'medium';
//                     taskPriority.textContent = 'medium';

//                     //update local storage
//                     localStorageObject.saveTasksToLocalStorage(tasks);
//                     break;
        
//                 case taskPriority.classList.contains('task-priority-mid'):

//                     taskPriority.classList.remove('task-priority-mid');
//                     taskContainer.classList.remove('task-container-mid-priority');
//                     taskPriority.classList.add('task-priority-high');
//                     taskContainer.classList.add('task-container-high-priority');
//                     task.priority = 'high';
//                     taskPriority.textContent = 'high';

//                     //update local storage
//                     localStorageObject.saveTasksToLocalStorage(tasks);
//                     break;
        
//                 case taskPriority.classList.contains('task-priority-high'):

//                     taskPriority.classList.remove('task-priority-high');
//                     taskContainer.classList.remove('task-container-high-priority');
//                     taskPriority.classList.add('task-priority-low');
//                     taskContainer.classList.add('task-container-low-priority');
//                     task.priority = 'low';
//                     taskPriority.textContent = 'low';

//                     //update local storage
//                     localStorageObject.saveTasksToLocalStorage(tasks);
//                     break;
//             }
//         }
//     }
// };