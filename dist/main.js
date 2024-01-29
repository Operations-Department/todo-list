/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/backdrop-2.jpg */ "./src/imgs/backdrop-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/QueensidesMedium-x30zV.ttf */ "./src/fonts/QueensidesMedium-x30zV.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Ubuntu-n1M0.ttf */ "./src/fonts/Ubuntu-n1M0.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/checked.png */ "./src/imgs/checked.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* css reset */
*, 
html {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    /* box-sizing: border-box; */
}

:root {
    --primary-color: #2d2749;
    --secondary-color: #df72a9;
    --border-radius: 2rem;
    --border-color: red;
    --border: 1px solid var(--border-color);
    --font-color: white;
    --gap: 1rem;
    --cancel-color: #a52f2f;
    --submit-color: #026e02cf;
    --background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    --low-priority: yellow;
    --low-background: #ffff0014;
    --mid-priority: orange;
    --mid-background: #ffa5001c;
    --high-priority: #ff4141;
    --high-background: #ff414129;
}

@font-face {
    font-family: 'Primary-font';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}), format('ttf');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Secondary-font';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}), format('ttf');
    font-weight: 600;
    font-style: normal;
}

.content {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 0.5fr 4fr 0.25fr;
}

/* header */
header {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Primary-font';
    color: var(--font-color);
    background: var(--background-image);
    background-size: 100% 100%;
    background-attachment: fixed;
    font-size: 5rem;
    gap: var(--gap);
}

.svg {
    height: 6rem;
    padding-left: 1rem;
    filter: invert(1);
}

/* side-bar */
.side-bar {
    grid-area: 2 / 1 / 3 / 2;
    background: var(--background-image);
    background-size: 100% 100%;
    background-attachment: fixed;
    color: var(--font-color);
    font-family: 'Secondary-font';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 2rem;
    overflow: hidden;
    white-space: nowrap;
}

#home-tasks {
    position: sticky;
    top: 0;
}

.project-tasks {
    position: sticky;
    top: 17rem;
}

.project-tasks-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--gap);
    align-items: flex-start;
}

.new-project {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem 0.5rem 1rem !important;
    overflow: auto;
}

.new-project:hover {
    transform: none;
    /* background-color: #00000026; */
    border: var(--border);
    /* box-shadow: 5px 10px 10px #00000063; */
}

.project-delete {
    transition: ease-in-out 0.3s;
    cursor: pointer;
    border-radius: var(--border-radius);
    width: 2rem;
    height: 2rem;
}

.project-delete:hover {
    /* border: 1px solid white; */
    background: white;
    color: black;
}

#home-tasks,
.project-tasks {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--gap);
    width: 80%;
    list-style: none;
    padding: 1.5rem;
}

.side-bar-title {
    border-bottom: var(--border);
    font-weight: bold;
    font-size: 2.5rem;
}

@keyframes bounce {
    0% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(10px);
    }
}

 @keyframes pulse {
    0% {
        transform: scale(1.0);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1.0);
    }
}

@keyframes glow {
    0% {
        background: rgba(0, 255, 0, 0.2);
    }
    50% {
        background: rgba(0, 255, 0, 0.6);
    }
    100% {
        background: rgba(0, 255, 0, 0.2);
    }
}

li > button,
#body-content-container > button,
#submit-button,
#cancel-button,
.new-project,
.project-delete {
    color: var(--font-color);
    transition: ease-in-out 0.3s;
    font-size: 1.5rem;
    font-family: 'Secondary-font';
    padding: 0;
    background: none;
    box-sizing: border-box;
}

.menu-selected {
    border-bottom: 1px solid white;
}

#body-content-container > button {
    animation: bounce 8s infinite;
    align-self: center;
    box-sizing: border-box;
    padding: 0.7rem;
}

#body-content-container > button:hover {
    cursor: pointer;
    border-radius: var(--border-radius);
    background: white;
    color: black;
}

li > button:hover {
    cursor: pointer;
    transform: translateX(1rem);
}

/* main */
.body {
    grid-area: 2 / 2 / 3 / 3;
    background: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

#body-content-container {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: var(--border);
    color: var(--font-color);
    font-family: 'Primary-font';
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap);
    overflow-y: auto;
    padding-bottom: 1rem;
}

.body-title {
    font-size: 4rem;
    border-bottom: var(--border);
    border-right: var(--border);
    padding: 1rem;
}

.form-container{
    height: 12rem;
    width: 90%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100% 100%;
    background-attachment: fixed;
    box-sizing: border-box;
    border: var(--border);
    align-self: center;
}

.form {
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 2fr 1fr;
    height: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    gap: 1.5rem;
}

.form-left,
.form-right {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
}

.form-left {
    grid-area: 1 / 1 / 2 / 2;
    overflow: auto;
}

.form-right {
    grid-area: 1 / 2 / 2 / 3;
}

.form-bottom {
    grid-area: 2 / 1 / 3 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

/* submit-button/add-button */
.submit-button:hover {
    box-shadow: 0px 5px 0px var(--submit-color);
    color: var(--submit-color);
    border-left: 1px solid var(--submit-color);
    border-right: 1px solid var(--submit-color);
}

.cancel-button:hover {
    box-shadow: 0px 5px 0px var(--cancel-color);
    color: var(--cancel-color);
    border-left: 1px solid var(--cancel-color);
    border-right: 1px solid var(--cancel-color);
}

.submit-button, 
.cancel-button {
    height: 2.5rem;
    width: 7rem;
    border-radius: 0.5rem;
}

.form-bottom > button:hover {
    cursor: pointer;
    transform: translateY(-10px);
}

.form-title,
.form-description,
.form-date,
.form-select {
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: 'Secondary-font';
    border-radius: 0.5rem;
    outline: none;
}

.form-title {
    height: 1rem;
    width: 90%;
}

.form-description {
    height: 2.5rem;
    width: 90%;
}

.form-date,
.form-select {
    height: 2rem;
    width: 12rem;
    padding: 0;
    padding-left: 0.2rem;
}

.task-container {
    transition: ease-in-out 0.3s;
    box-sizing: border-box;
    width: 90%;
    min-width: 37rem;
    height: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* border-left: 1px solid var(--border-color); */
    gap: 0.5rem;
    align-self: center;
    background-color: #3b3361;
    overflow: hidden;
    /* white-space: nowrap; */
}

.task-element-left,
.task-element-right {
    box-sizing: border-box;
    font-family: 'Secondary-font';
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 100%;
    display: flex;
    gap: 3rem;
    align-items: center;
}

.task-element-left {
    justify-content: flex-start;
}

.task-element-right {
    justify-content: flex-end;
    font-size: 1rem;
}

.task-complete-button {
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid white;
    background: none;
    border-radius: var(--border-radius);
    flex-shrink: 0;
}

.completed-task {
    background: #00f9003d;
    border-left: 2px solid #04ff04;
    color: #ffffff69;
}

.completed-task-text {
    text-decoration: line-through;
}

.completed-checked {
    border: none;   
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: cover;
}

.task-title:hover,
.task-description:hover,
.task-due-date:hover,
.task-complete-button:hover,
.task-priority:hover,
.task-delete:hover {
    cursor: pointer;
}

.task-title {
    font-size: 1.5rem;
}

.task-description {
    font-size: 1rem;
}

.task-due-date {
    width: 6.1rem;
}

/* priority emblem itself*/
.task-priority {
    border-radius: var(--border-radius);
    padding: 5px 15px 5px 15px;
    background: none;
    color: var(--font-color)
}

.task-priority-low,
.task-priority-mid,
.task-priority-high {
    width: 5.5rem;
}

.task-priority-low {
    color: var(--low-priority);
    border: 1px solid var(--low-priority);
}

.task-priority-mid {
    color: var(--mid-priority);
    border: 1px solid var(--mid-priority);
}

.task-priority-high {
    color: var(--high-priority);
    border: 1px solid var(--high-priority);
}

/* task container (priority)*/
.task-container-low-priority {
    /* border: 1px solid var(--low-priority); */
    border: 1px solid var(--low-background);
    border-left: 3px solid var(--low-priority);
    /* background-color: var(--low-background); */
}

.task-container-mid-priority {
    /* border: 1px solid var(--mid-priority); */
    border: 1px solid var(--mid-background);
    border-left: 3px solid var(--mid-priority);
    /* background-color: var(--mid-background); */
}

.task-container-high-priority {
    /* border: 1px solid var(--high-priority); */
    border: 1px solid var(--high-background);
    border-left: 3px solid var(--high-priority);
    /* background-color: var(--high-background); */
}

.task-container:hover {
    box-shadow: 5px 10px 10px #00000063;
}

.task-delete {
    background: none;
    color: white;
    width: 3rem;
}

.no-task {
    height: 15%;
    width: 100%;
    /* border: var(--border); */
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 3rem;
    animation: bounce 6s infinite;
}

/* to obviously show where the task moved upon sort */
.task-glow {
    background: rgba(0, 255, 0, 0.7); 
    animation: glow 5s infinite;
}

footer {
    grid-area: 3 / 1 / 4 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Secondary-font';
    color: white;
    font-size: 1rem;
    background: var(--background-image);
    background-size: 100% 100%;
    background-attachment: fixed;
}

.content > div {
    box-sizing: border-box;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* css reset */\n*, \nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    /* box-sizing: border-box; */\n}\n\n:root {\n    --primary-color: #2d2749;\n    --secondary-color: #df72a9;\n    --border-radius: 2rem;\n    --border-color: red;\n    --border: 1px solid var(--border-color);\n    --font-color: white;\n    --gap: 1rem;\n    --cancel-color: #a52f2f;\n    --submit-color: #026e02cf;\n    --background-image: url(./imgs/backdrop-2.jpg);\n    --low-priority: yellow;\n    --low-background: #ffff0014;\n    --mid-priority: orange;\n    --mid-background: #ffa5001c;\n    --high-priority: #ff4141;\n    --high-background: #ff414129;\n}\n\n@font-face {\n    font-family: 'Primary-font';\n    src: url('./fonts/QueensidesMedium-x30zV.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Secondary-font';\n    src: url('./fonts/Ubuntu-n1M0.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n.content {\n    height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 0.5fr 4fr 0.25fr;\n}\n\n/* header */\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Primary-font';\n    color: var(--font-color);\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    font-size: 5rem;\n    gap: var(--gap);\n}\n\n.svg {\n    height: 6rem;\n    padding-left: 1rem;\n    filter: invert(1);\n}\n\n/* side-bar */\n.side-bar {\n    grid-area: 2 / 1 / 3 / 2;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    color: var(--font-color);\n    font-family: 'Secondary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 2rem;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n#home-tasks {\n    position: sticky;\n    top: 0;\n}\n\n.project-tasks {\n    position: sticky;\n    top: 17rem;\n}\n\n.project-tasks-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: var(--gap);\n    align-items: flex-start;\n}\n\n.new-project {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: var(--border-radius);\n    padding: 0.5rem 1rem 0.5rem 1rem !important;\n    overflow: auto;\n}\n\n.new-project:hover {\n    transform: none;\n    /* background-color: #00000026; */\n    border: var(--border);\n    /* box-shadow: 5px 10px 10px #00000063; */\n}\n\n.project-delete {\n    transition: ease-in-out 0.3s;\n    cursor: pointer;\n    border-radius: var(--border-radius);\n    width: 2rem;\n    height: 2rem;\n}\n\n.project-delete:hover {\n    /* border: 1px solid white; */\n    background: white;\n    color: black;\n}\n\n#home-tasks,\n.project-tasks {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: var(--gap);\n    width: 80%;\n    list-style: none;\n    padding: 1.5rem;\n}\n\n.side-bar-title {\n    border-bottom: var(--border);\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n@keyframes bounce {\n    0% {\n        transform: translateY(10px);\n    }\n    50% {\n        transform: translateY(-10px);\n    }\n    100% {\n        transform: translateY(10px);\n    }\n}\n\n @keyframes pulse {\n    0% {\n        transform: scale(1.0);\n    }\n    50% {\n        transform: scale(1.15);\n    }\n    100% {\n        transform: scale(1.0);\n    }\n}\n\n@keyframes glow {\n    0% {\n        background: rgba(0, 255, 0, 0.2);\n    }\n    50% {\n        background: rgba(0, 255, 0, 0.6);\n    }\n    100% {\n        background: rgba(0, 255, 0, 0.2);\n    }\n}\n\nli > button,\n#body-content-container > button,\n#submit-button,\n#cancel-button,\n.new-project,\n.project-delete {\n    color: var(--font-color);\n    transition: ease-in-out 0.3s;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    padding: 0;\n    background: none;\n    box-sizing: border-box;\n}\n\n.menu-selected {\n    border-bottom: 1px solid white;\n}\n\n#body-content-container > button {\n    animation: bounce 8s infinite;\n    align-self: center;\n    box-sizing: border-box;\n    padding: 0.7rem;\n}\n\n#body-content-container > button:hover {\n    cursor: pointer;\n    border-radius: var(--border-radius);\n    background: white;\n    color: black;\n}\n\nli > button:hover {\n    cursor: pointer;\n    transform: translateX(1rem);\n}\n\n/* main */\n.body {\n    grid-area: 2 / 2 / 3 / 3;\n    background: var(--primary-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#body-content-container {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    border: var(--border);\n    color: var(--font-color);\n    font-family: 'Primary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: var(--gap);\n    overflow-y: auto;\n    padding-bottom: 1rem;\n}\n\n.body-title {\n    font-size: 4rem;\n    border-bottom: var(--border);\n    border-right: var(--border);\n    padding: 1rem;\n}\n\n.form-container{\n    height: 12rem;\n    width: 90%;\n    background: url(./imgs/backdrop-2.jpg);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    box-sizing: border-box;\n    border: var(--border);\n    align-self: center;\n}\n\n.form {\n    display: grid;\n    grid-template-rows: 3fr 1fr;\n    grid-template-columns: 2fr 1fr;\n    height: 100%;\n    padding: 0.5rem;\n    box-sizing: border-box;\n    gap: 1.5rem;\n}\n\n.form-left,\n.form-right {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.form-left {\n    grid-area: 1 / 1 / 2 / 2;\n    overflow: auto;\n}\n\n.form-right {\n    grid-area: 1 / 2 / 2 / 3;\n}\n\n.form-bottom {\n    grid-area: 2 / 1 / 3 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n/* submit-button/add-button */\n.submit-button:hover {\n    box-shadow: 0px 5px 0px var(--submit-color);\n    color: var(--submit-color);\n    border-left: 1px solid var(--submit-color);\n    border-right: 1px solid var(--submit-color);\n}\n\n.cancel-button:hover {\n    box-shadow: 0px 5px 0px var(--cancel-color);\n    color: var(--cancel-color);\n    border-left: 1px solid var(--cancel-color);\n    border-right: 1px solid var(--cancel-color);\n}\n\n.submit-button, \n.cancel-button {\n    height: 2.5rem;\n    width: 7rem;\n    border-radius: 0.5rem;\n}\n\n.form-bottom > button:hover {\n    cursor: pointer;\n    transform: translateY(-10px);\n}\n\n.form-title,\n.form-description,\n.form-date,\n.form-select {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    border-radius: 0.5rem;\n    outline: none;\n}\n\n.form-title {\n    height: 1rem;\n    width: 90%;\n}\n\n.form-description {\n    height: 2.5rem;\n    width: 90%;\n}\n\n.form-date,\n.form-select {\n    height: 2rem;\n    width: 12rem;\n    padding: 0;\n    padding-left: 0.2rem;\n}\n\n.task-container {\n    transition: ease-in-out 0.3s;\n    box-sizing: border-box;\n    width: 90%;\n    min-width: 37rem;\n    height: auto;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    /* border-left: 1px solid var(--border-color); */\n    gap: 0.5rem;\n    align-self: center;\n    background-color: #3b3361;\n    overflow: hidden;\n    /* white-space: nowrap; */\n}\n\n.task-element-left,\n.task-element-right {\n    box-sizing: border-box;\n    font-family: 'Secondary-font';\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    width: 100%;\n    display: flex;\n    gap: 3rem;\n    align-items: center;\n}\n\n.task-element-left {\n    justify-content: flex-start;\n}\n\n.task-element-right {\n    justify-content: flex-end;\n    font-size: 1rem;\n}\n\n.task-complete-button {\n    height: 1.5rem;\n    width: 1.5rem;\n    border: 2px solid white;\n    background: none;\n    border-radius: var(--border-radius);\n    flex-shrink: 0;\n}\n\n.completed-task {\n    background: #00f9003d;\n    border-left: 2px solid #04ff04;\n    color: #ffffff69;\n}\n\n.completed-task-text {\n    text-decoration: line-through;\n}\n\n.completed-checked {\n    border: none;   \n    background-image: url(./imgs/checked.png);\n    background-size: cover;\n}\n\n.task-title:hover,\n.task-description:hover,\n.task-due-date:hover,\n.task-complete-button:hover,\n.task-priority:hover,\n.task-delete:hover {\n    cursor: pointer;\n}\n\n.task-title {\n    font-size: 1.5rem;\n}\n\n.task-description {\n    font-size: 1rem;\n}\n\n.task-due-date {\n    width: 6.1rem;\n}\n\n/* priority emblem itself*/\n.task-priority {\n    border-radius: var(--border-radius);\n    padding: 5px 15px 5px 15px;\n    background: none;\n    color: var(--font-color)\n}\n\n.task-priority-low,\n.task-priority-mid,\n.task-priority-high {\n    width: 5.5rem;\n}\n\n.task-priority-low {\n    color: var(--low-priority);\n    border: 1px solid var(--low-priority);\n}\n\n.task-priority-mid {\n    color: var(--mid-priority);\n    border: 1px solid var(--mid-priority);\n}\n\n.task-priority-high {\n    color: var(--high-priority);\n    border: 1px solid var(--high-priority);\n}\n\n/* task container (priority)*/\n.task-container-low-priority {\n    /* border: 1px solid var(--low-priority); */\n    border: 1px solid var(--low-background);\n    border-left: 3px solid var(--low-priority);\n    /* background-color: var(--low-background); */\n}\n\n.task-container-mid-priority {\n    /* border: 1px solid var(--mid-priority); */\n    border: 1px solid var(--mid-background);\n    border-left: 3px solid var(--mid-priority);\n    /* background-color: var(--mid-background); */\n}\n\n.task-container-high-priority {\n    /* border: 1px solid var(--high-priority); */\n    border: 1px solid var(--high-background);\n    border-left: 3px solid var(--high-priority);\n    /* background-color: var(--high-background); */\n}\n\n.task-container:hover {\n    box-shadow: 5px 10px 10px #00000063;\n}\n\n.task-delete {\n    background: none;\n    color: white;\n    width: 3rem;\n}\n\n.no-task {\n    height: 15%;\n    width: 100%;\n    /* border: var(--border); */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    font-size: 3rem;\n    animation: bounce 6s infinite;\n}\n\n/* to obviously show where the task moved upon sort */\n.task-glow {\n    background: rgba(0, 255, 0, 0.7); \n    animation: glow 5s infinite;\n}\n\nfooter {\n    grid-area: 3 / 1 / 4 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Secondary-font';\n    color: white;\n    font-size: 1rem;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n}\n\n.content > div {\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/allTasks.js":
/*!*************************!*\
  !*** ./src/allTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bodyContentContainer: () => (/* binding */ bodyContentContainer),
/* harmony export */   createAllQuestsPage: () => (/* binding */ createAllQuestsPage)
/* harmony export */ });
/* harmony import */ var _page_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-elements */ "./src/page-elements.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-form */ "./src/task-form.js");
/* harmony import */ var _task_form_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-form-actions */ "./src/task-form-actions.js");
/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTasks */ "./src/editTasks.js");





