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

.task-due-date {
    width: 5.5rem;
}

.task-delete {
    background: none;
    color: white;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* css reset */\n*, \nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --primary-color: #2d2749;\n    --secondary-color: #df72a9;\n    --border-radius: 2rem;\n    --border-color: red;\n    --border: 1px solid var(--border-color);\n    --font-color: white;\n    --gap: 1rem;\n    --cancel-color: #a52f2f;\n    --submit-color: #026e02cf;\n    --background-image: url(./imgs/backdrop-2.jpg);\n    --low-priority: yellow;\n    --mid-priority: orange;\n    --high-priority: #ff4141;\n}\n\n@font-face {\n    font-family: 'Primary-font';\n    src: url('./fonts/QueensidesMedium-x30zV.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Secondary-font';\n    src: url('./fonts/Ubuntu-n1M0.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n.content {\n    height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 0.5fr 4fr 0.25fr;\n}\n\n/* header */\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Primary-font';\n    color: var(--font-color);\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    font-size: 5rem;\n    gap: var(--gap);\n}\n\n.svg {\n    height: 6rem;\n    padding-left: 1rem;\n    filter: invert(1);\n}\n\n/* side-bar */\n.side-bar {\n    grid-area: 2 / 1 / 3 / 2;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    color: var(--font-color);\n    font-family: 'Secondary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 2rem;\n    /* overflow: hidden; */\n    white-space: nowrap;\n}\n\n.home-tasks {\n    position: sticky;\n    top: 0;\n}\n\n.project-tasks {\n    position: sticky;\n    top: 17rem;\n}\n\n.home-tasks,\n.project-tasks {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: var(--gap);\n    width: 80%;\n    list-style: none;\n    padding: 1.5rem;\n}\n\n.side-bar-title {\n    border-bottom: var(--border);\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n@keyframes bounce {\n    0% {\n        transform: translateY(10px);\n    }\n    50% {\n        transform: translateY(-10px);\n    }\n    100% {\n        transform: translateY(10px);\n    }\n}\n\n@keyframes pulse {\n    0% {\n        transform: scale(1.0);\n    }\n    50% {\n        transform: scale(1.15);\n    }\n    100% {\n        transform: scale(1.0);\n    }\n}\n\nli > button,\n#body-content-container > button,\n#submit-button,\n#cancel-button {\n    color: var(--font-color);\n    transition: ease-in-out 0.3s;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    padding: 0;\n    background: none;\n}\n\n#body-content-container > button {\n    animation: bounce 8s infinite;\n    align-self: center;\n    box-sizing: border-box;\n    padding: 0.7rem;\n}\n\n#body-content-container > button:hover {\n    cursor: pointer;\n    border-radius: var(--border-radius);\n    background: white;\n    color: black;\n}\n\nli > button:hover {\n    cursor: pointer;\n    transform: translateX(1rem);\n}\n\n/* main */\n.body {\n    grid-area: 2 / 2 / 3 / 3;\n    background: var(--primary-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#body-content-container {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    border: var(--border);\n    color: var(--font-color);\n    font-family: 'Primary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: var(--gap);\n    overflow-y: auto;\n    padding-bottom: 1rem;\n}\n\n.body-title {\n    font-size: 3rem;\n    border-bottom: var(--border);\n    border-right: var(--border);\n    padding: 1rem;\n}\n\n.form-container{\n    height: 12rem;\n    width: 90%;\n    background: url(./imgs/backdrop-2.jpg);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    box-sizing: border-box;\n    border: var(--border);\n    align-self: center;\n}\n\n.form {\n    display: grid;\n    grid-template-rows: 3fr 1fr;\n    grid-template-columns: 2fr 1fr;\n    height: 100%;\n    padding: 0.5rem;\n    box-sizing: border-box;\n    gap: 1.5rem;\n}\n\n.form-left,\n.form-right {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.form-left {\n    grid-area: 1 / 1 / 2 / 2;\n    overflow: auto;\n}\n\n.form-right {\n    grid-area: 1 / 2 / 2 / 3;\n}\n\n.form-bottom {\n    grid-area: 2 / 1 / 3 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n/* submit-button/add-button */\n.submit-button:hover {\n    box-shadow: 0px 5px 0px var(--submit-color);\n    color: var(--submit-color);\n    border-left: 1px solid var(--submit-color);\n    border-right: 1px solid var(--submit-color);\n}\n\n.cancel-button:hover {\n    box-shadow: 0px 5px 0px var(--cancel-color);\n    color: var(--cancel-color);\n    border-left: 1px solid var(--cancel-color);\n    border-right: 1px solid var(--cancel-color);\n}\n\n.submit-button, \n.cancel-button {\n    height: 2.5rem;\n    width: 7rem;\n    border-radius: 0.5rem;\n}\n\n.form-bottom > button:hover {\n    cursor: pointer;\n    transform: translateY(-10px);\n}\n\n.form-title,\n.form-description,\n.form-date,\n.form-select {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    border-radius: 0.5rem;\n    outline: none;\n}\n\n.form-title {\n    height: 1rem;\n    width: 90%;\n}\n\n.form-description {\n    height: 2.5rem;\n    width: 90%;\n}\n\n.form-date,\n.form-select {\n    height: 2rem;\n    width: 12rem;\n    padding: 0;\n    padding-left: 0.2rem;\n}\n\n.task-container {\n    transition: ease-in-out 0.3s;\n    box-sizing: border-box;\n    width: 90%;\n    min-width: 37rem;\n    height: auto;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    /* border-left: 1px solid var(--border-color); */\n    gap: 0.5rem;\n    align-self: center;\n    background-color: #3b3361;\n    overflow: hidden;\n    /* white-space: nowrap; */\n}\n\n.task-element-left,\n.task-element-right {\n    box-sizing: border-box;\n    font-family: 'Secondary-font';\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    width: 100%;\n    display: flex;\n    gap: 3rem;\n    align-items: center;\n}\n\n.task-element-left {\n    justify-content: flex-start;\n}\n\n.task-element-right {\n    justify-content: flex-end;\n    font-size: 1rem;\n}\n\n.task-complete-button {\n    height: 1.5rem;\n    width: 1.5rem;\n    border: 2px solid white;\n    background: none;\n    border-radius: var(--border-radius);\n    flex-shrink: 0;\n}\n\n.completed-task {\n    background: #00f9003d;\n    border-left: 2px solid #04ff04;\n    color: #ffffff69;\n}\n\n.completed-task-text {\n    text-decoration: line-through;\n}\n\n.completed-checked {\n    border: none;   \n    background-image: url(./imgs/checked.png);\n    background-size: cover;\n}\n\n.task-title:hover,\n.task-description:hover,\n.task-due-date:hover,\n.task-complete-button:hover,\n.task-priority:hover,\n.task-delete:hover {\n    cursor: pointer;\n}\n\n.task-title {\n    font-size: 1.5rem;\n}\n\n.task-description {\n    font-size: 1rem;\n}\n\n/* priority emblem itself*/\n.task-priority {\n    border-radius: var(--border-radius);\n    padding: 5px 15px 5px 15px;\n    background: none;\n    color: var(--font-color)\n}\n\n.task-priority-low,\n.task-priority-mid,\n.task-priority-high {\n    width: 5.5rem;\n}\n\n.task-priority-low {\n    color: var(--low-priority);\n    border: 1px solid var(--low-priority);\n}\n\n.task-priority-mid {\n    color: var(--mid-priority);\n    border: 1px solid var(--mid-priority);\n}\n\n.task-priority-high {\n    color: var(--high-priority);\n    border: 1px solid   var(--high-priority);\n}\n\n/* task container (priority)*/\n.task-container-low-priority {\n    border-left: 2px solid var(--low-priority);\n}\n\n.task-container-mid-priority {\n    border-left: 2px solid var(--mid-priority);\n}\n\n.task-container-high-priority {\n    border-left: 2px solid var(--high-priority);\n}\n\n.task-container:hover {\n    box-shadow: 5px 10px 10px #00000063;\n}\n\n.task-due-date {\n    width: 5.5rem;\n}\n\n.task-delete {\n    background: none;\n    color: white;\n}\n\nfooter {\n    grid-area: 3 / 1 / 4 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Secondary-font';\n    color: white;\n    font-size: 1rem;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n}\n\n.content > div {\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
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
/* harmony export */   createAllQuestsPage: () => (/* binding */ createAllQuestsPage)
/* harmony export */ });
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-factory */ "./src/todo-factory.js");
/* harmony import */ var _page_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-elements */ "./src/page-elements.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-form */ "./src/task-form.js");
/* harmony import */ var _task_form_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-form-actions */ "./src/task-form-actions.js");





