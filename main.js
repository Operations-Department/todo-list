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

        let date = task.dueDate; 
        date = new Date(date);

        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();

        //re-format the date to mm-dd-yyyy
        let formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;

        taskDueDate.textContent = `${formattedDate}`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFNBQVMsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLHNEQUFzRCxj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QUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FsbFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLWVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWZvcm0tYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90aGlzV2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JhY2tkcm9wLTIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWVlbnNpZGVzTWVkaXVtLXgzMHpWLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvVWJ1bnR1LW4xTTAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2Nyb3NzLWJ1dHRvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvY2hlY2tlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvdHJhc2gtYmluLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjc3MgcmVzZXQgKi9cbiosIFxuaHRtbCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xufVxuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMmQyNzQ5O1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZGY3MmE5O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmVkO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAtLWZvbnQtY29sb3I6IHdoaXRlO1xuICAgIC0tZ2FwOiAxcmVtO1xuICAgIC0tY2FuY2VsLWNvbG9yOiAjYTUyZjJmO1xuICAgIC0tc3VibWl0LWNvbG9yOiAjMDI2ZTAyY2Y7XG4gICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgLS1sb3ctcHJpb3JpdHk6IHllbGxvdztcbiAgICAtLWxvdy1iYWNrZ3JvdW5kOiAjZmZmZjAwMTQ7XG4gICAgLS1taWQtcHJpb3JpdHk6IG9yYW5nZTtcbiAgICAtLW1pZC1iYWNrZ3JvdW5kOiAjZmZhNTAwMWM7XG4gICAgLS1oaWdoLXByaW9yaXR5OiAjZmY0MTQxO1xuICAgIC0taGlnaC1iYWNrZ3JvdW5kOiAjZmY0MTQxMjk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSwgZm9ybWF0KCd0dGYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSksIGZvcm1hdCgndHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNGZyIDAuMjVmcjtcbn1cblxuLyogaGVhZGVyICovXG5oZWFkZXIge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xufVxuXG4uc3ZnIHtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuXG4vKiBzaWRlLWJhciAqL1xuLnNpZGUtYmFyIHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbiNob21lLXRhc2tzIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbn1cblxuLnByb2plY3QtdGFza3Mge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAxN3JlbTtcbn1cblxuLnByb2plY3QtdGFza3MtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLm5ldy1wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5uZXctcHJvamVjdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAyNjsgKi9cbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgLyogYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7ICovXG59XG5cbi5wcm9qZWN0LWRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbiNob21lLXRhc2tzLFxuLnByb2plY3QtdGFza3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5zaWRlLWJhci10aXRsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbn1cblxuIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBnbG93IHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC42KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xuICAgIH1cbn1cblxubGkgPiBidXR0b24sXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbixcbiNzdWJtaXQtYnV0dG9uLFxuI2NhbmNlbC1idXR0b24sXG4ubmV3LXByb2plY3Qge1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWVudS1zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgOHMgaW5maW5pdGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC43cmVtO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxubGkgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XG59XG5cbi8qIG1haW4gKi9cbi5ib2R5IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLmJvZHktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZm9ybS1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMnJlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZ2FwOiAxLjVyZW07XG59XG5cbi5mb3JtLWxlZnQsXG4uZm9ybS1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmZvcm0tbGVmdCB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZm9ybS1yaWdodCB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xufVxuXG4uZm9ybS1ib3R0b20ge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4vKiBzdWJtaXQtYnV0dG9uL2FkZC1idXR0b24gKi9cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1zdWJtaXQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zdWJtaXQtY29sb3IpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tY2FuY2VsLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLWNvbG9yKTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcbn1cblxuLnN1Ym1pdC1idXR0b24sIFxuLmNhbmNlbC1idXR0b24ge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmZvcm0tYm90dG9tID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cblxuLmZvcm0tdGl0bGUsXG4uZm9ybS1kZXNjcmlwdGlvbixcbi5mb3JtLWRhdGUsXG4uZm9ybS1zZWxlY3Qge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0tdGl0bGUge1xuICAgIGhlaWdodDogMXJlbTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uZm9ybS1kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmZvcm0tZGF0ZSxcbi5mb3JtLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1pbi13aWR0aDogMzdyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBnYXA6IDAuNXJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzM2MTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXG59XG5cbi50YXNrLWVsZW1lbnQtbGVmdCxcbi50YXNrLWVsZW1lbnQtcmlnaHQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWVsZW1lbnQtbGVmdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhc2stY29tcGxldGUtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jb21wbGV0ZWQtdGFzayB7XG4gICAgYmFja2dyb3VuZDogIzAwZjkwMDNkO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA0ZmYwNDtcbiAgICBjb2xvcjogI2ZmZmZmZjY5O1xufVxuXG4uY29tcGxldGVkLXRhc2stdGV4dCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5jb21wbGV0ZWQtY2hlY2tlZCB7XG4gICAgYm9yZGVyOiBub25lOyAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGFzay10aXRsZTpob3Zlcixcbi50YXNrLWRlc2NyaXB0aW9uOmhvdmVyLFxuLnRhc2stZHVlLWRhdGU6aG92ZXIsXG4udGFzay1jb21wbGV0ZS1idXR0b246aG92ZXIsXG4udGFzay1wcmlvcml0eTpob3Zlcixcbi50YXNrLWRlbGV0ZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi50YXNrLWR1ZS1kYXRlIHtcbiAgICB3aWR0aDogNi4xcmVtO1xufVxuXG4vKiBwcmlvcml0eSBlbWJsZW0gaXRzZWxmKi9cbi50YXNrLXByaW9yaXR5IHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxufVxuXG4udGFzay1wcmlvcml0eS1sb3csXG4udGFzay1wcmlvcml0eS1taWQsXG4udGFzay1wcmlvcml0eS1oaWdoIHtcbiAgICB3aWR0aDogNS41cmVtO1xufVxuXG4udGFzay1wcmlvcml0eS1sb3cge1xuICAgIGNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XG59XG5cbi50YXNrLXByaW9yaXR5LW1pZCB7XG4gICAgY29sb3I6IHZhcigtLW1pZC1wcmlvcml0eSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTtcbn1cblxuLnRhc2stcHJpb3JpdHktaGlnaCB7XG4gICAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xufVxuXG4vKiB0YXNrIGNvbnRhaW5lciAocHJpb3JpdHkpKi9cbi50YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHkge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctYmFja2dyb3VuZCk7ICovXG59XG5cbi50YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHkge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmFja2dyb3VuZCk7ICovXG59XG5cbi50YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5IHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1iYWNrZ3JvdW5kKTsgKi9cbn1cblxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICMwMDAwMDA2Mztcbn1cblxuLnRhc2stZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEuMnJlbTtcbiAgICBoZWlnaHQ6IDEuM3JlbTtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5uby10YXNrIHtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBib3JkZXI6IHZhcigtLWJvcmRlcik7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDZzIGluZmluaXRlO1xufVxuXG4vKiB0byBvYnZpb3VzbHkgc2hvdyB3aGVyZSB0aGUgdGFzayBtb3ZlZCB1cG9uIHNvcnQgKi9cbi50YXNrLWdsb3cge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjcpOyBcbiAgICBhbmltYXRpb246IGdsb3cgNXMgaW5maW5pdGU7XG59XG5cbmZvb3RlciB7XG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5jb250ZW50ID4gZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7O0NBRUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7SUFD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bkMsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjc3MgcmVzZXQgKi9cXG4qLCBcXG5odG1sIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzJkMjc0OTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNkZjcyYTk7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgLS1ib3JkZXItY29sb3I6IHJlZDtcXG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICAtLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgICAtLWdhcDogMXJlbTtcXG4gICAgLS1jYW5jZWwtY29sb3I6ICNhNTJmMmY7XFxuICAgIC0tc3VibWl0LWNvbG9yOiAjMDI2ZTAyY2Y7XFxuICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9iYWNrZHJvcC0yLmpwZyk7XFxuICAgIC0tbG93LXByaW9yaXR5OiB5ZWxsb3c7XFxuICAgIC0tbG93LWJhY2tncm91bmQ6ICNmZmZmMDAxNDtcXG4gICAgLS1taWQtcHJpb3JpdHk6IG9yYW5nZTtcXG4gICAgLS1taWQtYmFja2dyb3VuZDogI2ZmYTUwMDFjO1xcbiAgICAtLWhpZ2gtcHJpb3JpdHk6ICNmZjQxNDE7XFxuICAgIC0taGlnaC1iYWNrZ3JvdW5kOiAjZmY0MTQxMjk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1F1ZWVuc2lkZXNNZWRpdW0teDMwelYudHRmJyksIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9VYnVudHUtbjFNMC50dGYnKSwgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNGZyIDAuMjVmcjtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbn1cXG5cXG4uc3ZnIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4vKiBzaWRlLWJhciAqL1xcbi5zaWRlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuI2hvbWUtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAxN3JlbTtcXG59XFxuXFxuLnByb2plY3QtdGFza3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW0gIWltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDI2OyAqL1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIC8qIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzAwMDAwMDYzOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWdzL2Nyb3NzLWJ1dHRvbi5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbiNob21lLXRhc2tzLFxcbi5wcm9qZWN0LXRhc2tzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLnNpZGUtYmFyLXRpdGxlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4gQGtleWZyYW1lcyBwdWxzZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdsb3cge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKTtcXG4gICAgfVxcbn1cXG5cXG5saSA+IGJ1dHRvbixcXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbixcXG4jc3VibWl0LWJ1dHRvbixcXG4jY2FuY2VsLWJ1dHRvbixcXG4ubmV3LXByb2plY3Qge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1lbnUtc2VsZWN0ZWQge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgOHMgaW5maW5pdGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbn1cXG5cXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmxpID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XFxufVxcblxcbi8qIG1haW4gKi9cXG4uYm9keSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5ib2R5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9iYWNrZHJvcC0yLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uZm9ybS1sZWZ0LFxcbi5mb3JtLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tbGVmdCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5mb3JtLXJpZ2h0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbn1cXG5cXG4uZm9ybS1ib3R0b20ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qIHN1Ym1pdC1idXR0b24vYWRkLWJ1dHRvbiAqL1xcbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tc3VibWl0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXN1Ym1pdC1jb2xvcik7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcXG59XFxuXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiwgXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tYm90dG9tID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbn1cXG5cXG4uZm9ybS10aXRsZSxcXG4uZm9ybS1kZXNjcmlwdGlvbixcXG4uZm9ybS1kYXRlLFxcbi5mb3JtLXNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZm9ybS1kZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZm9ybS1kYXRlLFxcbi5mb3JtLXNlbGVjdCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEycmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWluLXdpZHRoOiAzN3JlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzM2MTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cXG59XFxuXFxuLnRhc2stZWxlbWVudC1sZWZ0LFxcbi50YXNrLWVsZW1lbnQtcmlnaHQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZWxlbWVudC1sZWZ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmNvbXBsZXRlZC10YXNrIHtcXG4gICAgYmFja2dyb3VuZDogIzAwZjkwMDNkO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNGZmMDQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmNjk7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFzay10ZXh0IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5jb21wbGV0ZWQtY2hlY2tlZCB7XFxuICAgIGJvcmRlcjogbm9uZTsgICBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9jaGVja2VkLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlOmhvdmVyLFxcbi50YXNrLWRlc2NyaXB0aW9uOmhvdmVyLFxcbi50YXNrLWR1ZS1kYXRlOmhvdmVyLFxcbi50YXNrLWNvbXBsZXRlLWJ1dHRvbjpob3ZlcixcXG4udGFzay1wcmlvcml0eTpob3ZlcixcXG4udGFzay1kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kdWUtZGF0ZSB7XFxuICAgIHdpZHRoOiA2LjFyZW07XFxufVxcblxcbi8qIHByaW9yaXR5IGVtYmxlbSBpdHNlbGYqL1xcbi50YXNrLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbG93LFxcbi50YXNrLXByaW9yaXR5LW1pZCxcXG4udGFzay1wcmlvcml0eS1oaWdoIHtcXG4gICAgd2lkdGg6IDUuNXJlbTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbG93IHtcXG4gICAgY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LW1pZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1taWQtcHJpb3JpdHkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1oaWdoIHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG59XFxuXFxuLyogdGFzayBjb250YWluZXIgKHByaW9yaXR5KSovXFxuLnRhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctYmFja2dyb3VuZCk7ICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHkge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkLWJhY2tncm91bmQpOyAqL1xcbn1cXG5cXG4udGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLWJhY2tncm91bmQpOyAqL1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICMwMDAwMDA2MztcXG59XFxuXFxuLnRhc2stZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy90cmFzaC1iaW4ucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjNyZW07XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5uby10YXNrIHtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBib3JkZXI6IHZhcigtLWJvcmRlcik7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIDZzIGluZmluaXRlO1xcbn1cXG5cXG4vKiB0byBvYnZpb3VzbHkgc2hvdyB3aGVyZSB0aGUgdGFzayBtb3ZlZCB1cG9uIHNvcnQgKi9cXG4udGFzay1nbG93IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNyk7IFxcbiAgICBhbmltYXRpb246IGdsb3cgNXMgaW5maW5pdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSBcIi4vcGFnZS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGFza0Zvcm1PYmplY3QgfSBmcm9tIFwiLi90YXNrLWZvcm1cIjtcbmltcG9ydCB7IGZvcm1BY3Rpb25zT2JqZWN0IH0gZnJvbSBcIi4vdGFzay1mb3JtLWFjdGlvbnNcIjtcbmltcG9ydCB7IGVkaXRUYXNrc09iamVjdCB9IGZyb20gXCIuL2VkaXRUYXNrc1wiO1xuXG5leHBvcnQgY29uc3QgYm9keUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4vL21haW4gZnVuY3Rpb24gdG8gcG9wdWxhdGUgdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCBjcmVhdGVBbGxRdWVzdHNQYWdlID0ge1xuXG4gICAgdGl0bGVFbGVtZW50OiBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlUGFnZVRpdGxlKCksXG4gICAgYWRkVGFza0J1dHRvbjogcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZUFkZFRhc2tCdXR0b24oKSxcbiAgICBmb3JtQ29udGFpbmVyOiBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlRm9ybUNvbnRhaW5lcigpLFxuXG4gICAgLy9jbGljayB0byBhZGQgbmV3IHRhc2tcbiAgICBhZGRUYXNrKCkge1xuICAgICAgICBoYW5kbGVBZGRUYXNrKGNyZWF0ZUFsbFF1ZXN0c1BhZ2UuYWRkVGFza0J1dHRvbiwgY3JlYXRlQWxsUXVlc3RzUGFnZS5mb3JtQ29udGFpbmVyKTtcbiAgICB9LFxuXG4gICAgLy9jbGljayB0byBtYXJrIHRhc2sgY29tcGxldGVcbiAgICBjb21wbGV0ZVRhc2soZXZlbnQpIHtcbiAgICAgICAgZWRpdFRhc2tzT2JqZWN0LmhhbmRsZUNvbXBsZXRlVGFzayhldmVudCk7XG4gICAgfSxcbiAgICBcbiAgICAvL2NsaWNrIHRvIGRlbGV0ZSB0YXNrXG4gICAgZGVsZXRlVGFzayhldmVudCkge1xuICAgICAgICBlZGl0VGFza3NPYmplY3QuaGFuZGxlRGVsZXRlVGFzayhldmVudCk7XG4gICAgfSxcblxuICAgIC8vZG91YmxlIGNsaWNrIHRvIGVkaXQgdGFza3NcbiAgICBlZGl0VGFzayhldmVudCkge1xuICAgICAgICBlZGl0VGFza3NPYmplY3QuaGFuZGxlVGFza0VkaXQoZXZlbnQpO1xuICAgIH0sXG5cbiAgICAvL2F0dGFjaCBldmVudCBsaXN0ZW5lcnNcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFRhc2spO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY29tcGxldGVUYXNrKTtcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmRlbGV0ZVRhc2spO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMuZWRpdFRhc2spO1xuICAgIH0sXG5cbiAgICBnZXQgZWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlRWxlbWVudDogdGhpcy50aXRsZUVsZW1lbnQsIGFkZFRhc2tCdXR0b246IHRoaXMuYWRkVGFza0J1dHRvbiB9O1xuICAgIH0sXG59O1xuXG4vL2NyZWF0ZXMgdGhlIHRhc2sgY3JlYXRpb24gZm9ybVxuZnVuY3Rpb24gaGFuZGxlQWRkVGFzayhhZGRUYXNrQnV0dG9uLCBmb3JtQ29udGFpbmVyKSB7XG4gICAgYWRkVGFza0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCB7IGZvcm0sIGZvcm1MZWZ0LCBmb3JtUmlnaHQsIGZvcm1Cb3R0b20gfSA9IHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1MYXlvdXQoZm9ybUNvbnRhaW5lcik7XG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vY2FsbCBmb3JtIGZ1bmN0aW9ucyB0byBmaWxsIGluIHRoZSBmb3JtLi4uXG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybVRpdGxlKGZvcm1MZWZ0KTtcbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtRGVzY3JpcHRpb24oZm9ybUxlZnQpO1xuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1EYXRlKGZvcm1SaWdodCk7XG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybVByaW9yaXR5U2VsZWN0b3IoZm9ybVJpZ2h0KTtcbiAgICBjb25zdCB7IHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uIH0gPSB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtQnV0dG9ucyhmb3JtQm90dG9tKTtcblxuICAgIC8vYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBjcmVhdGVkIHN1Ym1pdC9jYW5jZWwgYnV0dG9uc1xuICAgIGZvcm1BY3Rpb25zT2JqZWN0LmF0dGFjaFN1Ym1pdExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBmb3JtQ29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKTtcbiAgICBmb3JtQWN0aW9uc09iamVjdC5hdHRhY2hDYW5jZWxMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbik7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB0YXNrcywgY3JlYXRlVGFzaywgZ2V0VGFza3MgfSBmcm9tIFwiLi90b2RvLWZhY3RvcnlcIjtcbmltcG9ydCB7IGJvZHlDb250ZW50Q29udGFpbmVyIH0gZnJvbSBcIi4vYWxsVGFza3NcIjtcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU9iamVjdCB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IGZvcm1BY3Rpb25zT2JqZWN0IH0gZnJvbSBcIi4vdGFzay1mb3JtLWFjdGlvbnNcIjtcbmltcG9ydCB7IHNvcnRUYXNrc0J5RGF0ZSB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBjb25zdCBlZGl0VGFza3NPYmplY3QgPSB7XG5cbiAgICAvL3RvZ2dsZXMgdGFzayBiZXR3ZWVuIGNvbXBsZXRlIGFuZCBpbmNvbXBsZXRlXG4gICAgaGFuZGxlQ29tcGxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWNvbXBsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGlmICh0YXNrQ29tcGxldGUpIHsgLy9jYW4gZ2V0IHRoZXNlIGZyb20gZ2V0RWxlbWVudHMoKVxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJJRCA9IHBhcnNlSW50KHRhc2tDb250YWluZXIuZGF0YXNldC50YXNrSWQpO1xuICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnRMZWZ0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWVsZW1lbnQtbGVmdCcpO1xuICAgICAgICAgICAgY29uc3QgZG9tVGl0bGUgPSB0YXNrRWxlbWVudExlZnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRvbURlc2NyaXB0aW9uID0gdGFza0VsZW1lbnRMZWZ0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvdW5kVGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLnRhc2tJRCA9PSB0YXNrQ29udGFpbmVySUQpO1xuXG4gICAgICAgICAgICBpZiAoZm91bmRUYXNrLnN0YXR1cyA9PT0gJ2luY29tcGxldGUnKSByZXR1cm4gZWRpdFRhc2tzT2JqZWN0LmlzQ29tcGxldGUoZm91bmRUYXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGlmIChmb3VuZFRhc2suc3RhdHVzID09PSAnY29tcGxldGUnKSByZXR1cm4gZWRpdFRhc2tzT2JqZWN0LmlzSW5jb21wbGV0ZShmb3VuZFRhc2ssIHRhc2tDb250YWluZXIsIGV2ZW50LCBkb21UaXRsZSwgZG9tRGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vZGVsZXRlcyBvYmplY3QgaW4gdGFzayBhcnJheSBhbmQgcmVtb3ZlcyBkb20gZGlzcGxheSBlbGVtZW50XG4gICAgaGFuZGxlRGVsZXRlVGFzayhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGVsZXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKHRhc2tEZWxldGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJJRCA9IHBhcnNlSW50KHRhc2tDb250YWluZXIuZGF0YXNldC50YXNrSWQpO1xuXG4gICAgICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay50YXNrSUQgPT09IHRhc2tDb250YWluZXJJRCk7XG5cbiAgICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgICAgICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vY2hhbmdlcyBzdGF0dXMgKyBkb20gdG8gY29tcGxldGVcbiAgICBpc0NvbXBsZXRlKHRhc2ssIHRhc2tDb250YWluZXIsIGV2ZW50LCBkb21UaXRsZSwgZG9tRGVzY3JpcHRpb24pIHtcblxuICAgICAgICAvL3VwZGF0ZSB0YXNrIG9iamVjdCBzdGF0dXNcbiAgICAgICAgdGFzay5zdGF0dXMgPSAnY29tcGxldGUnO1xuXG4gICAgICAgIC8vY3NzIHRvIGRpc3BsYXkgY29tcGxldGVkIHN0YXR1c1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtY2hlY2tlZCcpO1xuICAgICAgICBkb21UaXRsZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIGRvbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcblxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIC8vY2hhbmdlcyBzdGF0dXMgKyBkb20gdG8gaW5jb21wbGV0ZVxuICAgIGlzSW5jb21wbGV0ZSh0YXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKSB7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3Qgc3RhdHVzXG4gICAgICAgIHRhc2suc3RhdHVzID0gJ2luY29tcGxldGUnO1xuXG4gICAgICAgIC8vY3NzIHRvIGRpc3BsYXkgY29tcGxldGVkIHN0YXR1c1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtY2hlY2tlZCcpO1xuICAgICAgICBkb21UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIGRvbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcblxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIHJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGlmICghdGFza0NvbnRhaW5lcikgcmV0dXJuIG51bGw7XG4gICAgICBcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnRMZWZ0ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFza0VsZW1lbnRMZWZ0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50UmlnaHQgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVsZW1lbnQtcmlnaHQnKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrRWxlbWVudFJpZ2h0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tFbGVtZW50UmlnaHQucXVlcnlTZWxlY3RvcignLnRhc2stcHJpb3JpdHknKTtcblxuICAgICAgICBjb25zdCBlZGl0SW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlZGl0SW5wdXRCb3guY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tJRE51bWJlciA9IHBhcnNlSW50KHRhc2tDb250YWluZXIuZGF0YXNldC50YXNrSWQpO1xuICAgICAgICBjb25zdCB0YXNrID0gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay50YXNrSUQgPT09IHRhc2tJRE51bWJlcik7XG4gICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIsXG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQsXG4gICAgICAgICAgICB0YXNrVGl0bGUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LFxuICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHksXG4gICAgICAgICAgICBlZGl0SW5wdXRCb3gsXG4gICAgICAgICAgICB0YXNrSUROdW1iZXIsXG4gICAgICAgICAgICB0YXNrXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBcbiAgICAvL2hhbmRsZXMgbmV3IGVkaXRlZCB0aXRsZSBzdWJtaXNzaW9uXG4gICAgc3VibWl0VGl0bGUoZXZlbnQsIHRhc2tUaXRsZSwgZWRpdElucHV0Qm94KSB7XG5cbiAgICAgICAgY29uc3QgeyB0YXNrRWxlbWVudExlZnQsIHRhc2sgfSA9IGVkaXRUYXNrc09iamVjdC5yZXRyaWV2ZVRhc2tFbGVtZW50cyhldmVudCk7XG4gICAgICAgIFxuICAgICAgICAvL3JlbW92ZSBpbnB1dCBib3ggYW5kIHJlc3RvcmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKHRhc2tUaXRsZSwgZWRpdElucHV0Qm94KTtcblxuICAgICAgICAvL3VwZGF0ZSB0YXNrIG9iamVjdCB0aXRsZVxuICAgICAgICB0YXNrLnRpdGxlID0gZWRpdElucHV0Qm94LnZhbHVlO1xuXG4gICAgICAgIC8vdXBkYXRlIERPTSBkaXNwbGF5XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgXG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICB9LFxuXG4gICAgLy9oYW5kbGVzIG5ldyBlZGl0ZWQgZGVzY3JpcHRpb24gc3VibWlzc2lvblxuICAgIHN1Ym1pdERlc2NyaXB0aW9uKGV2ZW50LCB0YXNrRGVzY3JpcHRpb24sIGVkaXRJbnB1dEJveCkge1xuXG4gICAgICAgIGNvbnN0IHsgdGFza0VsZW1lbnRMZWZ0LCB0YXNrIH0gPSBlZGl0VGFza3NPYmplY3QucmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9yZW1vdmUgaW5wdXQgYm94IGFuZCByZXN0b3JlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZCh0YXNrRGVzY3JpcHRpb24sIGVkaXRJbnB1dEJveCk7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3QgZGVzY3JpcHRpb25cbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAvL3VwZGF0ZSBET00gZGlzcGxheVxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIFxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIC8vaGFuZGxlcyBuZXcgZWRpdGVkIGRlc2NyaXB0aW9uIHN1Ym1pc3Npb25cbiAgICBzdWJtaXREdWVEYXRlKGV2ZW50LCB0YXNrRHVlRGF0ZSwgZWRpdElucHV0Qm94KSB7XG5cbiAgICAgICAgY29uc3QgeyB0YXNrRWxlbWVudFJpZ2h0LCB0YXNrLCB0YXNrQ29udGFpbmVyIH0gPSBlZGl0VGFza3NPYmplY3QucmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9yZW1vdmUgaW5wdXQgYm94IGFuZCByZXN0b3JlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5yZXBsYWNlQ2hpbGQodGFza0R1ZURhdGUsIGVkaXRJbnB1dEJveCk7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3QgZGVzY3JpcHRpb25cbiAgICAgICAgdGFzay5kdWVEYXRlID0gZWRpdElucHV0Qm94LnZhbHVlO1xuXG4gICAgICAgIC8vdXBkYXRlIERPTSBkaXNwbGF5XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgIC8vYXV0byBzb3J0IGxpc3QgYnkgZHVlIGRhdGVcbiAgICAgICAgY29uc3Qgc29ydGVkVGFza3MgPSBzb3J0VGFza3NCeURhdGUoWy4uLnRhc2tzXSk7XG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHNvcnRlZFRhc2tzKTtcbiAgICBcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2N5Y2xlIGJldHdlZW4gbG93LW1pZC1oaWdoIHByaW9yaXR5XG4gICAgY2hhbmdlUHJpb3JpdHkodGFzaywgZXZlbnQsIHRhc2tQcmlvcml0eSwgdGFza0NvbnRhaW5lcikge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygndGFzay1wcmlvcml0eS1sb3cnKTpcblxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbWlkJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgIGNhc2UgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygndGFzay1wcmlvcml0eS1taWQnKTpcblxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LW1pZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktaGlnaCcpOlxuXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdsb3cnO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICAgXG4gICAgaGFuZGxlVGFza0VkaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyBcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdCwgXG4gICAgICAgICAgICBlZGl0SW5wdXRCb3gsIFxuICAgICAgICAgICAgdGFza0NvbnRhaW5lciwgXG4gICAgICAgICAgICB0YXNrVGl0bGUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LFxuICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHksXG4gICAgICAgICAgICB0YXNrXG4gICAgICAgIH0gPSBlZGl0VGFza3NPYmplY3QucmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpO1xuXG4gICAgICAgIGlmICghdGFza0NvbnRhaW5lciB8fCAhdGFza0VsZW1lbnRMZWZ0IHx8ICF0YXNrRWxlbWVudFJpZ2h0KSByZXR1cm4gbnVsbDtcbiAgICAgIFxuICAgICAgICAvL2VkaXQgdGFzayB0aXRsZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay10aXRsZScpKSB7XG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKGVkaXRJbnB1dEJveCwgdGFza1RpdGxlKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5mb2N1cygpO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBlZGl0SW5wdXRCb3gudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGVkaXRUYXNrc09iamVjdC5zdWJtaXRUaXRsZShldmVudCwgdGFza1RpdGxlLCBlZGl0SW5wdXRCb3gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9lZGl0IHRhc2sgZGVzY3JpcHRpb25cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGVzY3JpcHRpb24nKSkge1xuICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZChlZGl0SW5wdXRCb3gsIHRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZWRpdElucHV0Qm94LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBlZGl0VGFza3NPYmplY3Quc3VibWl0RGVzY3JpcHRpb24oZXZlbnQsIHRhc2tEZXNjcmlwdGlvbiwgZWRpdElucHV0Qm94KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZWRpdCB0YXNrIGR1ZSBkYXRlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWR1ZS1kYXRlJykpIHtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC50eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgdGFza0VsZW1lbnRSaWdodC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrRHVlRGF0ZSk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0VGFza3NPYmplY3Quc3VibWl0RHVlRGF0ZShldmVudCwgdGFza0R1ZURhdGUsIGVkaXRJbnB1dEJveCk7XG5cbiAgICAgICAgICAgICAgICAvL3Nob3cgbmV3IGxvY2F0aW9uIGluIHRoZSB0YXNrIGxpc3QgYWZ0ZXIgc29ydCAqKiBkb2Vzbid0IHdvcmtcbiAgICAgICAgICAgICAgICAvLyBpZiAodGFza0NvbnRhaW5lcikgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWdsb3cnKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZ2xvdycpO1xuICAgICAgICAgICAgICAgIC8vIH0sIDUwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2VkaXQgdGFzayBwcmlvcml0eVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1wcmlvcml0eScpKSB7XG4gICAgICAgICAgICBlZGl0VGFza3NPYmplY3QuY2hhbmdlUHJpb3JpdHkodGFzaywgZXZlbnQsIHRhc2tQcmlvcml0eSwgdGFza0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9LFxufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGJvZHlDb250ZW50Q29udGFpbmVyLCBjcmVhdGVBbGxRdWVzdHNQYWdlIH0gZnJvbSAnLi9hbGxUYXNrcy5qcyc7XG5pbXBvcnQgeyB0YXNrcywgdGFza0NvdW50ZXJPYmplY3QsIHByb2plY3RzLCBwcm9qZWN0Q291bnRlck9iamVjdCB9IGZyb20gJy4vdG9kby1mYWN0b3J5LmpzJztcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU9iamVjdCB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBmb3JtQWN0aW9uc09iamVjdCB9IGZyb20gJy4vdGFzay1mb3JtLWFjdGlvbnMuanMnO1xuaW1wb3J0IHsgd2Vla3NRdWVzdE9iamVjdCB9IGZyb20gJy4vdGhpc1dlZWsuanMnO1xuaW1wb3J0IHsgZGF5c1F1ZXN0T2JqZWN0IH0gZnJvbSAnLi90b2RheS5qcyc7XG5cbmNvbnN0IHNpZGVCYXJNZW51SXRlbXMgPSB7XG4gICAgc2lkZUJhck1lbnU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRhc2tzJyksXG4gICAgYWxsUXVlc3RzVGFiOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXF1ZXN0cycpLFxuICAgIGRheXNRdWVzdFRhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMtcXVlc3RzJyksXG4gICAgd2Vla3NRdWVzdFRhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtzLXF1ZXN0cycpLFxuICAgIHByb2plY3RUYXNrczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFza3MnKSxcbiAgICBwcm9qZWN0c1Rhc2tzTGlzdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFza3MtbGlzdCcpLFxuICAgIGFkZFF1ZXN0bGluZVRhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1xdWVzdGxpbmUnKSxcblxuICAgIGFkZENsYXNzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgfSxcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAvL2xvYWQgYWxsIHRhc2tzIHBhZ2UgZmlyc3RcbiAgICBhbGxRdWVzdHNQYWdlKCk7XG5cbiAgICAvL3Nob3cgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICBzaWRlQmFyTWVudUl0ZW1zLmFsbFF1ZXN0c1RhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgXG4gICAgLy9pbml0aWFsaXplIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgICBjcmVhdGVBbGxRdWVzdHNQYWdlLmluaXQoKTtcbn0pO1xuXG5zaWRlQmFyTWVudUl0ZW1zLnNpZGVCYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbC1xdWVzdHMnKSkge1xuICAgICAgICBhbGxRdWVzdHNQYWdlKCk7XG5cbiAgICAgICAgLy9zaG93IHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWRkQ2xhc3MoZXZlbnQpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuZGF5c1F1ZXN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy53ZWVrc1F1ZXN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RheXMtcXVlc3RzJykpIHtcbiAgICAgICAgZGF5c1F1ZXN0T2JqZWN0LmRheXNRdWVzdFBhZ2UoKTtcblxuICAgICAgICAvL3Nob3cgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRDbGFzcyhldmVudCk7XG5cbiAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hbGxRdWVzdHNUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLndlZWtzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnd2Vla3MtcXVlc3RzJykpIHtcbiAgICAgICAgd2Vla3NRdWVzdE9iamVjdC53ZWVrc1F1ZXN0UGFnZSgpO1xuXG4gICAgICAgIC8vc2hvdyBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZENsYXNzKGV2ZW50KTtcblxuICAgICAgICAvL3JlbW92ZSBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFsbFF1ZXN0c1RhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuZGF5c1F1ZXN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gYWxsUXVlc3RzUGFnZSgpIHtcbiAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvL2ltcG9ydCB0YXNrIHBhZ2UgZWxlbWVudHNcbiAgICBjb25zdCB7IHRpdGxlRWxlbWVudCwgYWRkVGFza0J1dHRvbiB9ID0gY3JlYXRlQWxsUXVlc3RzUGFnZS5lbGVtZW50cztcblxuICAgIC8vYXBwZW5kIHRvb2xzIHRvIHBhZ2VcbiAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgY29uc3QgcmV0cmlldmVkVGFza3MgPSBsb2NhbFN0b3JhZ2VPYmplY3QuZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbiAgICB0YXNrcy5sZW5ndGggPSAwO1xuICAgIHRhc2tzLnB1c2goLi4ucmV0cmlldmVkVGFza3MpO1xuXG4gICAgY29uc3QgcmV0cmlldmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2VPYmplY3QuZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBwcm9qZWN0cy5sZW5ndGggPSAwO1xuICAgIHByb2plY3RzLnB1c2goLi4ucmV0cmlldmVkUHJvamVjdHMpO1xuXG4gICAgLy9wcmV2ZW50IHRhc2sgY291bnRlciBmcm9tIHN0YXJ0aW5nIHdpdGggd3JvbmcgaWQgbnVtYmVyIG9uIHBhZ2UgcmVsb2FkXG4gICAgaWYgKHRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsZXQgcHJldmlvdXNUYXNrSWQgPSB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXS50YXNrSUQ7XG4gICAgICAgIHRhc2tDb3VudGVyT2JqZWN0LnRhc2tDb3VudGVyID0gcHJldmlvdXNUYXNrSWQgKyAxO1xuICAgIH1cblxuICAgIC8vc29ydCB0YXNrcyBpbiBvcmRlciBvbiBwYWdlIGxvYWRcbiAgICBzb3J0VGFza3NCeURhdGUodGFza3MpO1xuXG4gICAgLy9yZW5kZXIgc2F2ZWQgcHJvamVjdHMgb24gcGFnZSBsb2FkXG4gICAgcmVuZGVyUHJvamVjdHNMaXN0KHByb2plY3RzKTtcblxuICAgIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHRhc2tzKTtcblxuICAgIHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYXNrc0J5RGF0ZSh0YXNrcykge1xuICAgIHJldHVybiAgdGFza3Muc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSkpO1xufVxuXG5cblxuXG5cblxuXG5zaWRlQmFyTWVudUl0ZW1zLnByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtcXVlc3RsaW5lJykpIHtcbiAgICAgICAgLy90byBvbmx5IGFkZCBvbmUgcHJvamVjdCBhdCBhIHRpbWVcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGVkaXRJbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGVkaXRJbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMucHJvamVjdHNUYXNrc0xpc3QuYXBwZW5kQ2hpbGQoZWRpdElucHV0Qm94KTtcbiAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG5cbiAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvL3B1c2ggdG8gcHJvamVjdHMgYXJyYXlcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgICAgICAgICAvL2NyZWF0ZXMgcHJvamVjdCBkb20gZWxlbWVudFxuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoZWRpdElucHV0Qm94LCBwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgLy9yZS1lc3RhYmxpc2ggYWRkIGJ1dHRvblxuICAgICAgICAgICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWRkUXVlc3RsaW5lVGFiLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuLy9kZWxldGUgcHJvamVjdCBvbiBkb3VibGUgY2xpY2tcbnNpZGVCYXJNZW51SXRlbXMucHJvamVjdFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtZGVsZXRlJykpIHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChldmVudCk7XG4gICAgfVxufSk7IFxuXG4vL2NsaWNrIGNyZWF0ZWQgcHJvamVjdCAtIHBvcHVsYXRlIHNjcmVlbiB3aXRoIHByb2plY3QncyB0YXNrc1xuc2lkZUJhck1lbnVJdGVtcy5wcm9qZWN0VGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXByb2plY3QnKSkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcblxuICAgICAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vaW1wb3J0IHRhc2sgcGFnZSBlbGVtZW50c1xuICAgICAgICBjb25zdCB7IHRpdGxlRWxlbWVudCwgYWRkVGFza0J1dHRvbiB9ID0gY3JlYXRlQWxsUXVlc3RzUGFnZS5lbGVtZW50cztcblxuICAgICAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7cHJvamVjdFRpdGxlfWA7XG5cbiAgICAgICAgLy9maWx0ZXIgdGFza3MgYXJyYXkgYnkgcHJvamVjdCBuYW1lXG4gICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3ROYW1lID09PSBwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHByb2plY3RUYXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIH1cbn0pO1xuXG4vL25ldyBwcm9qZWN0IGNyZWF0aW9uIHRvIGRvbVxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChlZGl0SW5wdXRCb3gsIHByb2plY3RUaXRsZSkge1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICBzaWRlQmFyTWVudUl0ZW1zLnByb2plY3RzVGFza3NMaXN0LnJlcGxhY2VDaGlsZChuZXdQcm9qZWN0LCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBwcm9qZWN0Q291bnRlck9iamVjdC5wcm9qZWN0SUQpO1xuXG4gICAgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKys7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICBcbiAgICBzaWRlQmFyTWVudUl0ZW1zLnByb2plY3RzVGFza3NMaXN0LmFwcGVuZENoaWxkKHNpZGVCYXJNZW51SXRlbXMuYWRkUXVlc3RsaW5lVGFiKTtcblxuICAgIHJldHVybiB7IG5ld1Byb2plY3QsIGRlbGV0ZVByb2plY3RCdXR0b24gfTtcbn1cblxuLy9yZW5kZXIgc2F2ZWQgcHJvamVjdHMgb24gcGFnZSBsb2FkXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0xpc3QocHJvamVjdHMpIHtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzLWxpc3QnKTtcblxuICAgIC8vY2xlYXIgdG8gcHJldmVudCBzdGFja2luZ1xuICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG5cbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcpO1xuICAgICAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKTtcbiAgICBcbiAgICAgICAgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKys7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpO1xuICAgIFxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIpO1xufVxuXG4vL3JlbW92ZXMgcHJvamVjdCBmcm9tIG9iamVjdCBhbmQgZG9tIGVsZW1lbnRcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZXZlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFza3MtbGlzdCcpO1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubmV3LXByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGVUZXh0ID0gcHJvamVjdFRvRGVsZXRlLnRleHRDb250ZW50OyBcbiAgICAvLyBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0VG9EZWxldGUuZGF0YXNldC5wcm9qZWN0SWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXSA9PSBwcm9qZWN0VG9EZWxldGVUZXh0KSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0VGFza3NMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RUb0RlbGV0ZSk7XG4gICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbn0iLCJleHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlT2JqZWN0ID0ge1xuXG4gICAgLy9zYXZlIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcykge1xuICAgICAgICBjb25zdCB0YXNrc0pTT04gPSBKU09OLnN0cmluZ2lmeSh0YXNrcyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIHRhc2tzSlNPTik7XG4gICAgfSxcblxuICAgIC8vc2F2ZSB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNKU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBwcm9qZWN0c0pTT04pO1xuICAgIH0sXG5cbiAgICAvL3JldHJpZXZlIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGFza3NKU09OKSB8fCBbXTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL3JldHJpZXZlIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJvamVjdHNKU09OKSB8fCBbXTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0sXG59IiwiLy9vYmplY3QgdG8gc3RvcmUgYmFzZSBpdGVtcyBvbiB0aGUgcGFnZSAodGl0bGUsIGZpcnN0IGJ1dHRvbiBldGMpXG5leHBvcnQgY29uc3QgcGFnZUVsZW1lbnRzT2JqZWN0ID0ge1xuXG4gICAgY3JlYXRlUGFnZVRpdGxlKCkge1xuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gJ0FsbCBRdWVzdHMnO1xuICAgICAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYm9keS10aXRsZScpO1xuICAgICAgICByZXR1cm4gdGl0bGVFbGVtZW50O1xuICAgIH0sXG5cbiAgICBjcmVhdGVBZGRUYXNrQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1idXR0b24nKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICd8K3wgQWRkIFF1ZXN0JztcbiAgICAgICAgcmV0dXJuIGFkZFRhc2tCdXR0b247XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1Db250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbiAgICB9XG59IiwiaW1wb3J0IHsgdGFza3MsIGNyZWF0ZVRhc2ssIGdldFRhc2tzIH0gZnJvbSBcIi4vdG9kby1mYWN0b3J5XCI7XG5pbXBvcnQgeyBwYWdlRWxlbWVudHNPYmplY3QgfSBmcm9tIFwiLi9wYWdlLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VPYmplY3QgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBzb3J0VGFza3NCeURhdGUgfSBmcm9tIFwiLlwiO1xuXG4vL29iamVjdCB0byBzdG9yZSBmdW5jdGlvbnMgcmVsYXRlZCB0byB0YXNrIGNyZWF0aW9uIC8gZm9ybSBzdWJtaXNzaW9uXG5leHBvcnQgY29uc3QgZm9ybUFjdGlvbnNPYmplY3QgPSB7XG4gICAgXG4gICAgYXR0YWNoU3VibWl0TGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pIHtcblxuICAgICAgICBjb25zdCBib2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHktdGl0bGUnKTtcblxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0ICgnUGxlYXNlIGZpbGwgaW4gdGhlIHRpdGxlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5hZGRUYXNrKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW1vdmVGb3JtKGZvcm1Db250YWluZXIpO1xuXG5cblxuXG5cblxuICAgICAgICAgICAgaWYgKHRpdGxlLnRleHRDb250ZW50ICE9PSAnQWxsIFF1ZXN0cycpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0TmFtZSA9PT0gdGl0bGUpO1xuICAgICAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHByb2plY3RUYXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tzQnlEYXRlKFsuLi5wcm9qZWN0VGFza3NdKTtcbiAgICAgICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVUYXNrTGlzdChzb3J0ZWRUYXNrcyk7XG4gICAgICAgICAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHRhc2tzKTtcblxuICAgICAgICAgICAgICAgIC8vYXV0byBzb3J0IGludG8gbGlzdCBhZnRlciBjcmVhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tzQnlEYXRlKFsuLi50YXNrc10pO1xuICAgICAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHNvcnRlZFRhc2tzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuXG5cblxuXG5cblxuXG4gICAgYXR0YWNoQ2FuY2VsTGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pIHtcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbW92ZUZvcm0oZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlVGFza0xpc3QodGFza3MpIHtcblxuICAgICAgICBjb25zdCBib2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS10aXRsZScpLnRleHRDb250ZW50O1xuXG4gICAgICAgIC8vcHJldmVudCBkdXBsaWNhdGUgdGFza3NcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgLy9yZS1hZGQgdGl0bGUgdG8gcGFnZVxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlUGFnZVRpdGxlKCk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgICAgLy9yZW5kZXIgdGFza3MgZnJvbSBhcnJheSB0byBkb21cbiAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVuZGVyVGFza3ModGFza3MsIGJvZHlDb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICAvL3B1dCBhZGQgYnV0dG9uIHRvIGJvdHRvbSBvZiB0aGUgbGlzdFxuICAgICAgICBpZihhZGRUYXNrQnV0dG9uKSBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICB9LFxuXG4gICAgLy9pdGVyYXRlcyB0aG91Z2ggdGhlIHRhc2tzIGFycmF5IHRvIGRpc3BsYXkgdG8gdGhlIGRvbVxuICAgIHJlbmRlclRhc2tzKHRhc2tzLCBib2R5Q29udGVudENvbnRhaW5lcikgeyBcblxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICAvL2VhY2ggc2lkZSBvZiB0aGUgdGFzayBpdGVtXG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgLy90YXNrRWxlbWVudExlZnQgaXRlbXMgLSBjb21wbGV0ZSBidXR0b24sIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29tcGxldGUtYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stY29tcGxldGUtYnV0dG9uJyk7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfWA7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcblxuICAgICAgICBpZiAodGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID09ICcnKSB7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnKGVtcHR5KSc7XG4gICAgICAgIH1cblxuICAgICAgICAvL3Rhc2tFbGVtZW50UmlnaHQgLSBkdWUgZGF0ZSwgcHJpb3JpdHksIGRlbGV0ZSBidXR0b25cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSA9PSAnJykgdGFzay5kdWVEYXRlID0gJyhubyBkdWUgZGF0ZSknO1xuXG4gICAgICAgIGxldCBkYXRlID0gdGFzay5kdWVEYXRlOyBcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgLy9yZS1mb3JtYXQgdGhlIGRhdGUgdG8gbW0tZGQteXl5eVxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGAke21vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0tJHtkYXkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS0ke3llYXJ9YDtcblxuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdHRlZERhdGV9YDtcblxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7dGFzay5wcmlvcml0eX1gO1xuXG4gICAgICAgIC8vdXBkYXRlIGNzcyBiYXNlZCBvbiBwcmlvcml0eSB2YWx1ZVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5kaXNwbGF5UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lciwgdGFza1ByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgICAgICAgLy8gdGFza0RlbGV0ZS50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gICAgICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIHBhZ2VcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTsgICAgXG5cbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50TGVmdCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnRSaWdodCk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcsIHRhc2sudGFza0lEKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVsZW1lbnQtcmlnaHQnKTtcblxuICAgICAgICAvL2Rpc3BsYXkgdGFzayBjb21wbGV0aW9uIG9uIHBhZ2UtbG9hZFxuICAgICAgICBpZiAodGFzay5zdGF0dXMgPT0gJ2NvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlDb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgaWYgKHRhc2suc3RhdHVzID09ICdpbmNvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlJbmNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTsgICAgXG4gICAgfSxcblxuICAgIC8vbWFkZSBiYyBlZGl0VGFza3MgZnVuY3Rpb25zIHdlcmUgaW5jb21wYXRpYmxlXG4gICAgdXBkYXRlRGlzcGxheUNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICB9LFxuXG4gICAgLy9tYWRlIGJjIGVkaXRUYXNrcyBmdW5jdGlvbnMgd2VyZSBpbmNvbXBhdGlibGVcbiAgICB1cGRhdGVEaXNwbGF5SW5jb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC1jaGVja2VkJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmVGb3JtKGZvcm1Db250YWluZXIpIHtcbiAgICAgICAgY29uc3QgYm9keUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgaWYgKGJvZHlDb250ZW50Q29udGFpbmVyLmNvbnRhaW5zKGZvcm1Db250YWluZXIpKSBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9LFxuXG4gICAgLy9jYWxsZWQgYnkgc3VibWl0IGJ1dHRvbiB0byBwdXQgdGFzayBvbnRvIHBhZ2VcbiAgICBhZGRUYXNrKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktc2VsZWN0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHktdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3ROYW1lKTtcbiAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcblxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9LFxuXG4gICAgLy9jc3MgdG8gdGFzayBjb250YWluZXIgYW5kIHByaW9yaXR5IGJ1dHRvbiBiYXNlZCBvbiBwcmlvcml0eSB2YWx1ZVxuICAgIGRpc3BsYXlQcmlvcml0eSh0YXNrLCB0YXNrQ29udGFpbmVyLCB0YXNrUHJpb3JpdHkpIHtcblxuICAgICAgICAvL3ByZXZlbnQgc3RhY2tpbmcgbXVsdGlwbGUgY2xhc3Nlc1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eScpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbWlkJyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvL29iamVjdCB0byBzdG9yZSBmdW5jdGlvbnMgdGhhdCBjcmVhdGUgZm9ybSB0byBnZW5lcmF0ZSBpbmRpdmlkdWFsIHRhc2tzXG5leHBvcnQgY29uc3QgdGFza0Zvcm1PYmplY3QgPSB7XG5cbiAgICBjcmVhdGVGb3JtTGF5b3V0KGZvcm1Db250YWluZXIpIHtcblxuICAgICAgICAvL2NyZWF0ZSBmb3JtIG9iamVjdHNcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgZm9ybUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9ybVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1Cb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvL2FwcGVuZCBlbGVtZW50cyB0byBmb3JtXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUxlZnQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1SaWdodCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJvdHRvbSk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3Nlc1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybUxlZnQuY2xhc3NMaXN0LmFkZCgnZm9ybS1sZWZ0Jyk7XG4gICAgICAgIGZvcm1SaWdodC5jbGFzc0xpc3QuYWRkKCdmb3JtLXJpZ2h0Jyk7XG4gICAgICAgIGZvcm1Cb3R0b20uY2xhc3NMaXN0LmFkZCgnZm9ybS1ib3R0b20nKTtcblxuICAgICAgICByZXR1cm4geyBmb3JtLCBmb3JtTGVmdCwgZm9ybVJpZ2h0LCBmb3JtQm90dG9tIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1UaXRsZShmb3JtTGVmdCkge1xuXG4gICAgICAgIC8vY3JlYXRlIHRpdGxlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgIC8vcHJldmVudCBwYWdlIHJlZnJlc2hcbiAgICAgICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2FwcGVuZCB0byBsZWZ0IHNpZGVcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIGZvcm1MZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIFxuICAgICAgICAvL2FkZCBjbGFzc1xuICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcblxuICAgICAgICByZXR1cm4geyB0aXRsZUxhYmVsLCB0aXRsZUlucHV0IH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1EZXNjcmlwdGlvbihmb3JtTGVmdCkge1xuXG4gICAgICAgIC8vY3JlYXRlIGRlc2NyaXB0aW9uIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24gKG9wdGlvbmFsKScpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnJvd3MgPSAyO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIGxlZnQgc2lkZSBcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGZvcm1MZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIHJldHVybiB7IGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybURhdGUoZm9ybVJpZ2h0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgZGF0ZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZScpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcblxuICAgICAgICAvL2FwcGVuZCB0byByaWdodCBzaWRlXG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgICAgICAvL2FkZCBjbGFzc1xuICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1kYXRlJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZGF0ZUxhYmVsLCBkYXRlSW5wdXQgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybVByaW9yaXR5U2VsZWN0b3IoZm9ybVJpZ2h0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgcHJpb3JpdHkgc2VsZWN0aW9uIGRyb3Bib3ggYW5kIG9wdGlvbnNcbiAgICAgICAgY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1zZWxlY3Rpb24nKTtcbiAgICAgICAgLy8gc2VsZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgICAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LXNlbGVjdGlvbicpO1xuICAgICAgICAvLyBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAvLyBwbGFjZWhvbGRlck9wdGlvbi50ZXh0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgLy8gcGxhY2Vob2xkZXJPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBwbGFjZWhvbGRlck9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICBvcHRpb24xLnRleHQgPSAnTG93IChQcmlvcml0eSknO1xuICAgICAgICBvcHRpb24xLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24yLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgIG9wdGlvbjIudGV4dCA9ICdNZWRpdW0nO1xuICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjMudmFsdWUgPSAnaGlnaCc7XG4gICAgICAgIG9wdGlvbjMudGV4dCA9ICdIaWdoJztcblxuICAgICAgICAvL2FwcGVuZCB0byByaWdodCBzaWRlXG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbCk7XG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChzZWxlY3RJbnB1dCk7XG4gICAgICAgIC8vIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICAgICAgICAvL2FkZCBjbGFzc1xuICAgICAgICBzZWxlY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpO1xuXG4gICAgICAgIHJldHVybiB7IHNlbGVjdExhYmVsLCBzZWxlY3RJbnB1dCwgb3B0aW9uMSwgb3B0aW9uMiwgb3B0aW9uMyB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtQnV0dG9ucyhmb3JtQm90dG9tKSB7XG5cbiAgICAgICAgLy9jcmVhdGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIGJvdHRvbVxuICAgICAgICBmb3JtQm90dG9tLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1idXR0b24nKTtcbiAgICAgICAgZm9ybUJvdHRvbS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwtYnV0dG9uJylcblxuICAgICAgICAvL2FkZCBjbGFzc2VzXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJylcbiAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idXR0b24nKTsgICAgXG5cbiAgICAgICAgcmV0dXJuIHsgc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24gfTtcbiAgICB9XG59IiwiaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2FsbFRhc2tzLmpzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2RvLWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tICcuL3Rhc2stZm9ybS1hY3Rpb25zLmpzJztcbmltcG9ydCB7IHBhZ2VFbGVtZW50c09iamVjdCB9IGZyb20gJy4vcGFnZS1lbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBkYXlzUXVlc3RPYmplY3QgfSBmcm9tICcuL3RvZGF5LmpzJztcblxuXG5leHBvcnQgY29uc3Qgd2Vla3NRdWVzdE9iamVjdCA9IHtcbiAgICBcbiAgICB3ZWVrc1F1ZXN0UGFnZSgpIHtcbiAgICAgICAgLy9jbGVhciB0aGUgcGFnZVxuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAvL2ltcG9ydCBlbGVtZW50c1xuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlUGFnZVRpdGxlKCk7XG5cbiAgICAgICAgLy9hcHBlbmQgdG9vbHMgdG8gcGFnZVxuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9nZXQgd2Vla3MncyBkYXRlXG4gICAgICAgIGNvbnN0IHsgc3RhcnRPZldlZWssIGVuZE9mV2VlayB9ID0gd2Vla3NRdWVzdE9iamVjdC5nZXRXZWVrUmFuZ2UoKTtcblxuICAgICAgICAvL2dldCB2YXJpYWJsZXMgdG8gZGlzcGxheSBpbiBoZWFkZXJcbiAgICAgICAgbGV0IHN0YXJ0T2ZXZWVrRGF5ID0gc3RhcnRPZldlZWsuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgc3RhcnRPZldlZWtNb250aCA9IG5ldyBEYXRlKHN0YXJ0T2ZXZWVrKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICAgIGxldCBlbmRPZldlZWtEYXkgPSBlbmRPZldlZWsuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgZW5kT2ZXZWVrTW9udGggPSBuZXcgRGF0ZShlbmRPZldlZWspLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgbW9udGg6ICdzaG9ydCcgfSk7XG5cbiAgICAgICAgLy91cGRhdGUgcGFnZSB0aXRsZVxuICAgICAgICBpZiAoc3RhcnRPZldlZWtNb250aCAhPT0gZW5kT2ZXZWVrTW9udGgpIHtcbiAgICAgICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGBXZWVrJ3MgUXVlc3RzOiAke3N0YXJ0T2ZXZWVrTW9udGh9ICR7c3RhcnRPZldlZWtEYXl9IC0gJHtlbmRPZldlZWtNb250aH0gJHtlbmRPZldlZWtEYXl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGBXZWVrJ3MgUXVlc3RzOiAke3N0YXJ0T2ZXZWVrTW9udGh9ICR7c3RhcnRPZldlZWtEYXl9IC0gJHtlbmRPZldlZWtEYXl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZmlsdGVyIHdlZWtzJ3MgdGFza3NcbiAgICAgICAgbGV0IHdlZWtzVGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGFza0RhdGUgPj0gc3RhcnRPZldlZWsgJiYgdGFza0RhdGUgPD0gZW5kT2ZXZWVrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9kaXNwbGF5IGZpbHRlcmVkIGFycmF5IHRvIGRvbVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW5kZXJUYXNrcyh3ZWVrc1Rhc2tzLCBib2R5Q29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgLy90YXNrcyB0YXNrcyB0aGlzIHdlZWsgbWVzc2FnZVxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGlmKCF0YXNrQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBkYXlzUXVlc3RPYmplY3Quc2hvd05vVGFza1RvZGF5KGJvZHlDb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IG5vVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby10YXNrJyk7XG4gICAgICAgICAgICBub1Rhc2sudGV4dENvbnRlbnQgPSAnTm8gUXVlc3RzIER1ZSBUaGlzIFdlZWsnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdlZWtzVGFza3M7XG4gICAgfSxcblxuICAgIGdldFdlZWtSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7IC8vMCAoc3VuKSB0byA2IChzYXQpXG4gICAgICAgIFxuICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBjdXJyZW50IGRheSBhbmQgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIChzdW4pXG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZXZWVrRGlmZiA9IGN1cnJlbnREYXkgPT09IDAgPyAwIDogY3VycmVudERheTtcbiAgICBcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGJ5IHN1YnRyYWN0aW5nIHRoZSBkaWZmZXJlbmNlXG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuICAgICAgICBzdGFydE9mV2Vlay5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSAtIChzdGFydE9mV2Vla0RpZmYpKTsgICAgXG5cbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIGVuZCBvZiB0aGUgd2VlayBieSBhZGRpbmcgdGhlIHJlbWFpbmluZyBkYXlzIHVudGlsIHNhdFxuICAgICAgICBjb25zdCBlbmRPZldlZWsgPSBuZXcgRGF0ZShzdGFydE9mV2Vlayk7XG4gICAgICAgIGVuZE9mV2Vlay5zZXREYXRlKHN0YXJ0T2ZXZWVrLmdldERhdGUoKSArIDYpO1xuXG4gICAgICAgIC8vc2V0IGJlZ2lubmluZyB0aW1lIG9mIHdlZWsgdG8gc3VuZGF5IG1pZG5pZ2h0IG9mIGZpcnN0IGRheVxuICAgICAgICBzdGFydE9mV2Vlay5zZXRIb3VycygwLCAwLCAwKTtcblxuICAgICAgICAvL3NldCBlbmQgdGltZSBvZiB3ZWVrIHRvIDExOjU5cG0gb2YgbGFzdCBkYXlcbiAgICAgICAgZW5kT2ZXZWVrLnNldEhvdXJzKDIzLCA1OSwgNTkpO1xuICAgIFxuICAgICAgICByZXR1cm4geyBzdGFydE9mV2VlaywgZW5kT2ZXZWVrIH07XG4gICAgfVxufTsiLCJpbXBvcnQgeyBib2R5Q29udGVudENvbnRhaW5lciB9IGZyb20gJy4vYWxsVGFza3MuanMnO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG8tZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBmb3JtQWN0aW9uc09iamVjdCB9IGZyb20gJy4vdGFzay1mb3JtLWFjdGlvbnMuanMnO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSAnLi9wYWdlLWVsZW1lbnRzLmpzJztcblxuLy9sb2FkIHRoZSBkYXkncyBxdWVzdCBwYWdlXG5leHBvcnQgY29uc3QgZGF5c1F1ZXN0T2JqZWN0ID0ge1xuICAgIFxuICAgIGRheXNRdWVzdFBhZ2UoKSB7XG4gICAgICAgIC8vY2xlYXIgdGhlIHBhZ2VcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgLy9pbXBvcnQgZWxlbWVudHNcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZVBhZ2VUaXRsZSgpO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvb2xzIHRvIHBhZ2VcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdG9kYXlzRGF0ZSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IHRoaXNNb250aCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBtb250aDogJ3Nob3J0JyB9KTtcbiAgICAgICAgbGV0IHRoaXNZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICAvL3VwZGF0ZSBwYWdlIHRpdGxlXG4gICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGBEYXkncyBRdWVzdHM6ICAke3RvZGF5c0RhdGV9ICR7dGhpc01vbnRofSAke3RoaXNZZWFyfWA7XG4gICAgICAgIFxuICAgICAgICAvL2dldCB0b2RheSdzIGRhdGVcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkYXlzUXVlc3RPYmplY3QuZ2V0VG9kYXlEYXRlKCk7XG5cbiAgICAgICAgLy9maWx0ZXIgdG9kYXkncyB0YXNrc1xuICAgICAgICBsZXQgdG9kYXlzVGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmR1ZURhdGUgPT0gdG9kYXkpO1xuXG4gICAgICAgIC8vZGlzcGxheSBmaWx0ZXJlZCBhcnJheSB0byBkb21cbiAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVuZGVyVGFza3ModG9kYXlzVGFza3MsIGJvZHlDb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGlmKCF0YXNrQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBkYXlzUXVlc3RPYmplY3Quc2hvd05vVGFza1RvZGF5KGJvZHlDb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b2RheXNUYXNrcztcbiAgICB9LFxuXG4gICAgc2hvd05vVGFza1RvZGF5KGJvZHlDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IG5vVGFza01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm9UYXNrTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCduby10YXNrJyk7XG4gICAgICAgIG5vVGFza01lc3NhZ2UudGV4dENvbnRlbnQgPSAnTm8gUXVlc3RzIER1ZSBUb2RheSc7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vVGFza01lc3NhZ2UpO1xuXG4gICAgICAgIHJldHVybiBub1Rhc2tNZXNzYWdlO1xuICAgIH0sXG5cbiAgICBnZXRUb2RheURhdGUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgbG9jYWxTdG9yYWdlT2JqZWN0IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG4vL3Rhc2sgYXJyYXkgdG8gc3RvcmUgYWxsIHRhc2tzXG5leHBvcnQgY29uc3QgdGFza3MgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW107XG5cbmV4cG9ydCBjb25zdCB0YXNrQ291bnRlck9iamVjdCA9IHtcbiAgICB0YXNrQ291bnRlcjogMCxcbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RDb3VudGVyT2JqZWN0ID0ge1xuICAgIHByb2plY3RJRDogMCxcbn1cblxuLy9jcmVhdGVzIHRhc2sgb2JqZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBzdGF0dXM6ICdpbmNvbXBsZXRlJyxcbiAgICAgICAgdGFza0lEOiB0YXNrQ291bnRlck9iamVjdC50YXNrQ291bnRlcixcbiAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lLFxuICAgIH07XG5cbiAgICB0YXNrQ291bnRlck9iamVjdC50YXNrQ291bnRlcisrO1xuXG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrcyk7XG5cbiAgICAvL3NhdmUgdGFza3MgdG8gbG9jYWwgc3RvcmFnZSBhZnRlciBjcmVhdGluZyBhIG5ldyB0YXNrXG4gICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcblxuICAgIHJldHVybiB0YXNrO1xufVxuXG4vL3NlbmQgdGFzayBhcnJheSB0byBiZSBkaXNwbGF5ZWRcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrcygpIHtcblxuICAgIC8vcmV0cmlldmUgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlIGJlZm9yZSByZXR1cm5pbmdcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlT2JqZWN0LmdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlT2JqZWN0LmdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=