const bodyContentContainer = document.getElementById('body-content-container');

//main function to populate the page
const createAllQuestsPage = {

    titleElement: _page_elements__WEBPACK_IMPORTED_MODULE_0__.pageElementsObject.createPageTitle(),
    addTaskButton: _page_elements__WEBPACK_IMPORTED_MODULE_0__.pageElementsObject.createAddTaskButton(),
    formContainer: _page_elements__WEBPACK_IMPORTED_MODULE_0__.pageElementsObject.createFormContainer(),

    //click to add new task
    addTask() {
        handleAddTask(createAllQuestsPage.addTaskButton, createAllQuestsPage.formContainer);
    },

    //click to mark task complete
    completeTask(event) {
        _editTasks__WEBPACK_IMPORTED_MODULE_3__.editTasksObject.handleCompleteTask(event);
    },
    
    //click to delete task
    deleteTask(event) {
        _editTasks__WEBPACK_IMPORTED_MODULE_3__.editTasksObject.handleDeleteTask(event);
    },

    //double click to edit tasks
    editTask(event) {
        _editTasks__WEBPACK_IMPORTED_MODULE_3__.editTasksObject.handleTaskEdit(event);
    },

    //attach event listeners
    init() {
        this.addTaskButton.addEventListener('click', this.addTask);
        bodyContentContainer.addEventListener('click', this.completeTask);
        bodyContentContainer.addEventListener('click', this.deleteTask);
        bodyContentContainer.addEventListener('dblclick', this.editTask);
    },

    get elements() {
        return { titleElement: this.titleElement, addTaskButton: this.addTaskButton };
    },
};

//creates the task creation form
function handleAddTask(addTaskButton, formContainer) {
    addTaskButton.disabled = true;

    const { form, formLeft, formRight, formBottom } = _task_form__WEBPACK_IMPORTED_MODULE_1__.taskFormObject.createFormLayout(formContainer);
    bodyContentContainer.appendChild(formContainer);
    formContainer.appendChild(form);

    //call form functions to fill in the form...
    _task_form__WEBPACK_IMPORTED_MODULE_1__.taskFormObject.createFormTitle(formLeft);
    _task_form__WEBPACK_IMPORTED_MODULE_1__.taskFormObject.createFormDescription(formLeft);
    _task_form__WEBPACK_IMPORTED_MODULE_1__.taskFormObject.createFormDate(formRight);
    _task_form__WEBPACK_IMPORTED_MODULE_1__.taskFormObject.createFormPrioritySelector(formRight);
    const { submitButton, cancelButton } = _task_form__WEBPACK_IMPORTED_MODULE_1__.taskFormObject.createFormButtons(formBottom);

    //attach event listeners to created submit/cancel buttons
    _task_form_actions__WEBPACK_IMPORTED_MODULE_2__.formActionsObject.attachSubmitListener(submitButton, cancelButton, formContainer, addTaskButton);
    _task_form_actions__WEBPACK_IMPORTED_MODULE_2__.formActionsObject.attachCancelListener(submitButton, cancelButton, formContainer, addTaskButton);
}

/***/ }),

/***/ "./src/editTasks.js":
/*!**************************!*\
  !*** ./src/editTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTasksObject: () => (/* binding */ editTasksObject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-factory */ "./src/todo-factory.js");
/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allTasks */ "./src/allTasks.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _task_form_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-form-actions */ "./src/task-form-actions.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./src/index.js");







const editTasksObject = {

    //toggles task between complete and incomplete
    handleCompleteTask(event) {
        const taskComplete = event.target.classList.contains('task-complete-button');

        if (taskComplete) { //can get these from getElements()
            const taskContainer = event.target.closest('.task-container');
            const taskContainerID = parseInt(taskContainer.dataset.taskId);
            const taskElementLeft = event.target.closest('.task-element-left');
            const domTitle = taskElementLeft.querySelector('.task-title');
            const domDescription = taskElementLeft.querySelector('.task-description');

            const foundTask = _todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks.find(task => task.taskID == taskContainerID);

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

            const indexToRemove = _todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks.findIndex(task => task.taskID === taskContainerID);

            _todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks.splice(indexToRemove, 1);
            _allTasks__WEBPACK_IMPORTED_MODULE_2__.bodyContentContainer.removeChild(taskContainer);

            //update local storage
            _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
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
        _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
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
        _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
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
        const task = _todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks.find((task) => task.taskID === taskIDNumber);
      
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
    
    //handles new edited title submission
    submitTitle(event, taskTitle, editInputBox) {

        const { taskElementLeft, task } = editTasksObject.retrieveTaskElements(event);
        
        //remove input box and restore original element
        taskElementLeft.replaceChild(taskTitle, editInputBox);

        //update task object title
        task.title = editInputBox.value;

        //update DOM display
        taskTitle.textContent = task.title;
    
        //update local storage
        _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
    },

    //handles new edited description submission
    submitDescription(event, taskDescription, editInputBox) {

        const { taskElementLeft, task } = editTasksObject.retrieveTaskElements(event);
        
        //remove input box and restore original element
        taskElementLeft.replaceChild(taskDescription, editInputBox);

        //update task object description
        task.description = editInputBox.value;

        //update DOM display
        taskDescription.textContent = task.description;
    
        //update local storage
        _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
    },

    //handles new edited description submission
    submitDueDate(event, taskDueDate, editInputBox) {

        const { taskElementRight, task, taskContainer } = editTasksObject.retrieveTaskElements(event);
        
        //remove input box and restore original element
        taskElementRight.replaceChild(taskDueDate, editInputBox);

        //update task object description
        task.dueDate = editInputBox.value;

        //update DOM display
        taskDueDate.textContent = task.dueDate;

        //auto sort list by due date
        const sortedTasks = (0,___WEBPACK_IMPORTED_MODULE_5__.sortTasksByDate)([..._todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks]);
        _task_form_actions__WEBPACK_IMPORTED_MODULE_4__.formActionsObject.updateTaskList(sortedTasks);
    
        //update local storage
        _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
    },

    //cycle between low-mid-high priority
    changePriority(task, event, taskPriority, taskContainer) {
        switch (true) {
            case taskPriority.classList.contains('task-priority-low'):

                taskPriority.classList.remove('task-priority-low');
                taskContainer.classList.remove('task-container-low-priority');
                taskPriority.classList.add('task-priority-mid');
                taskContainer.classList.add('task-container-mid-priority');
                task.priority = 'medium';
                taskPriority.textContent = 'medium';

                //update local storage
                _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
                break;
    
            case taskPriority.classList.contains('task-priority-mid'):

                taskPriority.classList.remove('task-priority-mid');
                taskContainer.classList.remove('task-container-mid-priority');
                taskPriority.classList.add('task-priority-high');
                taskContainer.classList.add('task-container-high-priority');
                task.priority = 'high';
                taskPriority.textContent = 'high';

                //update local storage
                _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
                break;
    
            case taskPriority.classList.contains('task-priority-high'):

                taskPriority.classList.remove('task-priority-high');
                taskContainer.classList.remove('task-container-high-priority');
                taskPriority.classList.add('task-priority-low');
                taskContainer.classList.add('task-container-low-priority');
                task.priority = 'low';
                taskPriority.textContent = 'low';

                //update local storage
                _local_storage__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_1__.tasks);
                break;
        }
    },
      
    handleTaskEdit(event) {
        const { 
            taskElementLeft, 
            editInputBox, 
            taskContainer, 
            taskTitle,
            taskDescription,
            taskElementRight,
            taskDueDate,
            taskPriority,
            task
        } = editTasksObject.retrieveTaskElements(event);

        if (!taskContainer || !taskElementLeft || !taskElementRight) return null;
      
        //edit task title
        if (event.target.classList.contains('task-title')) {
            taskElementLeft.replaceChild(editInputBox, taskTitle);
            editInputBox.focus();
            editInputBox.addEventListener('keyup', (event) => {
                if (event.key === 'Enter' && editInputBox.value.trim() !== '') {
                    event.preventDefault();
                    event.stopPropagation();    
                    editTasksObject.submitTitle(event, taskTitle, editInputBox);
                }
            });
        }

        //edit task description
        if (event.target.classList.contains('task-description')) {
            taskElementLeft.replaceChild(editInputBox, taskDescription);
            editInputBox.focus();
            editInputBox.addEventListener('keyup', (event) => {
                if (event.key === 'Enter' && editInputBox.value.trim() !== '') {
                    event.preventDefault();
                    event.stopPropagation();    
                    editTasksObject.submitDescription(event, taskDescription, editInputBox);
                }
            });
        }

        //edit task due date
        if (event.target.classList.contains('task-due-date')) {
            editInputBox.type = 'date';
            taskElementRight.replaceChild(editInputBox, taskDueDate);
            editInputBox.focus();
            editInputBox.addEventListener('change', (event) => {
                editTasksObject.submitDueDate(event, taskDueDate, editInputBox);

                //show new location in the task list after sort ** doesn't work
                // if (taskContainer) taskContainer.classList.add('task-glow');
               
                // setTimeout(() => {
                //     taskContainer.classList.remove('task-glow');
                // }, 5000);
            });
        }

        //edit task priority
        if (event.target.classList.contains('task-priority')) {
            editTasksObject.changePriority(task, event, taskPriority, taskContainer);
        }
    },
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortTasksByDate: () => (/* binding */ sortTasksByDate)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _allTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allTasks.js */ "./src/allTasks.js");
/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-factory.js */ "./src/todo-factory.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");
/* harmony import */ var _task_form_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-form-actions.js */ "./src/task-form-actions.js");
/* harmony import */ var _thisWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thisWeek.js */ "./src/thisWeek.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today.js */ "./src/today.js");








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
    _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.createAllQuestsPage.init();
});

