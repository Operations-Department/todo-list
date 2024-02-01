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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/cross-button.png */ "./src/imgs/cross-button.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/checked.png */ "./src/imgs/checked.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/trash-bin.png */ "./src/imgs/trash-bin.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: cover;
    background-color: transparent;
    border: none;
    transition: ease-in-out 0.3s;
    cursor: pointer;
    border-radius: var(--border-radius);
    width: 30px;
    height: 30px;
    margin-left: 25px;
    box-sizing: border-box;
    padding: 0;
    filter: invert(1);
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
.new-project {
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-size: cover;
    background-color: transparent;
    color: white;
    width: 1.2rem;
    height: 1.3rem;
    filter: invert(1);
    margin-right: 1rem;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* css reset */\n*, \nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    /* box-sizing: border-box; */\n}\n\n:root {\n    --primary-color: #2d2749;\n    --secondary-color: #df72a9;\n    --border-radius: 2rem;\n    --border-color: red;\n    --border: 1px solid var(--border-color);\n    --font-color: white;\n    --gap: 1rem;\n    --cancel-color: #a52f2f;\n    --submit-color: #026e02cf;\n    --background-image: url(./imgs/backdrop-2.jpg);\n    --low-priority: yellow;\n    --low-background: #ffff0014;\n    --mid-priority: orange;\n    --mid-background: #ffa5001c;\n    --high-priority: #ff4141;\n    --high-background: #ff414129;\n}\n\n@font-face {\n    font-family: 'Primary-font';\n    src: url('./fonts/QueensidesMedium-x30zV.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Secondary-font';\n    src: url('./fonts/Ubuntu-n1M0.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n.content {\n    height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 0.5fr 4fr 0.25fr;\n}\n\n/* header */\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Primary-font';\n    color: var(--font-color);\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    font-size: 5rem;\n    gap: var(--gap);\n}\n\n.svg {\n    height: 6rem;\n    padding-left: 1rem;\n    filter: invert(1);\n}\n\n/* side-bar */\n.side-bar {\n    grid-area: 2 / 1 / 3 / 2;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    color: var(--font-color);\n    font-family: 'Secondary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 2rem;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n#home-tasks {\n    position: sticky;\n    top: 0;\n}\n\n.project-tasks {\n    position: sticky;\n    top: 17rem;\n}\n\n.project-tasks-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: var(--gap);\n    align-items: flex-start;\n}\n\n.new-project {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: var(--border-radius);\n    padding: 0.5rem 1rem 0.5rem 1rem !important;\n    overflow: auto;\n}\n\n.new-project:hover {\n    transform: none;\n    /* background-color: #00000026; */\n    border: var(--border);\n    /* box-shadow: 5px 10px 10px #00000063; */\n}\n\n.project-delete {\n    background-image: url(./imgs/cross-button.png);\n    background-size: cover;\n    background-color: transparent;\n    border: none;\n    transition: ease-in-out 0.3s;\n    cursor: pointer;\n    border-radius: var(--border-radius);\n    width: 30px;\n    height: 30px;\n    margin-left: 25px;\n    box-sizing: border-box;\n    padding: 0;\n    filter: invert(1);\n}\n\n#home-tasks,\n.project-tasks {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: var(--gap);\n    width: 80%;\n    list-style: none;\n    padding: 1.5rem;\n}\n\n.side-bar-title {\n    border-bottom: var(--border);\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n@keyframes bounce {\n    0% {\n        transform: translateY(10px);\n    }\n    50% {\n        transform: translateY(-10px);\n    }\n    100% {\n        transform: translateY(10px);\n    }\n}\n\n @keyframes pulse {\n    0% {\n        transform: scale(1.0);\n    }\n    50% {\n        transform: scale(1.15);\n    }\n    100% {\n        transform: scale(1.0);\n    }\n}\n\n@keyframes glow {\n    0% {\n        background: rgba(0, 255, 0, 0.2);\n    }\n    50% {\n        background: rgba(0, 255, 0, 0.6);\n    }\n    100% {\n        background: rgba(0, 255, 0, 0.2);\n    }\n}\n\nli > button,\n#body-content-container > button,\n#submit-button,\n#cancel-button,\n.new-project {\n    color: var(--font-color);\n    transition: ease-in-out 0.3s;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    padding: 0;\n    background: none;\n    box-sizing: border-box;\n}\n\n.menu-selected {\n    border-bottom: 1px solid white;\n}\n\n#body-content-container > button {\n    animation: bounce 8s infinite;\n    align-self: center;\n    box-sizing: border-box;\n    padding: 0.7rem;\n}\n\n#body-content-container > button:hover {\n    cursor: pointer;\n    border-radius: var(--border-radius);\n    background: white;\n    color: black;\n}\n\nli > button:hover {\n    cursor: pointer;\n    transform: translateX(1rem);\n}\n\n/* main */\n.body {\n    grid-area: 2 / 2 / 3 / 3;\n    background: var(--primary-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#body-content-container {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    border: var(--border);\n    color: var(--font-color);\n    font-family: 'Primary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: var(--gap);\n    overflow-y: auto;\n    padding-bottom: 1rem;\n}\n\n.body-title {\n    font-size: 4rem;\n    border-bottom: var(--border);\n    border-right: var(--border);\n    padding: 1rem;\n}\n\n.form-container{\n    height: 12rem;\n    width: 90%;\n    background-image: url(./imgs/backdrop-2.jpg);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    box-sizing: border-box;\n    border: var(--border);\n    align-self: center;\n}\n\n.form {\n    display: grid;\n    grid-template-rows: 3fr 1fr;\n    grid-template-columns: 2fr 1fr;\n    height: 100%;\n    padding: 0.5rem;\n    box-sizing: border-box;\n    gap: 1.5rem;\n}\n\n.form-left,\n.form-right {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.form-left {\n    grid-area: 1 / 1 / 2 / 2;\n    overflow: auto;\n}\n\n.form-right {\n    grid-area: 1 / 2 / 2 / 3;\n}\n\n.form-bottom {\n    grid-area: 2 / 1 / 3 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n/* submit-button/add-button */\n.submit-button:hover {\n    box-shadow: 0px 5px 0px var(--submit-color);\n    color: var(--submit-color);\n    border-left: 1px solid var(--submit-color);\n    border-right: 1px solid var(--submit-color);\n}\n\n.cancel-button:hover {\n    box-shadow: 0px 5px 0px var(--cancel-color);\n    color: var(--cancel-color);\n    border-left: 1px solid var(--cancel-color);\n    border-right: 1px solid var(--cancel-color);\n}\n\n.submit-button, \n.cancel-button {\n    height: 2.5rem;\n    width: 7rem;\n    border-radius: 0.5rem;\n}\n\n.form-bottom > button:hover {\n    cursor: pointer;\n    transform: translateY(-10px);\n}\n\n.form-title,\n.form-description,\n.form-date,\n.form-select {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    border-radius: 0.5rem;\n    outline: none;\n}\n\n.form-title {\n    height: 1rem;\n    width: 90%;\n}\n\n.form-description {\n    height: 2.5rem;\n    width: 90%;\n}\n\n.form-date,\n.form-select {\n    height: 2rem;\n    width: 12rem;\n    padding: 0;\n    padding-left: 0.2rem;\n}\n\n.task-container {\n    transition: ease-in-out 0.3s;\n    box-sizing: border-box;\n    width: 90%;\n    min-width: 37rem;\n    height: auto;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    /* border-left: 1px solid var(--border-color); */\n    gap: 0.5rem;\n    align-self: center;\n    background-color: #3b3361;\n    overflow: hidden;\n    /* white-space: nowrap; */\n}\n\n.task-element-left,\n.task-element-right {\n    box-sizing: border-box;\n    font-family: 'Secondary-font';\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    width: 100%;\n    display: flex;\n    gap: 3rem;\n    align-items: center;\n}\n\n.task-element-left {\n    justify-content: flex-start;\n}\n\n.task-element-right {\n    justify-content: flex-end;\n    font-size: 1rem;\n}\n\n.task-complete-button {\n    height: 1.5rem;\n    width: 1.5rem;\n    border: 2px solid white;\n    background: none;\n    border-radius: var(--border-radius);\n    flex-shrink: 0;\n}\n\n.completed-task {\n    background: #00f9003d;\n    border-left: 2px solid #04ff04;\n    color: #ffffff69;\n}\n\n.completed-task-text {\n    text-decoration: line-through;\n}\n\n.completed-checked {\n    border: none;   \n    background-image: url(./imgs/checked.png);\n    background-size: cover;\n}\n\n.task-title:hover,\n.task-description:hover,\n.task-due-date:hover,\n.task-complete-button:hover,\n.task-priority:hover,\n.task-delete:hover {\n    cursor: pointer;\n}\n\n.task-title {\n    font-size: 1.5rem;\n}\n\n.task-description {\n    font-size: 1rem;\n}\n\n.task-due-date {\n    width: 6.1rem;\n}\n\n/* priority emblem itself*/\n.task-priority {\n    border-radius: var(--border-radius);\n    padding: 5px 15px 5px 15px;\n    background: none;\n    color: var(--font-color)\n}\n\n.task-priority-low,\n.task-priority-mid,\n.task-priority-high {\n    width: 5.5rem;\n}\n\n.task-priority-low {\n    color: var(--low-priority);\n    border: 1px solid var(--low-priority);\n}\n\n.task-priority-mid {\n    color: var(--mid-priority);\n    border: 1px solid var(--mid-priority);\n}\n\n.task-priority-high {\n    color: var(--high-priority);\n    border: 1px solid var(--high-priority);\n}\n\n/* task container (priority)*/\n.task-container-low-priority {\n    /* border: 1px solid var(--low-priority); */\n    border: 1px solid var(--low-background);\n    border-left: 3px solid var(--low-priority);\n    /* background-color: var(--low-background); */\n}\n\n.task-container-mid-priority {\n    /* border: 1px solid var(--mid-priority); */\n    border: 1px solid var(--mid-background);\n    border-left: 3px solid var(--mid-priority);\n    /* background-color: var(--mid-background); */\n}\n\n.task-container-high-priority {\n    /* border: 1px solid var(--high-priority); */\n    border: 1px solid var(--high-background);\n    border-left: 3px solid var(--high-priority);\n    /* background-color: var(--high-background); */\n}\n\n.task-container:hover {\n    box-shadow: 5px 10px 10px #00000063;\n}\n\n.task-delete {\n    background-image: url(./imgs/trash-bin.png);\n    background-size: cover;\n    background-color: transparent;\n    color: white;\n    width: 1.2rem;\n    height: 1.3rem;\n    filter: invert(1);\n    margin-right: 1rem;\n}\n\n.no-task {\n    height: 15%;\n    width: 100%;\n    /* border: var(--border); */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    font-size: 3rem;\n    animation: bounce 6s infinite;\n}\n\n/* to obviously show where the task moved upon sort */\n.task-glow {\n    background: rgba(0, 255, 0, 0.7); \n    animation: glow 5s infinite;\n}\n\nfooter {\n    grid-area: 3 / 1 / 4 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Secondary-font';\n    color: white;\n    font-size: 1rem;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n}\n\n.content > div {\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
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
        bodyContentContainer.addEventListener('dblclick', this.deleteTask);
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
        event.stopPropagation();
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
        event.stopPropagation();
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
                _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects.push(projectTitle);

                //creates project dom element
                createNewProject(editInputBox, projectTitle);

                //re-establish add button
                sideBarMenuItems.addQuestlineTab.disabled = false;

                _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveProjectsToLocalStorage(_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects);
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
        _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.bodyContentContainer.innerHTML = '';

        //import task page elements
        const { titleElement, addTaskButton } = _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.createAllQuestsPage.elements;

        //append tools to page
        _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.bodyContentContainer.appendChild(titleElement);

        titleElement.textContent = `${projectTitle}`;

        //filter tasks array by project name
        let projectTasks = _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.filter(task => task.projectName === projectTitle);

        _task_form_actions_js__WEBPACK_IMPORTED_MODULE_4__.formActionsObject.renderTasks(projectTasks, _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.bodyContentContainer);

        _allTasks_js__WEBPACK_IMPORTED_MODULE_1__.bodyContentContainer.appendChild(addTaskButton);
    }
});

