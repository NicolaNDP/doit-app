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

  min-width: max-content;
  max-width: 20rem;
  margin-right: 1rem;
  width: 20%;
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

}*/`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-family:'Courier New', Courier, monospace;\n  font-size: 14px;\n\n  --bgColor1: rgb(78, 115, 104);\n  --bgColor2: rgb(48, 79, 70);\n  --bgColor3: rgb(37, 60, 53);\n}\n\nbody {\n  box-sizing: border-box;\n  background-color: var(--bgColor1);\n  display: flex;\n  flex-direction: column;\n  min-width: fit-content;\n  cursor: default;\n}\n\n#app {\n  display: flex;\n  flex-direction: row;\n}\n/* ===== HEADER =====  */\n\n#header-div {\n  font-style: oblique;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  background-color: var(--bgColor2);\n  padding: 0.9rem;\n  \n  max-height: fit-content;\n}\n\n#header-logo {\n  width: 2rem;\n  height: 2rem;\n  margin-left: 1rem;\n  opacity: 0.5;\n}\n\n#header-title {\n  display: flex;\n  margin: 0 0 0 0;\n}\n\n#header-subtitle {\n  margin: 0 0 0 0;\n}\n\n/* ===== PROJECTS =====  */\n#panel {\n  display: flex;\n  flex-direction: column;\n\n  min-width: max-content;\n  max-width: 20rem;\n  margin-right: 1rem;\n  width: 20%;\n  border-right: solid var(--bgColor2) 0.5rem;\n  border-bottom: solid var(--bgColor2) 0.1rem;\n  border-bottom-right-radius: 0.4rem;\n}\n\n#panel > .proj-div {\n  display: inline-flex;\n  justify-content: space-between;\n  margin: 0.5rem 0.2rem 0 0;\n}\n\n.proj-t2 {\n  width: 80%;\n}\n\n.proj-rightsubdiv > .proj-editbtn {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-left: 0.5rem;\n  opacity: 0.4;\n}\n\n.proj-rightsubdiv > .proj-deletebtn {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-left: 0.5rem;\n  opacity: 0.4;\n}\n\n/* ===== TASKS =====  */\n\n#content {\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: 100%;\n}\n\n#title-currentproject {\n  font-size: 2rem;\n}\n\n.task-div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width:max-content;\n  height: 2rem;\n\n  margin: 0.5rem 0 0.5rem 0;\n\n  border-bottom: solid var(--bgColor3) 0.5rem;\n  border-bottom-left-radius: 0.4rem;\n}\n\n.task-t3{\n  width: max-content;\n}\n\n.task-date {\n  margin: 0;\n  font-size: 0.6rem;\n}\n\n.task-priority {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n.task-rightsubdiv, .task-leftsubdiv, .task-date {\n  min-width: fit-content;\n}\n\n.task-rightsubdir {\n  margin-left: 0;\n}\n\n.task-editbtn {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-left: 0.1rem;\n  opacity: 0.4;\n}\n\n.task-deletebtn {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-left: 0.1rem;\n  opacity: 0.4;\n}\n\n.task-rightsubdir, .proj-rightsubdir {\n  opacity:var(--bgColor2);\n}\n\n\n/* ===== DIALOG PROJECT =====  */\n#modal-addproj-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 5px;\n  padding: 1rem;\n\n  width: fit-content;\n}\n\n#modal-addproj-headersubdiv {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  align-items:center;\n  text-align: right;\n  min-width: fit-content;\n  margin-bottom: 1.5rem;\n}\n\n#modal-addproj-headersubdiv > #modal-addproj-closebtn {\n  height: 2rem;\n  width: 2rem;\n  margin: 0;\n\n}\n\n#modal-addproj-headersubdiv >  #modal-addproj-h2{\n  height: 2rem;\n  width: 100%;\n  margin: 0 0 0 1.5rem\n\n}\n\n#modal-addproj-input-title {\n  margin-bottom: 1.5rem;\n}\n\n\n/* ===== DIALOG TASKS =====  */\n\n#modal-addtask-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 5px;\n  padding: 1rem;\n\n  width: fit-content;\n}\n\n#modal-addtask-headersubdiv {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  text-align: right;\n  align-items:center;\n\n  margin-bottom: 1.5rem;\n}\n\n#modal-addtask-closebtn {\n  height: 2rem;\n  width: 2rem;\n  margin: 0;\n\n}\n\n#modal-addtask-h2{\n  height: 2rem;\n  width: 100%;\n  margin: 0 0 0 1.5rem\n}\n\n#modal-addtask-input-title {\n  margin-bottom: 1rem;\n}\n\n#modal-addtask-input-description {\n  margin-bottom: 1rem;\n}\n\n#modal-addtask-input-duedate {\n  margin-bottom: 1rem;\n}\n\n#modal-addtask-input-duedate{\n  justify-content: center;\n}\n\n#modal-addtask-selectorssubdiv {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n#modal-addtask-input-priority{\n  width: 40%;\n}\n\n#modal-addtask-input-select-project{\n  width: 40%;\n}\n\n/* =====  DIALOG DELETE =====  */\n\n#modal-delete-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 5px;\n  padding: 1rem;\n  width: fit-content;\n  width: 40%;\n}\n\n#modal-delete-closebtn{\n  height: 2rem;\n  width: 2rem;\n  margin: 0;\n}\n\n/* ===== HOVER =====  */\n\n.proj-div, .task-checkbox, .task-editbtn, .task-deletebtn {\n  cursor: pointer;\n}\n\n#proj-addbtn, #task-addbtn {\n  cursor: pointer;\n}\n\n\n/* ===== ROWS =====  */\n\n.proj-rightsubdiv, .task-rightsubdiv, .task-leftsubdiv {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: max-content;\n  margin: 0;\n}\n\n.task-leftsubdiv {\nwidth: 40%;\njustify-content: flex-start;\n}\n\n.task-rightsubdiv {\nwidth: 20%;\njustify-content: flex-end;\n}\n\n.task-date {\nwidth: 40%;\njustify-content: center;\n}\n\n\n#proj-addbtn {\n  width: 2rem;\n  height: 2rem;\n\n}\n\n#task-addbtn {\n  width: 2rem;\n  height: 2rem;\n  \n}\n\n\n/*\nbody {\nfont-family: Arial, sans-serif;\nbackground-color: #f4f4f4;\nmargin: 0;\npadding: 0;\ndisplay: flex;\nflex-direction: row;\n}\n\n#panel {\nbackground-color: #fff;\nborder-radius: 5px;\nbox-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\npadding: 20px;\nmargin-right: 20px;\ndisplay: flex;\nflex-direction: column;\n}\n\n#content {\nflex: 1;\npadding: 20px;\n}\n\n.proj-div,\n.task-div {\ndisplay: flex;\nalign-items: center;\nmargin-bottom: 10px;\n}\n\n.task-checkbox {\nmargin-right: 10px;\n}\n\n.proj-editbtn,\n.proj-deletebtn,\n.task-editbtn,\n.task-deletebtn {\nmargin-left: 10px;\n}\n\n.dialog {\nbackground-color: #fff;\nborder-radius: 5px;\nbox-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\npadding: 20px;\nposition: fixed;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nz-index: 9999;\ndisplay: none;\nwidth: 300px;\n}\n\n.modal-header {\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nmargin-bottom: 10px;\n}\n\n.modal-title {\nfont-size: 20px;\ncolor: #333;\n}\n\n.modal-close {\nbackground-color: #ddd;\ncolor: #333;\nborder: none;\npadding: 5px 10px;\nborder-radius: 3px;\ncursor: pointer;\n}\n\n.modal-close:hover {\nbackground-color: #ccc;\n}\n\n.modal-content {\nmargin-bottom: 10px;\n}\n\n.modal-input {\nwidth: 100%;\npadding: 8px;\nmargin-bottom: 10px;\nborder: 1px solid #ccc;\nborder-radius: 3px;\n}\n\n.modal-submit {\nbackground-color: #4CAF50;\ncolor: white;\nborder: none;\npadding: 10px 20px;\ntext-align: center;\ntext-decoration: none;\ndisplay: inline-block;\nfont-size: 16px;\nborder-radius: 5px;\ncursor: pointer;\n}\n\n.modal-submit:hover {\nbackground-color: #45a049;\n}\n\n}*/"],"sourceRoot":""}]);
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

    static currentProject =  '' // || for  initialization
    
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
            JSON.parse(localStorage.getItem('doit_todo_app_folder'))
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
        localStorage.setItem('doit_todo_app_folder', JSON.stringify(data));
        console.log('data saved to l store! ' + JSON.stringify(data))
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
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject('default')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject('Shop')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject('Work')

    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('default', 'Clean room', 'Organize clothes and furniture.', '2023-03-12', '1')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('Shop', 'Buy groceries', 'Get bread, milk, eggs, and vegetables.', '2023-03-15', '2')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('default', 'Walk dog', 'Take Charlie to the park for exercise.', '2023-03-17', '0')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('Work', 'Study math', 'Review chapter 5 on linear equations.', '2023-03-20', '1')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask('Work', 'Email team', 'Send weekly report and schedule meeting.', '2023-03-22', '2')

    _modules_Listeners__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(_modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getList()._getProjects()[0].getTitle())
    
    _modules_Listeners__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage()
    //Storage.deleteProject('Shop')
    //Storage.deleteTask('Work','Email team')
}

const initReset = () => localStorage.clear()
const isData = localStorage.getItem('doit_todo_app_folder')

const initApp = () => {
    if(!isData){
        demoInit()
        console.log('new demo data created!')
    }else{
        console.log(isData)
        _modules_Listeners__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(_modules_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getList()._getProjects()[0].getTitle())
        _modules_Listeners__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage()
        console.log('data preloded!')
    }
}
initReset()
initApp()

//Listeners.loadPage()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxTQUFTLGdGQUFnRixZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsUUFBUSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLG1IQUFtSCxpQ0FBaUMsa0RBQWtELG9CQUFvQixvQ0FBb0MsZ0NBQWdDLGdDQUFnQyxHQUFHLFVBQVUsMkJBQTJCLHNDQUFzQyxrQkFBa0IsMkJBQTJCLDJCQUEyQixvQkFBb0IsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0IsR0FBRyw0Q0FBNEMsd0JBQXdCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3Qix3Q0FBd0Msb0JBQW9CLGdDQUFnQyxHQUFHLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHNCQUFzQixpQkFBaUIsR0FBRyxtQkFBbUIsa0JBQWtCLG9CQUFvQixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyx5Q0FBeUMsa0JBQWtCLDJCQUEyQiw2QkFBNkIscUJBQXFCLHVCQUF1QixlQUFlLCtDQUErQyxnREFBZ0QsdUNBQXVDLEdBQUcsd0JBQXdCLHlCQUF5QixtQ0FBbUMsOEJBQThCLEdBQUcsY0FBYyxlQUFlLEdBQUcsdUNBQXVDLG1CQUFtQixrQkFBa0Isd0JBQXdCLGlCQUFpQixHQUFHLHlDQUF5QyxtQkFBbUIsa0JBQWtCLHdCQUF3QixpQkFBaUIsR0FBRywwQ0FBMEMsZ0JBQWdCLHlCQUF5QixjQUFjLGVBQWUsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLG1DQUFtQywwQkFBMEIsaUJBQWlCLGdDQUFnQyxrREFBa0Qsc0NBQXNDLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxnQkFBZ0IsY0FBYyxzQkFBc0IsR0FBRyxvQkFBb0IsbUJBQW1CLGtCQUFrQixHQUFHLHFEQUFxRCwyQkFBMkIsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsbUJBQW1CLG1CQUFtQixrQkFBa0Isd0JBQXdCLGlCQUFpQixHQUFHLHFCQUFxQixtQkFBbUIsa0JBQWtCLHdCQUF3QixpQkFBaUIsR0FBRywwQ0FBMEMsNEJBQTRCLEdBQUcsZ0VBQWdFLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHVCQUF1QixrQkFBa0IseUJBQXlCLEdBQUcsaUNBQWlDLGtCQUFrQix3QkFBd0IsZ0JBQWdCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLDJCQUEyQiwwQkFBMEIsR0FBRywyREFBMkQsaUJBQWlCLGdCQUFnQixjQUFjLEtBQUsscURBQXFELGlCQUFpQixnQkFBZ0IsNkJBQTZCLGdDQUFnQywwQkFBMEIsR0FBRyxnRUFBZ0Usa0JBQWtCLDJCQUEyQixrQ0FBa0MsdUJBQXVCLGtCQUFrQix5QkFBeUIsR0FBRyxpQ0FBaUMsa0JBQWtCLHdCQUF3QixnQkFBZ0IsbUNBQW1DLHNCQUFzQix1QkFBdUIsNEJBQTRCLEdBQUcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsY0FBYyxLQUFLLHNCQUFzQixpQkFBaUIsZ0JBQWdCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRyxpQ0FBaUMsNEJBQTRCLEdBQUcsb0NBQW9DLGtCQUFrQixtQ0FBbUMsMEJBQTBCLEdBQUcsa0NBQWtDLGVBQWUsR0FBRyx3Q0FBd0MsZUFBZSxHQUFHLCtEQUErRCxrQkFBa0IsMkJBQTJCLGtDQUFrQyx1QkFBdUIsa0JBQWtCLHVCQUF1QixlQUFlLEdBQUcsMkJBQTJCLGlCQUFpQixnQkFBZ0IsY0FBYyxHQUFHLDJGQUEyRixvQkFBb0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLEdBQUcseUZBQXlGLGtCQUFrQix3QkFBd0Isd0JBQXdCLDJCQUEyQixjQUFjLEdBQUcsc0JBQXNCLGFBQWEsOEJBQThCLEdBQUcsdUJBQXVCLGFBQWEsNEJBQTRCLEdBQUcsZ0JBQWdCLGFBQWEsMEJBQTBCLEdBQUcsb0JBQW9CLGdCQUFnQixpQkFBaUIsS0FBSyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixPQUFPLGdCQUFnQixpQ0FBaUMsNEJBQTRCLFlBQVksYUFBYSxnQkFBZ0Isc0JBQXNCLEdBQUcsWUFBWSx5QkFBeUIscUJBQXFCLHlDQUF5QyxnQkFBZ0IscUJBQXFCLGdCQUFnQix5QkFBeUIsR0FBRyxjQUFjLFVBQVUsZ0JBQWdCLEdBQUcsMkJBQTJCLGdCQUFnQixzQkFBc0Isc0JBQXNCLEdBQUcsb0JBQW9CLHFCQUFxQixHQUFHLHVFQUF1RSxvQkFBb0IsR0FBRyxhQUFhLHlCQUF5QixxQkFBcUIsMENBQTBDLGdCQUFnQixrQkFBa0IsV0FBVyxZQUFZLG1DQUFtQyxnQkFBZ0IsZ0JBQWdCLGVBQWUsR0FBRyxtQkFBbUIsZ0JBQWdCLGlDQUFpQyxzQkFBc0Isc0JBQXNCLEdBQUcsa0JBQWtCLGtCQUFrQixjQUFjLEdBQUcsa0JBQWtCLHlCQUF5QixjQUFjLGVBQWUsb0JBQW9CLHFCQUFxQixrQkFBa0IsR0FBRyx3QkFBd0IseUJBQXlCLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLGtCQUFrQixjQUFjLGVBQWUsc0JBQXNCLHlCQUF5QixxQkFBcUIsR0FBRyxtQkFBbUIsNEJBQTRCLGVBQWUsZUFBZSxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLHFCQUFxQixrQkFBa0IsR0FBRyx5QkFBeUIsNEJBQTRCLEdBQUcsS0FBSyxxQkFBcUI7QUFDLzVTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbmMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCb0M7QUFDSjs7QUFFa0I7QUFDTjtBQUNFO0FBQ0Y7QUFDRTtBQUNZO0FBQ0M7QUFDRjs7O0FBR3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsa0RBQVE7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSEFBbUgsa0RBQVM7O0FBRTVIO0FBQ0E7O0FBRUEseURBQXlELGFBQWE7O0FBRXRFLHdFQUF3RSxLQUFLOztBQUU3RSxzRUFBc0UsYUFBYTtBQUNuRjs7QUFFQSwwREFBMEQsS0FBSzs7QUFFL0QsMkRBQTJELEtBQUs7O0FBRWhFLG9FQUFvRSxLQUFLO0FBQ3pFO0FBQ0EsZ0VBQWdFLHVEQUFlLEdBQUcsdURBQWdCO0FBQ2xHLGlCQUFpQjtBQUNqQixtQ0FBbUMsdURBQWM7QUFDakQ7QUFDQTs7QUFFQSwwRUFBMEUsYUFBYTtBQUN2Rjs7QUFFQSxrRUFBa0UsYUFBYTtBQUMvRSw4QkFBOEIsa0RBQVE7O0FBRXRDLHVFQUF1RSxhQUFhO0FBQ3BGLGdDQUFnQyxvREFBVTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0EseURBQXlELEtBQUs7O0FBRTlELDBFQUEwRSxLQUFLO0FBQy9FO0FBQ0E7QUFDQSxpRUFBaUUsS0FBSztBQUN0RSw4QkFBOEIsa0RBQVE7O0FBRXRDLHNFQUFzRSxLQUFLO0FBQzNFLGdDQUFnQyxvREFBVTtBQUMxQyxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixpREFBTzs7QUFFcEM7QUFDQSw2QkFBNkIsaURBQU87QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixpREFBTztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQixpREFBTzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxnREFBTztBQUNuQjtBQUNBLHFHQUFxRyxtQkFBbUI7QUFDeEg7QUFDQTtBQUNBLGlCQUFpQix3REFBd0Qsa0RBQVM7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQixpREFBTzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTm9CO0FBQ1o7QUFDUTs7QUFFaEI7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnREFBTztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNENBQUc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLE9BQU87QUFDdEY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLCtFQUErRSxPQUFPO0FBQ3RGO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsU0FBUztBQUN4RjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsK0VBQStFLFNBQVM7QUFDeEY7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGdEQUFPLFdBQVcsZ0RBQU87QUFDekM7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdEQUFPO0FBQ2pELDZCQUE2QixnREFBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsNENBQUc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdEQUFPO0FBQzNCLG9CQUFvQixnREFBTztBQUMzQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsNENBQUc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQix3QkFBd0IsZ0RBQU87QUFDL0Isb0NBQW9DLGdEQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0IsNENBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDLG9CQUFvQjtBQUMzRCxvQ0FBb0Msb0JBQW9COztBQUV4RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQU87QUFDbkMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsd0JBQXdCLGdEQUFPLFlBQVksZ0RBQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxZQUFZLDRDQUFHOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsZ0RBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSw0Q0FBRzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsb0JBQW9CLGdEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3UWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ29DO0FBQ1Y7QUFDTTs7QUFFakI7O0FBRWY7QUFDQTtBQUNBLGdCQUFnQixrREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnREFBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNkNBQUk7QUFDckQ7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0RBQU87QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELDZDQUFJO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkYyRDs7QUFFNUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQWtELEdBQUcsV0FBVztBQUNyRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsd0RBQWMsa0NBQWtDLGlCQUFpQjtBQUNoRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1B1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLG1EQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG9CQUFvQixtREFBTTtBQUMxQixxQkFBcUIsbURBQU07O0FBRTNCOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw4QkFBOEI7QUFDOUIsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7QUNWaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBLE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdB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REFBUyxtQkFBbUIsd0RBQU87QUFDdkM7QUFDQSxJQUFJLDBEQUFTO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLDBEQUFTLG1CQUFtQix3REFBTztBQUMzQyxRQUFRLDBEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFJvdW5kaW5nTWV0aG9kLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbXBhcmVBc2MubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluTW9udGhzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5TZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kT2ZNb250aC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzTGFzdERheU9mTW9udGgubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIC0tYmdDb2xvcjE6IHJnYig3OCwgMTE1LCAxMDQpO1xuICAtLWJnQ29sb3IyOiByZ2IoNDgsIDc5LCA3MCk7XG4gIC0tYmdDb2xvcjM6IHJnYigzNywgNjAsIDUzKTtcbn1cblxuYm9keSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4jYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi8qID09PT09IEhFQURFUiA9PT09PSAgKi9cblxuI2hlYWRlci1kaXYge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xuICBwYWRkaW5nOiAwLjlyZW07XG4gIFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuI2hlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuI2hlYWRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuI2hlYWRlci1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuLyogPT09PT0gUFJPSkVDVFMgPT09PT0gICovXG4jcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMjByZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB2YXIoLS1iZ0NvbG9yMikgMC41cmVtO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1iZ0NvbG9yMikgMC4xcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40cmVtO1xufVxuXG4jcGFuZWwgPiAucHJvai1kaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAuNXJlbSAwLjJyZW0gMCAwO1xufVxuXG4ucHJvai10MiB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5wcm9qLXJpZ2h0c3ViZGl2ID4gLnByb2otZWRpdGJ0biB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5wcm9qLXJpZ2h0c3ViZGl2ID4gLnByb2otZGVsZXRlYnRuIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLyogPT09PT0gVEFTS1MgPT09PT0gICovXG5cbiNjb250ZW50IHtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG59XG5cbiN0aXRsZS1jdXJyZW50cHJvamVjdCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhc2stZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4td2lkdGg6bWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogMnJlbTtcblxuICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xuXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWJnQ29sb3IzKSAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNHJlbTtcbn1cblxuLnRhc2stdDN7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnRhc2stZGF0ZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi50YXNrLXByaW9yaXR5IHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG59XG5cbi50YXNrLXJpZ2h0c3ViZGl2LCAudGFzay1sZWZ0c3ViZGl2LCAudGFzay1kYXRlIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnRhc2stcmlnaHRzdWJkaXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnRhc2stZWRpdGJ0biB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi50YXNrLWRlbGV0ZWJ0biB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi50YXNrLXJpZ2h0c3ViZGlyLCAucHJvai1yaWdodHN1YmRpciB7XG4gIG9wYWNpdHk6dmFyKC0tYmdDb2xvcjIpO1xufVxuXG5cbi8qID09PT09IERJQUxPRyBQUk9KRUNUID09PT09ICAqL1xuI21vZGFsLWFkZHByb2otZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbiNtb2RhbC1hZGRwcm9qLWhlYWRlcnN1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuI21vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2ID4gI21vZGFsLWFkZHByb2otY2xvc2VidG4ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBtYXJnaW46IDA7XG5cbn1cblxuI21vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2ID4gICNtb2RhbC1hZGRwcm9qLWgye1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDEuNXJlbVxuXG59XG5cbiNtb2RhbC1hZGRwcm9qLWlucHV0LXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG5cbi8qID09PT09IERJQUxPRyBUQVNLUyA9PT09PSAgKi9cblxuI21vZGFsLWFkZHRhc2stZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbiNtb2RhbC1hZGR0YXNrLWhlYWRlcnN1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG5cbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4jbW9kYWwtYWRkdGFzay1jbG9zZWJ0biB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIG1hcmdpbjogMDtcblxufVxuXG4jbW9kYWwtYWRkdGFzay1oMntcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMCAxLjVyZW1cbn1cblxuI21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1kdWVkYXRle1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI21vZGFsLWFkZHRhc2stc2VsZWN0b3Jzc3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbiNtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5e1xuICB3aWR0aDogNDAlO1xufVxuXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1zZWxlY3QtcHJvamVjdHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLyogPT09PT0gIERJQUxPRyBERUxFVEUgPT09PT0gICovXG5cbiNtb2RhbC1kZWxldGUtZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB3aWR0aDogNDAlO1xufVxuXG4jbW9kYWwtZGVsZXRlLWNsb3NlYnRue1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi8qID09PT09IEhPVkVSID09PT09ICAqL1xuXG4ucHJvai1kaXYsIC50YXNrLWNoZWNrYm94LCAudGFzay1lZGl0YnRuLCAudGFzay1kZWxldGVidG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwcm9qLWFkZGJ0biwgI3Rhc2stYWRkYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qID09PT09IFJPV1MgPT09PT0gICovXG5cbi5wcm9qLXJpZ2h0c3ViZGl2LCAudGFzay1yaWdodHN1YmRpdiwgLnRhc2stbGVmdHN1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRhc2stbGVmdHN1YmRpdiB7XG53aWR0aDogNDAlO1xuanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udGFzay1yaWdodHN1YmRpdiB7XG53aWR0aDogMjAlO1xuanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRhc2stZGF0ZSB7XG53aWR0aDogNDAlO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuI3Byb2otYWRkYnRuIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcblxufVxuXG4jdGFzay1hZGRidG4ge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBcbn1cblxuXG4vKlxuYm9keSB7XG5mb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xubWFyZ2luOiAwO1xucGFkZGluZzogMDtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jcGFuZWwge1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xucGFkZGluZzogMjBweDtcbm1hcmdpbi1yaWdodDogMjBweDtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY29udGVudCB7XG5mbGV4OiAxO1xucGFkZGluZzogMjBweDtcbn1cblxuLnByb2otZGl2LFxuLnRhc2stZGl2IHtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xubWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhc2stY2hlY2tib3gge1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvai1lZGl0YnRuLFxuLnByb2otZGVsZXRlYnRuLFxuLnRhc2stZWRpdGJ0bixcbi50YXNrLWRlbGV0ZWJ0biB7XG5tYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRpYWxvZyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xucGFkZGluZzogMjBweDtcbnBvc2l0aW9uOiBmaXhlZDtcbnRvcDogNTAlO1xubGVmdDogNTAlO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG56LWluZGV4OiA5OTk5O1xuZGlzcGxheTogbm9uZTtcbndpZHRoOiAzMDBweDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbm1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tb2RhbC10aXRsZSB7XG5mb250LXNpemU6IDIwcHg7XG5jb2xvcjogIzMzMztcbn1cblxuLm1vZGFsLWNsb3NlIHtcbmJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG5jb2xvcjogIzMzMztcbmJvcmRlcjogbm9uZTtcbnBhZGRpbmc6IDVweCAxMHB4O1xuYm9yZGVyLXJhZGl1czogM3B4O1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtY2xvc2U6aG92ZXIge1xuYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xubWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLWlucHV0IHtcbndpZHRoOiAxMDAlO1xucGFkZGluZzogOHB4O1xubWFyZ2luLWJvdHRvbTogMTBweDtcbmJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5ib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5tb2RhbC1zdWJtaXQge1xuYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbmNvbG9yOiB3aGl0ZTtcbmJvcmRlcjogbm9uZTtcbnBhZGRpbmc6IDEwcHggMjBweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmZvbnQtc2l6ZTogMTZweDtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLXN1Ym1pdDpob3ZlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG59Ki9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2Q0FB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O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFHQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtBQUNBLFVBQVU7QUFDViwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxVQUFVO0FBQ1YseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0EsVUFBVTtBQUNWLHVCQUF1QjtBQUN2Qjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztBQUVkOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0dFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG5cXG4gIC0tYmdDb2xvcjE6IHJnYig3OCwgMTE1LCAxMDQpO1xcbiAgLS1iZ0NvbG9yMjogcmdiKDQ4LCA3OSwgNzApO1xcbiAgLS1iZ0NvbG9yMzogcmdiKDM3LCA2MCwgNTMpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNhcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi8qID09PT09IEhFQURFUiA9PT09PSAgKi9cXG5cXG4jaGVhZGVyLWRpdiB7XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbiAgcGFkZGluZzogMC45cmVtO1xcbiAgXFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI2hlYWRlci1sb2dvIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNoZWFkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCAwIDAgMDtcXG59XFxuXFxuI2hlYWRlci1zdWJ0aXRsZSB7XFxuICBtYXJnaW46IDAgMCAwIDA7XFxufVxcblxcbi8qID09PT09IFBST0pFQ1RTID09PT09ICAqL1xcbiNwYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IDIwcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJvcmRlci1yaWdodDogc29saWQgdmFyKC0tYmdDb2xvcjIpIDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWJnQ29sb3IyKSAwLjFyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4jcGFuZWwgPiAucHJvai1kaXYge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAuNXJlbSAwLjJyZW0gMCAwO1xcbn1cXG5cXG4ucHJvai10MiB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucHJvai1yaWdodHN1YmRpdiA+IC5wcm9qLWVkaXRidG4ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLnByb2otcmlnaHRzdWJkaXYgPiAucHJvai1kZWxldGVidG4ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLyogPT09PT0gVEFTS1MgPT09PT0gICovXFxuXFxuI2NvbnRlbnQge1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiN0aXRsZS1jdXJyZW50cHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50YXNrLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi13aWR0aDptYXgtY29udGVudDtcXG4gIGhlaWdodDogMnJlbTtcXG5cXG4gIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7XFxuXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1iZ0NvbG9yMykgMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4udGFzay10M3tcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4udGFzay1yaWdodHN1YmRpdiwgLnRhc2stbGVmdHN1YmRpdiwgLnRhc2stZGF0ZSB7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4udGFzay1yaWdodHN1YmRpciB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLnRhc2stZWRpdGJ0biB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4udGFzay1kZWxldGVidG4ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLnRhc2stcmlnaHRzdWJkaXIsIC5wcm9qLXJpZ2h0c3ViZGlyIHtcXG4gIG9wYWNpdHk6dmFyKC0tYmdDb2xvcjIpO1xcbn1cXG5cXG5cXG4vKiA9PT09PSBESUFMT0cgUFJPSkVDVCA9PT09PSAgKi9cXG4jbW9kYWwtYWRkcHJvai1kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNtb2RhbC1hZGRwcm9qLWhlYWRlcnN1YmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkcHJvai1oZWFkZXJzdWJkaXYgPiAjbW9kYWwtYWRkcHJvai1jbG9zZWJ0biB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIG1hcmdpbjogMDtcXG5cXG59XFxuXFxuI21vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2ID4gICNtb2RhbC1hZGRwcm9qLWgye1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgMCAwIDEuNXJlbVxcblxcbn1cXG5cXG4jbW9kYWwtYWRkcHJvai1pbnB1dC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcblxcbi8qID09PT09IERJQUxPRyBUQVNLUyA9PT09PSAgKi9cXG5cXG4jbW9kYWwtYWRkdGFzay1kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWhlYWRlcnN1YmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuXFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWNsb3NlYnRuIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1oMntcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIDAgMCAxLjVyZW1cXG59XFxuXFxuI21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI21vZGFsLWFkZHRhc2staW5wdXQtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI21vZGFsLWFkZHRhc2staW5wdXQtZHVlZGF0ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1kdWVkYXRle1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLXNlbGVjdG9yc3N1YmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eXtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWlucHV0LXNlbGVjdC1wcm9qZWN0e1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLyogPT09PT0gIERJQUxPRyBERUxFVEUgPT09PT0gICovXFxuXFxuI21vZGFsLWRlbGV0ZS1kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4jbW9kYWwtZGVsZXRlLWNsb3NlYnRue1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qID09PT09IEhPVkVSID09PT09ICAqL1xcblxcbi5wcm9qLWRpdiwgLnRhc2stY2hlY2tib3gsIC50YXNrLWVkaXRidG4sIC50YXNrLWRlbGV0ZWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qLWFkZGJ0biwgI3Rhc2stYWRkYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogPT09PT0gUk9XUyA9PT09PSAgKi9cXG5cXG4ucHJvai1yaWdodHN1YmRpdiwgLnRhc2stcmlnaHRzdWJkaXYsIC50YXNrLWxlZnRzdWJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stbGVmdHN1YmRpdiB7XFxud2lkdGg6IDQwJTtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLXJpZ2h0c3ViZGl2IHtcXG53aWR0aDogMjAlO1xcbmp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbndpZHRoOiA0MCU7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbiNwcm9qLWFkZGJ0biB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG5cXG59XFxuXFxuI3Rhc2stYWRkYnRuIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgXFxufVxcblxcblxcbi8qXFxuYm9keSB7XFxuZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbmJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jcGFuZWwge1xcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbnBhZGRpbmc6IDIwcHg7XFxubWFyZ2luLXJpZ2h0OiAyMHB4O1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbmZsZXg6IDE7XFxucGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2otZGl2LFxcbi50YXNrLWRpdiB7XFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcm9qLWVkaXRidG4sXFxuLnByb2otZGVsZXRlYnRuLFxcbi50YXNrLWVkaXRidG4sXFxuLnRhc2stZGVsZXRlYnRuIHtcXG5tYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRpYWxvZyB7XFxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbnBhZGRpbmc6IDIwcHg7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogNTAlO1xcbmxlZnQ6IDUwJTtcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG56LWluZGV4OiA5OTk5O1xcbmRpc3BsYXk6IG5vbmU7XFxud2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuZm9udC1zaXplOiAyMHB4O1xcbmNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2Uge1xcbmJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuY29sb3I6ICMzMzM7XFxuYm9yZGVyOiBub25lO1xcbnBhZGRpbmc6IDVweCAxMHB4O1xcbmJvcmRlci1yYWRpdXM6IDNweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1jbG9zZTpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RhbC1pbnB1dCB7XFxud2lkdGg6IDEwMCU7XFxucGFkZGluZzogOHB4O1xcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxuYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG5ib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5tb2RhbC1zdWJtaXQge1xcbmJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuY29sb3I6IHdoaXRlO1xcbmJvcmRlcjogbm9uZTtcXG5wYWRkaW5nOiAxMHB4IDIwcHg7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuZm9udC1zaXplOiAxNnB4O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1zdWJtaXQ6aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XFxufVxcblxcbn0qL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cbiAgICB9XG5cbiAgICBfc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gICAgfVxuXG4gICAgX2dldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICAgIH1cblxuICAgIF9nZXRQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gdGl0bGUpXG4gICAgfVxuXG4gICAgX2FkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gICAgfVxuXG4gICAgX2RlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpICE9PSBwcm9qZWN0VGl0bGUpXG4gICAgfVxufSIsImltcG9ydCBMaXN0ZW5lcnMgZnJvbSBcIi4vTGlzdGVuZXJzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmltcG9ydCBpY29uRGVsZXRlIGZyb20gXCIuLi9hc3NldHMvaWNvbl9kZWxldGUuc3ZnXCJcbmltcG9ydCBpY29uQWRkIGZyb20gXCIuLi9hc3NldHMvaWNvbl9hZGQuc3ZnXCJcbmltcG9ydCBpY29uRWRpdCBmcm9tIFwiLi4vYXNzZXRzL2ljb25fZWRpdC5zdmdcIlxuaW1wb3J0IGljb25Fc2MgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2VzYy5zdmdcIlxuaW1wb3J0IGljb25Mb2dvIGZyb20gXCIuLi9hc3NldHMvaWNvbl9sb2dvLnN2Z1wiXG5pbXBvcnQgaWNvbkxvd1ByaW9yaXR5IGZyb20gXCIuLi9hc3NldHMvaWNvbl9scHJpb3JpdHkuc3ZnXCJcbmltcG9ydCBpY29uSGlnaFByaW9yaXR5IGZyb20gXCIuLi9hc3NldHMvaWNvbl9ocHJpb3JpdHkuc3ZnXCJcbmltcG9ydCBpY29uTm9Qcmlvcml0eSBmcm9tIFwiLi4vYXNzZXRzL2ljb25fbnByaW9yaXR5LnN2Z1wiXG5cblxuY29uc3QgRG9tID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJylcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhbmVsJylcblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hQYWdlIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgICBjb25zdCBsaXN0ID0gU3RvcmFnZS5nZXRMaXN0KCk7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgcGFuZWwuaW5uZXJIVE1MID0gJydcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGNvbnNvbGUubG9nKCdmcm9tIHJlZnJlc2ggbGlzdCAnICsgY3VycmVudFByb2plY3QpXG4gICAgICAgIHJlbmRlckhlYWRlcigpXG4gICAgICAgIHJlbmRlclByb2plY3RzKGxpc3QuX2dldFByb2plY3RzKCkpXG4gICAgICAgIHJlbmRlclRhc2tzKGxpc3QuX2dldFByb2plY3QoY3VycmVudFByb2plY3QpLmdldFRhc2tzKCkpXG4gICAgICAgIHJlbmRlckFkZEJ1dHRvbnMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KHR5cGUsaWQsYXJyYXlDbGFzc2VzLGluVHlwZSxjb250ZW50LGFwcGVuZENoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZihpZCkgZWxlbWVudC5pZCA9IGlkO1xuICAgICAgICBpZihhcnJheUNsYXNzZXMpIGFycmF5Q2xhc3Nlcy5mb3JFYWNoKFxuICAgICAgICAgICAgKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG4gICAgICAgIGlmKGluVHlwZSkgZWxlbWVudC50eXBlID0gaW5UeXBlO1xuICAgICAgICBpZihjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgICAgIGlmKGFwcGVuZENoKSBhcHBlbmRDaC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySGVhZGVyICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlYWRlciBjYWxsZWQhJylcblxuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYGhlYWRlci1kaXZgLCBudWxsLCBudWxsLCBudWxsLCBoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gxJywgJ2hlYWRlci10aXRsZScsIG51bGwsIG51bGwsICdET0lUIScsIGRpdilcblxuICAgICAgICBjb25zdCBsb2dvID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdoZWFkZXItbG9nbycsIG51bGwsIG51bGwsIG51bGwsIHRpdGxlKVxuICAgICAgICBsb2dvLnNyYyA9IGljb25Mb2dvXG5cbiAgICAgICAgY29uc3Qgc3ViVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdoZWFkZXItc3VidGl0bGUnLCBudWxsLCBudWxsLCAnYSB0by1kbyBhcHAnLCBkaXYpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlclRhc2tzID0gKHRhc2tzKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBjcmVhdGVIdG1sRWxlbWVudCgndDInLCBgdGl0bGUtY3VycmVudHByb2plY3RgICxbJ3RpdGxlLWN1cnJlbnRwcm9qZWN0J10sIG51bGwsIExpc3RlbmVycy5jdXJyZW50UHJvamVjdCwgY29udGVudClcblxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGFzay5nZXRUaXRsZSgpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLGB0LWRpdi0ke3Rhc2suZ2V0SWQoKX1gLFsndGFzay1kaXYnXSxudWxsLG51bGwsY29udGVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnRTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYHQtbGVmdHN1YmRpdi0ke25hbWV9YCwgWyd0YXNrLWxlZnRzdWJkaXYnXSwgbnVsbCwgbnVsbCwgZGl2KTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVIdG1sRWxlbWVudCgnaW5wdXQnLCBgdC1jaGVja2JveC0ke3Rhc2suZ2V0SWQoKX1gLCBbJ3Rhc2stY2hlY2tib3gnXSwgJ2NoZWNrYm94JywgbnVsbCwgbGVmdFN1YkRpdik7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5pc0NoZWNrZWQoKSBcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCggJ3AnLCBgdC10My0ke25hbWV9YCwgWyd0YXNrLXQzJ10sIG51bGwsIHRhc2suZ2V0VGl0bGUoKSwgbGVmdFN1YkRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVIdG1sRWxlbWVudCggJ3AnLCBgdC1kYXRlLSR7bmFtZX1gLCBbJ3Rhc2stZGF0ZSddLCBudWxsLCB0YXNrLmdldER1ZURhdGVfZGlzdGFuY2VGcm9tKCksIGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsIGB0LXByaW9yaXR5LSR7bmFtZX1gLCBbJ3Rhc2stcHJpb3JpdHknXSwgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmdldFByaW9yaXR5KCkgIT09ICcxJyl7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5LnNyYyA9IHRhc2suZ2V0UHJpb3JpdHkoKSA9PT0gJzAnID8gaWNvbkxvd1ByaW9yaXR5IDogaWNvbkhpZ2hQcmlvcml0eVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5zcmMgPSBpY29uTm9Qcmlvcml0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmdldFByaW9yaXR5KCkpXG5cbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0U3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGB0LXJpZ2h0c3ViZGl2LSR7dGFzay5nZXRJZCgpfWAsIFsndGFzay1yaWdodHN1YmRpdiddLCBudWxsLCBudWxsLCBkaXYpO1xuICAgICAgICAgICAgICAgIHJpZ2h0U3ViRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsIGB0LWVkaXRidG4tJHt0YXNrLmdldElkKCl9YCwgWyd0YXNrLWVkaXRidG4nXSwgbnVsbCwgbnVsbCwgcmlnaHRTdWJEaXYpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uc3JjID0gaWNvbkVkaXRcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoICdpbWcnLCBgdC1kZWxldGVidG4tJHt0YXNrLmdldElkKCl9YCwgWyd0YXNrLWRlbGV0ZWJ0biddLCBudWxsLCBudWxsLCByaWdodFN1YkRpdik7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnNyYyA9IGljb25EZWxldGVcblxuICAgICAgICAgICAgaWYgKHRhc2suaXNDaGVja2VkKCkpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnXG4gICAgICAgICAgICAgICAgdGl0bGUuc3R5bGUub3BhY2l0eSA9IDAuM1xuICAgICAgICAgICAgICAgIGRhdGUuc3R5bGUub3BhY2l0eSA9IDAuM1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LnN0eWxlLm9wYWNpdHkgPSAwLjNcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcHJvamVjdC5nZXRUaXRsZSgpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgcC1kaXYtJHtuYW1lfWAsIFsncHJvai1kaXYnXSwgbnVsbCwgbnVsbCwgcGFuZWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgYHAtdDItJHtuYW1lfWAgLFsncHJvai10MiddLCBudWxsLCBuYW1lLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCByaWdodFN1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgcC1yaWdodHN1YmRpdi0ke25hbWV9YCwgWydwcm9qLXJpZ2h0c3ViZGl2J10sIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgICAgICAgICAgcmlnaHRTdWJEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsYHAtZWRpdGJ0bi0ke25hbWV9YCxbJ3Byb2otZWRpdGJ0biddLG51bGwsbnVsbCxyaWdodFN1YkRpdik7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zcmMgPSBpY29uRWRpdFxuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgYHAtZGVsZXRlYnRuLSR7bmFtZX1gLCBbJ3Byb2otZGVsZXRlYnRuJ10sIG51bGwsIG51bGwsIHJpZ2h0U3ViRGl2KTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uc3JjID0gaWNvbkRlbGV0ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckFkZEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pBZGRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJyxgcHJvai1hZGRidG5gLG51bGwsbnVsbCxudWxsLHBhbmVsLCk7XG4gICAgICAgICAgICBwcm9qQWRkQnRuLnNyYyA9IGljb25BZGRcblxuICAgICAgICBjb25zdCB0YXNrQWRkQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsYHRhc2stYWRkYnRuYCxudWxsLG51bGwsbnVsbCxjb250ZW50LCk7XG4gICAgICAgICAgICB0YXNrQWRkQnRuLnNyYyA9IGljb25BZGRcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEaWFsb2dEZWxldGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaWFsb2cnLCAnbW9kYWwtZGVsZXRlLWRpYWxvZycsbnVsbCxudWxsLG51bGwsY29udGVudClcblxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnbW9kYWwtZGVsZXRlLWNsb3NlYnRuJywgbnVsbCwgbnVsbCwgbnVsbCwgZGlhbG9nKVxuICAgICAgICAgICAgY2xvc2VCdG4uc3JjID0gaWNvbkVzY1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdtb2RhbC1kZWxldGUtaDInLCBudWxsLCBudWxsLCAnQ29uZmlybSBEZWxldGU/JywgZGlhbG9nKVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnbW9kYWwtZGVsZXRlLXN1Ym1pdGJ0bicsIG51bGwsICdidXR0b24nLCAnRGVsZXRlJywgZGlhbG9nKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckRpYWxvZ0FkZFRhc2sgPSAoZWRpdFRpdGxlLCBlZGl0RGVzY3JpcHRpb24sIGVkaXREdWVEYXRlLCBlZGl0UGFyZW50UHJvamVjdCwgZWRpdFByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaWFsb2cnLCAnbW9kYWwtYWRkdGFzay1kaWFsb2cnLG51bGwsbnVsbCxudWxsLGNvbnRlbnQpXG5cbiAgICAgICAgY29uc3QgaGVhZGVyU3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBtb2RhbC1hZGR0YXNrLWhlYWRlcnN1YmRpdmAsIG51bGwsIG51bGwsIG51bGwsIGRpYWxvZyk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ21vZGFsLWFkZHRhc2stY2xvc2VidG4nLCBudWxsLCBudWxsLCBudWxsLCBoZWFkZXJTdWJEaXYpXG4gICAgICAgICAgICBjbG9zZUJ0bi5zcmMgPSBpY29uRXNjXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnbW9kYWwtYWRkdGFzay1oMicsIG51bGwsIG51bGwsICdOZXcgVGFzaycsIGhlYWRlclN1YkRpdilcbiAgICAgICAgICAgIGlmKGVkaXRUaXRsZSkgdGl0bGUuaW5uZXJUZXh0ID0gJ0VkaXQgVGFzaydcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywgJ21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUnLCBudWxsLCAndGV4dCcsIG51bGwsIGRpYWxvZylcbiAgICAgICAgICAgIGlmKGVkaXRUaXRsZSkgaW5wdXRUaXRsZS52YWx1ZSA9IGVkaXRUaXRsZVxuXG4gICAgICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBjcmVhdGVIdG1sRWxlbWVudCgndGV4dGFyZWEnLCAnbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbicsIG51bGwsIG51bGwsIG51bGwsIGRpYWxvZylcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5jb2xzID0gMjVcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5yb3dzID0gM1xuICAgICAgICAgICAgaWYoZWRpdERlc2NyaXB0aW9uKSBpbnB1dERlc2NyaXB0aW9uLnZhbHVlICA9IGVkaXREZXNjcmlwdGlvblxuXG4gICAgICAgIGNvbnN0IGlucHV0RHVlRGF0ZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsICdtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGUnLCBudWxsLCAnZGF0ZScsIG51bGwsIGRpYWxvZylcbiAgICAgICAgICAgIGlmKGVkaXREdWVEYXRlKSBpbnB1dER1ZURhdGUudmFsdWUgPSBlZGl0RHVlRGF0ZVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yc1N1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgbW9kYWwtYWRkdGFzay1zZWxlY3RvcnNzdWJkaXZgLCBudWxsLCBudWxsLCBudWxsLCBkaWFsb2cpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0U2VsZWN0UHJpb3JpdHkgPSBjcmVhdGVIdG1sRWxlbWVudCgnc2VsZWN0JywgJ21vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHknLCBudWxsLCBudWxsLCBudWxsLCBzZWxlY3RvcnNTdWJEaXYpXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdvcHRpb24nLCBgbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eS1sb3dgLCBudWxsLCBudWxsLCAnTG93JywgaW5wdXRTZWxlY3RQcmlvcml0eSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxvdy52YWx1ZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5Tm9ybWFsID0gY3JlYXRlSHRtbEVsZW1lbnQoJ29wdGlvbicsIGBtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5LW5vcm1hbGAsIG51bGwsIG51bGwsICdObyBQcmlvcml0eScsIGlucHV0U2VsZWN0UHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlOb3JtYWwudmFsdWUgPSAxXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlOb3JtYWwuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBjcmVhdGVIdG1sRWxlbWVudCgnb3B0aW9uJywgYG1vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHktaGlnaGAsIG51bGwsIG51bGwsICdIaWdoJywgaW5wdXRTZWxlY3RQcmlvcml0eSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2gudmFsdWUgPSAyXG4gICAgICAgICAgICAgICAgaWYoZWRpdFByaW9yaXR5ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXRQcmlvcmlyeTogJyArIGVkaXRQcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lucHV0U2VsZWN0UHJpb3JpdHkuc2VsZWN0ZWRJbmRleDogJyArIGlucHV0U2VsZWN0UHJpb3JpdHkuc2VsZWN0ZWRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRTZWxlY3RQcmlvcml0eS5zZWxlY3RlZEluZGV4ID0gZWRpdFByaW9yaXR5fVxuXG4gICAgICAgIGNvbnN0IGlucHV0U2VsZWN0UHJvamVjdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWxlY3QnLCAnbW9kYWwtYWRkdGFzay1pbnB1dC1zZWxlY3QtcHJvamVjdCcsIG51bGwsIG51bGwsIG51bGwsIHNlbGVjdG9yc1N1YkRpdilcbiAgICAgICAgICAgIFN0b3JhZ2UuZ2V0TGlzdCgpLl9nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zUHJvamVjdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdvcHRpb24nLCBgbW9kYWwtYWRkdGFzay1pbnB1dC1vcHRpb24tcHJvaiR7cHJvamVjdC5nZXRUaXRsZSgpfWAsIG51bGwsIG51bGwsIHByb2plY3QuZ2V0VGl0bGUoKSwgaW5wdXRTZWxlY3RQcm9qZWN0KVxuICAgICAgICAgICAgICAgIGlmKGVkaXRQYXJlbnRQcm9qZWN0ICYmIChvcHRpb25zUHJvamVjdC52YWx1ZSA9PT0gZWRpdFBhcmVudFByb2plY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNQcm9qZWN0LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKCFlZGl0UGFyZW50UHJvamVjdCAmJiAob3B0aW9uc1Byb2plY3QudmFsdWUgPT09IExpc3RlbmVycy5jdXJyZW50UHJvamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9uc1Byb2plY3QudmFsdWUgPSBwcm9qZWN0LmdldFRpdGxlKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdtb2RhbC1hZGR0YXNrLXN1Ym1pdGJ0bicsIG51bGwsICdidXR0b24nLCAnQWRkJywgZGlhbG9nKVxuICAgICAgICAgICAgaWYgKGVkaXRUaXRsZSkgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdFZGl0J1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckRpYWxvZ0FkZFByb2ogPSAoZWRpdFRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaWFsb2cnLCAnbW9kYWwtYWRkcHJvai1kaWFsb2cnLG51bGwsbnVsbCxudWxsLGNvbnRlbnQpXG5cbiAgICAgICAgY29uc3QgaGVhZGVyU3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBtb2RhbC1hZGRwcm9qLWhlYWRlcnN1YmRpdmAsIG51bGwsIG51bGwsIG51bGwsIGRpYWxvZyk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ21vZGFsLWFkZHByb2otY2xvc2VidG4nLCBudWxsLCBudWxsLCBudWxsLCBoZWFkZXJTdWJEaXYpXG4gICAgICAgICAgICBjbG9zZUJ0bi5zcmMgPSBpY29uRXNjXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnbW9kYWwtYWRkcHJvai1oMicsIG51bGwsIG51bGwsICdOZXcgUHJvamVjdCcsIGhlYWRlclN1YkRpdilcbiAgICAgICAgaWYoZWRpdFRpdGxlKSB0aXRsZS5pbm5lclRleHQgPSAnRWRpdCBwcm9qZWN0J1xuXG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW5wdXQnLCBgbW9kYWwtYWRkcHJvai1pbnB1dC10aXRsZWAsIG51bGwsICd0ZXh0JywgbnVsbCwgZGlhbG9nKVxuICAgICAgICBpZihlZGl0VGl0bGUpIGlucHV0VGl0bGUudmFsdWUgPSBlZGl0VGl0bGVcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgYG1vZGFsLWFkZHByb2otc3VibWl0YnRuYCwgbnVsbCwgJ2J1dHRvbicsICdBZGQnLCBkaWFsb2cpXG4gICAgfVxuXG5cbiAgICByZXR1cm4geyByZW5kZXJUYXNrcywgcmVuZGVyUHJvamVjdHMsIHJlbmRlckFkZEJ1dHRvbnMsIHJlbmRlckRpYWxvZ0FkZFByb2osIHJlbmRlckRpYWxvZ0FkZFRhc2ssIHJlbmRlckRpYWxvZ0RlbGV0ZSwgcmVmcmVzaFBhZ2UgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBEb20iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiXG5pbXBvcnQgRG9tIGZyb20gXCIuL0RPTVwiXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdGVuZXJzIHtcblxuICAgIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9ICAnJyAvLyB8fCBmb3IgIGluaXRpYWxpemF0aW9uXG4gICAgXG4gICAgc3RhdGljIGdldEN1cnJlbnRMaXN0KCkge1xuICAgICAgICByZXR1cm4gU3RvcmFnZS5nZXRMaXN0KClcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q3VycmVudFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgTGlzdGVuZXJzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5hbWVcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFBhZ2UoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgRG9tLnJlZnJlc2hQYWdlKExpc3RlbmVycy5jdXJyZW50UHJvamVjdClcbiAgICAgICAgTGlzdGVuZXJzLmluaXREb21FbGVtZW50cygpXG4gICAgICAgIExpc3RlbmVycy5pbml0TmV3UHJvamVjdERpYWxvZygpXG4gICAgICAgIExpc3RlbmVycy5pbml0TmV3VGFza0RpYWxvZygpXG4gICAgICAgIExpc3RlbmVycy5pbml0RWRpdERpYWxvZygpXG4gICAgICAgIExpc3RlbmVycy5pbml0RGVsZXRlRGlhbG9nKClcblxuICAgICAgICBjb25zb2xlLmxvZyhMaXN0ZW5lcnMuZ2V0Q3VycmVudExpc3QoKSlcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0RG9tRWxlbWVudHMoKSB7XG5cbiAgICAgICAgLy89PT09IEhPVkVSIFRBU0sgPT09Ly9cbiAgICAgICAgY29uc3QgdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRpdicpXG5cbiAgICAgICAgdERpdi5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgICAgc2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IHNlY3Rpb24uaWQuc2xpY2UoNilcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50VG9TaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHQtcmlnaHRzdWJkaXYtJHt0YXNrSWR9YClcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9TaG93LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0lkID0gc2VjdGlvbi5pZC5zbGljZSg2KVxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb0hpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdC1yaWdodHN1YmRpdi0ke3Rhc2tJZH1gKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb0hpZGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vPT09PSBIT1ZFUiBQUk9KID09PS8vXG4gICAgICAgIGNvbnN0IHBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1kaXYnKVxuXG4gICAgICAgIHBEaXYuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IHNlY3Rpb24uaWQuc2xpY2UoNilcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50VG9TaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAtcmlnaHRzdWJkaXYtJHtwcm9qTmFtZX1gKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Nob3cuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IHNlY3Rpb24uaWQuc2xpY2UoNilcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50VG9IaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAtcmlnaHRzdWJkaXYtJHtwcm9qTmFtZX1gKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb0hpZGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXQzJylcblxuICAgICAgICAvLz09PT0gU0VMRUNUIFBST0ogPT09Ly9cbiAgICAgICAgY29uc3QgcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otdDInKVxuXG4gICAgICAgIHBUaXRsZS5mb3JFYWNoKHRpdGxlID0+IHtcbiAgICAgICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIExpc3RlbmVycy5zZXRDdXJyZW50UHJvamVjdCh0aXRsZS5pZC5zbGljZSg1KSlcbiAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy89PT09IENIRUNLIFRBU0sgPT09Ly9cbiAgICAgICAgY29uc3QgdENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY2hlY2tib3gnKVxuXG4gICAgICAgIHRDaGVja2JveC5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBjaGVja2JveC5pZC5zbGljZSgxMSlcblxuICAgICAgICAgICAgICAgIFN0b3JhZ2UuY2hlY2tUYXNrKFN0b3JhZ2UuZ2V0VGFza1BhcmVudCh0YXNrSWQpLCB0YXNrSWQsIGNoZWNrYm94LmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy89PT09IEVESVQgRElBTE9HID09PS8vXG4gICAgc3RhdGljIGluaXRFZGl0RGlhbG9nKCkgeyAgICBcbiAgICAgICAgLy9UYXNrRGlhbG9nIGVsOiBhZGRUYXNrOyBhY3Rpb25zOiBhZGROZXdUYXNrKCksIHJlbW92ZVRhc2soKVxuICAgICAgICBjb25zdCB0RWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVkaXRidG4nKVxuXG4gICAgICAgIHRFZGl0QnRuLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBidXR0b24uaWQuc2xpY2UoMTApXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1Byb2plY3RQYXJlbnQgPSBTdG9yYWdlLmdldFRhc2tQYXJlbnQodGFza0lkKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBTdG9yYWdlLmdldFRhc2tPYmoodGFza1Byb2plY3RQYXJlbnQsIHRhc2tJZClcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrLmdldFRpdGxlKClcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrLmdldERlc2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2suZ2V0RHVlRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFzay5nZXRQcmlvcml0eSgpXG5cbiAgICAgICAgICAgICAgICBEb20ucmVuZGVyRGlhbG9nQWRkVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcm9qZWN0UGFyZW50LCB0YXNrUHJpb3JpdHkpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWRpYWxvZycpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2tOZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LXRpdGxlJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFza05ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtZGVzY3JpcHRpb24nKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrTmV3RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5JylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFza1Byb2pTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1zZWxlY3QtcHJvamVjdCcpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1zdWJtaXRidG4nKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1jbG9zZWJ0bicpXG4gICAgXG4gICAgICAgICAgICAgICAgZGlhbG9nRWRpdFRhc2suc2hvd01vZGFsKClcblxuICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRUYXNrU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLmFkZFRhc2soZGlhbG9nRWRpdFRhc2tQcm9qU2VsZWN0LnZhbHVlLCBkaWFsb2dFZGl0VGFza05ld1RpdGxlLnZhbHVlLCBkaWFsb2dFZGl0VGFza05ld0Rlc2NyaXB0aW9uLnZhbHVlLCBkaWFsb2dFZGl0VGFza05ld0R1ZURhdGUudmFsdWUsIGRpYWxvZ0FkZFRhc2tQcmlvcml0eS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVUYXNrKHRhc2tQcm9qZWN0UGFyZW50LCB0YXNrSWQpIFxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dFZGl0VGFzay5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBkaWFsb2dFZGl0VGFza0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaWFsb2dFZGl0VGFzay5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIC8vUHJvamVjdERpYWxvZyBlbDogYWRkUHJvamVjdCgpOyBhY3Rpb246IGVkaXRQcm9qZWN0XG4gICAgICAgIGNvbnN0IHBFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otZWRpdGJ0bicpXG5cbiAgICAgICAgcEVkaXRCdG4uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IGJ1dHRvbi5pZC5zbGljZSgxMCk7XG5cbiAgICAgICAgICAgICAgICBEb20ucmVuZGVyRGlhbG9nQWRkUHJvaihwcm9qVGl0bGUpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLWRpYWxvZycpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFByb2pOZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLWlucHV0LXRpdGxlJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0UHJvalN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLXN1Ym1pdGJ0bicpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFByb2pDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLWNsb3NlYnRuJylcblxuICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRQcm9qLnNob3dNb2RhbCgpXG5cbiAgICAgICAgICAgICAgICBkaWFsb2dFZGl0UHJvalN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGlhbG9nRWRpdFByb2pOZXdUaXRsZS52YWx1ZS5pbmNsdWRlcygnICcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTcGFjZSBpcyBub3QgYWxsb3dlZCBoZXJlLiBcXG5QbGVhc2UsIGNob29zZSBhIGRpZmZlcmVudCBuYW1lIG9yIHVzZVxcJ19cXCcuJylcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLmVkaXRQcm9qZWN0KHByb2pUaXRsZSwgZGlhbG9nRWRpdFByb2pOZXdUaXRsZS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFN0b3JhZ2UuZ2V0TGlzdCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nRWRpdFByb2ouY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZGlhbG9nRWRpdFByb2pDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRWRpdFByb2ouY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vPT09PSBESUFMT0cgREVMRVRFID09PS8vXG4gICAgc3RhdGljIGluaXREZWxldGVEaWFsb2coKSB7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1kZWxldGVidG4sIC50YXNrLWRlbGV0ZWJ0bicpXG5cbiAgICAgICAgZGVsZXRlQnRuLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgICAgIERvbS5yZW5kZXJEaWFsb2dEZWxldGUoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkaWFsb2dEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVsZXRlLWRpYWxvZycpXG4gICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0RlbGV0ZVN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxldGUtc3VibWl0YnRuJylcbiAgICAgICAgICAgICAgICBsZXQgZGlhbG9nRGVsZXRlQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVsZXRlLWNsb3NlYnRuJylcbiAgICAgICAgICAgICAgICBsZXQgZGlhbG9nRGVsZXRlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVsZXRlLWgyJylcbiAgICAgICAgICAgICAgICBsZXQgaXNQcm9qZWN0ID0gYnV0dG9uLmlkLnN0YXJ0c1dpdGgoJ3AnKVxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGUuc2hvd01vZGFsKClcblxuICAgICAgICAgICAgICAgIGRpYWxvZ0RlbGV0ZVRpdGxlLmlubmVyVGV4dCA9IGlzUHJvamVjdCA/XG4gICAgICAgICAgICAgICAgICAgIGBEZWxldGUgUHJvamVjdCAnJHtidXR0b24uaWQuc2xpY2UoMTIpfSc/YCA6XG4gICAgICAgICAgICAgICAgICAgIGBEZWxldGUgVGFzayAnJHtidXR0b24uaWQuc2xpY2UoMTIpfSc/YFxuXG4gICAgICAgICAgICAgICAgZGlhbG9nRGVsZXRlU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpc1Byb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYnV0dG9uLmlkLnNsaWNlKDEyKSAhPT0gTGlzdGVuZXJzLmN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QoYnV0dG9uLmlkLnNsaWNlKDEyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCBjYW5ub3QgZGVsZXRlIGN1cnJlbnQgcHJvamVjdCwgeWV0Li4uXFxuQ2hvb3NlIGFub3RoZXIgcHJvamVjdCwgdGhlbiBkZWxldGUgdGhpcyBvbmUuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhTdG9yYWdlLmdldFRhc2tQYXJlbnQoYnV0dG9uLmlkLnNsaWNlKDEyKSksIGJ1dHRvbi5pZC5zbGljZSgxMikpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRGVsZXRlLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRpYWxvZ0RlbGV0ZUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGUuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vPT09PSBESUFMT0cgQUREIE5FVyBUQVNLID09PS8vXG4gICAgc3RhdGljIGluaXROZXdUYXNrRGlhbG9nKCkge1xuICAgICAgICBsZXQgdEFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWFkZGJ0bicpXG5cbiAgICAgICAgdEFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgRG9tLnJlbmRlckRpYWxvZ0FkZFRhc2soKVxuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2stZGlhbG9nJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LXRpdGxlJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LWRlc2NyaXB0aW9uJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtZHVlZGF0ZScpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eScpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrUHJvalNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LXNlbGVjdC1wcm9qZWN0JylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1zdWJtaXRidG4nKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza0Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2stY2xvc2VidG4nKVxuXG4gICAgICAgICAgICBkaWFsb2dBZGRUYXNrLnNob3dNb2RhbCgpXG5cbiAgICAgICAgICAgIGRpYWxvZ0FkZFRhc2tTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RvcmFnZS5hZGRUYXNrKGRpYWxvZ0FkZFRhc2tQcm9qU2VsZWN0LnZhbHVlLCBkaWFsb2dBZGRUYXNrVGl0bGUudmFsdWUsIGRpYWxvZ0FkZFRhc2tEZXNjcmlwdGlvbi52YWx1ZSwgZGlhbG9nQWRkVGFza0R1ZURhdGUudmFsdWUsIGRpYWxvZ0FkZFRhc2tQcmlvcml0eS52YWx1ZSlcbiAgICAgICAgICAgICAgICBkaWFsb2dBZGRUYXNrLmNsb3NlKClcbiAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwdXNoZWQgc3VibWl0IGFkZCB0YXNrISAnICsgZGlhbG9nQWRkVGFza1RpdGxlLnZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRpYWxvZ0FkZFRhc2tDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dBZGRUYXNrLmNsb3NlKClcbiAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy89PT09IERJQUxPRyBBREQgTkVXIFBST0pFQ1QgPT09Ly9cblxuICAgIHN0YXRpYyBpbml0TmV3UHJvamVjdERpYWxvZygpe1xuICAgICAgICBsZXQgcEFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLWFkZGJ0bicpXG5cbiAgICAgICAgcEFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIERvbS5yZW5kZXJEaWFsb2dBZGRQcm9qKClcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLWRpYWxvZycpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRQcm9qVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1pbnB1dC10aXRsZScpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRQcm9qU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otc3VibWl0YnRuJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFByb2pDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLWNsb3NlYnRuJylcblxuICAgICAgICAgICAgZGlhbG9nQWRkUHJvai5zaG93TW9kYWwoKVxuXG4gICAgICAgICAgICBkaWFsb2dBZGRQcm9qU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRpYWxvZ0FkZFByb2pUaXRsZS52YWx1ZS5pbmNsdWRlcygnICcpKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NwYWNlIGlzIG5vdCBhbGxvd2VkIGhlcmUuIFxcblBsZWFzZSwgY2hvb3NlIGEgZGlmZmVyZW50IG5hbWUgb3IgdXNlXFwnX1xcJy4nKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5hZGRQcm9qZWN0KGRpYWxvZ0FkZFByb2pUaXRsZS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nQWRkUHJvai5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwdXNoZWQgYWRkUHJvaiAnICsgZGlhbG9nQWRkUHJvalRpdGxlLnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkaWFsb2dBZGRQcm9qQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlhbG9nQWRkUHJvai5jbG9zZSgpXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9O1xuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuXG4gICAgZ2V0VGFzayhpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZClcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NcbiAgICB9XG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgfVxuXG4gICAgc2V0VGFza3ModGFza3Mpe1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3NcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlVGFzayhpZCl7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRJZCgpICE9PSBpZClcbiAgICB9XG5cbiAgICBlZGl0UHJvamVjdChuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuICAgIFxufSIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuXG4gICAgc3RhdGljIGdldExpc3QoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBDb250YWluZXIoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvaXRfdG9kb19hcHBfZm9sZGVyJykpXG4gICAgICAgIClcbiAgICAgICAgZGF0YUxpc3QuX3NldFByb2plY3RzKFxuICAgICAgICAgICAgZGF0YUxpc3QuX2dldFByb2plY3RzKClcbiAgICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBkYXRhTGlzdC5fZ2V0UHJvamVjdHMoKVxuICAgICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKClcbiAgICAgICAgICAgICAgICAubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YUxpc3Q7XG4gICAgfTtcbiAgICAgIFxuICAgIHN0YXRpYyBzYXZlTGlzdChkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2l0X3RvZG9fYXBwX2ZvbGRlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgc2F2ZWQgdG8gbCBzdG9yZSEgJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUYXNrUGFyZW50KHRhc2tJZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpLl9nZXRQcm9qZWN0cygpO1xuICAgIFxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHByb2plY3QuZ2V0VGFza3MoKS5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFyZW50IGZvdW5kOiAnICsgcHJvamVjdC5nZXRUaXRsZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRhc2tPYmoocHJvamVjdFRpdGxlLCB0YXNrSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gc3RvcmFnZSBnZXRUYXNrT2JqIScgKyBwcm9qZWN0VGl0bGUgKyAnLCAnICsgdGFza0lkKVxuICAgICAgIHJldHVybiBTdG9yYWdlLmdldExpc3QoKS5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmdldFRhc2sodGFza0lkKVxuICAgIH1cbiAgICBcbiAgICAvLz09Lz09Ly9cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSkpXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUxpc3QoY3VycmVudExpc3QpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUsIHRhc2tEZXNjdGlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuYWRkVGFzayhuZXcgVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjdGlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSkpXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUxpc3QoY3VycmVudExpc3QpICAgICAgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZGVsZXRlUHJvamVjdChwcm9qZWN0VGl0bGUpXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUxpc3QoY3VycmVudExpc3QpICAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrSWQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmRlbGV0ZVRhc2sodGFza0lkKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdCkgXG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXRQcm9qZWN0KHByb2plY3RUaXRsZSwgbmV3VGl0bGUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmVkaXRQcm9qZWN0KG5ld1RpdGxlKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdClcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlLCBpc0NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmdldFRhc2sodGFza1RpdGxlKS5zZXRDaGVja2VkKGlzQ2hlY2tlZCk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUxpc3QoY3VycmVudExpc3QpXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pZCA9IGAkeyh0aXRsZSB8fCAnXycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpfS0ke0RhdGUubm93KCl9YFxuICAgIH07XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZV9kaXN0YW5jZUZyb20oKXtcbiAgICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlKHRoaXMuZ2V0RHVlRGF0ZSgpLCBuZXcgRGF0ZSgpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eVxuICAgIH1cblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZFxuICAgIH1cblxuICAgIHNldENoZWNrZWQoY2hlY2spIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRUaXRsZSgpICsgJyB3YXMgY2hlY2tlZCEgJyArIHRoaXMuY2hlY2tlZCArIGNoZWNrKVxuICAgIH1cblxuICAgIGlzQ2hlY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZFxuICAgIH1cblxufSIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJvdW5kID0gbWV0aG9kID8gTWF0aFttZXRob2RdIDogTWF0aC50cnVuYztcbiAgICBjb25zdCByZXN1bHQgPSByb3VuZChudW1iZXIpO1xuICAgIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICAgIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqXG4gKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBkaWZmID0gX2RhdGVMZWZ0LmdldFRpbWUoKSAtIF9kYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZUFzYztcbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHllYXJEaWZmID0gX2RhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBfZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoRGlmZiA9IF9kYXRlTGVmdC5nZXRNb250aCgpIC0gX2RhdGVSaWdodC5nZXRNb250aCgpO1xuXG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGVMZWZ0KSAtICt0b0RhdGUoZGF0ZVJpZ2h0KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHM7XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjIH0gZnJvbSBcIi4vY29tcGFyZUFzYy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMubWpzXCI7XG5pbXBvcnQgeyBpc0xhc3REYXlPZk1vbnRoIH0gZnJvbSBcIi4vaXNMYXN0RGF5T2ZNb250aC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIHVzaW5nIHRydW5jIGFzIGEgZGVmYXVsdCByb3VuZGluZyBtZXRob2QuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHNpZ24gPSBjb21wYXJlQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCk7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhcbiAgICBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpLFxuICApO1xuICBsZXQgcmVzdWx0O1xuXG4gIC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoX2RhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgX2RhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBfZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuXG4gICAgX2RhdGVMZWZ0LnNldE1vbnRoKF9kYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gICAgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gICAgbGV0IGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gLXNpZ247XG5cbiAgICAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcbiAgICBpZiAoXG4gICAgICBpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkYXRlTGVmdCkpICYmXG4gICAgICBkaWZmZXJlbmNlID09PSAxICYmXG4gICAgICBjb21wYXJlQXNjKGRhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gMVxuICAgICkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9XG5cbiAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbk1vbnRocztcbiIsImltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4vX2xpYi9nZXRSb3VuZGluZ01ldGhvZC5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJblNlY29uZHN9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnM/LnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5TZWNvbmRzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBlbmQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlbmRPZkRheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBlbmQgb2YgYSBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgbW9udGggPSBfZGF0ZS5nZXRNb250aCgpO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBfZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5kT2ZNb250aDtcbiIsImltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tIFwiLi9jb21wYXJlQXNjLm1qc1wiO1xuaW1wb3J0IHsgbWludXRlc0luRGF5LCBtaW51dGVzSW5Nb250aCB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1vbnRocyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbk1vbnRocy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJblNlY29uZHMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5TZWNvbmRzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXREaXN0YW5jZX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGVcbiAqIEBwYXJhbSBiYXNlRGF0ZSAtIFRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgbWludXRlc0luQWxtb3N0VHdvRGF5cyA9IDI1MjA7XG5cbiAgY29uc3QgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGF0ZSwgYmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgY29uc3QgbG9jYWxpemVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgIGFkZFN1ZmZpeDogb3B0aW9ucz8uYWRkU3VmZml4LFxuICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb24sXG4gIH0pO1xuXG4gIGxldCBkYXRlTGVmdDtcbiAgbGV0IGRhdGVSaWdodDtcbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoYmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoYmFzZURhdGUpO1xuICB9XG5cbiAgY29uc3Qgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIGNvbnN0IG9mZnNldEluU2Vjb25kcyA9XG4gICAgKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtXG4gICAgICBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgL1xuICAgIDEwMDA7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgbGV0IG1vbnRocztcblxuICAvLyAwIHVwIHRvIDIgbWluc1xuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucz8uaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YU2Vjb25kc1wiLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImxlc3NUaGFuWFNlY29uZHNcIiwgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YU2Vjb25kc1wiLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJoYWxmQU1pbnV0ZVwiLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImxlc3NUaGFuWE1pbnV0ZXNcIiwgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJ4TWludXRlc1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YTWludXRlc1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNaW51dGVzXCIsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNaW51dGVzXCIsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImFib3V0WEhvdXJzXCIsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBtaW51dGVzSW5EYXkpIHtcbiAgICBjb25zdCBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwiYWJvdXRYSG91cnNcIiwgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luQWxtb3N0VHdvRGF5cykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJ4RGF5c1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luTW9udGgpIHtcbiAgICBjb25zdCBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gbWludXRlc0luRGF5KTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwieERheXNcIiwgZGF5cywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luTW9udGggKiAyKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gbWludXRlc0luTW9udGgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJhYm91dFhNb250aHNcIiwgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuXG4gIC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICBjb25zdCBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBtaW51dGVzSW5Nb250aCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNb250aHNcIiwgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIGNvbnN0IHllYXJzID0gTWF0aC50cnVuYyhtb250aHMgLyAxMik7XG5cbiAgICAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJhYm91dFhZZWFyc1wiLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgICAgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcIm92ZXJYWWVhcnNcIiwgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAgIC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwiYWxtb3N0WFllYXJzXCIsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTtcbiIsImltcG9ydCB7IGVuZE9mRGF5IH0gZnJvbSBcIi4vZW5kT2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBlbmRPZk1vbnRoIH0gZnJvbSBcIi4vZW5kT2ZNb250aC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gK2VuZE9mRGF5KF9kYXRlKSA9PT0gK2VuZE9mTW9udGgoX2RhdGUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzTGFzdERheU9mTW9udGg7XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgY29uc3QgbWF0Y2hQYXR0ZXJuID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VQYXR0ZXJucyA9XG4gICAgICAod2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcblxuICAgIGNvbnN0IGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucylcbiAgICAgID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpXG4gICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvbG9jYWxpemUubWpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2gubWpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59O1xuIiwiY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSZWxhdGl2ZSA9ICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpID0+XG4gIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvU3RvcmFnZVwiO1xuaW1wb3J0IExpc3RlbmVycyBmcm9tIFwiLi9tb2R1bGVzL0xpc3RlbmVyc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5jb25zdCBkZW1vSW5pdCA9ICgpID0+IHtcbiAgICBTdG9yYWdlLmFkZFByb2plY3QoJ2RlZmF1bHQnKVxuICAgIFN0b3JhZ2UuYWRkUHJvamVjdCgnU2hvcCcpXG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KCdXb3JrJylcblxuICAgIFN0b3JhZ2UuYWRkVGFzaygnZGVmYXVsdCcsICdDbGVhbiByb29tJywgJ09yZ2FuaXplIGNsb3RoZXMgYW5kIGZ1cm5pdHVyZS4nLCAnMjAyMy0wMy0xMicsICcxJylcbiAgICBTdG9yYWdlLmFkZFRhc2soJ1Nob3AnLCAnQnV5IGdyb2NlcmllcycsICdHZXQgYnJlYWQsIG1pbGssIGVnZ3MsIGFuZCB2ZWdldGFibGVzLicsICcyMDIzLTAzLTE1JywgJzInKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnZGVmYXVsdCcsICdXYWxrIGRvZycsICdUYWtlIENoYXJsaWUgdG8gdGhlIHBhcmsgZm9yIGV4ZXJjaXNlLicsICcyMDIzLTAzLTE3JywgJzAnKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnV29yaycsICdTdHVkeSBtYXRoJywgJ1JldmlldyBjaGFwdGVyIDUgb24gbGluZWFyIGVxdWF0aW9ucy4nLCAnMjAyMy0wMy0yMCcsICcxJylcbiAgICBTdG9yYWdlLmFkZFRhc2soJ1dvcmsnLCAnRW1haWwgdGVhbScsICdTZW5kIHdlZWtseSByZXBvcnQgYW5kIHNjaGVkdWxlIG1lZXRpbmcuJywgJzIwMjMtMDMtMjInLCAnMicpXG5cbiAgICBMaXN0ZW5lcnMuc2V0Q3VycmVudFByb2plY3QoU3RvcmFnZS5nZXRMaXN0KCkuX2dldFByb2plY3RzKClbMF0uZ2V0VGl0bGUoKSlcbiAgICBcbiAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgIC8vU3RvcmFnZS5kZWxldGVQcm9qZWN0KCdTaG9wJylcbiAgICAvL1N0b3JhZ2UuZGVsZXRlVGFzaygnV29yaycsJ0VtYWlsIHRlYW0nKVxufVxuXG5jb25zdCBpbml0UmVzZXQgPSAoKSA9PiBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuY29uc3QgaXNEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvaXRfdG9kb19hcHBfZm9sZGVyJylcblxuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcbiAgICBpZighaXNEYXRhKXtcbiAgICAgICAgZGVtb0luaXQoKVxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGRlbW8gZGF0YSBjcmVhdGVkIScpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzRGF0YSlcbiAgICAgICAgTGlzdGVuZXJzLnNldEN1cnJlbnRQcm9qZWN0KFN0b3JhZ2UuZ2V0TGlzdCgpLl9nZXRQcm9qZWN0cygpWzBdLmdldFRpdGxlKCkpXG4gICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIHByZWxvZGVkIScpXG4gICAgfVxufVxuaW5pdFJlc2V0KClcbmluaXRBcHAoKVxuXG4vL0xpc3RlbmVycy5sb2FkUGFnZSgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==