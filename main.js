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
    --mid-priority: orange;
    --high-priority: #ff4141;
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
    /* overflow: hidden; */
    white-space: nowrap;
}

.home-tasks {
    position: sticky;
    top: 0;
}

.project-tasks {
    position: sticky;
    top: 17rem;
}

.home-tasks,
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

li > button,
#body-content-container > button,
#submit-button,
#cancel-button {
    color: var(--font-color);
    transition: ease-in-out 0.3s;
    font-size: 1.5rem;
    font-family: 'Secondary-font';
    padding: 0;
    background: none;
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
    font-size: 3rem;
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
    border: 1px solid   var(--high-priority);
}

/* task container (priority)*/
.task-container-low-priority {
    border-left: 2px solid var(--low-priority);
}

.task-container-mid-priority {
    border-left: 2px solid var(--mid-priority);
}

.task-container-high-priority {
    border-left: 2px solid var(--high-priority);
}

.task-container:hover {
    box-shadow: 5px 10px 10px #00000063;
}

.task-delete {
    background: none;
    color: white;
    width: 3rem;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* css reset */\n*, \nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --primary-color: #2d2749;\n    --secondary-color: #df72a9;\n    --border-radius: 2rem;\n    --border-color: red;\n    --border: 1px solid var(--border-color);\n    --font-color: white;\n    --gap: 1rem;\n    --cancel-color: #a52f2f;\n    --submit-color: #026e02cf;\n    --background-image: url(./imgs/backdrop-2.jpg);\n    --low-priority: yellow;\n    --mid-priority: orange;\n    --high-priority: #ff4141;\n}\n\n@font-face {\n    font-family: 'Primary-font';\n    src: url('./fonts/QueensidesMedium-x30zV.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Secondary-font';\n    src: url('./fonts/Ubuntu-n1M0.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n.content {\n    height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 0.5fr 4fr 0.25fr;\n}\n\n/* header */\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Primary-font';\n    color: var(--font-color);\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    font-size: 5rem;\n    gap: var(--gap);\n}\n\n.svg {\n    height: 6rem;\n    padding-left: 1rem;\n    filter: invert(1);\n}\n\n/* side-bar */\n.side-bar {\n    grid-area: 2 / 1 / 3 / 2;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    color: var(--font-color);\n    font-family: 'Secondary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 2rem;\n    /* overflow: hidden; */\n    white-space: nowrap;\n}\n\n.home-tasks {\n    position: sticky;\n    top: 0;\n}\n\n.project-tasks {\n    position: sticky;\n    top: 17rem;\n}\n\n.home-tasks,\n.project-tasks {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: var(--gap);\n    width: 80%;\n    list-style: none;\n    padding: 1.5rem;\n}\n\n.side-bar-title {\n    border-bottom: var(--border);\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n@keyframes bounce {\n    0% {\n        transform: translateY(10px);\n    }\n    50% {\n        transform: translateY(-10px);\n    }\n    100% {\n        transform: translateY(10px);\n    }\n}\n\n@keyframes pulse {\n    0% {\n        transform: scale(1.0);\n    }\n    50% {\n        transform: scale(1.15);\n    }\n    100% {\n        transform: scale(1.0);\n    }\n}\n\nli > button,\n#body-content-container > button,\n#submit-button,\n#cancel-button {\n    color: var(--font-color);\n    transition: ease-in-out 0.3s;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    padding: 0;\n    background: none;\n}\n\n#body-content-container > button {\n    animation: bounce 8s infinite;\n    align-self: center;\n    box-sizing: border-box;\n    padding: 0.7rem;\n}\n\n#body-content-container > button:hover {\n    cursor: pointer;\n    border-radius: var(--border-radius);\n    background: white;\n    color: black;\n}\n\nli > button:hover {\n    cursor: pointer;\n    transform: translateX(1rem);\n}\n\n/* main */\n.body {\n    grid-area: 2 / 2 / 3 / 3;\n    background: var(--primary-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#body-content-container {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    border: var(--border);\n    color: var(--font-color);\n    font-family: 'Primary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: var(--gap);\n    overflow-y: auto;\n    padding-bottom: 1rem;\n}\n\n.body-title {\n    font-size: 3rem;\n    border-bottom: var(--border);\n    border-right: var(--border);\n    padding: 1rem;\n}\n\n.form-container{\n    height: 12rem;\n    width: 90%;\n    background: url(./imgs/backdrop-2.jpg);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    box-sizing: border-box;\n    border: var(--border);\n    align-self: center;\n}\n\n.form {\n    display: grid;\n    grid-template-rows: 3fr 1fr;\n    grid-template-columns: 2fr 1fr;\n    height: 100%;\n    padding: 0.5rem;\n    box-sizing: border-box;\n    gap: 1.5rem;\n}\n\n.form-left,\n.form-right {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.form-left {\n    grid-area: 1 / 1 / 2 / 2;\n    overflow: auto;\n}\n\n.form-right {\n    grid-area: 1 / 2 / 2 / 3;\n}\n\n.form-bottom {\n    grid-area: 2 / 1 / 3 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n/* submit-button/add-button */\n.submit-button:hover {\n    box-shadow: 0px 5px 0px var(--submit-color);\n    color: var(--submit-color);\n    border-left: 1px solid var(--submit-color);\n    border-right: 1px solid var(--submit-color);\n}\n\n.cancel-button:hover {\n    box-shadow: 0px 5px 0px var(--cancel-color);\n    color: var(--cancel-color);\n    border-left: 1px solid var(--cancel-color);\n    border-right: 1px solid var(--cancel-color);\n}\n\n.submit-button, \n.cancel-button {\n    height: 2.5rem;\n    width: 7rem;\n    border-radius: 0.5rem;\n}\n\n.form-bottom > button:hover {\n    cursor: pointer;\n    transform: translateY(-10px);\n}\n\n.form-title,\n.form-description,\n.form-date,\n.form-select {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    border-radius: 0.5rem;\n    outline: none;\n}\n\n.form-title {\n    height: 1rem;\n    width: 90%;\n}\n\n.form-description {\n    height: 2.5rem;\n    width: 90%;\n}\n\n.form-date,\n.form-select {\n    height: 2rem;\n    width: 12rem;\n    padding: 0;\n    padding-left: 0.2rem;\n}\n\n.task-container {\n    transition: ease-in-out 0.3s;\n    box-sizing: border-box;\n    width: 90%;\n    min-width: 37rem;\n    height: auto;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    /* border-left: 1px solid var(--border-color); */\n    gap: 0.5rem;\n    align-self: center;\n    background-color: #3b3361;\n    overflow: hidden;\n    /* white-space: nowrap; */\n}\n\n.task-element-left,\n.task-element-right {\n    box-sizing: border-box;\n    font-family: 'Secondary-font';\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    width: 100%;\n    display: flex;\n    gap: 3rem;\n    align-items: center;\n}\n\n.task-element-left {\n    justify-content: flex-start;\n}\n\n.task-element-right {\n    justify-content: flex-end;\n    font-size: 1rem;\n}\n\n.task-complete-button {\n    height: 1.5rem;\n    width: 1.5rem;\n    border: 2px solid white;\n    background: none;\n    border-radius: var(--border-radius);\n    flex-shrink: 0;\n}\n\n.completed-task {\n    background: #00f9003d;\n    border-left: 2px solid #04ff04;\n    color: #ffffff69;\n}\n\n.completed-task-text {\n    text-decoration: line-through;\n}\n\n.completed-checked {\n    border: none;   \n    background-image: url(./imgs/checked.png);\n    background-size: cover;\n}\n\n.task-title:hover,\n.task-description:hover,\n.task-due-date:hover,\n.task-complete-button:hover,\n.task-priority:hover,\n.task-delete:hover {\n    cursor: pointer;\n}\n\n.task-title {\n    font-size: 1.5rem;\n}\n\n.task-description {\n    font-size: 1rem;\n}\n\n.task-due-date {\n    width: 6.1rem;\n}\n\n/* priority emblem itself*/\n.task-priority {\n    border-radius: var(--border-radius);\n    padding: 5px 15px 5px 15px;\n    background: none;\n    color: var(--font-color)\n}\n\n.task-priority-low,\n.task-priority-mid,\n.task-priority-high {\n    width: 5.5rem;\n}\n\n.task-priority-low {\n    color: var(--low-priority);\n    border: 1px solid var(--low-priority);\n}\n\n.task-priority-mid {\n    color: var(--mid-priority);\n    border: 1px solid var(--mid-priority);\n}\n\n.task-priority-high {\n    color: var(--high-priority);\n    border: 1px solid   var(--high-priority);\n}\n\n/* task container (priority)*/\n.task-container-low-priority {\n    border-left: 2px solid var(--low-priority);\n}\n\n.task-container-mid-priority {\n    border-left: 2px solid var(--mid-priority);\n}\n\n.task-container-high-priority {\n    border-left: 2px solid var(--high-priority);\n}\n\n.task-container:hover {\n    box-shadow: 5px 10px 10px #00000063;\n}\n\n.task-delete {\n    background: none;\n    color: white;\n    width: 3rem;\n}\n\nfooter {\n    grid-area: 3 / 1 / 4 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Secondary-font';\n    color: white;\n    font-size: 1rem;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n}\n\n.content > div {\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-factory */ "./src/todo-factory.js");
/* harmony import */ var _page_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-elements */ "./src/page-elements.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-form */ "./src/task-form.js");
/* harmony import */ var _task_form_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-form-actions */ "./src/task-form-actions.js");
/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editTasks */ "./src/editTasks.js");






