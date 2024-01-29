export const localStorageObject = {

    //save tasks to local storage
    saveTasksToLocalStorage(tasks) {
        const tasksJSON = JSON.stringify(tasks);
        localStorage.setItem('tasks', tasksJSON);
    },

    //save tasks to local storage
    saveProjectsToLocalStorage(projects) {
        const projectsJSON = JSON.stringify(projects);
        localStorage.setItem('projects', projectsJSON);
    },

    //retrieve tasks from local storage
    getTasksFromLocalStorage() {
        try {
            const tasksJSON = localStorage.getItem('tasks');
            return JSON.parse(tasksJSON) || [];
        } catch (error) {
            console.error('Error retrieving tasks from local storage:', error);
            return [];
        }
    },

    //retrieve tasks from local storage
    getProjectsFromLocalStorage() {
        try {
            const projectsJSON = localStorage.getItem('projects');
            return JSON.parse(projectsJSON) || [];
        } catch (error) {
            console.error('Error retrieving projects from local storage:', error);
            return [];
        }
    },
}