sideBarMenuItems.sideBarMenu.addEventListener('click', function(event) {
    if (event.target.classList.contains('all-quests')) {
        allQuestsPage();

        //show selected menu tab
        sideBarMenuItems.addClass(event);

        //remove selected menu tab
        sideBarMenuItems.daysQuestTab.classList.remove('menu-selected');
        sideBarMenuItems.weeksQuestTab.classList.remove('menu-selected');
    }
    if (event.target.classList.contains('days-quests')) {
        _today_js__WEBPACK_IMPORTED_MODULE_6__.daysQuestObject.daysQuestPage();

        //show selected menu tab
        sideBarMenuItems.addClass(event);

        //remove selected menu tab
        sideBarMenuItems.allQuestsTab.classList.remove('menu-selected');
        sideBarMenuItems.weeksQuestTab.classList.remove('menu-selected');
    }
    if (event.target.classList.contains('weeks-quests')) {
        _thisWeek_js__WEBPACK_IMPORTED_MODULE_5__.weeksQuestObject.weeksQuestPage();

        //show selected menu tab
        sideBarMenuItems.addClass(event);

        //remove selected menu tab
        sideBarMenuItems.allQuestsTab.classList.remove('menu-selected');
        sideBarMenuItems.daysQuestTab.classList.remove('menu-selected');
    }
});

function allQuestsPage() {
    //clear the page
    _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.bodyContentContainer.innerHTML = '';

    //import task page elements
    const { titleElement, addTaskButton } = _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.createAllQuestsPage.elements;

    //append tools to page
    _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.bodyContentContainer.appendChild(titleElement);
    _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.bodyContentContainer.appendChild(addTaskButton);

    const retrievedTasks = _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.getTasksFromLocalStorage();

    _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length = 0;
    _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.push(...retrievedTasks);

    const retrievedProjects = _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.getProjectsFromLocalStorage();

    _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects.length = 0;
    _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects.push(...retrievedProjects);

    //prevent task counter from starting with wrong id number on page reload
    if (_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length !== 0) {
        let previousTaskId = _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks[_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length - 1].taskID;
        _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.taskCounterObject.taskCounter = previousTaskId + 1;
    }

    //sort tasks in order on page load
    sortTasksByDate(_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks);

    //render saved projects on page load
    renderProjectsList(_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects);

    _task_form_actions_js__WEBPACK_IMPORTED_MODULE_4__.formActionsObject.updateTaskList(_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks);

    return _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks;
}

function sortTasksByDate(tasks) {
    return  tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}







sideBarMenuItems.projectTasks.addEventListener('click', (event) => {

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

                _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects.push(projectTitle);

                createNewProject(editInputBox, projectTitle);

                //re-establish add button
                sideBarMenuItems.addQuestlineTab.disabled = false;

                _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveProjectsToLocalStorage(_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects);
            }
        });
    }
});

//new project creation
function createNewProject(editInputBox, projectTitle) {

    const newProject = document.createElement('button');

    newProject.textContent = projectTitle;
    sideBarMenuItems.projectsTasksList.replaceChild(newProject, editInputBox);

    newProject.classList.add('new-project');
    newProject.setAttribute('data-project-id', _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projectCounterObject.projectID);

    _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projectCounterObject.projectID++;

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('project-delete');
    deleteProjectButton.textContent = 'x';

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
        newProject.setAttribute('data-project-id', _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projectCounterObject.projectID);
    
        _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projectCounterObject.projectID++;
    
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('project-delete');
        deleteProjectButton.textContent = 'x';
    
        projectsList.appendChild(newProject);
        newProject.appendChild(deleteProjectButton);
        projectsList.appendChild(sideBarMenuItems.addQuestlineTab);
    });
}

function deleteProject() {

}

sideBarMenuItems.projectTasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('project-delete')) {
        console.log('delete that');
    }
})

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localStorageObject: () => (/* binding */ localStorageObject)
/* harmony export */ });
const localStorageObject = {

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

/***/ }),

/***/ "./src/page-elements.js":
/*!******************************!*\
  !*** ./src/page-elements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageElementsObject: () => (/* binding */ pageElementsObject)
/* harmony export */ });
//object to store base items on the page (title, first button etc)
const pageElementsObject = {

    createPageTitle() {
        const titleElement = document.createElement('h1');
        titleElement.innerHTML = 'All Quests';
        titleElement.classList.add('body-title');
        return titleElement;
    },

    createAddTaskButton() {
        const addTaskButton = document.createElement('button');
        addTaskButton.setAttribute('id', 'add-task-button');
        addTaskButton.textContent = '|+| Add Quest';
        return addTaskButton;
    },

    createFormContainer() {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        return formContainer;
    }
}

/***/ }),

/***/ "./src/task-form-actions.js":
/*!**********************************!*\
  !*** ./src/task-form-actions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formActionsObject: () => (/* binding */ formActionsObject)
/* harmony export */ });
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-factory */ "./src/todo-factory.js");
/* harmony import */ var _page_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-elements */ "./src/page-elements.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");





//object to store functions related to task creation / form submission
const formActionsObject = {
    
    attachSubmitListener(submitButton, cancelButton, formContainer, addTaskButton) {

        submitButton.addEventListener('click', function(event) {
            event.preventDefault();

            const titleInput = document.getElementById('title').value.trim();

            if (!titleInput) {
                alert ('Please fill in the title');
                return;
            }

            // console.log(localStorage.getItem('tasks'));
            // bug in here???
            formActionsObject.addTask();
            // console.log(localStorage.getItem('tasks'));

            const tasks = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
            formActionsObject.updateTaskList(tasks);
            addTaskButton.disabled = false;
            formActionsObject.removeForm(formContainer);

            //auto sort into list after creation
            const sortedTasks = (0,___WEBPACK_IMPORTED_MODULE_3__.sortTasksByDate)([...tasks]);
            formActionsObject.updateTaskList(sortedTasks);
        });
    },

    attachCancelListener(submitButton, cancelButton, formContainer, addTaskButton) {

        cancelButton.addEventListener('click', function() {
            addTaskButton.disabled = false;
            formActionsObject.removeForm(formContainer);
        });
    },
    
    updateTaskList(tasks) {

        const bodyContentContainer = document.getElementById('body-content-container');
        const addTaskButton = document.getElementById('add-task-button');
        
        //prevent duplicate tasks
        bodyContentContainer.innerHTML = '';

        //re-add title to page
        const titleElement = _page_elements__WEBPACK_IMPORTED_MODULE_1__.pageElementsObject.createPageTitle();
        bodyContentContainer.appendChild(titleElement);

        //render tasks from array to dom
        formActionsObject.renderTasks(tasks, bodyContentContainer);

        //put add button to bottom of the list
        if(addTaskButton) bodyContentContainer.appendChild(addTaskButton);
    },

    //iterates though the tasks array to display to the dom
    renderTasks(tasks, bodyContentContainer) { 

        tasks.forEach(task => {

        const taskContainer = document.createElement('div');
        bodyContentContainer.appendChild(taskContainer);
        
        //each side of the task item
        const taskElementLeft = document.createElement('div');
        const taskElementRight = document.createElement('div');

        //taskElementLeft items - complete button, title and description
        const taskCompleteButton = document.createElement('button');
        taskCompleteButton.classList.add('task-complete-button');
        taskCompleteButton.setAttribute('id', 'task-complete-button');

        const taskTitle = document.createElement('h2');
        taskTitle.classList.add('task-title');
        taskTitle.setAttribute('id', 'task-title');
        taskTitle.textContent = `${task.title}`;

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.setAttribute('id', 'task-description');
        taskDescription.textContent = `${task.description}`;

        if (taskDescription.textContent == '') {
            taskDescription.textContent = '(empty)';
        }

        //taskElementRight - due date, priority, delete button
        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        if (task.dueDate == '') task.dueDate = '(no due date)';
        taskDueDate.textContent = `${task.dueDate}`;

        const taskPriority = document.createElement('button');
        taskPriority.classList.add('task-priority');
        taskPriority.textContent = `${task.priority}`;

        //update css based on priority value
        formActionsObject.displayPriority(task, taskContainer, taskPriority);

        const taskDelete = document.createElement('button');
        taskDelete.classList.add('task-delete');
        taskDelete.textContent = 'delete';

        //append elements to page
        taskElementLeft.appendChild(taskCompleteButton);
        taskElementLeft.appendChild(taskTitle);
        taskElementLeft.appendChild(taskDescription);    

        taskElementRight.appendChild(taskDueDate);
        taskElementRight.appendChild(taskPriority);
        taskElementRight.appendChild(taskDelete);

        taskContainer.appendChild(taskElementLeft);
        taskContainer.appendChild(taskElementRight);

        taskContainer.setAttribute('data-task-id', task.taskID);
        taskContainer.classList.add('task-container');
        taskElementLeft.classList.add('task-element-left');
        taskElementRight.classList.add('task-element-right');

        //display task completion on page-load
        if (task.status == 'complete') return formActionsObject.updateDisplayComplete(taskContainer, taskCompleteButton, taskTitle, taskDescription);
        if (task.status == 'incomplete') return formActionsObject.updateDisplayIncomplete(taskContainer, taskCompleteButton, taskTitle, taskDescription);
        });    
    },

    //made bc editTasks functions were incompatible
    updateDisplayComplete(taskContainer, taskCompleteButton, taskTitle, taskDescription) {
        taskContainer.classList.add('completed-task');
        taskCompleteButton.classList.add('completed-checked');
        taskTitle.classList.add('completed-task-text');
        taskDescription.classList.add('completed-task-text');
    },

    //made bc editTasks functions were incompatible
    updateDisplayIncomplete(taskContainer, taskCompleteButton, taskTitle, taskDescription) {
        taskContainer.classList.remove('completed-task');
        taskCompleteButton.classList.remove('completed-checked');
        taskTitle.classList.remove('completed-task-text');
        taskDescription.classList.remove('completed-task-text');
    },
    
    removeForm(formContainer) {
        const bodyContentContainer = document.getElementById('body-content-container');

        if (formContainer.firstChild) formContainer.removeChild(formContainer.firstChild);
        if (bodyContentContainer.contains(formContainer)) bodyContentContainer.removeChild(formContainer);
    },

    //called by submit button to put task onto page
    addTask() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('date').value;
        const priority = document.getElementById('priority-selection').value;

        
        const newTask = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.createTask)(title, description, dueDate, priority);
    
        _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks);

        return newTask;
    },

    //css to task container and priority button based on priority value
    displayPriority(task, taskContainer, taskPriority) {

        //prevent stacking multiple classes
        taskContainer.classList.remove('task-container-low-priority');
        taskContainer.classList.remove('task-container-mid-priority');
        taskContainer.classList.remove('task-container-high-priority');

        if (task.priority === 'low') {
            taskPriority.classList.add('task-priority-low');
            taskContainer.classList.add('task-container-low-priority');
        }

        if (task.priority === 'medium') {
            taskPriority.classList.add('task-priority-mid');
            taskContainer.classList.add('task-container-mid-priority');
        }

        if (task.priority === 'high') {
            taskPriority.classList.add('task-priority-high');
            taskContainer.classList.add('task-container-high-priority');
        }
    }

}

/***/ }),

/***/ "./src/task-form.js":
/*!**************************!*\
  !*** ./src/task-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskFormObject: () => (/* binding */ taskFormObject)
