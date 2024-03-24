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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-family:'Courier New', Courier, monospace;
  font-size: 14px;

  --bgColor1: rgb(78, 115, 104);
  --bgColor2: rgb(48, 79, 70);
  --bgColor3: rgb(37, 60, 53);
}

body {
  box-sizing: border-box;
  background-color: var(--bgColor1);
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  cursor: default;
}

#app {
  display: flex;
  flex-direction: row;
}
/* ===== HEADER =====  */

#header-div {
  font-style: oblique;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bgColor2);
  padding: 0.9rem;
  
  max-height: fit-content;
}

#header-logo {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  opacity: 0.5;
}

#header-title {
  display: flex;
  margin: 0 0 0 0;
}

#header-subtitle {
  margin: 0 0 0 0;
}

/* ===== PROJECTS =====  */
#panel {
  display: flex;
  flex-direction: column;

  min-width: 10rem;
  max-width: 20rem;
  margin-right: 1rem;
  width: 25%;
  border-right: solid var(--bgColor2) 0.5rem;
  border-bottom: solid var(--bgColor2) 0.1rem;
  border-bottom-right-radius: 0.4rem;
}

#panel > .proj-div {
  display: inline-flex;
  justify-content: space-between;
  margin: 0.5rem 0.2rem 0 0;
}

.proj-t2 {
  width: 80%;
}

.proj-rightsubdiv > .proj-editbtn {
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 0.5rem;
  opacity: 0.4;
}

.proj-rightsubdiv > .proj-deletebtn {
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 0.5rem;
  opacity: 0.4;
}

/* ===== TASKS =====  */

#content {
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
}

#title-currentproject {
  font-size: 2rem;
}

.task-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width:max-content;
  height: 2rem;

  margin: 0.5rem 0 0.5rem 0;

  border-bottom: solid var(--bgColor3) 0.5rem;
  border-bottom-left-radius: 0.4rem;
}

.task-t3{
  width: max-content;
}

.task-date {
  margin: 0;
  font-size: 0.6rem;
}

.task-priority {
  height: 1.5rem;
  width: 1.5rem;
}

.task-rightsubdiv, .task-leftsubdiv, .task-date {
  min-width: fit-content;
}

.task-rightsubdir {
  margin-left: 0;
}

.task-editbtn {
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 0.1rem;
  opacity: 0.4;
}

.task-deletebtn {
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 0.1rem;
  opacity: 0.4;
}

.task-rightsubdir, .proj-rightsubdir {
  opacity:var(--bgColor2);
}


/* ===== DIALOG PROJECT =====  */
#modal-addproj-dialog {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 1rem;

  width: fit-content;
}

#modal-addproj-headersubdiv {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items:center;
  text-align: right;
  min-width: fit-content;
  margin-bottom: 1.5rem;
}

#modal-addproj-headersubdiv > #modal-addproj-closebtn {
  height: 2rem;
  width: 2rem;
  margin: 0;

}

#modal-addproj-headersubdiv >  #modal-addproj-h2{
  height: 2rem;
  width: 100%;
  margin: 0 0 0 1.5rem

}

#modal-addproj-input-title {
  margin-bottom: 1.5rem;
}


/* ===== DIALOG TASKS =====  */

#modal-addtask-dialog {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 1rem;

  width: fit-content;
}

#modal-addtask-headersubdiv {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  text-align: right;
  align-items:center;

  margin-bottom: 1.5rem;
}

#modal-addtask-closebtn {
  height: 2rem;
  width: 2rem;
  margin: 0;

}

#modal-addtask-h2{
  height: 2rem;
  width: 100%;
  margin: 0 0 0 1.5rem
}

#modal-addtask-input-title {
  margin-bottom: 1rem;
}

#modal-addtask-input-description {
  margin-bottom: 1rem;
}

#modal-addtask-input-duedate {
  margin-bottom: 1rem;
}

#modal-addtask-input-duedate{
  justify-content: center;
}

#modal-addtask-selectorssubdiv {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

#modal-addtask-input-priority{
  width: 40%;
}

#modal-addtask-input-select-project{
  width: 40%;
}

/* =====  DIALOG DELETE =====  */

#modal-delete-dialog {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 1rem;
  width: fit-content;
  width: 40%;
}

#modal-delete-closebtn{
  height: 2rem;
  width: 2rem;
  margin: 0;
}

/* ===== HOVER =====  */

.proj-div, .task-checkbox, .task-editbtn, .task-deletebtn {
  cursor: pointer;
}

#proj-addbtn, #task-addbtn {
  cursor: pointer;
}


/* ===== ROWS =====  */

.proj-rightsubdiv, .task-rightsubdiv, .task-leftsubdiv {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: max-content;
  margin: 0;
}

.task-leftsubdiv {
width: 40%;
justify-content: flex-start;
}

.task-rightsubdiv {
width: 20%;
justify-content: flex-end;
}

.task-date {
width: 40%;
justify-content: center;
}


#proj-addbtn {
  width: 2rem;
  height: 2rem;

}

#task-addbtn {
  width: 2rem;
  height: 2rem;
  
}


