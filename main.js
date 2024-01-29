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

        event.stopPropagation();

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
    });

    projectsList.appendChild(sideBarMenuItems.addQuestlineTab);
}

function deleteProject(event) {
    const projectTasksList = document.querySelector('.project-tasks-list');
    const projectToDelete = event.target.closest('.new-project');
    //title + 'x' for delete button, update later -- if replaced by icon
    const projectToDeleteText = projectToDelete.textContent; 
    // const projectID = projectToDelete.dataset.projectId;

    for (let i = 0; i < _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
        //need 'x' - dom element.textContent contains letter x for delete button
        if (`${_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects[i]}x` == projectToDeleteText) {
            _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects.splice(i, 1);
            break;
        }
    }
    projectTasksList.removeChild(projectToDelete);
    _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveProjectsToLocalStorage(_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

//delete project on double click
sideBarMenuItems.projectTasks.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('project-delete')) {
        event.stopPropagation();
        deleteProject(event);
    }
}); 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLGlIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFL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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stZm9ybS1hY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RoaXNXZWVrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvYmFja2Ryb3AtMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1ZWVuc2lkZXNNZWRpdW0teDMwelYudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9VYnVudHUtbjFNMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvY2hlY2tlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGNzcyByZXNldCAqL1xuKiwgXG5odG1sIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXG59XG5cbjpyb290IHtcbiAgICAtLXByaW1hcnktY29sb3I6ICMyZDI3NDk7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNkZjcyYTk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIC0tZm9udC1jb2xvcjogd2hpdGU7XG4gICAgLS1nYXA6IDFyZW07XG4gICAgLS1jYW5jZWwtY29sb3I6ICNhNTJmMmY7XG4gICAgLS1zdWJtaXQtY29sb3I6ICMwMjZlMDJjZjtcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAtLWxvdy1wcmlvcml0eTogeWVsbG93O1xuICAgIC0tbG93LWJhY2tncm91bmQ6ICNmZmZmMDAxNDtcbiAgICAtLW1pZC1wcmlvcml0eTogb3JhbmdlO1xuICAgIC0tbWlkLWJhY2tncm91bmQ6ICNmZmE1MDAxYztcbiAgICAtLWhpZ2gtcHJpb3JpdHk6ICNmZjQxNDE7XG4gICAgLS1oaWdoLWJhY2tncm91bmQ6ICNmZjQxNDEyOTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pLCBmb3JtYXQoJ3R0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSwgZm9ybWF0KCd0dGYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA0ZnIgMC4yNWZyO1xufVxuXG4vKiBoZWFkZXIgKi9cbmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG59XG5cbi5zdmcge1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi8qIHNpZGUtYmFyICovXG4uc2lkZS1iYXIge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuI2hvbWUtdGFza3Mge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG4ucHJvamVjdC10YXNrcyB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDE3cmVtO1xufVxuXG4ucHJvamVjdC10YXNrcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubmV3LXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDI2OyAqL1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICMwMDAwMDA2MzsgKi9cbn1cblxuLnByb2plY3QtZGVsZXRlIHtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG59XG5cbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jaG9tZS10YXNrcyxcbi5wcm9qZWN0LXRhc2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICB3aWR0aDogODAlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMS41cmVtO1xufVxuXG4uc2lkZS1iYXItdGl0bGUge1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICB9XG59XG5cbiBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZ2xvdyB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKTtcbiAgICB9XG59XG5cbmxpID4gYnV0dG9uLFxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b24sXG4jc3VibWl0LWJ1dHRvbixcbiNjYW5jZWwtYnV0dG9uLFxuLm5ldy1wcm9qZWN0LFxuLnByb2plY3QtZGVsZXRlIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1lbnUtc2VsZWN0ZWQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b24ge1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDhzIGluZmluaXRlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAuN3JlbTtcbn1cblxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmxpID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xufVxuXG4vKiBtYWluICovXG4uYm9keSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2JvZHktY29udGVudC1jb250YWluZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5ib2R5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlcik7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmZvcm0tY29udGFpbmVye1xuICAgIGhlaWdodDogMTJyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uZm9ybS1sZWZ0LFxuLmZvcm0tcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5mb3JtLWxlZnQge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZvcm0tcmlnaHQge1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbn1cblxuLmZvcm0tYm90dG9tIHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLyogc3VibWl0LWJ1dHRvbi9hZGQtYnV0dG9uICovXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tc3VibWl0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWNvbG9yKTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXN1Ym1pdC1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLWNhbmNlbC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNhbmNlbC1jb2xvcik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYW5jZWwtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XG59XG5cbi5zdWJtaXQtYnV0dG9uLCBcbi5jYW5jZWwtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5mb3JtLWJvdHRvbSA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG59XG5cbi5mb3JtLXRpdGxlLFxuLmZvcm0tZGVzY3JpcHRpb24sXG4uZm9ybS1kYXRlLFxuLmZvcm0tc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmZvcm0tZGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5mb3JtLWRhdGUsXG4uZm9ybS1zZWxlY3Qge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMTJyZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtaW4td2lkdGg6IDM3cmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7ICovXG4gICAgZ2FwOiAwLjVyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjMzNjE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xufVxuXG4udGFzay1lbGVtZW50LWxlZnQsXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3JlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1lbGVtZW50LWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnRhc2stZWxlbWVudC1yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi50YXNrLWNvbXBsZXRlLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY29tcGxldGVkLXRhc2sge1xuICAgIGJhY2tncm91bmQ6ICMwMGY5MDAzZDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNGZmMDQ7XG4gICAgY29sb3I6ICNmZmZmZmY2OTtcbn1cblxuLmNvbXBsZXRlZC10YXNrLXRleHQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uY29tcGxldGVkLWNoZWNrZWQge1xuICAgIGJvcmRlcjogbm9uZTsgICBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRhc2stdGl0bGU6aG92ZXIsXG4udGFzay1kZXNjcmlwdGlvbjpob3Zlcixcbi50YXNrLWR1ZS1kYXRlOmhvdmVyLFxuLnRhc2stY29tcGxldGUtYnV0dG9uOmhvdmVyLFxuLnRhc2stcHJpb3JpdHk6aG92ZXIsXG4udGFzay1kZWxldGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGFzay1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1kdWUtZGF0ZSB7XG4gICAgd2lkdGg6IDYuMXJlbTtcbn1cblxuLyogcHJpb3JpdHkgZW1ibGVtIGl0c2VsZiovXG4udGFzay1wcmlvcml0eSB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcbn1cblxuLnRhc2stcHJpb3JpdHktbG93LFxuLnRhc2stcHJpb3JpdHktbWlkLFxuLnRhc2stcHJpb3JpdHktaGlnaCB7XG4gICAgd2lkdGg6IDUuNXJlbTtcbn1cblxuLnRhc2stcHJpb3JpdHktbG93IHtcbiAgICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpO1xufVxuXG4udGFzay1wcmlvcml0eS1taWQge1xuICAgIGNvbG9yOiB2YXIoLS1taWQtcHJpb3JpdHkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XG59XG5cbi50YXNrLXByaW9yaXR5LWhpZ2gge1xuICAgIGNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcbn1cblxuLyogdGFzayBjb250YWluZXIgKHByaW9yaXR5KSovXG4udGFzay1jb250YWluZXItbG93LXByaW9yaXR5IHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpOyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LWJhY2tncm91bmQpOyAqL1xufVxuXG4udGFzay1jb250YWluZXItbWlkLXByaW9yaXR5IHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpOyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkLWJhY2tncm91bmQpOyAqL1xufVxuXG4udGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eSB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtYmFja2dyb3VuZCk7ICovXG59XG5cbi50YXNrLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7XG59XG5cbi50YXNrLWRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDNyZW07XG59XG5cbi5uby10YXNrIHtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBib3JkZXI6IHZhcigtLWJvcmRlcik7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDZzIGluZmluaXRlO1xufVxuXG4vKiB0byBvYnZpb3VzbHkgc2hvdyB3aGVyZSB0aGUgdGFzayBtb3ZlZCB1cG9uIHNvcnQgKi9cbi50YXNrLWdsb3cge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjcpOyBcbiAgICBhbmltYXRpb246IGdsb3cgNXMgaW5maW5pdGU7XG59XG5cbmZvb3RlciB7XG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5jb250ZW50ID4gZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7O0NBRUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkRBQThDO0lBQzlDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDJEQUE2RDtJQUM3RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDJEQUFrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9DQUFvQztBQUN4Qzs7QUFFQSxXQUFXO0FBQ1g7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBLGFBQWE7QUFDYjtJQUNJLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsMkNBQTJDO0lBQzNDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7Q0FFQztJQUNHO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0o7O0FBRUE7Ozs7OztJQU1JLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsbURBQXNDO0lBQ3RDLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBLDZCQUE2QjtBQUM3QjtJQUNJLDJDQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLDJDQUEyQztBQUMvQzs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7Ozs7SUFJSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnREFBZ0Q7SUFDaEQsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWix5REFBeUM7SUFDekMsc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7SUFNSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTs7O0lBR0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHNDQUFzQztBQUMxQzs7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSwyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsd0NBQXdDO0lBQ3hDLDJDQUEyQztJQUMzQyw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBLHFEQUFxRDtBQUNyRDtJQUNJLGdDQUFnQztJQUNoQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY3NzIHJlc2V0ICovXFxuKiwgXFxuaHRtbCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktY29sb3I6ICMyZDI3NDk7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZGY3MmE5O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIC0tYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1nYXA6IDFyZW07XFxuICAgIC0tY2FuY2VsLWNvbG9yOiAjYTUyZjJmO1xcbiAgICAtLXN1Ym1pdC1jb2xvcjogIzAyNmUwMmNmO1xcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZ3MvYmFja2Ryb3AtMi5qcGcpO1xcbiAgICAtLWxvdy1wcmlvcml0eTogeWVsbG93O1xcbiAgICAtLWxvdy1iYWNrZ3JvdW5kOiAjZmZmZjAwMTQ7XFxuICAgIC0tbWlkLXByaW9yaXR5OiBvcmFuZ2U7XFxuICAgIC0tbWlkLWJhY2tncm91bmQ6ICNmZmE1MDAxYztcXG4gICAgLS1oaWdoLXByaW9yaXR5OiAjZmY0MTQxO1xcbiAgICAtLWhpZ2gtYmFja2dyb3VuZDogI2ZmNDE0MTI5O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9RdWVlbnNpZGVzTWVkaXVtLXgzMHpWLnR0ZicpLCBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvVWJ1bnR1LW4xTTAudHRmJyksIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDRmciAwLjI1ZnI7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG59XFxuXFxuLnN2ZyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLyogc2lkZS1iYXIgKi9cXG4uc2lkZS1iYXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbiNob21lLXRhc2tzIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcyB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMTdyZW07XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAyNjsgKi9cXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICAvKiBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICMwMDAwMDA2MzsgKi9cXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNob21lLXRhc2tzLFxcbi5wcm9qZWN0LXRhc2tzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLnNpZGUtYmFyLXRpdGxlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4gQGtleWZyYW1lcyBwdWxzZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdsb3cge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKTtcXG4gICAgfVxcbn1cXG5cXG5saSA+IGJ1dHRvbixcXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbixcXG4jc3VibWl0LWJ1dHRvbixcXG4jY2FuY2VsLWJ1dHRvbixcXG4ubmV3LXByb2plY3QsXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tZW51LXNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIDhzIGluZmluaXRlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAuN3JlbTtcXG59XFxuXFxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5saSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xcbn1cXG5cXG4vKiBtYWluICovXFxuLmJvZHkge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2JvZHktY29udGVudC1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uYm9keS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltZ3MvYmFja2Ryb3AtMi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmZvcm0tbGVmdCxcXG4uZm9ybS1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWxlZnQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZm9ybS1yaWdodCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG59XFxuXFxuLmZvcm0tYm90dG9tIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBzdWJtaXQtYnV0dG9uL2FkZC1idXR0b24gKi9cXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLXN1Ym1pdC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXN1Ym1pdC1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXN1Ym1pdC1jb2xvcik7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24sIFxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWJvdHRvbSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG59XFxuXFxuLmZvcm0tdGl0bGUsXFxuLmZvcm0tZGVzY3JpcHRpb24sXFxuLmZvcm0tZGF0ZSxcXG4uZm9ybS1zZWxlY3Qge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmZvcm0tZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmZvcm0tZGF0ZSxcXG4uZm9ybS1zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMnJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1pbi13aWR0aDogMzdyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7ICovXFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjMzNjE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXFxufVxcblxcbi50YXNrLWVsZW1lbnQtbGVmdCxcXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWVsZW1lbnQtbGVmdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnRhc2stZWxlbWVudC1yaWdodCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFzayB7XFxuICAgIGJhY2tncm91bmQ6ICMwMGY5MDAzZDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDRmZjA0O1xcbiAgICBjb2xvcjogI2ZmZmZmZjY5O1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2stdGV4dCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29tcGxldGVkLWNoZWNrZWQge1xcbiAgICBib3JkZXI6IG5vbmU7ICAgXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZ3MvY2hlY2tlZC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4udGFzay10aXRsZTpob3ZlcixcXG4udGFzay1kZXNjcmlwdGlvbjpob3ZlcixcXG4udGFzay1kdWUtZGF0ZTpob3ZlcixcXG4udGFzay1jb21wbGV0ZS1idXR0b246aG92ZXIsXFxuLnRhc2stcHJpb3JpdHk6aG92ZXIsXFxuLnRhc2stZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stZHVlLWRhdGUge1xcbiAgICB3aWR0aDogNi4xcmVtO1xcbn1cXG5cXG4vKiBwcmlvcml0eSBlbWJsZW0gaXRzZWxmKi9cXG4udGFzay1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXFxufVxcblxcbi50YXNrLXByaW9yaXR5LWxvdyxcXG4udGFzay1wcmlvcml0eS1taWQsXFxuLnRhc2stcHJpb3JpdHktaGlnaCB7XFxuICAgIHdpZHRoOiA1LjVyZW07XFxufVxcblxcbi50YXNrLXByaW9yaXR5LWxvdyB7XFxuICAgIGNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1taWQge1xcbiAgICBjb2xvcjogdmFyKC0tbWlkLXByaW9yaXR5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktaGlnaCB7XFxuICAgIGNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XFxufVxcblxcbi8qIHRhc2sgY29udGFpbmVyIChwcmlvcml0eSkqL1xcbi50YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHkge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LWJhY2tncm91bmQpOyAqL1xcbn1cXG5cXG4udGFzay1jb250YWluZXItbWlkLXByaW9yaXR5IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZC1iYWNrZ3JvdW5kKTsgKi9cXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHkge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1iYWNrZ3JvdW5kKTsgKi9cXG59XFxuXFxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7XFxufVxcblxcbi50YXNrLWRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDNyZW07XFxufVxcblxcbi5uby10YXNrIHtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBib3JkZXI6IHZhcigtLWJvcmRlcik7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIDZzIGluZmluaXRlO1xcbn1cXG5cXG4vKiB0byBvYnZpb3VzbHkgc2hvdyB3aGVyZSB0aGUgdGFzayBtb3ZlZCB1cG9uIHNvcnQgKi9cXG4udGFzay1nbG93IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNyk7IFxcbiAgICBhbmltYXRpb246IGdsb3cgNXMgaW5maW5pdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSBcIi4vcGFnZS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGFza0Zvcm1PYmplY3QgfSBmcm9tIFwiLi90YXNrLWZvcm1cIjtcbmltcG9ydCB7IGZvcm1BY3Rpb25zT2JqZWN0IH0gZnJvbSBcIi4vdGFzay1mb3JtLWFjdGlvbnNcIjtcbmltcG9ydCB7IGVkaXRUYXNrc09iamVjdCB9IGZyb20gXCIuL2VkaXRUYXNrc1wiO1xuXG5leHBvcnQgY29uc3QgYm9keUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4vL21haW4gZnVuY3Rpb24gdG8gcG9wdWxhdGUgdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCBjcmVhdGVBbGxRdWVzdHNQYWdlID0ge1xuXG4gICAgdGl0bGVFbGVtZW50OiBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlUGFnZVRpdGxlKCksXG4gICAgYWRkVGFza0J1dHRvbjogcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZUFkZFRhc2tCdXR0b24oKSxcbiAgICBmb3JtQ29udGFpbmVyOiBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlRm9ybUNvbnRhaW5lcigpLFxuXG4gICAgLy9jbGljayB0byBhZGQgbmV3IHRhc2tcbiAgICBhZGRUYXNrKCkge1xuICAgICAgICBoYW5kbGVBZGRUYXNrKGNyZWF0ZUFsbFF1ZXN0c1BhZ2UuYWRkVGFza0J1dHRvbiwgY3JlYXRlQWxsUXVlc3RzUGFnZS5mb3JtQ29udGFpbmVyKTtcbiAgICB9LFxuXG4gICAgLy9jbGljayB0byBtYXJrIHRhc2sgY29tcGxldGVcbiAgICBjb21wbGV0ZVRhc2soZXZlbnQpIHtcbiAgICAgICAgZWRpdFRhc2tzT2JqZWN0LmhhbmRsZUNvbXBsZXRlVGFzayhldmVudCk7XG4gICAgfSxcbiAgICBcbiAgICAvL2NsaWNrIHRvIGRlbGV0ZSB0YXNrXG4gICAgZGVsZXRlVGFzayhldmVudCkge1xuICAgICAgICBlZGl0VGFza3NPYmplY3QuaGFuZGxlRGVsZXRlVGFzayhldmVudCk7XG4gICAgfSxcblxuICAgIC8vZG91YmxlIGNsaWNrIHRvIGVkaXQgdGFza3NcbiAgICBlZGl0VGFzayhldmVudCkge1xuICAgICAgICBlZGl0VGFza3NPYmplY3QuaGFuZGxlVGFza0VkaXQoZXZlbnQpO1xuICAgIH0sXG5cbiAgICAvL2F0dGFjaCBldmVudCBsaXN0ZW5lcnNcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFRhc2spO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY29tcGxldGVUYXNrKTtcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVRhc2spO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMuZWRpdFRhc2spO1xuICAgIH0sXG5cbiAgICBnZXQgZWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlRWxlbWVudDogdGhpcy50aXRsZUVsZW1lbnQsIGFkZFRhc2tCdXR0b246IHRoaXMuYWRkVGFza0J1dHRvbiB9O1xuICAgIH0sXG59O1xuXG4vL2NyZWF0ZXMgdGhlIHRhc2sgY3JlYXRpb24gZm9ybVxuZnVuY3Rpb24gaGFuZGxlQWRkVGFzayhhZGRUYXNrQnV0dG9uLCBmb3JtQ29udGFpbmVyKSB7XG4gICAgYWRkVGFza0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCB7IGZvcm0sIGZvcm1MZWZ0LCBmb3JtUmlnaHQsIGZvcm1Cb3R0b20gfSA9IHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1MYXlvdXQoZm9ybUNvbnRhaW5lcik7XG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vY2FsbCBmb3JtIGZ1bmN0aW9ucyB0byBmaWxsIGluIHRoZSBmb3JtLi4uXG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybVRpdGxlKGZvcm1MZWZ0KTtcbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtRGVzY3JpcHRpb24oZm9ybUxlZnQpO1xuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1EYXRlKGZvcm1SaWdodCk7XG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybVByaW9yaXR5U2VsZWN0b3IoZm9ybVJpZ2h0KTtcbiAgICBjb25zdCB7IHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uIH0gPSB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtQnV0dG9ucyhmb3JtQm90dG9tKTtcblxuICAgIC8vYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBjcmVhdGVkIHN1Ym1pdC9jYW5jZWwgYnV0dG9uc1xuICAgIGZvcm1BY3Rpb25zT2JqZWN0LmF0dGFjaFN1Ym1pdExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBmb3JtQ29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKTtcbiAgICBmb3JtQWN0aW9uc09iamVjdC5hdHRhY2hDYW5jZWxMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbik7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB0YXNrcywgY3JlYXRlVGFzaywgZ2V0VGFza3MgfSBmcm9tIFwiLi90b2RvLWZhY3RvcnlcIjtcbmltcG9ydCB7IGJvZHlDb250ZW50Q29udGFpbmVyIH0gZnJvbSBcIi4vYWxsVGFza3NcIjtcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU9iamVjdCB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IGZvcm1BY3Rpb25zT2JqZWN0IH0gZnJvbSBcIi4vdGFzay1mb3JtLWFjdGlvbnNcIjtcbmltcG9ydCB7IHNvcnRUYXNrc0J5RGF0ZSB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBjb25zdCBlZGl0VGFza3NPYmplY3QgPSB7XG5cbiAgICAvL3RvZ2dsZXMgdGFzayBiZXR3ZWVuIGNvbXBsZXRlIGFuZCBpbmNvbXBsZXRlXG4gICAgaGFuZGxlQ29tcGxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stY29tcGxldGUtYnV0dG9uJyk7XG5cbiAgICAgICAgaWYgKHRhc2tDb21wbGV0ZSkgeyAvL2NhbiBnZXQgdGhlc2UgZnJvbSBnZXRFbGVtZW50cygpXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lcklEID0gcGFyc2VJbnQodGFza0NvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudExlZnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stZWxlbWVudC1sZWZ0Jyk7XG4gICAgICAgICAgICBjb25zdCBkb21UaXRsZSA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICAgICAgY29uc3QgZG9tRGVzY3JpcHRpb24gPSB0YXNrRWxlbWVudExlZnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKTtcblxuICAgICAgICAgICAgY29uc3QgZm91bmRUYXNrID0gdGFza3MuZmluZCh0YXNrID0+IHRhc2sudGFza0lEID09IHRhc2tDb250YWluZXJJRCk7XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFRhc2suc3RhdHVzID09PSAnaW5jb21wbGV0ZScpIHJldHVybiBlZGl0VGFza3NPYmplY3QuaXNDb21wbGV0ZShmb3VuZFRhc2ssIHRhc2tDb250YWluZXIsIGV2ZW50LCBkb21UaXRsZSwgZG9tRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKGZvdW5kVGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHJldHVybiBlZGl0VGFza3NPYmplY3QuaXNJbmNvbXBsZXRlKGZvdW5kVGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9kZWxldGVzIG9iamVjdCBpbiB0YXNrIGFycmF5IGFuZCByZW1vdmVzIGRvbSBkaXNwbGF5IGVsZW1lbnRcbiAgICBoYW5kbGVEZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWRlbGV0ZScpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmICh0YXNrRGVsZXRlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySUQgPSBwYXJzZUludCh0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkKTtcblxuICAgICAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2sudGFza0lEID09PSB0YXNrQ29udGFpbmVySUQpO1xuXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG4gICAgICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL2NoYW5nZXMgc3RhdHVzICsgZG9tIHRvIGNvbXBsZXRlXG4gICAgaXNDb21wbGV0ZSh0YXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKSB7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3Qgc3RhdHVzXG4gICAgICAgIHRhc2suc3RhdHVzID0gJ2NvbXBsZXRlJztcblxuICAgICAgICAvL2NzcyB0byBkaXNwbGF5IGNvbXBsZXRlZCBzdGF0dXNcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgZG9tVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuICAgICAgICBkb21EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG5cbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2NoYW5nZXMgc3RhdHVzICsgZG9tIHRvIGluY29tcGxldGVcbiAgICBpc0luY29tcGxldGUodGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbikge1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IHN0YXR1c1xuICAgICAgICB0YXNrLnN0YXR1cyA9ICdpbmNvbXBsZXRlJztcblxuICAgICAgICAvL2NzcyB0byBkaXNwbGF5IGNvbXBsZXRlZCBzdGF0dXNcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgZG9tVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuICAgICAgICBkb21EZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG5cbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICByZXRyaWV2ZVRhc2tFbGVtZW50cyhldmVudCkge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoIXRhc2tDb250YWluZXIpIHJldHVybiBudWxsO1xuICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50TGVmdCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhc2stZWxlbWVudC1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrRWxlbWVudExlZnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudFJpZ2h0ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay1lbGVtZW50LXJpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0VsZW1lbnRSaWdodC5xdWVyeVNlbGVjdG9yKCcudGFzay1kdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrRWxlbWVudFJpZ2h0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgY29uc3QgZWRpdElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZWRpdElucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICAgIFxuICAgICAgICBjb25zdCB0YXNrSUROdW1iZXIgPSBwYXJzZUludCh0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkKTtcbiAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2sudGFza0lEID09PSB0YXNrSUROdW1iZXIpO1xuICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LFxuICAgICAgICAgICAgdGFza1RpdGxlLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0VsZW1lbnRSaWdodCxcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LFxuICAgICAgICAgICAgZWRpdElucHV0Qm94LFxuICAgICAgICAgICAgdGFza0lETnVtYmVyLFxuICAgICAgICAgICAgdGFza1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgLy9oYW5kbGVzIG5ldyBlZGl0ZWQgdGl0bGUgc3VibWlzc2lvblxuICAgIHN1Ym1pdFRpdGxlKGV2ZW50LCB0YXNrVGl0bGUsIGVkaXRJbnB1dEJveCkge1xuXG4gICAgICAgIGNvbnN0IHsgdGFza0VsZW1lbnRMZWZ0LCB0YXNrIH0gPSBlZGl0VGFza3NPYmplY3QucmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9yZW1vdmUgaW5wdXQgYm94IGFuZCByZXN0b3JlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZCh0YXNrVGl0bGUsIGVkaXRJbnB1dEJveCk7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3QgdGl0bGVcbiAgICAgICAgdGFzay50aXRsZSA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAvL3VwZGF0ZSBET00gZGlzcGxheVxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIFxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIC8vaGFuZGxlcyBuZXcgZWRpdGVkIGRlc2NyaXB0aW9uIHN1Ym1pc3Npb25cbiAgICBzdWJtaXREZXNjcmlwdGlvbihldmVudCwgdGFza0Rlc2NyaXB0aW9uLCBlZGl0SW5wdXRCb3gpIHtcblxuICAgICAgICBjb25zdCB7IHRhc2tFbGVtZW50TGVmdCwgdGFzayB9ID0gZWRpdFRhc2tzT2JqZWN0LnJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vcmVtb3ZlIGlucHV0IGJveCBhbmQgcmVzdG9yZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQodGFza0Rlc2NyaXB0aW9uLCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IGRlc2NyaXB0aW9uXG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgLy91cGRhdGUgRE9NIGRpc3BsYXlcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2hhbmRsZXMgbmV3IGVkaXRlZCBkZXNjcmlwdGlvbiBzdWJtaXNzaW9uXG4gICAgc3VibWl0RHVlRGF0ZShldmVudCwgdGFza0R1ZURhdGUsIGVkaXRJbnB1dEJveCkge1xuXG4gICAgICAgIGNvbnN0IHsgdGFza0VsZW1lbnRSaWdodCwgdGFzaywgdGFza0NvbnRhaW5lciB9ID0gZWRpdFRhc2tzT2JqZWN0LnJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vcmVtb3ZlIGlucHV0IGJveCBhbmQgcmVzdG9yZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQucmVwbGFjZUNoaWxkKHRhc2tEdWVEYXRlLCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IGRlc2NyaXB0aW9uXG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAvL3VwZGF0ZSBET00gZGlzcGxheVxuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgICAvL2F1dG8gc29ydCBsaXN0IGJ5IGR1ZSBkYXRlXG4gICAgICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tzQnlEYXRlKFsuLi50YXNrc10pO1xuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVUYXNrTGlzdChzb3J0ZWRUYXNrcyk7XG4gICAgXG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICB9LFxuXG4gICAgLy9jeWNsZSBiZXR3ZWVuIGxvdy1taWQtaGlnaCBwcmlvcml0eVxuICAgIGNoYW5nZVByaW9yaXR5KHRhc2ssIGV2ZW50LCB0YXNrUHJpb3JpdHksIHRhc2tDb250YWluZXIpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktbG93Jyk6XG5cbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1wcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LW1pZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdtZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktbWlkJyk6XG5cbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1wcmlvcml0eS1taWQnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJztcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgY2FzZSB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTpcblxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAnbG93JztcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93JztcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAgIFxuICAgIGhhbmRsZVRhc2tFZGl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgXG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQsIFxuICAgICAgICAgICAgZWRpdElucHV0Qm94LCBcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIsIFxuICAgICAgICAgICAgdGFza1RpdGxlLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0VsZW1lbnRSaWdodCxcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LFxuICAgICAgICAgICAgdGFza1xuICAgICAgICB9ID0gZWRpdFRhc2tzT2JqZWN0LnJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KTtcblxuICAgICAgICBpZiAoIXRhc2tDb250YWluZXIgfHwgIXRhc2tFbGVtZW50TGVmdCB8fCAhdGFza0VsZW1lbnRSaWdodCkgcmV0dXJuIG51bGw7XG4gICAgICBcbiAgICAgICAgLy9lZGl0IHRhc2sgdGl0bGVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stdGl0bGUnKSkge1xuICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZChlZGl0SW5wdXRCb3gsIHRhc2tUaXRsZSk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZWRpdElucHV0Qm94LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBlZGl0VGFza3NPYmplY3Quc3VibWl0VGl0bGUoZXZlbnQsIHRhc2tUaXRsZSwgZWRpdElucHV0Qm94KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZWRpdCB0YXNrIGRlc2NyaXB0aW9uXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWRlc2NyaXB0aW9uJykpIHtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRhc2tzT2JqZWN0LnN1Ym1pdERlc2NyaXB0aW9uKGV2ZW50LCB0YXNrRGVzY3JpcHRpb24sIGVkaXRJbnB1dEJveCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2VkaXQgdGFzayBkdWUgZGF0ZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kdWUtZGF0ZScpKSB7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3gudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIHRhc2tFbGVtZW50UmlnaHQucmVwbGFjZUNoaWxkKGVkaXRJbnB1dEJveCwgdGFza0R1ZURhdGUpO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFRhc2tzT2JqZWN0LnN1Ym1pdER1ZURhdGUoZXZlbnQsIHRhc2tEdWVEYXRlLCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgICAgICAgICAgICAgLy9zaG93IG5ldyBsb2NhdGlvbiBpbiB0aGUgdGFzayBsaXN0IGFmdGVyIHNvcnQgKiogZG9lc24ndCB3b3JrXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRhc2tDb250YWluZXIpIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1nbG93Jyk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWdsb3cnKTtcbiAgICAgICAgICAgICAgICAvLyB9LCA1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9lZGl0IHRhc2sgcHJpb3JpdHlcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHknKSkge1xuICAgICAgICAgICAgZWRpdFRhc2tzT2JqZWN0LmNoYW5nZVByaW9yaXR5KHRhc2ssIGV2ZW50LCB0YXNrUHJpb3JpdHksIHRhc2tDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfSxcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBib2R5Q29udGVudENvbnRhaW5lciwgY3JlYXRlQWxsUXVlc3RzUGFnZSB9IGZyb20gJy4vYWxsVGFza3MuanMnO1xuaW1wb3J0IHsgdGFza3MsIHRhc2tDb3VudGVyT2JqZWN0LCBwcm9qZWN0cywgcHJvamVjdENvdW50ZXJPYmplY3QgfSBmcm9tICcuL3RvZG8tZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VPYmplY3QgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tICcuL3Rhc2stZm9ybS1hY3Rpb25zLmpzJztcbmltcG9ydCB7IHdlZWtzUXVlc3RPYmplY3QgfSBmcm9tICcuL3RoaXNXZWVrLmpzJztcbmltcG9ydCB7IGRheXNRdWVzdE9iamVjdCB9IGZyb20gJy4vdG9kYXkuanMnO1xuXG5jb25zdCBzaWRlQmFyTWVudUl0ZW1zID0ge1xuICAgIHNpZGVCYXJNZW51OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10YXNrcycpLFxuICAgIGFsbFF1ZXN0c1RhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1xdWVzdHMnKSxcbiAgICBkYXlzUXVlc3RUYWI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzLXF1ZXN0cycpLFxuICAgIHdlZWtzUXVlc3RUYWI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrcy1xdWVzdHMnKSxcbiAgICBwcm9qZWN0VGFza3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzJyksXG4gICAgcHJvamVjdHNUYXNrc0xpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzLWxpc3QnKSxcbiAgICBhZGRRdWVzdGxpbmVUYWI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcXVlc3RsaW5lJyksXG5cbiAgICBhZGRDbGFzcyhldmVudCkge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH0sXG59O1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAvL2xvYWQgYWxsIHRhc2tzIHBhZ2UgZmlyc3RcbiAgICBhbGxRdWVzdHNQYWdlKCk7XG5cbiAgICAvL3Nob3cgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICBzaWRlQmFyTWVudUl0ZW1zLmFsbFF1ZXN0c1RhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgXG4gICAgLy9pbml0aWFsaXplIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgICBjcmVhdGVBbGxRdWVzdHNQYWdlLmluaXQoKTtcbn0pO1xuXG5zaWRlQmFyTWVudUl0ZW1zLnNpZGVCYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWxsLXF1ZXN0cycpKSB7XG4gICAgICAgIGFsbFF1ZXN0c1BhZ2UoKTtcblxuICAgICAgICAvL3Nob3cgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRDbGFzcyhldmVudCk7XG5cbiAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5kYXlzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLndlZWtzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGF5cy1xdWVzdHMnKSkge1xuICAgICAgICBkYXlzUXVlc3RPYmplY3QuZGF5c1F1ZXN0UGFnZSgpO1xuXG4gICAgICAgIC8vc2hvdyBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZENsYXNzKGV2ZW50KTtcblxuICAgICAgICAvL3JlbW92ZSBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFsbFF1ZXN0c1RhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMud2Vla3NRdWVzdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3ZWVrcy1xdWVzdHMnKSkge1xuICAgICAgICB3ZWVrc1F1ZXN0T2JqZWN0LndlZWtzUXVlc3RQYWdlKCk7XG5cbiAgICAgICAgLy9zaG93IHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWRkQ2xhc3MoZXZlbnQpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWxsUXVlc3RzVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5kYXlzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBhbGxRdWVzdHNQYWdlKCkge1xuICAgIC8vY2xlYXIgdGhlIHBhZ2VcbiAgICBib2R5Q29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vaW1wb3J0IHRhc2sgcGFnZSBlbGVtZW50c1xuICAgIGNvbnN0IHsgdGl0bGVFbGVtZW50LCBhZGRUYXNrQnV0dG9uIH0gPSBjcmVhdGVBbGxRdWVzdHNQYWdlLmVsZW1lbnRzO1xuXG4gICAgLy9hcHBlbmQgdG9vbHMgdG8gcGFnZVxuICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBjb25zdCByZXRyaWV2ZWRUYXNrcyA9IGxvY2FsU3RvcmFnZU9iamVjdC5nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHRhc2tzLmxlbmd0aCA9IDA7XG4gICAgdGFza3MucHVzaCguLi5yZXRyaWV2ZWRUYXNrcyk7XG5cbiAgICBjb25zdCByZXRyaWV2ZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZU9iamVjdC5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHByb2plY3RzLmxlbmd0aCA9IDA7XG4gICAgcHJvamVjdHMucHVzaCguLi5yZXRyaWV2ZWRQcm9qZWN0cyk7XG5cbiAgICAvL3ByZXZlbnQgdGFzayBjb3VudGVyIGZyb20gc3RhcnRpbmcgd2l0aCB3cm9uZyBpZCBudW1iZXIgb24gcGFnZSByZWxvYWRcbiAgICBpZiAodGFza3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxldCBwcmV2aW91c1Rhc2tJZCA9IHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLnRhc2tJRDtcbiAgICAgICAgdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIgPSBwcmV2aW91c1Rhc2tJZCArIDE7XG4gICAgfVxuXG4gICAgLy9zb3J0IHRhc2tzIGluIG9yZGVyIG9uIHBhZ2UgbG9hZFxuICAgIHNvcnRUYXNrc0J5RGF0ZSh0YXNrcyk7XG5cbiAgICAvL3JlbmRlciBzYXZlZCBwcm9qZWN0cyBvbiBwYWdlIGxvYWRcbiAgICByZW5kZXJQcm9qZWN0c0xpc3QocHJvamVjdHMpO1xuXG4gICAgZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3QodGFza3MpO1xuXG4gICAgcmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhc2tzQnlEYXRlKHRhc2tzKSB7XG4gICAgcmV0dXJuICB0YXNrcy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKSk7XG59XG5cblxuXG5cblxuXG5cbnNpZGVCYXJNZW51SXRlbXMucHJvamVjdFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLXF1ZXN0bGluZScpKSB7XG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy90byBvbmx5IGFkZCBvbmUgcHJvamVjdCBhdCBhIHRpbWVcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGVkaXRJbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGVkaXRJbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMucHJvamVjdHNUYXNrc0xpc3QuYXBwZW5kQ2hpbGQoZWRpdElucHV0Qm94KTtcbiAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG5cbiAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KGVkaXRJbnB1dEJveCwgcHJvamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgICAgIC8vcmUtZXN0YWJsaXNoIGFkZCBidXR0b25cbiAgICAgICAgICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZFF1ZXN0bGluZVRhYi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vbmV3IHByb2plY3QgY3JlYXRpb25cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoZWRpdElucHV0Qm94LCBwcm9qZWN0VGl0bGUpIHtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgc2lkZUJhck1lbnVJdGVtcy5wcm9qZWN0c1Rhc2tzTGlzdC5yZXBsYWNlQ2hpbGQobmV3UHJvamVjdCwgZWRpdElucHV0Qm94KTtcblxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QnKTtcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKTtcblxuICAgIHByb2plY3RDb3VudGVyT2JqZWN0LnByb2plY3RJRCsrO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUnKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ3gnO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICBcbiAgICBzaWRlQmFyTWVudUl0ZW1zLnByb2plY3RzVGFza3NMaXN0LmFwcGVuZENoaWxkKHNpZGVCYXJNZW51SXRlbXMuYWRkUXVlc3RsaW5lVGFiKTtcblxuICAgIHJldHVybiB7IG5ld1Byb2plY3QsIGRlbGV0ZVByb2plY3RCdXR0b24gfTtcbn1cblxuLy9yZW5kZXIgc2F2ZWQgcHJvamVjdHMgb24gcGFnZSBsb2FkXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0xpc3QocHJvamVjdHMpIHtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzLWxpc3QnKTtcblxuICAgIC8vY2xlYXIgdG8gcHJldmVudCBzdGFja2luZ1xuICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG5cbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcpO1xuICAgICAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKTtcbiAgICBcbiAgICAgICAgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKys7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIFxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGV2ZW50KSB7XG4gICAgY29uc3QgcHJvamVjdFRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzLWxpc3QnKTtcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm5ldy1wcm9qZWN0Jyk7XG4gICAgLy90aXRsZSArICd4JyBmb3IgZGVsZXRlIGJ1dHRvbiwgdXBkYXRlIGxhdGVyIC0tIGlmIHJlcGxhY2VkIGJ5IGljb25cbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGVUZXh0ID0gcHJvamVjdFRvRGVsZXRlLnRleHRDb250ZW50OyBcbiAgICAvLyBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0VG9EZWxldGUuZGF0YXNldC5wcm9qZWN0SWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vbmVlZCAneCcgLSBkb20gZWxlbWVudC50ZXh0Q29udGVudCBjb250YWlucyBsZXR0ZXIgeCBmb3IgZGVsZXRlIGJ1dHRvblxuICAgICAgICBpZiAoYCR7cHJvamVjdHNbaV19eGAgPT0gcHJvamVjdFRvRGVsZXRlVGV4dCkge1xuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdFRhc2tzTGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0VG9EZWxldGUpO1xuICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG59XG5cbi8vZGVsZXRlIHByb2plY3Qgb24gZG91YmxlIGNsaWNrXG5zaWRlQmFyTWVudUl0ZW1zLnByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWRlbGV0ZScpKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkZWxldGVQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG59KTsgIiwiZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZU9iamVjdCA9IHtcblxuICAgIC8vc2F2ZSB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpIHtcbiAgICAgICAgY29uc3QgdGFza3NKU09OID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCB0YXNrc0pTT04pO1xuICAgIH0sXG5cbiAgICAvL3NhdmUgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgcHJvamVjdHNKU09OKTtcbiAgICB9LFxuXG4gICAgLy9yZXRyaWV2ZSB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRhc2tzSlNPTikgfHwgW107XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9yZXRyaWV2ZSB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb2plY3RzSlNPTikgfHwgW107XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9LFxufSIsIi8vb2JqZWN0IHRvIHN0b3JlIGJhc2UgaXRlbXMgb24gdGhlIHBhZ2UgKHRpdGxlLCBmaXJzdCBidXR0b24gZXRjKVxuZXhwb3J0IGNvbnN0IHBhZ2VFbGVtZW50c09iamVjdCA9IHtcblxuICAgIGNyZWF0ZVBhZ2VUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9ICdBbGwgUXVlc3RzJztcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvZHktdGl0bGUnKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlRWxlbWVudDtcbiAgICB9LFxuXG4gICAgY3JlYXRlQWRkVGFza0J1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnfCt8IEFkZCBRdWVzdCc7XG4gICAgICAgIHJldHVybiBhZGRUYXNrQnV0dG9uO1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gICAgfVxufSIsImltcG9ydCB7IHRhc2tzLCBjcmVhdGVUYXNrLCBnZXRUYXNrcyB9IGZyb20gXCIuL3RvZG8tZmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSBcIi4vcGFnZS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlT2JqZWN0IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgc29ydFRhc2tzQnlEYXRlIH0gZnJvbSBcIi5cIjtcblxuLy9vYmplY3QgdG8gc3RvcmUgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGFzayBjcmVhdGlvbiAvIGZvcm0gc3VibWlzc2lvblxuZXhwb3J0IGNvbnN0IGZvcm1BY3Rpb25zT2JqZWN0ID0ge1xuICAgIFxuICAgIGF0dGFjaFN1Ym1pdExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBmb3JtQ29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKSB7XG5cbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0ICgnUGxlYXNlIGZpbGwgaW4gdGhlIHRpdGxlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgICAgICAgICAvLyBidWcgaW4gaGVyZT8/P1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QuYWRkVGFzaygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVUYXNrTGlzdCh0YXNrcyk7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW1vdmVGb3JtKGZvcm1Db250YWluZXIpO1xuXG4gICAgICAgICAgICAvL2F1dG8gc29ydCBpbnRvIGxpc3QgYWZ0ZXIgY3JlYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tzQnlEYXRlKFsuLi50YXNrc10pO1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3Qoc29ydGVkVGFza3MpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXR0YWNoQ2FuY2VsTGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pIHtcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbW92ZUZvcm0oZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlVGFza0xpc3QodGFza3MpIHtcblxuICAgICAgICBjb25zdCBib2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICAvL3ByZXZlbnQgZHVwbGljYXRlIHRhc2tzXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vcmUtYWRkIHRpdGxlIHRvIHBhZ2VcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZVBhZ2VUaXRsZSgpO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gICAgICAgIC8vcmVuZGVyIHRhc2tzIGZyb20gYXJyYXkgdG8gZG9tXG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHRhc2tzLCBib2R5Q29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgLy9wdXQgYWRkIGJ1dHRvbiB0byBib3R0b20gb2YgdGhlIGxpc3RcbiAgICAgICAgaWYoYWRkVGFza0J1dHRvbikgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgfSxcblxuICAgIC8vaXRlcmF0ZXMgdGhvdWdoIHRoZSB0YXNrcyBhcnJheSB0byBkaXNwbGF5IHRvIHRoZSBkb21cbiAgICByZW5kZXJUYXNrcyh0YXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpIHsgXG5cbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgLy9lYWNoIHNpZGUgb2YgdGhlIHRhc2sgaXRlbVxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vdGFza0VsZW1lbnRMZWZ0IGl0ZW1zIC0gY29tcGxldGUgYnV0dG9uLCB0aXRsZSBhbmQgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBsZXRlLWJ1dHRvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWNvbXBsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX1gO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XG5cbiAgICAgICAgaWYgKHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9PSAnJykge1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJyhlbXB0eSknO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90YXNrRWxlbWVudFJpZ2h0IC0gZHVlIGRhdGUsIHByaW9yaXR5LCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gJycpIHRhc2suZHVlRGF0ZSA9ICcobm8gZHVlIGRhdGUpJztcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcblxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7dGFzay5wcmlvcml0eX1gO1xuXG4gICAgICAgIC8vdXBkYXRlIGNzcyBiYXNlZCBvbiBwcmlvcml0eSB2YWx1ZVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5kaXNwbGF5UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lciwgdGFza1ByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgICAgICAgdGFza0RlbGV0ZS50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gICAgICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIHBhZ2VcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTsgICAgXG5cbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50TGVmdCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnRSaWdodCk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcsIHRhc2sudGFza0lEKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVsZW1lbnQtcmlnaHQnKTtcblxuICAgICAgICAvL2Rpc3BsYXkgdGFzayBjb21wbGV0aW9uIG9uIHBhZ2UtbG9hZFxuICAgICAgICBpZiAodGFzay5zdGF0dXMgPT0gJ2NvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlDb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgaWYgKHRhc2suc3RhdHVzID09ICdpbmNvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlJbmNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTsgICAgXG4gICAgfSxcblxuICAgIC8vbWFkZSBiYyBlZGl0VGFza3MgZnVuY3Rpb25zIHdlcmUgaW5jb21wYXRpYmxlXG4gICAgdXBkYXRlRGlzcGxheUNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICB9LFxuXG4gICAgLy9tYWRlIGJjIGVkaXRUYXNrcyBmdW5jdGlvbnMgd2VyZSBpbmNvbXBhdGlibGVcbiAgICB1cGRhdGVEaXNwbGF5SW5jb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC1jaGVja2VkJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmVGb3JtKGZvcm1Db250YWluZXIpIHtcbiAgICAgICAgY29uc3QgYm9keUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgaWYgKGJvZHlDb250ZW50Q29udGFpbmVyLmNvbnRhaW5zKGZvcm1Db250YWluZXIpKSBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9LFxuXG4gICAgLy9jYWxsZWQgYnkgc3VibWl0IGJ1dHRvbiB0byBwdXQgdGFzayBvbnRvIHBhZ2VcbiAgICBhZGRUYXNrKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktc2VsZWN0aW9uJykudmFsdWU7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIFxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuICAgIH0sXG5cbiAgICAvL2NzcyB0byB0YXNrIGNvbnRhaW5lciBhbmQgcHJpb3JpdHkgYnV0dG9uIGJhc2VkIG9uIHByaW9yaXR5IHZhbHVlXG4gICAgZGlzcGxheVByaW9yaXR5KHRhc2ssIHRhc2tDb250YWluZXIsIHRhc2tQcmlvcml0eSkge1xuXG4gICAgICAgIC8vcHJldmVudCBzdGFja2luZyBtdWx0aXBsZSBjbGFzc2VzXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbG93Jyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1taWQnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vb2JqZWN0IHRvIHN0b3JlIGZ1bmN0aW9ucyB0aGF0IGNyZWF0ZSBmb3JtIHRvIGdlbmVyYXRlIGluZGl2aWR1YWwgdGFza3NcbmV4cG9ydCBjb25zdCB0YXNrRm9ybU9iamVjdCA9IHtcblxuICAgIGNyZWF0ZUZvcm1MYXlvdXQoZm9ybUNvbnRhaW5lcikge1xuXG4gICAgICAgIC8vY3JlYXRlIGZvcm0gb2JqZWN0c1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBmb3JtTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9ybUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIGZvcm1cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtTGVmdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJpZ2h0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQm90dG9tKTtcblxuICAgICAgICAvL2FkZCBjbGFzc2VzXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuICAgICAgICBmb3JtTGVmdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxlZnQnKTtcbiAgICAgICAgZm9ybVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcmlnaHQnKTtcbiAgICAgICAgZm9ybUJvdHRvbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWJvdHRvbScpO1xuXG4gICAgICAgIHJldHVybiB7IGZvcm0sIGZvcm1MZWZ0LCBmb3JtUmlnaHQsIGZvcm1Cb3R0b20gfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybVRpdGxlKGZvcm1MZWZ0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgdGl0bGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgLy9wcmV2ZW50IHBhZ2UgcmVmcmVzaFxuICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkgeyBcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIGxlZnQgc2lkZVxuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuXG4gICAgICAgIHJldHVybiB7IHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybURlc2NyaXB0aW9uKGZvcm1MZWZ0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgZGVzY3JpcHRpb24gZWxlbWVudHNcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbiAob3B0aW9uYWwpJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IDI7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gbGVmdCBzaWRlIFxuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtRGF0ZShmb3JtUmlnaHQpIHtcblxuICAgICAgICAvL2NyZWF0ZSBkYXRlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIHJpZ2h0IHNpZGVcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWRhdGUnKTtcblxuICAgICAgICByZXR1cm4geyBkYXRlTGFiZWwsIGRhdGVJbnB1dCB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtUHJpb3JpdHlTZWxlY3Rvcihmb3JtUmlnaHQpIHtcblxuICAgICAgICAvL2NyZWF0ZSBwcmlvcml0eSBzZWxlY3Rpb24gZHJvcGJveCBhbmQgb3B0aW9uc1xuICAgICAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LXNlbGVjdGlvbicpO1xuICAgICAgICAvLyBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktc2VsZWN0aW9uJyk7XG4gICAgICAgIC8vIGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyT3B0aW9uLnRleHQgPSAnUHJpb3JpdHknO1xuICAgICAgICAvLyBwbGFjZWhvbGRlck9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24xLnZhbHVlID0gJ2xvdyc7XG4gICAgICAgIG9wdGlvbjEudGV4dCA9ICdMb3cgKFByaW9yaXR5KSc7XG4gICAgICAgIG9wdGlvbjEuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjIudmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgb3B0aW9uMi50ZXh0ID0gJ01lZGl1bSc7XG4gICAgICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMy52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgb3B0aW9uMy50ZXh0ID0gJ0hpZ2gnO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIHJpZ2h0IHNpZGVcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKHNlbGVjdElucHV0KTtcbiAgICAgICAgLy8gc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJPcHRpb24pO1xuICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gICAgICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIHNlbGVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHsgc2VsZWN0TGFiZWwsIHNlbGVjdElucHV0LCBvcHRpb24xLCBvcHRpb24yLCBvcHRpb24zIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1CdXR0b25zKGZvcm1Cb3R0b20pIHtcblxuICAgICAgICAvL2NyZWF0ZSBidXR0b24gZWxlbWVudHNcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gYm90dG9tXG4gICAgICAgIGZvcm1Cb3R0b20uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpO1xuICAgICAgICBmb3JtQm90dG9tLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbC1idXR0b24nKVxuXG4gICAgICAgIC8vYWRkIGNsYXNzZXNcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKVxuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpOyAgICBcblxuICAgICAgICByZXR1cm4geyBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiB9O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBib2R5Q29udGVudENvbnRhaW5lciB9IGZyb20gJy4vYWxsVGFza3MuanMnO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG8tZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBmb3JtQWN0aW9uc09iamVjdCB9IGZyb20gJy4vdGFzay1mb3JtLWFjdGlvbnMuanMnO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSAnLi9wYWdlLWVsZW1lbnRzLmpzJztcbmltcG9ydCB7IGRheXNRdWVzdE9iamVjdCB9IGZyb20gJy4vdG9kYXkuanMnO1xuXG5cbmV4cG9ydCBjb25zdCB3ZWVrc1F1ZXN0T2JqZWN0ID0ge1xuICAgIFxuICAgIHdlZWtzUXVlc3RQYWdlKCkge1xuICAgICAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vaW1wb3J0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcblxuICAgICAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgIFxuICAgICAgICAvL2dldCB3ZWVrcydzIGRhdGVcbiAgICAgICAgY29uc3QgeyBzdGFydE9mV2VlaywgZW5kT2ZXZWVrIH0gPSB3ZWVrc1F1ZXN0T2JqZWN0LmdldFdlZWtSYW5nZSgpO1xuXG4gICAgICAgIC8vZ2V0IHZhcmlhYmxlcyB0byBkaXNwbGF5IGluIGhlYWRlclxuICAgICAgICBsZXQgc3RhcnRPZldlZWtEYXkgPSBzdGFydE9mV2Vlay5nZXREYXRlKCk7XG4gICAgICAgIGxldCBlbmRPZldlZWtEYXkgPSBlbmRPZldlZWsuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgdGhpc01vbnRoID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICAgIC8vdXBkYXRlIHBhZ2UgdGl0bGVcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gYFdlZWsncyBRdWVzdHM6ICR7dGhpc01vbnRofSAke3N0YXJ0T2ZXZWVrRGF5fSAtICR7ZW5kT2ZXZWVrRGF5fWA7XG5cbiAgICAgICAgLy9maWx0ZXIgd2Vla3MncyB0YXNrc1xuICAgICAgICBsZXQgd2Vla3NUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrRGF0ZSA+PSBzdGFydE9mV2VlayAmJiB0YXNrRGF0ZSA8PSBlbmRPZldlZWs7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvL2Rpc3BsYXkgZmlsdGVyZWQgYXJyYXkgdG8gZG9tXG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHdlZWtzVGFza3MsIGJvZHlDb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICAvL3Rhc2tzIHRhc2tzIHRoaXMgd2VlayBtZXNzYWdlXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgaWYoIXRhc2tDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRheXNRdWVzdE9iamVjdC5zaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc3Qgbm9UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXRhc2snKTtcbiAgICAgICAgICAgIG5vVGFzay50ZXh0Q29udGVudCA9ICdObyBRdWVzdHMgRHVlIFRoaXMgV2Vlayc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2Vla3NUYXNrcztcbiAgICB9LFxuXG4gICAgZ2V0V2Vla1JhbmdlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTsgLy8wIChzdW4pIHRvIDYgKHNhdClcbiAgICBcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgY3VycmVudCBkYXkgYW5kIHRoZSBzdGFydCBvZiB0aGUgd2VlayAoc3VuKVxuICAgICAgICBjb25zdCBzdGFydE9mV2Vla0RpZmYgPSBjdXJyZW50RGF5ID09PSAwID8gMCA6IGN1cnJlbnREYXk7XG4gICAgXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSBzdGFydCBvZiB0aGUgd2VlayBieSBzdWJ0cmFjdGluZyB0aGUgZGlmZmVyZW5jZVxuICAgICAgICBjb25zdCBzdGFydE9mV2VlayA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSAoc3RhcnRPZldlZWtEaWZmKSk7ICAgIFxuXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSBlbmQgb2YgdGhlIHdlZWsgYnkgYWRkaW5nIHRoZSByZW1haW5pbmcgZGF5cyB1bnRpbCBzYXRcbiAgICAgICAgY29uc3QgZW5kT2ZXZWVrID0gbmV3IERhdGUoc3RhcnRPZldlZWspO1xuICAgICAgICBlbmRPZldlZWsuc2V0RGF0ZShzdGFydE9mV2Vlay5nZXREYXRlKCkgKyA2KTtcblxuICAgICAgICAvL3NldCBiZWdpbm5pbmcgdGltZSBvZiB3ZWVrIHRvIHN1bmRheSBtaWRuaWdodCBvZiBmaXJzdCBkYXlcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0SG91cnMoMCwgMCwgMCk7XG5cbiAgICAgICAgLy9zZXQgZW5kIHRpbWUgb2Ygd2VlayB0byAxMTo1OXBtIG9mIGxhc3QgZGF5XG4gICAgICAgIGVuZE9mV2Vlay5zZXRIb3VycygyMywgNTksIDU5KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRPZldlZWssIGVuZE9mV2VlayB9O1xuICAgIH1cbn07IiwiaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2FsbFRhc2tzLmpzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2RvLWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tICcuL3Rhc2stZm9ybS1hY3Rpb25zLmpzJztcbmltcG9ydCB7IHBhZ2VFbGVtZW50c09iamVjdCB9IGZyb20gJy4vcGFnZS1lbGVtZW50cy5qcyc7XG5cbi8vbG9hZCB0aGUgZGF5J3MgcXVlc3QgcGFnZVxuZXhwb3J0IGNvbnN0IGRheXNRdWVzdE9iamVjdCA9IHtcbiAgICBcbiAgICBkYXlzUXVlc3RQYWdlKCkge1xuICAgICAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vaW1wb3J0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcblxuICAgICAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgICAgLy91cGRhdGUgcGFnZSB0aXRsZVxuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgRGF5J3MgUXVlc3RzYDtcbiAgICAgICAgXG4gICAgICAgIC8vZ2V0IHRvZGF5J3MgZGF0ZVxuICAgICAgICBjb25zdCB0b2RheSA9IGRheXNRdWVzdE9iamVjdC5nZXRUb2RheURhdGUoKTtcblxuICAgICAgICAvL2ZpbHRlciB0b2RheSdzIHRhc2tzXG4gICAgICAgIGxldCB0b2RheXNUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PSB0b2RheSk7XG5cbiAgICAgICAgLy9kaXNwbGF5IGZpbHRlcmVkIGFycmF5IHRvIGRvbVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW5kZXJUYXNrcyh0b2RheXNUYXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgaWYoIXRhc2tDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRheXNRdWVzdE9iamVjdC5zaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvZGF5c1Rhc2tzO1xuICAgIH0sXG5cbiAgICBzaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgY29uc3Qgbm9UYXNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub1Rhc2tNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ25vLXRhc2snKTtcbiAgICAgICAgbm9UYXNrTWVzc2FnZS50ZXh0Q29udGVudCA9ICdObyBRdWVzdHMgRHVlIFRvZGF5JztcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9UYXNrTWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIG5vVGFza01lc3NhZ2U7XG4gICAgfSxcblxuICAgIGdldFRvZGF5RGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBsb2NhbFN0b3JhZ2VPYmplY3QgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbi8vdGFzayBhcnJheSB0byBzdG9yZSBhbGwgdGFza3NcbmV4cG9ydCBjb25zdCB0YXNrcyA9IFtdO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHRhc2tDb3VudGVyT2JqZWN0ID0ge1xuICAgIHRhc2tDb3VudGVyOiAwLFxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdENvdW50ZXJPYmplY3QgPSB7XG4gICAgcHJvamVjdElEOiAwLFxufVxuXG4vL2NyZWF0ZXMgdGFzayBvYmplY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRhc2tJRDogdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIsXG4gICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICB9O1xuXG4gICAgdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIrKztcblxuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgLy8gY29uc29sZS5sb2codGFza3MpO1xuXG4gICAgLy9zYXZlIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2UgYWZ0ZXIgY3JlYXRpbmcgYSBuZXcgdGFza1xuICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG5cbiAgICByZXR1cm4gdGFzaztcbn1cblxuLy9zZW5kIHRhc2sgYXJyYXkgdG8gYmUgZGlzcGxheWVkXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG5cbiAgICAvL3JldHJpZXZlIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZSBiZWZvcmUgcmV0dXJuaW5nXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iamVjdC5nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iamVjdC5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9