const bodyContentContainer = document.getElementById('body-content-container');

//main function to populate the page
function createAllQuestsPage() {
    const titleElement = _page_elements__WEBPACK_IMPORTED_MODULE_1__.pageElementsObject.createPageTitle();
    const addTaskButton = _page_elements__WEBPACK_IMPORTED_MODULE_1__.pageElementsObject.createAddTaskButton();
    const formContainer = _page_elements__WEBPACK_IMPORTED_MODULE_1__.pageElementsObject.createFormContainer();

    //click to add new task
    addTaskButton.addEventListener('click', function() {
        handleAddTaskClick(addTaskButton, formContainer);
    });

    //click to toggle task completion
    bodyContentContainer.addEventListener('click', function(event) {
        handleCompleteTaskClick(event);
    });

    //click to delete task
    bodyContentContainer.addEventListener('click', function(event) {
        handleDeleteTaskClick(event);
    });

    return { titleElement, addTaskButton };
}

//creates the task creation form
function handleAddTaskClick(addTaskButton, formContainer) {
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

//matches id of task object and dom element
function findClickedTask(event) {
    const taskComplete = event.target.classList.contains('task-complete-button');

    if (taskComplete) {
        const taskContainer = event.target.closest('.task-container');
        const taskContainerID = parseInt(taskContainer.dataset.taskId);

        return _todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks.find(task => task.taskID == taskContainerID);
    }
        
    return null; //if no task found
}

//toggles task between complete and incomplete
function handleCompleteTaskClick(event) {
    const clickedTask = findClickedTask(event);

    if (clickedTask) {
        const taskContainer = event.target.closest('.task-container');
        const taskElementLeft = event.target.closest('.task-element-left');
        const domTitle = taskElementLeft.querySelector('.task-title');
        const domDescription = taskElementLeft.querySelector('.task-description');

        if (clickedTask.status === 'incomplete') return isComplete(clickedTask, taskContainer, event, domTitle, domDescription);
        if (clickedTask.status === 'complete') return isIncomplete(clickedTask, taskContainer, event, domTitle, domDescription);
    }
}

//deletes object in task array and removes dom display element
function handleDeleteTaskClick(event) {
    const taskDelete = event.target.classList.contains('task-delete');
    const taskContainer = event.target.closest('.task-container');

    if (taskDelete) {
        const taskContainerID = parseInt(taskContainer.dataset.taskId);

        const indexToRemove = _todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks.findIndex(task => task.taskID === taskContainerID);

        _todo_factory__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(indexToRemove, 1);
        bodyContentContainer.removeChild(taskContainer);
    }
}

//changes status + dom to complete
function isComplete(task, taskContainer, event, domTitle, domDescription) {

    //update task object status
    task.status = 'complete';

    //css to display completed status
    taskContainer.classList.add('completed-task');
    event.target.classList.add('completed-checked');
    domTitle.classList.add('completed-task-text');
    domDescription.classList.add('completed-task-text');
}

//changes status + dom to incomplete
function isIncomplete(task, taskContainer, event, domTitle, domDescription) {

    //update task object status
    task.status = 'incomplete';

    //css to display completed status
    taskContainer.classList.remove('completed-task');
    event.target.classList.remove('completed-checked');
    domTitle.classList.remove('completed-task-text');
    domDescription.classList.remove('completed-task-text');
}

//edit task after creation
bodyContentContainer.addEventListener('dblclick', function(event) {

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
                break;
    
            case taskPriority.classList.contains('task-priority-mid'):
                taskPriority.classList.remove('task-priority-mid');
                taskContainer.classList.remove('task-container-mid-priority');
                taskPriority.classList.add('task-priority-high');
                taskContainer.classList.add('task-container-high-priority');
                task.priority = 'high';
                taskPriority.textContent = 'high';
                break;
    
            case taskPriority.classList.contains('task-priority-high'):
                taskPriority.classList.remove('task-priority-high');
                taskContainer.classList.remove('task-container-high-priority');
                taskPriority.classList.add('task-priority-low');
                taskContainer.classList.add('task-container-low-priority');
                task.priority = 'low';
                taskPriority.textContent = 'low';
                break;
        }
    }
});

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
        const taskContainer = document.createElement('div');
        const addTaskButton = document.getElementById('add-task-button');
        bodyContentContainer.appendChild(taskContainer);
        bodyContentContainer.appendChild(addTaskButton);
    
        tasks.forEach(task => {
            //prevents duplicate entries
            taskContainer.innerHTML = '';
            
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

            //taskElementRight - due date, priority, delete button
            const taskDueDate = document.createElement('p');
            taskDueDate.classList.add('task-due-date');
            if (task.dueDate == '') task.dueDate = 'no due date';
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
        });    
    },
    
    removeForm(formContainer) {

        const bodyContentContainer = document.getElementById('body-content-container');
        formContainer.removeChild(formContainer.firstChild);
        bodyContentContainer.removeChild(formContainer);
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
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
//task array to store all tasks
const tasks = [];
let taskCounter = 0;

//creates task objects
function createTask(title, description, dueDate, priority) {
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
function getTasks() {
    return tasks;
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



document.addEventListener('DOMContentLoaded', allQuestsPage);

function allQuestsPage() {
    //import task creation tools
    const { titleElement, addTaskButton } = (0,_allTasks_js__WEBPACK_IMPORTED_MODULE_1__.createAllQuestsPage)();

    //append tools to page
    const content = document.getElementById('body-content-container');
    content.appendChild(titleElement);
    content.appendChild(addTaskButton);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLGlIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFB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V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDK0I7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4QixFQUFFLGlFQUFtQjs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FsbFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLWVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWZvcm0tYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy9iYWNrZHJvcC0yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUXVlZW5zaWRlc01lZGl1bS14MzB6Vi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1VidW50dS1uMU0wLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1ncy9jaGVja2VkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogY3NzIHJlc2V0ICovXG4qLCBcbmh0bWwge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbjpyb290IHtcbiAgICAtLXByaW1hcnktY29sb3I6ICMyZDI3NDk7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNkZjcyYTk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIC0tZm9udC1jb2xvcjogd2hpdGU7XG4gICAgLS1nYXA6IDFyZW07XG4gICAgLS1jYW5jZWwtY29sb3I6ICNhNTJmMmY7XG4gICAgLS1zdWJtaXQtY29sb3I6ICMwMjZlMDJjZjtcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAtLWxvdy1wcmlvcml0eTogeWVsbG93O1xuICAgIC0tbWlkLXByaW9yaXR5OiBvcmFuZ2U7XG4gICAgLS1oaWdoLXByaW9yaXR5OiAjZmY0MTQxO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSksIGZvcm1hdCgndHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pLCBmb3JtYXQoJ3R0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDRmciAwLjI1ZnI7XG59XG5cbi8qIGhlYWRlciAqL1xuaGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbn1cblxuLnN2ZyB7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuLyogc2lkZS1iYXIgKi9cbi5zaWRlLWJhciB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaG9tZS10YXNrcyB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG59XG5cbi5wcm9qZWN0LXRhc2tzIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMTdyZW07XG59XG5cbi5ob21lLXRhc2tzLFxuLnByb2plY3QtdGFza3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5zaWRlLWJhci10aXRsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxufVxuXG5saSA+IGJ1dHRvbixcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uLFxuI3N1Ym1pdC1idXR0b24sXG4jY2FuY2VsLWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgOHMgaW5maW5pdGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC43cmVtO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxubGkgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XG59XG5cbi8qIG1haW4gKi9cbi5ib2R5IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1ByaW1hcnktZm9udCc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLmJvZHktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZm9ybS1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMnJlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZ2FwOiAxLjVyZW07XG59XG5cbi5mb3JtLWxlZnQsXG4uZm9ybS1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmZvcm0tbGVmdCB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZm9ybS1yaWdodCB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xufVxuXG4uZm9ybS1ib3R0b20ge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4vKiBzdWJtaXQtYnV0dG9uL2FkZC1idXR0b24gKi9cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1zdWJtaXQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zdWJtaXQtY29sb3IpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tc3VibWl0LWNvbG9yKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tY2FuY2VsLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLWNvbG9yKTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcbn1cblxuLnN1Ym1pdC1idXR0b24sIFxuLmNhbmNlbC1idXR0b24ge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmZvcm0tYm90dG9tID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cblxuLmZvcm0tdGl0bGUsXG4uZm9ybS1kZXNjcmlwdGlvbixcbi5mb3JtLWRhdGUsXG4uZm9ybS1zZWxlY3Qge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0tdGl0bGUge1xuICAgIGhlaWdodDogMXJlbTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uZm9ybS1kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmZvcm0tZGF0ZSxcbi5mb3JtLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1pbi13aWR0aDogMzdyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBnYXA6IDAuNXJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzM2MTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXG59XG5cbi50YXNrLWVsZW1lbnQtbGVmdCxcbi50YXNrLWVsZW1lbnQtcmlnaHQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWVsZW1lbnQtbGVmdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhc2stY29tcGxldGUtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jb21wbGV0ZWQtdGFzayB7XG4gICAgYmFja2dyb3VuZDogIzAwZjkwMDNkO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA0ZmYwNDtcbiAgICBjb2xvcjogI2ZmZmZmZjY5O1xufVxuXG4uY29tcGxldGVkLXRhc2stdGV4dCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5jb21wbGV0ZWQtY2hlY2tlZCB7XG4gICAgYm9yZGVyOiBub25lOyAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGFzay10aXRsZTpob3Zlcixcbi50YXNrLWRlc2NyaXB0aW9uOmhvdmVyLFxuLnRhc2stZHVlLWRhdGU6aG92ZXIsXG4udGFzay1jb21wbGV0ZS1idXR0b246aG92ZXIsXG4udGFzay1wcmlvcml0eTpob3Zlcixcbi50YXNrLWRlbGV0ZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi8qIHByaW9yaXR5IGVtYmxlbSBpdHNlbGYqL1xuLnRhc2stcHJpb3JpdHkge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59XG5cbi50YXNrLXByaW9yaXR5LWxvdyxcbi50YXNrLXByaW9yaXR5LW1pZCxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xuICAgIHdpZHRoOiA1LjVyZW07XG59XG5cbi50YXNrLXByaW9yaXR5LWxvdyB7XG4gICAgY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcbn1cblxuLnRhc2stcHJpb3JpdHktbWlkIHtcbiAgICBjb2xvcjogdmFyKC0tbWlkLXByaW9yaXR5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xufVxuXG4udGFzay1wcmlvcml0eS1oaWdoIHtcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgICB2YXIoLS1oaWdoLXByaW9yaXR5KTtcbn1cblxuLyogdGFzayBjb250YWluZXIgKHByaW9yaXR5KSovXG4udGFzay1jb250YWluZXItbG93LXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XG59XG5cbi50YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTtcbn1cblxuLnRhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XG59XG5cbi50YXNrLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7XG59XG5cbi50YXNrLWR1ZS1kYXRlIHtcbiAgICB3aWR0aDogNS41cmVtO1xufVxuXG4udGFzay1kZWxldGUge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uY29udGVudCA+IGRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkOztDQUVDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVD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c3MgcmVzZXQgKi9cXG4qLCBcXG5odG1sIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzJkMjc0OTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNkZjcyYTk7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgLS1ib3JkZXItY29sb3I6IHJlZDtcXG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICAtLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgICAtLWdhcDogMXJlbTtcXG4gICAgLS1jYW5jZWwtY29sb3I6ICNhNTJmMmY7XFxuICAgIC0tc3VibWl0LWNvbG9yOiAjMDI2ZTAyY2Y7XFxuICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9iYWNrZHJvcC0yLmpwZyk7XFxuICAgIC0tbG93LXByaW9yaXR5OiB5ZWxsb3c7XFxuICAgIC0tbWlkLXByaW9yaXR5OiBvcmFuZ2U7XFxuICAgIC0taGlnaC1wcmlvcml0eTogI2ZmNDE0MTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUXVlZW5zaWRlc01lZGl1bS14MzB6Vi50dGYnKSwgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1VidW50dS1uMU0wLnR0ZicpLCBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA0ZnIgMC4yNWZyO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxufVxcblxcbi5zdmcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi8qIHNpZGUtYmFyICovXFxuLnNpZGUtYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaG9tZS10YXNrcyB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLnByb2plY3QtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDE3cmVtO1xcbn1cXG5cXG4uaG9tZS10YXNrcyxcXG4ucHJvamVjdC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5zaWRlLWJhci10aXRsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgfVxcbn1cXG5cXG5saSA+IGJ1dHRvbixcXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbixcXG4jc3VibWl0LWJ1dHRvbixcXG4jY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4jYm9keS1jb250ZW50LWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIDhzIGluZmluaXRlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAuN3JlbTtcXG59XFxuXFxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5saSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xcbn1cXG5cXG4vKiBtYWluICovXFxuLmJvZHkge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2JvZHktY29udGVudC1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uYm9keS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXJ7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltZ3MvYmFja2Ryb3AtMi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmZvcm0tbGVmdCxcXG4uZm9ybS1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWxlZnQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZm9ybS1yaWdodCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG59XFxuXFxuLmZvcm0tYm90dG9tIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBzdWJtaXQtYnV0dG9uL2FkZC1idXR0b24gKi9cXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLXN1Ym1pdC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXN1Ym1pdC1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXN1Ym1pdC1jb2xvcik7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24sIFxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWJvdHRvbSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG59XFxuXFxuLmZvcm0tdGl0bGUsXFxuLmZvcm0tZGVzY3JpcHRpb24sXFxuLmZvcm0tZGF0ZSxcXG4uZm9ybS1zZWxlY3Qge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmZvcm0tZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmZvcm0tZGF0ZSxcXG4uZm9ybS1zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMnJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1pbi13aWR0aDogMzdyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7ICovXFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjMzNjE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXFxufVxcblxcbi50YXNrLWVsZW1lbnQtbGVmdCxcXG4udGFzay1lbGVtZW50LXJpZ2h0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWVsZW1lbnQtbGVmdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnRhc2stZWxlbWVudC1yaWdodCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFzayB7XFxuICAgIGJhY2tncm91bmQ6ICMwMGY5MDAzZDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDRmZjA0O1xcbiAgICBjb2xvcjogI2ZmZmZmZjY5O1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2stdGV4dCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29tcGxldGVkLWNoZWNrZWQge1xcbiAgICBib3JkZXI6IG5vbmU7ICAgXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZ3MvY2hlY2tlZC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4udGFzay10aXRsZTpob3ZlcixcXG4udGFzay1kZXNjcmlwdGlvbjpob3ZlcixcXG4udGFzay1kdWUtZGF0ZTpob3ZlcixcXG4udGFzay1jb21wbGV0ZS1idXR0b246aG92ZXIsXFxuLnRhc2stcHJpb3JpdHk6aG92ZXIsXFxuLnRhc2stZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogcHJpb3JpdHkgZW1ibGVtIGl0c2VsZiovXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sb3csXFxuLnRhc2stcHJpb3JpdHktbWlkLFxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcbiAgICB3aWR0aDogNS41cmVtO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sb3cge1xcbiAgICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbWlkIHtcXG4gICAgY29sb3I6IHZhcigtLW1pZC1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICAgdmFyKC0taGlnaC1wcmlvcml0eSk7XFxufVxcblxcbi8qIHRhc2sgY29udGFpbmVyIChwcmlvcml0eSkqL1xcbi50YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDUuNXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRhc2tzLCBjcmVhdGVUYXNrLCBnZXRUYXNrcyB9IGZyb20gXCIuL3RvZG8tZmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSBcIi4vcGFnZS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGFza0Zvcm1PYmplY3QgfSBmcm9tIFwiLi90YXNrLWZvcm1cIjtcbmltcG9ydCB7IGZvcm1BY3Rpb25zT2JqZWN0IH0gZnJvbSBcIi4vdGFzay1mb3JtLWFjdGlvbnNcIjtcblxuY29uc3QgYm9keUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4vL21haW4gZnVuY3Rpb24gdG8gcG9wdWxhdGUgdGhlIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbGxRdWVzdHNQYWdlKCkge1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZUZvcm1Db250YWluZXIoKTtcblxuICAgIC8vY2xpY2sgdG8gYWRkIG5ldyB0YXNrXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBoYW5kbGVBZGRUYXNrQ2xpY2soYWRkVGFza0J1dHRvbiwgZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvL2NsaWNrIHRvIHRvZ2dsZSB0YXNrIGNvbXBsZXRpb25cbiAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZUNvbXBsZXRlVGFza0NsaWNrKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vY2xpY2sgdG8gZGVsZXRlIHRhc2tcbiAgICBib2R5Q29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZURlbGV0ZVRhc2tDbGljayhldmVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyB0aXRsZUVsZW1lbnQsIGFkZFRhc2tCdXR0b24gfTtcbn1cblxuLy9jcmVhdGVzIHRoZSB0YXNrIGNyZWF0aW9uIGZvcm1cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2tDbGljayhhZGRUYXNrQnV0dG9uLCBmb3JtQ29udGFpbmVyKSB7XG4gICAgYWRkVGFza0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCB7IGZvcm0sIGZvcm1MZWZ0LCBmb3JtUmlnaHQsIGZvcm1Cb3R0b20gfSA9IHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1MYXlvdXQoZm9ybUNvbnRhaW5lcik7XG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vY2FsbCBmb3JtIGZ1bmN0aW9ucyB0byBmaWxsIGluIHRoZSBmb3JtLi4uXG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybVRpdGxlKGZvcm1MZWZ0KTtcbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtRGVzY3JpcHRpb24oZm9ybUxlZnQpO1xuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1EYXRlKGZvcm1SaWdodCk7XG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybVByaW9yaXR5U2VsZWN0b3IoZm9ybVJpZ2h0KTtcbiAgICBjb25zdCB7IHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uIH0gPSB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtQnV0dG9ucyhmb3JtQm90dG9tKTtcblxuICAgIC8vYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBjcmVhdGVkIHN1Ym1pdC9jYW5jZWwgYnV0dG9uc1xuICAgIGZvcm1BY3Rpb25zT2JqZWN0LmF0dGFjaFN1Ym1pdExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBmb3JtQ29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKTtcbiAgICBmb3JtQWN0aW9uc09iamVjdC5hdHRhY2hDYW5jZWxMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbik7XG59XG5cbi8vbWF0Y2hlcyBpZCBvZiB0YXNrIG9iamVjdCBhbmQgZG9tIGVsZW1lbnRcbmZ1bmN0aW9uIGZpbmRDbGlja2VkVGFzayhldmVudCkge1xuICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stY29tcGxldGUtYnV0dG9uJyk7XG5cbiAgICBpZiAodGFza0NvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJJRCA9IHBhcnNlSW50KHRhc2tDb250YWluZXIuZGF0YXNldC50YXNrSWQpO1xuXG4gICAgICAgIHJldHVybiB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay50YXNrSUQgPT0gdGFza0NvbnRhaW5lcklEKTtcbiAgICB9XG4gICAgICAgIFxuICAgIHJldHVybiBudWxsOyAvL2lmIG5vIHRhc2sgZm91bmRcbn1cblxuLy90b2dnbGVzIHRhc2sgYmV0d2VlbiBjb21wbGV0ZSBhbmQgaW5jb21wbGV0ZVxuZnVuY3Rpb24gaGFuZGxlQ29tcGxldGVUYXNrQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCBjbGlja2VkVGFzayA9IGZpbmRDbGlja2VkVGFzayhldmVudCk7XG5cbiAgICBpZiAoY2xpY2tlZFRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnRMZWZ0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWVsZW1lbnQtbGVmdCcpO1xuICAgICAgICBjb25zdCBkb21UaXRsZSA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBkb21EZXNjcmlwdGlvbiA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGlmIChjbGlja2VkVGFzay5zdGF0dXMgPT09ICdpbmNvbXBsZXRlJykgcmV0dXJuIGlzQ29tcGxldGUoY2xpY2tlZFRhc2ssIHRhc2tDb250YWluZXIsIGV2ZW50LCBkb21UaXRsZSwgZG9tRGVzY3JpcHRpb24pO1xuICAgICAgICBpZiAoY2xpY2tlZFRhc2suc3RhdHVzID09PSAnY29tcGxldGUnKSByZXR1cm4gaXNJbmNvbXBsZXRlKGNsaWNrZWRUYXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKTtcbiAgICB9XG59XG5cbi8vZGVsZXRlcyBvYmplY3QgaW4gdGFzayBhcnJheSBhbmQgcmVtb3ZlcyBkb20gZGlzcGxheSBlbGVtZW50XG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUYXNrQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCB0YXNrRGVsZXRlID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kZWxldGUnKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKHRhc2tEZWxldGUpIHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lcklEID0gcGFyc2VJbnQodGFza0NvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCk7XG5cbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2sudGFza0lEID09PSB0YXNrQ29udGFpbmVySUQpO1xuXG4gICAgICAgIHRhc2tzLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxufVxuXG4vL2NoYW5nZXMgc3RhdHVzICsgZG9tIHRvIGNvbXBsZXRlXG5mdW5jdGlvbiBpc0NvbXBsZXRlKHRhc2ssIHRhc2tDb250YWluZXIsIGV2ZW50LCBkb21UaXRsZSwgZG9tRGVzY3JpcHRpb24pIHtcblxuICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IHN0YXR1c1xuICAgIHRhc2suc3RhdHVzID0gJ2NvbXBsZXRlJztcblxuICAgIC8vY3NzIHRvIGRpc3BsYXkgY29tcGxldGVkIHN0YXR1c1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2snKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICBkb21UaXRsZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgZG9tRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xufVxuXG4vL2NoYW5nZXMgc3RhdHVzICsgZG9tIHRvIGluY29tcGxldGVcbmZ1bmN0aW9uIGlzSW5jb21wbGV0ZSh0YXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKSB7XG5cbiAgICAvL3VwZGF0ZSB0YXNrIG9iamVjdCBzdGF0dXNcbiAgICB0YXNrLnN0YXR1cyA9ICdpbmNvbXBsZXRlJztcblxuICAgIC8vY3NzIHRvIGRpc3BsYXkgY29tcGxldGVkIHN0YXR1c1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICBkb21UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgZG9tRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xufVxuXG4vL2VkaXQgdGFzayBhZnRlciBjcmVhdGlvblxuYm9keUNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgLy9pZGVudGlmeSBlbGVtZW50c1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGFza0VsZW1lbnRMZWZ0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWVsZW1lbnQtbGVmdCcpO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50UmlnaHQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stZWxlbWVudC1yaWdodCcpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay10aXRsZScpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWR1ZS1kYXRlJyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLXByaW9yaXR5Jyk7XG5cbiAgICAvL2NyZWF0ZSBlbGVtZW50XG4gICAgY29uc3QgZWRpdElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0SW5wdXRCb3guY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuXG4gICAgLy9lZGl0IHRoZSB0YXNrIHRpdGxlXG4gICAgaWYgKHRhc2tUaXRsZSkgeyAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tJRE51bWJlciA9IHRhc2tDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnKTtcblxuICAgICAgICAvL2FkZCBpbnB1dCB0byBlZGl0IHRpdGxlXG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrVGl0bGUpO1xuICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcblxuICAgICAgICAvL3Rha2UgZWRpdGVkIHRpdGxlIGFuZCBzdWJtaXRcbiAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZWRpdElucHV0Qm94LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2V4dHJhY3QgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSBnZXRUYXNrcygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay50YXNrSUQgPT0gdGFza0lETnVtYmVyKTtcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlID0gZWRpdElucHV0Qm94LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgZG9tIGRpc3BsYXlcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvL3JlLWFwcGVuZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZCh0YXNrVGl0bGUsIGVkaXRJbnB1dEJveCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vZWRpdCB0aGUgdGFzayBkZXNjcmlwdGlvblxuICAgIGlmICh0YXNrRGVzY3JpcHRpb24pIHsgICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrSUROdW1iZXIgPSB0YXNrQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJyk7XG5cbiAgICAgICAgLy9hZGQgaW5wdXQgdG8gZWRpdCB0aXRsZVxuICAgICAgICB0YXNrRWxlbWVudExlZnQucmVwbGFjZUNoaWxkKGVkaXRJbnB1dEJveCwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG5cbiAgICAgICAgLy90YWtlIGVkaXRlZCB0aXRsZSBhbmQgc3VibWl0XG4gICAgICAgIGVkaXRJbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9leHRyYWN0IHZhbHVlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gdGFza3MuZmluZCh0YXNrID0+IHRhc2sudGFza0lEID09IHRhc2tJRE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSB0YXNrIHRpdGxlXG4gICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGRvbSBkaXNwbGF5XG4gICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZWRpdElucHV0Qm94LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy9yZS1hcHBlbmQgZWxlbWVudFxuICAgICAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQodGFza0Rlc2NyaXB0aW9uLCBlZGl0SW5wdXRCb3gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL2VkaXQgdGhlIHRhc2sgZHVlIGRhdGVcbiAgICBpZiAodGFza0R1ZURhdGUpIHsgICAgICAgIFxuICAgICAgICBlZGl0SW5wdXRCb3gudHlwZSA9ICdkYXRlJztcbiAgICAgICAgY29uc3QgdGFza0lETnVtYmVyID0gdGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcpO1xuXG4gICAgICAgIC8vYWRkIGlucHV0IHRvIGVkaXQgdGl0bGVcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgLy90YWtlIGVkaXRlZCB0aXRsZSBhbmQgc3VibWl0XG4gICAgICAgIGVkaXRJbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9leHRyYWN0IHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBnZXRUYXNrcygpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLnRhc2tJRCA9PSB0YXNrSUROdW1iZXIpO1xuXG4gICAgICAgICAgICAvL3VwZGF0ZSB0YXNrIHRpdGxlXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgIC8vdXBkYXRlIGRvbSBkaXNwbGF5XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lclRleHQgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgIC8vcmUtYXBwZW5kIGVsZW1lbnRcbiAgICAgICAgICAgIHRhc2tFbGVtZW50UmlnaHQucmVwbGFjZUNoaWxkKHRhc2tEdWVEYXRlLCBlZGl0SW5wdXRCb3gpO1xuICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL2VkaXQgcHJpb3JpdHkgYnV0dG9uXG4gICAgaWYgKHRhc2tQcmlvcml0eSkge1xuXG4gICAgICAgIC8vZXh0cmFjdCB2YWx1ZXNcbiAgICAgICAgY29uc3QgdGFza0lETnVtYmVyID0gdGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcpO1xuICAgICAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay50YXNrSUQgPT0gdGFza0lETnVtYmVyKTtcblxuICAgICAgICAvL2N5Y2xlIGJldHdlZW4gbG93LW1pZC1oaWdoIHByaW9yaXR5XG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXByaW9yaXR5LWxvdycpOlxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbWlkJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktbWlkJyk6XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stcHJpb3JpdHktbWlkJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbnRhaW5lci1taWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktaGlnaCcpOlxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAnbG93JztcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pOyIsIi8vb2JqZWN0IHRvIHN0b3JlIGJhc2UgaXRlbXMgb24gdGhlIHBhZ2UgKHRpdGxlLCBmaXJzdCBidXR0b24gZXRjKVxuZXhwb3J0IGNvbnN0IHBhZ2VFbGVtZW50c09iamVjdCA9IHtcblxuICAgIGNyZWF0ZVBhZ2VUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9ICdBbGwgUXVlc3RzJztcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvZHktdGl0bGUnKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlRWxlbWVudDtcbiAgICB9LFxuXG4gICAgY3JlYXRlQWRkVGFza0J1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnfCt8IEFkZCBRdWVzdCc7XG4gICAgICAgIHJldHVybiBhZGRUYXNrQnV0dG9uO1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gICAgfVxufSIsImltcG9ydCB7IHRhc2tzLCBjcmVhdGVUYXNrLCBnZXRUYXNrcyB9IGZyb20gXCIuL3RvZG8tZmFjdG9yeVwiO1xuXG4vL29iamVjdCB0byBzdG9yZSBmdW5jdGlvbnMgcmVsYXRlZCB0byB0YXNrIGNyZWF0aW9uIC8gZm9ybSBzdWJtaXNzaW9uXG5leHBvcnQgY29uc3QgZm9ybUFjdGlvbnNPYmplY3QgPSB7XG4gICAgXG4gICAgYXR0YWNoU3VibWl0TGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pIHtcblxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLnRyaW0oKTtcblxuICAgICAgICAgICAgaWYgKCF0aXRsZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQgKCdQbGVhc2UgZmlsbCBpbiB0aGUgdGl0bGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LmFkZFRhc2soKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZVRhc2tMaXN0KHRhc2tzKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbW92ZUZvcm0oZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhdHRhY2hDYW5jZWxMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbikge1xuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QucmVtb3ZlRm9ybShmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGVUYXNrTGlzdCh0YXNrcykge1xuXG4gICAgICAgIGNvbnN0IGJvZHlDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ1dHRvbicpO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAvL3ByZXZlbnRzIGR1cGxpY2F0ZSBlbnRyaWVzXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2VhY2ggc2lkZSBvZiB0aGUgdGFzayBpdGVtXG4gICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgLy90YXNrRWxlbWVudExlZnQgaXRlbXMgLSBjb21wbGV0ZSBidXR0b24sIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICAgICAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1jb21wbGV0ZS1idXR0b24nKTtcbiAgICAgICAgICAgIHRhc2tDb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stY29tcGxldGUtYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICAgICAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX1gO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7dGFzay5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgICAgICAvL3Rhc2tFbGVtZW50UmlnaHQgLSBkdWUgZGF0ZSwgcHJpb3JpdHksIGRlbGV0ZSBidXR0b25cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICAgICAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSA9PSAnJykgdGFzay5kdWVEYXRlID0gJ25vIGR1ZSBkYXRlJztcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gYCR7dGFzay5kdWVEYXRlfWA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3Rhc2sucHJpb3JpdHl9YDtcblxuICAgICAgICAgICAgLy91cGRhdGUgY3NzIGJhc2VkIG9uIHByaW9yaXR5IHZhbHVlXG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5kaXNwbGF5UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lciwgdGFza1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGFza0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZScpO1xuICAgICAgICAgICAgdGFza0RlbGV0ZS50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBlbGVtZW50cyB0byBwYWdlXG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7ICAgIFxuXG4gICAgICAgICAgICB0YXNrRWxlbWVudFJpZ2h0LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XG5cbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnRMZWZ0KTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnRSaWdodCk7XG5cbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB0YXNrLnRhc2tJRCk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50UmlnaHQuY2xhc3NMaXN0LmFkZCgndGFzay1lbGVtZW50LXJpZ2h0Jyk7XG4gICAgICAgIH0pOyAgICBcbiAgICB9LFxuICAgIFxuICAgIHJlbW92ZUZvcm0oZm9ybUNvbnRhaW5lcikge1xuXG4gICAgICAgIGNvbnN0IGJvZHlDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9LFxuXG4gICAgLy9jYWxsZWQgYnkgc3VibWl0IGJ1dHRvbiB0byBwdXQgdGFzayBvbnRvIHBhZ2VcbiAgICBhZGRUYXNrKCkge1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1zZWxlY3Rpb24nKS52YWx1ZTtcblxuICAgICAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9LFxuXG4gICAgLy9jc3MgdG8gdGFzayBjb250YWluZXIgYW5kIHByaW9yaXR5IGJ1dHRvbiBiYXNlZCBvbiBwcmlvcml0eSB2YWx1ZVxuICAgIGRpc3BsYXlQcmlvcml0eSh0YXNrLCB0YXNrQ29udGFpbmVyLCB0YXNrUHJpb3JpdHkpIHtcblxuICAgICAgICAvL3ByZXZlbnQgc3RhY2tpbmcgbXVsdGlwbGUgY2xhc3Nlc1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eScpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1sb3ctcHJpb3JpdHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbWlkJyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvL29iamVjdCB0byBzdG9yZSBmdW5jdGlvbnMgdGhhdCBjcmVhdGUgZm9ybSB0byBnZW5lcmF0ZSBpbmRpdmlkdWFsIHRhc2tzXG5leHBvcnQgY29uc3QgdGFza0Zvcm1PYmplY3QgPSB7XG5cbiAgICBjcmVhdGVGb3JtTGF5b3V0KGZvcm1Db250YWluZXIpIHtcblxuICAgICAgICAvL2NyZWF0ZSBmb3JtIG9iamVjdHNcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgZm9ybUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9ybVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1Cb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvL2FwcGVuZCBlbGVtZW50cyB0byBmb3JtXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUxlZnQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1SaWdodCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJvdHRvbSk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3Nlc1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybUxlZnQuY2xhc3NMaXN0LmFkZCgnZm9ybS1sZWZ0Jyk7XG4gICAgICAgIGZvcm1SaWdodC5jbGFzc0xpc3QuYWRkKCdmb3JtLXJpZ2h0Jyk7XG4gICAgICAgIGZvcm1Cb3R0b20uY2xhc3NMaXN0LmFkZCgnZm9ybS1ib3R0b20nKTtcblxuICAgICAgICByZXR1cm4geyBmb3JtLCBmb3JtTGVmdCwgZm9ybVJpZ2h0LCBmb3JtQm90dG9tIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1UaXRsZShmb3JtTGVmdCkge1xuXG4gICAgICAgIC8vY3JlYXRlIHRpdGxlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgIC8vcHJldmVudCBwYWdlIHJlZnJlc2hcbiAgICAgICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2FwcGVuZCB0byBsZWZ0IHNpZGVcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIGZvcm1MZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIFxuICAgICAgICAvL2FkZCBjbGFzc1xuICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcblxuICAgICAgICByZXR1cm4geyB0aXRsZUxhYmVsLCB0aXRsZUlucHV0IH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1EZXNjcmlwdGlvbihmb3JtTGVmdCkge1xuXG4gICAgICAgIC8vY3JlYXRlIGRlc2NyaXB0aW9uIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24gKG9wdGlvbmFsKScpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnJvd3MgPSAyO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIGxlZnQgc2lkZSBcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGZvcm1MZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIHJldHVybiB7IGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybURhdGUoZm9ybVJpZ2h0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgZGF0ZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZScpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcblxuICAgICAgICAvL2FwcGVuZCB0byByaWdodCBzaWRlXG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgICAgICAvL2FkZCBjbGFzc1xuICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1kYXRlJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZGF0ZUxhYmVsLCBkYXRlSW5wdXQgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybVByaW9yaXR5U2VsZWN0b3IoZm9ybVJpZ2h0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgcHJpb3JpdHkgc2VsZWN0aW9uIGRyb3Bib3ggYW5kIG9wdGlvbnNcbiAgICAgICAgY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1zZWxlY3Rpb24nKTtcbiAgICAgICAgLy8gc2VsZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgICAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LXNlbGVjdGlvbicpO1xuICAgICAgICAvLyBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAvLyBwbGFjZWhvbGRlck9wdGlvbi50ZXh0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgLy8gcGxhY2Vob2xkZXJPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBwbGFjZWhvbGRlck9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICBvcHRpb24xLnRleHQgPSAnTG93IChQcmlvcml0eSknO1xuICAgICAgICBvcHRpb24xLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24yLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgIG9wdGlvbjIudGV4dCA9ICdNZWRpdW0nO1xuICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjMudmFsdWUgPSAnaGlnaCc7XG4gICAgICAgIG9wdGlvbjMudGV4dCA9ICdIaWdoJztcblxuICAgICAgICAvL2FwcGVuZCB0byByaWdodCBzaWRlXG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbCk7XG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChzZWxlY3RJbnB1dCk7XG4gICAgICAgIC8vIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICAgICAgICAvL2FkZCBjbGFzc1xuICAgICAgICBzZWxlY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpO1xuXG4gICAgICAgIHJldHVybiB7IHNlbGVjdExhYmVsLCBzZWxlY3RJbnB1dCwgb3B0aW9uMSwgb3B0aW9uMiwgb3B0aW9uMyB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtQnV0dG9ucyhmb3JtQm90dG9tKSB7XG5cbiAgICAgICAgLy9jcmVhdGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIGJvdHRvbVxuICAgICAgICBmb3JtQm90dG9tLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1idXR0b24nKTtcbiAgICAgICAgZm9ybUJvdHRvbS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwtYnV0dG9uJylcblxuICAgICAgICAvL2FkZCBjbGFzc2VzXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJylcbiAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idXR0b24nKTsgICAgXG5cbiAgICAgICAgcmV0dXJuIHsgc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24gfTtcbiAgICB9XG59IiwiLy90YXNrIGFycmF5IHRvIHN0b3JlIGFsbCB0YXNrc1xuZXhwb3J0IGNvbnN0IHRhc2tzID0gW107XG5sZXQgdGFza0NvdW50ZXIgPSAwO1xuXG4vL2NyZWF0ZXMgdGFzayBvYmplY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRhc2tJRDogdGFza0NvdW50ZXIsXG4gICAgfTtcblxuICAgIHRhc2tDb3VudGVyKys7XG5cbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICByZXR1cm4gdGFzaztcbn1cblxuLy9zZW5kIHRhc2sgYXJyYXkgdG8gYmUgZGlzcGxheWVkXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRhc2tzO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVBbGxRdWVzdHNQYWdlIH0gZnJvbSAnLi9hbGxUYXNrcy5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhbGxRdWVzdHNQYWdlKTtcblxuZnVuY3Rpb24gYWxsUXVlc3RzUGFnZSgpIHtcbiAgICAvL2ltcG9ydCB0YXNrIGNyZWF0aW9uIHRvb2xzXG4gICAgY29uc3QgeyB0aXRsZUVsZW1lbnQsIGFkZFRhc2tCdXR0b24gfSA9IGNyZWF0ZUFsbFF1ZXN0c1BhZ2UoKTtcblxuICAgIC8vYXBwZW5kIHRvb2xzIHRvIHBhZ2VcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGVudC1jb250YWluZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=