/*
body {
font-family: Arial, sans-serif;
background-color: #f4f4f4;
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
}

#panel {
background-color: #fff;
border-radius: 5px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
padding: 20px;
margin-right: 20px;
display: flex;
flex-direction: column;
}

#content {
flex: 1;
padding: 20px;
}

.proj-div,
.task-div {
display: flex;
align-items: center;
margin-bottom: 10px;
}

.task-checkbox {
margin-right: 10px;
}

.proj-editbtn,
.proj-deletebtn,
.task-editbtn,
.task-deletebtn {
margin-left: 10px;
}

.dialog {
background-color: #fff;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
padding: 20px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 9999;
display: none;
width: 300px;
}

.modal-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
}

.modal-title {
font-size: 20px;
color: #333;
}

.modal-close {
background-color: #ddd;
color: #333;
border: none;
padding: 5px 10px;
border-radius: 3px;
cursor: pointer;
}

.modal-close:hover {
background-color: #ccc;
}

.modal-content {
margin-bottom: 10px;
}

.modal-input {
width: 100%;
padding: 8px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 3px;
}

.modal-submit {
background-color: #4CAF50;
color: white;
border: none;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 5px;
cursor: pointer;
}

.modal-submit:hover {
background-color: #45a049;
}

}*/`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-family:'Courier New', Courier, monospace;\n  font-size: 14px;\n\n  --bgColor1: rgb(78, 115, 104);\n  --bgColor2: rgb(48, 79, 70);\n  --bgColor3: rgb(37, 60, 53);\n}\n\nbody {\n  box-sizing: border-box;\n  background-color: var(--bgColor1);\n  display: flex;\n  flex-direction: column;\n  min-width: fit-content;\n  cursor: default;\n}\n\n#app {\n  display: flex;\n  flex-direction: row;\n}\n/* ===== HEADER =====  */\n\n#header-div {\n  font-style: oblique;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  background-color: var(--bgColor2);\n  padding: 0.9rem;\n  \n  max-height: fit-content;\n}\n\n#header-logo {\n  width: 2rem;\n  height: 2rem;\n  margin-left: 1rem;\n  opacity: 0.5;\n}\n\n#header-title {\n  display: flex;\n  margin: 0 0 0 0;\n}\n\n#header-subtitle {\n  margin: 0 0 0 0;\n}\n\n/* ===== PROJECTS =====  */\n#panel {\n  display: flex;\n  flex-direction: column;\n\n  min-width: 10rem;\n  max-width: 20rem;\n  margin-right: 1rem;\n  width: 25%;\n  border-right: solid var(--bgColor2) 0.5rem;\n  border-bottom: solid var(--bgColor2) 0.1rem;\n  border-bottom-right-radius: 0.4rem;\n}\n\n#panel > .proj-div {\n  display: inline-flex;\n  justify-content: space-between;\n  margin: 0.5rem 0.2rem 0 0;\n}\n\n.proj-t2 {\n  width: 80%;\n}\n\n.proj-rightsubdiv > .proj-editbtn {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-left: 0.5rem;\n  opacity: 0.4;\n}\n\n.proj-rightsubdiv > .proj-deletebtn {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-left: 0.5rem;\n  opacity: 0.4;\n}\n\n/* ===== TASKS =====  */\n\n#content {\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: 100%;\n}\n\n#title-currentproject {\n  font-size: 2rem;\n}\n\n.task-div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width:max-content;\n  height: 2rem;\n\n  margin: 0.5rem 0 0.5rem 0;\n\n  border-bottom: solid var(--bgColor3) 0.5rem;\n  border-bottom-left-radius: 0.4rem;\n}\n\n.task-t3{\n  width: max-content;\n}\n\n.task-date {\n  margin: 0;\n  font-size: 0.6rem;\n}\n\n.task-priority {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n.task-rightsubdiv, .task-leftsubdiv, .task-date {\n  min-width: fit-content;\n}\n\n.task-rightsubdir {\n  margin-left: 0;\n}\n\n.task-editbtn {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-left: 0.1rem;\n  opacity: 0.4;\n}\n\n.task-deletebtn {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-left: 0.1rem;\n  opacity: 0.4;\n}\n\n.task-rightsubdir, .proj-rightsubdir {\n  opacity:var(--bgColor2);\n}\n\n\n/* ===== DIALOG PROJECT =====  */\n#modal-addproj-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 5px;\n  padding: 1rem;\n\n  width: fit-content;\n}\n\n#modal-addproj-headersubdiv {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  align-items:center;\n  text-align: right;\n  min-width: fit-content;\n  margin-bottom: 1.5rem;\n}\n\n#modal-addproj-headersubdiv > #modal-addproj-closebtn {\n  height: 2rem;\n  width: 2rem;\n  margin: 0;\n\n}\n\n#modal-addproj-headersubdiv >  #modal-addproj-h2{\n  height: 2rem;\n  width: 100%;\n  margin: 0 0 0 1.5rem\n\n}\n\n#modal-addproj-input-title {\n  margin-bottom: 1.5rem;\n}\n\n\n/* ===== DIALOG TASKS =====  */\n\n#modal-addtask-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 5px;\n  padding: 1rem;\n\n  width: fit-content;\n}\n\n#modal-addtask-headersubdiv {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  text-align: right;\n  align-items:center;\n\n  margin-bottom: 1.5rem;\n}\n\n#modal-addtask-closebtn {\n  height: 2rem;\n  width: 2rem;\n  margin: 0;\n\n}\n\n#modal-addtask-h2{\n  height: 2rem;\n  width: 100%;\n  margin: 0 0 0 1.5rem\n}\n\n#modal-addtask-input-title {\n  margin-bottom: 1rem;\n}\n\n#modal-addtask-input-description {\n  margin-bottom: 1rem;\n}\n\n#modal-addtask-input-duedate {\n  margin-bottom: 1rem;\n}\n\n#modal-addtask-input-duedate{\n  justify-content: center;\n}\n\n#modal-addtask-selectorssubdiv {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n#modal-addtask-input-priority{\n  width: 40%;\n}\n\n#modal-addtask-input-select-project{\n  width: 40%;\n}\n\n/* =====  DIALOG DELETE =====  */\n\n#modal-delete-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 5px;\n  padding: 1rem;\n  width: fit-content;\n  width: 40%;\n}\n\n#modal-delete-closebtn{\n  height: 2rem;\n  width: 2rem;\n  margin: 0;\n}\n\n/* ===== HOVER =====  */\n\n.proj-div, .task-checkbox, .task-editbtn, .task-deletebtn {\n  cursor: pointer;\n}\n\n#proj-addbtn, #task-addbtn {\n  cursor: pointer;\n}\n\n\n/* ===== ROWS =====  */\n\n.proj-rightsubdiv, .task-rightsubdiv, .task-leftsubdiv {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: max-content;\n  margin: 0;\n}\n\n.task-leftsubdiv {\nwidth: 40%;\njustify-content: flex-start;\n}\n\n.task-rightsubdiv {\nwidth: 20%;\njustify-content: flex-end;\n}\n\n.task-date {\nwidth: 40%;\njustify-content: center;\n}\n\n\n#proj-addbtn {\n  width: 2rem;\n  height: 2rem;\n\n}\n\n#task-addbtn {\n  width: 2rem;\n  height: 2rem;\n  \n}\n\n\n/*\nbody {\nfont-family: Arial, sans-serif;\nbackground-color: #f4f4f4;\nmargin: 0;\npadding: 0;\ndisplay: flex;\nflex-direction: row;\n}\n\n#panel {\nbackground-color: #fff;\nborder-radius: 5px;\nbox-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\npadding: 20px;\nmargin-right: 20px;\ndisplay: flex;\nflex-direction: column;\n}\n\n#content {\nflex: 1;\npadding: 20px;\n}\n\n.proj-div,\n.task-div {\ndisplay: flex;\nalign-items: center;\nmargin-bottom: 10px;\n}\n\n.task-checkbox {\nmargin-right: 10px;\n}\n\n.proj-editbtn,\n.proj-deletebtn,\n.task-editbtn,\n.task-deletebtn {\nmargin-left: 10px;\n}\n\n.dialog {\nbackground-color: #fff;\nborder-radius: 5px;\nbox-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\npadding: 20px;\nposition: fixed;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nz-index: 9999;\ndisplay: none;\nwidth: 300px;\n}\n\n.modal-header {\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nmargin-bottom: 10px;\n}\n\n.modal-title {\nfont-size: 20px;\ncolor: #333;\n}\n\n.modal-close {\nbackground-color: #ddd;\ncolor: #333;\nborder: none;\npadding: 5px 10px;\nborder-radius: 3px;\ncursor: pointer;\n}\n\n.modal-close:hover {\nbackground-color: #ccc;\n}\n\n.modal-content {\nmargin-bottom: 10px;\n}\n\n.modal-input {\nwidth: 100%;\npadding: 8px;\nmargin-bottom: 10px;\nborder: 1px solid #ccc;\nborder-radius: 3px;\n}\n\n.modal-submit {\nbackground-color: #4CAF50;\ncolor: white;\nborder: none;\npadding: 10px 20px;\ntext-align: center;\ntext-decoration: none;\ndisplay: inline-block;\nfont-size: 16px;\nborder-radius: 5px;\ncursor: pointer;\n}\n\n.modal-submit:hover {\nbackground-color: #45a049;\n}\n\n}*/"],"sourceRoot":""}]);
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

/***/ "./src/modules/Container.js":
/*!**********************************!*\
  !*** ./src/modules/Container.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
class Container {
    constructor() {
        this.projects = []
    }

    _setProjects(projects) {
        this.projects = projects
    }

    _getProjects() {
        return this.projects
    }

    _getProject(title) {
        return this.projects.find((project) => project.getTitle() === title)
    }

    _addProject(newProject) {
        return this.projects.push(newProject)
    }

    _deleteProject(projectTitle) {
        this.projects = this.projects.filter((project) => project.getTitle() !== projectTitle)
    }
}

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listeners */ "./src/modules/Listeners.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _assets_icon_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icon_delete.svg */ "./src/assets/icon_delete.svg");
/* harmony import */ var _assets_icon_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon_add.svg */ "./src/assets/icon_add.svg");
/* harmony import */ var _assets_icon_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icon_edit.svg */ "./src/assets/icon_edit.svg");
/* harmony import */ var _assets_icon_esc_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icon_esc.svg */ "./src/assets/icon_esc.svg");
/* harmony import */ var _assets_icon_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icon_logo.svg */ "./src/assets/icon_logo.svg");
/* harmony import */ var _assets_icon_lpriority_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icon_lpriority.svg */ "./src/assets/icon_lpriority.svg");
/* harmony import */ var _assets_icon_hpriority_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icon_hpriority.svg */ "./src/assets/icon_hpriority.svg");
/* harmony import */ var _assets_icon_npriority_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icon_npriority.svg */ "./src/assets/icon_npriority.svg");













const Dom = (() => {
    const header = document.querySelector('#header')
    const content = document.querySelector('#content')
    const panel = document.querySelector('#panel')

    function refreshPage (currentProject) {
        const list = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getList();
        content.innerHTML = ''
        panel.innerHTML = ''
        header.innerHTML = ''
        console.log('from refresh list ' + currentProject)
        renderHeader()
        renderProjects(list._getProjects())
        renderTasks(list._getProject(currentProject).getTasks())
        renderAddButtons()
    }

    function createHtmlElement(type,id,arrayClasses,inType,content,appendCh) {
        const element = document.createElement(type);
        if(id) element.id = id;
        if(arrayClasses) arrayClasses.forEach(
            (myClass) => element.classList.add(myClass));
        if(inType) element.type = inType;
        if(content) element.innerText = content;
        if(appendCh) appendCh.appendChild(element);
    
        return element;
    }

    function renderHeader () {
        console.log('header called!')

        const div = createHtmlElement('div', `header-div`, null, null, null, header);

        const title = createHtmlElement('h1', 'header-title', null, null, 'DOIT!', div)

        const logo = createHtmlElement('img', 'header-logo', null, null, null, title)
        logo.src = _assets_icon_logo_svg__WEBPACK_IMPORTED_MODULE_6__

        const subTitle = createHtmlElement('p', 'header-subtitle', null, null, 'a to-do app', div)
    }
    
    const renderTasks = (tasks) => {
        
            const currentProject = createHtmlElement('t2', `title-currentproject` ,['title-currentproject'], null, _Listeners__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject, content)

        tasks.forEach((task) => {
            const name = task.getTitle().toLowerCase().split(" ").join("_")

            const div = createHtmlElement('div',`t-div-${task.getId()}`,['task-div'],null,null,content);

            const leftSubDiv = createHtmlElement('div', `t-leftsubdiv-${name}`, ['task-leftsubdiv'], null, null, div);

            const checkbox = createHtmlElement('input', `t-checkbox-${task.getId()}`, ['task-checkbox'], 'checkbox', null, leftSubDiv);
            checkbox.checked = task.isChecked() 

            const title = createHtmlElement( 'p', `t-t3-${name}`, ['task-t3'], null, task.getTitle(), leftSubDiv);

            const date = createHtmlElement( 'p', `t-date-${name}`, ['task-date'], null, task.getDueDate_distanceFrom(), div);

            const priority = createHtmlElement('img', `t-priority-${name}`, ['task-priority'], null, null, div);
                if(task.getPriority() !== '1'){
                    priority.src = task.getPriority() === '0' ? _assets_icon_lpriority_svg__WEBPACK_IMPORTED_MODULE_7__ : _assets_icon_hpriority_svg__WEBPACK_IMPORTED_MODULE_8__
                }else{
                    priority.src = _assets_icon_npriority_svg__WEBPACK_IMPORTED_MODULE_9__
                }
                console.log(task.getPriority())

            const rightSubDiv = createHtmlElement('div', `t-rightsubdiv-${task.getId()}`, ['task-rightsubdiv'], null, null, div);
                rightSubDiv.style.visibility = 'hidden'

            const editBtn = createHtmlElement('img', `t-editbtn-${task.getId()}`, ['task-editbtn'], null, null, rightSubDiv);
                editBtn.src = _assets_icon_edit_svg__WEBPACK_IMPORTED_MODULE_4__

            const deleteBtn = createHtmlElement( 'img', `t-deletebtn-${task.getId()}`, ['task-deletebtn'], null, null, rightSubDiv);
                deleteBtn.src = _assets_icon_delete_svg__WEBPACK_IMPORTED_MODULE_2__

            if (task.isChecked()) {
                title.style.textDecoration = 'line-through'
                title.style.opacity = 0.3
                date.style.opacity = 0.3
                priority.style.opacity = 0.3
                editBtn.style.display = 'none'
            }
        })
    }

    const renderProjects = (projects) => {
        projects.forEach((project) => {
            const name = project.getTitle()

            const div = createHtmlElement('div', `p-div-${name}`, ['proj-div'], null, null, panel);
            
            const title = createHtmlElement('p', `p-t2-${name}` ,['proj-t2'], null, name, div);

            const rightSubDiv = createHtmlElement('div', `p-rightsubdiv-${name}`, ['proj-rightsubdiv'], null, null, div);
                rightSubDiv.style.visibility = 'hidden'
                
            const editBtn = createHtmlElement('img',`p-editbtn-${name}`,['proj-editbtn'],null,null,rightSubDiv);
                editBtn.src = _assets_icon_edit_svg__WEBPACK_IMPORTED_MODULE_4__

            const deleteBtn = createHtmlElement('img', `p-deletebtn-${name}`, ['proj-deletebtn'], null, null, rightSubDiv);
                deleteBtn.src = _assets_icon_delete_svg__WEBPACK_IMPORTED_MODULE_2__
        })
    }

    const renderAddButtons = () => {
        const projAddBtn = createHtmlElement('img',`proj-addbtn`,null,null,null,panel,);
            projAddBtn.src = _assets_icon_add_svg__WEBPACK_IMPORTED_MODULE_3__

        const taskAddBtn = createHtmlElement('img',`task-addbtn`,null,null,null,content,);
            taskAddBtn.src = _assets_icon_add_svg__WEBPACK_IMPORTED_MODULE_3__
    }

    const renderDialogDelete = () => {
        const dialog = createHtmlElement('dialog', 'modal-delete-dialog',null,null,null,content)

        const closeBtn = createHtmlElement('img', 'modal-delete-closebtn', null, null, null, dialog)
            closeBtn.src = _assets_icon_esc_svg__WEBPACK_IMPORTED_MODULE_5__
        
        const title = createHtmlElement('p', 'modal-delete-h2', null, null, 'Confirm Delete?', dialog)

        const submitBtn = createHtmlElement('button', 'modal-delete-submitbtn', null, 'button', 'Delete', dialog)
    }

    const renderDialogAddTask = (editTitle, editDescription, editDueDate, editParentProject, editPriority) => {
        const dialog = createHtmlElement('dialog', 'modal-addtask-dialog',null,null,null,content)

        const headerSubDiv = createHtmlElement('div', `modal-addtask-headersubdiv`, null, null, null, dialog);

        const closeBtn = createHtmlElement('img', 'modal-addtask-closebtn', null, null, null, headerSubDiv)
            closeBtn.src = _assets_icon_esc_svg__WEBPACK_IMPORTED_MODULE_5__

        const title = createHtmlElement('h2', 'modal-addtask-h2', null, null, 'New Task', headerSubDiv)
            if(editTitle) title.innerText = 'Edit Task'

        const inputTitle = createHtmlElement('input', 'modal-addtask-input-title', null, 'text', null, dialog)
            if(editTitle) inputTitle.value = editTitle

        const inputDescription = createHtmlElement('textarea', 'modal-addtask-input-description', null, null, null, dialog)
        inputDescription.cols = 25
        inputDescription.rows = 3
            if(editDescription) inputDescription.value  = editDescription

        const inputDueDate = createHtmlElement('input', 'modal-addtask-input-duedate', null, 'date', null, dialog)
            if(editDueDate) inputDueDate.value = editDueDate

        const selectorsSubDiv = createHtmlElement('div', `modal-addtask-selectorssubdiv`, null, null, null, dialog);

        const inputSelectPriority = createHtmlElement('select', 'modal-addtask-input-priority', null, null, null, selectorsSubDiv)
            const priorityLow = createHtmlElement('option', `modal-addtask-input-priority-low`, null, null, 'Low', inputSelectPriority)
                priorityLow.value = 0
            const priorityNormal = createHtmlElement('option', `modal-addtask-input-priority-normal`, null, null, 'No Priority', inputSelectPriority)
                priorityNormal.value = 1
                priorityNormal.setAttribute('selected', true)
            const priorityHigh = createHtmlElement('option', `modal-addtask-input-priority-high`, null, null, 'High', inputSelectPriority)
                priorityHigh.value = 2
                if(editPriority >= 0) {
                    console.log('editPrioriry: ' + editPriority)
                    console.log('inputSelectPriority.selectedIndex: ' + inputSelectPriority.selectedIndex)
                    inputSelectPriority.selectedIndex = editPriority}

        const inputSelectProject = createHtmlElement('select', 'modal-addtask-input-select-project', null, null, null, selectorsSubDiv)
            _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getList()._getProjects()
            .forEach(project => {
                const optionsProject = createHtmlElement('option', `modal-addtask-input-option-proj${project.getTitle()}`, null, null, project.getTitle(), inputSelectProject)
                if(editParentProject && (optionsProject.value === editParentProject)) {
                    optionsProject.setAttribute('selected', true)
                }else if(!editParentProject && (optionsProject.value === _Listeners__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject)){
                    optionsProject.setAttribute('selected', true)
                }
                optionsProject.value = project.getTitle()
            })

        const submitBtn = createHtmlElement('button', 'modal-addtask-submitbtn', null, 'button', 'Add', dialog)
            if (editTitle) submitBtn.innerText = 'Edit'
    }

    const renderDialogAddProj = (editTitle) => {
        const dialog = createHtmlElement('dialog', 'modal-addproj-dialog',null,null,null,content)

        const headerSubDiv = createHtmlElement('div', `modal-addproj-headersubdiv`, null, null, null, dialog);

        const closeBtn = createHtmlElement('img', 'modal-addproj-closebtn', null, null, null, headerSubDiv)
            closeBtn.src = _assets_icon_esc_svg__WEBPACK_IMPORTED_MODULE_5__

        const title = createHtmlElement('h2', 'modal-addproj-h2', null, null, 'New Project', headerSubDiv)
        if(editTitle) title.innerText = 'Edit project'

        const inputTitle = createHtmlElement('input', `modal-addproj-input-title`, null, 'text', null, dialog)
        if(editTitle) inputTitle.value = editTitle

        const submitBtn = createHtmlElement('button', `modal-addproj-submitbtn`, null, 'button', 'Add', dialog)
    }


    return { renderTasks, renderProjects, renderAddButtons, renderDialogAddProj, renderDialogAddTask, renderDialogDelete, refreshPage }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);

/***/ }),

/***/ "./src/modules/Listeners.js":
/*!**********************************!*\
  !*** ./src/modules/Listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Listeners)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/modules/Container.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/modules/DOM.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");




class Listeners {

    static currentProject = this.currentProject || _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getList()._getProjects()[0].getTitle() // || for  initialization
    
    static getCurrentList() {
        return _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getList()
    }

    static setCurrentProject(projectName) {
        Listeners.currentProject = projectName
    }

    static loadPage() {
            
        _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].refreshPage(Listeners.currentProject)
        Listeners.initDomElements()
        Listeners.initNewProjectDialog()
        Listeners.initNewTaskDialog()
        Listeners.initEditDialog()
        Listeners.initDeleteDialog()

        console.log(Listeners.getCurrentList())
    }


    static initDomElements() {

        //==== HOVER TASK ===//
        const tDiv = document.querySelectorAll('.task-div')

        tDiv.forEach(section => {
            section.addEventListener('mouseenter', () => {
                const taskId = section.id.slice(6)
                const elementToShow = document.getElementById(`t-rightsubdiv-${taskId}`)
                elementToShow.style.visibility = 'visible'
            })
            section.addEventListener('mouseleave', () => {
                const taskId = section.id.slice(6)
                const elementToHide = document.getElementById(`t-rightsubdiv-${taskId}`)
                elementToHide.style.visibility = 'hidden'
            })
        })

        //==== HOVER PROJ ===//
        const pDiv = document.querySelectorAll('.proj-div')

        pDiv.forEach(section => {
            section.addEventListener('mouseenter', () => {
                const projName = section.id.slice(6)
                const elementToShow = document.getElementById(`p-rightsubdiv-${projName}`)
                elementToShow.style.visibility = 'visible'
            })
            section.addEventListener('mouseleave', () => {
                const projName = section.id.slice(6)
                const elementToHide = document.getElementById(`p-rightsubdiv-${projName}`)
                elementToHide.style.visibility = 'hidden'
            })
        })

        const tTitle = document.querySelectorAll('.task-t3')

        //==== SELECT PROJ ===//
        const pTitle = document.querySelectorAll('.proj-t2')

        pTitle.forEach(title => {
            title.addEventListener('click', () => {
                Listeners.setCurrentProject(title.id.slice(5))
                Listeners.loadPage() 
            })
        })

        //==== CHECK TASK ===//
        const tCheckbox = document.querySelectorAll('.task-checkbox')

        tCheckbox.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const taskId = checkbox.id.slice(11)

                _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].checkTask(_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskParent(taskId), taskId, checkbox.checked)
                Listeners.loadPage()
            })
        })
    }

    //==== EDIT DIALOG ===//
    static initEditDialog() {    
        //TaskDialog el: addTask; actions: addNewTask(), removeTask()
        const tEditBtn = document.querySelectorAll('.task-editbtn')

        tEditBtn.forEach(button => {
            button.addEventListener('click', () => {
                const taskId = button.id.slice(10)
                const taskProjectParent = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskParent(taskId)
                const task = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskObj(taskProjectParent, taskId)
                const taskTitle = task.getTitle()
                const taskDescription = task.getDescription()
                const taskDueDate = task.getDueDate()
                const taskPriority = task.getPriority()

                _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].renderDialogAddTask(taskTitle, taskDescription, taskDueDate, taskProjectParent, taskPriority)

                const dialogEditTask = document.querySelector('#modal-addtask-dialog')
                const dialogEditTaskNewTitle = document.querySelector('#modal-addtask-input-title')
                const dialogEditTaskNewDescription = document.querySelector('#modal-addtask-input-description')
                const dialogEditTaskNewDueDate = document.querySelector('#modal-addtask-input-duedate')
                const dialogAddTaskPriority = document.querySelector('#modal-addtask-input-priority')
                const dialogEditTaskProjSelect = document.querySelector('#modal-addtask-input-select-project')
                const dialogEditTaskSubmitBtn = document.querySelector('#modal-addtask-submitbtn')
                const dialogEditTaskCloseBtn = document.querySelector('#modal-addtask-closebtn')
    
                dialogEditTask.showModal()

                dialogEditTaskSubmitBtn.addEventListener('click', () => {
                    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(dialogEditTaskProjSelect.value, dialogEditTaskNewTitle.value, dialogEditTaskNewDescription.value, dialogEditTaskNewDueDate.value, dialogAddTaskPriority.value)
                    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(taskProjectParent, taskId) 
                    dialogEditTask.close()
                    Listeners.loadPage()
                })
                dialogEditTaskCloseBtn.addEventListener('click', () => {
                    dialogEditTask.close()
                    Listeners.loadPage()
                })
            })
        })
    
        //ProjectDialog el: addProject(); action: editProject
        const pEditBtn = document.querySelectorAll('.proj-editbtn')

        pEditBtn.forEach(button => {
            button.addEventListener('click', () => {
                const projTitle = button.id.slice(10);

                _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].renderDialogAddProj(projTitle)

                const dialogEditProj = document.querySelector('#modal-addproj-dialog')
                const dialogEditProjNewTitle = document.querySelector('#modal-addproj-input-title')
                const dialogEditProjSubmitBtn = document.querySelector('#modal-addproj-submitbtn')
                const dialogEditProjCloseBtn = document.querySelector('#modal-addproj-closebtn')

                dialogEditProj.showModal()

                dialogEditProjSubmitBtn.addEventListener('click', () => {
                    if(dialogEditProjNewTitle.value.includes(' ')){
                        alert('Space is not allowed here. \nPlease, choose a different name or use\'_\'.')
                    }else{
                        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].editProject(projTitle, dialogEditProjNewTitle.value)
                        console.log(_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getList())
                        dialogEditProj.close()
                        Listeners.loadPage()
                    }
                })
                dialogEditProjCloseBtn.addEventListener('click', () => {
                    dialogEditProj.close()
                    Listeners.loadPage()
                })
            })
        })
    }

    //==== DIALOG DELETE ===//
    static initDeleteDialog() {
        let deleteBtn = document.querySelectorAll('.proj-deletebtn, .task-deletebtn')

        deleteBtn.forEach(button => {
            button.addEventListener('click', () => {

                _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].renderDialogDelete()
                
                let dialogDelete = document.querySelector('#modal-delete-dialog')
                let dialogDeleteSubmitBtn = document.querySelector('#modal-delete-submitbtn')
                let dialogDeleteCloseBtn = document.querySelector('#modal-delete-closebtn')
                let dialogDeleteTitle = document.querySelector('#modal-delete-h2')
                let isProject = button.id.startsWith('p')

                

                dialogDelete.showModal()

                dialogDeleteTitle.innerText = isProject ?
                    `Delete Project '${button.id.slice(12)}'?` :
                    `Delete Task '${button.id.slice(12)}'?`

                dialogDeleteSubmitBtn.addEventListener('click', () => {
                    if(isProject){
                        if(button.id.slice(12) !== Listeners.currentProject){
                            _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(button.id.slice(12))
                            }else{
                                alert('Sorry, cannot delete current project, yet...\nChoose another project, then delete this one.')
                            }
                        }else{
                        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskParent(button.id.slice(12)), button.id.slice(12))
                    }
                    dialogDelete.close()
                    Listeners.loadPage()
                })
                dialogDeleteCloseBtn.addEventListener('click', () => {
                    dialogDelete.close()
                    Listeners.loadPage()
                })
            })
        })
    }

    //==== DIALOG ADD NEW TASK ===//
    static initNewTaskDialog() {
        let tAddBtn = document.querySelector('#task-addbtn')

        tAddBtn.addEventListener('click', () => {

            _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].renderDialogAddTask()

            const dialogAddTask = document.querySelector('#modal-addtask-dialog')
            const dialogAddTaskTitle = document.querySelector('#modal-addtask-input-title')
            const dialogAddTaskDescription = document.querySelector('#modal-addtask-input-description')
            const dialogAddTaskDueDate = document.querySelector('#modal-addtask-input-duedate')
            const dialogAddTaskPriority = document.querySelector('#modal-addtask-input-priority')
            const dialogAddTaskProjSelect = document.querySelector('#modal-addtask-input-select-project')
            const dialogAddTaskSubmitBtn = document.querySelector('#modal-addtask-submitbtn')
            const dialogAddTaskCloseBtn = document.querySelector('#modal-addtask-closebtn')

            dialogAddTask.showModal()

            dialogAddTaskSubmitBtn.addEventListener('click', () => {
                _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(dialogAddTaskProjSelect.value, dialogAddTaskTitle.value, dialogAddTaskDescription.value, dialogAddTaskDueDate.value, dialogAddTaskPriority.value)
                dialogAddTask.close()
                Listeners.loadPage()
                console.log('pushed submit add task! ' + dialogAddTaskTitle.value)
            })
            dialogAddTaskCloseBtn.addEventListener('click', () => {
                dialogAddTask.close()
                Listeners.loadPage()
            })
        })
    }
    //==== DIALOG ADD NEW PROJECT ===//

    static initNewProjectDialog(){
        let pAddBtn = document.querySelector('#proj-addbtn')

        pAddBtn.addEventListener('click', () => {
            _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].renderDialogAddProj()

            const dialogAddProj = document.querySelector('#modal-addproj-dialog')
            const dialogAddProjTitle = document.querySelector('#modal-addproj-input-title')
            const dialogAddProjSubmitBtn = document.querySelector('#modal-addproj-submitbtn')
            const dialogAddProjCloseBtn = document.querySelector('#modal-addproj-closebtn')

            dialogAddProj.showModal()

            dialogAddProjSubmitBtn.addEventListener('click', () => {
                if(dialogAddProjTitle.value.includes(' ')){
                    alert('Space is not allowed here. \nPlease, choose a different name or use\'_\'.');
                }else{
                    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(dialogAddProjTitle.value)
                    dialogAddProj.close()
                    Listeners.loadPage()
                    console.log('pushed addProj ' + dialogAddProjTitle.value)
                }
            })
            dialogAddProjCloseBtn.addEventListener('click', () => {
                dialogAddProj.close()
                Listeners.loadPage()
            })
        })
    }
}

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title
        this.tasks = []
    };

    getTitle() {
        return this.title
    }

    getTask(id) {
        return this.tasks.find((task) => task.id === id)
    }

    getTasks() {
        return this.tasks
    }

    addTask(newTask) {
        this.tasks.push(newTask)
    }

    setTasks(tasks){
        this.tasks = tasks
    }
    
    deleteTask(id){
        this.tasks = this.tasks.filter((task) => task.getId() !== id)
    }

    editProject(newTitle) {
        this.title = newTitle;
    }
    
}

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/modules/Container.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");




class Storage {

    static getList() {
        const dataList = Object.assign(
            new _Container__WEBPACK_IMPORTED_MODULE_0__["default"](),
            JSON.parse(localStorage.getItem('doit_app'))
        )
        dataList._setProjects(
            dataList._getProjects()
            .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](), project)
            )
        )
        dataList._getProjects()
        .forEach((project) => {
            project.setTasks(
                project.getTasks()
                .map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](), task))
            )
        });

        return dataList;
    };
      
    static saveList(data) {
        localStorage.setItem('doit_app', JSON.stringify(data));
    }

    static getTaskParent(taskId) {
        const projectList = Storage.getList()._getProjects();
    
        for (const project of projectList) {
            const parent = project.getTasks().find(task => task.id === taskId);
            if (parent) {
                console.log('parent found: ' + project.getTitle());
                return project.getTitle();
            }
        }
    }

    static getTaskObj(projectTitle, taskId) {
        console.log('from storage getTaskObj!' + projectTitle + ', ' + taskId)
       return Storage.getList()._getProject(projectTitle).getTask(taskId)
    }
    
    //==/==//

    static addProject(projectTitle) {
        const currentList = Storage.getList()
        currentList._addProject(new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](projectTitle))
        Storage.saveList(currentList)
    }

    static addTask(projectTitle, taskTitle, taskDesctiption, taskDueDate, taskPriority) {
        const currentList = Storage.getList()
        currentList._getProject(projectTitle).addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTitle, taskDesctiption, taskDueDate, taskPriority))
        Storage.saveList(currentList)        
    }

    static deleteProject(projectTitle) {
        const currentList = Storage.getList()
        currentList._deleteProject(projectTitle)
        Storage.saveList(currentList)         
    }

    static deleteTask(projectTitle, taskId) {
        const currentList = Storage.getList()
        currentList._getProject(projectTitle).deleteTask(taskId);
        Storage.saveList(currentList) 
    }

    static editProject(projectTitle, newTitle) {
        const currentList = Storage.getList()
        currentList._getProject(projectTitle).editProject(newTitle);
        Storage.saveList(currentList)
    }

    static checkTask(projectTitle, taskTitle, isChecked) {
        const currentList = Storage.getList()
        currentList._getProject(projectTitle).getTask(taskTitle).setChecked(isChecked);
        Storage.saveList(currentList)
    }

}

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatDistance.mjs");


class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checked = false
        this.id = `${(title || '_').toLowerCase().split(" ").join("_")}-${Date.now()}`
    };

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getDueDate() {
        return this.dueDate
    }

    getDueDate_distanceFrom(){
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.formatDistance)(this.getDueDate(), new Date(), { addSuffix: true })
    }

    getPriority() {
        return this.priority
    }

    getId() {
        return this.id
    }

    setChecked(check) {
        this.checked = check
        console.log(this.getTitle() + ' was checked! ' + this.checked + check)
    }

    isChecked() {
        return this.checked
    }

}

/***/ }),

/***/ "./src/assets/icon_add.svg":
/*!*********************************!*\
  !*** ./src/assets/icon_add.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc919ca136f4bf288668.svg";

/***/ }),

/***/ "./src/assets/icon_delete.svg":
/*!************************************!*\
  !*** ./src/assets/icon_delete.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2663b5f29ae1d89092a9.svg";

/***/ }),

/***/ "./src/assets/icon_edit.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_edit.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d51a722eedb17247a07d.svg";

/***/ }),

/***/ "./src/assets/icon_esc.svg":
/*!*********************************!*\
  !*** ./src/assets/icon_esc.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3724015a28ada696818.svg";

/***/ }),

/***/ "./src/assets/icon_hpriority.svg":
/*!***************************************!*\
  !*** ./src/assets/icon_hpriority.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdc71322eba57d6c3128.svg";

/***/ }),

/***/ "./src/assets/icon_logo.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76a6f135c15c175d9622.svg";

/***/ }),

/***/ "./src/assets/icon_lpriority.svg":
/*!***************************************!*\
  !*** ./src/assets/icon_lpriority.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e338ff7a043910eb70c0.svg";

/***/ }),

/***/ "./src/assets/icon_npriority.svg":
/*!***************************************!*\
  !*** ./src/assets/icon_npriority.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a9815a2b49a18afc6d1.svg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/getRoundingMethod.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getRoundingMethod.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)
/* harmony export */ });
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareAsc: () => (/* binding */ compareAsc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const diff = _dateLeft.getTime() - _dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarMonths.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarMonths.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarMonths: () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();

  return yearDiff * 12 + monthDiff;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarMonths);


/***/ }),

/***/ "./node_modules/date-fns/differenceInMilliseconds.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInMilliseconds: () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dateLeft, dateRight) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft) - +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMilliseconds);


/***/ }),

/***/ "./node_modules/date-fns/differenceInMonths.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/differenceInMonths.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInMonths: () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareAsc.mjs */ "./node_modules/date-fns/compareAsc.mjs");
/* harmony import */ var _differenceInCalendarMonths_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceInCalendarMonths.mjs */ "./node_modules/date-fns/differenceInCalendarMonths.mjs");
/* harmony import */ var _isLastDayOfMonth_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLastDayOfMonth.mjs */ "./node_modules/date-fns/isLastDayOfMonth.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const sign = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight);
  const difference = Math.abs(
    (0,_differenceInCalendarMonths_mjs__WEBPACK_IMPORTED_MODULE_2__.differenceInCalendarMonths)(_dateLeft, _dateRight),
  );
  let result;

  // Check for the difference of less than month
  if (difference < 1) {
    result = 0;
  } else {
    if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      _dateLeft.setDate(30);
    }

    _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);

    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    let isLastMonthNotFull = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight) === -sign;

    // Check for cases of one full calendar month
    if (
      (0,_isLastDayOfMonth_mjs__WEBPACK_IMPORTED_MODULE_3__.isLastDayOfMonth)((0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft)) &&
      difference === 1 &&
      (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(dateLeft, _dateRight) === 1
    ) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMonths);


/***/ }),

/***/ "./node_modules/date-fns/differenceInSeconds.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/differenceInSeconds.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInSeconds: () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getRoundingMethod.mjs */ "./node_modules/date-fns/_lib/getRoundingMethod.mjs");
/* harmony import */ var _differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMilliseconds.mjs */ "./node_modules/date-fns/differenceInMilliseconds.mjs");



/**
 * The {@link differenceInSeconds} function options.
 */

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dateLeft, dateRight, options) {
  const diff = (0,_differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__.differenceInMilliseconds)(dateLeft, dateRight) / 1000;
  return (0,_lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_1__.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInSeconds);


/***/ }),

/***/ "./node_modules/date-fns/endOfDay.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/endOfDay.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfDay: () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfDay);


/***/ }),

/***/ "./node_modules/date-fns/endOfMonth.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/endOfMonth.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfMonth: () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfMonth);


/***/ }),

/***/ "./node_modules/date-fns/formatDistance.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/formatDistance.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareAsc.mjs */ "./node_modules/date-fns/compareAsc.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _differenceInMonths_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./differenceInMonths.mjs */ "./node_modules/date-fns/differenceInMonths.mjs");
/* harmony import */ var _differenceInSeconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./differenceInSeconds.mjs */ "./node_modules/date-fns/differenceInSeconds.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");









/**
 * The {@link formatDistance} function options.
 */

/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date
 * @param baseDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(date, baseDate, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__.enUS;
  const minutesInAlmostTwoDays = 2520;

  const comparison = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_2__.compareAsc)(date, baseDate);

  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }

  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison: comparison,
  });

  let dateLeft;
  let dateRight;
  if (comparison > 0) {
    dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(baseDate);
    dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(date);
  } else {
    dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(date);
    dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(baseDate);
  }

  const seconds = (0,_differenceInSeconds_mjs__WEBPACK_IMPORTED_MODULE_4__.differenceInSeconds)(dateRight, dateLeft);
  const offsetInSeconds =
    ((0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(dateRight) -
      (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(dateLeft)) /
    1000;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);

    // 1.5 hrs up to 24 hrs
  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);

    // 1 day up to 1.75 days
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);

    // 1.75 days up to 30 days
  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth) {
    const days = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);

    // 1 month up to 2 months
  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth * 2) {
    months = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }

  months = (0,_differenceInMonths_mjs__WEBPACK_IMPORTED_MODULE_7__.differenceInMonths)(dateRight, dateLeft);

  // 2 months up to 12 months
  if (months < 12) {
    const nearestMonth = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);

    // 1 year up to max Date
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);


/***/ }),

/***/ "./node_modules/date-fns/isLastDayOfMonth.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isLastDayOfMonth.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isLastDayOfMonth: () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _endOfDay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endOfDay.mjs */ "./node_modules/date-fns/endOfDay.mjs");
/* harmony import */ var _endOfMonth_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endOfMonth.mjs */ "./node_modules/date-fns/endOfMonth.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check

 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  return +(0,_endOfDay_mjs__WEBPACK_IMPORTED_MODULE_1__.endOfDay)(_date) === +(0,_endOfMonth_mjs__WEBPACK_IMPORTED_MODULE_2__.endOfMonth)(_date);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLastDayOfMonth);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _modules_Listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Listeners */ "./src/modules/Listeners.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const demoInit = () => {
    localStorage.clear()
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject('default')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject('Shop')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject('Work')

    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('default', 'Clean room', 'Organize clothes and furniture.', '2023-03-12', '1')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('Shop', 'Buy groceries', 'Get bread, milk, eggs, and vegetables.', '2023-03-15', '2')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('default', 'Walk dog', 'Take Charlie to the park for exercise.', '2023-03-17', '0')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('Work', 'Study math', 'Review chapter 5 on linear equations.', '2023-03-20', '1')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('Work', 'Email team', 'Send weekly report and schedule meeting.', '2023-03-22', '2')
    
    _modules_Listeners__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage()
    //Storage.deleteProject('Shop')
    //Storage.deleteTask('Work','Email team')
}

const reset = () => localStorage.clear()


if(!_modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getList()){
    demoInit()
    console.log('run demo data!')
}

_modules_Listeners__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxTQUFTLGdGQUFnRixZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFL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SUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7QUNWaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBLE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILFNBQVMseUVBQWU7QUFDeEI7QUFD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TztBQUNYO0FBQ0EsSUFBSSwwREFBUztBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSx3REFBTztBQUNYO0FBQ0E7QUFDQTs7QUFFQSwwREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0Um91bmRpbmdNZXRob2QubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29tcGFyZUFzYy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5Nb250aHMubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJblNlY29uZHMubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRPZk1vbnRoLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNMYXN0RGF5T2ZNb250aC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgLS1iZ0NvbG9yMTogcmdiKDc4LCAxMTUsIDEwNCk7XG4gIC0tYmdDb2xvcjI6IHJnYig0OCwgNzksIDcwKTtcbiAgLS1iZ0NvbG9yMzogcmdiKDM3LCA2MCwgNTMpO1xufVxuXG5ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbiNhcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLyogPT09PT0gSEVBREVSID09PT09ICAqL1xuXG4jaGVhZGVyLWRpdiB7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMik7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbiAgXG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4jaGVhZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xufVxuXG4jaGVhZGVyLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xufVxuXG4vKiA9PT09PSBQUk9KRUNUUyA9PT09PSAgKi9cbiNwYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgbWluLXdpZHRoOiAxMHJlbTtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIHZhcigtLWJnQ29sb3IyKSAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWJnQ29sb3IyKSAwLjFyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjRyZW07XG59XG5cbiNwYW5lbCA+IC5wcm9qLWRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMC41cmVtIDAuMnJlbSAwIDA7XG59XG5cbi5wcm9qLXQyIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnByb2otcmlnaHRzdWJkaXYgPiAucHJvai1lZGl0YnRuIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnByb2otcmlnaHRzdWJkaXYgPiAucHJvai1kZWxldGVidG4ge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4vKiA9PT09PSBUQVNLUyA9PT09PSAgKi9cblxuI2NvbnRlbnQge1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbn1cblxuI3RpdGxlLWN1cnJlbnRwcm9qZWN0IHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4udGFzay1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi13aWR0aDptYXgtY29udGVudDtcbiAgaGVpZ2h0OiAycmVtO1xuXG4gIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7XG5cbiAgYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0tYmdDb2xvcjMpIDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC40cmVtO1xufVxuXG4udGFzay10M3tcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4udGFzay1kYXRlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuNnJlbTtcbn1cblxuLnRhc2stcHJpb3JpdHkge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbn1cblxuLnRhc2stcmlnaHRzdWJkaXYsIC50YXNrLWxlZnRzdWJkaXYsIC50YXNrLWRhdGUge1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4udGFzay1yaWdodHN1YmRpciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4udGFzay1lZGl0YnRuIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjFyZW07XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnRhc2stZGVsZXRlYnRuIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjFyZW07XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnRhc2stcmlnaHRzdWJkaXIsIC5wcm9qLXJpZ2h0c3ViZGlyIHtcbiAgb3BhY2l0eTp2YXIoLS1iZ0NvbG9yMik7XG59XG5cblxuLyogPT09PT0gRElBTE9HIFBST0pFQ1QgPT09PT0gICovXG4jbW9kYWwtYWRkcHJvai1kaWFsb2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxcmVtO1xuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuI21vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4jbW9kYWwtYWRkcHJvai1oZWFkZXJzdWJkaXYgPiAjbW9kYWwtYWRkcHJvai1jbG9zZWJ0biB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIG1hcmdpbjogMDtcblxufVxuXG4jbW9kYWwtYWRkcHJvai1oZWFkZXJzdWJkaXYgPiAgI21vZGFsLWFkZHByb2otaDJ7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDAgMS41cmVtXG5cbn1cblxuI21vZGFsLWFkZHByb2otaW5wdXQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cblxuLyogPT09PT0gRElBTE9HIFRBU0tTID09PT09ICAqL1xuXG4jbW9kYWwtYWRkdGFzay1kaWFsb2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxcmVtO1xuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuI21vZGFsLWFkZHRhc2staGVhZGVyc3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcblxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbiNtb2RhbC1hZGR0YXNrLWNsb3NlYnRuIHtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbiAgbWFyZ2luOiAwO1xuXG59XG5cbiNtb2RhbC1hZGR0YXNrLWgye1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDEuNXJlbVxufVxuXG4jbW9kYWwtYWRkdGFzay1pbnB1dC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNtb2RhbC1hZGR0YXNrLWlucHV0LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI21vZGFsLWFkZHRhc2staW5wdXQtZHVlZGF0ZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGV7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbW9kYWwtYWRkdGFzay1zZWxlY3RvcnNzdWJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuI21vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHl7XG4gIHdpZHRoOiA0MCU7XG59XG5cbiNtb2RhbC1hZGR0YXNrLWlucHV0LXNlbGVjdC1wcm9qZWN0e1xuICB3aWR0aDogNDAlO1xufVxuXG4vKiA9PT09PSAgRElBTE9HIERFTEVURSA9PT09PSAgKi9cblxuI21vZGFsLWRlbGV0ZS1kaWFsb2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiA0MCU7XG59XG5cbiNtb2RhbC1kZWxldGUtY2xvc2VidG57XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLyogPT09PT0gSE9WRVIgPT09PT0gICovXG5cbi5wcm9qLWRpdiwgLnRhc2stY2hlY2tib3gsIC50YXNrLWVkaXRidG4sIC50YXNrLWRlbGV0ZWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Byb2otYWRkYnRuLCAjdGFzay1hZGRidG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLyogPT09PT0gUk9XUyA9PT09PSAgKi9cblxuLnByb2otcmlnaHRzdWJkaXYsIC50YXNrLXJpZ2h0c3ViZGl2LCAudGFzay1sZWZ0c3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGFzay1sZWZ0c3ViZGl2IHtcbndpZHRoOiA0MCU7XG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi50YXNrLXJpZ2h0c3ViZGl2IHtcbndpZHRoOiAyMCU7XG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGFzay1kYXRlIHtcbndpZHRoOiA0MCU7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4jcHJvai1hZGRidG4ge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuXG59XG5cbiN0YXNrLWFkZGJ0biB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIFxufVxuXG5cbi8qXG5ib2R5IHtcbmZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbmJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG5tYXJnaW46IDA7XG5wYWRkaW5nOiAwO1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbiNwYW5lbCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5wYWRkaW5nOiAyMHB4O1xubWFyZ2luLXJpZ2h0OiAyMHB4O1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNjb250ZW50IHtcbmZsZXg6IDE7XG5wYWRkaW5nOiAyMHB4O1xufVxuXG4ucHJvai1kaXYsXG4udGFzay1kaXYge1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5tYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGFzay1jaGVja2JveCB7XG5tYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wcm9qLWVkaXRidG4sXG4ucHJvai1kZWxldGVidG4sXG4udGFzay1lZGl0YnRuLFxuLnRhc2stZGVsZXRlYnRuIHtcbm1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGlhbG9nIHtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5wYWRkaW5nOiAyMHB4O1xucG9zaXRpb246IGZpeGVkO1xudG9wOiA1MCU7XG5sZWZ0OiA1MCU7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbnotaW5kZXg6IDk5OTk7XG5kaXNwbGF5OiBub25lO1xud2lkdGg6IDMwMHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xubWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbmZvbnQtc2l6ZTogMjBweDtcbmNvbG9yOiAjMzMzO1xufVxuXG4ubW9kYWwtY2xvc2Uge1xuYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbmNvbG9yOiAjMzMzO1xuYm9yZGVyOiBub25lO1xucGFkZGluZzogNXB4IDEwcHg7XG5ib3JkZXItcmFkaXVzOiAzcHg7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1jbG9zZTpob3ZlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG5tYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubW9kYWwtaW5wdXQge1xud2lkdGg6IDEwMCU7XG5wYWRkaW5nOiA4cHg7XG5tYXJnaW4tYm90dG9tOiAxMHB4O1xuYm9yZGVyOiAxcHggc29saWQgI2NjYztcbmJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm1vZGFsLXN1Ym1pdCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuY29sb3I6IHdoaXRlO1xuYm9yZGVyOiBub25lO1xucGFkZGluZzogMTBweCAyMHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuZm9udC1zaXplOiAxNnB4O1xuYm9yZGVyLXJhZGl1czogNXB4O1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtc3VibWl0OmhvdmVyIHtcbmJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG59XG5cbn0qL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlOztFQUVmLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxh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OEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLGdDQUFnQzs7QUFFaEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUdBLHNCQUFzQjs7QUFFdEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0FBQ0EsVUFBVTtBQUNWLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBLFVBQVU7QUFDVix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsdUJBQXVCO0FBQ3ZCOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztBQUVkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErR0VcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcblxcbiAgLS1iZ0NvbG9yMTogcmdiKDc4LCAxMTUsIDEwNCk7XFxuICAtLWJnQ29sb3IyOiByZ2IoNDgsIDc5LCA3MCk7XFxuICAtLWJnQ29sb3IzOiByZ2IoMzcsIDYwLCA1Myk7XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI2FwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLyogPT09PT0gSEVBREVSID09PT09ICAqL1xcblxcbiNoZWFkZXItZGl2IHtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMik7XFxuICBwYWRkaW5nOiAwLjlyZW07XFxuICBcXG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jaGVhZGVyLWxvZ28ge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuI2hlYWRlci10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwIDAgMCAwO1xcbn1cXG5cXG4jaGVhZGVyLXN1YnRpdGxlIHtcXG4gIG1hcmdpbjogMCAwIDAgMDtcXG59XFxuXFxuLyogPT09PT0gUFJPSkVDVFMgPT09PT0gICovXFxuI3BhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIG1heC13aWR0aDogMjByZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICB3aWR0aDogMjUlO1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB2YXIoLS1iZ0NvbG9yMikgMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0tYmdDb2xvcjIpIDAuMXJlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjRyZW07XFxufVxcblxcbiNwYW5lbCA+IC5wcm9qLWRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMC41cmVtIDAuMnJlbSAwIDA7XFxufVxcblxcbi5wcm9qLXQyIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wcm9qLXJpZ2h0c3ViZGl2ID4gLnByb2otZWRpdGJ0biB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4ucHJvai1yaWdodHN1YmRpdiA+IC5wcm9qLWRlbGV0ZWJ0biB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4vKiA9PT09PSBUQVNLUyA9PT09PSAgKi9cXG5cXG4jY29udGVudCB7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RpdGxlLWN1cnJlbnRwcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLXdpZHRoOm1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAycmVtO1xcblxcbiAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcXG5cXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWJnQ29sb3IzKSAwLjVyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjRyZW07XFxufVxcblxcbi50YXNrLXQze1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eSB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi50YXNrLXJpZ2h0c3ViZGl2LCAudGFzay1sZWZ0c3ViZGl2LCAudGFzay1kYXRlIHtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi50YXNrLXJpZ2h0c3ViZGlyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4udGFzay1lZGl0YnRuIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjFyZW07XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi50YXNrLWRlbGV0ZWJ0biB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4udGFzay1yaWdodHN1YmRpciwgLnByb2otcmlnaHRzdWJkaXIge1xcbiAgb3BhY2l0eTp2YXIoLS1iZ0NvbG9yMik7XFxufVxcblxcblxcbi8qID09PT09IERJQUxPRyBQUk9KRUNUID09PT09ICAqL1xcbiNtb2RhbC1hZGRwcm9qLWRpYWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuI21vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNtb2RhbC1hZGRwcm9qLWhlYWRlcnN1YmRpdiA+ICNtb2RhbC1hZGRwcm9qLWNsb3NlYnRuIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG4jbW9kYWwtYWRkcHJvai1oZWFkZXJzdWJkaXYgPiAgI21vZGFsLWFkZHByb2otaDJ7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCAwIDAgMS41cmVtXFxuXFxufVxcblxcbiNtb2RhbC1hZGRwcm9qLWlucHV0LXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuXFxuLyogPT09PT0gRElBTE9HIFRBU0tTID09PT09ICAqL1xcblxcbiNtb2RhbC1hZGR0YXNrLWRpYWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuI21vZGFsLWFkZHRhc2staGVhZGVyc3ViZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI21vZGFsLWFkZHRhc2stY2xvc2VidG4ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBtYXJnaW46IDA7XFxuXFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWgye1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgMCAwIDEuNXJlbVxcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1pbnB1dC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1kdWVkYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGV7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI21vZGFsLWFkZHRhc2stc2VsZWN0b3Jzc3ViZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5e1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuI21vZGFsLWFkZHRhc2staW5wdXQtc2VsZWN0LXByb2plY3R7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4vKiA9PT09PSAgRElBTE9HIERFTEVURSA9PT09PSAgKi9cXG5cXG4jbW9kYWwtZGVsZXRlLWRpYWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbiNtb2RhbC1kZWxldGUtY2xvc2VidG57XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT0gSE9WRVIgPT09PT0gICovXFxuXFxuLnByb2otZGl2LCAudGFzay1jaGVja2JveCwgLnRhc2stZWRpdGJ0biwgLnRhc2stZGVsZXRlYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2otYWRkYnRuLCAjdGFzay1hZGRidG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiA9PT09PSBST1dTID09PT09ICAqL1xcblxcbi5wcm9qLXJpZ2h0c3ViZGl2LCAudGFzay1yaWdodHN1YmRpdiwgLnRhc2stbGVmdHN1YmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1sZWZ0c3ViZGl2IHtcXG53aWR0aDogNDAlO1xcbmp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnRhc2stcmlnaHRzdWJkaXYge1xcbndpZHRoOiAyMCU7XFxuanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxud2lkdGg6IDQwJTtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuI3Byb2otYWRkYnRuIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcblxcbn1cXG5cXG4jdGFzay1hZGRidG4ge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBcXG59XFxuXFxuXFxuLypcXG5ib2R5IHtcXG5mb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNwYW5lbCB7XFxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxucGFkZGluZzogMjBweDtcXG5tYXJnaW4tcmlnaHQ6IDIwcHg7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29udGVudCB7XFxuZmxleDogMTtcXG5wYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvai1kaXYsXFxuLnRhc2stZGl2IHtcXG5kaXNwbGF5OiBmbGV4O1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxubWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbm1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnByb2otZWRpdGJ0bixcXG4ucHJvai1kZWxldGVidG4sXFxuLnRhc2stZWRpdGJ0bixcXG4udGFzay1kZWxldGVidG4ge1xcbm1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxucGFkZGluZzogMjBweDtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiA1MCU7XFxubGVmdDogNTAlO1xcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbnotaW5kZXg6IDk5OTk7XFxuZGlzcGxheTogbm9uZTtcXG53aWR0aDogMzAwcHg7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxubWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG5mb250LXNpemU6IDIwcHg7XFxuY29sb3I6ICMzMzM7XFxufVxcblxcbi5tb2RhbC1jbG9zZSB7XFxuYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG5jb2xvcjogIzMzMztcXG5ib3JkZXI6IG5vbmU7XFxucGFkZGluZzogNXB4IDEwcHg7XFxuYm9yZGVyLXJhZGl1czogM3B4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxubWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1vZGFsLWlucHV0IHtcXG53aWR0aDogMTAwJTtcXG5wYWRkaW5nOiA4cHg7XFxubWFyZ2luLWJvdHRvbTogMTBweDtcXG5ib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbmJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1vZGFsLXN1Ym1pdCB7XFxuYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG5jb2xvcjogd2hpdGU7XFxuYm9yZGVyOiBub25lO1xcbnBhZGRpbmc6IDEwcHggMjBweDtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5mb250LXNpemU6IDE2cHg7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLXN1Ym1pdDpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcXG59XFxuXFxufSovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICAgIH1cblxuICAgIF9zZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcbiAgICB9XG5cbiAgICBfZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzXG4gICAgfVxuXG4gICAgX2dldFByb2plY3QodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSB0aXRsZSlcbiAgICB9XG5cbiAgICBfYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgICB9XG5cbiAgICBfZGVsZXRlUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgIT09IHByb2plY3RUaXRsZSlcbiAgICB9XG59IiwiaW1wb3J0IExpc3RlbmVycyBmcm9tIFwiLi9MaXN0ZW5lcnNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcblxuaW1wb3J0IGljb25EZWxldGUgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2RlbGV0ZS5zdmdcIlxuaW1wb3J0IGljb25BZGQgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2FkZC5zdmdcIlxuaW1wb3J0IGljb25FZGl0IGZyb20gXCIuLi9hc3NldHMvaWNvbl9lZGl0LnN2Z1wiXG5pbXBvcnQgaWNvbkVzYyBmcm9tIFwiLi4vYXNzZXRzL2ljb25fZXNjLnN2Z1wiXG5pbXBvcnQgaWNvbkxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2xvZ28uc3ZnXCJcbmltcG9ydCBpY29uTG93UHJpb3JpdHkgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2xwcmlvcml0eS5zdmdcIlxuaW1wb3J0IGljb25IaWdoUHJpb3JpdHkgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2hwcmlvcml0eS5zdmdcIlxuaW1wb3J0IGljb25Ob1ByaW9yaXR5IGZyb20gXCIuLi9hc3NldHMvaWNvbl9ucHJpb3JpdHkuc3ZnXCJcblxuXG5jb25zdCBEb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFuZWwnKVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaFBhZ2UgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldExpc3QoKTtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBwYW5lbC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gcmVmcmVzaCBsaXN0ICcgKyBjdXJyZW50UHJvamVjdClcbiAgICAgICAgcmVuZGVySGVhZGVyKClcbiAgICAgICAgcmVuZGVyUHJvamVjdHMobGlzdC5fZ2V0UHJvamVjdHMoKSlcbiAgICAgICAgcmVuZGVyVGFza3MobGlzdC5fZ2V0UHJvamVjdChjdXJyZW50UHJvamVjdCkuZ2V0VGFza3MoKSlcbiAgICAgICAgcmVuZGVyQWRkQnV0dG9ucygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQodHlwZSxpZCxhcnJheUNsYXNzZXMsaW5UeXBlLGNvbnRlbnQsYXBwZW5kQ2gpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGlmKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIGlmKGFycmF5Q2xhc3NlcykgYXJyYXlDbGFzc2VzLmZvckVhY2goXG4gICAgICAgICAgICAobXlDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Q2xhc3MpKTtcbiAgICAgICAgaWYoaW5UeXBlKSBlbGVtZW50LnR5cGUgPSBpblR5cGU7XG4gICAgICAgIGlmKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcbiAgICAgICAgaWYoYXBwZW5kQ2gpIGFwcGVuZENoLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIFxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJIZWFkZXIgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGVhZGVyIGNhbGxlZCEnKVxuXG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgaGVhZGVyLWRpdmAsIG51bGwsIG51bGwsIG51bGwsIGhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDEnLCAnaGVhZGVyLXRpdGxlJywgbnVsbCwgbnVsbCwgJ0RPSVQhJywgZGl2KVxuXG4gICAgICAgIGNvbnN0IGxvZ28gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2hlYWRlci1sb2dvJywgbnVsbCwgbnVsbCwgbnVsbCwgdGl0bGUpXG4gICAgICAgIGxvZ28uc3JjID0gaWNvbkxvZ29cblxuICAgICAgICBjb25zdCBzdWJUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hlYWRlci1zdWJ0aXRsZScsIG51bGwsIG51bGwsICdhIHRvLWRvIGFwcCcsIGRpdilcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAodGFza3MpID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCd0MicsIGB0aXRsZS1jdXJyZW50cHJvamVjdGAgLFsndGl0bGUtY3VycmVudHByb2plY3QnXSwgbnVsbCwgTGlzdGVuZXJzLmN1cnJlbnRQcm9qZWN0LCBjb250ZW50KVxuXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0YXNrLmdldFRpdGxlKCkudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIilcblxuICAgICAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsYHQtZGl2LSR7dGFzay5nZXRJZCgpfWAsWyd0YXNrLWRpdiddLG51bGwsbnVsbCxjb250ZW50KTtcblxuICAgICAgICAgICAgY29uc3QgbGVmdFN1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgdC1sZWZ0c3ViZGl2LSR7bmFtZX1gLCBbJ3Rhc2stbGVmdHN1YmRpdiddLCBudWxsLCBudWxsLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsIGB0LWNoZWNrYm94LSR7dGFzay5nZXRJZCgpfWAsIFsndGFzay1jaGVja2JveCddLCAnY2hlY2tib3gnLCBudWxsLCBsZWZ0U3ViRGl2KTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmlzQ2hlY2tlZCgpIFxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCAncCcsIGB0LXQzLSR7bmFtZX1gLCBbJ3Rhc2stdDMnXSwgbnVsbCwgdGFzay5nZXRUaXRsZSgpLCBsZWZ0U3ViRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCAncCcsIGB0LWRhdGUtJHtuYW1lfWAsIFsndGFzay1kYXRlJ10sIG51bGwsIHRhc2suZ2V0RHVlRGF0ZV9kaXN0YW5jZUZyb20oKSwgZGl2KTtcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgYHQtcHJpb3JpdHktJHtuYW1lfWAsIFsndGFzay1wcmlvcml0eSddLCBudWxsLCBudWxsLCBkaXYpO1xuICAgICAgICAgICAgICAgIGlmKHRhc2suZ2V0UHJpb3JpdHkoKSAhPT0gJzEnKXtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuc3JjID0gdGFzay5nZXRQcmlvcml0eSgpID09PSAnMCcgPyBpY29uTG93UHJpb3JpdHkgOiBpY29uSGlnaFByaW9yaXR5XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5LnNyYyA9IGljb25Ob1ByaW9yaXR5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2suZ2V0UHJpb3JpdHkoKSlcblxuICAgICAgICAgICAgY29uc3QgcmlnaHRTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYHQtcmlnaHRzdWJkaXYtJHt0YXNrLmdldElkKCl9YCwgWyd0YXNrLXJpZ2h0c3ViZGl2J10sIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgICAgICAgICAgcmlnaHRTdWJEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgYHQtZWRpdGJ0bi0ke3Rhc2suZ2V0SWQoKX1gLCBbJ3Rhc2stZWRpdGJ0biddLCBudWxsLCBudWxsLCByaWdodFN1YkRpdik7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zcmMgPSBpY29uRWRpdFxuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCggJ2ltZycsIGB0LWRlbGV0ZWJ0bi0ke3Rhc2suZ2V0SWQoKX1gLCBbJ3Rhc2stZGVsZXRlYnRuJ10sIG51bGwsIG51bGwsIHJpZ2h0U3ViRGl2KTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uc3JjID0gaWNvbkRlbGV0ZVxuXG4gICAgICAgICAgICBpZiAodGFzay5pc0NoZWNrZWQoKSkge1xuICAgICAgICAgICAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCdcbiAgICAgICAgICAgICAgICB0aXRsZS5zdHlsZS5vcGFjaXR5ID0gMC4zXG4gICAgICAgICAgICAgICAgZGF0ZS5zdHlsZS5vcGFjaXR5ID0gMC4zXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuc3R5bGUub3BhY2l0eSA9IDAuM1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0LmdldFRpdGxlKClcblxuICAgICAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBwLWRpdi0ke25hbWV9YCwgWydwcm9qLWRpdiddLCBudWxsLCBudWxsLCBwYW5lbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCBgcC10Mi0ke25hbWV9YCAsWydwcm9qLXQyJ10sIG51bGwsIG5hbWUsIGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0U3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBwLXJpZ2h0c3ViZGl2LSR7bmFtZX1gLCBbJ3Byb2otcmlnaHRzdWJkaXYnXSwgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgICAgICByaWdodFN1YkRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJyxgcC1lZGl0YnRuLSR7bmFtZX1gLFsncHJvai1lZGl0YnRuJ10sbnVsbCxudWxsLHJpZ2h0U3ViRGl2KTtcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnNyYyA9IGljb25FZGl0XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCBgcC1kZWxldGVidG4tJHtuYW1lfWAsIFsncHJvai1kZWxldGVidG4nXSwgbnVsbCwgbnVsbCwgcmlnaHRTdWJEaXYpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zcmMgPSBpY29uRGVsZXRlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQWRkQnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvakFkZEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLGBwcm9qLWFkZGJ0bmAsbnVsbCxudWxsLG51bGwscGFuZWwsKTtcbiAgICAgICAgICAgIHByb2pBZGRCdG4uc3JjID0gaWNvbkFkZFxuXG4gICAgICAgIGNvbnN0IHRhc2tBZGRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJyxgdGFzay1hZGRidG5gLG51bGwsbnVsbCxudWxsLGNvbnRlbnQsKTtcbiAgICAgICAgICAgIHRhc2tBZGRCdG4uc3JjID0gaWNvbkFkZFxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckRpYWxvZ0RlbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpYWxvZycsICdtb2RhbC1kZWxldGUtZGlhbG9nJyxudWxsLG51bGwsbnVsbCxjb250ZW50KVxuXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdtb2RhbC1kZWxldGUtY2xvc2VidG4nLCBudWxsLCBudWxsLCBudWxsLCBkaWFsb2cpXG4gICAgICAgICAgICBjbG9zZUJ0bi5zcmMgPSBpY29uRXNjXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ21vZGFsLWRlbGV0ZS1oMicsIG51bGwsIG51bGwsICdDb25maXJtIERlbGV0ZT8nLCBkaWFsb2cpXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdtb2RhbC1kZWxldGUtc3VibWl0YnRuJywgbnVsbCwgJ2J1dHRvbicsICdEZWxldGUnLCBkaWFsb2cpXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRGlhbG9nQWRkVGFzayA9IChlZGl0VGl0bGUsIGVkaXREZXNjcmlwdGlvbiwgZWRpdER1ZURhdGUsIGVkaXRQYXJlbnRQcm9qZWN0LCBlZGl0UHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpYWxvZycsICdtb2RhbC1hZGR0YXNrLWRpYWxvZycsbnVsbCxudWxsLG51bGwsY29udGVudClcblxuICAgICAgICBjb25zdCBoZWFkZXJTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYG1vZGFsLWFkZHRhc2staGVhZGVyc3ViZGl2YCwgbnVsbCwgbnVsbCwgbnVsbCwgZGlhbG9nKTtcblxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnbW9kYWwtYWRkdGFzay1jbG9zZWJ0bicsIG51bGwsIG51bGwsIG51bGwsIGhlYWRlclN1YkRpdilcbiAgICAgICAgICAgIGNsb3NlQnRuLnNyYyA9IGljb25Fc2NcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdtb2RhbC1hZGR0YXNrLWgyJywgbnVsbCwgbnVsbCwgJ05ldyBUYXNrJywgaGVhZGVyU3ViRGl2KVxuICAgICAgICAgICAgaWYoZWRpdFRpdGxlKSB0aXRsZS5pbm5lclRleHQgPSAnRWRpdCBUYXNrJ1xuXG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW5wdXQnLCAnbW9kYWwtYWRkdGFzay1pbnB1dC10aXRsZScsIG51bGwsICd0ZXh0JywgbnVsbCwgZGlhbG9nKVxuICAgICAgICAgICAgaWYoZWRpdFRpdGxlKSBpbnB1dFRpdGxlLnZhbHVlID0gZWRpdFRpdGxlXG5cbiAgICAgICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCd0ZXh0YXJlYScsICdtb2RhbC1hZGR0YXNrLWlucHV0LWRlc2NyaXB0aW9uJywgbnVsbCwgbnVsbCwgbnVsbCwgZGlhbG9nKVxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLmNvbHMgPSAyNVxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnJvd3MgPSAzXG4gICAgICAgICAgICBpZihlZGl0RGVzY3JpcHRpb24pIGlucHV0RGVzY3JpcHRpb24udmFsdWUgID0gZWRpdERlc2NyaXB0aW9uXG5cbiAgICAgICAgY29uc3QgaW5wdXREdWVEYXRlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywgJ21vZGFsLWFkZHRhc2staW5wdXQtZHVlZGF0ZScsIG51bGwsICdkYXRlJywgbnVsbCwgZGlhbG9nKVxuICAgICAgICAgICAgaWYoZWRpdER1ZURhdGUpIGlucHV0RHVlRGF0ZS52YWx1ZSA9IGVkaXREdWVEYXRlXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzU3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBtb2RhbC1hZGR0YXNrLXNlbGVjdG9yc3N1YmRpdmAsIG51bGwsIG51bGwsIG51bGwsIGRpYWxvZyk7XG5cbiAgICAgICAgY29uc3QgaW5wdXRTZWxlY3RQcmlvcml0eSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWxlY3QnLCAnbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eScsIG51bGwsIG51bGwsIG51bGwsIHNlbGVjdG9yc1N1YkRpdilcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TG93ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ29wdGlvbicsIGBtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5LWxvd2AsIG51bGwsIG51bGwsICdMb3cnLCBpbnB1dFNlbGVjdFByaW9yaXR5KVxuICAgICAgICAgICAgICAgIHByaW9yaXR5TG93LnZhbHVlID0gMFxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlOb3JtYWwgPSBjcmVhdGVIdG1sRWxlbWVudCgnb3B0aW9uJywgYG1vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHktbm9ybWFsYCwgbnVsbCwgbnVsbCwgJ05vIFByaW9yaXR5JywgaW5wdXRTZWxlY3RQcmlvcml0eSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eU5vcm1hbC52YWx1ZSA9IDFcbiAgICAgICAgICAgICAgICBwcmlvcml0eU5vcm1hbC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdvcHRpb24nLCBgbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eS1oaWdoYCwgbnVsbCwgbnVsbCwgJ0hpZ2gnLCBpbnB1dFNlbGVjdFByaW9yaXR5KVxuICAgICAgICAgICAgICAgIHByaW9yaXR5SGlnaC52YWx1ZSA9IDJcbiAgICAgICAgICAgICAgICBpZihlZGl0UHJpb3JpdHkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWRpdFByaW9yaXJ5OiAnICsgZWRpdFByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRTZWxlY3RQcmlvcml0eS5zZWxlY3RlZEluZGV4OiAnICsgaW5wdXRTZWxlY3RQcmlvcml0eS5zZWxlY3RlZEluZGV4KVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFNlbGVjdFByaW9yaXR5LnNlbGVjdGVkSW5kZXggPSBlZGl0UHJpb3JpdHl9XG5cbiAgICAgICAgY29uc3QgaW5wdXRTZWxlY3RQcm9qZWN0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlbGVjdCcsICdtb2RhbC1hZGR0YXNrLWlucHV0LXNlbGVjdC1wcm9qZWN0JywgbnVsbCwgbnVsbCwgbnVsbCwgc2VsZWN0b3JzU3ViRGl2KVxuICAgICAgICAgICAgU3RvcmFnZS5nZXRMaXN0KCkuX2dldFByb2plY3RzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNQcm9qZWN0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ29wdGlvbicsIGBtb2RhbC1hZGR0YXNrLWlucHV0LW9wdGlvbi1wcm9qJHtwcm9qZWN0LmdldFRpdGxlKCl9YCwgbnVsbCwgbnVsbCwgcHJvamVjdC5nZXRUaXRsZSgpLCBpbnB1dFNlbGVjdFByb2plY3QpXG4gICAgICAgICAgICAgICAgaWYoZWRpdFBhcmVudFByb2plY3QgJiYgKG9wdGlvbnNQcm9qZWN0LnZhbHVlID09PSBlZGl0UGFyZW50UHJvamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1Byb2plY3Quc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoIWVkaXRQYXJlbnRQcm9qZWN0ICYmIChvcHRpb25zUHJvamVjdC52YWx1ZSA9PT0gTGlzdGVuZXJzLmN1cnJlbnRQcm9qZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNQcm9qZWN0LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zUHJvamVjdC52YWx1ZSA9IHByb2plY3QuZ2V0VGl0bGUoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ21vZGFsLWFkZHRhc2stc3VibWl0YnRuJywgbnVsbCwgJ2J1dHRvbicsICdBZGQnLCBkaWFsb2cpXG4gICAgICAgICAgICBpZiAoZWRpdFRpdGxlKSBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ0VkaXQnXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRGlhbG9nQWRkUHJvaiA9IChlZGl0VGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpYWxvZycsICdtb2RhbC1hZGRwcm9qLWRpYWxvZycsbnVsbCxudWxsLG51bGwsY29udGVudClcblxuICAgICAgICBjb25zdCBoZWFkZXJTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYG1vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2YCwgbnVsbCwgbnVsbCwgbnVsbCwgZGlhbG9nKTtcblxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnbW9kYWwtYWRkcHJvai1jbG9zZWJ0bicsIG51bGwsIG51bGwsIG51bGwsIGhlYWRlclN1YkRpdilcbiAgICAgICAgICAgIGNsb3NlQnRuLnNyYyA9IGljb25Fc2NcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdtb2RhbC1hZGRwcm9qLWgyJywgbnVsbCwgbnVsbCwgJ05ldyBQcm9qZWN0JywgaGVhZGVyU3ViRGl2KVxuICAgICAgICBpZihlZGl0VGl0bGUpIHRpdGxlLmlubmVyVGV4dCA9ICdFZGl0IHByb2plY3QnXG5cbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsIGBtb2RhbC1hZGRwcm9qLWlucHV0LXRpdGxlYCwgbnVsbCwgJ3RleHQnLCBudWxsLCBkaWFsb2cpXG4gICAgICAgIGlmKGVkaXRUaXRsZSkgaW5wdXRUaXRsZS52YWx1ZSA9IGVkaXRUaXRsZVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBgbW9kYWwtYWRkcHJvai1zdWJtaXRidG5gLCBudWxsLCAnYnV0dG9uJywgJ0FkZCcsIGRpYWxvZylcbiAgICB9XG5cblxuICAgIHJldHVybiB7IHJlbmRlclRhc2tzLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyQWRkQnV0dG9ucywgcmVuZGVyRGlhbG9nQWRkUHJvaiwgcmVuZGVyRGlhbG9nQWRkVGFzaywgcmVuZGVyRGlhbG9nRGVsZXRlLCByZWZyZXNoUGFnZSB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IERvbSIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCJcbmltcG9ydCBEb20gZnJvbSBcIi4vRE9NXCJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lcnMge1xuXG4gICAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gdGhpcy5jdXJyZW50UHJvamVjdCB8fCBTdG9yYWdlLmdldExpc3QoKS5fZ2V0UHJvamVjdHMoKVswXS5nZXRUaXRsZSgpIC8vIHx8IGZvciAgaW5pdGlhbGl6YXRpb25cbiAgICBcbiAgICBzdGF0aWMgZ2V0Q3VycmVudExpc3QoKSB7XG4gICAgICAgIHJldHVybiBTdG9yYWdlLmdldExpc3QoKVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBMaXN0ZW5lcnMuY3VycmVudFByb2plY3QgPSBwcm9qZWN0TmFtZVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUGFnZSgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICBEb20ucmVmcmVzaFBhZ2UoTGlzdGVuZXJzLmN1cnJlbnRQcm9qZWN0KVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdERvbUVsZW1lbnRzKClcbiAgICAgICAgTGlzdGVuZXJzLmluaXROZXdQcm9qZWN0RGlhbG9nKClcbiAgICAgICAgTGlzdGVuZXJzLmluaXROZXdUYXNrRGlhbG9nKClcbiAgICAgICAgTGlzdGVuZXJzLmluaXRFZGl0RGlhbG9nKClcbiAgICAgICAgTGlzdGVuZXJzLmluaXREZWxldGVEaWFsb2coKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKExpc3RlbmVycy5nZXRDdXJyZW50TGlzdCgpKVxuICAgIH1cblxuXG4gICAgc3RhdGljIGluaXREb21FbGVtZW50cygpIHtcblxuICAgICAgICAvLz09PT0gSE9WRVIgVEFTSyA9PT0vL1xuICAgICAgICBjb25zdCB0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGl2JylcblxuICAgICAgICB0RGl2LmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0lkID0gc2VjdGlvbi5pZC5zbGljZSg2KVxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1Nob3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdC1yaWdodHN1YmRpdi0ke3Rhc2tJZH1gKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Nob3cuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBzZWN0aW9uLmlkLnNsaWNlKDYpXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvSGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0LXJpZ2h0c3ViZGl2LSR7dGFza0lkfWApXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvSGlkZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy89PT09IEhPVkVSIFBST0ogPT09Ly9cbiAgICAgICAgY29uc3QgcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWRpdicpXG5cbiAgICAgICAgcERpdi5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgICAgc2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2pOYW1lID0gc2VjdGlvbi5pZC5zbGljZSg2KVxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1Nob3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcC1yaWdodHN1YmRpdi0ke3Byb2pOYW1lfWApXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvU2hvdy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2pOYW1lID0gc2VjdGlvbi5pZC5zbGljZSg2KVxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb0hpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcC1yaWdodHN1YmRpdi0ke3Byb2pOYW1lfWApXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvSGlkZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdDMnKVxuXG4gICAgICAgIC8vPT09PSBTRUxFQ1QgUFJPSiA9PT0vL1xuICAgICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai10MicpXG5cbiAgICAgICAgcFRpdGxlLmZvckVhY2godGl0bGUgPT4ge1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLnNldEN1cnJlbnRQcm9qZWN0KHRpdGxlLmlkLnNsaWNlKDUpKVxuICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLz09PT0gQ0hFQ0sgVEFTSyA9PT0vL1xuICAgICAgICBjb25zdCB0Q2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jaGVja2JveCcpXG5cbiAgICAgICAgdENoZWNrYm94LmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGNoZWNrYm94LmlkLnNsaWNlKDExKVxuXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5jaGVja1Rhc2soU3RvcmFnZS5nZXRUYXNrUGFyZW50KHRhc2tJZCksIHRhc2tJZCwgY2hlY2tib3guY2hlY2tlZClcbiAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLz09PT0gRURJVCBESUFMT0cgPT09Ly9cbiAgICBzdGF0aWMgaW5pdEVkaXREaWFsb2coKSB7ICAgIFxuICAgICAgICAvL1Rhc2tEaWFsb2cgZWw6IGFkZFRhc2s7IGFjdGlvbnM6IGFkZE5ld1Rhc2soKSwgcmVtb3ZlVGFzaygpXG4gICAgICAgIGNvbnN0IHRFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZWRpdGJ0bicpXG5cbiAgICAgICAgdEVkaXRCdG4uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGJ1dHRvbi5pZC5zbGljZSgxMClcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdFBhcmVudCA9IFN0b3JhZ2UuZ2V0VGFza1BhcmVudCh0YXNrSWQpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IFN0b3JhZ2UuZ2V0VGFza09iaih0YXNrUHJvamVjdFBhcmVudCwgdGFza0lkKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2suZ2V0VGl0bGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFzay5nZXREdWVEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrLmdldFByaW9yaXR5KClcblxuICAgICAgICAgICAgICAgIERvbS5yZW5kZXJEaWFsb2dBZGRUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1Byb2plY3RQYXJlbnQsIHRhc2tQcmlvcml0eSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2stZGlhbG9nJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFza05ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrTmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbicpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2tOZXdEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtZHVlZGF0ZScpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHknKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrUHJvalNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LXNlbGVjdC1wcm9qZWN0JylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFza1N1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLXN1Ym1pdGJ0bicpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2tDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWNsb3NlYnRuJylcbiAgICBcbiAgICAgICAgICAgICAgICBkaWFsb2dFZGl0VGFzay5zaG93TW9kYWwoKVxuXG4gICAgICAgICAgICAgICAgZGlhbG9nRWRpdFRhc2tTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayhkaWFsb2dFZGl0VGFza1Byb2pTZWxlY3QudmFsdWUsIGRpYWxvZ0VkaXRUYXNrTmV3VGl0bGUudmFsdWUsIGRpYWxvZ0VkaXRUYXNrTmV3RGVzY3JpcHRpb24udmFsdWUsIGRpYWxvZ0VkaXRUYXNrTmV3RHVlRGF0ZS52YWx1ZSwgZGlhbG9nQWRkVGFza1ByaW9yaXR5LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVRhc2sodGFza1Byb2plY3RQYXJlbnQsIHRhc2tJZCkgXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRUYXNrLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRUYXNrQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRUYXNrLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgLy9Qcm9qZWN0RGlhbG9nIGVsOiBhZGRQcm9qZWN0KCk7IGFjdGlvbjogZWRpdFByb2plY3RcbiAgICAgICAgY29uc3QgcEVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1lZGl0YnRuJylcblxuICAgICAgICBwRWRpdEJ0bi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvalRpdGxlID0gYnV0dG9uLmlkLnNsaWNlKDEwKTtcblxuICAgICAgICAgICAgICAgIERvbS5yZW5kZXJEaWFsb2dBZGRQcm9qKHByb2pUaXRsZSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otZGlhbG9nJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0UHJvak5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otaW5wdXQtdGl0bGUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRQcm9qU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otc3VibWl0YnRuJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0UHJvakNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otY2xvc2VidG4nKVxuXG4gICAgICAgICAgICAgICAgZGlhbG9nRWRpdFByb2ouc2hvd01vZGFsKClcblxuICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRQcm9qU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihkaWFsb2dFZGl0UHJvak5ld1RpdGxlLnZhbHVlLmluY2x1ZGVzKCcgJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NwYWNlIGlzIG5vdCBhbGxvd2VkIGhlcmUuIFxcblBsZWFzZSwgY2hvb3NlIGEgZGlmZmVyZW50IG5hbWUgb3IgdXNlXFwnX1xcJy4nKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuZWRpdFByb2plY3QocHJvalRpdGxlLCBkaWFsb2dFZGl0UHJvak5ld1RpdGxlLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coU3RvcmFnZS5nZXRMaXN0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dFZGl0UHJvai5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBkaWFsb2dFZGl0UHJvakNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaWFsb2dFZGl0UHJvai5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy89PT09IERJQUxPRyBERUxFVEUgPT09Ly9cbiAgICBzdGF0aWMgaW5pdERlbGV0ZURpYWxvZygpIHtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWRlbGV0ZWJ0biwgLnRhc2stZGVsZXRlYnRuJylcblxuICAgICAgICBkZWxldGVCdG4uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgRG9tLnJlbmRlckRpYWxvZ0RlbGV0ZSgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxldGUtZGlhbG9nJylcbiAgICAgICAgICAgICAgICBsZXQgZGlhbG9nRGVsZXRlU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlbGV0ZS1zdWJtaXRidG4nKVxuICAgICAgICAgICAgICAgIGxldCBkaWFsb2dEZWxldGVDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxldGUtY2xvc2VidG4nKVxuICAgICAgICAgICAgICAgIGxldCBkaWFsb2dEZWxldGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxldGUtaDInKVxuICAgICAgICAgICAgICAgIGxldCBpc1Byb2plY3QgPSBidXR0b24uaWQuc3RhcnRzV2l0aCgncCcpXG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGRpYWxvZ0RlbGV0ZS5zaG93TW9kYWwoKVxuXG4gICAgICAgICAgICAgICAgZGlhbG9nRGVsZXRlVGl0bGUuaW5uZXJUZXh0ID0gaXNQcm9qZWN0ID9cbiAgICAgICAgICAgICAgICAgICAgYERlbGV0ZSBQcm9qZWN0ICcke2J1dHRvbi5pZC5zbGljZSgxMil9Jz9gIDpcbiAgICAgICAgICAgICAgICAgICAgYERlbGV0ZSBUYXNrICcke2J1dHRvbi5pZC5zbGljZSgxMil9Jz9gXG5cbiAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGVTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzUHJvamVjdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihidXR0b24uaWQuc2xpY2UoMTIpICE9PSBMaXN0ZW5lcnMuY3VycmVudFByb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChidXR0b24uaWQuc2xpY2UoMTIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnU29ycnksIGNhbm5vdCBkZWxldGUgY3VycmVudCBwcm9qZWN0LCB5ZXQuLi5cXG5DaG9vc2UgYW5vdGhlciBwcm9qZWN0LCB0aGVuIGRlbGV0ZSB0aGlzIG9uZS4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVUYXNrKFN0b3JhZ2UuZ2V0VGFza1BhcmVudChidXR0b24uaWQuc2xpY2UoMTIpKSwgYnV0dG9uLmlkLnNsaWNlKDEyKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGUuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZGlhbG9nRGVsZXRlQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0RlbGV0ZS5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy89PT09IERJQUxPRyBBREQgTkVXIFRBU0sgPT09Ly9cbiAgICBzdGF0aWMgaW5pdE5ld1Rhc2tEaWFsb2coKSB7XG4gICAgICAgIGxldCB0QWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stYWRkYnRuJylcblxuICAgICAgICB0QWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBEb20ucmVuZGVyRGlhbG9nQWRkVGFzaygpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1kaWFsb2cnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtZGVzY3JpcHRpb24nKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1kdWVkYXRlJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5JylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tQcm9qU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtc2VsZWN0LXByb2plY3QnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza1N1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLXN1Ym1pdGJ0bicpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1jbG9zZWJ0bicpXG5cbiAgICAgICAgICAgIGRpYWxvZ0FkZFRhc2suc2hvd01vZGFsKClcblxuICAgICAgICAgICAgZGlhbG9nQWRkVGFza1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBTdG9yYWdlLmFkZFRhc2soZGlhbG9nQWRkVGFza1Byb2pTZWxlY3QudmFsdWUsIGRpYWxvZ0FkZFRhc2tUaXRsZS52YWx1ZSwgZGlhbG9nQWRkVGFza0Rlc2NyaXB0aW9uLnZhbHVlLCBkaWFsb2dBZGRUYXNrRHVlRGF0ZS52YWx1ZSwgZGlhbG9nQWRkVGFza1ByaW9yaXR5LnZhbHVlKVxuICAgICAgICAgICAgICAgIGRpYWxvZ0FkZFRhc2suY2xvc2UoKVxuICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3B1c2hlZCBzdWJtaXQgYWRkIHRhc2shICcgKyBkaWFsb2dBZGRUYXNrVGl0bGUudmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGlhbG9nQWRkVGFza0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpYWxvZ0FkZFRhc2suY2xvc2UoKVxuICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLz09PT0gRElBTE9HIEFERCBORVcgUFJPSkVDVCA9PT0vL1xuXG4gICAgc3RhdGljIGluaXROZXdQcm9qZWN0RGlhbG9nKCl7XG4gICAgICAgIGxldCBwQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otYWRkYnRuJylcblxuICAgICAgICBwQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgRG9tLnJlbmRlckRpYWxvZ0FkZFByb2ooKVxuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otZGlhbG9nJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFByb2pUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLWlucHV0LXRpdGxlJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFByb2pTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1zdWJtaXRidG4nKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkUHJvakNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otY2xvc2VidG4nKVxuXG4gICAgICAgICAgICBkaWFsb2dBZGRQcm9qLnNob3dNb2RhbCgpXG5cbiAgICAgICAgICAgIGRpYWxvZ0FkZFByb2pTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGlhbG9nQWRkUHJvalRpdGxlLnZhbHVlLmluY2x1ZGVzKCcgJykpe1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3BhY2UgaXMgbm90IGFsbG93ZWQgaGVyZS4gXFxuUGxlYXNlLCBjaG9vc2UgYSBkaWZmZXJlbnQgbmFtZSBvciB1c2VcXCdfXFwnLicpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QoZGlhbG9nQWRkUHJvalRpdGxlLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dBZGRQcm9qLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3B1c2hlZCBhZGRQcm9qICcgKyBkaWFsb2dBZGRQcm9qVGl0bGUudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRpYWxvZ0FkZFByb2pDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dBZGRQcm9qLmNsb3NlKClcbiAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgIH07XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG5cbiAgICBnZXRUYXNrKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKVxuICAgIH1cblxuICAgIGdldFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrc1xuICAgIH1cblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzaylcbiAgICB9XG5cbiAgICBzZXRUYXNrcyh0YXNrcyl7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrc1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVUYXNrKGlkKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgIT09IGlkKVxuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0KG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG5cbiAgICBzdGF0aWMgZ2V0TGlzdCgpIHtcbiAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IENvbnRhaW5lcigpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9pdF9hcHAnKSlcbiAgICAgICAgKVxuICAgICAgICBkYXRhTGlzdC5fc2V0UHJvamVjdHMoXG4gICAgICAgICAgICBkYXRhTGlzdC5fZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGRhdGFMaXN0Ll9nZXRQcm9qZWN0cygpXG4gICAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnNldFRhc2tzKFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKVxuICAgICAgICAgICAgICAgIC5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkYXRhTGlzdDtcbiAgICB9O1xuICAgICAgXG4gICAgc3RhdGljIHNhdmVMaXN0KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RvaXRfYXBwJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUYXNrUGFyZW50KHRhc2tJZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpLl9nZXRQcm9qZWN0cygpO1xuICAgIFxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHByb2plY3QuZ2V0VGFza3MoKS5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFyZW50IGZvdW5kOiAnICsgcHJvamVjdC5nZXRUaXRsZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRhc2tPYmoocHJvamVjdFRpdGxlLCB0YXNrSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gc3RvcmFnZSBnZXRUYXNrT2JqIScgKyBwcm9qZWN0VGl0bGUgKyAnLCAnICsgdGFza0lkKVxuICAgICAgIHJldHVybiBTdG9yYWdlLmdldExpc3QoKS5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmdldFRhc2sodGFza0lkKVxuICAgIH1cbiAgICBcbiAgICAvLz09Lz09Ly9cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSkpXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUxpc3QoY3VycmVudExpc3QpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUsIHRhc2tEZXNjdGlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuYWRkVGFzayhuZXcgVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjdGlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSkpXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUxpc3QoY3VycmVudExpc3QpICAgICAgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZGVsZXRlUHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUxpc3QoY3VycmVudExpc3QpICAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrSWQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmRlbGV0ZVRhc2sodGFza0lkKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdCkgXG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXRQcm9qZWN0KHByb2plY3RUaXRsZSwgbmV3VGl0bGUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmVkaXRQcm9qZWN0KG5ld1RpdGxlKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdClcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlLCBpc0NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmdldFRhc2sodGFza1RpdGxlKS5zZXRDaGVja2VkKGlzQ2hlY2tlZCk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUxpc3QoY3VycmVudExpc3QpXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pZCA9IGAkeyh0aXRsZSB8fCAnXycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpfS0ke0RhdGUubm93KCl9YFxuICAgIH07XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZV9kaXN0YW5jZUZyb20oKXtcbiAgICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlKHRoaXMuZ2V0RHVlRGF0ZSgpLCBuZXcgRGF0ZSgpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eVxuICAgIH1cblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZFxuICAgIH1cblxuICAgIHNldENoZWNrZWQoY2hlY2spIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRUaXRsZSgpICsgJyB3YXMgY2hlY2tlZCEgJyArIHRoaXMuY2hlY2tlZCArIGNoZWNrKVxuICAgIH1cblxuICAgIGlzQ2hlY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZFxuICAgIH1cblxufSIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJvdW5kID0gbWV0aG9kID8gTWF0aFttZXRob2RdIDogTWF0aC50cnVuYztcbiAgICBjb25zdCByZXN1bHQgPSByb3VuZChudW1iZXIpO1xuICAgIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICAgIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqXG4gKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBkaWZmID0gX2RhdGVMZWZ0LmdldFRpbWUoKSAtIF9kYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZUFzYztcbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHllYXJEaWZmID0gX2RhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBfZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoRGlmZiA9IF9kYXRlTGVmdC5nZXRNb250aCgpIC0gX2RhdGVSaWdodC5nZXRNb250aCgpO1xuXG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGVMZWZ0KSAtICt0b0RhdGUoZGF0ZVJpZ2h0KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHM7XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjIH0gZnJvbSBcIi4vY29tcGFyZUFzYy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMubWpzXCI7XG5pbXBvcnQgeyBpc0xhc3REYXlPZk1vbnRoIH0gZnJvbSBcIi4vaXNMYXN0RGF5T2ZNb250aC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIHVzaW5nIHRydW5jIGFzIGEgZGVmYXVsdCByb3VuZGluZyBtZXRob2QuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHNpZ24gPSBjb21wYXJlQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCk7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhcbiAgICBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpLFxuICApO1xuICBsZXQgcmVzdWx0O1xuXG4gIC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoX2RhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgX2RhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBfZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuXG4gICAgX2RhdGVMZWZ0LnNldE1vbnRoKF9kYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gICAgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gICAgbGV0IGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gLXNpZ247XG5cbiAgICAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcbiAgICBpZiAoXG4gICAgICBpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkYXRlTGVmdCkpICYmXG4gICAgICBkaWZmZXJlbmNlID09PSAxICYmXG4gICAgICBjb21wYXJlQXNjKGRhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gMVxuICAgICkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9XG5cbiAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbk1vbnRocztcbiIsImltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4vX2xpYi9nZXRSb3VuZGluZ01ldGhvZC5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJblNlY29uZHN9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnM/LnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5TZWNvbmRzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBlbmQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlbmRPZkRheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBlbmQgb2YgYSBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgbW9udGggPSBfZGF0ZS5nZXRNb250aCgpO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBfZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5kT2ZNb250aDtcbiIsImltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tIFwiLi9jb21wYXJlQXNjLm1qc1wiO1xuaW1wb3J0IHsgbWludXRlc0luRGF5LCBtaW51dGVzSW5Nb250aCB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1vbnRocyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbk1vbnRocy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJblNlY29uZHMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5TZWNvbmRzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXREaXN0YW5jZX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGVcbiAqIEBwYXJhbSBiYXNlRGF0ZSAtIFRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgbWludXRlc0luQWxtb3N0VHdvRGF5cyA9IDI1MjA7XG5cbiAgY29uc3QgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGF0ZSwgYmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgY29uc3QgbG9jYWxpemVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgIGFkZFN1ZmZpeDogb3B0aW9ucz8uYWRkU3VmZml4LFxuICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb24sXG4gIH0pO1xuXG4gIGxldCBkYXRlTGVmdDtcbiAgbGV0IGRhdGVSaWdodDtcbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoYmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoYmFzZURhdGUpO1xuICB9XG5cbiAgY29uc3Qgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIGNvbnN0IG9mZnNldEluU2Vjb25kcyA9XG4gICAgKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtXG4gICAgICBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgL1xuICAgIDEwMDA7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgbGV0IG1vbnRocztcblxuICAvLyAwIHVwIHRvIDIgbWluc1xuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucz8uaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YU2Vjb25kc1wiLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImxlc3NUaGFuWFNlY29uZHNcIiwgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YU2Vjb25kc1wiLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJoYWxmQU1pbnV0ZVwiLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImxlc3NUaGFuWE1pbnV0ZXNcIiwgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJ4TWludXRlc1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YTWludXRlc1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNaW51dGVzXCIsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNaW51dGVzXCIsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImFib3V0WEhvdXJzXCIsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBtaW51dGVzSW5EYXkpIHtcbiAgICBjb25zdCBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwiYWJvdXRYSG91cnNcIiwgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luQWxtb3N0VHdvRGF5cykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJ4RGF5c1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luTW9udGgpIHtcbiAgICBjb25zdCBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gbWludXRlc0luRGF5KTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwieERheXNcIiwgZGF5cywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luTW9udGggKiAyKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gbWludXRlc0luTW9udGgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJhYm91dFhNb250aHNcIiwgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuXG4gIC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICBjb25zdCBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBtaW51dGVzSW5Nb250aCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNb250aHNcIiwgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIGNvbnN0IHllYXJzID0gTWF0aC50cnVuYyhtb250aHMgLyAxMik7XG5cbiAgICAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJhYm91dFhZZWFyc1wiLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgICAgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcIm92ZXJYWWVhcnNcIiwgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAgIC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwiYWxtb3N0WFllYXJzXCIsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTtcbiIsImltcG9ydCB7IGVuZE9mRGF5IH0gZnJvbSBcIi4vZW5kT2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBlbmRPZk1vbnRoIH0gZnJvbSBcIi4vZW5kT2ZNb250aC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gK2VuZE9mRGF5KF9kYXRlKSA9PT0gK2VuZE9mTW9udGgoX2RhdGUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzTGFzdERheU9mTW9udGg7XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgY29uc3QgbWF0Y2hQYXR0ZXJuID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VQYXR0ZXJucyA9XG4gICAgICAod2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcblxuICAgIGNvbnN0IGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucylcbiAgICAgID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpXG4gICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvbG9jYWxpemUubWpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2gubWpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59O1xuIiwiY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSZWxhdGl2ZSA9ICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpID0+XG4gIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvU3RvcmFnZVwiO1xuaW1wb3J0IExpc3RlbmVycyBmcm9tIFwiLi9tb2R1bGVzL0xpc3RlbmVyc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5jb25zdCBkZW1vSW5pdCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIFN0b3JhZ2UuYWRkUHJvamVjdCgnZGVmYXVsdCcpXG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KCdTaG9wJylcbiAgICBTdG9yYWdlLmFkZFByb2plY3QoJ1dvcmsnKVxuXG4gICAgU3RvcmFnZS5hZGRUYXNrKCdkZWZhdWx0JywgJ0NsZWFuIHJvb20nLCAnT3JnYW5pemUgY2xvdGhlcyBhbmQgZnVybml0dXJlLicsICcyMDIzLTAzLTEyJywgJzEnKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnU2hvcCcsICdCdXkgZ3JvY2VyaWVzJywgJ0dldCBicmVhZCwgbWlsaywgZWdncywgYW5kIHZlZ2V0YWJsZXMuJywgJzIwMjMtMDMtMTUnLCAnMicpXG4gICAgU3RvcmFnZS5hZGRUYXNrKCdkZWZhdWx0JywgJ1dhbGsgZG9nJywgJ1Rha2UgQ2hhcmxpZSB0byB0aGUgcGFyayBmb3IgZXhlcmNpc2UuJywgJzIwMjMtMDMtMTcnLCAnMCcpXG4gICAgU3RvcmFnZS5hZGRUYXNrKCdXb3JrJywgJ1N0dWR5IG1hdGgnLCAnUmV2aWV3IGNoYXB0ZXIgNSBvbiBsaW5lYXIgZXF1YXRpb25zLicsICcyMDIzLTAzLTIwJywgJzEnKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnV29yaycsICdFbWFpbCB0ZWFtJywgJ1NlbmQgd2Vla2x5IHJlcG9ydCBhbmQgc2NoZWR1bGUgbWVldGluZy4nLCAnMjAyMy0wMy0yMicsICcyJylcbiAgICBcbiAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgIC8vU3RvcmFnZS5kZWxldGVQcm9qZWN0KCdTaG9wJylcbiAgICAvL1N0b3JhZ2UuZGVsZXRlVGFzaygnV29yaycsJ0VtYWlsIHRlYW0nKVxufVxuXG5jb25zdCByZXNldCA9ICgpID0+IGxvY2FsU3RvcmFnZS5jbGVhcigpXG5cblxuaWYoIVN0b3JhZ2UuZ2V0TGlzdCgpKXtcbiAgICBkZW1vSW5pdCgpXG4gICAgY29uc29sZS5sb2coJ3J1biBkZW1vIGRhdGEhJylcbn1cblxuTGlzdGVuZXJzLmxvYWRQYWdlKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9