//new project creation to dom
function createNewProject(editInputBox, projectTitle) {

    const newProject = document.createElement('button');

    newProject.textContent = projectTitle;
    sideBarMenuItems.projectsTasksList.replaceChild(newProject, editInputBox);

    newProject.classList.add('new-project');
    newProject.setAttribute('data-project-id', _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projectCounterObject.projectID);

    _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projectCounterObject.projectID++;

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
        newProject.setAttribute('data-project-id', _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projectCounterObject.projectID);
    
        _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projectCounterObject.projectID++;
    
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

    for (let i = 0; i < _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
        if (_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects[i] == projectToDeleteText) {
            _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects.splice(i, 1);
            break;
        }
    }
    projectTasksList.removeChild(projectToDelete);
    _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.localStorageObject.saveProjectsToLocalStorage(_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

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

        const bodyContentContainer = document.getElementById('body-content-container');
        const title = document.querySelector('.body-title');

        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            const titleInput = document.getElementById('title').value.trim();

            if (!titleInput) {
                alert ('Please fill in the title');
                return;
            }

            formActionsObject.addTask();
            const tasks = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
            addTaskButton.disabled = false;
            formActionsObject.removeForm(formContainer);






            if (title.textContent !== 'All Quests') {
                let projectTasks = tasks.filter(task => task.projectName === title);
                formActionsObject.renderTasks(projectTasks, bodyContentContainer);
                const sortedTasks = (0,___WEBPACK_IMPORTED_MODULE_3__.sortTasksByDate)([...projectTasks]);
                formActionsObject.updateTaskList(sortedTasks);
                bodyContentContainer.appendChild(addTaskButton);
                
            } else {
                // formActionsObject.updateTaskList(tasks);

                //auto sort into list after creation
                const sortedTasks = (0,___WEBPACK_IMPORTED_MODULE_3__.sortTasksByDate)([...tasks]);
                formActionsObject.updateTaskList(sortedTasks);
            }
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

        const title = document.querySelector('.body-title').textContent;

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
        // taskDelete.textContent = 'delete';

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
        const projectName = document.querySelector('.body-title').textContent;
        
        const newTask = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.createTask)(title, description, dueDate, priority, projectName);
    
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
        let startOfWeekMonth = new Date(startOfWeek).toLocaleString('en-US', { month: 'short' });

        let endOfWeekDay = endOfWeek.getDate();
        let endOfWeekMonth = new Date(endOfWeek).toLocaleString('en-US', { month: 'short' });

        //update page title
        if (startOfWeekMonth !== endOfWeekMonth) {
            titleElement.textContent = `Week's Quests: ${startOfWeekMonth} ${startOfWeekDay} - ${endOfWeekMonth} ${endOfWeekDay}`;
        } else {
            titleElement.textContent = `Week's Quests: ${startOfWeekMonth} ${startOfWeekDay} - ${endOfWeekDay}`;
        }

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

        let currentDate = new Date();
        let todaysDate = currentDate.getDate();
        let thisMonth = new Date().toLocaleString('en-US', { month: 'short' });
        let thisYear = currentDate.getFullYear();

        //update page title
        titleElement.textContent = `Day's Quests:  ${todaysDate} ${thisMonth} ${thisYear}`;
        
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
function createTask(title, description, dueDate, priority, projectName) {
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

/***/ }),

/***/ "./src/imgs/cross-button.png":
/*!***********************************!*\
  !*** ./src/imgs/cross-button.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fcd38139556dd26ca42.png";

/***/ }),