const bodyContentContainer = document.getElementById('body-content-container');

//main function to populate the page
function createAllQuestsPage() {
    const titleElement = _page_elements__WEBPACK_IMPORTED_MODULE_1__.pageElementsObject.createPageTitle();
    const addTaskButton = _page_elements__WEBPACK_IMPORTED_MODULE_1__.pageElementsObject.createAddTaskButton();
    const formContainer = _page_elements__WEBPACK_IMPORTED_MODULE_1__.pageElementsObject.createFormContainer();

    //click to add new task
    addTaskButton.addEventListener('click', function() {
        handleAddTask(addTaskButton, formContainer);
    });

    //click to toggle task completion
    bodyContentContainer.addEventListener('click', function(event) {
        _editTasks__WEBPACK_IMPORTED_MODULE_4__.editTasksObject.handleCompleteTask(event);
    });

    //click to delete task
    bodyContentContainer.addEventListener('click', function(event) {
        _editTasks__WEBPACK_IMPORTED_MODULE_4__.editTasksObject.handleDeleteTask(event);
    });

    //click to edit tasks
    bodyContentContainer.addEventListener('dblclick', function(event) {
        _editTasks__WEBPACK_IMPORTED_MODULE_4__.editTasksObject.handleTaskEdit(event)
    });

    return { titleElement, addTaskButton };
}

//creates the task creation form
function handleAddTask(addTaskButton, formContainer) {
    addTaskButton.disabled = true;

    const { form, formLeft, formRight, formBottom } = _task_form__WEBPACK_IMPORTED_MODULE_2__.taskFormObject.createFormLayout(formContainer);
    bodyContentContainer.appendChild(formContainer);
    formContainer.appendChild(form);

    //call form functions to fill in the form...
    _task_form__WEBPACK_IMPORTED_MODULE_2__.taskFormObject.createFormTitle(formLeft);
    _task_form__WEBPACK_IMPORTED_MODULE_2__.taskFormObject.createFormDescription(formLeft);
    _task_form__WEBPACK_IMPORTED_MODULE_2__.taskFormObject.createFormDate(formRight);
    _task_form__WEBPACK_IMPORTED_MODULE_2__.taskFormObject.createFormPrioritySelector(formRight);
    const { submitButton, cancelButton } = _task_form__WEBPACK_IMPORTED_MODULE_2__.taskFormObject.createFormButtons(formBottom);

    //attach event listeners to created submit/cancel buttons
    _task_form_actions__WEBPACK_IMPORTED_MODULE_3__.formActionsObject.attachSubmitListener(submitButton, cancelButton, formContainer, addTaskButton);
    _task_form_actions__WEBPACK_IMPORTED_MODULE_3__.formActionsObject.attachCancelListener(submitButton, cancelButton, formContainer, addTaskButton);
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
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-factory */ "./src/todo-factory.js");
/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allTasks */ "./src/allTasks.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");




