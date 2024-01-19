import { tasks, createTask, getTasks } from "./todo-factory";
import { bodyContentContainer } from "./allTasks";
import { localStorageObject } from "./local-storage";

export const editTasksObject = {

    //matches id of task object and dom element
    findClickedTask(event) {
        const taskComplete = event.target.classList.contains('task-complete-button');

        if (taskComplete) {
            const taskContainer = event.target.closest('.task-container');
            const taskContainerID = parseInt(taskContainer.dataset.taskId);

            return tasks.find(task => task.taskID == taskContainerID);
        }
            
        return null; //if no task found
    },

    //toggles task between complete and incomplete
    handleCompleteTask(event) {
        const clickedTask = editTasksObject.findClickedTask(event); 

        if (clickedTask) {
            const taskContainer = event.target.closest('.task-container');
            const taskElementLeft = event.target.closest('.task-element-left');
            const domTitle = taskElementLeft.querySelector('.task-title');
            const domDescription = taskElementLeft.querySelector('.task-description');

            if (clickedTask.status === 'incomplete') return editTasksObject.isComplete(clickedTask, taskContainer, event, domTitle, domDescription);
            if (clickedTask.status === 'complete') return editTasksObject.isIncomplete(clickedTask, taskContainer, event, domTitle, domDescription);
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

    //edit task after creation
    handleTaskEdit(event) {

        //identify elements
        const taskContainer = event.target.closest('.task-container');
        if(!taskContainer) return;
        
        const taskElementLeft = event.target.closest('.task-element-left');
        const taskElementRight = event.target.closest('.task-element-right');
        const taskTitle = event.target.closest('.task-title');
        const taskDescription = event.target.closest('.task-description');
        const taskDueDate = event.target.closest('.task-due-date');
        const taskPriority = event.target.closest('.task-priority');

        const taskIDNumber = taskContainer.dataset.taskId;

        //create element
        const editInputBox = document.createElement('input');
        editInputBox.classList.add('form-title');

        //edit the task title
        if (taskTitle) {        
        // const taskIDNumber = taskContainer.getAttribute('data-task-id');

            //add input to edit title
            taskElementLeft.replaceChild(editInputBox, taskTitle);
            editInputBox.focus();

            //take edited title and submit
            editInputBox.addEventListener('keyup', function(event) {
                if (event.key === 'Enter' && editInputBox.value.trim() !== '') {
                    
                    //extract values
                    const tasks = getTasks();
                    const task = tasks.find(task => task.taskID == taskIDNumber);

                    //update task title
                    task.title = editInputBox.value;

                    //update dom display
                    taskTitle.textContent = editInputBox.value;

                    //re-append element
                    taskElementLeft.replaceChild(taskTitle, editInputBox);

                    //update local storage
                    localStorageObject.saveTasksToLocalStorage(tasks);
                }
            });
        }

        //edit the task description
        if (taskDescription) {        
            // const taskIDNumber = taskContainer.getAttribute('data-task-id');

            //add input to edit title
            taskElementLeft.replaceChild(editInputBox, taskDescription);
            editInputBox.focus();

            //take edited title and submit
            editInputBox.addEventListener('keyup', function(event) {
                if (event.key === 'Enter' && editInputBox.value.trim() !== '') {
                    
                    //extract values
                    const tasks = getTasks();
                    const task = tasks.find(task => task.taskID == taskIDNumber);

                    //update task title
                    task.description = editInputBox.value;

                    //update dom display
                    taskDescription.textContent = editInputBox.value;

                    //re-append element
                    taskElementLeft.replaceChild(taskDescription, editInputBox);

                    //update local storage
                    localStorageObject.saveTasksToLocalStorage(tasks);
                }
            });
        }

        //edit the task due date
        if (taskDueDate) {        
            editInputBox.type = 'date';
            // const taskIDNumber = taskContainer.getAttribute('data-task-id');

            //add input to edit title
            taskElementRight.replaceChild(editInputBox, taskDueDate);

            //take edited title and submit
            editInputBox.addEventListener('change', function(event) {
                    
                //extract values
                const tasks = getTasks();
                const task = tasks.find(task => task.taskID == taskIDNumber);

                //update task title
                task.dueDate = editInputBox.value;

                //update dom display
                taskDueDate.innerText = editInputBox.value;

                //re-append element
                taskElementRight.replaceChild(taskDueDate, editInputBox);
        
                //update local storage
                localStorageObject.saveTasksToLocalStorage(tasks);
            });
        }

        //edit priority button
        if (taskPriority) {

            //extract values
            // const taskIDNumber = taskContainer.getAttribute('data-task-id');
            const tasks = getTasks();
            const task = tasks.find(task => task.taskID == taskIDNumber);

            //cycle between low-mid-high priority
            switch (true) {
                case taskPriority.classList.contains('task-priority-low'):
                    taskPriority.classList.remove('task-priority-low');
                    taskContainer.classList.remove('task-container-low-priority');
                    taskPriority.classList.add('task-priority-mid');
                    taskContainer.classList.add('task-container-mid-priority');
                    task.priority = 'medium';
                    taskPriority.textContent = 'medium';

                    //update local storage
                    localStorageObject.saveTasksToLocalStorage(tasks);
                    break;
        
                case taskPriority.classList.contains('task-priority-mid'):
                    taskPriority.classList.remove('task-priority-mid');
                    taskContainer.classList.remove('task-container-mid-priority');
                    taskPriority.classList.add('task-priority-high');
                    taskContainer.classList.add('task-container-high-priority');
                    task.priority = 'high';
                    taskPriority.textContent = 'high';

                    //update local storage
                    localStorageObject.saveTasksToLocalStorage(tasks);
                    break;
        
                case taskPriority.classList.contains('task-priority-high'):
                    taskPriority.classList.remove('task-priority-high');
                    taskContainer.classList.remove('task-container-high-priority');
                    taskPriority.classList.add('task-priority-low');
                    taskContainer.classList.add('task-container-low-priority');
                    task.priority = 'low';
                    taskPriority.textContent = 'low';

                    //update local storage
                    localStorageObject.saveTasksToLocalStorage(tasks);
                    break;
            }
        }
    }
};