/***/ "./src/imgs/trash-bin.png":
/*!********************************!*\
  !*** ./src/imgs/trash-bin.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b69d1a37ce963833bc0b.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFNBQVMsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLHNEQUFzRCxj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QUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stZm9ybS1hY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RoaXNXZWVrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvYmFja2Ryb3AtMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1ZWVuc2lkZXNNZWRpdW0teDMwelYudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9VYnVudHUtbjFNMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvY3Jvc3MtYnV0dG9uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1ncy9jaGVja2VkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1ncy90cmFzaC1iaW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGNzcyByZXNldCAqL1xuKiwgXG5odG1sIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXG59XG5cbjpyb290IHtcbiAgICAtLXByaW1hcnktY29sb3I6ICMyZDI3NDk7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNkZjcyYTk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIC0tZm9udC1jb2xvcjogd2hpdGU7XG4gICAgLS1nYXA6IDFyZW07XG4gICAgLS1jYW5jZWwtY29sb3I6ICNhNTJmMmY7XG4gICAgLS1zdWJtaXQtY29sb3I6ICMwMjZlMDJjZjtcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAtLWxvdy1wcmlvcml0eTogeWVsbG93O1xuICAgIC0tbG93LWJhY2tncm91bmQ6ICNmZmZmMDAxNDtcbiAgICAtLW1pZC1wcmlvcml0eTogb3JhbmdlO1xuICAgIC0tbWlkLWJhY2tncm91bmQ6ICNmZmE1MDAxYztcbiAgICAtLWhpZ2gtcHJpb3JpdHk6ICNmZjQxNDE7XG4gICAgLS1oaWdoLWJhY2tncm91bmQ6ICNmZjQxNDEyOTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pLCBmb3JtYXQoJ3R0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSwgZm9ybWF0KCd0dGYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA0ZnIgMC4yNWZyO1xufVxuXG4vKiBoZWFkZXIgKi9cbmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG59XG5cbi5zdmcge1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi8qIHNpZGUtYmFyICovXG4uc2lkZS1iYXIge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuI2hvbWUtdGFza3Mge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG4ucHJvamVjdC10YXNrcyB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDE3cmVtO1xufVxuXG4ucHJvamVjdC10YXNrcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubmV3LXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDI2OyAqL1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICMwMDAwMDA2MzsgKi9cbn1cblxuLnByb2plY3QtZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuI2hvbWUtdGFza3MsXG4ucHJvamVjdC10YXNrcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLnNpZGUtYmFyLXRpdGxlIHtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgfVxufVxuXG4gQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdsb3cge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMik7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjYpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMik7XG4gICAgfVxufVxuXG5saSA+IGJ1dHRvbixcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uLFxuI3N1Ym1pdC1idXR0b24sXG4jY2FuY2VsLWJ1dHRvbixcbi5uZXctcHJvamVjdCB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tZW51LXNlbGVjdGVkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uIHtcbiAgICBhbmltYXRpb246IGJvdW5jZSA4cyBpbmZpbml0ZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwLjdyZW07XG59XG5cbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5saSA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbn1cblxuLyogbWFpbiAqL1xuLmJvZHkge1xuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNib2R5LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4uYm9keS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXIpO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5mb3JtLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEycmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBnYXA6IDEuNXJlbTtcbn1cblxuLmZvcm0tbGVmdCxcbi5mb3JtLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uZm9ybS1sZWZ0IHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5mb3JtLXJpZ2h0IHtcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG59XG5cbi5mb3JtLWJvdHRvbSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi8qIHN1Ym1pdC1idXR0b24vYWRkLWJ1dHRvbiAqL1xuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLXN1Ym1pdC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXN1Ym1pdC1jb2xvcik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXN1Ym1pdC1jb2xvcik7XG59XG5cbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1jYW5jZWwtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtY29sb3IpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jYW5jZWwtY29sb3IpO1xufVxuXG4uc3VibWl0LWJ1dHRvbiwgXG4uY2FuY2VsLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDdyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4uZm9ybS1ib3R0b20gPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuXG4uZm9ybS10aXRsZSxcbi5mb3JtLWRlc2NyaXB0aW9uLFxuLmZvcm0tZGF0ZSxcbi5mb3JtLXNlbGVjdCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5mb3JtLWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uZm9ybS1kYXRlLFxuLmZvcm0tc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWluLXdpZHRoOiAzN3JlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAgIGdhcDogMC41cmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzMzYxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbn1cblxuLnRhc2stZWxlbWVudC1sZWZ0LFxuLnRhc2stZWxlbWVudC1yaWdodCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stZWxlbWVudC1sZWZ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi50YXNrLWVsZW1lbnQtcmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1jb21wbGV0ZS1idXR0b24ge1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLmNvbXBsZXRlZC10YXNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDBmOTAwM2Q7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDRmZjA0O1xuICAgIGNvbG9yOiAjZmZmZmZmNjk7XG59XG5cbi5jb21wbGV0ZWQtdGFzay10ZXh0IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmNvbXBsZXRlZC1jaGVja2VkIHtcbiAgICBib3JkZXI6IG5vbmU7ICAgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50YXNrLXRpdGxlOmhvdmVyLFxuLnRhc2stZGVzY3JpcHRpb246aG92ZXIsXG4udGFzay1kdWUtZGF0ZTpob3Zlcixcbi50YXNrLWNvbXBsZXRlLWJ1dHRvbjpob3Zlcixcbi50YXNrLXByaW9yaXR5OmhvdmVyLFxuLnRhc2stZGVsZXRlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhc2stZHVlLWRhdGUge1xuICAgIHdpZHRoOiA2LjFyZW07XG59XG5cbi8qIHByaW9yaXR5IGVtYmxlbSBpdHNlbGYqL1xuLnRhc2stcHJpb3JpdHkge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59XG5cbi50YXNrLXByaW9yaXR5LWxvdyxcbi50YXNrLXByaW9yaXR5LW1pZCxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xuICAgIHdpZHRoOiA1LjVyZW07XG59XG5cbi50YXNrLXByaW9yaXR5LWxvdyB7XG4gICAgY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcbn1cblxuLnRhc2stcHJpb3JpdHktbWlkIHtcbiAgICBjb2xvcjogdmFyKC0tbWlkLXByaW9yaXR5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xufVxuXG4udGFzay1wcmlvcml0eS1oaWdoIHtcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XG59XG5cbi8qIHRhc2sgY29udGFpbmVyIChwcmlvcml0eSkqL1xuLnRhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eSB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1iYWNrZ3JvdW5kKTsgKi9cbn1cblxuLnRhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eSB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZC1iYWNrZ3JvdW5kKTsgKi9cbn1cblxuLnRhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHkge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpOyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLWJhY2tncm91bmQpOyAqL1xufVxuXG4udGFzay1jb250YWluZXI6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzAwMDAwMDYzO1xufVxuXG4udGFzay1kZWxldGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMS4ycmVtO1xuICAgIGhlaWdodDogMS4zcmVtO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm5vLXRhc2sge1xuICAgIGhlaWdodDogMTUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJvcmRlcjogdmFyKC0tYm9yZGVyKTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgNnMgaW5maW5pdGU7XG59XG5cbi8qIHRvIG9idmlvdXNseSBzaG93IHdoZXJlIHRoZSB0YXNrIG1vdmVkIHVwb24gc29ydCAqL1xuLnRhc2stZ2xvdyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNyk7IFxuICAgIGFuaW1hdGlvbjogZ2xvdyA1cyBpbmZpbml0ZTtcbn1cblxuZm9vdGVyIHtcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmNvbnRlbnQgPiBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDs7Q0FFQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtJQUNyQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFD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Ii8qIGNzcyByZXNldCAqL1xcbiosIFxcbmh0bWwge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMmQyNzQ5O1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2RmNzJhOTtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICAtLWJvcmRlci1jb2xvcjogcmVkO1xcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIC0tZm9udC1jb2xvcjogd2hpdGU7XFxuICAgIC0tZ2FwOiAxcmVtO1xcbiAgICAtLWNhbmNlbC1jb2xvcjogI2E1MmYyZjtcXG4gICAgLS1zdWJtaXQtY29sb3I6ICMwMjZlMDJjZjtcXG4gICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWdzL2JhY2tkcm9wLTIuanBnKTtcXG4gICAgLS1sb3ctcHJpb3JpdHk6IHllbGxvdztcXG4gICAgLS1sb3ctYmFja2dyb3VuZDogI2ZmZmYwMDE0O1xcbiAgICAtLW1pZC1wcmlvcml0eTogb3JhbmdlO1xcbiAgICAtLW1pZC1iYWNrZ3JvdW5kOiAjZmZhNTAwMWM7XFxuICAgIC0taGlnaC1wcmlvcml0eTogI2ZmNDE0MTtcXG4gICAgLS1oaWdoLWJhY2tncm91bmQ6ICNmZjQxNDEyOTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUXVlZW5zaWRlc01lZGl1bS14MzB6Vi50dGYnKSwgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1VidW50dS1uMU0wLnR0ZicpLCBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA0ZnIgMC4yNWZyO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxufVxcblxcbi5zdmcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi8qIHNpZGUtYmFyICovXFxuLnNpZGUtYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jaG9tZS10YXNrcyB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLnByb2plY3QtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDE3cmVtO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbSAhaW1wb3J0YW50O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMjY7ICovXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgLyogYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7ICovXFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZ3MvY3Jvc3MtYnV0dG9uLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuI2hvbWUtdGFza3MsXFxuLnByb2plY3QtdGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4uc2lkZS1iYXItdGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICB9XFxufVxcblxcbiBAa2V5ZnJhbWVzIHB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC42KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xcbiAgICB9XFxufVxcblxcbmxpID4gYnV0dG9uLFxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uLFxcbiNzdWJtaXQtYnV0dG9uLFxcbiNjYW5jZWwtYnV0dG9uLFxcbi5uZXctcHJvamVjdCB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWVudS1zZWxlY3RlZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b24ge1xcbiAgICBhbmltYXRpb246IGJvdW5jZSA4cyBpbmZpbml0ZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxufVxcblxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxubGkgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbi5ib2R5IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmJvZHktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWdzL2JhY2tkcm9wLTIuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5mb3JtLWxlZnQsXFxuLmZvcm0tcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1sZWZ0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZvcm0tcmlnaHQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxufVxcblxcbi5mb3JtLWJvdHRvbSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLyogc3VibWl0LWJ1dHRvbi9hZGQtYnV0dG9uICovXFxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWNvbG9yKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLCBcXG4uY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1ib3R0b20gPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxufVxcblxcbi5mb3JtLXRpdGxlLFxcbi5mb3JtLWRlc2NyaXB0aW9uLFxcbi5mb3JtLWRhdGUsXFxuLmZvcm0tc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5mb3JtLWRlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5mb3JtLWRhdGUsXFxuLmZvcm0tc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4td2lkdGg6IDM3cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzMzYxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xcbn1cXG5cXG4udGFzay1lbGVtZW50LWxlZnQsXFxuLnRhc2stZWxlbWVudC1yaWdodCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lbGVtZW50LWxlZnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLWVsZW1lbnQtcmlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDBmOTAwM2Q7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA0ZmYwNDtcXG4gICAgY29sb3I6ICNmZmZmZmY2OTtcXG59XFxuXFxuLmNvbXBsZXRlZC10YXNrLXRleHQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbXBsZXRlZC1jaGVja2VkIHtcXG4gICAgYm9yZGVyOiBub25lOyAgIFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWdzL2NoZWNrZWQucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnRhc2stdGl0bGU6aG92ZXIsXFxuLnRhc2stZGVzY3JpcHRpb246aG92ZXIsXFxuLnRhc2stZHVlLWRhdGU6aG92ZXIsXFxuLnRhc2stY29tcGxldGUtYnV0dG9uOmhvdmVyLFxcbi50YXNrLXByaW9yaXR5OmhvdmVyLFxcbi50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDYuMXJlbTtcXG59XFxuXFxuLyogcHJpb3JpdHkgZW1ibGVtIGl0c2VsZiovXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sb3csXFxuLnRhc2stcHJpb3JpdHktbWlkLFxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcbiAgICB3aWR0aDogNS41cmVtO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sb3cge1xcbiAgICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbWlkIHtcXG4gICAgY29sb3I6IHZhcigtLW1pZC1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbn1cXG5cXG4vKiB0YXNrIGNvbnRhaW5lciAocHJpb3JpdHkpKi9cXG4udGFzay1jb250YWluZXItbG93LXByaW9yaXR5IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1iYWNrZ3JvdW5kKTsgKi9cXG59XFxuXFxuLnRhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmFja2dyb3VuZCk7ICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtYmFja2dyb3VuZCk7ICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzAwMDAwMDYzO1xcbn1cXG5cXG4udGFzay1kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWdzL3RyYXNoLWJpbi5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBoZWlnaHQ6IDEuM3JlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLm5vLXRhc2sge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJvcmRlcjogdmFyKC0tYm9yZGVyKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgNnMgaW5maW5pdGU7XFxufVxcblxcbi8qIHRvIG9idmlvdXNseSBzaG93IHdoZXJlIHRoZSB0YXNrIG1vdmVkIHVwb24gc29ydCAqL1xcbi50YXNrLWdsb3cge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC43KTsgXFxuICAgIGFuaW1hdGlvbjogZ2xvdyA1cyBpbmZpbml0ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbi5jb250ZW50ID4gZGl2IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwYWdlRWxlbWVudHNPYmplY3QgfSBmcm9tIFwiLi9wYWdlLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyB0YXNrRm9ybU9iamVjdCB9IGZyb20gXCIuL3Rhc2stZm9ybVwiO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tIFwiLi90YXNrLWZvcm0tYWN0aW9uc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tzT2JqZWN0IH0gZnJvbSBcIi4vZWRpdFRhc2tzXCI7XG5cbmV4cG9ydCBjb25zdCBib2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG5cbi8vbWFpbiBmdW5jdGlvbiB0byBwb3B1bGF0ZSB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFsbFF1ZXN0c1BhZ2UgPSB7XG5cbiAgICB0aXRsZUVsZW1lbnQ6IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKSxcbiAgICBhZGRUYXNrQnV0dG9uOiBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlQWRkVGFza0J1dHRvbigpLFxuICAgIGZvcm1Db250YWluZXI6IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVGb3JtQ29udGFpbmVyKCksXG5cbiAgICAvL2NsaWNrIHRvIGFkZCBuZXcgdGFza1xuICAgIGFkZFRhc2soKSB7XG4gICAgICAgIGhhbmRsZUFkZFRhc2soY3JlYXRlQWxsUXVlc3RzUGFnZS5hZGRUYXNrQnV0dG9uLCBjcmVhdGVBbGxRdWVzdHNQYWdlLmZvcm1Db250YWluZXIpO1xuICAgIH0sXG5cbiAgICAvL2NsaWNrIHRvIG1hcmsgdGFzayBjb21wbGV0ZVxuICAgIGNvbXBsZXRlVGFzayhldmVudCkge1xuICAgICAgICBlZGl0VGFza3NPYmplY3QuaGFuZGxlQ29tcGxldGVUYXNrKGV2ZW50KTtcbiAgICB9LFxuICAgIFxuICAgIC8vY2xpY2sgdG8gZGVsZXRlIHRhc2tcbiAgICBkZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGVkaXRUYXNrc09iamVjdC5oYW5kbGVEZWxldGVUYXNrKGV2ZW50KTtcbiAgICB9LFxuXG4gICAgLy9kb3VibGUgY2xpY2sgdG8gZWRpdCB0YXNrc1xuICAgIGVkaXRUYXNrKGV2ZW50KSB7XG4gICAgICAgIGVkaXRUYXNrc09iamVjdC5oYW5kbGVUYXNrRWRpdChldmVudCk7XG4gICAgfSxcblxuICAgIC8vYXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVGFzayk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jb21wbGV0ZVRhc2spO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMuZGVsZXRlVGFzayk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcy5lZGl0VGFzayk7XG4gICAgfSxcblxuICAgIGdldCBlbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGVFbGVtZW50OiB0aGlzLnRpdGxlRWxlbWVudCwgYWRkVGFza0J1dHRvbjogdGhpcy5hZGRUYXNrQnV0dG9uIH07XG4gICAgfSxcbn07XG5cbi8vY3JlYXRlcyB0aGUgdGFzayBjcmVhdGlvbiBmb3JtXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrKGFkZFRhc2tCdXR0b24sIGZvcm1Db250YWluZXIpIHtcbiAgICBhZGRUYXNrQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHsgZm9ybSwgZm9ybUxlZnQsIGZvcm1SaWdodCwgZm9ybUJvdHRvbSB9ID0gdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybUxheW91dChmb3JtQ29udGFpbmVyKTtcbiAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy9jYWxsIGZvcm0gZnVuY3Rpb25zIHRvIGZpbGwgaW4gdGhlIGZvcm0uLi5cbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtVGl0bGUoZm9ybUxlZnQpO1xuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1EZXNjcmlwdGlvbihmb3JtTGVmdCk7XG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybURhdGUoZm9ybVJpZ2h0KTtcbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtUHJpb3JpdHlTZWxlY3Rvcihmb3JtUmlnaHQpO1xuICAgIGNvbnN0IHsgc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24gfSA9IHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1CdXR0b25zKGZvcm1Cb3R0b20pO1xuXG4gICAgLy9hdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIGNyZWF0ZWQgc3VibWl0L2NhbmNlbCBidXR0b25zXG4gICAgZm9ybUFjdGlvbnNPYmplY3QuYXR0YWNoU3VibWl0TGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pO1xuICAgIGZvcm1BY3Rpb25zT2JqZWN0LmF0dGFjaENhbmNlbExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBmb3JtQ29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHRhc2tzLCBjcmVhdGVUYXNrLCBnZXRUYXNrcyB9IGZyb20gXCIuL3RvZG8tZmFjdG9yeVwiO1xuaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi9hbGxUYXNrc1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlT2JqZWN0IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tIFwiLi90YXNrLWZvcm0tYWN0aW9uc1wiO1xuaW1wb3J0IHsgc29ydFRhc2tzQnlEYXRlIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrc09iamVjdCA9IHtcblxuICAgIC8vdG9nZ2xlcyB0YXNrIGJldHdlZW4gY29tcGxldGUgYW5kIGluY29tcGxldGVcbiAgICBoYW5kbGVDb21wbGV0ZVRhc2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stY29tcGxldGUtYnV0dG9uJyk7XG5cbiAgICAgICAgaWYgKHRhc2tDb21wbGV0ZSkgeyAvL2NhbiBnZXQgdGhlc2UgZnJvbSBnZXRFbGVtZW50cygpXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lcklEID0gcGFyc2VJbnQodGFza0NvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudExlZnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stZWxlbWVudC1sZWZ0Jyk7XG4gICAgICAgICAgICBjb25zdCBkb21UaXRsZSA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICAgICAgY29uc3QgZG9tRGVzY3JpcHRpb24gPSB0YXNrRWxlbWVudExlZnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKTtcblxuICAgICAgICAgICAgY29uc3QgZm91bmRUYXNrID0gdGFza3MuZmluZCh0YXNrID0+IHRhc2sudGFza0lEID09IHRhc2tDb250YWluZXJJRCk7XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFRhc2suc3RhdHVzID09PSAnaW5jb21wbGV0ZScpIHJldHVybiBlZGl0VGFza3NPYmplY3QuaXNDb21wbGV0ZShmb3VuZFRhc2ssIHRhc2tDb250YWluZXIsIGV2ZW50LCBkb21UaXRsZSwgZG9tRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKGZvdW5kVGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHJldHVybiBlZGl0VGFza3NPYmplY3QuaXNJbmNvbXBsZXRlKGZvdW5kVGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9kZWxldGVzIG9iamVjdCBpbiB0YXNrIGFycmF5IGFuZCByZW1vdmVzIGRvbSBkaXNwbGF5IGVsZW1lbnRcbiAgICBoYW5kbGVEZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kZWxldGUnKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcblxuICAgICAgICBpZiAodGFza0RlbGV0ZSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lcklEID0gcGFyc2VJbnQodGFza0NvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLnRhc2tJRCA9PT0gdGFza0NvbnRhaW5lcklEKTtcblxuICAgICAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgICAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9jaGFuZ2VzIHN0YXR1cyArIGRvbSB0byBjb21wbGV0ZVxuICAgIGlzQ29tcGxldGUodGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbikge1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IHN0YXR1c1xuICAgICAgICB0YXNrLnN0YXR1cyA9ICdjb21wbGV0ZSc7XG5cbiAgICAgICAgLy9jc3MgdG8gZGlzcGxheSBjb21wbGV0ZWQgc3RhdHVzXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1jaGVja2VkJyk7XG4gICAgICAgIGRvbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICAgICAgZG9tRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuXG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICB9LFxuXG4gICAgLy9jaGFuZ2VzIHN0YXR1cyArIGRvbSB0byBpbmNvbXBsZXRlXG4gICAgaXNJbmNvbXBsZXRlKHRhc2ssIHRhc2tDb250YWluZXIsIGV2ZW50LCBkb21UaXRsZSwgZG9tRGVzY3JpcHRpb24pIHtcblxuICAgICAgICAvL3VwZGF0ZSB0YXNrIG9iamVjdCBzdGF0dXNcbiAgICAgICAgdGFzay5zdGF0dXMgPSAnaW5jb21wbGV0ZSc7XG5cbiAgICAgICAgLy9jc3MgdG8gZGlzcGxheSBjb21wbGV0ZWQgc3RhdHVzXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC1jaGVja2VkJyk7XG4gICAgICAgIGRvbVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICAgICAgZG9tRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuXG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICB9LFxuXG4gICAgcmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgaWYgKCF0YXNrQ29udGFpbmVyKSByZXR1cm4gbnVsbDtcbiAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudExlZnQgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVsZW1lbnQtbGVmdCcpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrRWxlbWVudExlZnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFza0VsZW1lbnRMZWZ0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnRSaWdodCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhc2stZWxlbWVudC1yaWdodCcpO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tFbGVtZW50UmlnaHQucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza0VsZW1lbnRSaWdodC5xdWVyeVNlbGVjdG9yKCcudGFzay1wcmlvcml0eScpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRJbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGVkaXRJbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG4gICAgICBcbiAgICAgICAgY29uc3QgdGFza0lETnVtYmVyID0gcGFyc2VJbnQodGFza0NvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLnRhc2tJRCA9PT0gdGFza0lETnVtYmVyKTtcbiAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdCxcbiAgICAgICAgICAgIHRhc2tUaXRsZSxcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRhc2tFbGVtZW50UmlnaHQsXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSxcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveCxcbiAgICAgICAgICAgIHRhc2tJRE51bWJlcixcbiAgICAgICAgICAgIHRhc2tcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8vaGFuZGxlcyBuZXcgZWRpdGVkIHRpdGxlIHN1Ym1pc3Npb25cbiAgICBzdWJtaXRUaXRsZShldmVudCwgdGFza1RpdGxlLCBlZGl0SW5wdXRCb3gpIHtcblxuICAgICAgICBjb25zdCB7IHRhc2tFbGVtZW50TGVmdCwgdGFzayB9ID0gZWRpdFRhc2tzT2JqZWN0LnJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vcmVtb3ZlIGlucHV0IGJveCBhbmQgcmVzdG9yZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQodGFza1RpdGxlLCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IHRpdGxlXG4gICAgICAgIHRhc2sudGl0bGUgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgLy91cGRhdGUgRE9NIGRpc3BsYXlcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICBcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2hhbmRsZXMgbmV3IGVkaXRlZCBkZXNjcmlwdGlvbiBzdWJtaXNzaW9uXG4gICAgc3VibWl0RGVzY3JpcHRpb24oZXZlbnQsIHRhc2tEZXNjcmlwdGlvbiwgZWRpdElucHV0Qm94KSB7XG5cbiAgICAgICAgY29uc3QgeyB0YXNrRWxlbWVudExlZnQsIHRhc2sgfSA9IGVkaXRUYXNrc09iamVjdC5yZXRyaWV2ZVRhc2tFbGVtZW50cyhldmVudCk7XG4gICAgICAgIFxuICAgICAgICAvL3JlbW92ZSBpbnB1dCBib3ggYW5kIHJlc3RvcmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKHRhc2tEZXNjcmlwdGlvbiwgZWRpdElucHV0Qm94KTtcblxuICAgICAgICAvL3VwZGF0ZSB0YXNrIG9iamVjdCBkZXNjcmlwdGlvblxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZWRpdElucHV0Qm94LnZhbHVlO1xuXG4gICAgICAgIC8vdXBkYXRlIERPTSBkaXNwbGF5XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgXG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICB9LFxuXG4gICAgLy9oYW5kbGVzIG5ldyBlZGl0ZWQgZGVzY3JpcHRpb24gc3VibWlzc2lvblxuICAgIHN1Ym1pdER1ZURhdGUoZXZlbnQsIHRhc2tEdWVEYXRlLCBlZGl0SW5wdXRCb3gpIHtcblxuICAgICAgICBjb25zdCB7IHRhc2tFbGVtZW50UmlnaHQsIHRhc2ssIHRhc2tDb250YWluZXIgfSA9IGVkaXRUYXNrc09iamVjdC5yZXRyaWV2ZVRhc2tFbGVtZW50cyhldmVudCk7XG4gICAgICAgIFxuICAgICAgICAvL3JlbW92ZSBpbnB1dCBib3ggYW5kIHJlc3RvcmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LnJlcGxhY2VDaGlsZCh0YXNrRHVlRGF0ZSwgZWRpdElucHV0Qm94KTtcblxuICAgICAgICAvL3VwZGF0ZSB0YXNrIG9iamVjdCBkZXNjcmlwdGlvblxuICAgICAgICB0YXNrLmR1ZURhdGUgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgLy91cGRhdGUgRE9NIGRpc3BsYXlcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICAgICAgLy9hdXRvIHNvcnQgbGlzdCBieSBkdWUgZGF0ZVxuICAgICAgICBjb25zdCBzb3J0ZWRUYXNrcyA9IHNvcnRUYXNrc0J5RGF0ZShbLi4udGFza3NdKTtcbiAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3Qoc29ydGVkVGFza3MpO1xuICAgIFxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIC8vY3ljbGUgYmV0d2VlbiBsb3ctbWlkLWhpZ2ggcHJpb3JpdHlcbiAgICBjaGFuZ2VQcmlvcml0eSh0YXNrLCBldmVudCwgdGFza1ByaW9yaXR5LCB0YXNrQ29udGFpbmVyKSB7XG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXByaW9yaXR5LWxvdycpOlxuXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stcHJpb3JpdHktbG93Jyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1taWQnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbWVkaXVtJztcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgY2FzZSB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXByaW9yaXR5LW1pZCcpOlxuXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stcHJpb3JpdHktbWlkJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnaGlnaCc7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgIGNhc2UgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygndGFzay1wcmlvcml0eS1oaWdoJyk6XG5cbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1wcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbG93Jyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2xvdyc7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgICBcbiAgICBoYW5kbGVUYXNrRWRpdChldmVudCkge1xuICAgICAgICBjb25zdCB7IFxuICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LCBcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveCwgXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLCBcbiAgICAgICAgICAgIHRhc2tUaXRsZSxcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRhc2tFbGVtZW50UmlnaHQsXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSxcbiAgICAgICAgICAgIHRhc2tcbiAgICAgICAgfSA9IGVkaXRUYXNrc09iamVjdC5yZXRyaWV2ZVRhc2tFbGVtZW50cyhldmVudCk7XG5cbiAgICAgICAgaWYgKCF0YXNrQ29udGFpbmVyIHx8ICF0YXNrRWxlbWVudExlZnQgfHwgIXRhc2tFbGVtZW50UmlnaHQpIHJldHVybiBudWxsO1xuICAgICAgXG4gICAgICAgIC8vZWRpdCB0YXNrIHRpdGxlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXRpdGxlJykpIHtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrVGl0bGUpO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRhc2tzT2JqZWN0LnN1Ym1pdFRpdGxlKGV2ZW50LCB0YXNrVGl0bGUsIGVkaXRJbnB1dEJveCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2VkaXQgdGFzayBkZXNjcmlwdGlvblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kZXNjcmlwdGlvbicpKSB7XG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKGVkaXRJbnB1dEJveCwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5mb2N1cygpO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBlZGl0SW5wdXRCb3gudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGVkaXRUYXNrc09iamVjdC5zdWJtaXREZXNjcmlwdGlvbihldmVudCwgdGFza0Rlc2NyaXB0aW9uLCBlZGl0SW5wdXRCb3gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9lZGl0IHRhc2sgZHVlIGRhdGVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZHVlLWRhdGUnKSkge1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LnJlcGxhY2VDaGlsZChlZGl0SW5wdXRCb3gsIHRhc2tEdWVEYXRlKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5mb2N1cygpO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRUYXNrc09iamVjdC5zdWJtaXREdWVEYXRlKGV2ZW50LCB0YXNrRHVlRGF0ZSwgZWRpdElucHV0Qm94KTtcblxuICAgICAgICAgICAgICAgIC8vc2hvdyBuZXcgbG9jYXRpb24gaW4gdGhlIHRhc2sgbGlzdCBhZnRlciBzb3J0ICoqIGRvZXNuJ3Qgd29ya1xuICAgICAgICAgICAgICAgIC8vIGlmICh0YXNrQ29udGFpbmVyKSB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZ2xvdycpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1nbG93Jyk7XG4gICAgICAgICAgICAgICAgLy8gfSwgNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZWRpdCB0YXNrIHByaW9yaXR5XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXByaW9yaXR5JykpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrc09iamVjdC5jaGFuZ2VQcmlvcml0eSh0YXNrLCBldmVudCwgdGFza1ByaW9yaXR5LCB0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIsIGNyZWF0ZUFsbFF1ZXN0c1BhZ2UgfSBmcm9tICcuL2FsbFRhc2tzLmpzJztcbmltcG9ydCB7IHRhc2tzLCB0YXNrQ291bnRlck9iamVjdCwgcHJvamVjdHMsIHByb2plY3RDb3VudGVyT2JqZWN0IH0gZnJvbSAnLi90b2RvLWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlT2JqZWN0IH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmpzJztcbmltcG9ydCB7IGZvcm1BY3Rpb25zT2JqZWN0IH0gZnJvbSAnLi90YXNrLWZvcm0tYWN0aW9ucy5qcyc7XG5pbXBvcnQgeyB3ZWVrc1F1ZXN0T2JqZWN0IH0gZnJvbSAnLi90aGlzV2Vlay5qcyc7XG5pbXBvcnQgeyBkYXlzUXVlc3RPYmplY3QgfSBmcm9tICcuL3RvZGF5LmpzJztcblxuY29uc3Qgc2lkZUJhck1lbnVJdGVtcyA9IHtcbiAgICBzaWRlQmFyTWVudTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdGFza3MnKSxcbiAgICBhbGxRdWVzdHNUYWI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcXVlc3RzJyksXG4gICAgZGF5c1F1ZXN0VGFiOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5cy1xdWVzdHMnKSxcbiAgICB3ZWVrc1F1ZXN0VGFiOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vla3MtcXVlc3RzJyksXG4gICAgcHJvamVjdFRhc2tzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YXNrcycpLFxuICAgIHByb2plY3RzVGFza3NMaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YXNrcy1saXN0JyksXG4gICAgYWRkUXVlc3RsaW5lVGFiOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXF1ZXN0bGluZScpLFxuXG4gICAgYWRkQ2xhc3MoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICB9LFxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIC8vbG9hZCBhbGwgdGFza3MgcGFnZSBmaXJzdFxuICAgIGFsbFF1ZXN0c1BhZ2UoKTtcblxuICAgIC8vc2hvdyBzZWxlY3RlZCBtZW51IHRhYlxuICAgIHNpZGVCYXJNZW51SXRlbXMuYWxsUXVlc3RzVGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICBcbiAgICAvL2luaXRpYWxpemUgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgIGNyZWF0ZUFsbFF1ZXN0c1BhZ2UuaW5pdCgpO1xufSk7XG5cbnNpZGVCYXJNZW51SXRlbXMuc2lkZUJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWxsLXF1ZXN0cycpKSB7XG4gICAgICAgIGFsbFF1ZXN0c1BhZ2UoKTtcblxuICAgICAgICAvL3Nob3cgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRDbGFzcyhldmVudCk7XG5cbiAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5kYXlzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLndlZWtzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGF5cy1xdWVzdHMnKSkge1xuICAgICAgICBkYXlzUXVlc3RPYmplY3QuZGF5c1F1ZXN0UGFnZSgpO1xuXG4gICAgICAgIC8vc2hvdyBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZENsYXNzKGV2ZW50KTtcblxuICAgICAgICAvL3JlbW92ZSBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFsbFF1ZXN0c1RhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMud2Vla3NRdWVzdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3ZWVrcy1xdWVzdHMnKSkge1xuICAgICAgICB3ZWVrc1F1ZXN0T2JqZWN0LndlZWtzUXVlc3RQYWdlKCk7XG5cbiAgICAgICAgLy9zaG93IHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWRkQ2xhc3MoZXZlbnQpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWxsUXVlc3RzVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5kYXlzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBhbGxRdWVzdHNQYWdlKCkge1xuICAgIC8vY2xlYXIgdGhlIHBhZ2VcbiAgICBib2R5Q29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vaW1wb3J0IHRhc2sgcGFnZSBlbGVtZW50c1xuICAgIGNvbnN0IHsgdGl0bGVFbGVtZW50LCBhZGRUYXNrQnV0dG9uIH0gPSBjcmVhdGVBbGxRdWVzdHNQYWdlLmVsZW1lbnRzO1xuXG4gICAgLy9hcHBlbmQgdG9vbHMgdG8gcGFnZVxuICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBjb25zdCByZXRyaWV2ZWRUYXNrcyA9IGxvY2FsU3RvcmFnZU9iamVjdC5nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHRhc2tzLmxlbmd0aCA9IDA7XG4gICAgdGFza3MucHVzaCguLi5yZXRyaWV2ZWRUYXNrcyk7XG5cbiAgICBjb25zdCByZXRyaWV2ZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZU9iamVjdC5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHByb2plY3RzLmxlbmd0aCA9IDA7XG4gICAgcHJvamVjdHMucHVzaCguLi5yZXRyaWV2ZWRQcm9qZWN0cyk7XG5cbiAgICAvL3ByZXZlbnQgdGFzayBjb3VudGVyIGZyb20gc3RhcnRpbmcgd2l0aCB3cm9uZyBpZCBudW1iZXIgb24gcGFnZSByZWxvYWRcbiAgICBpZiAodGFza3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxldCBwcmV2aW91c1Rhc2tJZCA9IHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLnRhc2tJRDtcbiAgICAgICAgdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIgPSBwcmV2aW91c1Rhc2tJZCArIDE7XG4gICAgfVxuXG4gICAgLy9zb3J0IHRhc2tzIGluIG9yZGVyIG9uIHBhZ2UgbG9hZFxuICAgIHNvcnRUYXNrc0J5RGF0ZSh0YXNrcyk7XG5cbiAgICAvL3JlbmRlciBzYXZlZCBwcm9qZWN0cyBvbiBwYWdlIGxvYWRcbiAgICByZW5kZXJQcm9qZWN0c0xpc3QocHJvamVjdHMpO1xuXG4gICAgZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3QodGFza3MpO1xuXG4gICAgcmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhc2tzQnlEYXRlKHRhc2tzKSB7XG4gICAgcmV0dXJuICB0YXNrcy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKSk7XG59XG5cblxuXG5cblxuXG5cbnNpZGVCYXJNZW51SXRlbXMucHJvamVjdFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1xdWVzdGxpbmUnKSkge1xuICAgICAgICAvL3RvIG9ubHkgYWRkIG9uZSBwcm9qZWN0IGF0IGEgdGltZVxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZFF1ZXN0bGluZVRhYi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZWRpdElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZWRpdElucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5wcm9qZWN0c1Rhc2tzTGlzdC5hcHBlbmRDaGlsZChlZGl0SW5wdXRCb3gpO1xuICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcblxuICAgICAgICBlZGl0SW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZWRpdElucHV0Qm94LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vcHVzaCB0byBwcm9qZWN0cyBhcnJheVxuICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgICAgIC8vY3JlYXRlcyBwcm9qZWN0IGRvbSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChlZGl0SW5wdXRCb3gsIHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgICAgICAgICAvL3JlLWVzdGFibGlzaCBhZGQgYnV0dG9uXG4gICAgICAgICAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG4vL2RlbGV0ZSBwcm9qZWN0IG9uIGRvdWJsZSBjbGlja1xuc2lkZUJhck1lbnVJdGVtcy5wcm9qZWN0VGFza3MuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1kZWxldGUnKSkge1xuICAgICAgICBkZWxldGVQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG59KTsgXG5cbi8vY2xpY2sgY3JlYXRlZCBwcm9qZWN0IC0gcG9wdWxhdGUgc2NyZWVuIHdpdGggcHJvamVjdCdzIHRhc2tzXG5zaWRlQmFyTWVudUl0ZW1zLnByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctcHJvamVjdCcpKSB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgICAgIC8vY2xlYXIgdGhlIHBhZ2VcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgLy9pbXBvcnQgdGFzayBwYWdlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHsgdGl0bGVFbGVtZW50LCBhZGRUYXNrQnV0dG9uIH0gPSBjcmVhdGVBbGxRdWVzdHNQYWdlLmVsZW1lbnRzO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvb2xzIHRvIHBhZ2VcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0VGl0bGV9YDtcblxuICAgICAgICAvL2ZpbHRlciB0YXNrcyBhcnJheSBieSBwcm9qZWN0IG5hbWVcbiAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdE5hbWUgPT09IHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVuZGVyVGFza3MocHJvamVjdFRhc2tzLCBib2R5Q29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgfVxufSk7XG5cbi8vbmV3IHByb2plY3QgY3JlYXRpb24gdG8gZG9tXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KGVkaXRJbnB1dEJveCwgcHJvamVjdFRpdGxlKSB7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgIHNpZGVCYXJNZW51SXRlbXMucHJvamVjdHNUYXNrc0xpc3QucmVwbGFjZUNoaWxkKG5ld1Byb2plY3QsIGVkaXRJbnB1dEJveCk7XG5cbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0Jyk7XG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcsIHByb2plY3RDb3VudGVyT2JqZWN0LnByb2plY3RJRCk7XG5cbiAgICBwcm9qZWN0Q291bnRlck9iamVjdC5wcm9qZWN0SUQrKztcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlJyk7XG5cbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIFxuICAgIHNpZGVCYXJNZW51SXRlbXMucHJvamVjdHNUYXNrc0xpc3QuYXBwZW5kQ2hpbGQoc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIpO1xuXG4gICAgcmV0dXJuIHsgbmV3UHJvamVjdCwgZGVsZXRlUHJvamVjdEJ1dHRvbiB9O1xufVxuXG4vL3JlbmRlciBzYXZlZCBwcm9qZWN0cyBvbiBwYWdlIGxvYWRcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzTGlzdChwcm9qZWN0cykge1xuXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFza3MtbGlzdCcpO1xuXG4gICAgLy9jbGVhciB0byBwcmV2ZW50IHN0YWNraW5nXG4gICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdDtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcblxuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0Jyk7XG4gICAgICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBwcm9qZWN0Q291bnRlck9iamVjdC5wcm9qZWN0SUQpO1xuICAgIFxuICAgICAgICBwcm9qZWN0Q291bnRlck9iamVjdC5wcm9qZWN0SUQrKztcbiAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlJyk7XG4gICAgXG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChzaWRlQmFyTWVudUl0ZW1zLmFkZFF1ZXN0bGluZVRhYik7XG59XG5cbi8vcmVtb3ZlcyBwcm9qZWN0IGZyb20gb2JqZWN0IGFuZCBkb20gZWxlbWVudFxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChldmVudCkge1xuICAgIGNvbnN0IHByb2plY3RUYXNrc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YXNrcy1saXN0Jyk7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5uZXctcHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZVRleHQgPSBwcm9qZWN0VG9EZWxldGUudGV4dENvbnRlbnQ7IFxuICAgIC8vIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RUb0RlbGV0ZS5kYXRhc2V0LnByb2plY3RJZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldID09IHByb2plY3RUb0RlbGV0ZVRleHQpIHtcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3RUYXNrc0xpc3QucmVtb3ZlQ2hpbGQocHJvamVjdFRvRGVsZXRlKTtcbiAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMpO1xufSIsImV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2VPYmplY3QgPSB7XG5cbiAgICAvL3NhdmUgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzSlNPTiA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgdGFza3NKU09OKTtcbiAgICB9LFxuXG4gICAgLy9zYXZlIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0cykge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0pTT04gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHByb2plY3RzSlNPTik7XG4gICAgfSxcblxuICAgIC8vcmV0cmlldmUgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGFza3NKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJyk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0YXNrc0pTT04pIHx8IFtdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmV0cmlldmluZyB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2U6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vcmV0cmlldmUgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShwcm9qZWN0c0pTT04pIHx8IFtdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmV0cmlldmluZyBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2U6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfSxcbn0iLCIvL29iamVjdCB0byBzdG9yZSBiYXNlIGl0ZW1zIG9uIHRoZSBwYWdlICh0aXRsZSwgZmlyc3QgYnV0dG9uIGV0YylcbmV4cG9ydCBjb25zdCBwYWdlRWxlbWVudHNPYmplY3QgPSB7XG5cbiAgICBjcmVhdGVQYWdlVGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSAnQWxsIFF1ZXN0cyc7XG4gICAgICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib2R5LXRpdGxlJyk7XG4gICAgICAgIHJldHVybiB0aXRsZUVsZW1lbnQ7XG4gICAgfSxcblxuICAgIGNyZWF0ZUFkZFRhc2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10YXNrLWJ1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ3wrfCBBZGQgUXVlc3QnO1xuICAgICAgICByZXR1cm4gYWRkVGFza0J1dHRvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybUNvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xuICAgIH1cbn0iLCJpbXBvcnQgeyB0YXNrcywgY3JlYXRlVGFzaywgZ2V0VGFza3MgfSBmcm9tIFwiLi90b2RvLWZhY3RvcnlcIjtcbmltcG9ydCB7IHBhZ2VFbGVtZW50c09iamVjdCB9IGZyb20gXCIuL3BhZ2UtZWxlbWVudHNcIjtcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU9iamVjdCB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IHNvcnRUYXNrc0J5RGF0ZSB9IGZyb20gXCIuXCI7XG5cbi8vb2JqZWN0IHRvIHN0b3JlIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRhc2sgY3JlYXRpb24gLyBmb3JtIHN1Ym1pc3Npb25cbmV4cG9ydCBjb25zdCBmb3JtQWN0aW9uc09iamVjdCA9IHtcbiAgICBcbiAgICBhdHRhY2hTdWJtaXRMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbikge1xuXG4gICAgICAgIGNvbnN0IGJvZHlDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS10aXRsZScpO1xuXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLnRyaW0oKTtcblxuICAgICAgICAgICAgaWYgKCF0aXRsZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQgKCdQbGVhc2UgZmlsbCBpbiB0aGUgdGl0bGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LmFkZFRhc2soKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbW92ZUZvcm0oZm9ybUNvbnRhaW5lcik7XG5cblxuXG5cblxuXG4gICAgICAgICAgICBpZiAodGl0bGUudGV4dENvbnRlbnQgIT09ICdBbGwgUXVlc3RzJykge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3ROYW1lID09PSB0aXRsZSk7XG4gICAgICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVuZGVyVGFza3MocHJvamVjdFRhc2tzLCBib2R5Q29udGVudENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkVGFza3MgPSBzb3J0VGFza3NCeURhdGUoWy4uLnByb2plY3RUYXNrc10pO1xuICAgICAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHNvcnRlZFRhc2tzKTtcbiAgICAgICAgICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3QodGFza3MpO1xuXG4gICAgICAgICAgICAgICAgLy9hdXRvIHNvcnQgaW50byBsaXN0IGFmdGVyIGNyZWF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkVGFza3MgPSBzb3J0VGFza3NCeURhdGUoWy4uLnRhc2tzXSk7XG4gICAgICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3Qoc29ydGVkVGFza3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG5cblxuXG5cblxuXG5cbiAgICBhdHRhY2hDYW5jZWxMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbikge1xuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVtb3ZlRm9ybShmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGVUYXNrTGlzdCh0YXNrcykge1xuXG4gICAgICAgIGNvbnN0IGJvZHlDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LXRpdGxlJykudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgLy9wcmV2ZW50IGR1cGxpY2F0ZSB0YXNrc1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAvL3JlLWFkZCB0aXRsZSB0byBwYWdlXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAgICAgICAvL3JlbmRlciB0YXNrcyBmcm9tIGFycmF5IHRvIGRvbVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW5kZXJUYXNrcyh0YXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgICAgIC8vcHV0IGFkZCBidXR0b24gdG8gYm90dG9tIG9mIHRoZSBsaXN0XG4gICAgICAgIGlmKGFkZFRhc2tCdXR0b24pIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIH0sXG5cbiAgICAvL2l0ZXJhdGVzIHRob3VnaCB0aGUgdGFza3MgYXJyYXkgdG8gZGlzcGxheSB0byB0aGUgZG9tXG4gICAgcmVuZGVyVGFza3ModGFza3MsIGJvZHlDb250ZW50Q29udGFpbmVyKSB7IFxuXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIC8vZWFjaCBzaWRlIG9mIHRoZSB0YXNrIGl0ZW1cbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvL3Rhc2tFbGVtZW50TGVmdCBpdGVtcyAtIGNvbXBsZXRlIGJ1dHRvbiwgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1jb21wbGV0ZS1idXR0b24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1jb21wbGV0ZS1idXR0b24nKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9YDtcblxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7dGFzay5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgIGlmICh0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPT0gJycpIHtcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICcoZW1wdHkpJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGFza0VsZW1lbnRSaWdodCAtIGR1ZSBkYXRlLCBwcmlvcml0eSwgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICAgICAgICBpZiAodGFzay5kdWVEYXRlID09ICcnKSB0YXNrLmR1ZURhdGUgPSAnKG5vIGR1ZSBkYXRlKSc7XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gYCR7dGFzay5kdWVEYXRlfWA7XG5cbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3Rhc2sucHJpb3JpdHl9YDtcblxuICAgICAgICAvL3VwZGF0ZSBjc3MgYmFzZWQgb24gcHJpb3JpdHkgdmFsdWVcbiAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QuZGlzcGxheVByaW9yaXR5KHRhc2ssIHRhc2tDb250YWluZXIsIHRhc2tQcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlJyk7XG4gICAgICAgIC8vIHRhc2tEZWxldGUudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcblxuICAgICAgICAvL2FwcGVuZCBlbGVtZW50cyB0byBwYWdlXG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVCdXR0b24pO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7ICAgIFxuXG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudExlZnQpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50UmlnaHQpO1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB0YXNrLnRhc2tJRCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWxlbWVudC1sZWZ0Jyk7XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQuY2xhc3NMaXN0LmFkZCgndGFzay1lbGVtZW50LXJpZ2h0Jyk7XG5cbiAgICAgICAgLy9kaXNwbGF5IHRhc2sgY29tcGxldGlvbiBvbiBwYWdlLWxvYWRcbiAgICAgICAgaWYgKHRhc2suc3RhdHVzID09ICdjb21wbGV0ZScpIHJldHVybiBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVEaXNwbGF5Q29tcGxldGUodGFza0NvbnRhaW5lciwgdGFza0NvbXBsZXRlQnV0dG9uLCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIGlmICh0YXNrLnN0YXR1cyA9PSAnaW5jb21wbGV0ZScpIHJldHVybiBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVEaXNwbGF5SW5jb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgfSk7ICAgIFxuICAgIH0sXG5cbiAgICAvL21hZGUgYmMgZWRpdFRhc2tzIGZ1bmN0aW9ucyB3ZXJlIGluY29tcGF0aWJsZVxuICAgIHVwZGF0ZURpc3BsYXlDb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1jaGVja2VkJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgfSxcblxuICAgIC8vbWFkZSBiYyBlZGl0VGFza3MgZnVuY3Rpb25zIHdlcmUgaW5jb21wYXRpYmxlXG4gICAgdXBkYXRlRGlzcGxheUluY29tcGxldGUodGFza0NvbnRhaW5lciwgdGFza0NvbXBsZXRlQnV0dG9uLCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbikge1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtY2hlY2tlZCcpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuICAgIH0sXG4gICAgXG4gICAgcmVtb3ZlRm9ybShmb3JtQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGJvZHlDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGVudC1jb250YWluZXInKTtcblxuICAgICAgICBpZiAoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKSBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIGlmIChib2R5Q29udGVudENvbnRhaW5lci5jb250YWlucyhmb3JtQ29udGFpbmVyKSkgYm9keUNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSxcblxuICAgIC8vY2FsbGVkIGJ5IHN1Ym1pdCBidXR0b24gdG8gcHV0IHRhc2sgb250byBwYWdlXG4gICAgYWRkVGFzaygpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LXNlbGVjdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0TmFtZSk7XG4gICAgXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1Rhc2s7XG4gICAgfSxcblxuICAgIC8vY3NzIHRvIHRhc2sgY29udGFpbmVyIGFuZCBwcmlvcml0eSBidXR0b24gYmFzZWQgb24gcHJpb3JpdHkgdmFsdWVcbiAgICBkaXNwbGF5UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lciwgdGFza1ByaW9yaXR5KSB7XG5cbiAgICAgICAgLy9wcmV2ZW50IHN0YWNraW5nIG11bHRpcGxlIGNsYXNzZXNcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHknKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LW1pZCcpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLy9vYmplY3QgdG8gc3RvcmUgZnVuY3Rpb25zIHRoYXQgY3JlYXRlIGZvcm0gdG8gZ2VuZXJhdGUgaW5kaXZpZHVhbCB0YXNrc1xuZXhwb3J0IGNvbnN0IHRhc2tGb3JtT2JqZWN0ID0ge1xuXG4gICAgY3JlYXRlRm9ybUxheW91dChmb3JtQ29udGFpbmVyKSB7XG5cbiAgICAgICAgLy9jcmVhdGUgZm9ybSBvYmplY3RzXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IGZvcm1MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgLy9hcHBlbmQgZWxlbWVudHMgdG8gZm9ybVxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1MZWZ0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUmlnaHQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Cb3R0b20pO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzZXNcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gICAgICAgIGZvcm1MZWZ0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGVmdCcpO1xuICAgICAgICBmb3JtUmlnaHQuY2xhc3NMaXN0LmFkZCgnZm9ybS1yaWdodCcpO1xuICAgICAgICBmb3JtQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYm90dG9tJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZm9ybSwgZm9ybUxlZnQsIGZvcm1SaWdodCwgZm9ybUJvdHRvbSB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtVGl0bGUoZm9ybUxlZnQpIHtcblxuICAgICAgICAvL2NyZWF0ZSB0aXRsZSBlbGVtZW50c1xuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgICAgICAvL3ByZXZlbnQgcGFnZSByZWZyZXNoXG4gICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gbGVmdCBzaWRlXG4gICAgICAgIGZvcm1MZWZ0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgICAgICBcbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgdGl0bGVMYWJlbCwgdGl0bGVJbnB1dCB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtRGVzY3JpcHRpb24oZm9ybUxlZnQpIHtcblxuICAgICAgICAvL2NyZWF0ZSBkZXNjcmlwdGlvbiBlbGVtZW50c1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uIChvcHRpb25hbCknKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gMjtcblxuICAgICAgICAvL2FwcGVuZCB0byBsZWZ0IHNpZGUgXG4gICAgICAgIGZvcm1MZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgICAgICAvL2FkZCBjbGFzc1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZGVzY3JpcHRpb24nKTtcblxuICAgICAgICByZXR1cm4geyBkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0IH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1EYXRlKGZvcm1SaWdodCkge1xuXG4gICAgICAgIC8vY3JlYXRlIGRhdGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gcmlnaHQgc2lkZVxuICAgICAgICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZGF0ZScpO1xuXG4gICAgICAgIHJldHVybiB7IGRhdGVMYWJlbCwgZGF0ZUlucHV0IH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1Qcmlvcml0eVNlbGVjdG9yKGZvcm1SaWdodCkge1xuXG4gICAgICAgIC8vY3JlYXRlIHByaW9yaXR5IHNlbGVjdGlvbiBkcm9wYm94IGFuZCBvcHRpb25zXG4gICAgICAgIGNvbnN0IHNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktc2VsZWN0aW9uJyk7XG4gICAgICAgIC8vIHNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgY29uc3Qgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1zZWxlY3Rpb24nKTtcbiAgICAgICAgLy8gY29uc3QgcGxhY2Vob2xkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgLy8gcGxhY2Vob2xkZXJPcHRpb24udGV4dCA9ICdQcmlvcml0eSc7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gcGxhY2Vob2xkZXJPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjEudmFsdWUgPSAnbG93JztcbiAgICAgICAgb3B0aW9uMS50ZXh0ID0gJ0xvdyAoUHJpb3JpdHkpJztcbiAgICAgICAgb3B0aW9uMS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi52YWx1ZSA9ICdtZWRpdW0nO1xuICAgICAgICBvcHRpb24yLnRleHQgPSAnTWVkaXVtJztcbiAgICAgICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24zLnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICBvcHRpb24zLnRleHQgPSAnSGlnaCc7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gcmlnaHQgc2lkZVxuICAgICAgICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoc2VsZWN0TGFiZWwpO1xuICAgICAgICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXQpO1xuICAgICAgICAvLyBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlck9wdGlvbik7XG4gICAgICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgc2VsZWN0SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKTtcblxuICAgICAgICByZXR1cm4geyBzZWxlY3RMYWJlbCwgc2VsZWN0SW5wdXQsIG9wdGlvbjEsIG9wdGlvbjIsIG9wdGlvbjMgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybUJ1dHRvbnMoZm9ybUJvdHRvbSkge1xuXG4gICAgICAgIC8vY3JlYXRlIGJ1dHRvbiBlbGVtZW50c1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgICAgICAvL2FwcGVuZCB0byBib3R0b21cbiAgICAgICAgZm9ybUJvdHRvbS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG4gICAgICAgIGZvcm1Cb3R0b20uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsLWJ1dHRvbicpXG5cbiAgICAgICAgLy9hZGQgY2xhc3Nlc1xuICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7ICAgIFxuXG4gICAgICAgIHJldHVybiB7IHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uIH07XG4gICAgfVxufSIsImltcG9ydCB7IGJvZHlDb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi9hbGxUYXNrcy5qcyc7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdG9kby1mYWN0b3J5LmpzJztcbmltcG9ydCB7IGZvcm1BY3Rpb25zT2JqZWN0IH0gZnJvbSAnLi90YXNrLWZvcm0tYWN0aW9ucy5qcyc7XG5pbXBvcnQgeyBwYWdlRWxlbWVudHNPYmplY3QgfSBmcm9tICcuL3BhZ2UtZWxlbWVudHMuanMnO1xuaW1wb3J0IHsgZGF5c1F1ZXN0T2JqZWN0IH0gZnJvbSAnLi90b2RheS5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IHdlZWtzUXVlc3RPYmplY3QgPSB7XG4gICAgXG4gICAgd2Vla3NRdWVzdFBhZ2UoKSB7XG4gICAgICAgIC8vY2xlYXIgdGhlIHBhZ2VcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgLy9pbXBvcnQgZWxlbWVudHNcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZVBhZ2VUaXRsZSgpO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvb2xzIHRvIHBhZ2VcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vZ2V0IHdlZWtzJ3MgZGF0ZVxuICAgICAgICBjb25zdCB7IHN0YXJ0T2ZXZWVrLCBlbmRPZldlZWsgfSA9IHdlZWtzUXVlc3RPYmplY3QuZ2V0V2Vla1JhbmdlKCk7XG5cbiAgICAgICAgLy9nZXQgdmFyaWFibGVzIHRvIGRpc3BsYXkgaW4gaGVhZGVyXG4gICAgICAgIGxldCBzdGFydE9mV2Vla0RheSA9IHN0YXJ0T2ZXZWVrLmdldERhdGUoKTtcbiAgICAgICAgbGV0IHN0YXJ0T2ZXZWVrTW9udGggPSBuZXcgRGF0ZShzdGFydE9mV2VlaykudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBtb250aDogJ3Nob3J0JyB9KTtcblxuICAgICAgICBsZXQgZW5kT2ZXZWVrRGF5ID0gZW5kT2ZXZWVrLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGVuZE9mV2Vla01vbnRoID0gbmV3IERhdGUoZW5kT2ZXZWVrKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICAgIC8vdXBkYXRlIHBhZ2UgdGl0bGVcbiAgICAgICAgaWYgKHN0YXJ0T2ZXZWVrTW9udGggIT09IGVuZE9mV2Vla01vbnRoKSB7XG4gICAgICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgV2VlaydzIFF1ZXN0czogJHtzdGFydE9mV2Vla01vbnRofSAke3N0YXJ0T2ZXZWVrRGF5fSAtICR7ZW5kT2ZXZWVrTW9udGh9ICR7ZW5kT2ZXZWVrRGF5fWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgV2VlaydzIFF1ZXN0czogJHtzdGFydE9mV2Vla01vbnRofSAke3N0YXJ0T2ZXZWVrRGF5fSAtICR7ZW5kT2ZXZWVrRGF5fWA7XG4gICAgICAgIH1cblxuICAgICAgICAvL2ZpbHRlciB3ZWVrcydzIHRhc2tzXG4gICAgICAgIGxldCB3ZWVrc1Rhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tEYXRlID49IHN0YXJ0T2ZXZWVrICYmIHRhc2tEYXRlIDw9IGVuZE9mV2VlaztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vZGlzcGxheSBmaWx0ZXJlZCBhcnJheSB0byBkb21cbiAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVuZGVyVGFza3Mod2Vla3NUYXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgICAgIC8vdGFza3MgdGFza3MgdGhpcyB3ZWVrIG1lc3NhZ2VcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBpZighdGFza0NvbnRhaW5lcikge1xuICAgICAgICAgICAgZGF5c1F1ZXN0T2JqZWN0LnNob3dOb1Rhc2tUb2RheShib2R5Q29udGVudENvbnRhaW5lcik7XG4gICAgICAgICAgICBjb25zdCBub1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tdGFzaycpO1xuICAgICAgICAgICAgbm9UYXNrLnRleHRDb250ZW50ID0gJ05vIFF1ZXN0cyBEdWUgVGhpcyBXZWVrJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB3ZWVrc1Rhc2tzO1xuICAgIH0sXG5cbiAgICBnZXRXZWVrUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgY3VycmVudERheSA9IGN1cnJlbnREYXRlLmdldERheSgpOyAvLzAgKHN1bikgdG8gNiAoc2F0KVxuICAgICAgICBcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgY3VycmVudCBkYXkgYW5kIHRoZSBzdGFydCBvZiB0aGUgd2VlayAoc3VuKVxuICAgICAgICBjb25zdCBzdGFydE9mV2Vla0RpZmYgPSBjdXJyZW50RGF5ID09PSAwID8gMCA6IGN1cnJlbnREYXk7XG4gICAgXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSBzdGFydCBvZiB0aGUgd2VlayBieSBzdWJ0cmFjdGluZyB0aGUgZGlmZmVyZW5jZVxuICAgICAgICBjb25zdCBzdGFydE9mV2VlayA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSAoc3RhcnRPZldlZWtEaWZmKSk7ICAgIFxuXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSBlbmQgb2YgdGhlIHdlZWsgYnkgYWRkaW5nIHRoZSByZW1haW5pbmcgZGF5cyB1bnRpbCBzYXRcbiAgICAgICAgY29uc3QgZW5kT2ZXZWVrID0gbmV3IERhdGUoc3RhcnRPZldlZWspO1xuICAgICAgICBlbmRPZldlZWsuc2V0RGF0ZShzdGFydE9mV2Vlay5nZXREYXRlKCkgKyA2KTtcblxuICAgICAgICAvL3NldCBiZWdpbm5pbmcgdGltZSBvZiB3ZWVrIHRvIHN1bmRheSBtaWRuaWdodCBvZiBmaXJzdCBkYXlcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0SG91cnMoMCwgMCwgMCk7XG5cbiAgICAgICAgLy9zZXQgZW5kIHRpbWUgb2Ygd2VlayB0byAxMTo1OXBtIG9mIGxhc3QgZGF5XG4gICAgICAgIGVuZE9mV2Vlay5zZXRIb3VycygyMywgNTksIDU5KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRPZldlZWssIGVuZE9mV2VlayB9O1xuICAgIH1cbn07IiwiaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2FsbFRhc2tzLmpzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2RvLWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tICcuL3Rhc2stZm9ybS1hY3Rpb25zLmpzJztcbmltcG9ydCB7IHBhZ2VFbGVtZW50c09iamVjdCB9IGZyb20gJy4vcGFnZS1lbGVtZW50cy5qcyc7XG5cbi8vbG9hZCB0aGUgZGF5J3MgcXVlc3QgcGFnZVxuZXhwb3J0IGNvbnN0IGRheXNRdWVzdE9iamVjdCA9IHtcbiAgICBcbiAgICBkYXlzUXVlc3RQYWdlKCkge1xuICAgICAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vaW1wb3J0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcblxuICAgICAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHRvZGF5c0RhdGUgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCB0aGlzTW9udGggPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgbW9udGg6ICdzaG9ydCcgfSk7XG4gICAgICAgIGxldCB0aGlzWWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgLy91cGRhdGUgcGFnZSB0aXRsZVxuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgRGF5J3MgUXVlc3RzOiAgJHt0b2RheXNEYXRlfSAke3RoaXNNb250aH0gJHt0aGlzWWVhcn1gO1xuICAgICAgICBcbiAgICAgICAgLy9nZXQgdG9kYXkncyBkYXRlXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZGF5c1F1ZXN0T2JqZWN0LmdldFRvZGF5RGF0ZSgpO1xuXG4gICAgICAgIC8vZmlsdGVyIHRvZGF5J3MgdGFza3NcbiAgICAgICAgbGV0IHRvZGF5c1Rhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kdWVEYXRlID09IHRvZGF5KTtcblxuICAgICAgICAvL2Rpc3BsYXkgZmlsdGVyZWQgYXJyYXkgdG8gZG9tXG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHRvZGF5c1Rhc2tzLCBib2R5Q29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBpZighdGFza0NvbnRhaW5lcikge1xuICAgICAgICAgICAgZGF5c1F1ZXN0T2JqZWN0LnNob3dOb1Rhc2tUb2RheShib2R5Q29udGVudENvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG9kYXlzVGFza3M7XG4gICAgfSxcblxuICAgIHNob3dOb1Rhc2tUb2RheShib2R5Q29udGVudENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBub1Rhc2tNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vVGFza01lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbm8tdGFzaycpO1xuICAgICAgICBub1Rhc2tNZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIFF1ZXN0cyBEdWUgVG9kYXknO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChub1Rhc2tNZXNzYWdlKTtcblxuICAgICAgICByZXR1cm4gbm9UYXNrTWVzc2FnZTtcbiAgICB9LFxuXG4gICAgZ2V0VG9kYXlEYXRlKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICB9XG59OyIsImltcG9ydCB7IGxvY2FsU3RvcmFnZU9iamVjdCB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuLy90YXNrIGFycmF5IHRvIHN0b3JlIGFsbCB0YXNrc1xuZXhwb3J0IGNvbnN0IHRhc2tzID0gW107XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgY29uc3QgdGFza0NvdW50ZXJPYmplY3QgPSB7XG4gICAgdGFza0NvdW50ZXI6IDAsXG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0Q291bnRlck9iamVjdCA9IHtcbiAgICBwcm9qZWN0SUQ6IDAsXG59XG5cbi8vY3JlYXRlcyB0YXNrIG9iamVjdHNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRhc2tJRDogdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIsXG4gICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbiAgICB9O1xuXG4gICAgdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIrKztcblxuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgLy8gY29uc29sZS5sb2codGFza3MpO1xuXG4gICAgLy9zYXZlIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2UgYWZ0ZXIgY3JlYXRpbmcgYSBuZXcgdGFza1xuICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG5cbiAgICByZXR1cm4gdGFzaztcbn1cblxuLy9zZW5kIHRhc2sgYXJyYXkgdG8gYmUgZGlzcGxheWVkXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG5cbiAgICAvL3JldHJpZXZlIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZSBiZWZvcmUgcmV0dXJuaW5nXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iamVjdC5nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iamVjdC5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9