const editTasksObject = {

    //matches id of task object and dom element
    findClickedTask(event) {
        const taskComplete = event.target.classList.contains('task-complete-button');

        if (taskComplete) {
            const taskContainer = event.target.closest('.task-container');
            const taskContainerID = parseInt(taskContainer.dataset.taskId);

            return _todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks.find(task => task.taskID == taskContainerID);
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

            const indexToRemove = _todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks.findIndex(task => task.taskID === taskContainerID);

            _todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(indexToRemove, 1);
            _allTasks__WEBPACK_IMPORTED_MODULE_1__.bodyContentContainer.removeChild(taskContainer);

            //update local storage
            _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks);
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
        _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks);
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
        _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(_todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks);
    },

    //edit task after creation
    handleTaskEdit(event) {

        //identify elements
        const taskContainer = event.target.closest('.task-container');
        const taskElementLeft = event.target.closest('.task-element-left');
        const taskElementRight = event.target.closest('.task-element-right');
        const taskTitle = event.target.closest('.task-title');
        const taskDescription = event.target.closest('.task-description');
        const taskDueDate = event.target.closest('.task-due-date');
        const taskPriority = event.target.closest('.task-priority');

        //create element
        const editInputBox = document.createElement('input');
        editInputBox.classList.add('form-title');

        //edit the task title
        if (taskTitle) {        
            const taskIDNumber = taskContainer.getAttribute('data-task-id');

            //add input to edit title
            taskElementLeft.replaceChild(editInputBox, taskTitle);
            editInputBox.focus();

            //take edited title and submit
            editInputBox.addEventListener('keyup', function(event) {
                if (event.key === 'Enter' && editInputBox.value.trim() !== '') {
                    
                    //extract values
                    const tasks = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
                    const task = tasks.find(task => task.taskID == taskIDNumber);

                    //update task title
                    task.title = editInputBox.value;

                    //update dom display
                    taskTitle.textContent = editInputBox.value;

                    //re-append element
                    taskElementLeft.replaceChild(taskTitle, editInputBox);

                    //update local storage
                    _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(tasks);
                }
            });
        }

        //edit the task description
        if (taskDescription) {        
            const taskIDNumber = taskContainer.getAttribute('data-task-id');

            //add input to edit title
            taskElementLeft.replaceChild(editInputBox, taskDescription);
            editInputBox.focus();

            //take edited title and submit
            editInputBox.addEventListener('keyup', function(event) {
                if (event.key === 'Enter' && editInputBox.value.trim() !== '') {
                    
                    //extract values
                    const tasks = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
                    const task = tasks.find(task => task.taskID == taskIDNumber);

                    //update task title
                    task.description = editInputBox.value;

                    //update dom display
                    taskDescription.textContent = editInputBox.value;

                    //re-append element
                    taskElementLeft.replaceChild(taskDescription, editInputBox);

                    //update local storage
                    _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(tasks);
                }
            });
        }

        //edit the task due date
        if (taskDueDate) {        
            editInputBox.type = 'date';
            const taskIDNumber = taskContainer.getAttribute('data-task-id');

            //add input to edit title
            taskElementRight.replaceChild(editInputBox, taskDueDate);

            //take edited title and submit
            editInputBox.addEventListener('change', function(event) {
                    
                //extract values
                const tasks = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
                const task = tasks.find(task => task.taskID == taskIDNumber);

                //update task title
                task.dueDate = editInputBox.value;

                //update dom display
                taskDueDate.innerText = editInputBox.value;

                //re-append element
                taskElementRight.replaceChild(taskDueDate, editInputBox);
        
                //update local storage
                _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(tasks);
            });
        }

        //edit priority button
        if (taskPriority) {

            //extract values
            const taskIDNumber = taskContainer.getAttribute('data-task-id');
            const tasks = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
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
                    _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(tasks);
                    break;
        
                case taskPriority.classList.contains('task-priority-mid'):
                    taskPriority.classList.remove('task-priority-mid');
                    taskContainer.classList.remove('task-container-mid-priority');
                    taskPriority.classList.add('task-priority-high');
                    taskContainer.classList.add('task-container-high-priority');
                    task.priority = 'high';
                    taskPriority.textContent = 'high';

                    //update local storage
                    _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(tasks);
                    break;
        
                case taskPriority.classList.contains('task-priority-high'):
                    taskPriority.classList.remove('task-priority-high');
                    taskContainer.classList.remove('task-container-high-priority');
                    taskPriority.classList.add('task-priority-low');
                    taskContainer.classList.add('task-container-low-priority');
                    task.priority = 'low';
                    taskPriority.textContent = 'low';

                    //update local storage
                    _local_storage__WEBPACK_IMPORTED_MODULE_2__.localStorageObject.saveTasksToLocalStorage(tasks);
                    break;
            }
        }
    }
};

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
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-factory */ "./src/todo-factory.js");


const localStorageObject = {

    //save tasks to local storage
    saveTasksToLocalStorage(tasks) {
        const tasksJSON = JSON.stringify(tasks);
        localStorage.setItem('tasks', tasksJSON);
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
    }
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
/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTasks */ "./src/editTasks.js");




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

            formActionsObject.addTask();
            const tasks = (0,_todo_factory__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
            formActionsObject.updateTaskList(tasks);
            addTaskButton.disabled = false;
            formActionsObject.removeForm(formContainer);
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
        bodyContentContainer.appendChild(addTaskButton);
    },

    renderTasks(tasks, bodyContentContainer) { 
            
        tasks.forEach(task => {

        const taskContainer = document.createElement('div');
        bodyContentContainer.appendChild(taskContainer);

        //prevents duplicate entries
        // taskContainer.innerHTML = '';
        
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
            taskDescription.textContent = '(details for thine quest not found)';
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

/***/ "./src/todo-factory.js":
/*!*****************************!*\
  !*** ./src/todo-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   taskCounterObject: () => (/* binding */ taskCounterObject),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");


//task array to store all tasks
const tasks = [];

const taskCounterObject = {
    taskCounter: 0,
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
    };

    taskCounterObject.taskCounter++;

    tasks.push(task);
    console.log(tasks);

    //save tasks to local storage after creating a new task
    _local_storage__WEBPACK_IMPORTED_MODULE_0__.localStorageObject.saveTasksToLocalStorage(tasks);

    return task;
}

//send task array to be displayed
function getTasks() {

    //retrieve tasks from local storage before returning
    return _local_storage__WEBPACK_IMPORTED_MODULE_0__.localStorageObject.getTasksFromLocalStorage();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _allTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allTasks.js */ "./src/allTasks.js");
/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-factory.js */ "./src/todo-factory.js");
/* harmony import */ var _task_form_actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-form-actions.js */ "./src/task-form-actions.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");






document.addEventListener('DOMContentLoaded', allQuestsPage);

