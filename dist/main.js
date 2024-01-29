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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;AACd;;CAEC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;IACrB,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,qBAAqB;IACrB,mBAAmB;IACnB,uCAAuC;IACvC,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,yBAAyB;IACzB,2DAA8C;IAC9C,sBAAsB;IACtB,2BAA2B;IAC3B,sBAAsB;IACtB,2BAA2B;IAC3B,wBAAwB;IACxB,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;IAC3B,2DAA6D;IAC7D,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,2DAAkD;IAClD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;AACxC;;AAEA,WAAW;AACX;IACI,wBAAwB;IACxB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,mCAAmC;IACnC,0BAA0B;IAC1B,4BAA4B;IAC5B,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,aAAa;AACb;IACI,wBAAwB;IACxB,mCAAmC;IACnC,0BAA0B;IAC1B,4BAA4B;IAC5B,wBAAwB;IACxB,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,mCAAmC;IACnC,2CAA2C;IAC3C,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iCAAiC;IACjC,qBAAqB;IACrB,yCAAyC;AAC7C;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,mCAAmC;IACnC,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;IACf,UAAU;IACV,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI;QACI,2BAA2B;IAC/B;IACA;QACI,4BAA4B;IAChC;IACA;QACI,2BAA2B;IAC/B;AACJ;;CAEC;IACG;QACI,qBAAqB;IACzB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,qBAAqB;IACzB;AACJ;;AAEA;IACI;QACI,gCAAgC;IACpC;IACA;QACI,gCAAgC;IACpC;IACA;QACI,gCAAgC;IACpC;AACJ;;AAEA;;;;;;IAMI,wBAAwB;IACxB,4BAA4B;IAC5B,iBAAiB;IACjB,6BAA6B;IAC7B,UAAU;IACV,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA,SAAS;AACT;IACI,wBAAwB;IACxB,gCAAgC;IAChC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,wBAAwB;IACxB,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mDAAsC;IACtC,0BAA0B;IAC1B,4BAA4B;IAC5B,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,cAAc;AAClB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA,6BAA6B;AAC7B;IACI,2CAA2C;IAC3C,0BAA0B;IAC1B,0CAA0C;IAC1C,2CAA2C;AAC/C;;AAEA;IACI,2CAA2C;IAC3C,0BAA0B;IAC1B,0CAA0C;IAC1C,2CAA2C;AAC/C;;AAEA;;IAEI,cAAc;IACd,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,4BAA4B;AAChC;;AAEA;;;;IAII,eAAe;IACf,iBAAiB;IACjB,6BAA6B;IAC7B,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,4BAA4B;IAC5B,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,gDAAgD;IAChD,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;;IAEI,sBAAsB;IACtB,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,mCAAmC;IACnC,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,yDAAyC;IACzC,sBAAsB;AAC1B;;AAEA;;;;;;IAMI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA,0BAA0B;AAC1B;IACI,mCAAmC;IACnC,0BAA0B;IAC1B,gBAAgB;IAChB;AACJ;;AAEA;;;IAGI,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,qCAAqC;AACzC;;AAEA;IACI,0BAA0B;IAC1B,qCAAqC;AACzC;;AAEA;IACI,2BAA2B;IAC3B,sCAAsC;AAC1C;;AAEA,6BAA6B;AAC7B;IACI,2CAA2C;IAC3C,uCAAuC;IACvC,0CAA0C;IAC1C,6CAA6C;AACjD;;AAEA;IACI,2CAA2C;IAC3C,uCAAuC;IACvC,0CAA0C;IAC1C,6CAA6C;AACjD;;AAEA;IACI,4CAA4C;IAC5C,wCAAwC;IACxC,2CAA2C;IAC3C,8CAA8C;AAClD;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;IACX,WAAW;IACX,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,eAAe;IACf,6BAA6B;AACjC;;AAEA,qDAAqD;AACrD;IACI,gCAAgC;IAChC,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,mCAAmC;IACnC,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["/* css reset */\n*, \nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    /* box-sizing: border-box; */\n}\n\n:root {\n    --primary-color: #2d2749;\n    --secondary-color: #df72a9;\n    --border-radius: 2rem;\n    --border-color: red;\n    --border: 1px solid var(--border-color);\n    --font-color: white;\n    --gap: 1rem;\n    --cancel-color: #a52f2f;\n    --submit-color: #026e02cf;\n    --background-image: url(./imgs/backdrop-2.jpg);\n    --low-priority: yellow;\n    --low-background: #ffff0014;\n    --mid-priority: orange;\n    --mid-background: #ffa5001c;\n    --high-priority: #ff4141;\n    --high-background: #ff414129;\n}\n\n@font-face {\n    font-family: 'Primary-font';\n    src: url('./fonts/QueensidesMedium-x30zV.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Secondary-font';\n    src: url('./fonts/Ubuntu-n1M0.ttf'), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n.content {\n    height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 0.5fr 4fr 0.25fr;\n}\n\n/* header */\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Primary-font';\n    color: var(--font-color);\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    font-size: 5rem;\n    gap: var(--gap);\n}\n\n.svg {\n    height: 6rem;\n    padding-left: 1rem;\n    filter: invert(1);\n}\n\n/* side-bar */\n.side-bar {\n    grid-area: 2 / 1 / 3 / 2;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    color: var(--font-color);\n    font-family: 'Secondary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 2rem;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n#home-tasks {\n    position: sticky;\n    top: 0;\n}\n\n.project-tasks {\n    position: sticky;\n    top: 17rem;\n}\n\n.project-tasks-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: var(--gap);\n    align-items: flex-start;\n}\n\n.new-project {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: var(--border-radius);\n    padding: 0.5rem 1rem 0.5rem 1rem !important;\n    overflow: auto;\n}\n\n.new-project:hover {\n    transform: none;\n    /* background-color: #00000026; */\n    border: var(--border);\n    /* box-shadow: 5px 10px 10px #00000063; */\n}\n\n.project-delete {\n    transition: ease-in-out 0.3s;\n    cursor: pointer;\n    border-radius: var(--border-radius);\n    width: 2rem;\n    height: 2rem;\n}\n\n.project-delete:hover {\n    /* border: 1px solid white; */\n    background: white;\n    color: black;\n}\n\n#home-tasks,\n.project-tasks {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: var(--gap);\n    width: 80%;\n    list-style: none;\n    padding: 1.5rem;\n}\n\n.side-bar-title {\n    border-bottom: var(--border);\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n@keyframes bounce {\n    0% {\n        transform: translateY(10px);\n    }\n    50% {\n        transform: translateY(-10px);\n    }\n    100% {\n        transform: translateY(10px);\n    }\n}\n\n @keyframes pulse {\n    0% {\n        transform: scale(1.0);\n    }\n    50% {\n        transform: scale(1.15);\n    }\n    100% {\n        transform: scale(1.0);\n    }\n}\n\n@keyframes glow {\n    0% {\n        background: rgba(0, 255, 0, 0.2);\n    }\n    50% {\n        background: rgba(0, 255, 0, 0.6);\n    }\n    100% {\n        background: rgba(0, 255, 0, 0.2);\n    }\n}\n\nli > button,\n#body-content-container > button,\n#submit-button,\n#cancel-button,\n.new-project,\n.project-delete {\n    color: var(--font-color);\n    transition: ease-in-out 0.3s;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    padding: 0;\n    background: none;\n    box-sizing: border-box;\n}\n\n.menu-selected {\n    border-bottom: 1px solid white;\n}\n\n#body-content-container > button {\n    animation: bounce 8s infinite;\n    align-self: center;\n    box-sizing: border-box;\n    padding: 0.7rem;\n}\n\n#body-content-container > button:hover {\n    cursor: pointer;\n    border-radius: var(--border-radius);\n    background: white;\n    color: black;\n}\n\nli > button:hover {\n    cursor: pointer;\n    transform: translateX(1rem);\n}\n\n/* main */\n.body {\n    grid-area: 2 / 2 / 3 / 3;\n    background: var(--primary-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#body-content-container {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    border: var(--border);\n    color: var(--font-color);\n    font-family: 'Primary-font';\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: var(--gap);\n    overflow-y: auto;\n    padding-bottom: 1rem;\n}\n\n.body-title {\n    font-size: 4rem;\n    border-bottom: var(--border);\n    border-right: var(--border);\n    padding: 1rem;\n}\n\n.form-container{\n    height: 12rem;\n    width: 90%;\n    background: url(./imgs/backdrop-2.jpg);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    box-sizing: border-box;\n    border: var(--border);\n    align-self: center;\n}\n\n.form {\n    display: grid;\n    grid-template-rows: 3fr 1fr;\n    grid-template-columns: 2fr 1fr;\n    height: 100%;\n    padding: 0.5rem;\n    box-sizing: border-box;\n    gap: 1.5rem;\n}\n\n.form-left,\n.form-right {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.form-left {\n    grid-area: 1 / 1 / 2 / 2;\n    overflow: auto;\n}\n\n.form-right {\n    grid-area: 1 / 2 / 2 / 3;\n}\n\n.form-bottom {\n    grid-area: 2 / 1 / 3 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n/* submit-button/add-button */\n.submit-button:hover {\n    box-shadow: 0px 5px 0px var(--submit-color);\n    color: var(--submit-color);\n    border-left: 1px solid var(--submit-color);\n    border-right: 1px solid var(--submit-color);\n}\n\n.cancel-button:hover {\n    box-shadow: 0px 5px 0px var(--cancel-color);\n    color: var(--cancel-color);\n    border-left: 1px solid var(--cancel-color);\n    border-right: 1px solid var(--cancel-color);\n}\n\n.submit-button, \n.cancel-button {\n    height: 2.5rem;\n    width: 7rem;\n    border-radius: 0.5rem;\n}\n\n.form-bottom > button:hover {\n    cursor: pointer;\n    transform: translateY(-10px);\n}\n\n.form-title,\n.form-description,\n.form-date,\n.form-select {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    font-family: 'Secondary-font';\n    border-radius: 0.5rem;\n    outline: none;\n}\n\n.form-title {\n    height: 1rem;\n    width: 90%;\n}\n\n.form-description {\n    height: 2.5rem;\n    width: 90%;\n}\n\n.form-date,\n.form-select {\n    height: 2rem;\n    width: 12rem;\n    padding: 0;\n    padding-left: 0.2rem;\n}\n\n.task-container {\n    transition: ease-in-out 0.3s;\n    box-sizing: border-box;\n    width: 90%;\n    min-width: 37rem;\n    height: auto;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    /* border-left: 1px solid var(--border-color); */\n    gap: 0.5rem;\n    align-self: center;\n    background-color: #3b3361;\n    overflow: hidden;\n    /* white-space: nowrap; */\n}\n\n.task-element-left,\n.task-element-right {\n    box-sizing: border-box;\n    font-family: 'Secondary-font';\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    width: 100%;\n    display: flex;\n    gap: 3rem;\n    align-items: center;\n}\n\n.task-element-left {\n    justify-content: flex-start;\n}\n\n.task-element-right {\n    justify-content: flex-end;\n    font-size: 1rem;\n}\n\n.task-complete-button {\n    height: 1.5rem;\n    width: 1.5rem;\n    border: 2px solid white;\n    background: none;\n    border-radius: var(--border-radius);\n    flex-shrink: 0;\n}\n\n.completed-task {\n    background: #00f9003d;\n    border-left: 2px solid #04ff04;\n    color: #ffffff69;\n}\n\n.completed-task-text {\n    text-decoration: line-through;\n}\n\n.completed-checked {\n    border: none;   \n    background-image: url(./imgs/checked.png);\n    background-size: cover;\n}\n\n.task-title:hover,\n.task-description:hover,\n.task-due-date:hover,\n.task-complete-button:hover,\n.task-priority:hover,\n.task-delete:hover {\n    cursor: pointer;\n}\n\n.task-title {\n    font-size: 1.5rem;\n}\n\n.task-description {\n    font-size: 1rem;\n}\n\n.task-due-date {\n    width: 6.1rem;\n}\n\n/* priority emblem itself*/\n.task-priority {\n    border-radius: var(--border-radius);\n    padding: 5px 15px 5px 15px;\n    background: none;\n    color: var(--font-color)\n}\n\n.task-priority-low,\n.task-priority-mid,\n.task-priority-high {\n    width: 5.5rem;\n}\n\n.task-priority-low {\n    color: var(--low-priority);\n    border: 1px solid var(--low-priority);\n}\n\n.task-priority-mid {\n    color: var(--mid-priority);\n    border: 1px solid var(--mid-priority);\n}\n\n.task-priority-high {\n    color: var(--high-priority);\n    border: 1px solid var(--high-priority);\n}\n\n/* task container (priority)*/\n.task-container-low-priority {\n    /* border: 1px solid var(--low-priority); */\n    border: 1px solid var(--low-background);\n    border-left: 3px solid var(--low-priority);\n    /* background-color: var(--low-background); */\n}\n\n.task-container-mid-priority {\n    /* border: 1px solid var(--mid-priority); */\n    border: 1px solid var(--mid-background);\n    border-left: 3px solid var(--mid-priority);\n    /* background-color: var(--mid-background); */\n}\n\n.task-container-high-priority {\n    /* border: 1px solid var(--high-priority); */\n    border: 1px solid var(--high-background);\n    border-left: 3px solid var(--high-priority);\n    /* background-color: var(--high-background); */\n}\n\n.task-container:hover {\n    box-shadow: 5px 10px 10px #00000063;\n}\n\n.task-delete {\n    background: none;\n    color: white;\n    width: 3rem;\n}\n\n.no-task {\n    height: 15%;\n    width: 100%;\n    /* border: var(--border); */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    font-size: 3rem;\n    animation: bounce 6s infinite;\n}\n\n/* to obviously show where the task moved upon sort */\n.task-glow {\n    background: rgba(0, 255, 0, 0.7); \n    animation: glow 5s infinite;\n}\n\nfooter {\n    grid-area: 3 / 1 / 4 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Secondary-font';\n    color: white;\n    font-size: 1rem;\n    background: var(--background-image);\n    background-size: 100% 100%;\n    background-attachment: fixed;\n}\n\n.content > div {\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLGlIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFL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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FsbFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLWVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWZvcm0tYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90aGlzV2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JhY2tkcm9wLTIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWVlbnNpZGVzTWVkaXVtLXgzMHpWLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvVWJ1bnR1LW4xTTAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2NoZWNrZWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjc3MgcmVzZXQgKi9cbiosIFxuaHRtbCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xufVxuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMmQyNzQ5O1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZGY3MmE5O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmVkO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAtLWZvbnQtY29sb3I6IHdoaXRlO1xuICAgIC0tZ2FwOiAxcmVtO1xuICAgIC0tY2FuY2VsLWNvbG9yOiAjYTUyZjJmO1xuICAgIC0tc3VibWl0LWNvbG9yOiAjMDI2ZTAyY2Y7XG4gICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgLS1sb3ctcHJpb3JpdHk6IHllbGxvdztcbiAgICAtLWxvdy1iYWNrZ3JvdW5kOiAjZmZmZjAwMTQ7XG4gICAgLS1taWQtcHJpb3JpdHk6IG9yYW5nZTtcbiAgICAtLW1pZC1iYWNrZ3JvdW5kOiAjZmZhNTAwMWM7XG4gICAgLS1oaWdoLXByaW9yaXR5OiAjZmY0MTQxO1xuICAgIC0taGlnaC1iYWNrZ3JvdW5kOiAjZmY0MTQxMjk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSwgZm9ybWF0KCd0dGYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSksIGZvcm1hdCgndHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNGZyIDAuMjVmcjtcbn1cblxuLyogaGVhZGVyICovXG5oZWFkZXIge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xufVxuXG4uc3ZnIHtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuXG4vKiBzaWRlLWJhciAqL1xuLnNpZGUtYmFyIHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbiNob21lLXRhc2tzIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbn1cblxuLnByb2plY3QtdGFza3Mge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAxN3JlbTtcbn1cblxuLnByb2plY3QtdGFza3MtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLm5ldy1wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5uZXctcHJvamVjdDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAyNjsgKi9cbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgLyogYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7ICovXG59XG5cbi5wcm9qZWN0LWRlbGV0ZSB7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2hvbWUtdGFza3MsXG4ucHJvamVjdC10YXNrcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLnNpZGUtYmFyLXRpdGxlIHtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgfVxufVxuXG4gQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdsb3cge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMik7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjYpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMik7XG4gICAgfVxufVxuXG5saSA+IGJ1dHRvbixcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uLFxuI3N1Ym1pdC1idXR0b24sXG4jY2FuY2VsLWJ1dHRvbixcbi5uZXctcHJvamVjdCxcbi5wcm9qZWN0LWRlbGV0ZSB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tZW51LXNlbGVjdGVkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uIHtcbiAgICBhbmltYXRpb246IGJvdW5jZSA4cyBpbmZpbml0ZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwLjdyZW07XG59XG5cbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5saSA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbn1cblxuLyogbWFpbiAqL1xuLmJvZHkge1xuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNib2R5LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4uYm9keS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXIpO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5mb3JtLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEycmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBnYXA6IDEuNXJlbTtcbn1cblxuLmZvcm0tbGVmdCxcbi5mb3JtLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uZm9ybS1sZWZ0IHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5mb3JtLXJpZ2h0IHtcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG59XG5cbi5mb3JtLWJvdHRvbSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi8qIHN1Ym1pdC1idXR0b24vYWRkLWJ1dHRvbiAqL1xuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLXN1Ym1pdC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXN1Ym1pdC1jb2xvcik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXN1Ym1pdC1jb2xvcik7XG59XG5cbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1jYW5jZWwtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtY29sb3IpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY2FuY2VsLWNvbG9yKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jYW5jZWwtY29sb3IpO1xufVxuXG4uc3VibWl0LWJ1dHRvbiwgXG4uY2FuY2VsLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDdyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4uZm9ybS1ib3R0b20gPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuXG4uZm9ybS10aXRsZSxcbi5mb3JtLWRlc2NyaXB0aW9uLFxuLmZvcm0tZGF0ZSxcbi5mb3JtLXNlbGVjdCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5mb3JtLWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uZm9ybS1kYXRlLFxuLmZvcm0tc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWluLXdpZHRoOiAzN3JlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAgIGdhcDogMC41cmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzMzYxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbn1cblxuLnRhc2stZWxlbWVudC1sZWZ0LFxuLnRhc2stZWxlbWVudC1yaWdodCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stZWxlbWVudC1sZWZ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi50YXNrLWVsZW1lbnQtcmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1jb21wbGV0ZS1idXR0b24ge1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLmNvbXBsZXRlZC10YXNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDBmOTAwM2Q7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDRmZjA0O1xuICAgIGNvbG9yOiAjZmZmZmZmNjk7XG59XG5cbi5jb21wbGV0ZWQtdGFzay10ZXh0IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmNvbXBsZXRlZC1jaGVja2VkIHtcbiAgICBib3JkZXI6IG5vbmU7ICAgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50YXNrLXRpdGxlOmhvdmVyLFxuLnRhc2stZGVzY3JpcHRpb246aG92ZXIsXG4udGFzay1kdWUtZGF0ZTpob3Zlcixcbi50YXNrLWNvbXBsZXRlLWJ1dHRvbjpob3Zlcixcbi50YXNrLXByaW9yaXR5OmhvdmVyLFxuLnRhc2stZGVsZXRlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhc2stZHVlLWRhdGUge1xuICAgIHdpZHRoOiA2LjFyZW07XG59XG5cbi8qIHByaW9yaXR5IGVtYmxlbSBpdHNlbGYqL1xuLnRhc2stcHJpb3JpdHkge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59XG5cbi50YXNrLXByaW9yaXR5LWxvdyxcbi50YXNrLXByaW9yaXR5LW1pZCxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xuICAgIHdpZHRoOiA1LjVyZW07XG59XG5cbi50YXNrLXByaW9yaXR5LWxvdyB7XG4gICAgY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcbn1cblxuLnRhc2stcHJpb3JpdHktbWlkIHtcbiAgICBjb2xvcjogdmFyKC0tbWlkLXByaW9yaXR5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xufVxuXG4udGFzay1wcmlvcml0eS1oaWdoIHtcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XG59XG5cbi8qIHRhc2sgY29udGFpbmVyIChwcmlvcml0eSkqL1xuLnRhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eSB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1iYWNrZ3JvdW5kKTsgKi9cbn1cblxuLnRhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eSB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkLXByaW9yaXR5KTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWQtYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZC1iYWNrZ3JvdW5kKTsgKi9cbn1cblxuLnRhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHkge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpOyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLWJhY2tncm91bmQpOyAqL1xufVxuXG4udGFzay1jb250YWluZXI6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzAwMDAwMDYzO1xufVxuXG4udGFzay1kZWxldGUge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzcmVtO1xufVxuXG4ubm8tdGFzayB7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYm9yZGVyOiB2YXIoLS1ib3JkZXIpOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBhbmltYXRpb246IGJvdW5jZSA2cyBpbmZpbml0ZTtcbn1cblxuLyogdG8gb2J2aW91c2x5IHNob3cgd2hlcmUgdGhlIHRhc2sgbW92ZWQgdXBvbiBzb3J0ICovXG4udGFzay1nbG93IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC43KTsgXG4gICAgYW5pbWF0aW9uOiBnbG93IDVzIGluZmluaXRlO1xufVxuXG5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uY29udGVudCA+IGRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkOztDQUVDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDJEQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwyREFBNkQ7SUFDN0QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwyREFBa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7O0FBRUEsV0FBVztBQUNYO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7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LHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQSxxREFBcUQ7QUFDckQ7SUFDSSxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNzcyByZXNldCAqL1xcbiosIFxcbmh0bWwge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMmQyNzQ5O1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2RmNzJhOTtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICAtLWJvcmRlci1jb2xvcjogcmVkO1xcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIC0tZm9udC1jb2xvcjogd2hpdGU7XFxuICAgIC0tZ2FwOiAxcmVtO1xcbiAgICAtLWNhbmNlbC1jb2xvcjogI2E1MmYyZjtcXG4gICAgLS1zdWJtaXQtY29sb3I6ICMwMjZlMDJjZjtcXG4gICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWdzL2JhY2tkcm9wLTIuanBnKTtcXG4gICAgLS1sb3ctcHJpb3JpdHk6IHllbGxvdztcXG4gICAgLS1sb3ctYmFja2dyb3VuZDogI2ZmZmYwMDE0O1xcbiAgICAtLW1pZC1wcmlvcml0eTogb3JhbmdlO1xcbiAgICAtLW1pZC1iYWNrZ3JvdW5kOiAjZmZhNTAwMWM7XFxuICAgIC0taGlnaC1wcmlvcml0eTogI2ZmNDE0MTtcXG4gICAgLS1oaWdoLWJhY2tncm91bmQ6ICNmZjQxNDEyOTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUXVlZW5zaWRlc01lZGl1bS14MzB6Vi50dGYnKSwgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1VidW50dS1uMU0wLnR0ZicpLCBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA0ZnIgMC4yNWZyO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmltYXJ5LWZvbnQnO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxufVxcblxcbi5zdmcge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi8qIHNpZGUtYmFyICovXFxuLnNpZGUtYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jaG9tZS10YXNrcyB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLnByb2plY3QtdGFza3Mge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDE3cmVtO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbSAhaW1wb3J0YW50O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMjY7ICovXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgLyogYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjMDAwMDAwNjM7ICovXFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jaG9tZS10YXNrcyxcXG4ucHJvamVjdC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5zaWRlLWJhci10aXRsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxuICAgIH1cXG59XFxuXFxuIEBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBnbG93IHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjYpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMik7XFxuICAgIH1cXG59XFxuXFxubGkgPiBidXR0b24sXFxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b24sXFxuI3N1Ym1pdC1idXR0b24sXFxuI2NhbmNlbC1idXR0b24sXFxuLm5ldy1wcm9qZWN0LFxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWVudS1zZWxlY3RlZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI2JvZHktY29udGVudC1jb250YWluZXIgPiBidXR0b24ge1xcbiAgICBhbmltYXRpb246IGJvdW5jZSA4cyBpbmZpbml0ZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxufVxcblxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxubGkgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbi5ib2R5IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNib2R5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJpbWFyeS1mb250JztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmJvZHktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWdzL2JhY2tkcm9wLTIuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5mb3JtLWxlZnQsXFxuLmZvcm0tcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1sZWZ0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZvcm0tcmlnaHQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxufVxcblxcbi5mb3JtLWJvdHRvbSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLyogc3VibWl0LWJ1dHRvbi9hZGQtYnV0dG9uICovXFxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWNvbG9yKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zdWJtaXQtY29sb3IpO1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhbmNlbC1jb2xvcik7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLCBcXG4uY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1ib3R0b20gPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxufVxcblxcbi5mb3JtLXRpdGxlLFxcbi5mb3JtLWRlc2NyaXB0aW9uLFxcbi5mb3JtLWRhdGUsXFxuLmZvcm0tc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWNvbmRhcnktZm9udCc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5mb3JtLWRlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5mb3JtLWRhdGUsXFxuLmZvcm0tc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4td2lkdGg6IDM3cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzMzYxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xcbn1cXG5cXG4udGFzay1lbGVtZW50LWxlZnQsXFxuLnRhc2stZWxlbWVudC1yaWdodCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vjb25kYXJ5LWZvbnQnO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lbGVtZW50LWxlZnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLWVsZW1lbnQtcmlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDBmOTAwM2Q7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA0ZmYwNDtcXG4gICAgY29sb3I6ICNmZmZmZmY2OTtcXG59XFxuXFxuLmNvbXBsZXRlZC10YXNrLXRleHQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbXBsZXRlZC1jaGVja2VkIHtcXG4gICAgYm9yZGVyOiBub25lOyAgIFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWdzL2NoZWNrZWQucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnRhc2stdGl0bGU6aG92ZXIsXFxuLnRhc2stZGVzY3JpcHRpb246aG92ZXIsXFxuLnRhc2stZHVlLWRhdGU6aG92ZXIsXFxuLnRhc2stY29tcGxldGUtYnV0dG9uOmhvdmVyLFxcbi50YXNrLXByaW9yaXR5OmhvdmVyLFxcbi50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gICAgd2lkdGg6IDYuMXJlbTtcXG59XFxuXFxuLyogcHJpb3JpdHkgZW1ibGVtIGl0c2VsZiovXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sb3csXFxuLnRhc2stcHJpb3JpdHktbWlkLFxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcbiAgICB3aWR0aDogNS41cmVtO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sb3cge1xcbiAgICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbWlkIHtcXG4gICAgY29sb3I6IHZhcigtLW1pZC1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbn1cXG5cXG4vKiB0YXNrIGNvbnRhaW5lciAocHJpb3JpdHkpKi9cXG4udGFzay1jb250YWluZXItbG93LXByaW9yaXR5IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1iYWNrZ3JvdW5kKTsgKi9cXG59XFxuXFxuLnRhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1wcmlvcml0eSk7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZC1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1taWQtcHJpb3JpdHkpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmFja2dyb3VuZCk7ICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1oaWdoLXByaW9yaXR5IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtYmFja2dyb3VuZCk7ICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggIzAwMDAwMDYzO1xcbn1cXG5cXG4udGFzay1kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4ubm8tdGFzayB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYm9yZGVyOiB2YXIoLS1ib3JkZXIpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBhbmltYXRpb246IGJvdW5jZSA2cyBpbmZpbml0ZTtcXG59XFxuXFxuLyogdG8gb2J2aW91c2x5IHNob3cgd2hlcmUgdGhlIHRhc2sgbW92ZWQgdXBvbiBzb3J0ICovXFxuLnRhc2stZ2xvdyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjcpOyBcXG4gICAgYW5pbWF0aW9uOiBnbG93IDVzIGluZmluaXRlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1NlY29uZGFyeS1mb250JztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHBhZ2VFbGVtZW50c09iamVjdCB9IGZyb20gXCIuL3BhZ2UtZWxlbWVudHNcIjtcbmltcG9ydCB7IHRhc2tGb3JtT2JqZWN0IH0gZnJvbSBcIi4vdGFzay1mb3JtXCI7XG5pbXBvcnQgeyBmb3JtQWN0aW9uc09iamVjdCB9IGZyb20gXCIuL3Rhc2stZm9ybS1hY3Rpb25zXCI7XG5pbXBvcnQgeyBlZGl0VGFza3NPYmplY3QgfSBmcm9tIFwiLi9lZGl0VGFza3NcIjtcblxuZXhwb3J0IGNvbnN0IGJvZHlDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGVudC1jb250YWluZXInKTtcblxuLy9tYWluIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIHRoZSBwYWdlXG5leHBvcnQgY29uc3QgY3JlYXRlQWxsUXVlc3RzUGFnZSA9IHtcblxuICAgIHRpdGxlRWxlbWVudDogcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZVBhZ2VUaXRsZSgpLFxuICAgIGFkZFRhc2tCdXR0b246IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVBZGRUYXNrQnV0dG9uKCksXG4gICAgZm9ybUNvbnRhaW5lcjogcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZUZvcm1Db250YWluZXIoKSxcblxuICAgIC8vY2xpY2sgdG8gYWRkIG5ldyB0YXNrXG4gICAgYWRkVGFzaygpIHtcbiAgICAgICAgaGFuZGxlQWRkVGFzayhjcmVhdGVBbGxRdWVzdHNQYWdlLmFkZFRhc2tCdXR0b24sIGNyZWF0ZUFsbFF1ZXN0c1BhZ2UuZm9ybUNvbnRhaW5lcik7XG4gICAgfSxcblxuICAgIC8vY2xpY2sgdG8gbWFyayB0YXNrIGNvbXBsZXRlXG4gICAgY29tcGxldGVUYXNrKGV2ZW50KSB7XG4gICAgICAgIGVkaXRUYXNrc09iamVjdC5oYW5kbGVDb21wbGV0ZVRhc2soZXZlbnQpO1xuICAgIH0sXG4gICAgXG4gICAgLy9jbGljayB0byBkZWxldGUgdGFza1xuICAgIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICAgICAgZWRpdFRhc2tzT2JqZWN0LmhhbmRsZURlbGV0ZVRhc2soZXZlbnQpO1xuICAgIH0sXG5cbiAgICAvL2RvdWJsZSBjbGljayB0byBlZGl0IHRhc2tzXG4gICAgZWRpdFRhc2soZXZlbnQpIHtcbiAgICAgICAgZWRpdFRhc2tzT2JqZWN0LmhhbmRsZVRhc2tFZGl0KGV2ZW50KTtcbiAgICB9LFxuXG4gICAgLy9hdHRhY2ggZXZlbnQgbGlzdGVuZXJzXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRUYXNrKTtcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNvbXBsZXRlVGFzayk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcy5kZWxldGVUYXNrKTtcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmVkaXRUYXNrKTtcbiAgICB9LFxuXG4gICAgZ2V0IGVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4geyB0aXRsZUVsZW1lbnQ6IHRoaXMudGl0bGVFbGVtZW50LCBhZGRUYXNrQnV0dG9uOiB0aGlzLmFkZFRhc2tCdXR0b24gfTtcbiAgICB9LFxufTtcblxuLy9jcmVhdGVzIHRoZSB0YXNrIGNyZWF0aW9uIGZvcm1cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soYWRkVGFza0J1dHRvbiwgZm9ybUNvbnRhaW5lcikge1xuICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgeyBmb3JtLCBmb3JtTGVmdCwgZm9ybVJpZ2h0LCBmb3JtQm90dG9tIH0gPSB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtTGF5b3V0KGZvcm1Db250YWluZXIpO1xuICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAvL2NhbGwgZm9ybSBmdW5jdGlvbnMgdG8gZmlsbCBpbiB0aGUgZm9ybS4uLlxuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1UaXRsZShmb3JtTGVmdCk7XG4gICAgdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybURlc2NyaXB0aW9uKGZvcm1MZWZ0KTtcbiAgICB0YXNrRm9ybU9iamVjdC5jcmVhdGVGb3JtRGF0ZShmb3JtUmlnaHQpO1xuICAgIHRhc2tGb3JtT2JqZWN0LmNyZWF0ZUZvcm1Qcmlvcml0eVNlbGVjdG9yKGZvcm1SaWdodCk7XG4gICAgY29uc3QgeyBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiB9ID0gdGFza0Zvcm1PYmplY3QuY3JlYXRlRm9ybUJ1dHRvbnMoZm9ybUJvdHRvbSk7XG5cbiAgICAvL2F0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gY3JlYXRlZCBzdWJtaXQvY2FuY2VsIGJ1dHRvbnNcbiAgICBmb3JtQWN0aW9uc09iamVjdC5hdHRhY2hTdWJtaXRMaXN0ZW5lcihzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZm9ybUNvbnRhaW5lciwgYWRkVGFza0J1dHRvbik7XG4gICAgZm9ybUFjdGlvbnNPYmplY3QuYXR0YWNoQ2FuY2VsTGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdGFza3MsIGNyZWF0ZVRhc2ssIGdldFRhc2tzIH0gZnJvbSBcIi4vdG9kby1mYWN0b3J5XCI7XG5pbXBvcnQgeyBib2R5Q29udGVudENvbnRhaW5lciB9IGZyb20gXCIuL2FsbFRhc2tzXCI7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VPYmplY3QgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBmb3JtQWN0aW9uc09iamVjdCB9IGZyb20gXCIuL3Rhc2stZm9ybS1hY3Rpb25zXCI7XG5pbXBvcnQgeyBzb3J0VGFza3NCeURhdGUgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgY29uc3QgZWRpdFRhc2tzT2JqZWN0ID0ge1xuXG4gICAgLy90b2dnbGVzIHRhc2sgYmV0d2VlbiBjb21wbGV0ZSBhbmQgaW5jb21wbGV0ZVxuICAgIGhhbmRsZUNvbXBsZXRlVGFzayhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1jb21wbGV0ZS1idXR0b24nKTtcblxuICAgICAgICBpZiAodGFza0NvbXBsZXRlKSB7IC8vY2FuIGdldCB0aGVzZSBmcm9tIGdldEVsZW1lbnRzKClcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySUQgPSBwYXJzZUludCh0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50TGVmdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRvbVRpdGxlID0gdGFza0VsZW1lbnRMZWZ0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkb21EZXNjcmlwdGlvbiA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3VuZFRhc2sgPSB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay50YXNrSUQgPT0gdGFza0NvbnRhaW5lcklEKTtcblxuICAgICAgICAgICAgaWYgKGZvdW5kVGFzay5zdGF0dXMgPT09ICdpbmNvbXBsZXRlJykgcmV0dXJuIGVkaXRUYXNrc09iamVjdC5pc0NvbXBsZXRlKGZvdW5kVGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoZm91bmRUYXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJykgcmV0dXJuIGVkaXRUYXNrc09iamVjdC5pc0luY29tcGxldGUoZm91bmRUYXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL2RlbGV0ZXMgb2JqZWN0IGluIHRhc2sgYXJyYXkgYW5kIHJlbW92ZXMgZG9tIGRpc3BsYXkgZWxlbWVudFxuICAgIGhhbmRsZURlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWRlbGV0ZScpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmICh0YXNrRGVsZXRlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySUQgPSBwYXJzZUludCh0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkKTtcblxuICAgICAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2sudGFza0lEID09PSB0YXNrQ29udGFpbmVySUQpO1xuXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG4gICAgICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL2NoYW5nZXMgc3RhdHVzICsgZG9tIHRvIGNvbXBsZXRlXG4gICAgaXNDb21wbGV0ZSh0YXNrLCB0YXNrQ29udGFpbmVyLCBldmVudCwgZG9tVGl0bGUsIGRvbURlc2NyaXB0aW9uKSB7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3Qgc3RhdHVzXG4gICAgICAgIHRhc2suc3RhdHVzID0gJ2NvbXBsZXRlJztcblxuICAgICAgICAvL2NzcyB0byBkaXNwbGF5IGNvbXBsZXRlZCBzdGF0dXNcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgZG9tVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuICAgICAgICBkb21EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG5cbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2NoYW5nZXMgc3RhdHVzICsgZG9tIHRvIGluY29tcGxldGVcbiAgICBpc0luY29tcGxldGUodGFzaywgdGFza0NvbnRhaW5lciwgZXZlbnQsIGRvbVRpdGxlLCBkb21EZXNjcmlwdGlvbikge1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IHN0YXR1c1xuICAgICAgICB0YXNrLnN0YXR1cyA9ICdpbmNvbXBsZXRlJztcblxuICAgICAgICAvL2NzcyB0byBkaXNwbGF5IGNvbXBsZXRlZCBzdGF0dXNcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgZG9tVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2stdGV4dCcpO1xuICAgICAgICBkb21EZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG5cbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICByZXRyaWV2ZVRhc2tFbGVtZW50cyhldmVudCkge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoIXRhc2tDb250YWluZXIpIHJldHVybiBudWxsO1xuICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50TGVmdCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhc2stZWxlbWVudC1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tFbGVtZW50TGVmdC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrRWxlbWVudExlZnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudFJpZ2h0ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay1lbGVtZW50LXJpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0VsZW1lbnRSaWdodC5xdWVyeVNlbGVjdG9yKCcudGFzay1kdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrRWxlbWVudFJpZ2h0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgY29uc3QgZWRpdElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZWRpdElucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICAgIFxuICAgICAgICBjb25zdCB0YXNrSUROdW1iZXIgPSBwYXJzZUludCh0YXNrQ29udGFpbmVyLmRhdGFzZXQudGFza0lkKTtcbiAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2sudGFza0lEID09PSB0YXNrSUROdW1iZXIpO1xuICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LFxuICAgICAgICAgICAgdGFza1RpdGxlLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0VsZW1lbnRSaWdodCxcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LFxuICAgICAgICAgICAgZWRpdElucHV0Qm94LFxuICAgICAgICAgICAgdGFza0lETnVtYmVyLFxuICAgICAgICAgICAgdGFza1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgLy9oYW5kbGVzIG5ldyBlZGl0ZWQgdGl0bGUgc3VibWlzc2lvblxuICAgIHN1Ym1pdFRpdGxlKGV2ZW50LCB0YXNrVGl0bGUsIGVkaXRJbnB1dEJveCkge1xuXG4gICAgICAgIGNvbnN0IHsgdGFza0VsZW1lbnRMZWZ0LCB0YXNrIH0gPSBlZGl0VGFza3NPYmplY3QucmV0cmlldmVUYXNrRWxlbWVudHMoZXZlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9yZW1vdmUgaW5wdXQgYm94IGFuZCByZXN0b3JlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZCh0YXNrVGl0bGUsIGVkaXRJbnB1dEJveCk7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBvYmplY3QgdGl0bGVcbiAgICAgICAgdGFzay50aXRsZSA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAvL3VwZGF0ZSBET00gZGlzcGxheVxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIFxuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgfSxcblxuICAgIC8vaGFuZGxlcyBuZXcgZWRpdGVkIGRlc2NyaXB0aW9uIHN1Ym1pc3Npb25cbiAgICBzdWJtaXREZXNjcmlwdGlvbihldmVudCwgdGFza0Rlc2NyaXB0aW9uLCBlZGl0SW5wdXRCb3gpIHtcblxuICAgICAgICBjb25zdCB7IHRhc2tFbGVtZW50TGVmdCwgdGFzayB9ID0gZWRpdFRhc2tzT2JqZWN0LnJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vcmVtb3ZlIGlucHV0IGJveCBhbmQgcmVzdG9yZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQodGFza0Rlc2NyaXB0aW9uLCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IGRlc2NyaXB0aW9uXG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgLy91cGRhdGUgRE9NIGRpc3BsYXlcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIH0sXG5cbiAgICAvL2hhbmRsZXMgbmV3IGVkaXRlZCBkZXNjcmlwdGlvbiBzdWJtaXNzaW9uXG4gICAgc3VibWl0RHVlRGF0ZShldmVudCwgdGFza0R1ZURhdGUsIGVkaXRJbnB1dEJveCkge1xuXG4gICAgICAgIGNvbnN0IHsgdGFza0VsZW1lbnRSaWdodCwgdGFzaywgdGFza0NvbnRhaW5lciB9ID0gZWRpdFRhc2tzT2JqZWN0LnJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vcmVtb3ZlIGlucHV0IGJveCBhbmQgcmVzdG9yZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQucmVwbGFjZUNoaWxkKHRhc2tEdWVEYXRlLCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgb2JqZWN0IGRlc2NyaXB0aW9uXG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGVkaXRJbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAvL3VwZGF0ZSBET00gZGlzcGxheVxuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgICAvL2F1dG8gc29ydCBsaXN0IGJ5IGR1ZSBkYXRlXG4gICAgICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tzQnlEYXRlKFsuLi50YXNrc10pO1xuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVUYXNrTGlzdChzb3J0ZWRUYXNrcyk7XG4gICAgXG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHRhc2tzKTtcbiAgICB9LFxuXG4gICAgLy9jeWNsZSBiZXR3ZWVuIGxvdy1taWQtaGlnaCBwcmlvcml0eVxuICAgIGNoYW5nZVByaW9yaXR5KHRhc2ssIGV2ZW50LCB0YXNrUHJpb3JpdHksIHRhc2tDb250YWluZXIpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktbG93Jyk6XG5cbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1wcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LW1pZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdtZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHktbWlkJyk6XG5cbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1wcmlvcml0eS1taWQnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLW1pZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJztcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgY2FzZSB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTpcblxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAnbG93JztcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93JztcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAgIFxuICAgIGhhbmRsZVRhc2tFZGl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgXG4gICAgICAgICAgICB0YXNrRWxlbWVudExlZnQsIFxuICAgICAgICAgICAgZWRpdElucHV0Qm94LCBcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIsIFxuICAgICAgICAgICAgdGFza1RpdGxlLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0VsZW1lbnRSaWdodCxcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LFxuICAgICAgICAgICAgdGFza1xuICAgICAgICB9ID0gZWRpdFRhc2tzT2JqZWN0LnJldHJpZXZlVGFza0VsZW1lbnRzKGV2ZW50KTtcblxuICAgICAgICBpZiAoIXRhc2tDb250YWluZXIgfHwgIXRhc2tFbGVtZW50TGVmdCB8fCAhdGFza0VsZW1lbnRSaWdodCkgcmV0dXJuIG51bGw7XG4gICAgICBcbiAgICAgICAgLy9lZGl0IHRhc2sgdGl0bGVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stdGl0bGUnKSkge1xuICAgICAgICAgICAgdGFza0VsZW1lbnRMZWZ0LnJlcGxhY2VDaGlsZChlZGl0SW5wdXRCb3gsIHRhc2tUaXRsZSk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guZm9jdXMoKTtcbiAgICAgICAgICAgIGVkaXRJbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZWRpdElucHV0Qm94LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBlZGl0VGFza3NPYmplY3Quc3VibWl0VGl0bGUoZXZlbnQsIHRhc2tUaXRsZSwgZWRpdElucHV0Qm94KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZWRpdCB0YXNrIGRlc2NyaXB0aW9uXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWRlc2NyaXB0aW9uJykpIHtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50TGVmdC5yZXBsYWNlQ2hpbGQoZWRpdElucHV0Qm94LCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRhc2tzT2JqZWN0LnN1Ym1pdERlc2NyaXB0aW9uKGV2ZW50LCB0YXNrRGVzY3JpcHRpb24sIGVkaXRJbnB1dEJveCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2VkaXQgdGFzayBkdWUgZGF0ZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kdWUtZGF0ZScpKSB7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3gudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIHRhc2tFbGVtZW50UmlnaHQucmVwbGFjZUNoaWxkKGVkaXRJbnB1dEJveCwgdGFza0R1ZURhdGUpO1xuICAgICAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG4gICAgICAgICAgICBlZGl0SW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFRhc2tzT2JqZWN0LnN1Ym1pdER1ZURhdGUoZXZlbnQsIHRhc2tEdWVEYXRlLCBlZGl0SW5wdXRCb3gpO1xuXG4gICAgICAgICAgICAgICAgLy9zaG93IG5ldyBsb2NhdGlvbiBpbiB0aGUgdGFzayBsaXN0IGFmdGVyIHNvcnQgKiogZG9lc24ndCB3b3JrXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRhc2tDb250YWluZXIpIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1nbG93Jyk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWdsb3cnKTtcbiAgICAgICAgICAgICAgICAvLyB9LCA1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9lZGl0IHRhc2sgcHJpb3JpdHlcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stcHJpb3JpdHknKSkge1xuICAgICAgICAgICAgZWRpdFRhc2tzT2JqZWN0LmNoYW5nZVByaW9yaXR5KHRhc2ssIGV2ZW50LCB0YXNrUHJpb3JpdHksIHRhc2tDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfSxcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBib2R5Q29udGVudENvbnRhaW5lciwgY3JlYXRlQWxsUXVlc3RzUGFnZSB9IGZyb20gJy4vYWxsVGFza3MuanMnO1xuaW1wb3J0IHsgdGFza3MsIHRhc2tDb3VudGVyT2JqZWN0LCBwcm9qZWN0cywgcHJvamVjdENvdW50ZXJPYmplY3QgfSBmcm9tICcuL3RvZG8tZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VPYmplY3QgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tICcuL3Rhc2stZm9ybS1hY3Rpb25zLmpzJztcbmltcG9ydCB7IHdlZWtzUXVlc3RPYmplY3QgfSBmcm9tICcuL3RoaXNXZWVrLmpzJztcbmltcG9ydCB7IGRheXNRdWVzdE9iamVjdCB9IGZyb20gJy4vdG9kYXkuanMnO1xuXG5jb25zdCBzaWRlQmFyTWVudUl0ZW1zID0ge1xuICAgIHNpZGVCYXJNZW51OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10YXNrcycpLFxuICAgIGFsbFF1ZXN0c1RhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1xdWVzdHMnKSxcbiAgICBkYXlzUXVlc3RUYWI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzLXF1ZXN0cycpLFxuICAgIHdlZWtzUXVlc3RUYWI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrcy1xdWVzdHMnKSxcbiAgICBwcm9qZWN0VGFza3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzJyksXG4gICAgcHJvamVjdHNUYXNrc0xpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzLWxpc3QnKSxcbiAgICBhZGRRdWVzdGxpbmVUYWI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcXVlc3RsaW5lJyksXG5cbiAgICBhZGRDbGFzcyhldmVudCkge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH0sXG59O1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAvL2xvYWQgYWxsIHRhc2tzIHBhZ2UgZmlyc3RcbiAgICBhbGxRdWVzdHNQYWdlKCk7XG5cbiAgICAvL3Nob3cgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICBzaWRlQmFyTWVudUl0ZW1zLmFsbFF1ZXN0c1RhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgXG4gICAgLy9pbml0aWFsaXplIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgICBjcmVhdGVBbGxRdWVzdHNQYWdlLmluaXQoKTtcbn0pO1xuXG5zaWRlQmFyTWVudUl0ZW1zLnNpZGVCYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWxsLXF1ZXN0cycpKSB7XG4gICAgICAgIGFsbFF1ZXN0c1BhZ2UoKTtcblxuICAgICAgICAvL3Nob3cgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRDbGFzcyhldmVudCk7XG5cbiAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgbWVudSB0YWJcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5kYXlzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLndlZWtzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGF5cy1xdWVzdHMnKSkge1xuICAgICAgICBkYXlzUXVlc3RPYmplY3QuZGF5c1F1ZXN0UGFnZSgpO1xuXG4gICAgICAgIC8vc2hvdyBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZENsYXNzKGV2ZW50KTtcblxuICAgICAgICAvL3JlbW92ZSBzZWxlY3RlZCBtZW51IHRhYlxuICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFsbFF1ZXN0c1RhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMud2Vla3NRdWVzdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3ZWVrcy1xdWVzdHMnKSkge1xuICAgICAgICB3ZWVrc1F1ZXN0T2JqZWN0LndlZWtzUXVlc3RQYWdlKCk7XG5cbiAgICAgICAgLy9zaG93IHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWRkQ2xhc3MoZXZlbnQpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHNlbGVjdGVkIG1lbnUgdGFiXG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMuYWxsUXVlc3RzVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VsZWN0ZWQnKTtcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5kYXlzUXVlc3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZWxlY3RlZCcpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBhbGxRdWVzdHNQYWdlKCkge1xuICAgIC8vY2xlYXIgdGhlIHBhZ2VcbiAgICBib2R5Q29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vaW1wb3J0IHRhc2sgcGFnZSBlbGVtZW50c1xuICAgIGNvbnN0IHsgdGl0bGVFbGVtZW50LCBhZGRUYXNrQnV0dG9uIH0gPSBjcmVhdGVBbGxRdWVzdHNQYWdlLmVsZW1lbnRzO1xuXG4gICAgLy9hcHBlbmQgdG9vbHMgdG8gcGFnZVxuICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBjb25zdCByZXRyaWV2ZWRUYXNrcyA9IGxvY2FsU3RvcmFnZU9iamVjdC5nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHRhc2tzLmxlbmd0aCA9IDA7XG4gICAgdGFza3MucHVzaCguLi5yZXRyaWV2ZWRUYXNrcyk7XG5cbiAgICBjb25zdCByZXRyaWV2ZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZU9iamVjdC5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHByb2plY3RzLmxlbmd0aCA9IDA7XG4gICAgcHJvamVjdHMucHVzaCguLi5yZXRyaWV2ZWRQcm9qZWN0cyk7XG5cbiAgICAvL3ByZXZlbnQgdGFzayBjb3VudGVyIGZyb20gc3RhcnRpbmcgd2l0aCB3cm9uZyBpZCBudW1iZXIgb24gcGFnZSByZWxvYWRcbiAgICBpZiAodGFza3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxldCBwcmV2aW91c1Rhc2tJZCA9IHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLnRhc2tJRDtcbiAgICAgICAgdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIgPSBwcmV2aW91c1Rhc2tJZCArIDE7XG4gICAgfVxuXG4gICAgLy9zb3J0IHRhc2tzIGluIG9yZGVyIG9uIHBhZ2UgbG9hZFxuICAgIHNvcnRUYXNrc0J5RGF0ZSh0YXNrcyk7XG5cbiAgICAvL3JlbmRlciBzYXZlZCBwcm9qZWN0cyBvbiBwYWdlIGxvYWRcbiAgICByZW5kZXJQcm9qZWN0c0xpc3QocHJvamVjdHMpO1xuXG4gICAgZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3QodGFza3MpO1xuXG4gICAgcmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhc2tzQnlEYXRlKHRhc2tzKSB7XG4gICAgcmV0dXJuICB0YXNrcy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKSk7XG59XG5cblxuXG5cblxuXG5cbnNpZGVCYXJNZW51SXRlbXMucHJvamVjdFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLXF1ZXN0bGluZScpKSB7XG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy90byBvbmx5IGFkZCBvbmUgcHJvamVjdCBhdCBhIHRpbWVcbiAgICAgICAgc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGVkaXRJbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGVkaXRJbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG4gICAgICAgIHNpZGVCYXJNZW51SXRlbXMucHJvamVjdHNUYXNrc0xpc3QuYXBwZW5kQ2hpbGQoZWRpdElucHV0Qm94KTtcbiAgICAgICAgZWRpdElucHV0Qm94LmZvY3VzKCk7XG5cbiAgICAgICAgZWRpdElucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVkaXRJbnB1dEJveC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlZGl0SW5wdXRCb3gudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KGVkaXRJbnB1dEJveCwgcHJvamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgICAgIC8vcmUtZXN0YWJsaXNoIGFkZCBidXR0b25cbiAgICAgICAgICAgICAgICBzaWRlQmFyTWVudUl0ZW1zLmFkZFF1ZXN0bGluZVRhYi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlT2JqZWN0LnNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vbmV3IHByb2plY3QgY3JlYXRpb25cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoZWRpdElucHV0Qm94LCBwcm9qZWN0VGl0bGUpIHtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgc2lkZUJhck1lbnVJdGVtcy5wcm9qZWN0c1Rhc2tzTGlzdC5yZXBsYWNlQ2hpbGQobmV3UHJvamVjdCwgZWRpdElucHV0Qm94KTtcblxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QnKTtcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKTtcblxuICAgIHByb2plY3RDb3VudGVyT2JqZWN0LnByb2plY3RJRCsrO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUnKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ3gnO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICBcbiAgICBzaWRlQmFyTWVudUl0ZW1zLnByb2plY3RzVGFza3NMaXN0LmFwcGVuZENoaWxkKHNpZGVCYXJNZW51SXRlbXMuYWRkUXVlc3RsaW5lVGFiKTtcblxuICAgIHJldHVybiB7IG5ld1Byb2plY3QsIGRlbGV0ZVByb2plY3RCdXR0b24gfTtcbn1cblxuLy9yZW5kZXIgc2F2ZWQgcHJvamVjdHMgb24gcGFnZSBsb2FkXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0xpc3QocHJvamVjdHMpIHtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzLWxpc3QnKTtcblxuICAgIC8vY2xlYXIgdG8gcHJldmVudCBzdGFja2luZ1xuICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG5cbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcpO1xuICAgICAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKTtcbiAgICBcbiAgICAgICAgcHJvamVjdENvdW50ZXJPYmplY3QucHJvamVjdElEKys7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIFxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoc2lkZUJhck1lbnVJdGVtcy5hZGRRdWVzdGxpbmVUYWIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGV2ZW50KSB7XG4gICAgY29uc3QgcHJvamVjdFRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzLWxpc3QnKTtcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm5ldy1wcm9qZWN0Jyk7XG4gICAgLy90aXRsZSArICd4JyBmb3IgZGVsZXRlIGJ1dHRvbiwgdXBkYXRlIGxhdGVyIC0tIGlmIHJlcGxhY2VkIGJ5IGljb25cbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGVUZXh0ID0gcHJvamVjdFRvRGVsZXRlLnRleHRDb250ZW50OyBcbiAgICAvLyBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0VG9EZWxldGUuZGF0YXNldC5wcm9qZWN0SWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vbmVlZCAneCcgLSBkb20gZWxlbWVudC50ZXh0Q29udGVudCBjb250YWlucyBsZXR0ZXIgeCBmb3IgZGVsZXRlIGJ1dHRvblxuICAgICAgICBpZiAoYCR7cHJvamVjdHNbaV19eGAgPT0gcHJvamVjdFRvRGVsZXRlVGV4dCkge1xuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdFRhc2tzTGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0VG9EZWxldGUpO1xuICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG59XG5cbi8vZGVsZXRlIHByb2plY3Qgb24gZG91YmxlIGNsaWNrXG5zaWRlQmFyTWVudUl0ZW1zLnByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWRlbGV0ZScpKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkZWxldGVQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG59KTsgIiwiZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZU9iamVjdCA9IHtcblxuICAgIC8vc2F2ZSB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpIHtcbiAgICAgICAgY29uc3QgdGFza3NKU09OID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCB0YXNrc0pTT04pO1xuICAgIH0sXG5cbiAgICAvL3NhdmUgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgcHJvamVjdHNKU09OKTtcbiAgICB9LFxuXG4gICAgLy9yZXRyaWV2ZSB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRhc2tzSlNPTikgfHwgW107XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9yZXRyaWV2ZSB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb2plY3RzSlNPTikgfHwgW107XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9LFxufSIsIi8vb2JqZWN0IHRvIHN0b3JlIGJhc2UgaXRlbXMgb24gdGhlIHBhZ2UgKHRpdGxlLCBmaXJzdCBidXR0b24gZXRjKVxuZXhwb3J0IGNvbnN0IHBhZ2VFbGVtZW50c09iamVjdCA9IHtcblxuICAgIGNyZWF0ZVBhZ2VUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9ICdBbGwgUXVlc3RzJztcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvZHktdGl0bGUnKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlRWxlbWVudDtcbiAgICB9LFxuXG4gICAgY3JlYXRlQWRkVGFza0J1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnfCt8IEFkZCBRdWVzdCc7XG4gICAgICAgIHJldHVybiBhZGRUYXNrQnV0dG9uO1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gICAgfVxufSIsImltcG9ydCB7IHRhc2tzLCBjcmVhdGVUYXNrLCBnZXRUYXNrcyB9IGZyb20gXCIuL3RvZG8tZmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSBcIi4vcGFnZS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlT2JqZWN0IH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgc29ydFRhc2tzQnlEYXRlIH0gZnJvbSBcIi5cIjtcblxuLy9vYmplY3QgdG8gc3RvcmUgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGFzayBjcmVhdGlvbiAvIGZvcm0gc3VibWlzc2lvblxuZXhwb3J0IGNvbnN0IGZvcm1BY3Rpb25zT2JqZWN0ID0ge1xuICAgIFxuICAgIGF0dGFjaFN1Ym1pdExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBmb3JtQ29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKSB7XG5cbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0ICgnUGxlYXNlIGZpbGwgaW4gdGhlIHRpdGxlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgICAgICAgICAvLyBidWcgaW4gaGVyZT8/P1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QuYWRkVGFzaygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC51cGRhdGVUYXNrTGlzdCh0YXNrcyk7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW1vdmVGb3JtKGZvcm1Db250YWluZXIpO1xuXG4gICAgICAgICAgICAvL2F1dG8gc29ydCBpbnRvIGxpc3QgYWZ0ZXIgY3JlYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tzQnlEYXRlKFsuLi50YXNrc10pO1xuICAgICAgICAgICAgZm9ybUFjdGlvbnNPYmplY3QudXBkYXRlVGFza0xpc3Qoc29ydGVkVGFza3MpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXR0YWNoQ2FuY2VsTGlzdGVuZXIoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGZvcm1Db250YWluZXIsIGFkZFRhc2tCdXR0b24pIHtcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbW92ZUZvcm0oZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlVGFza0xpc3QodGFza3MpIHtcblxuICAgICAgICBjb25zdCBib2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICAvL3ByZXZlbnQgZHVwbGljYXRlIHRhc2tzXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vcmUtYWRkIHRpdGxlIHRvIHBhZ2VcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gcGFnZUVsZW1lbnRzT2JqZWN0LmNyZWF0ZVBhZ2VUaXRsZSgpO1xuICAgICAgICBib2R5Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gICAgICAgIC8vcmVuZGVyIHRhc2tzIGZyb20gYXJyYXkgdG8gZG9tXG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHRhc2tzLCBib2R5Q29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgLy9wdXQgYWRkIGJ1dHRvbiB0byBib3R0b20gb2YgdGhlIGxpc3RcbiAgICAgICAgaWYoYWRkVGFza0J1dHRvbikgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgfSxcblxuICAgIC8vaXRlcmF0ZXMgdGhvdWdoIHRoZSB0YXNrcyBhcnJheSB0byBkaXNwbGF5IHRvIHRoZSBkb21cbiAgICByZW5kZXJUYXNrcyh0YXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpIHsgXG5cbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgLy9lYWNoIHNpZGUgb2YgdGhlIHRhc2sgaXRlbVxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vdGFza0VsZW1lbnRMZWZ0IGl0ZW1zIC0gY29tcGxldGUgYnV0dG9uLCB0aXRsZSBhbmQgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBsZXRlLWJ1dHRvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWNvbXBsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX1gO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XG5cbiAgICAgICAgaWYgKHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9PSAnJykge1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJyhlbXB0eSknO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90YXNrRWxlbWVudFJpZ2h0IC0gZHVlIGRhdGUsIHByaW9yaXR5LCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gJycpIHRhc2suZHVlRGF0ZSA9ICcobm8gZHVlIGRhdGUpJztcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcblxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7dGFzay5wcmlvcml0eX1gO1xuXG4gICAgICAgIC8vdXBkYXRlIGNzcyBiYXNlZCBvbiBwcmlvcml0eSB2YWx1ZVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5kaXNwbGF5UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lciwgdGFza1ByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgICAgICAgdGFza0RlbGV0ZS50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gICAgICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIHBhZ2VcbiAgICAgICAgdGFza0VsZW1lbnRMZWZ0LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIHRhc2tFbGVtZW50TGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTsgICAgXG5cbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tFbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50TGVmdCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnRSaWdodCk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcsIHRhc2sudGFza0lEKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRWxlbWVudExlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1lbGVtZW50LWxlZnQnKTtcbiAgICAgICAgdGFza0VsZW1lbnRSaWdodC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVsZW1lbnQtcmlnaHQnKTtcblxuICAgICAgICAvL2Rpc3BsYXkgdGFzayBjb21wbGV0aW9uIG9uIHBhZ2UtbG9hZFxuICAgICAgICBpZiAodGFzay5zdGF0dXMgPT0gJ2NvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlDb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgaWYgKHRhc2suc3RhdHVzID09ICdpbmNvbXBsZXRlJykgcmV0dXJuIGZvcm1BY3Rpb25zT2JqZWN0LnVwZGF0ZURpc3BsYXlJbmNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTsgICAgXG4gICAgfSxcblxuICAgIC8vbWFkZSBiYyBlZGl0VGFza3MgZnVuY3Rpb25zIHdlcmUgaW5jb21wYXRpYmxlXG4gICAgdXBkYXRlRGlzcGxheUNvbXBsZXRlKHRhc2tDb250YWluZXIsIHRhc2tDb21wbGV0ZUJ1dHRvbiwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrZWQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrLXRleHQnKTtcbiAgICB9LFxuXG4gICAgLy9tYWRlIGJjIGVkaXRUYXNrcyBmdW5jdGlvbnMgd2VyZSBpbmNvbXBhdGlibGVcbiAgICB1cGRhdGVEaXNwbGF5SW5jb21wbGV0ZSh0YXNrQ29udGFpbmVyLCB0YXNrQ29tcGxldGVCdXR0b24sIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC1jaGVja2VkJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtdGFzay10ZXh0Jyk7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmVGb3JtKGZvcm1Db250YWluZXIpIHtcbiAgICAgICAgY29uc3QgYm9keUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgaWYgKGJvZHlDb250ZW50Q29udGFpbmVyLmNvbnRhaW5zKGZvcm1Db250YWluZXIpKSBib2R5Q29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9LFxuXG4gICAgLy9jYWxsZWQgYnkgc3VibWl0IGJ1dHRvbiB0byBwdXQgdGFzayBvbnRvIHBhZ2VcbiAgICBhZGRUYXNrKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktc2VsZWN0aW9uJykudmFsdWU7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIFxuICAgICAgICBsb2NhbFN0b3JhZ2VPYmplY3Quc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuICAgIH0sXG5cbiAgICAvL2NzcyB0byB0YXNrIGNvbnRhaW5lciBhbmQgcHJpb3JpdHkgYnV0dG9uIGJhc2VkIG9uIHByaW9yaXR5IHZhbHVlXG4gICAgZGlzcGxheVByaW9yaXR5KHRhc2ssIHRhc2tDb250YWluZXIsIHRhc2tQcmlvcml0eSkge1xuXG4gICAgICAgIC8vcHJldmVudCBzdGFja2luZyBtdWx0aXBsZSBjbGFzc2VzXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbG93LXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHktbG93Jyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWxvdy1wcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1taWQnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbWlkLXByaW9yaXR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vb2JqZWN0IHRvIHN0b3JlIGZ1bmN0aW9ucyB0aGF0IGNyZWF0ZSBmb3JtIHRvIGdlbmVyYXRlIGluZGl2aWR1YWwgdGFza3NcbmV4cG9ydCBjb25zdCB0YXNrRm9ybU9iamVjdCA9IHtcblxuICAgIGNyZWF0ZUZvcm1MYXlvdXQoZm9ybUNvbnRhaW5lcikge1xuXG4gICAgICAgIC8vY3JlYXRlIGZvcm0gb2JqZWN0c1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBmb3JtTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb3JtUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9ybUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIGZvcm1cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtTGVmdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJpZ2h0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQm90dG9tKTtcblxuICAgICAgICAvL2FkZCBjbGFzc2VzXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuICAgICAgICBmb3JtTGVmdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxlZnQnKTtcbiAgICAgICAgZm9ybVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcmlnaHQnKTtcbiAgICAgICAgZm9ybUJvdHRvbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWJvdHRvbScpO1xuXG4gICAgICAgIHJldHVybiB7IGZvcm0sIGZvcm1MZWZ0LCBmb3JtUmlnaHQsIGZvcm1Cb3R0b20gfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybVRpdGxlKGZvcm1MZWZ0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgdGl0bGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgLy9wcmV2ZW50IHBhZ2UgcmVmcmVzaFxuICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkgeyBcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIGxlZnQgc2lkZVxuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuXG4gICAgICAgIHJldHVybiB7IHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRm9ybURlc2NyaXB0aW9uKGZvcm1MZWZ0KSB7XG5cbiAgICAgICAgLy9jcmVhdGUgZGVzY3JpcHRpb24gZWxlbWVudHNcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbiAob3B0aW9uYWwpJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IDI7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gbGVmdCBzaWRlIFxuICAgICAgICBmb3JtTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgZm9ybUxlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3NcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtRGF0ZShmb3JtUmlnaHQpIHtcblxuICAgICAgICAvL2NyZWF0ZSBkYXRlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIHJpZ2h0IHNpZGVcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGZvcm1SaWdodC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWRhdGUnKTtcblxuICAgICAgICByZXR1cm4geyBkYXRlTGFiZWwsIGRhdGVJbnB1dCB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVGb3JtUHJpb3JpdHlTZWxlY3Rvcihmb3JtUmlnaHQpIHtcblxuICAgICAgICAvL2NyZWF0ZSBwcmlvcml0eSBzZWxlY3Rpb24gZHJvcGJveCBhbmQgb3B0aW9uc1xuICAgICAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LXNlbGVjdGlvbicpO1xuICAgICAgICAvLyBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktc2VsZWN0aW9uJyk7XG4gICAgICAgIC8vIGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyT3B0aW9uLnRleHQgPSAnUHJpb3JpdHknO1xuICAgICAgICAvLyBwbGFjZWhvbGRlck9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIHBsYWNlaG9sZGVyT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24xLnZhbHVlID0gJ2xvdyc7XG4gICAgICAgIG9wdGlvbjEudGV4dCA9ICdMb3cgKFByaW9yaXR5KSc7XG4gICAgICAgIG9wdGlvbjEuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjIudmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgb3B0aW9uMi50ZXh0ID0gJ01lZGl1bSc7XG4gICAgICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMy52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgb3B0aW9uMy50ZXh0ID0gJ0hpZ2gnO1xuXG4gICAgICAgIC8vYXBwZW5kIHRvIHJpZ2h0IHNpZGVcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICAgICAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKHNlbGVjdElucHV0KTtcbiAgICAgICAgLy8gc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJPcHRpb24pO1xuICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gICAgICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG4gICAgICAgIC8vYWRkIGNsYXNzXG4gICAgICAgIHNlbGVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHsgc2VsZWN0TGFiZWwsIHNlbGVjdElucHV0LCBvcHRpb24xLCBvcHRpb24yLCBvcHRpb24zIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUZvcm1CdXR0b25zKGZvcm1Cb3R0b20pIHtcblxuICAgICAgICAvL2NyZWF0ZSBidXR0b24gZWxlbWVudHNcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gYm90dG9tXG4gICAgICAgIGZvcm1Cb3R0b20uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpO1xuICAgICAgICBmb3JtQm90dG9tLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbC1idXR0b24nKVxuXG4gICAgICAgIC8vYWRkIGNsYXNzZXNcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKVxuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpOyAgICBcblxuICAgICAgICByZXR1cm4geyBzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiB9O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBib2R5Q29udGVudENvbnRhaW5lciB9IGZyb20gJy4vYWxsVGFza3MuanMnO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG8tZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBmb3JtQWN0aW9uc09iamVjdCB9IGZyb20gJy4vdGFzay1mb3JtLWFjdGlvbnMuanMnO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzT2JqZWN0IH0gZnJvbSAnLi9wYWdlLWVsZW1lbnRzLmpzJztcbmltcG9ydCB7IGRheXNRdWVzdE9iamVjdCB9IGZyb20gJy4vdG9kYXkuanMnO1xuXG5cbmV4cG9ydCBjb25zdCB3ZWVrc1F1ZXN0T2JqZWN0ID0ge1xuICAgIFxuICAgIHdlZWtzUXVlc3RQYWdlKCkge1xuICAgICAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vaW1wb3J0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcblxuICAgICAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgIFxuICAgICAgICAvL2dldCB3ZWVrcydzIGRhdGVcbiAgICAgICAgY29uc3QgeyBzdGFydE9mV2VlaywgZW5kT2ZXZWVrIH0gPSB3ZWVrc1F1ZXN0T2JqZWN0LmdldFdlZWtSYW5nZSgpO1xuXG4gICAgICAgIC8vZ2V0IHZhcmlhYmxlcyB0byBkaXNwbGF5IGluIGhlYWRlclxuICAgICAgICBsZXQgc3RhcnRPZldlZWtEYXkgPSBzdGFydE9mV2Vlay5nZXREYXRlKCk7XG4gICAgICAgIGxldCBlbmRPZldlZWtEYXkgPSBlbmRPZldlZWsuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgdGhpc01vbnRoID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICAgIC8vdXBkYXRlIHBhZ2UgdGl0bGVcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gYFdlZWsncyBRdWVzdHM6ICR7dGhpc01vbnRofSAke3N0YXJ0T2ZXZWVrRGF5fSAtICR7ZW5kT2ZXZWVrRGF5fWA7XG5cbiAgICAgICAgLy9maWx0ZXIgd2Vla3MncyB0YXNrc1xuICAgICAgICBsZXQgd2Vla3NUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrRGF0ZSA+PSBzdGFydE9mV2VlayAmJiB0YXNrRGF0ZSA8PSBlbmRPZldlZWs7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvL2Rpc3BsYXkgZmlsdGVyZWQgYXJyYXkgdG8gZG9tXG4gICAgICAgIGZvcm1BY3Rpb25zT2JqZWN0LnJlbmRlclRhc2tzKHdlZWtzVGFza3MsIGJvZHlDb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICAvL3Rhc2tzIHRhc2tzIHRoaXMgd2VlayBtZXNzYWdlXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgaWYoIXRhc2tDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRheXNRdWVzdE9iamVjdC5zaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc3Qgbm9UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXRhc2snKTtcbiAgICAgICAgICAgIG5vVGFzay50ZXh0Q29udGVudCA9ICdObyBRdWVzdHMgRHVlIFRoaXMgV2Vlayc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2Vla3NUYXNrcztcbiAgICB9LFxuXG4gICAgZ2V0V2Vla1JhbmdlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTsgLy8wIChzdW4pIHRvIDYgKHNhdClcbiAgICBcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgY3VycmVudCBkYXkgYW5kIHRoZSBzdGFydCBvZiB0aGUgd2VlayAoc3VuKVxuICAgICAgICBjb25zdCBzdGFydE9mV2Vla0RpZmYgPSBjdXJyZW50RGF5ID09PSAwID8gMCA6IGN1cnJlbnREYXk7XG4gICAgXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSBzdGFydCBvZiB0aGUgd2VlayBieSBzdWJ0cmFjdGluZyB0aGUgZGlmZmVyZW5jZVxuICAgICAgICBjb25zdCBzdGFydE9mV2VlayA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSAoc3RhcnRPZldlZWtEaWZmKSk7ICAgIFxuXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSBlbmQgb2YgdGhlIHdlZWsgYnkgYWRkaW5nIHRoZSByZW1haW5pbmcgZGF5cyB1bnRpbCBzYXRcbiAgICAgICAgY29uc3QgZW5kT2ZXZWVrID0gbmV3IERhdGUoc3RhcnRPZldlZWspO1xuICAgICAgICBlbmRPZldlZWsuc2V0RGF0ZShzdGFydE9mV2Vlay5nZXREYXRlKCkgKyA2KTtcblxuICAgICAgICAvL3NldCBiZWdpbm5pbmcgdGltZSBvZiB3ZWVrIHRvIHN1bmRheSBtaWRuaWdodCBvZiBmaXJzdCBkYXlcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0SG91cnMoMCwgMCwgMCk7XG5cbiAgICAgICAgLy9zZXQgZW5kIHRpbWUgb2Ygd2VlayB0byAxMTo1OXBtIG9mIGxhc3QgZGF5XG4gICAgICAgIGVuZE9mV2Vlay5zZXRIb3VycygyMywgNTksIDU5KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRPZldlZWssIGVuZE9mV2VlayB9O1xuICAgIH1cbn07IiwiaW1wb3J0IHsgYm9keUNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2FsbFRhc2tzLmpzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2RvLWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgZm9ybUFjdGlvbnNPYmplY3QgfSBmcm9tICcuL3Rhc2stZm9ybS1hY3Rpb25zLmpzJztcbmltcG9ydCB7IHBhZ2VFbGVtZW50c09iamVjdCB9IGZyb20gJy4vcGFnZS1lbGVtZW50cy5qcyc7XG5cbi8vbG9hZCB0aGUgZGF5J3MgcXVlc3QgcGFnZVxuZXhwb3J0IGNvbnN0IGRheXNRdWVzdE9iamVjdCA9IHtcbiAgICBcbiAgICBkYXlzUXVlc3RQYWdlKCkge1xuICAgICAgICAvL2NsZWFyIHRoZSBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIC8vaW1wb3J0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHBhZ2VFbGVtZW50c09iamVjdC5jcmVhdGVQYWdlVGl0bGUoKTtcblxuICAgICAgICAvL2FwcGVuZCB0b29scyB0byBwYWdlXG4gICAgICAgIGJvZHlDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgICAgLy91cGRhdGUgcGFnZSB0aXRsZVxuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgRGF5J3MgUXVlc3RzYDtcbiAgICAgICAgXG4gICAgICAgIC8vZ2V0IHRvZGF5J3MgZGF0ZVxuICAgICAgICBjb25zdCB0b2RheSA9IGRheXNRdWVzdE9iamVjdC5nZXRUb2RheURhdGUoKTtcblxuICAgICAgICAvL2ZpbHRlciB0b2RheSdzIHRhc2tzXG4gICAgICAgIGxldCB0b2RheXNUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PSB0b2RheSk7XG5cbiAgICAgICAgLy9kaXNwbGF5IGZpbHRlcmVkIGFycmF5IHRvIGRvbVxuICAgICAgICBmb3JtQWN0aW9uc09iamVjdC5yZW5kZXJUYXNrcyh0b2RheXNUYXNrcywgYm9keUNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgaWYoIXRhc2tDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRheXNRdWVzdE9iamVjdC5zaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvZGF5c1Rhc2tzO1xuICAgIH0sXG5cbiAgICBzaG93Tm9UYXNrVG9kYXkoYm9keUNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgY29uc3Qgbm9UYXNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub1Rhc2tNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ25vLXRhc2snKTtcbiAgICAgICAgbm9UYXNrTWVzc2FnZS50ZXh0Q29udGVudCA9ICdObyBRdWVzdHMgRHVlIFRvZGF5JztcbiAgICAgICAgYm9keUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9UYXNrTWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIG5vVGFza01lc3NhZ2U7XG4gICAgfSxcblxuICAgIGdldFRvZGF5RGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBsb2NhbFN0b3JhZ2VPYmplY3QgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbi8vdGFzayBhcnJheSB0byBzdG9yZSBhbGwgdGFza3NcbmV4cG9ydCBjb25zdCB0YXNrcyA9IFtdO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHRhc2tDb3VudGVyT2JqZWN0ID0ge1xuICAgIHRhc2tDb3VudGVyOiAwLFxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdENvdW50ZXJPYmplY3QgPSB7XG4gICAgcHJvamVjdElEOiAwLFxufVxuXG4vL2NyZWF0ZXMgdGFzayBvYmplY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRhc2tJRDogdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIsXG4gICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICB9O1xuXG4gICAgdGFza0NvdW50ZXJPYmplY3QudGFza0NvdW50ZXIrKztcblxuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgLy8gY29uc29sZS5sb2codGFza3MpO1xuXG4gICAgLy9zYXZlIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2UgYWZ0ZXIgY3JlYXRpbmcgYSBuZXcgdGFza1xuICAgIGxvY2FsU3RvcmFnZU9iamVjdC5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG5cbiAgICByZXR1cm4gdGFzaztcbn1cblxuLy9zZW5kIHRhc2sgYXJyYXkgdG8gYmUgZGlzcGxheWVkXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG5cbiAgICAvL3JldHJpZXZlIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZSBiZWZvcmUgcmV0dXJuaW5nXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iamVjdC5nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iamVjdC5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9