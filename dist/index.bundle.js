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

    static currentProject =  false || _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getList()._getProjects()[0].getTitle() // || for  initialization
    
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


/* if(!Storage.getList()){
    demoInit()
    console.log('run demo data!')
} */

demoInit()

_modules_Listeners__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxTQUFTLGdGQUFnRixZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFL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QThCO0FBQzlCLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRDFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztB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QUFFTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7O0FDVmlFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFdBQVcseUVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxTQUFTLHlFQUFlO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHOztBQUVILE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsYUFBYSx5RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTDJEO0FBQ2M7O0FBRXpFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUCxpQkFBaUIsaUZBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsT0FBTyxtRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsV0FBVyxtRUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxTQUFTLG1FQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxPQUFPLG1FQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxhQUFhLG1FQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7O1VDekR0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBQ0k7QUFDeEI7O0FBRXBCO0FBQ0E7QUFDQSxJQUFJLHdEQUFPO0FBQ1gsSUFBSSx3REFBTztBQUNYLElBQUksd0RBQU87O0FBRVgsSUFBSSx3REFBTztBQUNYLElBQUksd0RBQU87QUFDWCxJQUFJLHdEQUFPO0FBQ1gsSUFBSSx3REFBTztBQUNYLElBQUksd0RBQU87QUFDWDtBQUNBLElBQUksMERBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUEsMERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFJvdW5kaW5nTWV0aG9kLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbXBhcmVBc2MubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluTW9udGhzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5TZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kT2ZNb250aC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzTGFzdERheU9mTW9udGgubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIC0tYmdDb2xvcjE6IHJnYig3OCwgMTE1LCAxMDQpO1xuICAtLWJnQ29sb3IyOiByZ2IoNDgsIDc5LCA3MCk7XG4gIC0tYmdDb2xvcjM6IHJnYigzNywgNjAsIDUzKTtcbn1cblxuYm9keSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4jYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi8qID09PT09IEhFQURFUiA9PT09PSAgKi9cblxuI2hlYWRlci1kaXYge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xuICBwYWRkaW5nOiAwLjlyZW07XG4gIFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuI2hlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuI2hlYWRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuI2hlYWRlci1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuLyogPT09PT0gUFJPSkVDVFMgPT09PT0gICovXG4jcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMjByZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB2YXIoLS1iZ0NvbG9yMikgMC41cmVtO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1iZ0NvbG9yMikgMC4xcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40cmVtO1xufVxuXG4jcGFuZWwgPiAucHJvai1kaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAuNXJlbSAwLjJyZW0gMCAwO1xufVxuXG4ucHJvai10MiB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5wcm9qLXJpZ2h0c3ViZGl2ID4gLnByb2otZWRpdGJ0biB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5wcm9qLXJpZ2h0c3ViZGl2ID4gLnByb2otZGVsZXRlYnRuIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLyogPT09PT0gVEFTS1MgPT09PT0gICovXG5cbiNjb250ZW50IHtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG59XG5cbiN0aXRsZS1jdXJyZW50cHJvamVjdCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhc2stZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4td2lkdGg6bWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogMnJlbTtcblxuICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xuXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWJnQ29sb3IzKSAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNHJlbTtcbn1cblxuLnRhc2stdDN7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnRhc2stZGF0ZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi50YXNrLXByaW9yaXR5IHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG59XG5cbi50YXNrLXJpZ2h0c3ViZGl2LCAudGFzay1sZWZ0c3ViZGl2LCAudGFzay1kYXRlIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnRhc2stcmlnaHRzdWJkaXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnRhc2stZWRpdGJ0biB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi50YXNrLWRlbGV0ZWJ0biB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi50YXNrLXJpZ2h0c3ViZGlyLCAucHJvai1yaWdodHN1YmRpciB7XG4gIG9wYWNpdHk6dmFyKC0tYmdDb2xvcjIpO1xufVxuXG5cbi8qID09PT09IERJQUxPRyBQUk9KRUNUID09PT09ICAqL1xuI21vZGFsLWFkZHByb2otZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbiNtb2RhbC1hZGRwcm9qLWhlYWRlcnN1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuI21vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2ID4gI21vZGFsLWFkZHByb2otY2xvc2VidG4ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBtYXJnaW46IDA7XG5cbn1cblxuI21vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2ID4gICNtb2RhbC1hZGRwcm9qLWgye1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDEuNXJlbVxuXG59XG5cbiNtb2RhbC1hZGRwcm9qLWlucHV0LXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG5cbi8qID09PT09IERJQUxPRyBUQVNLUyA9PT09PSAgKi9cblxuI21vZGFsLWFkZHRhc2stZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbiNtb2RhbC1hZGR0YXNrLWhlYWRlcnN1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG5cbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4jbW9kYWwtYWRkdGFzay1jbG9zZWJ0biB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIG1hcmdpbjogMDtcblxufVxuXG4jbW9kYWwtYWRkdGFzay1oMntcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMCAxLjVyZW1cbn1cblxuI21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1kdWVkYXRle1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI21vZGFsLWFkZHRhc2stc2VsZWN0b3Jzc3ViZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbiNtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5e1xuICB3aWR0aDogNDAlO1xufVxuXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1zZWxlY3QtcHJvamVjdHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLyogPT09PT0gIERJQUxPRyBERUxFVEUgPT09PT0gICovXG5cbiNtb2RhbC1kZWxldGUtZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB3aWR0aDogNDAlO1xufVxuXG4jbW9kYWwtZGVsZXRlLWNsb3NlYnRue1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi8qID09PT09IEhPVkVSID09PT09ICAqL1xuXG4ucHJvai1kaXYsIC50YXNrLWNoZWNrYm94LCAudGFzay1lZGl0YnRuLCAudGFzay1kZWxldGVidG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwcm9qLWFkZGJ0biwgI3Rhc2stYWRkYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qID09PT09IFJPV1MgPT09PT0gICovXG5cbi5wcm9qLXJpZ2h0c3ViZGl2LCAudGFzay1yaWdodHN1YmRpdiwgLnRhc2stbGVmdHN1YmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRhc2stbGVmdHN1YmRpdiB7XG53aWR0aDogNDAlO1xuanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udGFzay1yaWdodHN1YmRpdiB7XG53aWR0aDogMjAlO1xuanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRhc2stZGF0ZSB7XG53aWR0aDogNDAlO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuI3Byb2otYWRkYnRuIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcblxufVxuXG4jdGFzay1hZGRidG4ge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBcbn1cblxuXG4vKlxuYm9keSB7XG5mb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xubWFyZ2luOiAwO1xucGFkZGluZzogMDtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jcGFuZWwge1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xucGFkZGluZzogMjBweDtcbm1hcmdpbi1yaWdodDogMjBweDtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY29udGVudCB7XG5mbGV4OiAxO1xucGFkZGluZzogMjBweDtcbn1cblxuLnByb2otZGl2LFxuLnRhc2stZGl2IHtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xubWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhc2stY2hlY2tib3gge1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvai1lZGl0YnRuLFxuLnByb2otZGVsZXRlYnRuLFxuLnRhc2stZWRpdGJ0bixcbi50YXNrLWRlbGV0ZWJ0biB7XG5tYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRpYWxvZyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xucGFkZGluZzogMjBweDtcbnBvc2l0aW9uOiBmaXhlZDtcbnRvcDogNTAlO1xubGVmdDogNTAlO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG56LWluZGV4OiA5OTk5O1xuZGlzcGxheTogbm9uZTtcbndpZHRoOiAzMDBweDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbm1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tb2RhbC10aXRsZSB7XG5mb250LXNpemU6IDIwcHg7XG5jb2xvcjogIzMzMztcbn1cblxuLm1vZGFsLWNsb3NlIHtcbmJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG5jb2xvcjogIzMzMztcbmJvcmRlcjogbm9uZTtcbnBhZGRpbmc6IDVweCAxMHB4O1xuYm9yZGVyLXJhZGl1czogM3B4O1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtY2xvc2U6aG92ZXIge1xuYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xubWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLWlucHV0IHtcbndpZHRoOiAxMDAlO1xucGFkZGluZzogOHB4O1xubWFyZ2luLWJvdHRvbTogMTBweDtcbmJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5ib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5tb2RhbC1zdWJtaXQge1xuYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbmNvbG9yOiB3aGl0ZTtcbmJvcmRlcjogbm9uZTtcbnBhZGRpbmc6IDEwcHggMjBweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmZvbnQtc2l6ZTogMTZweDtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLXN1Ym1pdDpob3ZlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG59Ki9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2Q0FBNkM7RUFDN0MsZUFBZTs7RUFFZiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0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RSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFHQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtBQUNBLFVBQVU7QUFDViwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxVQUFVO0FBQ1YseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0EsVUFBVTtBQUNWLHVCQUF1QjtBQUN2Qjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztBQUVkOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0dFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG5cXG4gIC0tYmdDb2xvcjE6IHJnYig3OCwgMTE1LCAxMDQpO1xcbiAgLS1iZ0NvbG9yMjogcmdiKDQ4LCA3OSwgNzApO1xcbiAgLS1iZ0NvbG9yMzogcmdiKDM3LCA2MCwgNTMpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNhcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi8qID09PT09IEhFQURFUiA9PT09PSAgKi9cXG5cXG4jaGVhZGVyLWRpdiB7XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbiAgcGFkZGluZzogMC45cmVtO1xcbiAgXFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI2hlYWRlci1sb2dvIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNoZWFkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCAwIDAgMDtcXG59XFxuXFxuI2hlYWRlci1zdWJ0aXRsZSB7XFxuICBtYXJnaW46IDAgMCAwIDA7XFxufVxcblxcbi8qID09PT09IFBST0pFQ1RTID09PT09ICAqL1xcbiNwYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IDIwcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJvcmRlci1yaWdodDogc29saWQgdmFyKC0tYmdDb2xvcjIpIDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWJnQ29sb3IyKSAwLjFyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4jcGFuZWwgPiAucHJvai1kaXYge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAuNXJlbSAwLjJyZW0gMCAwO1xcbn1cXG5cXG4ucHJvai10MiB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucHJvai1yaWdodHN1YmRpdiA+IC5wcm9qLWVkaXRidG4ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLnByb2otcmlnaHRzdWJkaXYgPiAucHJvai1kZWxldGVidG4ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLyogPT09PT0gVEFTS1MgPT09PT0gICovXFxuXFxuI2NvbnRlbnQge1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiN0aXRsZS1jdXJyZW50cHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50YXNrLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi13aWR0aDptYXgtY29udGVudDtcXG4gIGhlaWdodDogMnJlbTtcXG5cXG4gIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7XFxuXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1iZ0NvbG9yMykgMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4udGFzay10M3tcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4udGFzay1yaWdodHN1YmRpdiwgLnRhc2stbGVmdHN1YmRpdiwgLnRhc2stZGF0ZSB7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4udGFzay1yaWdodHN1YmRpciB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLnRhc2stZWRpdGJ0biB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4udGFzay1kZWxldGVidG4ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLnRhc2stcmlnaHRzdWJkaXIsIC5wcm9qLXJpZ2h0c3ViZGlyIHtcXG4gIG9wYWNpdHk6dmFyKC0tYmdDb2xvcjIpO1xcbn1cXG5cXG5cXG4vKiA9PT09PSBESUFMT0cgUFJPSkVDVCA9PT09PSAgKi9cXG4jbW9kYWwtYWRkcHJvai1kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNtb2RhbC1hZGRwcm9qLWhlYWRlcnN1YmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkcHJvai1oZWFkZXJzdWJkaXYgPiAjbW9kYWwtYWRkcHJvai1jbG9zZWJ0biB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIG1hcmdpbjogMDtcXG5cXG59XFxuXFxuI21vZGFsLWFkZHByb2otaGVhZGVyc3ViZGl2ID4gICNtb2RhbC1hZGRwcm9qLWgye1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgMCAwIDEuNXJlbVxcblxcbn1cXG5cXG4jbW9kYWwtYWRkcHJvai1pbnB1dC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcblxcbi8qID09PT09IERJQUxPRyBUQVNLUyA9PT09PSAgKi9cXG5cXG4jbW9kYWwtYWRkdGFzay1kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWhlYWRlcnN1YmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuXFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWNsb3NlYnRuIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1oMntcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIDAgMCAxLjVyZW1cXG59XFxuXFxuI21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI21vZGFsLWFkZHRhc2staW5wdXQtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI21vZGFsLWFkZHRhc2staW5wdXQtZHVlZGF0ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1kdWVkYXRle1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLXNlbGVjdG9yc3N1YmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eXtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbiNtb2RhbC1hZGR0YXNrLWlucHV0LXNlbGVjdC1wcm9qZWN0e1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLyogPT09PT0gIERJQUxPRyBERUxFVEUgPT09PT0gICovXFxuXFxuI21vZGFsLWRlbGV0ZS1kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4jbW9kYWwtZGVsZXRlLWNsb3NlYnRue1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qID09PT09IEhPVkVSID09PT09ICAqL1xcblxcbi5wcm9qLWRpdiwgLnRhc2stY2hlY2tib3gsIC50YXNrLWVkaXRidG4sIC50YXNrLWRlbGV0ZWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qLWFkZGJ0biwgI3Rhc2stYWRkYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogPT09PT0gUk9XUyA9PT09PSAgKi9cXG5cXG4ucHJvai1yaWdodHN1YmRpdiwgLnRhc2stcmlnaHRzdWJkaXYsIC50YXNrLWxlZnRzdWJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stbGVmdHN1YmRpdiB7XFxud2lkdGg6IDQwJTtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLXJpZ2h0c3ViZGl2IHtcXG53aWR0aDogMjAlO1xcbmp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbndpZHRoOiA0MCU7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbiNwcm9qLWFkZGJ0biB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG5cXG59XFxuXFxuI3Rhc2stYWRkYnRuIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgXFxufVxcblxcblxcbi8qXFxuYm9keSB7XFxuZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbmJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jcGFuZWwge1xcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbnBhZGRpbmc6IDIwcHg7XFxubWFyZ2luLXJpZ2h0OiAyMHB4O1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbmZsZXg6IDE7XFxucGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2otZGl2LFxcbi50YXNrLWRpdiB7XFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcm9qLWVkaXRidG4sXFxuLnByb2otZGVsZXRlYnRuLFxcbi50YXNrLWVkaXRidG4sXFxuLnRhc2stZGVsZXRlYnRuIHtcXG5tYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRpYWxvZyB7XFxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbnBhZGRpbmc6IDIwcHg7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogNTAlO1xcbmxlZnQ6IDUwJTtcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG56LWluZGV4OiA5OTk5O1xcbmRpc3BsYXk6IG5vbmU7XFxud2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuZm9udC1zaXplOiAyMHB4O1xcbmNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2Uge1xcbmJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuY29sb3I6ICMzMzM7XFxuYm9yZGVyOiBub25lO1xcbnBhZGRpbmc6IDVweCAxMHB4O1xcbmJvcmRlci1yYWRpdXM6IDNweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1jbG9zZTpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RhbC1pbnB1dCB7XFxud2lkdGg6IDEwMCU7XFxucGFkZGluZzogOHB4O1xcbm1hcmdpbi1ib3R0b206IDEwcHg7XFxuYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG5ib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5tb2RhbC1zdWJtaXQge1xcbmJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuY29sb3I6IHdoaXRlO1xcbmJvcmRlcjogbm9uZTtcXG5wYWRkaW5nOiAxMHB4IDIwcHg7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuZm9udC1zaXplOiAxNnB4O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1zdWJtaXQ6aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XFxufVxcblxcbn0qL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cbiAgICB9XG5cbiAgICBfc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gICAgfVxuXG4gICAgX2dldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICAgIH1cblxuICAgIF9nZXRQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gdGl0bGUpXG4gICAgfVxuXG4gICAgX2FkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gICAgfVxuXG4gICAgX2RlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpICE9PSBwcm9qZWN0VGl0bGUpXG4gICAgfVxufSIsImltcG9ydCBMaXN0ZW5lcnMgZnJvbSBcIi4vTGlzdGVuZXJzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmltcG9ydCBpY29uRGVsZXRlIGZyb20gXCIuLi9hc3NldHMvaWNvbl9kZWxldGUuc3ZnXCJcbmltcG9ydCBpY29uQWRkIGZyb20gXCIuLi9hc3NldHMvaWNvbl9hZGQuc3ZnXCJcbmltcG9ydCBpY29uRWRpdCBmcm9tIFwiLi4vYXNzZXRzL2ljb25fZWRpdC5zdmdcIlxuaW1wb3J0IGljb25Fc2MgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2VzYy5zdmdcIlxuaW1wb3J0IGljb25Mb2dvIGZyb20gXCIuLi9hc3NldHMvaWNvbl9sb2dvLnN2Z1wiXG5pbXBvcnQgaWNvbkxvd1ByaW9yaXR5IGZyb20gXCIuLi9hc3NldHMvaWNvbl9scHJpb3JpdHkuc3ZnXCJcbmltcG9ydCBpY29uSGlnaFByaW9yaXR5IGZyb20gXCIuLi9hc3NldHMvaWNvbl9ocHJpb3JpdHkuc3ZnXCJcbmltcG9ydCBpY29uTm9Qcmlvcml0eSBmcm9tIFwiLi4vYXNzZXRzL2ljb25fbnByaW9yaXR5LnN2Z1wiXG5cblxuY29uc3QgRG9tID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJylcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhbmVsJylcblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hQYWdlIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgICBjb25zdCBsaXN0ID0gU3RvcmFnZS5nZXRMaXN0KCk7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgcGFuZWwuaW5uZXJIVE1MID0gJydcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGNvbnNvbGUubG9nKCdmcm9tIHJlZnJlc2ggbGlzdCAnICsgY3VycmVudFByb2plY3QpXG4gICAgICAgIHJlbmRlckhlYWRlcigpXG4gICAgICAgIHJlbmRlclByb2plY3RzKGxpc3QuX2dldFByb2plY3RzKCkpXG4gICAgICAgIHJlbmRlclRhc2tzKGxpc3QuX2dldFByb2plY3QoY3VycmVudFByb2plY3QpLmdldFRhc2tzKCkpXG4gICAgICAgIHJlbmRlckFkZEJ1dHRvbnMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KHR5cGUsaWQsYXJyYXlDbGFzc2VzLGluVHlwZSxjb250ZW50LGFwcGVuZENoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZihpZCkgZWxlbWVudC5pZCA9IGlkO1xuICAgICAgICBpZihhcnJheUNsYXNzZXMpIGFycmF5Q2xhc3Nlcy5mb3JFYWNoKFxuICAgICAgICAgICAgKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG4gICAgICAgIGlmKGluVHlwZSkgZWxlbWVudC50eXBlID0gaW5UeXBlO1xuICAgICAgICBpZihjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgICAgIGlmKGFwcGVuZENoKSBhcHBlbmRDaC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySGVhZGVyICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlYWRlciBjYWxsZWQhJylcblxuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYGhlYWRlci1kaXZgLCBudWxsLCBudWxsLCBudWxsLCBoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gxJywgJ2hlYWRlci10aXRsZScsIG51bGwsIG51bGwsICdET0lUIScsIGRpdilcblxuICAgICAgICBjb25zdCBsb2dvID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdoZWFkZXItbG9nbycsIG51bGwsIG51bGwsIG51bGwsIHRpdGxlKVxuICAgICAgICBsb2dvLnNyYyA9IGljb25Mb2dvXG5cbiAgICAgICAgY29uc3Qgc3ViVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdoZWFkZXItc3VidGl0bGUnLCBudWxsLCBudWxsLCAnYSB0by1kbyBhcHAnLCBkaXYpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlclRhc2tzID0gKHRhc2tzKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBjcmVhdGVIdG1sRWxlbWVudCgndDInLCBgdGl0bGUtY3VycmVudHByb2plY3RgICxbJ3RpdGxlLWN1cnJlbnRwcm9qZWN0J10sIG51bGwsIExpc3RlbmVycy5jdXJyZW50UHJvamVjdCwgY29udGVudClcblxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGFzay5nZXRUaXRsZSgpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLGB0LWRpdi0ke3Rhc2suZ2V0SWQoKX1gLFsndGFzay1kaXYnXSxudWxsLG51bGwsY29udGVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnRTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYHQtbGVmdHN1YmRpdi0ke25hbWV9YCwgWyd0YXNrLWxlZnRzdWJkaXYnXSwgbnVsbCwgbnVsbCwgZGl2KTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVIdG1sRWxlbWVudCgnaW5wdXQnLCBgdC1jaGVja2JveC0ke3Rhc2suZ2V0SWQoKX1gLCBbJ3Rhc2stY2hlY2tib3gnXSwgJ2NoZWNrYm94JywgbnVsbCwgbGVmdFN1YkRpdik7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5pc0NoZWNrZWQoKSBcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCggJ3AnLCBgdC10My0ke25hbWV9YCwgWyd0YXNrLXQzJ10sIG51bGwsIHRhc2suZ2V0VGl0bGUoKSwgbGVmdFN1YkRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVIdG1sRWxlbWVudCggJ3AnLCBgdC1kYXRlLSR7bmFtZX1gLCBbJ3Rhc2stZGF0ZSddLCBudWxsLCB0YXNrLmdldER1ZURhdGVfZGlzdGFuY2VGcm9tKCksIGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsIGB0LXByaW9yaXR5LSR7bmFtZX1gLCBbJ3Rhc2stcHJpb3JpdHknXSwgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmdldFByaW9yaXR5KCkgIT09ICcxJyl7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5LnNyYyA9IHRhc2suZ2V0UHJpb3JpdHkoKSA9PT0gJzAnID8gaWNvbkxvd1ByaW9yaXR5IDogaWNvbkhpZ2hQcmlvcml0eVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5zcmMgPSBpY29uTm9Qcmlvcml0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmdldFByaW9yaXR5KCkpXG5cbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0U3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGB0LXJpZ2h0c3ViZGl2LSR7dGFzay5nZXRJZCgpfWAsIFsndGFzay1yaWdodHN1YmRpdiddLCBudWxsLCBudWxsLCBkaXYpO1xuICAgICAgICAgICAgICAgIHJpZ2h0U3ViRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsIGB0LWVkaXRidG4tJHt0YXNrLmdldElkKCl9YCwgWyd0YXNrLWVkaXRidG4nXSwgbnVsbCwgbnVsbCwgcmlnaHRTdWJEaXYpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uc3JjID0gaWNvbkVkaXRcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoICdpbWcnLCBgdC1kZWxldGVidG4tJHt0YXNrLmdldElkKCl9YCwgWyd0YXNrLWRlbGV0ZWJ0biddLCBudWxsLCBudWxsLCByaWdodFN1YkRpdik7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnNyYyA9IGljb25EZWxldGVcblxuICAgICAgICAgICAgaWYgKHRhc2suaXNDaGVja2VkKCkpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnXG4gICAgICAgICAgICAgICAgdGl0bGUuc3R5bGUub3BhY2l0eSA9IDAuM1xuICAgICAgICAgICAgICAgIGRhdGUuc3R5bGUub3BhY2l0eSA9IDAuM1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LnN0eWxlLm9wYWNpdHkgPSAwLjNcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcHJvamVjdC5nZXRUaXRsZSgpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgcC1kaXYtJHtuYW1lfWAsIFsncHJvai1kaXYnXSwgbnVsbCwgbnVsbCwgcGFuZWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgYHAtdDItJHtuYW1lfWAgLFsncHJvai10MiddLCBudWxsLCBuYW1lLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCByaWdodFN1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgcC1yaWdodHN1YmRpdi0ke25hbWV9YCwgWydwcm9qLXJpZ2h0c3ViZGl2J10sIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgICAgICAgICAgcmlnaHRTdWJEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsYHAtZWRpdGJ0bi0ke25hbWV9YCxbJ3Byb2otZWRpdGJ0biddLG51bGwsbnVsbCxyaWdodFN1YkRpdik7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zcmMgPSBpY29uRWRpdFxuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgYHAtZGVsZXRlYnRuLSR7bmFtZX1gLCBbJ3Byb2otZGVsZXRlYnRuJ10sIG51bGwsIG51bGwsIHJpZ2h0U3ViRGl2KTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uc3JjID0gaWNvbkRlbGV0ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckFkZEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pBZGRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJyxgcHJvai1hZGRidG5gLG51bGwsbnVsbCxudWxsLHBhbmVsLCk7XG4gICAgICAgICAgICBwcm9qQWRkQnRuLnNyYyA9IGljb25BZGRcblxuICAgICAgICBjb25zdCB0YXNrQWRkQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsYHRhc2stYWRkYnRuYCxudWxsLG51bGwsbnVsbCxjb250ZW50LCk7XG4gICAgICAgICAgICB0YXNrQWRkQnRuLnNyYyA9IGljb25BZGRcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEaWFsb2dEZWxldGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaWFsb2cnLCAnbW9kYWwtZGVsZXRlLWRpYWxvZycsbnVsbCxudWxsLG51bGwsY29udGVudClcblxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnbW9kYWwtZGVsZXRlLWNsb3NlYnRuJywgbnVsbCwgbnVsbCwgbnVsbCwgZGlhbG9nKVxuICAgICAgICAgICAgY2xvc2VCdG4uc3JjID0gaWNvbkVzY1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdtb2RhbC1kZWxldGUtaDInLCBudWxsLCBudWxsLCAnQ29uZmlybSBEZWxldGU/JywgZGlhbG9nKVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnbW9kYWwtZGVsZXRlLXN1Ym1pdGJ0bicsIG51bGwsICdidXR0b24nLCAnRGVsZXRlJywgZGlhbG9nKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckRpYWxvZ0FkZFRhc2sgPSAoZWRpdFRpdGxlLCBlZGl0RGVzY3JpcHRpb24sIGVkaXREdWVEYXRlLCBlZGl0UGFyZW50UHJvamVjdCwgZWRpdFByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaWFsb2cnLCAnbW9kYWwtYWRkdGFzay1kaWFsb2cnLG51bGwsbnVsbCxudWxsLGNvbnRlbnQpXG5cbiAgICAgICAgY29uc3QgaGVhZGVyU3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBtb2RhbC1hZGR0YXNrLWhlYWRlcnN1YmRpdmAsIG51bGwsIG51bGwsIG51bGwsIGRpYWxvZyk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ21vZGFsLWFkZHRhc2stY2xvc2VidG4nLCBudWxsLCBudWxsLCBudWxsLCBoZWFkZXJTdWJEaXYpXG4gICAgICAgICAgICBjbG9zZUJ0bi5zcmMgPSBpY29uRXNjXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnbW9kYWwtYWRkdGFzay1oMicsIG51bGwsIG51bGwsICdOZXcgVGFzaycsIGhlYWRlclN1YkRpdilcbiAgICAgICAgICAgIGlmKGVkaXRUaXRsZSkgdGl0bGUuaW5uZXJUZXh0ID0gJ0VkaXQgVGFzaydcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywgJ21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUnLCBudWxsLCAndGV4dCcsIG51bGwsIGRpYWxvZylcbiAgICAgICAgICAgIGlmKGVkaXRUaXRsZSkgaW5wdXRUaXRsZS52YWx1ZSA9IGVkaXRUaXRsZVxuXG4gICAgICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBjcmVhdGVIdG1sRWxlbWVudCgndGV4dGFyZWEnLCAnbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbicsIG51bGwsIG51bGwsIG51bGwsIGRpYWxvZylcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5jb2xzID0gMjVcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5yb3dzID0gM1xuICAgICAgICAgICAgaWYoZWRpdERlc2NyaXB0aW9uKSBpbnB1dERlc2NyaXB0aW9uLnZhbHVlICA9IGVkaXREZXNjcmlwdGlvblxuXG4gICAgICAgIGNvbnN0IGlucHV0RHVlRGF0ZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsICdtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGUnLCBudWxsLCAnZGF0ZScsIG51bGwsIGRpYWxvZylcbiAgICAgICAgICAgIGlmKGVkaXREdWVEYXRlKSBpbnB1dER1ZURhdGUudmFsdWUgPSBlZGl0RHVlRGF0ZVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yc1N1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgbW9kYWwtYWRkdGFzay1zZWxlY3RvcnNzdWJkaXZgLCBudWxsLCBudWxsLCBudWxsLCBkaWFsb2cpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0U2VsZWN0UHJpb3JpdHkgPSBjcmVhdGVIdG1sRWxlbWVudCgnc2VsZWN0JywgJ21vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHknLCBudWxsLCBudWxsLCBudWxsLCBzZWxlY3RvcnNTdWJEaXYpXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdvcHRpb24nLCBgbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eS1sb3dgLCBudWxsLCBudWxsLCAnTG93JywgaW5wdXRTZWxlY3RQcmlvcml0eSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxvdy52YWx1ZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5Tm9ybWFsID0gY3JlYXRlSHRtbEVsZW1lbnQoJ29wdGlvbicsIGBtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5LW5vcm1hbGAsIG51bGwsIG51bGwsICdObyBQcmlvcml0eScsIGlucHV0U2VsZWN0UHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlOb3JtYWwudmFsdWUgPSAxXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlOb3JtYWwuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBjcmVhdGVIdG1sRWxlbWVudCgnb3B0aW9uJywgYG1vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHktaGlnaGAsIG51bGwsIG51bGwsICdIaWdoJywgaW5wdXRTZWxlY3RQcmlvcml0eSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2gudmFsdWUgPSAyXG4gICAgICAgICAgICAgICAgaWYoZWRpdFByaW9yaXR5ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXRQcmlvcmlyeTogJyArIGVkaXRQcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lucHV0U2VsZWN0UHJpb3JpdHkuc2VsZWN0ZWRJbmRleDogJyArIGlucHV0U2VsZWN0UHJpb3JpdHkuc2VsZWN0ZWRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRTZWxlY3RQcmlvcml0eS5zZWxlY3RlZEluZGV4ID0gZWRpdFByaW9yaXR5fVxuXG4gICAgICAgIGNvbnN0IGlucHV0U2VsZWN0UHJvamVjdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWxlY3QnLCAnbW9kYWwtYWRkdGFzay1pbnB1dC1zZWxlY3QtcHJvamVjdCcsIG51bGwsIG51bGwsIG51bGwsIHNlbGVjdG9yc1N1YkRpdilcbiAgICAgICAgICAgIFN0b3JhZ2UuZ2V0TGlzdCgpLl9nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zUHJvamVjdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdvcHRpb24nLCBgbW9kYWwtYWRkdGFzay1pbnB1dC1vcHRpb24tcHJvaiR7cHJvamVjdC5nZXRUaXRsZSgpfWAsIG51bGwsIG51bGwsIHByb2plY3QuZ2V0VGl0bGUoKSwgaW5wdXRTZWxlY3RQcm9qZWN0KVxuICAgICAgICAgICAgICAgIGlmKGVkaXRQYXJlbnRQcm9qZWN0ICYmIChvcHRpb25zUHJvamVjdC52YWx1ZSA9PT0gZWRpdFBhcmVudFByb2plY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNQcm9qZWN0LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKCFlZGl0UGFyZW50UHJvamVjdCAmJiAob3B0aW9uc1Byb2plY3QudmFsdWUgPT09IExpc3RlbmVycy5jdXJyZW50UHJvamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9uc1Byb2plY3QudmFsdWUgPSBwcm9qZWN0LmdldFRpdGxlKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdtb2RhbC1hZGR0YXNrLXN1Ym1pdGJ0bicsIG51bGwsICdidXR0b24nLCAnQWRkJywgZGlhbG9nKVxuICAgICAgICAgICAgaWYgKGVkaXRUaXRsZSkgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdFZGl0J1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckRpYWxvZ0FkZFByb2ogPSAoZWRpdFRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaWFsb2cnLCAnbW9kYWwtYWRkcHJvai1kaWFsb2cnLG51bGwsbnVsbCxudWxsLGNvbnRlbnQpXG5cbiAgICAgICAgY29uc3QgaGVhZGVyU3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBtb2RhbC1hZGRwcm9qLWhlYWRlcnN1YmRpdmAsIG51bGwsIG51bGwsIG51bGwsIGRpYWxvZyk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ21vZGFsLWFkZHByb2otY2xvc2VidG4nLCBudWxsLCBudWxsLCBudWxsLCBoZWFkZXJTdWJEaXYpXG4gICAgICAgICAgICBjbG9zZUJ0bi5zcmMgPSBpY29uRXNjXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnbW9kYWwtYWRkcHJvai1oMicsIG51bGwsIG51bGwsICdOZXcgUHJvamVjdCcsIGhlYWRlclN1YkRpdilcbiAgICAgICAgaWYoZWRpdFRpdGxlKSB0aXRsZS5pbm5lclRleHQgPSAnRWRpdCBwcm9qZWN0J1xuXG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW5wdXQnLCBgbW9kYWwtYWRkcHJvai1pbnB1dC10aXRsZWAsIG51bGwsICd0ZXh0JywgbnVsbCwgZGlhbG9nKVxuICAgICAgICBpZihlZGl0VGl0bGUpIGlucHV0VGl0bGUudmFsdWUgPSBlZGl0VGl0bGVcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgYG1vZGFsLWFkZHByb2otc3VibWl0YnRuYCwgbnVsbCwgJ2J1dHRvbicsICdBZGQnLCBkaWFsb2cpXG4gICAgfVxuXG5cbiAgICByZXR1cm4geyByZW5kZXJUYXNrcywgcmVuZGVyUHJvamVjdHMsIHJlbmRlckFkZEJ1dHRvbnMsIHJlbmRlckRpYWxvZ0FkZFByb2osIHJlbmRlckRpYWxvZ0FkZFRhc2ssIHJlbmRlckRpYWxvZ0RlbGV0ZSwgcmVmcmVzaFBhZ2UgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBEb20iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiXG5pbXBvcnQgRG9tIGZyb20gXCIuL0RPTVwiXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdGVuZXJzIHtcblxuICAgIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9ICcnIHx8IFN0b3JhZ2UuZ2V0TGlzdCgpLl9nZXRQcm9qZWN0cygpWzBdLmdldFRpdGxlKCkgLy8gfHwgZm9yICBpbml0aWFsaXphdGlvblxuICAgIFxuICAgIHN0YXRpYyBnZXRDdXJyZW50TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIExpc3RlbmVycy5jdXJyZW50UHJvamVjdCA9IHByb2plY3ROYW1lXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQYWdlKCkge1xuICAgICAgICAgICAgXG4gICAgICAgIERvbS5yZWZyZXNoUGFnZShMaXN0ZW5lcnMuY3VycmVudFByb2plY3QpXG4gICAgICAgIExpc3RlbmVycy5pbml0RG9tRWxlbWVudHMoKVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdE5ld1Byb2plY3REaWFsb2coKVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdE5ld1Rhc2tEaWFsb2coKVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdEVkaXREaWFsb2coKVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdERlbGV0ZURpYWxvZygpXG5cbiAgICAgICAgY29uc29sZS5sb2coTGlzdGVuZXJzLmdldEN1cnJlbnRMaXN0KCkpXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdERvbUVsZW1lbnRzKCkge1xuXG4gICAgICAgIC8vPT09PSBIT1ZFUiBUQVNLID09PS8vXG4gICAgICAgIGNvbnN0IHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kaXYnKVxuXG4gICAgICAgIHREaXYuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBzZWN0aW9uLmlkLnNsaWNlKDYpXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvU2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0LXJpZ2h0c3ViZGl2LSR7dGFza0lkfWApXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvU2hvdy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IHNlY3Rpb24uaWQuc2xpY2UoNilcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50VG9IaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHQtcmlnaHRzdWJkaXYtJHt0YXNrSWR9YClcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9IaWRlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLz09PT0gSE9WRVIgUFJPSiA9PT0vL1xuICAgICAgICBjb25zdCBwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otZGl2JylcblxuICAgICAgICBwRGl2LmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvak5hbWUgPSBzZWN0aW9uLmlkLnNsaWNlKDYpXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvU2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwLXJpZ2h0c3ViZGl2LSR7cHJvak5hbWV9YClcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9TaG93LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvak5hbWUgPSBzZWN0aW9uLmlkLnNsaWNlKDYpXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvSGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwLXJpZ2h0c3ViZGl2LSR7cHJvak5hbWV9YClcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9IaWRlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay10MycpXG5cbiAgICAgICAgLy89PT09IFNFTEVDVCBQUk9KID09PS8vXG4gICAgICAgIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLXQyJylcblxuICAgICAgICBwVGl0bGUuZm9yRWFjaCh0aXRsZSA9PiB7XG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBMaXN0ZW5lcnMuc2V0Q3VycmVudFByb2plY3QodGl0bGUuaWQuc2xpY2UoNSkpXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKCkgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vPT09PSBDSEVDSyBUQVNLID09PS8vXG4gICAgICAgIGNvbnN0IHRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrYm94JylcblxuICAgICAgICB0Q2hlY2tib3guZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0lkID0gY2hlY2tib3guaWQuc2xpY2UoMTEpXG5cbiAgICAgICAgICAgICAgICBTdG9yYWdlLmNoZWNrVGFzayhTdG9yYWdlLmdldFRhc2tQYXJlbnQodGFza0lkKSwgdGFza0lkLCBjaGVja2JveC5jaGVja2VkKVxuICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vPT09PSBFRElUIERJQUxPRyA9PT0vL1xuICAgIHN0YXRpYyBpbml0RWRpdERpYWxvZygpIHsgICAgXG4gICAgICAgIC8vVGFza0RpYWxvZyBlbDogYWRkVGFzazsgYWN0aW9uczogYWRkTmV3VGFzaygpLCByZW1vdmVUYXNrKClcbiAgICAgICAgY29uc3QgdEVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0YnRuJylcblxuICAgICAgICB0RWRpdEJ0bi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0lkID0gYnV0dG9uLmlkLnNsaWNlKDEwKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0UGFyZW50ID0gU3RvcmFnZS5nZXRUYXNrUGFyZW50KHRhc2tJZClcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gU3RvcmFnZS5nZXRUYXNrT2JqKHRhc2tQcm9qZWN0UGFyZW50LCB0YXNrSWQpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFzay5nZXRUaXRsZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFzay5nZXREZXNjcmlwdGlvbigpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrLmdldER1ZURhdGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2suZ2V0UHJpb3JpdHkoKVxuXG4gICAgICAgICAgICAgICAgRG9tLnJlbmRlckRpYWxvZ0FkZFRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJvamVjdFBhcmVudCwgdGFza1ByaW9yaXR5KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1kaWFsb2cnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrTmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC10aXRsZScpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2tOZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LWRlc2NyaXB0aW9uJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFza05ld0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1kdWVkYXRlJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eScpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2tQcm9qU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtc2VsZWN0LXByb2plY3QnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2stc3VibWl0YnRuJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFza0Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2stY2xvc2VidG4nKVxuICAgIFxuICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRUYXNrLnNob3dNb2RhbCgpXG5cbiAgICAgICAgICAgICAgICBkaWFsb2dFZGl0VGFza1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5hZGRUYXNrKGRpYWxvZ0VkaXRUYXNrUHJvalNlbGVjdC52YWx1ZSwgZGlhbG9nRWRpdFRhc2tOZXdUaXRsZS52YWx1ZSwgZGlhbG9nRWRpdFRhc2tOZXdEZXNjcmlwdGlvbi52YWx1ZSwgZGlhbG9nRWRpdFRhc2tOZXdEdWVEYXRlLnZhbHVlLCBkaWFsb2dBZGRUYXNrUHJpb3JpdHkudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuZGVsZXRlVGFzayh0YXNrUHJvamVjdFBhcmVudCwgdGFza0lkKSBcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRWRpdFRhc2suY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZGlhbG9nRWRpdFRhc2tDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRWRpdFRhc2suY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIFxuICAgICAgICAvL1Byb2plY3REaWFsb2cgZWw6IGFkZFByb2plY3QoKTsgYWN0aW9uOiBlZGl0UHJvamVjdFxuICAgICAgICBjb25zdCBwRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWVkaXRidG4nKVxuXG4gICAgICAgIHBFZGl0QnRuLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qVGl0bGUgPSBidXR0b24uaWQuc2xpY2UoMTApO1xuXG4gICAgICAgICAgICAgICAgRG9tLnJlbmRlckRpYWxvZ0FkZFByb2oocHJvalRpdGxlKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1kaWFsb2cnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRQcm9qTmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1pbnB1dC10aXRsZScpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFByb2pTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1zdWJtaXRidG4nKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRQcm9qQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1jbG9zZWJ0bicpXG5cbiAgICAgICAgICAgICAgICBkaWFsb2dFZGl0UHJvai5zaG93TW9kYWwoKVxuXG4gICAgICAgICAgICAgICAgZGlhbG9nRWRpdFByb2pTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRpYWxvZ0VkaXRQcm9qTmV3VGl0bGUudmFsdWUuaW5jbHVkZXMoJyAnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3BhY2UgaXMgbm90IGFsbG93ZWQgaGVyZS4gXFxuUGxlYXNlLCBjaG9vc2UgYSBkaWZmZXJlbnQgbmFtZSBvciB1c2VcXCdfXFwnLicpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5lZGl0UHJvamVjdChwcm9qVGl0bGUsIGRpYWxvZ0VkaXRQcm9qTmV3VGl0bGUudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhTdG9yYWdlLmdldExpc3QoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRQcm9qLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRQcm9qQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRQcm9qLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLz09PT0gRElBTE9HIERFTEVURSA9PT0vL1xuICAgIHN0YXRpYyBpbml0RGVsZXRlRGlhbG9nKCkge1xuICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otZGVsZXRlYnRuLCAudGFzay1kZWxldGVidG4nKVxuXG4gICAgICAgIGRlbGV0ZUJ0bi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBEb20ucmVuZGVyRGlhbG9nRGVsZXRlKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZGlhbG9nRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlbGV0ZS1kaWFsb2cnKVxuICAgICAgICAgICAgICAgIGxldCBkaWFsb2dEZWxldGVTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVsZXRlLXN1Ym1pdGJ0bicpXG4gICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0RlbGV0ZUNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlbGV0ZS1jbG9zZWJ0bicpXG4gICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0RlbGV0ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlbGV0ZS1oMicpXG4gICAgICAgICAgICAgICAgbGV0IGlzUHJvamVjdCA9IGJ1dHRvbi5pZC5zdGFydHNXaXRoKCdwJylcblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgZGlhbG9nRGVsZXRlLnNob3dNb2RhbCgpXG5cbiAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGVUaXRsZS5pbm5lclRleHQgPSBpc1Byb2plY3QgP1xuICAgICAgICAgICAgICAgICAgICBgRGVsZXRlIFByb2plY3QgJyR7YnV0dG9uLmlkLnNsaWNlKDEyKX0nP2AgOlxuICAgICAgICAgICAgICAgICAgICBgRGVsZXRlIFRhc2sgJyR7YnV0dG9uLmlkLnNsaWNlKDEyKX0nP2BcblxuICAgICAgICAgICAgICAgIGRpYWxvZ0RlbGV0ZVN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNQcm9qZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbi5pZC5zbGljZSgxMikgIT09IExpc3RlbmVycy5jdXJyZW50UHJvamVjdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVQcm9qZWN0KGJ1dHRvbi5pZC5zbGljZSgxMikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTb3JyeSwgY2Fubm90IGRlbGV0ZSBjdXJyZW50IHByb2plY3QsIHlldC4uLlxcbkNob29zZSBhbm90aGVyIHByb2plY3QsIHRoZW4gZGVsZXRlIHRoaXMgb25lLicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVRhc2soU3RvcmFnZS5nZXRUYXNrUGFyZW50KGJ1dHRvbi5pZC5zbGljZSgxMikpLCBidXR0b24uaWQuc2xpY2UoMTIpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0RlbGV0ZS5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGVDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRGVsZXRlLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLz09PT0gRElBTE9HIEFERCBORVcgVEFTSyA9PT0vL1xuICAgIHN0YXRpYyBpbml0TmV3VGFza0RpYWxvZygpIHtcbiAgICAgICAgbGV0IHRBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1hZGRidG4nKVxuXG4gICAgICAgIHRBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIERvbS5yZW5kZXJEaWFsb2dBZGRUYXNrKClcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWRpYWxvZycpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC10aXRsZScpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbicpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGUnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHknKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza1Byb2pTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1zZWxlY3QtcHJvamVjdCcpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2stc3VibWl0YnRuJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWNsb3NlYnRuJylcblxuICAgICAgICAgICAgZGlhbG9nQWRkVGFzay5zaG93TW9kYWwoKVxuXG4gICAgICAgICAgICBkaWFsb2dBZGRUYXNrU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayhkaWFsb2dBZGRUYXNrUHJvalNlbGVjdC52YWx1ZSwgZGlhbG9nQWRkVGFza1RpdGxlLnZhbHVlLCBkaWFsb2dBZGRUYXNrRGVzY3JpcHRpb24udmFsdWUsIGRpYWxvZ0FkZFRhc2tEdWVEYXRlLnZhbHVlLCBkaWFsb2dBZGRUYXNrUHJpb3JpdHkudmFsdWUpXG4gICAgICAgICAgICAgICAgZGlhbG9nQWRkVGFzay5jbG9zZSgpXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHVzaGVkIHN1Ym1pdCBhZGQgdGFzayEgJyArIGRpYWxvZ0FkZFRhc2tUaXRsZS52YWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkaWFsb2dBZGRUYXNrQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlhbG9nQWRkVGFzay5jbG9zZSgpXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vPT09PSBESUFMT0cgQUREIE5FVyBQUk9KRUNUID09PS8vXG5cbiAgICBzdGF0aWMgaW5pdE5ld1Byb2plY3REaWFsb2coKXtcbiAgICAgICAgbGV0IHBBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1hZGRidG4nKVxuXG4gICAgICAgIHBBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBEb20ucmVuZGVyRGlhbG9nQWRkUHJvaigpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1kaWFsb2cnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkUHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otaW5wdXQtdGl0bGUnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkUHJvalN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLXN1Ym1pdGJ0bicpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRQcm9qQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1jbG9zZWJ0bicpXG5cbiAgICAgICAgICAgIGRpYWxvZ0FkZFByb2ouc2hvd01vZGFsKClcblxuICAgICAgICAgICAgZGlhbG9nQWRkUHJvalN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihkaWFsb2dBZGRQcm9qVGl0bGUudmFsdWUuaW5jbHVkZXMoJyAnKSl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTcGFjZSBpcyBub3QgYWxsb3dlZCBoZXJlLiBcXG5QbGVhc2UsIGNob29zZSBhIGRpZmZlcmVudCBuYW1lIG9yIHVzZVxcJ19cXCcuJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChkaWFsb2dBZGRQcm9qVGl0bGUudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0FkZFByb2ouY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHVzaGVkIGFkZFByb2ogJyArIGRpYWxvZ0FkZFByb2pUaXRsZS52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGlhbG9nQWRkUHJvakNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpYWxvZ0FkZFByb2ouY2xvc2UoKVxuICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfTtcblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cblxuICAgIGdldFRhc2soaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpXG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgfVxuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cblxuICAgIHNldFRhc2tzKHRhc2tzKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVRhc2soaWQpe1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0SWQoKSAhPT0gaWQpXG4gICAgfVxuXG4gICAgZWRpdFByb2plY3QobmV3VGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcblxuICAgIHN0YXRpYyBnZXRMaXN0KCkge1xuICAgICAgICBjb25zdCBkYXRhTGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBuZXcgQ29udGFpbmVyKCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2l0X2FwcCcpKVxuICAgICAgICApXG4gICAgICAgIGRhdGFMaXN0Ll9zZXRQcm9qZWN0cyhcbiAgICAgICAgICAgIGRhdGFMaXN0Ll9nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgZGF0YUxpc3QuX2dldFByb2plY3RzKClcbiAgICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2V0VGFza3MoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpXG4gICAgICAgICAgICAgICAgLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGFMaXN0O1xuICAgIH07XG4gICAgICBcbiAgICBzdGF0aWMgc2F2ZUxpc3QoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG9pdF9hcHAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRhc2tQYXJlbnQodGFza0lkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KCkuX2dldFByb2plY3RzKCk7XG4gICAgXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gcHJvamVjdC5nZXRUYXNrcygpLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQgZm91bmQ6ICcgKyBwcm9qZWN0LmdldFRpdGxlKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VGFza09iaihwcm9qZWN0VGl0bGUsIHRhc2tJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZnJvbSBzdG9yYWdlIGdldFRhc2tPYmohJyArIHByb2plY3RUaXRsZSArICcsICcgKyB0YXNrSWQpXG4gICAgICAgcmV0dXJuIFN0b3JhZ2UuZ2V0TGlzdCgpLl9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZ2V0VGFzayh0YXNrSWQpXG4gICAgfVxuICAgIFxuICAgIC8vPT0vPT0vL1xuXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KClcbiAgICAgICAgY3VycmVudExpc3QuX2FkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdFRpdGxlKSlcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdClcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSwgdGFza0Rlc2N0aXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KClcbiAgICAgICAgY3VycmVudExpc3QuX2dldFByb2plY3QocHJvamVjdFRpdGxlKS5hZGRUYXNrKG5ldyBUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2N0aXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KSlcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdCkgICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9kZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdCkgICAgICAgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tJZCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KSBcbiAgICB9XG5cbiAgICBzdGF0aWMgZWRpdFByb2plY3QocHJvamVjdFRpdGxlLCBuZXdUaXRsZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZWRpdFByb2plY3QobmV3VGl0bGUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KVxuICAgIH1cblxuICAgIHN0YXRpYyBjaGVja1Rhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUsIGlzQ2hlY2tlZCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZ2V0VGFzayh0YXNrVGl0bGUpLnNldENoZWNrZWQoaXNDaGVja2VkKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdClcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmlkID0gYCR7KHRpdGxlIHx8ICdfJykudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9LSR7RGF0ZS5ub3coKX1gXG4gICAgfTtcblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGVcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlX2Rpc3RhbmNlRnJvbSgpe1xuICAgICAgICByZXR1cm4gZm9ybWF0RGlzdGFuY2UodGhpcy5nZXREdWVEYXRlKCksIG5ldyBEYXRlKCksIHsgYWRkU3VmZml4OiB0cnVlIH0pXG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5XG4gICAgfVxuXG4gICAgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkXG4gICAgfVxuXG4gICAgc2V0Q2hlY2tlZChjaGVjaykge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldFRpdGxlKCkgKyAnIHdhcyBjaGVja2VkISAnICsgdGhpcy5jaGVja2VkICsgY2hlY2spXG4gICAgfVxuXG4gICAgaXNDaGVja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2VkXG4gICAgfVxuXG59IiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiAobnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgcm91bmQgPSBtZXRob2QgPyBNYXRoW21ldGhvZF0gOiBNYXRoLnRydW5jO1xuICAgIGNvbnN0IHJlc3VsdCA9IHJvdW5kKG51bWJlcik7XG4gICAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICpcbiAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IGRpZmYgPSBfZGF0ZUxlZnQuZ2V0VGltZSgpIC0gX2RhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb21wYXJlQXNjO1xuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3QgeWVhckRpZmYgPSBfZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIF9kYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGhEaWZmID0gX2RhdGVMZWZ0LmdldE1vbnRoKCkgLSBfZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG5cbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZUxlZnQpIC0gK3RvRGF0ZShkYXRlUmlnaHQpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcztcbiIsImltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tIFwiLi9jb21wYXJlQXNjLm1qc1wiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy5tanNcIjtcbmltcG9ydCB7IGlzTGFzdERheU9mTW9udGggfSBmcm9tIFwiLi9pc0xhc3REYXlPZk1vbnRoLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3Qgc2lnbiA9IGNvbXBhcmVBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KTtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKFxuICAgIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKF9kYXRlTGVmdCwgX2RhdGVSaWdodCksXG4gICk7XG4gIGxldCByZXN1bHQ7XG5cbiAgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChfZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gMSAmJiBfZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIF9kYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG5cbiAgICBfZGF0ZUxlZnQuc2V0TW9udGgoX2RhdGVMZWZ0LmdldE1vbnRoKCkgLSBzaWduICogZGlmZmVyZW5jZSk7XG5cbiAgICAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcbiAgICBsZXQgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpID09PSAtc2lnbjtcblxuICAgIC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuICAgIGlmIChcbiAgICAgIGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRhdGVMZWZ0KSkgJiZcbiAgICAgIGRpZmZlcmVuY2UgPT09IDEgJiZcbiAgICAgIGNvbXBhcmVBc2MoZGF0ZUxlZnQsIF9kYXRlUmlnaHQpID09PSAxXG4gICAgKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH1cblxuICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluTW9udGhzO1xuIiwiaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi9fbGliL2dldFJvdW5kaW5nTWV0aG9kLm1qc1wiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZGlmZmVyZW5jZUluU2Vjb25kc30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucz8ucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJblNlY29uZHM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGVuZCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kT2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuZE9mRGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGVuZCBvZiBhIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kT2ZNb250aChkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBtb250aCA9IF9kYXRlLmdldE1vbnRoKCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIF9kYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlbmRPZk1vbnRoO1xuIiwiaW1wb3J0IHsgY29tcGFyZUFzYyB9IGZyb20gXCIuL2NvbXBhcmVBc2MubWpzXCI7XG5pbXBvcnQgeyBtaW51dGVzSW5EYXksIG1pbnV0ZXNJbk1vbnRoIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluTW9udGhzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluTW9udGhzLm1qc1wiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluU2Vjb25kcyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJblNlY29uZHMubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdERpc3RhbmNlfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZVxuICogQHBhcmFtIGJhc2VEYXRlIC0gVGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuICBjb25zdCBtaW51dGVzSW5BbG1vc3RUd29EYXlzID0gMjUyMDtcblxuICBjb25zdCBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkYXRlLCBiYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHRpbWUgdmFsdWVcIik7XG4gIH1cblxuICBjb25zdCBsb2NhbGl6ZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgYWRkU3VmZml4OiBvcHRpb25zPy5hZGRTdWZmaXgsXG4gICAgY29tcGFyaXNvbjogY29tcGFyaXNvbixcbiAgfSk7XG5cbiAgbGV0IGRhdGVMZWZ0O1xuICBsZXQgZGF0ZVJpZ2h0O1xuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShiYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShiYXNlRGF0ZSk7XG4gIH1cblxuICBjb25zdCBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgY29uc3Qgb2Zmc2V0SW5TZWNvbmRzID1cbiAgICAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC1cbiAgICAgIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvXG4gICAgMTAwMDtcbiAgY29uc3QgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICBsZXQgbW9udGhzO1xuXG4gIC8vIDAgdXAgdG8gMiBtaW5zXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zPy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJsZXNzVGhhblhTZWNvbmRzXCIsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YU2Vjb25kc1wiLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJsZXNzVGhhblhTZWNvbmRzXCIsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImhhbGZBTWludXRlXCIsIDAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YTWludXRlc1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNaW51dGVzXCIsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJsZXNzVGhhblhNaW51dGVzXCIsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwieE1pbnV0ZXNcIiwgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwieE1pbnV0ZXNcIiwgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwiYWJvdXRYSG91cnNcIiwgMSwgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IG1pbnV0ZXNJbkRheSkge1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJhYm91dFhIb3Vyc1wiLCBob3VycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBtaW51dGVzSW5BbG1vc3RUd29EYXlzKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhEYXlzXCIsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBtaW51dGVzSW5Nb250aCkge1xuICAgIGNvbnN0IGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBtaW51dGVzSW5EYXkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJ4RGF5c1wiLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBtaW51dGVzSW5Nb250aCAqIDIpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBtaW51dGVzSW5Nb250aCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImFib3V0WE1vbnRoc1wiLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG5cbiAgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIGNvbnN0IG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIG1pbnV0ZXNJbk1vbnRoKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwieE1vbnRoc1wiLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgY29uc3QgeWVhcnMgPSBNYXRoLnRydW5jKG1vbnRocyAvIDEyKTtcblxuICAgIC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImFib3V0WFllYXJzXCIsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgICAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwib3ZlclhZZWFyc1wiLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgICAgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJhbG1vc3RYWWVhcnNcIiwgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlO1xuIiwiaW1wb3J0IHsgZW5kT2ZEYXkgfSBmcm9tIFwiLi9lbmRPZkRheS5tanNcIjtcbmltcG9ydCB7IGVuZE9mTW9udGggfSBmcm9tIFwiLi9lbmRPZk1vbnRoLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzTGFzdERheU9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMjggRmVicnVhcnkgMjAxNCB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiArZW5kT2ZEYXkoX2RhdGUpID09PSArZW5kT2ZNb250aChfZGF0ZSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNMYXN0RGF5T2ZNb250aDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbW9kdWxlcy9TdG9yYWdlXCI7XG5pbXBvcnQgTGlzdGVuZXJzIGZyb20gXCIuL21vZHVsZXMvTGlzdGVuZXJzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbmNvbnN0IGRlbW9Jbml0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KCdkZWZhdWx0JylcbiAgICBTdG9yYWdlLmFkZFByb2plY3QoJ1Nob3AnKVxuICAgIFN0b3JhZ2UuYWRkUHJvamVjdCgnV29yaycpXG5cbiAgICBTdG9yYWdlLmFkZFRhc2soJ2RlZmF1bHQnLCAnQ2xlYW4gcm9vbScsICdPcmdhbml6ZSBjbG90aGVzIGFuZCBmdXJuaXR1cmUuJywgJzIwMjMtMDMtMTInLCAnMScpXG4gICAgU3RvcmFnZS5hZGRUYXNrKCdTaG9wJywgJ0J1eSBncm9jZXJpZXMnLCAnR2V0IGJyZWFkLCBtaWxrLCBlZ2dzLCBhbmQgdmVnZXRhYmxlcy4nLCAnMjAyMy0wMy0xNScsICcyJylcbiAgICBTdG9yYWdlLmFkZFRhc2soJ2RlZmF1bHQnLCAnV2FsayBkb2cnLCAnVGFrZSBDaGFybGllIHRvIHRoZSBwYXJrIGZvciBleGVyY2lzZS4nLCAnMjAyMy0wMy0xNycsICcwJylcbiAgICBTdG9yYWdlLmFkZFRhc2soJ1dvcmsnLCAnU3R1ZHkgbWF0aCcsICdSZXZpZXcgY2hhcHRlciA1IG9uIGxpbmVhciBlcXVhdGlvbnMuJywgJzIwMjMtMDMtMjAnLCAnMScpXG4gICAgU3RvcmFnZS5hZGRUYXNrKCdXb3JrJywgJ0VtYWlsIHRlYW0nLCAnU2VuZCB3ZWVrbHkgcmVwb3J0IGFuZCBzY2hlZHVsZSBtZWV0aW5nLicsICcyMDIzLTAzLTIyJywgJzInKVxuICAgIFxuICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgLy9TdG9yYWdlLmRlbGV0ZVByb2plY3QoJ1Nob3AnKVxuICAgIC8vU3RvcmFnZS5kZWxldGVUYXNrKCdXb3JrJywnRW1haWwgdGVhbScpXG59XG5cbmNvbnN0IHJlc2V0ID0gKCkgPT4gbG9jYWxTdG9yYWdlLmNsZWFyKClcblxuXG4vKiBpZighU3RvcmFnZS5nZXRMaXN0KCkpe1xuICAgIGRlbW9Jbml0KClcbiAgICBjb25zb2xlLmxvZygncnVuIGRlbW8gZGF0YSEnKVxufSAqL1xuXG5kZW1vSW5pdCgpXG5cbkxpc3RlbmVycy5sb2FkUGFnZSgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==