function allQuestsPage() {
    //import task creation tools
    const { titleElement, addTaskButton } = (0,_allTasks_js__WEBPACK_IMPORTED_MODULE_1__.createAllQuestsPage)();

    //append tools to page
    const content = document.getElementById('body-content-container');
    content.appendChild(titleElement);
    content.appendChild(addTaskButton);

    const retrievedTasks = _local_storage_js__WEBPACK_IMPORTED_MODULE_4__.localStorageObject.getTasksFromLocalStorage();

    _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length = 0;
    _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.push(...retrievedTasks);

    //prevent counter from starting with wrong id number on page reload
    if (_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length !== 0) {
        let previousTaskId = _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks[_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length - 1].taskID;
        _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.taskCounterObject.taskCounter = previousTaskId + 1;
    }

    _task_form_actions_js__WEBPACK_IMPORTED_MODULE_3__.formActionsObject.updateTaskList(_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__.tasks);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLGlIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFB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QUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDK0I7QUFDUztBQUNGO0FBQ0g7O0FBRXhEOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4QixFQUFFLGlFQUFtQjs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGlFQUFrQjs7QUFFN0MsSUFBSSxtREFBSztBQUNULElBQUksbURBQUs7O0FBRVQ7QUFDQSxRQUFRLG1EQUFLO0FBQ2IsNkJBQTZCLG1EQUFLLENBQUMsbURBQUs7QUFDeEMsUUFBUSwrREFBaUI7QUFDekI7O0FBRUEsSUFBSSxvRUFBaUIsZ0JBQWdCLG1EQUFLO0FBQzFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1mb3JtLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvYmFja2Ryb3AtMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1ZWVuc2lkZXNNZWRpdW0teDMwelYudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9VYnVudHUtbjFNMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvY2hlY2tlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGNzcyByZXNldCAqL1xuKiwgXG5odG1sIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMmQyNzQ5O1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZGY3MmE5O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmVkO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAtLWZvbnQtY29sb3I6IHdoaXRlO1xuICAgIC0tZ2FwOiAxcmVtO1xuICAgIC0tY2FuY2VsLWNvbG9yOiAjYTUyZjJmO1xuICAgIC0tc3VibWl0LWNvbG9yOiAjMDI2ZTAyY2Y7XG4gICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgLS1sb3ctcHJpb3JpdHk6IHllbGxvdztcbiAgICAtLW1pZC1wcmlvcml0eTogb3JhbmdlO1xuICAgIC0taGlnaC1wcmlvcml0eTogI2ZmNDE0MTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pLCBmb3JtYXQoJ3R0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSwgZm9ybWF0KCd0dGYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA0ZnIgMC4yNWZyO1xufVxuXG4vKiBoZWFkZXIgKi9cbmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG59XG5cbi5zdmcge1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi8qIHNpZGUtYmFyICovXG4uc2lkZS1iYXIge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhvbWUtdGFza3Mge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG4ucHJvamVjdC10YXNrcyB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDE3cmVtO1xufVxuXG4uaG9tZS10YXNrcyxcbi5wcm9qZWN0LXRhc2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICB3aWR0aDogODAlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMS41cmVtO1xufVxuXG4uc2lkZS1iYXItdGl0bGUge1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbn1cblxubGkgPiBidXR0b24sXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbixcbiNzdWJtaXQtYnV0dG9uLFxuI2NhbmNlbC1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b24ge1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDhzIGluZmluaXRlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAuN3JlbTtcbn1cblxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmxpID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xufVxuXG4vKiBtYWluICovXG4uYm9keSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2JvZHktY29udGVudC1jb250YWluZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5ib2R5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlcik7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmZvcm0tY29udGFpbmVye1xuICAgIGhlaWdodDogMTJyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uZm9ybS1sZWZ0LFxuLmZvcm0tcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5mb3JtLWxlZnQge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZvcm0tcmlnaHQge1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbn1cblxuLmZvcm0tYm90dG9tIHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLyogc3VibWl0LWJ1dHRvbi9hZGQtYnV0dG9uICovXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tc3VibWl0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWNvbG9yKTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXN1Ym1pdC1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLWNhbmNlbC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNhbmNlbC1jb2xvcik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYW5jZWwtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XG59XG5cbi5zdWJtaXQtYnV0dG9uLCBcbi5jYW5jZWwtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5mb3JtLWJvdHRvbSA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG59XG5cbi5mb3JtLXRpdGxlLFxuLmZvcm0tZGVzY3JpcHRpb24sXG4uZm9ybS1kYXRlLFxuLmZvcm0tc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmZvcm0tZGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5mb3JtLWRhdGUsXG4uZm9ybS1zZWxlY3Qge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMTJyZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtaW4td2lkdGg6IDM3cmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7ICovXG4gICAgZ2FwOiAwLjVyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjMzNjE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xufVxuXG4udGFzay1lbGVtZW50LWxlZnQsXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3JlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1lbGVtZW50LWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnRhc2stZWxlbWVudC1yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi50YXNrLWNvbXBsZXRlLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY29tcGxldGVkLXRhc2sge1xuICAgIGJhY2tncm91bmQ6ICMwMGY5MDAzZDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNGZmMDQ7XG4gICAgY29sb3I6ICNmZmZmZmY2OTtcbn1cblxuLmNvbXBsZXRlZC10YXNrLXRleHQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uY29tcGxldGVkLWNoZWNrZWQge1xuICAgIGJvcmRlcjogbm9uZTsgICBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRhc2stdGl0bGU6aG92ZXIsXG4udGFzay1kZXNjcmlwdGlvbjpob3Zlcixcbi50YXNrLWR1ZS1kYXRlOmhvdmVyLFxuLnRhc2stY29tcGxldGUtYnV0dG9uOmhvdmVyLFxuLnRhc2stcHJpb3JpdHk6aG92ZXIsXG4udGFzay1kZWxldGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGFzay1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1kdWUtZGF0ZSB7XG4gICAgd2lkdGg6IDYuMXJlbTtcbn1cblxuLyogcHJpb3JpdHkgZW1ibGVtIGl0c2VsZiovXG4udGFzay1wcmlvcml0eSB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcbn1cblxuLnRhc2stcHJpb3JpdHktbG93LFxuLnRhc2stcHJpb3JpdHktbWlkLFxuLnRhc2stcHJpb3JpdHktaGlnaCB7XG4gICAgd2lkdGg6IDUuNXJlbTtcbn1cblxuLnRhc2stcHJpb3JpdHktbG93IHtcbiAgICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpO1xufVxuXG4udGFzay1wcmlvcml0eS1taWQge1xuICAgIGNvbG9yOiB2YXIoLS1taWQtcHJpb3JpdHkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XG59XG5cbi50YXNrLXByaW9yaXR5LWhpZ2gge1xuICAgIGNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAgIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xufVxuXG4vKiB0YXNrIGNvbnRhaW5lciAocHJpb3JpdHkpKi9cbi50YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcbn1cblxuLnRhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xufVxuXG4udGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcbn1cblxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4ICMwMDAwMDA2Mztcbn1cblxuLnRhc2stZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogM3JlbTtcbn1cblxuZm9vdGVyIHtcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmNvbnRlbnQgPiBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDs7Q0FFQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDJEQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwyREFBNkQ7SUFDN0QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwyREFBa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7O0FBRUEsV0FBVztBQUNYO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQSxhQUFhO0FBQ2I7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztBQUVBOzs7O0lBSUksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUEsU0FBUztBQUNUO0lBQ0ksd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1EQUFzQztJQUN0QywwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSwyQ0FBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDBDQUEwQztJQUMxQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDBDQUEwQztJQUMxQywyQ0FBMkM7QUFDL0M7O0FBRUE7O0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBOzs7O0lBSUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0RBQWdEO0lBQ2hELFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseURBQXlDO0lBQ3pDLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7O0lBTUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7OztJQUdJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix3Q0FBd0M7QUFDNUM7O0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY3NzIHJlc2V0ICovXFxuKiwgXFxuaHRtbCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktY29sb3I6ICMyZDI3NDk7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZGY3MmE5O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIC0tYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1nYXA6IDFyZW07XFxuICAgIC0tY2FuY2VsLWNvbG9yOiAjYTUyZjJmO1xcbiAgICAtLXN1Ym1pdC1jb2xvcjogIzAyNmUwMmNmO1xcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZ3MvYmFja2Ryb3AtMi5qcGcpO1xcbiAgICAtLWxvdy1wcmlvcml0eTogeWVsbG93O1xcbiAgICAtLW1pZC1wcmlvcml0eTogb3JhbmdlO1xcbiAgICAtLWhpZ2gtcHJpb3JpdHk6ICNmZjQxNDE7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1F1ZWVuc2lkZXNNZWRpdW0teDMwelYudHRmJyksIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9VYnVudHUtbjFNMC50dGYnKSwgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNGZyIDAuMjVmcjtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbn1cXG5cXG4uc3ZnIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4vKiBzaWRlLWJhciAqL1xcbi5zaWRlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmhvbWUtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAxN3JlbTtcXG59XFxuXFxuLmhvbWUtdGFza3MsXFxuLnByb2plY3QtdGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4uc2lkZS1iYXItdGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIH1cXG59XFxuXFxubGkgPiBidXR0b24sXFxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b24sXFxuI3N1Ym1pdC1idXR0b24sXFxuI2NhbmNlbC1idXR0b24ge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b24ge1xcbiAgICBhbmltYXRpb246IGJvdW5jZSA4cyBpbmZpbml0ZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxufVxcblxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxubGkgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbi5ib2R5IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmJvZHktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWdzL2JhY2tkcm9wLTIuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5mb3JtLWxlZnQsXFxuLmZvcm0tcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1sZWZ0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZvcm0tcmlnaHQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxufVxcblxcbi5mb3JtLWJvdHRvbSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLyogc3VibWl0LWJ1dHRvbi9hZGQtYnV0dG9uICovXFxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWNvbG9yKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLCBcXG4uY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1ib3R0b20gPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxufVxcblxcbi5mb3JtLXRpdGxlLFxcbi5mb3JtLWRlc2NyaXB0aW9uLFxcbi5mb3JtLWRhdGUsXFxuLmZvcm0tc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5mb3JtLWRlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5mb3JtLWRhdGUsXFxuLmZvcm0tc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4td2lkdGg6IDM3cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzMzYxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xcbn1cXG5cXG4udGFzay1lbGVtZW50LWxlZnQsXFxuLnRhc2stZWxlbWVudC1yaWdodCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lbGVtZW50LWxlZnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLWVsZW1lbnQtcmlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDBmOTAwM2Q7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA0ZmYwNDtcXG4gICAgY29sb3I6ICNmZmZmZmY2OTtcXG59XFxuXFxuLmNvbXBsZXRlZC10YXNrLXRleHQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbXBsZXRlZC1jaGVja2VkIHtcXG4gICAgYm9yZGVyOiBub25lOyAgIFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWdzL2NoZWNrZWQucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnRhc2stdGl0bGU6aG92ZXIsXFxuLnRhc2stZGVzY3JpcHRpb246aG92ZXIsXFxuLnRhc2stZHVlLWRhdGU6aG92ZXIsXFxuLnRhc2stY29tcGxldGUtYnV0dG9uOmhvdmVyLFxcbi50YXNrLXByaW9yaXR5OmhvdmVyLFxcbi50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDYuMXJlbTtcXG59XFxuXFxuLyogcHJpb3JpdHkgZW1ibGVtIGl0c2VsZiovXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sb3csXFxuLnRhc2stcHJpb3JpdHktbWlkLFxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcbiAgICB3aWR0aDogNS41cmVtO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sb3cge1xcbiAgICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbWlkIHtcXG4gICAgY29sb3I6IHZhcigtLW1pZC1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICAgdmFyKC0taGlnaC1wcmlvcml0eSk7XFxufVxcblxcbi8qIHRhc2sgY29udGFpbmVyIChwcmlvcml0eSkqL1xcbi50YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7XFxufVxcblxcbi50YXNrLWRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDNyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGFza3MsIGNyZWF0ZVRhc2ssIGdldFRhc2tzIH0gZnJvbSBcIi4vdG9kby1mYWN0b3J5XCI7XG5pbXBvcnQgeyBwYWdlRWxlbWVudHNPYmplY3QgfSBmcm9tIFwiLi9wYWdlLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyB0YXNrRm9ybU9iamVjdCB9IGZyb20gXCIuL3Rhc2stZm9ybVwiO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tIFwiLi90YXNrLWZvcm0tYWN0aW9uc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tzT2JqZWN0IH0gZnJvbSBcIi4vZWRpdFRhc2tzXCI7XG5cbmV4cG9ydCBjb25zdCBib2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG5cbi8vbWFpbiBmdW5jdGlvbiB0byBwb3B1bGF0ZSB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFsbFF1ZXN0c1BhZ2UoKSB7XG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZVBhZ2VUaXRsZSgpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlRm9ybUNvbnRhaW5lcigpO1xuXG4gICAgLy9jbGljayB0byBhZGQgbmV3IHRhc2tcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGhhbmRsZUFkZFRhc2soYWRkVGFza0J1dHRvbiwgZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvL2NsaWNrIHRvIHRvZ2dsZSB0YXNrIGNvbXBsZXRpb25cbiAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGVkaXRUYXNrc09iamVjdC5oYW5kbGVDb21wbGV0ZVRhc2soZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy9jbGljayB0byBkZWxldGUgdGFza1xuICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZWRpdFRhc2tzT2JqZWN0LmhhbmRsZURlbGV0ZVRhc2soZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy9jbGljayB0byBlZGl0IHRhc2tzXG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBlZGl0VGFza3NPYmplY3QuaGFuZGxlVGFza0VkaXQoZXZlbnQpXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyB0aXRsZUVsZW1lbnQsIGFkZFRhc2tCdXR0b24gfTtcbn1cblxuLy9jcmVhdGVzIHRoZSB0YXNrIGNyZWF0aW9uIGZvcm1cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soYWRkVGFza0J1dHRvbiwgZm9ybUNvbnRhaW5lcikge1xuICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgeyBmb3JtLCBmb3JtTGVmdCwgZm9ybVJpZ2h0LCBmb3JtQm90dG9tIH0gPSB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtTGF5b3V0KGZvcm1Db250YWluZXIpO1xuICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAvL2NhbGwgZm9ybSBmdW5jdGlvbnMgdG8gZmlsbCBpbiB0aGUgZm9ybS4uLlxuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1UaXRsZShmb3JtTGVmdCk7XG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybURlc2NyaXB0aW9uKGZvcm1MZWZ0KTtcbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtRGF0ZShmb3JtUmlnaHQpO1xuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1Qcmlvcml0eVNlbGVjdG9yKGZvcm1SaWdodCk7XG4gICAgY29uc3QgeyBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiB9ID0gdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybUJ1dHRvbnMoZm9ybUJvdHRvbSk7XG5cbiAgICAvL2F0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gY3JlYXRlZCBzdWJtaXQvY2FuY2VsIGJ1dHRvbnNcbiAgICBmb3JtQWN0aW9uc09iamVjdC5hdHRhY2hTdWJtaXRMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbik7XG4gICAgZm9ybUFjdGlvbnNPYmplY3QuYXR0YWNoQ2FuY2VsTGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pO1xufSIsImltcG9ydCB7IHRhc2tzLCBjcmVhdGVUYXNrLCBnZXRUYXNrcyB9IGZyb20gXCIuL3RvZG8tZmFjdG9yeVwiO1xuaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi9hbGxUYXNrc1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlT2JqZWN0IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgY29uc3QgZWRpdFRhc2tzT2JqZWN0ID0ge1xuXG4gICAgLy9tYXRjaGVzIGlkIG9mIHRhc2sgb2JqZWN0IGFuZCBkb20gZWxlbWVudFxuICAgIGZpbmRDbGlja2VkVGFzayhldmVudCkge1xuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWNvbXBsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGlmICh0YXNrQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySUQgPSBwYXJzZUludCh0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLnRhc2tJRCA9PSB0YXNrQ29udGFpbmVySUQpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vaWYgbm8gdGFzayBmb3VuZFxuICAgIH0sXG5cbiAgICAvL3RvZ2dsZXMgdGFzayBiZXR3ZWVuIGNvbXBsZXRlIGFuZCBpbmNvbXBsZXRlXG4gICAgaGFuZGxlQ29tcGxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYXNrID0gZWRpdFRhc2tzT2JqZWN0LmZpbmRDbGlja2VkVGFzayhldmVudCk7IFxuXG4gICAgICAgIGlmIChjbGlja2VkVGFzaykge1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50TGVmdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRvbVRpdGxlID0gdGFza0VsZW1lbnRMZWZ0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkb21EZXNjcmlwdGlvbiA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICBpZiAoY2xpY2tlZFRhc2suc3RhdHVzID09PSAnaW5jb21wbGV0ZScpIHJldHVybiBlZGl0VGFza3NPYmplY3QuaXNDb21wbGV0ZShjbGlja2VkVGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoY2xpY2tlZFRhc2suc3RhdHVzID09PSAnY29tcGxldGUnKSByZXR1cm4gZWRpdFRhc2tzT2JqZWN0LmlzSW5jb21wbGV0ZShjbGlja2VkVGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9kZWxldGVzIG9iamVjdCBpbiB0YXNrIGFycmF5IGFuZCByZW1vdmVzIGRvbSBkaXNwbGF5IGVsZW1lbnRcbiAgICBoYW5kbGVEZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWRlbGV0ZScpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmICh0YXNrRGVsZXRlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySUQgPSBwYXJzZUludCh0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkKTtcblxuICAgICAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2sudGFza0lEID09PSB0YXNrQ29udGFpbmVySUQpO1xuXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG4gICAgICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL2NoYW5nZXMgc3RhdHVzICsgZG9tIHRvIGNvbXBsZXRlXG4gICAgaXNDb21wbGV0ZSh0YXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKSB7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3Qgc3RhdHVzXG4gICAgICAgIHRhc2suc3RhdHVzID0gJ2NvbXBsZXRlJztcblxuICAgICAgICAvL2NzcyB0byBkaXNwbGF5IGNvbXBsZXRlZCBzdGF0dXNcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgZG9tVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuICAgICAgICBkb21EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG5cbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2NoYW5nZXMgc3RhdHVzICsgZG9tIHRvIGluY29tcGxldGVcbiAgICBpc0luY29tcGxldGUodGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbikge1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IHN0YXR1c1xuICAgICAgICB0YXNrLnN0YXR1cyA9ICdpbmNvbXBsZXRlJztcblxuICAgICAgICAvL2NzcyB0byBkaXNwbGF5IGNvbXBsZXRlZCBzdGF0dXNcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgZG9tVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuICAgICAgICBkb21EZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG5cbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2VkaXQgdGFzayBhZnRlciBjcmVhdGlvblxuICAgIGhhbmRsZVRhc2tFZGl0KGV2ZW50KSB7XG5cbiAgICAgICAgLy9pZGVudGlmeSBlbGVtZW50c1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudExlZnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stZWxlbWVudC1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50UmlnaHQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stZWxlbWVudC1yaWdodCcpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1wcmlvcml0eScpO1xuXG4gICAgICAgIC8vY3JlYXRlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWRpdElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZWRpdElucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcblxuICAgICAgICAvL2VkaXQgdGhlIHRhc2sgdGl0bGVcbiAgICAgICAgaWYgKHRhc2tUaXRsZSkgeyAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrSUROdW1iZXIgPSB0YXNrQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJyk7XG5cbiAgICAgICAgICAgIC8vYWRkIGlucHV0IHRvIGVkaXQgdGl0bGVcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrVGl0bGUpO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG5cbiAgICAgICAgICAgIC8vdGFrZSBlZGl0ZWQgdGl0bGUgYW5kIHN1Ym1pdFxuICAgICAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2V4dHJhY3QgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLnRhc2tJRCA9PSB0YXNrSUROdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgdGFzay50aXRsZSA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSBkb20gZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9yZS1hcHBlbmQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKHRhc2tUaXRsZSwgZWRpdElucHV0Qm94KTtcblxuICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2VkaXQgdGhlIHRhc2sgZGVzY3JpcHRpb25cbiAgICAgICAgaWYgKHRhc2tEZXNjcmlwdGlvbikgeyAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrSUROdW1iZXIgPSB0YXNrQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJyk7XG5cbiAgICAgICAgICAgIC8vYWRkIGlucHV0IHRvIGVkaXQgdGl0bGVcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG5cbiAgICAgICAgICAgIC8vdGFrZSBlZGl0ZWQgdGl0bGUgYW5kIHN1Ym1pdFxuICAgICAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2V4dHJhY3QgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLnRhc2tJRCA9PSB0YXNrSUROdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSBkb20gZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9yZS1hcHBlbmQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKHRhc2tEZXNjcmlwdGlvbiwgZWRpdElucHV0Qm94KTtcblxuICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2VkaXQgdGhlIHRhc2sgZHVlIGRhdGVcbiAgICAgICAgaWYgKHRhc2tEdWVEYXRlKSB7ICAgICAgICBcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC50eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgY29uc3QgdGFza0lETnVtYmVyID0gdGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcpO1xuXG4gICAgICAgICAgICAvL2FkZCBpbnB1dCB0byBlZGl0IHRpdGxlXG4gICAgICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LnJlcGxhY2VDaGlsZChlZGl0SW5wdXRCb3gsIHRhc2tEdWVEYXRlKTtcblxuICAgICAgICAgICAgLy90YWtlIGVkaXRlZCB0aXRsZSBhbmQgc3VibWl0XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9leHRyYWN0IHZhbHVlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gdGFza3MuZmluZCh0YXNrID0+IHRhc2sudGFza0lEID09IHRhc2tJRE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSB0YXNrIHRpdGxlXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gZWRpdElucHV0Qm94LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgZG9tIGRpc3BsYXlcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lclRleHQgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvL3JlLWFwcGVuZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgdGFza0VsZW1lbnRSaWdodC5yZXBsYWNlQ2hpbGQodGFza0R1ZURhdGUsIGVkaXRJbnB1dEJveCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2VkaXQgcHJpb3JpdHkgYnV0dG9uXG4gICAgICAgIGlmICh0YXNrUHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgLy9leHRyYWN0IHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgdGFza0lETnVtYmVyID0gdGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBnZXRUYXNrcygpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLnRhc2tJRCA9PSB0YXNrSUROdW1iZXIpO1xuXG4gICAgICAgICAgICAvL2N5Y2xlIGJldHdlZW4gbG93LW1pZC1oaWdoIHByaW9yaXR5XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktbG93Jyk6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1taWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktbWlkJyk6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LW1pZCcpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnaGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTpcbiAgICAgICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAnbG93JztcbiAgICAgICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi90b2RvLWZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZU9iamVjdCA9IHtcblxuICAgIC8vc2F2ZSB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpIHtcbiAgICAgICAgY29uc3QgdGFza3NKU09OID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCB0YXNrc0pTT04pO1xuICAgIH0sXG5cbiAgICAvL3JldHJpZXZlIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGFza3NKU09OKSB8fCBbXTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL29iamVjdCB0byBzdG9yZSBiYXNlIGl0ZW1zIG9uIHRoZSBwYWdlICh0aXRsZSwgZmlyc3QgYnV0dG9uIGV0YylcbmV4cG9ydCBjb25zdCBwYWdlRWxlbWVudHNPYmplY3QgPSB7XG5cbiAgICBjcmVhdGVQYWdlVGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSAnQWxsIFF1ZXN0cyc7XG4gICAgICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib2R5LXRpdGxlJyk7XG4gICAgICAgIHJldHVybiB0aXRsZUVsZW1lbnQ7XG4gICAgfSxcblxuICAgIGNyZWF0ZUFkZFRhc2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10YXNrLWJ1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ3wrfCBBZGQgUXVlc3QnO1xuICAgICAgICByZXR1cm4gYWRkVGFza0J1dHRvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybUNvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xuICAgIH1cbn0iLCJpbXBvcnQgeyB0YXNrcywgY3JlYXRlVGFzaywgZ2V0VGFza3MgfSBmcm9tIFwiLi90b2RvLWZhY3RvcnlcIjtcbmltcG9ydCB7IHBhZ2VFbGVtZW50c09iamVjdCB9IGZyb20gXCIuL3BhZ2UtZWxlbWVudHNcIjtcbmltcG9ydCB7IGVkaXRUYXNrc09iamVjdCB9IGZyb20gXCIuL2VkaXRUYXNrc1wiO1xuXG4vL29iamVjdCB0byBzdG9yZSBmdW5jdGlvbnMgcmVsYXRlZCB0byB0YXNrIGNyZWF0aW9uIC8gZm9ybSBzdWJtaXNzaW9uXG5leHBvcnQgY29uc3QgZm9ybUFjdGlvbnNPYmplY3QgPSB7XG4gICAgXG4gICAgYXR0YWNoU3VibWl0TGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pIHtcblxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLnRyaW0oKTtcblxuICAgICAgICAgICAgaWYgKCF0aXRsZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQgKCdQbGVhc2UgZmlsbCBpbiB0aGUgdGl0bGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LmFkZFRhc2soKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHRhc2tzKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbW92ZUZvcm0oZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhdHRhY2hDYW5jZWxMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbikge1xuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVtb3ZlRm9ybShmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGVUYXNrTGlzdCh0YXNrcykge1xuXG4gICAgICAgIGNvbnN0IGJvZHlDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKTtcbiAgICAgICAgXG4gICAgICAgIC8vcHJldmVudCBkdXBsaWNhdGUgdGFza3NcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgLy9yZS1hZGQgdGl0bGUgdG8gcGFnZVxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBwYWdlRWxlbWVudHNPYmplY3QuY3JlYXRlUGFnZVRpdGxlKCk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgICAgLy9yZW5kZXIgdGFza3MgZnJvbSBhcnJheSB0byBkb21cbiAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVuZGVyVGFza3ModGFza3MsIGJvZHlDb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICAvL3B1dCBhZGQgYnV0dG9uIHRvIGJvdHRvbSBvZiB0aGUgbGlzdFxuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyVGFza3ModGFza3MsIGJvZHlDb250ZW50Q29udGFpbmVyKSB7IFxuICAgICAgICAgICAgXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgICAgICAvL3ByZXZlbnRzIGR1cGxpY2F0ZSBlbnRyaWVzXG4gICAgICAgIC8vIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIFxuICAgICAgICAvL2VhY2ggc2lkZSBvZiB0aGUgdGFzayBpdGVtXG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgLy90YXNrRWxlbWVudExlZnQgaXRlbXMgLSBjb21wbGV0ZSBidXR0b24sIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29tcGxldGUtYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stY29tcGxldGUtYnV0dG9uJyk7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfWA7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcblxuICAgICAgICBpZiAodGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID09ICcnKSB7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnKGRldGFpbHMgZm9yIHRoaW5lIHF1ZXN0IG5vdCBmb3VuZCknO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90YXNrRWxlbWVudFJpZ2h0IC0gZHVlIGRhdGUsIHByaW9yaXR5LCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gJycpIHRhc2suZHVlRGF0ZSA9ICcobm8gZHVlIGRhdGUpJztcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcblxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7dGFzay5wcmlvcml0eX1gO1xuXG4gICAgICAgIC8vdXBkYXRlIGNzcyBiYXNlZCBvbiBwcmlvcml0eSB2YWx1ZVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5kaXNwbGF5UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lciwgdGFza1ByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgICAgICAgdGFza0RlbGV0ZS50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gICAgICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIHBhZ2VcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTsgICAgXG5cbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50TGVmdCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnRSaWdodCk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcsIHRhc2sudGFza0lEKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVsZW1lbnQtcmlnaHQnKTtcblxuICAgICAgICAvL2Rpc3BsYXkgdGFzayBjb21wbGV0aW9uIG9uIHBhZ2UtbG9hZFxuICAgICAgICBpZiAodGFzay5zdGF0dXMgPT0gJ2NvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlDb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgaWYgKHRhc2suc3RhdHVzID09ICdpbmNvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlJbmNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTsgICAgXG4gICAgfSxcblxuICAgIC8vbWFkZSBiYyBlZGl0VGFza3MgZnVuY3Rpb25zIHdlcmUgaW5jb21wYXRpYmxlXG4gICAgdXBkYXRlRGlzcGxheUNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICB9LFxuXG4gICAgLy9tYWRlIGJjIGVkaXRUYXNrcyBmdW5jdGlvbnMgd2VyZSBpbmNvbXBhdGlibGVcbiAgICB1cGRhdGVEaXNwbGF5SW5jb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC1jaGVja2VkJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmVGb3JtKGZvcm1Db250YWluZXIpIHtcbiAgICAgICAgY29uc3QgYm9keUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgaWYgKGJvZHlDb250ZW50Q29udGFpbmVyLmNvbnRhaW5zKGZvcm1Db250YWluZXIpKSBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9LFxuXG4gICAgLy9jYWxsZWQgYnkgc3VibWl0IGJ1dHRvbiB0byBwdXQgdGFzayBvbnRvIHBhZ2VcbiAgICBhZGRUYXNrKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktc2VsZWN0aW9uJykudmFsdWU7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1Rhc2s7XG4gICAgfSxcblxuICAgIC8vY3NzIHRvIHRhc2sgY29udGFpbmVyIGFuZCBwcmlvcml0eSBidXR0b24gYmFzZWQgb24gcHJpb3JpdHkgdmFsdWVcbiAgICBkaXNwbGF5UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lciwgdGFza1ByaW9yaXR5KSB7XG5cbiAgICAgICAgLy9wcmV2ZW50IHN0YWNraW5nIG11bHRpcGxlIGNsYXNzZXNcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHknKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LW1pZCcpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLy9vYmplY3QgdG8gc3RvcmUgZnVuY3Rpb25zIHRoYXQgY3JlYXRlIGZvcm0gdG8gZ2VuZXJhdGUgaW5kaXZpZHVhbCB0YXNrc1xuZXhwb3J0IGNvbnN0IHRhc2tGb3JtT2JqZWN0ID0ge1xuXG4gICAgY3JlYXRlRm9ybUxheW91dChmb3JtQ29udGFpbmVyKSB7XG5cbiAgICAgICAgLy9jcmVhdGUgZm9ybSBvYmplY3RzXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IGZvcm1MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgLy9hcHBlbmQgZWxlbWVudHMgdG8gZm9ybVxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1MZWZ0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUmlnaHQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Cb3R0b20pO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzZXNcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gICAgICAgIGZvcm1MZWZ0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGVmdCcpO1xuICAgICAgICBmb3JtUmlnaHQuY2xhc3NMaXN0LmFkZCgnZm9ybS1yaWdodCcpO1xuICAgICAgICBmb3JtQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYm90dG9tJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZm9ybSwgZm9ybUxlZnQsIGZvcm1SaWdodCwgZm9ybUJvdHRvbSB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtVGl0bGUoZm9ybUxlZnQpIHtcblxuICAgICAgICAvL2NyZWF0ZSB0aXRsZSBlbGVtZW50c1xuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgICAgICAvL3ByZXZlbnQgcGFnZSByZWZyZXNoXG4gICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gbGVmdCBzaWRlXG4gICAgICAgIGZvcm1MZWZ0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgICAgICBcbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgdGl0bGVMYWJlbCwgdGl0bGVJbnB1dCB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtRGVzY3JpcHRpb24oZm9ybUxlZnQpIHtcblxuICAgICAgICAvL2NyZWF0ZSBkZXNjcmlwdGlvbiBlbGVtZW50c1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uIChvcHRpb25hbCknKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gMjtcblxuICAgICAgICAvL2FwcGVuZCB0byBsZWZ0IHNpZGUgXG4gICAgICAgIGZvcm1MZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgICAgICAvL2FkZCBjbGFzc1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZGVzY3JpcHRpb24nKTtcblxuICAgICAgICByZXR1cm4geyBkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0IH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1EYXRlKGZvcm1SaWdodCkge1xuXG4gICAgICAgIC8vY3JlYXRlIGRhdGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gcmlnaHQgc2lkZVxuICAgICAgICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZGF0ZScpO1xuXG4gICAgICAgIHJldHVybiB7IGRhdGVMYWJlbCwgZGF0ZUlucHV0IH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1Qcmlvcml0eVNlbGVjdG9yKGZvcm1SaWdodCkge1xuXG4gICAgICAgIC8vY3JlYXRlIHByaW9yaXR5IHNlbGVjdGlvbiBkcm9wYm94IGFuZCBvcHRpb25zXG4gICAgICAgIGNvbnN0IHNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktc2VsZWN0aW9uJyk7XG4gICAgICAgIC8vIHNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgY29uc3Qgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1zZWxlY3Rpb24nKTtcbiAgICAgICAgLy8gY29uc3QgcGxhY2Vob2xkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgLy8gcGxhY2Vob2xkZXJPcHRpb24udGV4dCA9ICdQcmlvcml0eSc7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gcGxhY2Vob2xkZXJPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjEudmFsdWUgPSAnbG93JztcbiAgICAgICAgb3B0aW9uMS50ZXh0ID0gJ0xvdyAoUHJpb3JpdHkpJztcbiAgICAgICAgb3B0aW9uMS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi52YWx1ZSA9ICdtZWRpdW0nO1xuICAgICAgICBvcHRpb24yLnRleHQgPSAnTWVkaXVtJztcbiAgICAgICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24zLnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICBvcHRpb24zLnRleHQgPSAnSGlnaCc7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gcmlnaHQgc2lkZVxuICAgICAgICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoc2VsZWN0TGFiZWwpO1xuICAgICAgICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXQpO1xuICAgICAgICAvLyBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlck9wdGlvbik7XG4gICAgICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgc2VsZWN0SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKTtcblxuICAgICAgICByZXR1cm4geyBzZWxlY3RMYWJlbCwgc2VsZWN0SW5wdXQsIG9wdGlvbjEsIG9wdGlvbjIsIG9wdGlvbjMgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybUJ1dHRvbnMoZm9ybUJvdHRvbSkge1xuXG4gICAgICAgIC8vY3JlYXRlIGJ1dHRvbiBlbGVtZW50c1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgICAgICAvL2FwcGVuZCB0byBib3R0b21cbiAgICAgICAgZm9ybUJvdHRvbS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG4gICAgICAgIGZvcm1Cb3R0b20uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsLWJ1dHRvbicpXG5cbiAgICAgICAgLy9hZGQgY2xhc3Nlc1xuICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7ICAgIFxuXG4gICAgICAgIHJldHVybiB7IHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uIH07XG4gICAgfVxufSIsImltcG9ydCB7IGxvY2FsU3RvcmFnZU9iamVjdCB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuLy90YXNrIGFycmF5IHRvIHN0b3JlIGFsbCB0YXNrc1xuZXhwb3J0IGNvbnN0IHRhc2tzID0gW107XG5cbmV4cG9ydCBjb25zdCB0YXNrQ291bnRlck9iamVjdCA9IHtcbiAgICB0YXNrQ291bnRlcjogMCxcbn1cblxuXG4vL2NyZWF0ZXMgdGFzayBvYmplY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRhc2tJRDogdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIsXG4gICAgfTtcblxuICAgIHRhc2tDb3VudGVyT2JqZWN0LnRhc2tDb3VudGVyKys7XG5cbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuICAgIC8vc2F2ZSB0YXNrcyB0byBsb2NhbCBzdG9yYWdlIGFmdGVyIGNyZWF0aW5nIGEgbmV3IHRhc2tcbiAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuXG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbi8vc2VuZCB0YXNrIGFycmF5IHRvIGJlIGRpc3BsYXllZFxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzKCkge1xuXG4gICAgLy9yZXRyaWV2ZSB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2UgYmVmb3JlIHJldHVybmluZ1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VPYmplY3QuZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUFsbFF1ZXN0c1BhZ2UgfSBmcm9tICcuL2FsbFRhc2tzLmpzJztcbmltcG9ydCB7IHRhc2tzLCB0YXNrQ291bnRlck9iamVjdCB9IGZyb20gJy4vdG9kby1mYWN0b3J5LmpzJztcbmltcG9ydCB7IGZvcm1BY3Rpb25zT2JqZWN0IH0gZnJvbSAnLi90YXNrLWZvcm0tYWN0aW9ucy5qcyc7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VPYmplY3QgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYWxsUXVlc3RzUGFnZSk7XG5cbmZ1bmN0aW9uIGFsbFF1ZXN0c1BhZ2UoKSB7XG4gICAgLy9pbXBvcnQgdGFzayBjcmVhdGlvbiB0b29sc1xuICAgIGNvbnN0IHsgdGl0bGVFbGVtZW50LCBhZGRUYXNrQnV0dG9uIH0gPSBjcmVhdGVBbGxRdWVzdHNQYWdlKCk7XG5cbiAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBjb25zdCByZXRyaWV2ZWRUYXNrcyA9IGxvY2FsU3RvcmFnZU9iamVjdC5nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHRhc2tzLmxlbmd0aCA9IDA7XG4gICAgdGFza3MucHVzaCguLi5yZXRyaWV2ZWRUYXNrcyk7XG5cbiAgICAvL3ByZXZlbnQgY291bnRlciBmcm9tIHN0YXJ0aW5nIHdpdGggd3JvbmcgaWQgbnVtYmVyIG9uIHBhZ2UgcmVsb2FkXG4gICAgaWYgKHRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsZXQgcHJldmlvdXNUYXNrSWQgPSB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXS50YXNrSUQ7XG4gICAgICAgIHRhc2tDb3VudGVyT2JqZWN0LnRhc2tDb3VudGVyID0gcHJldmlvdXNUYXNrSWQgKyAxO1xuICAgIH1cblxuICAgIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHRhc2tzKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=