/* harmony export */ });
//object to store functions that create form to generate individual tasks
const taskFormObject = {

    createFormLayout(formContainer) {

        //create form objects
        const form = document.createElement('form');
        const formLeft = document.createElement('div');
        const formRight = document.createElement('div');
        const formBottom = document.createElement('div');

        //append elements to form
        formContainer.appendChild(form);
        form.appendChild(formLeft);
        form.appendChild(formRight);
        form.appendChild(formBottom);

        //add classes
        form.classList.add('form');
        formLeft.classList.add('form-left');
        formRight.classList.add('form-right');
        formBottom.classList.add('form-bottom');

        return { form, formLeft, formRight, formBottom };
    },

    createFormTitle(formLeft) {

        //create title elements
        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        const titleInput = document.createElement('input');
        titleInput.setAttribute('placeholder', 'Title');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        titleInput.setAttribute('name', 'title');
        titleInput.setAttribute('required', '');

        //prevent page refresh
        titleInput.addEventListener('keydown', function(event) { 
            if (event.key === 'Enter') event.preventDefault();
        });

        //append to left side
        formLeft.appendChild(titleLabel);
        formLeft.appendChild(titleInput);
        titleInput.focus();
        
        //add class
        titleInput.classList.add('form-title');

        return { titleLabel, titleInput };
    },

    createFormDescription(formLeft) {

        //create description elements
        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        const descriptionInput = document.createElement('textarea');
        descriptionInput.setAttribute('placeholder', 'Description (optional)');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('id', 'description');
        descriptionInput.setAttribute('name', 'description');
        descriptionInput.rows = 2;

        //append to left side 
        formLeft.appendChild(descriptionLabel);
        formLeft.appendChild(descriptionInput);

        //add class
        descriptionInput.classList.add('form-description');

        return { descriptionLabel, descriptionInput };
    },

    createFormDate(formRight) {

        //create date elements
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'date');
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('name', 'date');

        //append to right side
        formRight.appendChild(dateLabel);
        formRight.appendChild(dateInput);

        //add class
        dateInput.classList.add('form-date');

        return { dateLabel, dateInput };
    },

    createFormPrioritySelector(formRight) {

        //create priority selection dropbox and options
        const selectLabel = document.createElement('label');
        selectLabel.setAttribute('for', 'priority-selection');
        // selectLabel.textContent = 'Priority';
        const selectInput = document.createElement('select');
        selectInput.setAttribute('id', 'priority-selection');
        // const placeholderOption = document.createElement('option');
        // placeholderOption.text = 'Priority';
        // placeholderOption.disabled = true;
        // placeholderOption.selected = true;
        const option1 = document.createElement('option');
        option1.value = 'low';
        option1.text = 'Low (Priority)';
        option1.selected = true;
        const option2 = document.createElement('option');
        option2.value = 'medium';
        option2.text = 'Medium';
        const option3 = document.createElement('option');
        option3.value = 'high';
        option3.text = 'High';

        //append to right side
        formRight.appendChild(selectLabel);
        formRight.appendChild(selectInput);
        // selectInput.appendChild(placeholderOption);
        selectInput.appendChild(option1);
        selectInput.appendChild(option2);
        selectInput.appendChild(option3);

        //add class
        selectInput.classList.add('form-select');

        return { selectLabel, selectInput, option1, option2, option3 };
    },

    createFormButtons(formBottom) {

        //create button elements
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'button');
        submitButton.textContent = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';

        //append to bottom
        formBottom.appendChild(submitButton);
        submitButton.setAttribute('id', 'submit-button');
        formBottom.appendChild(cancelButton);
        cancelButton.setAttribute('id', 'cancel-button')

        //add classes
        submitButton.classList.add('submit-button')
        cancelButton.classList.add('cancel-button');    

        return { submitButton, cancelButton };
    }
}

/***/ }),

/***/ "./src/thisWeek.js":
/*!*************************!*\
  !*** ./src/thisWeek.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weeksQuestObject: () => (/* binding */ weeksQuestObject)
/* harmony export */ });
/* harmony import */ var _allTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allTasks.js */ "./src/allTasks.js");
/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-factory.js */ "./src/todo-factory.js");
/* harmony import */ var _task_form_actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-form-actions.js */ "./src/task-form-actions.js");
/* harmony import */ var _page_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-elements.js */ "./src/page-elements.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today.js */ "./src/today.js");







const weeksQuestObject = {
    
    weeksQuestPage() {
        //clear the page
        _allTasks_js__WEBPACK_IMPORTED_MODULE_0__.bodyContentContainer.innerHTML = '';

        //import elements
        const titleElement = _page_elements_js__WEBPACK_IMPORTED_MODULE_3__.pageElementsObject.createPageTitle();

        //append tools to page
        _allTasks_js__WEBPACK_IMPORTED_MODULE_0__.bodyContentContainer.appendChild(titleElement);
        
        //get weeks's date
        const { startOfWeek, endOfWeek } = weeksQuestObject.getWeekRange();

        //get variables to display in header
        let startOfWeekDay = startOfWeek.getDate();
        let endOfWeekDay = endOfWeek.getDate();
        let thisMonth = new Date().toLocaleString('en-US', { month: 'short' });

        //update page title
        titleElement.textContent = `Week's Quests: ${thisMonth} ${startOfWeekDay} - ${endOfWeekDay}`;

        //filter weeks's tasks
        let weeksTasks = _todo_factory_js__WEBPACK_IMPORTED_MODULE_1__.tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            return taskDate >= startOfWeek && taskDate <= endOfWeek;
            });

        //display filtered array to dom
        _task_form_actions_js__WEBPACK_IMPORTED_MODULE_2__.formActionsObject.renderTasks(weeksTasks, _allTasks_js__WEBPACK_IMPORTED_MODULE_0__.bodyContentContainer);

        //tasks tasks this week message
        const taskContainer = document.querySelector('.task-container');
        if(!taskContainer) {
            _today_js__WEBPACK_IMPORTED_MODULE_4__.daysQuestObject.showNoTaskToday(_allTasks_js__WEBPACK_IMPORTED_MODULE_0__.bodyContentContainer);
            const noTask = document.querySelector('.no-task');
            noTask.textContent = 'No Quests Due This Week';
        }

        return weeksTasks;
    },

    getWeekRange() {
        const currentDate = new Date();
        const currentDay = currentDate.getDay(); //0 (sun) to 6 (sat)
    
        //calculate the difference between the current day and the start of the week (sun)
        const startOfWeekDiff = currentDay === 0 ? 0 : currentDay;
    
        //calculate the start of the week by subtracting the difference
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - (startOfWeekDiff));    

        //calculate the end of the week by adding the remaining days until sat
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        //set beginning time of week to sunday midnight of first day
        startOfWeek.setHours(0, 0, 0);

        //set end time of week to 11:59pm of last day
        endOfWeek.setHours(23, 59, 59);
    
        return { startOfWeek, endOfWeek };
    }
};

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysQuestObject: () => (/* binding */ daysQuestObject)
/* harmony export */ });
/* harmony import */ var _allTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allTasks.js */ "./src/allTasks.js");
/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-factory.js */ "./src/todo-factory.js");
/* harmony import */ var _task_form_actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-form-actions.js */ "./src/task-form-actions.js");
/* harmony import */ var _page_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-elements.js */ "./src/page-elements.js");





//load the day's quest page
const daysQuestObject = {
    
    daysQuestPage() {
        //clear the page
        _allTasks_js__WEBPACK_IMPORTED_MODULE_0__.bodyContentContainer.innerHTML = '';

        //import elements
        const titleElement = _page_elements_js__WEBPACK_IMPORTED_MODULE_3__.pageElementsObject.createPageTitle();

        //append tools to page
        _allTasks_js__WEBPACK_IMPORTED_MODULE_0__.bodyContentContainer.appendChild(titleElement);

        //update page title
        titleElement.textContent = `Day's Quests`;
        
        //get today's date
        const today = daysQuestObject.getTodayDate();

        //filter today's tasks
        let todaysTasks = _todo_factory_js__WEBPACK_IMPORTED_MODULE_1__.tasks.filter(task => task.dueDate == today);

        //display filtered array to dom
        _task_form_actions_js__WEBPACK_IMPORTED_MODULE_2__.formActionsObject.renderTasks(todaysTasks, _allTasks_js__WEBPACK_IMPORTED_MODULE_0__.bodyContentContainer);

        const taskContainer = document.querySelector('.task-container');
        if(!taskContainer) {
            daysQuestObject.showNoTaskToday(_allTasks_js__WEBPACK_IMPORTED_MODULE_0__.bodyContentContainer);
        }

        return todaysTasks;
    },

    showNoTaskToday(bodyContentContainer) {
        const noTaskMessage = document.createElement('div');
        noTaskMessage.classList.add('no-task');
        noTaskMessage.textContent = 'No Quests Due Today';
        bodyContentContainer.appendChild(noTaskMessage);

        return noTaskMessage;
    },

    getTodayDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }
};

/***/ }),

/***/ "./src/todo-factory.js":
/*!*****************************!*\
  !*** ./src/todo-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   projectCounterObject: () => (/* binding */ projectCounterObject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   taskCounterObject: () => (/* binding */ taskCounterObject),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");


//task array to store all tasks
const tasks = [];

const projects = [];

const taskCounterObject = {
    taskCounter: 0,
}

const projectCounterObject = {
    projectID: 0,
}

//creates task objects
function createTask(title, description, dueDate, priority) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        status: 'incomplete',
        taskID: taskCounterObject.taskCounter,
        projectName: '',
    };

    taskCounterObject.taskCounter++;

    tasks.push(task);
    // console.log(tasks);

    //save tasks to local storage after creating a new task
    _local_storage__WEBPACK_IMPORTED_MODULE_0__.localStorageObject.saveTasksToLocalStorage(tasks);

    return task;
}

//send task array to be displayed
function getTasks() {

    //retrieve tasks from local storage before returning
    return _local_storage__WEBPACK_IMPORTED_MODULE_0__.localStorageObject.getTasksFromLocalStorage();
}

function getProjects() {

    return _local_storage__WEBPACK_IMPORTED_MODULE_0__.localStorageObject.getProjectsFromLocalStorage();
}

/***/ }),

/***/ "./src/fonts/QueensidesMedium-x30zV.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/QueensidesMedium-x30zV.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05fc9101e644828619df.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu-n1M0.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Ubuntu-n1M0.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "768d480f584ebef78ff5.ttf";

/***/ }),

/***/ "./src/imgs/backdrop-2.jpg":
/*!*********************************!*\
  !*** ./src/imgs/backdrop-2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c6390d191a80ad841d4.jpg";

/***/ }),

