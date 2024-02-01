import './style.css';
import { bodyContentContainer, createAllQuestsPage } from './allTasks.js';
import { tasks, taskCounterObject, projects, projectCounterObject } from './todo-factory.js';
import { localStorageObject } from './local-storage.js';
import { formActionsObject } from './task-form-actions.js';
import { weeksQuestObject } from './thisWeek.js';
import { daysQuestObject } from './today.js';

const sideBarMenuItems = {
    sideBarMenu: document.getElementById('home-tasks'),
    allQuestsTab: document.querySelector('.all-quests'),
    daysQuestTab: document.querySelector('.days-quests'),
    weeksQuestTab: document.querySelector('.weeks-quests'),
    projectTasks: document.querySelector('.project-tasks'),
    projectsTasksList: document.querySelector('.project-tasks-list'),
    addQuestlineTab: document.querySelector('.add-questline'),

    addClass(event) {
        event.target.classList.add('menu-selected');
    },
};

document.addEventListener('DOMContentLoaded', function() {
    //load all tasks page first
    allQuestsPage();

    //show selected menu tab
    sideBarMenuItems.allQuestsTab.classList.add('menu-selected');
    
    //initialize the event listeners
    createAllQuestsPage.init();
});

sideBarMenuItems.sideBarMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('all-quests')) {
        allQuestsPage();

        //show selected menu tab
        sideBarMenuItems.addClass(event);

        //remove selected menu tab
        sideBarMenuItems.daysQuestTab.classList.remove('menu-selected');
        sideBarMenuItems.weeksQuestTab.classList.remove('menu-selected');
    }
    if (event.target.classList.contains('days-quests')) {
        daysQuestObject.daysQuestPage();

        //show selected menu tab
        sideBarMenuItems.addClass(event);

        //remove selected menu tab
        sideBarMenuItems.allQuestsTab.classList.remove('menu-selected');
        sideBarMenuItems.weeksQuestTab.classList.remove('menu-selected');
    }
    if (event.target.classList.contains('weeks-quests')) {
        weeksQuestObject.weeksQuestPage();

        //show selected menu tab
        sideBarMenuItems.addClass(event);

        //remove selected menu tab
        sideBarMenuItems.allQuestsTab.classList.remove('menu-selected');
        sideBarMenuItems.daysQuestTab.classList.remove('menu-selected');
    }
});

function allQuestsPage() {
    //clear the page
    bodyContentContainer.innerHTML = '';

    //import task page elements
    const { titleElement, addTaskButton } = createAllQuestsPage.elements;

    //append tools to page
    bodyContentContainer.appendChild(titleElement);
    bodyContentContainer.appendChild(addTaskButton);

    const retrievedTasks = localStorageObject.getTasksFromLocalStorage();

    tasks.length = 0;
    tasks.push(...retrievedTasks);

    const retrievedProjects = localStorageObject.getProjectsFromLocalStorage();

    projects.length = 0;
    projects.push(...retrievedProjects);

    //prevent task counter from starting with wrong id number on page reload
    if (tasks.length !== 0) {
        let previousTaskId = tasks[tasks.length - 1].taskID;
        taskCounterObject.taskCounter = previousTaskId + 1;
    }

    //sort tasks in order on page load
    sortTasksByDate(tasks);

    //render saved projects on page load
    renderProjectsList(projects);

    formActionsObject.updateTaskList(tasks);

    return tasks;
}

export function sortTasksByDate(tasks) {
    return  tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}







sideBarMenuItems.projectTasks.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('add-questline')) {
        //to only add one project at a time
        sideBarMenuItems.addQuestlineTab.disabled = true;

        const editInputBox = document.createElement('input');
        editInputBox.classList.add('form-title');
        sideBarMenuItems.projectsTasksList.appendChild(editInputBox);
        editInputBox.focus();

        editInputBox.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && editInputBox.value.trim() !== '') {

                const projectTitle = editInputBox.value;

                //push to projects array
                projects.push(projectTitle);

                //creates project dom element
                createNewProject(editInputBox, projectTitle);

                //re-establish add button
                sideBarMenuItems.addQuestlineTab.disabled = false;

                localStorageObject.saveProjectsToLocalStorage(projects);
            }
        });
    }
});

//delete project on double click
sideBarMenuItems.projectTasks.addEventListener('dblclick', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('project-delete')) {
        deleteProject(event);
    }
}); 

//click created project - populate screen with project's tasks
sideBarMenuItems.projectTasks.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('new-project')) {

        const projectTitle = event.target.textContent;

        //clear the page
        bodyContentContainer.innerHTML = '';

        //import task page elements
        const { titleElement, addTaskButton } = createAllQuestsPage.elements;

        //append tools to page
        bodyContentContainer.appendChild(titleElement);

        titleElement.textContent = `${projectTitle}`;

        //filter tasks array by project name
        let projectTasks = tasks.filter(task => task.projectName === projectTitle);

        formActionsObject.renderTasks(projectTasks, bodyContentContainer);

        bodyContentContainer.appendChild(addTaskButton);

        return projectTasks;
    }
});

//new project creation to dom
function createNewProject(editInputBox, projectTitle) {

    const newProject = document.createElement('button');

    newProject.textContent = projectTitle;
    sideBarMenuItems.projectsTasksList.replaceChild(newProject, editInputBox);

    newProject.classList.add('new-project');
    newProject.setAttribute('data-project-id', projectCounterObject.projectID);

    projectCounterObject.projectID++;

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('project-delete');

    newProject.appendChild(deleteProjectButton);
    
    sideBarMenuItems.projectsTasksList.appendChild(sideBarMenuItems.addQuestlineTab);

    return { newProject, deleteProjectButton };
}

//render saved projects on page load
function renderProjectsList(projects) {

    const projectsList = document.querySelector('.project-tasks-list');

    //clear to prevent stacking
    projectsList.innerHTML = '';
    
    projects.forEach(project => {

        const projectTitle = project;

        const newProject = document.createElement('button');

        newProject.textContent = projectTitle;

        newProject.classList.add('new-project');
        newProject.setAttribute('data-project-id', projectCounterObject.projectID);
    
        projectCounterObject.projectID++;
    
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('project-delete');
    
        projectsList.appendChild(newProject);
        newProject.appendChild(deleteProjectButton);
    });

    projectsList.appendChild(sideBarMenuItems.addQuestlineTab);
}

//removes project from object and dom element
function deleteProject(event) {
    const projectTasksList = document.querySelector('.project-tasks-list');
    const projectToDelete = event.target.closest('.new-project');
    const projectToDeleteText = projectToDelete.textContent; 
    // const projectID = projectToDelete.dataset.projectId;

    for (let i = 0; i < projects.length; i++) {
        if (projects[i] == projectToDeleteText) {
            projects.splice(i, 1);
            break;
        }
    }
    projectTasksList.removeChild(projectToDelete);
    localStorageObject.saveProjectsToLocalStorage(projects);
}