/***/ "./src/imgs/checked.png":
/*!******************************!*\
  !*** ./src/imgs/checked.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "861324da99611e46145f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLGlIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFL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QUNsQztBQUNBLFFBQVEsOERBQWtCLHlCQUF5QixnREFBSzs7QUFFeEQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNwTUE7QUFDTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtB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VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1mb3JtLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGhpc1dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy9iYWNrZHJvcC0yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUXVlZW5zaWRlc01lZGl1bS14MzB6Vi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1VidW50dS1uMU0wLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1ncy9jaGVja2VkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogY3NzIHJlc2V0ICovXG4qLCBcbmh0bWwge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cbn1cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzJkMjc0OTtcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2RmNzJhOTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgLS1ib3JkZXItY29sb3I6IHJlZDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgLS1mb250LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWdhcDogMXJlbTtcbiAgICAtLWNhbmNlbC1jb2xvcjogI2E1MmYyZjtcbiAgICAtLXN1Ym1pdC1jb2xvcjogIzAyNmUwMmNmO1xuICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIC0tbG93LXByaW9yaXR5OiB5ZWxsb3c7XG4gICAgLS1sb3ctYmFja2dyb3VuZDogI2ZmZmYwMDE0O1xuICAgIC0tbWlkLXByaW9yaXR5OiBvcmFuZ2U7XG4gICAgLS1taWQtYmFja2dyb3VuZDogI2ZmYTUwMDFjO1xuICAgIC0taGlnaC1wcmlvcml0eTogI2ZmNDE0MTtcbiAgICAtLWhpZ2gtYmFja2dyb3VuZDogI2ZmNDE0MTI5O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSksIGZvcm1hdCgndHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pLCBmb3JtYXQoJ3R0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDRmciAwLjI1ZnI7XG59XG5cbi8qIGhlYWRlciAqL1xuaGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbn1cblxuLnN2ZyB7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuLyogc2lkZS1iYXIgKi9cbi5zaWRlLWJhciB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4jaG9tZS10YXNrcyB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG59XG5cbi5wcm9qZWN0LXRhc2tzIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMTdyZW07XG59XG5cbi5wcm9qZWN0LXRhc2tzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5uZXctcHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubmV3LXByb2plY3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMjY7ICovXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIC8qIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzAwMDAwMDYzOyAqL1xufVxuXG4ucHJvamVjdC1kZWxldGUge1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbn1cblxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNob21lLXRhc2tzLFxuLnByb2plY3QtdGFza3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5zaWRlLWJhci10aXRsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbn1cblxuIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBnbG93IHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC42KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xuICAgIH1cbn1cblxubGkgPiBidXR0b24sXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbixcbiNzdWJtaXQtYnV0dG9uLFxuI2NhbmNlbC1idXR0b24sXG4ubmV3LXByb2plY3QsXG4ucHJvamVjdC1kZWxldGUge1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWVudS1zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgOHMgaW5maW5pdGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC43cmVtO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxubGkgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XG59XG5cbi8qIG1haW4gKi9cbi5ib2R5IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLmJvZHktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZm9ybS1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMnJlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZ2FwOiAxLjVyZW07XG59XG5cbi5mb3JtLWxlZnQsXG4uZm9ybS1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmZvcm0tbGVmdCB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZm9ybS1yaWdodCB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xufVxuXG4uZm9ybS1ib3R0b20ge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4vKiBzdWJtaXQtYnV0dG9uL2FkZC1idXR0b24gKi9cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1zdWJtaXQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zdWJtaXQtY29sb3IpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tY2FuY2VsLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLWNvbG9yKTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcbn1cblxuLnN1Ym1pdC1idXR0b24sIFxuLmNhbmNlbC1idXR0b24ge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmZvcm0tYm90dG9tID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cblxuLmZvcm0tdGl0bGUsXG4uZm9ybS1kZXNjcmlwdGlvbixcbi5mb3JtLWRhdGUsXG4uZm9ybS1zZWxlY3Qge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0tdGl0bGUge1xuICAgIGhlaWdodDogMXJlbTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uZm9ybS1kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmZvcm0tZGF0ZSxcbi5mb3JtLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1pbi13aWR0aDogMzdyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBnYXA6IDAuNXJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzM2MTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXG59XG5cbi50YXNrLWVsZW1lbnQtbGVmdCxcbi50YXNrLWVsZW1lbnQtcmlnaHQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWVsZW1lbnQtbGVmdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhc2stY29tcGxldGUtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jb21wbGV0ZWQtdGFzayB7XG4gICAgYmFja2dyb3VuZDogIzAwZjkwMDNkO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA0ZmYwNDtcbiAgICBjb2xvcjogI2ZmZmZmZjY5O1xufVxuXG4uY29tcGxldGVkLXRhc2stdGV4dCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5jb21wbGV0ZWQtY2hlY2tlZCB7XG4gICAgYm9yZGVyOiBub25lOyAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGFzay10aXRsZTpob3Zlcixcbi50YXNrLWRlc2NyaXB0aW9uOmhvdmVyLFxuLnRhc2stZHVlLWRhdGU6aG92ZXIsXG4udGFzay1jb21wbGV0ZS1idXR0b246aG92ZXIsXG4udGFzay1wcmlvcml0eTpob3Zlcixcbi50YXNrLWRlbGV0ZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi50YXNrLWR1ZS1kYXRlIHtcbiAgICB3aWR0aDogNi4xcmVtO1xufVxuXG4vKiBwcmlvcml0eSBlbWJsZW0gaXRzZWxmKi9cbi50YXNrLXByaW9yaXR5IHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxufVxuXG4udGFzay1wcmlvcml0eS1sb3csXG4udGFzay1wcmlvcml0eS1taWQsXG4udGFzay1wcmlvcml0eS1oaWdoIHtcbiAgICB3aWR0aDogNS41cmVtO1xufVxuXG4udGFzay1wcmlvcml0eS1sb3cge1xuICAgIGNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XG59XG5cbi50YXNrLXByaW9yaXR5LW1pZCB7XG4gICAgY29sb3I6IHZhcigtLW1pZC1wcmlvcml0eSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTtcbn1cblxuLnRhc2stcHJpb3JpdHktaGlnaCB7XG4gICAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xufVxuXG4vKiB0YXNrIGNvbnRhaW5lciAocHJpb3JpdHkpKi9cbi50YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHkge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctYmFja2dyb3VuZCk7ICovXG59XG5cbi50YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHkge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmFja2dyb3VuZCk7ICovXG59XG5cbi50YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5IHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1iYWNrZ3JvdW5kKTsgKi9cbn1cblxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICMwMDAwMDA2Mztcbn1cblxuLnRhc2stZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogM3JlbTtcbn1cblxuLm5vLXRhc2sge1xuICAgIGhlaWdodDogMTUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJvcmRlcjogdmFyKC0tYm9yZGVyKTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgNnMgaW5maW5pdGU7XG59XG5cbi8qIHRvIG9idmlvdXNseSBzaG93IHdoZXJlIHRoZSB0YXNrIG1vdmVkIHVwb24gc29ydCAqL1xuLnRhc2stZ2xvdyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNyk7IFxuICAgIGFuaW1hdGlvbjogZ2xvdyA1cyBpbmZpbml0ZTtcbn1cblxuZm9vdGVyIHtcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmNvbnRlbnQgPiBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3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WTtJQUNaLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjc3MgcmVzZXQgKi9cXG4qLCBcXG5odG1sIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzJkMjc0OTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNkZjcyYTk7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgLS1ib3JkZXItY29sb3I6IHJlZDtcXG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICAtLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgICAtLWdhcDogMXJlbTtcXG4gICAgLS1jYW5jZWwtY29sb3I6ICNhNTJmMmY7XFxuICAgIC0tc3VibWl0LWNvbG9yOiAjMDI2ZTAyY2Y7XFxuICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9iYWNrZHJvcC0yLmpwZyk7XFxuICAgIC0tbG93LXByaW9yaXR5OiB5ZWxsb3c7XFxuICAgIC0tbG93LWJhY2tncm91bmQ6ICNmZmZmMDAxNDtcXG4gICAgLS1taWQtcHJpb3JpdHk6IG9yYW5nZTtcXG4gICAgLS1taWQtYmFja2dyb3VuZDogI2ZmYTUwMDFjO1xcbiAgICAtLWhpZ2gtcHJpb3JpdHk6ICNmZjQxNDE7XFxuICAgIC0taGlnaC1iYWNrZ3JvdW5kOiAjZmY0MTQxMjk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1F1ZWVuc2lkZXNNZWRpdW0teDMwelYudHRmJyksIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9VYnVudHUtbjFNMC50dGYnKSwgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNGZyIDAuMjVmcjtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbn1cXG5cXG4uc3ZnIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4vKiBzaWRlLWJhciAqL1xcbi5zaWRlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuI2hvbWUtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAxN3JlbTtcXG59XFxuXFxuLnByb2plY3QtdGFza3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW0gIWltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDI2OyAqL1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIC8qIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzAwMDAwMDYzOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2hvbWUtdGFza3MsXFxuLnByb2plY3QtdGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4uc2lkZS1iYXItdGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICB9XFxufVxcblxcbiBAa2V5ZnJhbWVzIHB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC42KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xcbiAgICB9XFxufVxcblxcbmxpID4gYnV0dG9uLFxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uLFxcbiNzdWJtaXQtYnV0dG9uLFxcbiNjYW5jZWwtYnV0dG9uLFxcbi5uZXctcHJvamVjdCxcXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1lbnUtc2VsZWN0ZWQge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgOHMgaW5maW5pdGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbn1cXG5cXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmxpID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XFxufVxcblxcbi8qIG1haW4gKi9cXG4uYm9keSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5ib2R5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1ncy9iYWNrZHJvcC0yLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uZm9ybS1sZWZ0LFxcbi5mb3JtLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tbGVmdCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5mb3JtLXJpZ2h0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbn1cXG5cXG4uZm9ybS1ib3R0b20ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qIHN1Ym1pdC1idXR0b24vYWRkLWJ1dHRvbiAqL1xcbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tc3VibWl0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXN1Ym1pdC1jb2xvcik7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcXG59XFxuXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiwgXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tYm90dG9tID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbn1cXG5cXG4uZm9ybS10aXRsZSxcXG4uZm9ybS1kZXNjcmlwdGlvbixcXG4uZm9ybS1kYXRlLFxcbi5mb3JtLXNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZm9ybS1kZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZm9ybS1kYXRlLFxcbi5mb3JtLXNlbGVjdCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEycmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWluLXdpZHRoOiAzN3JlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzM2MTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cXG59XFxuXFxuLnRhc2stZWxlbWVudC1sZWZ0LFxcbi50YXNrLWVsZW1lbnQtcmlnaHQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZWxlbWVudC1sZWZ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmNvbXBsZXRlZC10YXNrIHtcXG4gICAgYmFja2dyb3VuZDogIzAwZjkwMDNkO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNGZmMDQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmNjk7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFzay10ZXh0IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5jb21wbGV0ZWQtY2hlY2tlZCB7XFxuICAgIGJvcmRlcjogbm9uZTsgICBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9jaGVja2VkLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlOmhvdmVyLFxcbi50YXNrLWRlc2NyaXB0aW9uOmhvdmVyLFxcbi50YXNrLWR1ZS1kYXRlOmhvdmVyLFxcbi50YXNrLWNvbXBsZXRlLWJ1dHRvbjpob3ZlcixcXG4udGFzay1wcmlvcml0eTpob3ZlcixcXG4udGFzay1kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kdWUtZGF0ZSB7XFxuICAgIHdpZHRoOiA2LjFyZW07XFxufVxcblxcbi8qIHByaW9yaXR5IGVtYmxlbSBpdHNlbGYqL1xcbi50YXNrLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbG93LFxcbi50YXNrLXByaW9yaXR5LW1pZCxcXG4udGFzay1wcmlvcml0eS1oaWdoIHtcXG4gICAgd2lkdGg6IDUuNXJlbTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbG93IHtcXG4gICAgY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LW1pZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1taWQtcHJpb3JpdHkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1oaWdoIHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG59XFxuXFxuLyogdGFzayBjb250YWluZXIgKHByaW9yaXR5KSovXFxuLnRhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctYmFja2dyb3VuZCk7ICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHkge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkLWJhY2tncm91bmQpOyAqL1xcbn1cXG5cXG4udGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLWJhY2tncm91bmQpOyAqL1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICMwMDAwMDA2MztcXG59XFxuXFxuLnRhc2stZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLm5vLXRhc2sge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJvcmRlcjogdmFyKC0tYm9yZGVyKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgNnMgaW5maW5pdGU7XFxufVxcblxcbi8qIHRvIG9idmlvdXNseSBzaG93IHdoZXJlIHRoZSB0YXNrIG1vdmVkIHVwb24gc29ydCAqL1xcbi50YXNrLWdsb3cge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC43KTsgXFxuICAgIGFuaW1hdGlvbjogZ2xvdyA1cyBpbmZpbml0ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbi5jb250ZW50ID4gZGl2IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwYWdlRWxlbWVudHNPYmplY3QgfSBmcm9tIFwiLi9wYWdlLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyB0YXNrRm9ybU9iamVjdCB9IGZyb20gXCIuL3Rhc2stZm9ybVwiO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tIFwiLi90YXNrLWZvcm0tYWN0aW9uc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tzT2JqZWN0IH0gZnJvbSBcIi4vZWRpdFRhc2tzXCI7XG5cbmV4cG9ydCBjb25zdCBib2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG5cbi8vbWFpbiBmdW5jdGlvbiB0byBwb3B1bGF0ZSB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFsbFF1ZXN0c1BhZ2UgPSB7XG5cbiAgICB0aXRsZUVsZW1lbnQ6IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKSxcbiAgICBhZGRUYXNrQnV0dG9uOiBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlQWRkVGFza0J1dHRvbigpLFxuICAgIGZvcm1Db250YWluZXI6IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVGb3JtQ29udGFpbmVyKCksXG5cbiAgICAvL2NsaWNrIHRvIGFkZCBuZXcgdGFza1xuICAgIGFkZFRhc2soKSB7XG4gICAgICAgIGhhbmRsZUFkZFRhc2soY3JlYXRlQWxsUXVlc3RzUGFnZS5hZGRUYXNrQnV0dG9uLCBjcmVhdGVBbGxRdWVzdHNQYWdlLmZvcm1Db250YWluZXIpO1xuICAgIH0sXG5cbiAgICAvL2NsaWNrIHRvIG1hcmsgdGFzayBjb21wbGV0ZVxuICAgIGNvbXBsZXRlVGFzayhldmVudCkge1xuICAgICAgICBlZGl0VGFza3NPYmplY3QuaGFuZGxlQ29tcGxldGVUYXNrKGV2ZW50KTtcbiAgICB9LFxuICAgIFxuICAgIC8vY2xpY2sgdG8gZGVsZXRlIHRhc2tcbiAgICBkZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGVkaXRUYXNrc09iamVjdC5oYW5kbGVEZWxldGVUYXNrKGV2ZW50KTtcbiAgICB9LFxuXG4gICAgLy9kb3VibGUgY2xpY2sgdG8gZWRpdCB0YXNrc1xuICAgIGVkaXRUYXNrKGV2ZW50KSB7XG4gICAgICAgIGVkaXRUYXNrc09iamVjdC5oYW5kbGVUYXNrRWRpdChldmVudCk7XG4gICAgfSxcblxuICAgIC8vYXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVGFzayk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jb21wbGV0ZVRhc2spO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVGFzayk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcy5lZGl0VGFzayk7XG4gICAgfSxcblxuICAgIGdldCBlbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGVFbGVtZW50OiB0aGlzLnRpdGxlRWxlbWVudCwgYWRkVGFza0J1dHRvbjogdGhpcy5hZGRUYXNrQnV0dG9uIH07XG4gICAgfSxcbn07XG5cbi8vY3JlYXRlcyB0aGUgdGFzayBjcmVhdGlvbiBmb3JtXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrKGFkZFRhc2tCdXR0b24sIGZvcm1Db250YWluZXIpIHtcbiAgICBhZGRUYXNrQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHsgZm9ybSwgZm9ybUxlZnQsIGZvcm1SaWdodCwgZm9ybUJvdHRvbSB9ID0gdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybUxheW91dChmb3JtQ29udGFpbmVyKTtcbiAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy9jYWxsIGZvcm0gZnVuY3Rpb25zIHRvIGZpbGwgaW4gdGhlIGZvcm0uLi5cbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtVGl0bGUoZm9ybUxlZnQpO1xuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1EZXNjcmlwdGlvbihmb3JtTGVmdCk7XG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybURhdGUoZm9ybVJpZ2h0KTtcbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtUHJpb3JpdHlTZWxlY3Rvcihmb3JtUmlnaHQpO1xuICAgIGNvbnN0IHsgc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24gfSA9IHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1CdXR0b25zKGZvcm1Cb3R0b20pO1xuXG4gICAgLy9hdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIGNyZWF0ZWQgc3VibWl0L2NhbmNlbCBidXR0b25zXG4gICAgZm9ybUFjdGlvbnNPYmplY3QuYXR0YWNoU3VibWl0TGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pO1xuICAgIGZvcm1BY3Rpb25zT2JqZWN0LmF0dGFjaENhbmNlbExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBmb3JtQ29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHRhc2tzLCBjcmVhdGVUYXNrLCBnZXRUYXNrcyB9IGZyb20gXCIuL3RvZG8tZmFjdG9yeVwiO1xuaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi9hbGxUYXNrc1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlT2JqZWN0IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tIFwiLi90YXNrLWZvcm0tYWN0aW9uc1wiO1xuaW1wb3J0IHsgc29ydFRhc2tzQnlEYXRlIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrc09iamVjdCA9IHtcblxuICAgIC8vdG9nZ2xlcyB0YXNrIGJldHdlZW4gY29tcGxldGUgYW5kIGluY29tcGxldGVcbiAgICBoYW5kbGVDb21wbGV0ZVRhc2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1jb21wbGV0ZS1idXR0b24nKTtcblxuICAgICAgICBpZiAodGFza0NvbXBsZXRlKSB7IC8vY2FuIGdldCB0aGVzZSBmcm9tIGdldEVsZW1lbnRzKClcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySUQgPSBwYXJzZUludCh0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50TGVmdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRvbVRpdGxlID0gdGFza0VsZW1lbnRMZWZ0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkb21EZXNjcmlwdGlvbiA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3VuZFRhc2sgPSB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay50YXNrSUQgPT0gdGFza0NvbnRhaW5lcklEKTtcblxuICAgICAgICAgICAgaWYgKGZvdW5kVGFzay5zdGF0dXMgPT09ICdpbmNvbXBsZXRlJykgcmV0dXJuIGVkaXRUYXNrc09iamVjdC5pc0NvbXBsZXRlKGZvdW5kVGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoZm91bmRUYXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJykgcmV0dXJuIGVkaXRUYXNrc09iamVjdC5pc0luY29tcGxldGUoZm91bmRUYXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL2RlbGV0ZXMgb2JqZWN0IGluIHRhc2sgYXJyYXkgYW5kIHJlbW92ZXMgZG9tIGRpc3BsYXkgZWxlbWVudFxuICAgIGhhbmRsZURlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGVsZXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKHRhc2tEZWxldGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJJRCA9IHBhcnNlSW50KHRhc2tDb250YWluZXIuZGF0YXNldC50YXNrSWQpO1xuXG4gICAgICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay50YXNrSUQgPT09IHRhc2tDb250YWluZXJJRCk7XG5cbiAgICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgICAgICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vY2hhbmdlcyBzdGF0dXMgKyBkb20gdG8gY29tcGxldGVcbiAgICBpc0NvbXBsZXRlKHRhc2ssIHRhc2tDb250YWluZXIsIGV2ZW50LCBkb21UaXRsZSwgZG9tRGVzY3JpcHRpb24pIHtcblxuICAgICAgICAvL3VwZGF0ZSB0YXNrIG9iamVjdCBzdGF0dXNcbiAgICAgICAgdGFzay5zdGF0dXMgPSAnY29tcGxldGUnO1xuXG4gICAgICAgIC8vY3NzIHRvIGRpc3BsYXkgY29tcGxldGVkIHN0YXR1c1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtY2hlY2tlZCcpO1xuICAgICAgICBkb21UaXRsZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIGRvbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcblxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIC8vY2hhbmdlcyBzdGF0dXMgKyBkb20gdG8gaW5jb21wbGV0ZVxuICAgIGlzSW5jb21wbGV0ZSh0YXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKSB7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3Qgc3RhdHVzXG4gICAgICAgIHRhc2suc3RhdHVzID0gJ2luY29tcGxldGUnO1xuXG4gICAgICAgIC8vY3NzIHRvIGRpc3BsYXkgY29tcGxldGVkIHN0YXR1c1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtY2hlY2tlZCcpO1xuICAgICAgICBkb21UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIGRvbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcblxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIHJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGlmICghdGFza0NvbnRhaW5lcikgcmV0dXJuIG51bGw7XG4gICAgICBcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnRMZWZ0ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFza0VsZW1lbnRMZWZ0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50UmlnaHQgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVsZW1lbnQtcmlnaHQnKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrRWxlbWVudFJpZ2h0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tFbGVtZW50UmlnaHQucXVlcnlTZWxlY3RvcignLnRhc2stcHJpb3JpdHknKTtcblxuICAgICAgICBjb25zdCBlZGl0SW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlZGl0SW5wdXRCb3guY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tJRE51bWJlciA9IHBhcnNlSW50KHRhc2tDb250YWluZXIuZGF0YXNldC50YXNrSWQpO1xuICAgICAgICBjb25zdCB0YXNrID0gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay50YXNrSUQgPT09IHRhc2tJRE51bWJlcik7XG4gICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIsXG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQsXG4gICAgICAgICAgICB0YXNrVGl0bGUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LFxuICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHksXG4gICAgICAgICAgICBlZGl0SW5wdXRCb3gsXG4gICAgICAgICAgICB0YXNrSUROdW1iZXIsXG4gICAgICAgICAgICB0YXNrXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBcbiAgICAvL2hhbmRsZXMgbmV3IGVkaXRlZCB0aXRsZSBzdWJtaXNzaW9uXG4gICAgc3VibWl0VGl0bGUoZXZlbnQsIHRhc2tUaXRsZSwgZWRpdElucHV0Qm94KSB7XG5cbiAgICAgICAgY29uc3QgeyB0YXNrRWxlbWVudExlZnQsIHRhc2sgfSA9IGVkaXRUYXNrc09iamVjdC5yZXRyaWV2ZVRhc2tFbGVtZW50cyhldmVudCk7XG4gICAgICAgIFxuICAgICAgICAvL3JlbW92ZSBpbnB1dCBib3ggYW5kIHJlc3RvcmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKHRhc2tUaXRsZSwgZWRpdElucHV0Qm94KTtcblxuICAgICAgICAvL3VwZGF0ZSB0YXNrIG9iamVjdCB0aXRsZVxuICAgICAgICB0YXNrLnRpdGxlID0gZWRpdElucHV0Qm94LnZhbHVlO1xuXG4gICAgICAgIC8vdXBkYXRlIERPTSBkaXNwbGF5XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgXG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICB9LFxuXG4gICAgLy9oYW5kbGVzIG5ldyBlZGl0ZWQgZGVzY3JpcHRpb24gc3VibWlzc2lvblxuICAgIHN1Ym1pdERlc2NyaXB0aW9uKGV2ZW50LCB0YXNrRGVzY3JpcHRpb24sIGVkaXRJbnB1dEJveCkge1xuXG4gICAgICAgIGNvbnN0IHsgdGFza0VsZW1lbnRMZWZ0LCB0YXNrIH0gPSBlZGl0VGFza3NPYmplY3QucmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9yZW1vdmUgaW5wdXQgYm94IGFuZCByZXN0b3JlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZCh0YXNrRGVzY3JpcHRpb24sIGVkaXRJbnB1dEJveCk7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3QgZGVzY3JpcHRpb25cbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAvL3VwZGF0ZSBET00gZGlzcGxheVxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIFxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIC8vaGFuZGxlcyBuZXcgZWRpdGVkIGRlc2NyaXB0aW9uIHN1Ym1pc3Npb25cbiAgICBzdWJtaXREdWVEYXRlKGV2ZW50LCB0YXNrRHVlRGF0ZSwgZWRpdElucHV0Qm94KSB7XG5cbiAgICAgICAgY29uc3QgeyB0YXNrRWxlbWVudFJpZ2h0LCB0YXNrLCB0YXNrQ29udGFpbmVyIH0gPSBlZGl0VGFza3NPYmplY3QucmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9yZW1vdmUgaW5wdXQgYm94IGFuZCByZXN0b3JlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5yZXBsYWNlQ2hpbGQodGFza0R1ZURhdGUsIGVkaXRJbnB1dEJveCk7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3QgZGVzY3JpcHRpb25cbiAgICAgICAgdGFzay5kdWVEYXRlID0gZWRpdElucHV0Qm94LnZhbHVlO1xuXG4gICAgICAgIC8vdXBkYXRlIERPTSBkaXNwbGF5XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgIC8vYXV0byBzb3J0IGxpc3QgYnkgZHVlIGRhdGVcbiAgICAgICAgY29uc3Qgc29ydGVkVGFza3MgPSBzb3J0VGFza3NCeURhdGUoWy4uLnRhc2tzXSk7XG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHNvcnRlZFRhc2tzKTtcbiAgICBcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2N5Y2xlIGJldHdlZW4gbG93LW1pZC1oaWdoIHByaW9yaXR5XG4gICAgY2hhbmdlUHJpb3JpdHkodGFzaywgZXZlbnQsIHRhc2tQcmlvcml0eSwgdGFza0NvbnRhaW5lcikge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygndGFzay1wcmlvcml0eS1sb3cnKTpcblxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbWlkJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgIGNhc2UgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygndGFzay1wcmlvcml0eS1taWQnKTpcblxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LW1pZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktaGlnaCcpOlxuXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdsb3cnO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICAgXG4gICAgaGFuZGxlVGFza0VkaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyBcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdCwgXG4gICAgICAgICAgICBlZGl0SW5wdXRCb3gsIFxuICAgICAgICAgICAgdGFza0NvbnRhaW5lciwgXG4gICAgICAgICAgICB0YXNrVGl0bGUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LFxuICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHksXG4gICAgICAgICAgICB0YXNrXG4gICAgICAgIH0gPSBlZGl0VGFza3NPYmplY3QucmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpO1xuXG4gICAgICAgIGlmICghdGFza0NvbnRhaW5lciB8fCAhdGFza0VsZW1lbnRMZWZ0IHx8ICF0YXNrRWxlbWVudFJpZ2h0KSByZXR1cm4gbnVsbDtcbiAgICAgIFxuICAgICAgICAvL2VkaXQgdGFzayB0aXRsZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay10aXRsZScpKSB7XG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKGVkaXRJbnB1dEJveCwgdGFza1RpdGxlKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5mb2N1cygpO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBlZGl0SW5wdXRCb3gudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGVkaXRUYXNrc09iamVjdC5zdWJtaXRUaXRsZShldmVudCwgdGFza1RpdGxlLCBlZGl0SW5wdXRCb3gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9lZGl0IHRhc2sgZGVzY3JpcHRpb25cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGVzY3JpcHRpb24nKSkge1xuICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZChlZGl0SW5wdXRCb3gsIHRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZWRpdElucHV0Qm94LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBlZGl0VGFza3NPYmplY3Quc3VibWl0RGVzY3JpcHRpb24oZXZlbnQsIHRhc2tEZXNjcmlwdGlvbiwgZWRpdElucHV0Qm94KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZWRpdCB0YXNrIGR1ZSBkYXRlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWR1ZS1kYXRlJykpIHtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC50eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgdGFza0VsZW1lbnRSaWdodC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrRHVlRGF0ZSk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0VGFza3NPYmplY3Quc3VibWl0RHVlRGF0ZShldmVudCwgdGFza0R1ZURhdGUsIGVkaXRJbnB1dEJveCk7XG5cbiAgICAgICAgICAgICAgICAvL3Nob3cgbmV3IGxvY2F0aW9uIGluIHRoZSB0YXNrIGxpc3QgYWZ0ZXIgc29ydCAqKiBkb2Vzbid0IHdvcmtcbiAgICAgICAgICAgICAgICAvLyBpZiAodGFza0NvbnRhaW5lcikgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWdsb3cnKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZ2xvdycpO1xuICAgICAgICAgICAgICAgIC8vIH0sIDUwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2VkaXQgdGFzayBwcmlvcml0eVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1wcmlvcml0eScpKSB7XG4gICAgICAgICAgICBlZGl0VGFza3NPYmplY3QuY2hhbmdlUHJpb3JpdHkodGFzaywgZXZlbnQsIHRhc2tQcmlvcml0eSwgdGFza0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9LFxufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGJvZHlDb250ZW50Q29udGFpbmVyLCBjcmVhdGVBbGxRdWVzdHNQYWdlIH0gZnJvbSAnLi9hbGxUYXNrcy5qcyc7XG5pbXBvcnQgeyB0YXNrcywgdGFza0NvdW50ZXJPYmplY3QsIHByb2plY3RzLCBwcm9qZWN0Q291bnRlck9iamVjdCB9IGZyb20gJy4vdG9kby1mYWN0b3J5LmpzJztcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU9iamVjdCB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBmb3JtQWN0aW9uc09iamVjdCB9IGZyb20gJy4vdGFzay1mb3JtLWFjdGlvbnMuanMnO1xuaW1wb3J0IHsgd2Vla3NRdWVzdE9iamVjdCB9IGZyb20gJy4vdGhpc1dlZWsuanMnO1xuaW1wb3J0IHsgZGF5c1F1ZXN0T2JqZWN0IH0gZnJvbSAnLi90b2RheS5qcyc7XG5cbmNvbnN0IHNpZGVCYXJNZW51SXRlbXMgPSB7XG4gICAgc2lkZUJhck1lbnU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRhc2tzJyksXG4gICAgYWxsUXVlc3RzVGFiOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXF1ZXN0cycpLFxuICAgIGRheXNRdWVzdFRhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMtcXVlc3RzJyksXG4gICAgd2Vla3NRdWVzdFRhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtzLXF1ZXN0cycpLFxuICAgIHByb2plY3RUYXNrczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFza3MnKSxcbiAgICBwcm9qZWN0c1Rhc2tzTGlzdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFza3MtbGlzdCcpLFxuICAgIGFkZFF1ZXN0bGluZVRhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1xdWVzdGxpbmUnKSxcblxuICAgIGFkZENsYXNzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgfSxcbn07XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIC8vbG9hZCBhbGwgdGFza3MgcGFnZSBmaXJzdFxuICAgIGFsbFF1ZXN0c1BhZ2UoKTtcblxuICAgIC8vc2hvdyBzZWxlY3RlZCBtZW51IHRhYlxuICAgIHNpZGVCYXJNZW51SXRlbXMuYWxsUXVlc3RzVGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICBcbiAgICAvL2luaXRpYWxpemUgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgIGNyZWF0ZUFsbFF1ZXN0c1BhZ2UuaW5pdCgpO1xufSk7XG5cbnNpZGVCYXJNZW51SXRlbXMuc2lkZUJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGwtcXVlc3RzJykpIHtcbiAgICAgICAgYWxsUXVlc3RzUGFnZSgpO1xuXG4gICAgICAgIC8vc2hvdyBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZENsYXNzKGV2ZW50KTtcblxuICAgICAgICAvL3JlbW92ZSBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmRheXNRdWVzdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMud2Vla3NRdWVzdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXlzLXF1ZXN0cycpKSB7XG4gICAgICAgIGRheXNRdWVzdE9iamVjdC5kYXlzUXVlc3RQYWdlKCk7XG5cbiAgICAgICAgLy9zaG93IHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWRkQ2xhc3MoZXZlbnQpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWxsUXVlc3RzVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy53ZWVrc1F1ZXN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3dlZWtzLXF1ZXN0cycpKSB7XG4gICAgICAgIHdlZWtzUXVlc3RPYmplY3Qud2Vla3NRdWVzdFBhZ2UoKTtcblxuICAgICAgICAvL3Nob3cgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRDbGFzcyhldmVudCk7XG5cbiAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hbGxRdWVzdHNUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmRheXNRdWVzdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGFsbFF1ZXN0c1BhZ2UoKSB7XG4gICAgLy9jbGVhciB0aGUgcGFnZVxuICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy9pbXBvcnQgdGFzayBwYWdlIGVsZW1lbnRzXG4gICAgY29uc3QgeyB0aXRsZUVsZW1lbnQsIGFkZFRhc2tCdXR0b24gfSA9IGNyZWF0ZUFsbFF1ZXN0c1BhZ2UuZWxlbWVudHM7XG5cbiAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIGNvbnN0IHJldHJpZXZlZFRhc2tzID0gbG9jYWxTdG9yYWdlT2JqZWN0LmdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgdGFza3MubGVuZ3RoID0gMDtcbiAgICB0YXNrcy5wdXNoKC4uLnJldHJpZXZlZFRhc2tzKTtcblxuICAgIGNvbnN0IHJldHJpZXZlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlT2JqZWN0LmdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgcHJvamVjdHMubGVuZ3RoID0gMDtcbiAgICBwcm9qZWN0cy5wdXNoKC4uLnJldHJpZXZlZFByb2plY3RzKTtcblxuICAgIC8vcHJldmVudCB0YXNrIGNvdW50ZXIgZnJvbSBzdGFydGluZyB3aXRoIHdyb25nIGlkIG51bWJlciBvbiBwYWdlIHJlbG9hZFxuICAgIGlmICh0YXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgbGV0IHByZXZpb3VzVGFza0lkID0gdGFza3NbdGFza3MubGVuZ3RoIC0gMV0udGFza0lEO1xuICAgICAgICB0YXNrQ291bnRlck9iamVjdC50YXNrQ291bnRlciA9IHByZXZpb3VzVGFza0lkICsgMTtcbiAgICB9XG5cbiAgICAvL3NvcnQgdGFza3MgaW4gb3JkZXIgb24gcGFnZSBsb2FkXG4gICAgc29ydFRhc2tzQnlEYXRlKHRhc2tzKTtcblxuICAgIC8vcmVuZGVyIHNhdmVkIHByb2plY3RzIG9uIHBhZ2UgbG9hZFxuICAgIHJlbmRlclByb2plY3RzTGlzdChwcm9qZWN0cyk7XG5cbiAgICBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVUYXNrTGlzdCh0YXNrcyk7XG5cbiAgICByZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFza3NCeURhdGUodGFza3MpIHtcbiAgICByZXR1cm4gIHRhc2tzLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpKTtcbn1cblxuXG5cblxuXG5cblxuc2lkZUJhck1lbnVJdGVtcy5wcm9qZWN0VGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtcXVlc3RsaW5lJykpIHtcblxuICAgICAgICAvL3RvIG9ubHkgYWRkIG9uZSBwcm9qZWN0IGF0IGEgdGltZVxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZFF1ZXN0bGluZVRhYi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZWRpdElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZWRpdElucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5wcm9qZWN0c1Rhc2tzTGlzdC5hcHBlbmRDaGlsZChlZGl0SW5wdXRCb3gpO1xuICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcblxuICAgICAgICBlZGl0SW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZWRpdElucHV0Qm94LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoZWRpdElucHV0Qm94LCBwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgLy9yZS1lc3RhYmxpc2ggYWRkIGJ1dHRvblxuICAgICAgICAgICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWRkUXVlc3RsaW5lVGFiLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuLy9uZXcgcHJvamVjdCBjcmVhdGlvblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChlZGl0SW5wdXRCb3gsIHByb2plY3RUaXRsZSkge1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICBzaWRlQmFyTWVudUl0ZW1zLnByb2plY3RzVGFza3NMaXN0LnJlcGxhY2VDaGlsZChuZXdQcm9qZWN0LCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBwcm9qZWN0Q291bnRlck9iamVjdC5wcm9qZWN0SUQpO1xuXG4gICAgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKys7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG5cbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIFxuICAgIHNpZGVCYXJNZW51SXRlbXMucHJvamVjdHNUYXNrc0xpc3QuYXBwZW5kQ2hpbGQoc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIpO1xuXG4gICAgcmV0dXJuIHsgbmV3UHJvamVjdCwgZGVsZXRlUHJvamVjdEJ1dHRvbiB9O1xufVxuXG4vL3JlbmRlciBzYXZlZCBwcm9qZWN0cyBvbiBwYWdlIGxvYWRcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzTGlzdChwcm9qZWN0cykge1xuXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFza3MtbGlzdCcpO1xuXG4gICAgLy9jbGVhciB0byBwcmV2ZW50IHN0YWNraW5nXG4gICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdDtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcblxuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0Jyk7XG4gICAgICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBwcm9qZWN0Q291bnRlck9iamVjdC5wcm9qZWN0SUQpO1xuICAgIFxuICAgICAgICBwcm9qZWN0Q291bnRlck9iamVjdC5wcm9qZWN0SUQrKztcbiAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgXG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHNpZGVCYXJNZW51SXRlbXMuYWRkUXVlc3RsaW5lVGFiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcblxufVxuXG5zaWRlQmFyTWVudUl0ZW1zLnByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWRlbGV0ZScpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgdGhhdCcpO1xuICAgIH1cbn0pIiwiZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZU9iamVjdCA9IHtcblxuICAgIC8vc2F2ZSB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpIHtcbiAgICAgICAgY29uc3QgdGFza3NKU09OID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCB0YXNrc0pTT04pO1xuICAgIH0sXG5cbiAgICAvL3NhdmUgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgcHJvamVjdHNKU09OKTtcbiAgICB9LFxuXG4gICAgLy9yZXRyaWV2ZSB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRhc2tzSlNPTikgfHwgW107XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9yZXRyaWV2ZSB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb2plY3RzSlNPTikgfHwgW107XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9LFxufSIsIi8vb2JqZWN0IHRvIHN0b3JlIGJhc2UgaXRlbXMgb24gdGhlIHBhZ2UgKHRpdGxlLCBmaXJzdCBidXR0b24gZXRjKVxuZXhwb3J0IGNvbnN0IHBhZ2VFbGVtZW50c09iamVjdCA9IHtcblxuICAgIGNyZWF0ZVBhZ2VUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9ICdBbGwgUXVlc3RzJztcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvZHktdGl0bGUnKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlRWxlbWVudDtcbiAgICB9LFxuXG4gICAgY3JlYXRlQWRkVGFza0J1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnfCt8IEFkZCBRdWVzdCc7XG4gICAgICAgIHJldHVybiBhZGRUYXNrQnV0dG9uO1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gICAgfVxufSIsImltcG9ydCB7IHRhc2tzLCBjcmVhdGVUYXNrLCBnZXRUYXNrcyB9IGZyb20gXCIuL3RvZG8tZmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSBcIi4vcGFnZS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlT2JqZWN0IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgc29ydFRhc2tzQnlEYXRlIH0gZnJvbSBcIi5cIjtcblxuLy9vYmplY3QgdG8gc3RvcmUgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGFzayBjcmVhdGlvbiAvIGZvcm0gc3VibWlzc2lvblxuZXhwb3J0IGNvbnN0IGZvcm1BY3Rpb25zT2JqZWN0ID0ge1xuICAgIFxuICAgIGF0dGFjaFN1Ym1pdExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBmb3JtQ29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKSB7XG5cbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0ICgnUGxlYXNlIGZpbGwgaW4gdGhlIHRpdGxlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgICAgICAgICAvLyBidWcgaW4gaGVyZT8/P1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QuYWRkVGFzaygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVUYXNrTGlzdCh0YXNrcyk7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW1vdmVGb3JtKGZvcm1Db250YWluZXIpO1xuXG4gICAgICAgICAgICAvL2F1dG8gc29ydCBpbnRvIGxpc3QgYWZ0ZXIgY3JlYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tzQnlEYXRlKFsuLi50YXNrc10pO1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3Qoc29ydGVkVGFza3MpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXR0YWNoQ2FuY2VsTGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pIHtcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbW92ZUZvcm0oZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlVGFza0xpc3QodGFza3MpIHtcblxuICAgICAgICBjb25zdCBib2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICAvL3ByZXZlbnQgZHVwbGljYXRlIHRhc2tzXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vcmUtYWRkIHRpdGxlIHRvIHBhZ2VcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZVBhZ2VUaXRsZSgpO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gICAgICAgIC8vcmVuZGVyIHRhc2tzIGZyb20gYXJyYXkgdG8gZG9tXG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHRhc2tzLCBib2R5Q29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgLy9wdXQgYWRkIGJ1dHRvbiB0byBib3R0b20gb2YgdGhlIGxpc3RcbiAgICAgICAgaWYoYWRkVGFza0J1dHRvbikgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgfSxcblxuICAgIC8vaXRlcmF0ZXMgdGhvdWdoIHRoZSB0YXNrcyBhcnJheSB0byBkaXNwbGF5IHRvIHRoZSBkb21cbiAgICByZW5kZXJUYXNrcyh0YXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpIHsgXG5cbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgLy9lYWNoIHNpZGUgb2YgdGhlIHRhc2sgaXRlbVxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vdGFza0VsZW1lbnRMZWZ0IGl0ZW1zIC0gY29tcGxldGUgYnV0dG9uLCB0aXRsZSBhbmQgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBsZXRlLWJ1dHRvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWNvbXBsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX1gO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XG5cbiAgICAgICAgaWYgKHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9PSAnJykge1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJyhlbXB0eSknO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90YXNrRWxlbWVudFJpZ2h0IC0gZHVlIGRhdGUsIHByaW9yaXR5LCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gJycpIHRhc2suZHVlRGF0ZSA9ICcobm8gZHVlIGRhdGUpJztcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcblxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7dGFzay5wcmlvcml0eX1gO1xuXG4gICAgICAgIC8vdXBkYXRlIGNzcyBiYXNlZCBvbiBwcmlvcml0eSB2YWx1ZVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5kaXNwbGF5UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lciwgdGFza1ByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgICAgICAgdGFza0RlbGV0ZS50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gICAgICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIHBhZ2VcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTsgICAgXG5cbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50TGVmdCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnRSaWdodCk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcsIHRhc2sudGFza0lEKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVsZW1lbnQtcmlnaHQnKTtcblxuICAgICAgICAvL2Rpc3BsYXkgdGFzayBjb21wbGV0aW9uIG9uIHBhZ2UtbG9hZFxuICAgICAgICBpZiAodGFzay5zdGF0dXMgPT0gJ2NvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlDb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgaWYgKHRhc2suc3RhdHVzID09ICdpbmNvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlJbmNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTsgICAgXG4gICAgfSxcblxuICAgIC8vbWFkZSBiYyBlZGl0VGFza3MgZnVuY3Rpb25zIHdlcmUgaW5jb21wYXRpYmxlXG4gICAgdXBkYXRlRGlzcGxheUNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICB9LFxuXG4gICAgLy9tYWRlIGJjIGVkaXRUYXNrcyBmdW5jdGlvbnMgd2VyZSBpbmNvbXBhdGlibGVcbiAgICB1cGRhdGVEaXNwbGF5SW5jb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC1jaGVja2VkJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmVGb3JtKGZvcm1Db250YWluZXIpIHtcbiAgICAgICAgY29uc3QgYm9keUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgaWYgKGJvZHlDb250ZW50Q29udGFpbmVyLmNvbnRhaW5zKGZvcm1Db250YWluZXIpKSBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9LFxuXG4gICAgLy9jYWxsZWQgYnkgc3VibWl0IGJ1dHRvbiB0byBwdXQgdGFzayBvbnRvIHBhZ2VcbiAgICBhZGRUYXNrKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktc2VsZWN0aW9uJykudmFsdWU7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIFxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuICAgIH0sXG5cbiAgICAvL2NzcyB0byB0YXNrIGNvbnRhaW5lciBhbmQgcHJpb3JpdHkgYnV0dG9uIGJhc2VkIG9uIHByaW9yaXR5IHZhbHVlXG4gICAgZGlzcGxheVByaW9yaXR5KHRhc2ssIHRhc2tDb250YWluZXIsIHRhc2tQcmlvcml0eSkge1xuXG4gICAgICAgIC8vcHJldmVudCBzdGFja2luZyBtdWx0aXBsZSBjbGFzc2VzXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbG93Jyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1taWQnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vb2JqZWN0IHRvIHN0b3JlIGZ1bmN0aW9ucyB0aGF0IGNyZWF0ZSBmb3JtIHRvIGdlbmVyYXRlIGluZGl2aWR1YWwgdGFza3NcbmV4cG9ydCBjb25zdCB0YXNrRm9ybU9iamVjdCA9IHtcblxuICAgIGNyZWF0ZUZvcm1MYXlvdXQoZm9ybUNvbnRhaW5lcikge1xuXG4gICAgICAgIC8vY3JlYXRlIGZvcm0gb2JqZWN0c1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBmb3JtTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9ybUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIGZvcm1cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtTGVmdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJpZ2h0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQm90dG9tKTtcblxuICAgICAgICAvL2FkZCBjbGFzc2VzXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuICAgICAgICBmb3JtTGVmdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxlZnQnKTtcbiAgICAgICAgZm9ybVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcmlnaHQnKTtcbiAgICAgICAgZm9ybUJvdHRvbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWJvdHRvbScpO1xuXG4gICAgICAgIHJldHVybiB7IGZvcm0sIGZvcm1MZWZ0LCBmb3JtUmlnaHQsIGZvcm1Cb3R0b20gfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybVRpdGxlKGZvcm1MZWZ0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgdGl0bGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgLy9wcmV2ZW50IHBhZ2UgcmVmcmVzaFxuICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkgeyBcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIGxlZnQgc2lkZVxuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuXG4gICAgICAgIHJldHVybiB7IHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybURlc2NyaXB0aW9uKGZvcm1MZWZ0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgZGVzY3JpcHRpb24gZWxlbWVudHNcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbiAob3B0aW9uYWwpJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IDI7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gbGVmdCBzaWRlIFxuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtRGF0ZShmb3JtUmlnaHQpIHtcblxuICAgICAgICAvL2NyZWF0ZSBkYXRlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIHJpZ2h0IHNpZGVcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWRhdGUnKTtcblxuICAgICAgICByZXR1cm4geyBkYXRlTGFiZWwsIGRhdGVJbnB1dCB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtUHJpb3JpdHlTZWxlY3Rvcihmb3JtUmlnaHQpIHtcblxuICAgICAgICAvL2NyZWF0ZSBwcmlvcml0eSBzZWxlY3Rpb24gZHJvcGJveCBhbmQgb3B0aW9uc1xuICAgICAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LXNlbGVjdGlvbicpO1xuICAgICAgICAvLyBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktc2VsZWN0aW9uJyk7XG4gICAgICAgIC8vIGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyT3B0aW9uLnRleHQgPSAnUHJpb3JpdHknO1xuICAgICAgICAvLyBwbGFjZWhvbGRlck9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24xLnZhbHVlID0gJ2xvdyc7XG4gICAgICAgIG9wdGlvbjEudGV4dCA9ICdMb3cgKFByaW9yaXR5KSc7XG4gICAgICAgIG9wdGlvbjEuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjIudmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgb3B0aW9uMi50ZXh0ID0gJ01lZGl1bSc7XG4gICAgICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMy52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgb3B0aW9uMy50ZXh0ID0gJ0hpZ2gnO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIHJpZ2h0IHNpZGVcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKHNlbGVjdElucHV0KTtcbiAgICAgICAgLy8gc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJPcHRpb24pO1xuICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gICAgICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIHNlbGVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHsgc2VsZWN0TGFiZWwsIHNlbGVjdElucHV0LCBvcHRpb24xLCBvcHRpb24yLCBvcHRpb24zIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1CdXR0b25zKGZvcm1Cb3R0b20pIHtcblxuICAgICAgICAvL2NyZWF0ZSBidXR0b24gZWxlbWVudHNcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gYm90dG9tXG4gICAgICAgIGZvcm1Cb3R0b20uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpO1xuICAgICAgICBmb3JtQm90dG9tLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbC1idXR0b24nKVxuXG4gICAgICAgIC8vYWRkIGNsYXNzZXNcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKVxuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpOyAgICBcblxuICAgICAgICByZXR1cm4geyBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiB9O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBib2R5Q29udGVudENvbnRhaW5lciB9IGZyb20gJy4vYWxsVGFza3MuanMnO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG8tZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBmb3JtQWN0aW9uc09iamVjdCB9IGZyb20gJy4vdGFzay1mb3JtLWFjdGlvbnMuanMnO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSAnLi9wYWdlLWVsZW1lbnRzLmpzJztcbmltcG9ydCB7IGRheXNRdWVzdE9iamVjdCB9IGZyb20gJy4vdG9kYXkuanMnO1xuXG5cbmV4cG9ydCBjb25zdCB3ZWVrc1F1ZXN0T2JqZWN0ID0ge1xuICAgIFxuICAgIHdlZWtzUXVlc3RQYWdlKCkge1xuICAgICAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vaW1wb3J0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcblxuICAgICAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgIFxuICAgICAgICAvL2dldCB3ZWVrcydzIGRhdGVcbiAgICAgICAgY29uc3QgeyBzdGFydE9mV2VlaywgZW5kT2ZXZWVrIH0gPSB3ZWVrc1F1ZXN0T2JqZWN0LmdldFdlZWtSYW5nZSgpO1xuXG4gICAgICAgIC8vZ2V0IHZhcmlhYmxlcyB0byBkaXNwbGF5IGluIGhlYWRlclxuICAgICAgICBsZXQgc3RhcnRPZldlZWtEYXkgPSBzdGFydE9mV2Vlay5nZXREYXRlKCk7XG4gICAgICAgIGxldCBlbmRPZldlZWtEYXkgPSBlbmRPZldlZWsuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgdGhpc01vbnRoID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICAgIC8vdXBkYXRlIHBhZ2UgdGl0bGVcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gYFdlZWsncyBRdWVzdHM6ICR7dGhpc01vbnRofSAke3N0YXJ0T2ZXZWVrRGF5fSAtICR7ZW5kT2ZXZWVrRGF5fWA7XG5cbiAgICAgICAgLy9maWx0ZXIgd2Vla3MncyB0YXNrc1xuICAgICAgICBsZXQgd2Vla3NUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrRGF0ZSA+PSBzdGFydE9mV2VlayAmJiB0YXNrRGF0ZSA8PSBlbmRPZldlZWs7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvL2Rpc3BsYXkgZmlsdGVyZWQgYXJyYXkgdG8gZG9tXG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHdlZWtzVGFza3MsIGJvZHlDb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICAvL3Rhc2tzIHRhc2tzIHRoaXMgd2VlayBtZXNzYWdlXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgaWYoIXRhc2tDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRheXNRdWVzdE9iamVjdC5zaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc3Qgbm9UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXRhc2snKTtcbiAgICAgICAgICAgIG5vVGFzay50ZXh0Q29udGVudCA9ICdObyBRdWVzdHMgRHVlIFRoaXMgV2Vlayc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2Vla3NUYXNrcztcbiAgICB9LFxuXG4gICAgZ2V0V2Vla1JhbmdlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTsgLy8wIChzdW4pIHRvIDYgKHNhdClcbiAgICBcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgY3VycmVudCBkYXkgYW5kIHRoZSBzdGFydCBvZiB0aGUgd2VlayAoc3VuKVxuICAgICAgICBjb25zdCBzdGFydE9mV2Vla0RpZmYgPSBjdXJyZW50RGF5ID09PSAwID8gMCA6IGN1cnJlbnREYXk7XG4gICAgXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSBzdGFydCBvZiB0aGUgd2VlayBieSBzdWJ0cmFjdGluZyB0aGUgZGlmZmVyZW5jZVxuICAgICAgICBjb25zdCBzdGFydE9mV2VlayA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSAoc3RhcnRPZldlZWtEaWZmKSk7ICAgIFxuXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSBlbmQgb2YgdGhlIHdlZWsgYnkgYWRkaW5nIHRoZSByZW1haW5pbmcgZGF5cyB1bnRpbCBzYXRcbiAgICAgICAgY29uc3QgZW5kT2ZXZWVrID0gbmV3IERhdGUoc3RhcnRPZldlZWspO1xuICAgICAgICBlbmRPZldlZWsuc2V0RGF0ZShzdGFydE9mV2Vlay5nZXREYXRlKCkgKyA2KTtcblxuICAgICAgICAvL3NldCBiZWdpbm5pbmcgdGltZSBvZiB3ZWVrIHRvIHN1bmRheSBtaWRuaWdodCBvZiBmaXJzdCBkYXlcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0SG91cnMoMCwgMCwgMCk7XG5cbiAgICAgICAgLy9zZXQgZW5kIHRpbWUgb2Ygd2VlayB0byAxMTo1OXBtIG9mIGxhc3QgZGF5XG4gICAgICAgIGVuZE9mV2Vlay5zZXRIb3VycygyMywgNTksIDU5KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRPZldlZWssIGVuZE9mV2VlayB9O1xuICAgIH1cbn07IiwiaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2FsbFRhc2tzLmpzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2RvLWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tICcuL3Rhc2stZm9ybS1hY3Rpb25zLmpzJztcbmltcG9ydCB7IHBhZ2VFbGVtZW50c09iamVjdCB9IGZyb20gJy4vcGFnZS1lbGVtZW50cy5qcyc7XG5cbi8vbG9hZCB0aGUgZGF5J3MgcXVlc3QgcGFnZVxuZXhwb3J0IGNvbnN0IGRheXNRdWVzdE9iamVjdCA9IHtcbiAgICBcbiAgICBkYXlzUXVlc3RQYWdlKCkge1xuICAgICAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vaW1wb3J0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcblxuICAgICAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgICAgLy91cGRhdGUgcGFnZSB0aXRsZVxuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgRGF5J3MgUXVlc3RzYDtcbiAgICAgICAgXG4gICAgICAgIC8vZ2V0IHRvZGF5J3MgZGF0ZVxuICAgICAgICBjb25zdCB0b2RheSA9IGRheXNRdWVzdE9iamVjdC5nZXRUb2RheURhdGUoKTtcblxuICAgICAgICAvL2ZpbHRlciB0b2RheSdzIHRhc2tzXG4gICAgICAgIGxldCB0b2RheXNUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PSB0b2RheSk7XG5cbiAgICAgICAgLy9kaXNwbGF5IGZpbHRlcmVkIGFycmF5IHRvIGRvbVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW5kZXJUYXNrcyh0b2RheXNUYXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgaWYoIXRhc2tDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRheXNRdWVzdE9iamVjdC5zaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvZGF5c1Rhc2tzO1xuICAgIH0sXG5cbiAgICBzaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgY29uc3Qgbm9UYXNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub1Rhc2tNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ25vLXRhc2snKTtcbiAgICAgICAgbm9UYXNrTWVzc2FnZS50ZXh0Q29udGVudCA9ICdObyBRdWVzdHMgRHVlIFRvZGF5JztcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9UYXNrTWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIG5vVGFza01lc3NhZ2U7XG4gICAgfSxcblxuICAgIGdldFRvZGF5RGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBsb2NhbFN0b3JhZ2VPYmplY3QgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbi8vdGFzayBhcnJheSB0byBzdG9yZSBhbGwgdGFza3NcbmV4cG9ydCBjb25zdCB0YXNrcyA9IFtdO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHRhc2tDb3VudGVyT2JqZWN0ID0ge1xuICAgIHRhc2tDb3VudGVyOiAwLFxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdENvdW50ZXJPYmplY3QgPSB7XG4gICAgcHJvamVjdElEOiAwLFxufVxuXG4vL2NyZWF0ZXMgdGFzayBvYmplY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRhc2tJRDogdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIsXG4gICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICB9O1xuXG4gICAgdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIrKztcblxuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgLy8gY29uc29sZS5sb2codGFza3MpO1xuXG4gICAgLy9zYXZlIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2UgYWZ0ZXIgY3JlYXRpbmcgYSBuZXcgdGFza1xuICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG5cbiAgICByZXR1cm4gdGFzaztcbn1cblxuLy9zZW5kIHRhc2sgYXJyYXkgdG8gYmUgZGlzcGxheWVkXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG5cbiAgICAvL3JldHJpZXZlIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZSBiZWZvcmUgcmV0dXJuaW5nXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iamVjdC5nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iamVjdC5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9