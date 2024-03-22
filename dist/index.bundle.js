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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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



const Dom = (() => {
    const content = document.querySelector('#content')
    const panel = document.querySelector('#panel')

    function refreshPage (currentProject) {
        const list = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getList();
        content.innerHTML = ''
        panel.innerHTML = ''
        console.log('from refresh list ' + currentProject)
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

    const renderProjects = (projects) => {
        projects.forEach((project) => {
            const name = project.getTitle()

            const div = createHtmlElement('div', `p-div-${name}`, ['proj-div'], null, null, panel);
            
            const title = createHtmlElement('t2', `p-t2-${name}` ,['proj-t2'], null, name, div);

            const rightSubDiv = createHtmlElement('div', `p-rightsubdiv-${name}`, ['proj-rightsubdiv'], null, null, div);

            const editBtn = createHtmlElement('button',`p-editbtn-${name}`,['proj-editbtn'],'button','edit',rightSubDiv);

            const deleteBtn = createHtmlElement('button', `p-deletebtn-${name}`, ['proj-deletebtn'], 'button', 'delete', rightSubDiv);
        })
    }
    
    const renderTasks = (tasks) => {
        tasks.forEach((task) => {
            const name = task.getTitle().toLowerCase().split(" ").join("_")

            const div = createHtmlElement('div',`t-div-${name}`,['task-div'],null,null,content);

            const leftSubDiv = createHtmlElement('div', `t-leftsubdiv-${name}`, ['task-leftsubdiv'], null, null, div);

            const checkbox = createHtmlElement('input', `t-checkbox-${task.getId()}`, ['task-checkbox'], 'checkbox', null, leftSubDiv);
            checkbox.checked = task.isChecked() 

            const title = createHtmlElement( 't3', `t-t3-${name}`, ['task-t3'], null, task.getTitle(), leftSubDiv);

            const date = createHtmlElement( 'p', `t-date-${name}`, ['task-date'], null, task.getDueDate(), div);

            const rightSubDiv = createHtmlElement('div', `t-rightsubdiv-${name}`, ['task-rightsubdiv'], null, null, div);

            const priority = createHtmlElement('p', `t-priority-${name}`, ['task-priority'], null, task.getPriorityDecode(), rightSubDiv);
            console.log(task.getPriorityDecode())

            const editBtn = createHtmlElement('button', `t-editbtn-${task.getId()}`, ['task-editbtn'], 'button', 'edit', rightSubDiv);

            const deleteBtn = createHtmlElement( 'button', `t-deletebtn-${task.getId()}`, ['task-deletebtn'], 'button', 'delete', rightSubDiv);

            if (task.isChecked()) {
                title.style.textDecoration = 'line-through'
                editBtn.style.display = 'none'
            }
        })
    }

    const renderAddButtons = () => {
        const projAddBtn = createHtmlElement('button',`proj-addbtn`,null,'button','+proj',panel,);

        const taskAddBtn = createHtmlElement('button',`task-addbtn`,null,'button','+task',content,);
    }

    const renderDialogDelete = () => {
        const dialog = createHtmlElement('dialog', 'modal-delete-dialog',null,null,null,content)

        const closeBtn = createHtmlElement('button', 'modal-delete-closebtn', null, 'button', 'x', dialog)

        const title = createHtmlElement('h2', 'modal-delete-h2', null, null, 'Confirm Delete?', dialog)

        const submitBtn = createHtmlElement('button', 'modal-delete-submitbtn', null, 'button', 'Delete', dialog)
    }

    const renderDialogAddTask = (editTitle, editDescription, editDueDate, editParentProject, editPriority) => {
        const dialog = createHtmlElement('dialog', 'modal-addtask-dialog',null,null,null,content)

        const closeBtn = createHtmlElement('button', 'modal-addtask-closebtn', null, 'button', 'x', dialog)

        const title = createHtmlElement('h2', 'modal-addtask-h2', null, null, 'New Task', dialog)
            if(editTitle) title.innerText = 'Edit Task'

        const inputTitle = createHtmlElement('input', 'modal-addtask-input-title', null, 'text', null, dialog)
            if(editTitle) inputTitle.value = editTitle

        const inputDescription = createHtmlElement('textarea', 'modal-addtask-input-description', null, null, null, dialog)
        inputDescription.cols = 30
        inputDescription.rows = 3
            if(editDescription) inputDescription.value  = editDescription

        const inputDueDate = createHtmlElement('input', 'modal-addtask-input-duedate', null, 'date', null, dialog)
            if(editDueDate) inputDueDate.value = editDueDate

        const inputSelectPriority = createHtmlElement('select', 'modal-addtask-input-priority', null, null, null, dialog)
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

        const inputSelectProject = createHtmlElement('select', 'modal-addtask-input-select-project', null, null, null, dialog)
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

        const closeBtn = createHtmlElement('button', 'modal-addproj-closebtn', null, 'button', 'x', dialog)

        const title = createHtmlElement('h2', 'modal-addproj-h2', null, null, 'New Project', dialog)
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/modules/DOM.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



class Listeners {

    static currentProject = 'default'
    
    static getCurrentList() {
        return _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getList()
    }

    static setCurrentProject(projectName) {
        Listeners.currentProject = projectName
    }

    static loadPage() {
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].refreshPage(Listeners.currentProject)
        Listeners.initDomElements()
        Listeners.initNewProjectDialog()
        Listeners.initNewTaskDialog()
        Listeners.initEditDialog()
        Listeners.initDeleteDialog()

        console.log(Listeners.getCurrentList())
    }


    static initDomElements() {

        const pDiv = document.querySelectorAll('.proj-div')
        

        const tTitle = document.querySelectorAll('.task-t3')

        //==== SELECT PROJ ===//
        let pTitle = document.querySelectorAll('.proj-t2')

        pTitle.forEach(title => {
            title.addEventListener('click', () => {
                Listeners.setCurrentProject(title.id.slice(5))
                Listeners.loadPage() 
            })
        })

        const tDiv = document.querySelectorAll('.task-div')

        //==== CHECK TASK ===//
        const tCheckbox = document.querySelectorAll('.task-checkbox')

        tCheckbox.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const taskId = checkbox.id.slice(11)

                _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].checkTask(_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskParent(taskId), taskId, checkbox.checked)
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
                const taskProjectParent = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskParent(taskId)
                const task = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskObj(taskProjectParent, taskId)
                const taskTitle = task.getTitle()
                const taskDescription = task.getDescription()
                const taskDueDate = task.getDueDate()
                const taskPriority = task.getPriority()

                _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderDialogAddTask(taskTitle, taskDescription, taskDueDate, taskProjectParent, taskPriority)

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
                    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(dialogEditTaskProjSelect.value, dialogEditTaskNewTitle.value, dialogEditTaskNewDescription.value, dialogEditTaskNewDueDate.value, dialogAddTaskPriority.value)
                    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(taskProjectParent, taskId) 
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

                _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderDialogAddProj(projTitle)

                const dialogEditProj = document.querySelector('#modal-addproj-dialog')
                const dialogEditProjNewTitle = document.querySelector('#modal-addproj-input-title')
                const dialogEditProjSubmitBtn = document.querySelector('#modal-addproj-submitbtn')
                const dialogEditProjCloseBtn = document.querySelector('#modal-addproj-closebtn')

                dialogEditProj.showModal()

                dialogEditProjSubmitBtn.addEventListener('click', () => {
                    if(dialogEditProjNewTitle.value.includes(' ')){
                        alert('Space is not allowed here. \nPlease, choose a different name or use\'_\'.')
                    }else{
                        _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].editProject(projTitle, dialogEditProjNewTitle.value)
                        console.log(_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getList())
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
            let dialogDelete = document.querySelector('#modal-delete-dialog')
            let dialogDeleteSubmitBtn = document.querySelector('#modal-delete-submitbtn')
            let dialogDeleteCloseBtn = document.querySelector('#modal-delete-closebtn')
            let dialogDeleteTitle = document.querySelector('#modal-delete-h2')
            let isProject = button.id.startsWith('p')

            _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderDialogDelete()

            button.addEventListener('click', () => {
                dialogDelete.showModal()
                dialogDeleteTitle.innerText = isProject ?
                    `Delete Project '${button.id.slice(12)}'?` :
                    `Delete Task '${button.id.slice(12)}'?`

                dialogDeleteSubmitBtn.addEventListener('click', () => {
                    if(isProject){
                        _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(button.id.slice(12))
                        }else{
                        _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskParent(button.id.slice(12)), button.id.slice(12))
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

            _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderDialogAddTask()

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
                _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(dialogAddTaskProjSelect.value, dialogAddTaskTitle.value, dialogAddTaskDescription.value, dialogAddTaskDueDate.value, dialogAddTaskPriority.value)
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
            _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].renderDialogAddProj()

            const dialogAddProj = document.querySelector('#modal-addproj-dialog')
            const dialogAddProjTitle = document.querySelector('#modal-addproj-input-title')
            const dialogAddProjSubmitBtn = document.querySelector('#modal-addproj-submitbtn')
            const dialogAddProjCloseBtn = document.querySelector('#modal-addproj-closebtn')

            dialogAddProj.showModal()

            dialogAddProjSubmitBtn.addEventListener('click', () => {
                if(dialogAddProjTitle.value.includes(' ')){
                    alert('Space is not allowed here. \nPlease, choose a different name or use\'_\'.');
                }else{
                    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(dialogAddProjTitle.value)
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

    getPriority() {
        return this.priority
    }

    getPriorityDecode() {
        switch(this.priority){
            case '0': return 'low';
            break
            case '1': return '';
            break
            case '2': return 'high';
            break
        }
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

_modules_Listeners__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSx3REFBTztBQUNYLElBQUksd0RBQU87QUFDWDtBQUNBLElBQUksMERBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gICAgfVxuXG4gICAgX3NldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xuICAgIH1cblxuICAgIF9nZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgICB9XG5cbiAgICBfZ2V0UHJvamVjdCh0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRpdGxlKVxuICAgIH1cblxuICAgIF9hZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgIH1cblxuICAgIF9kZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSAhPT0gcHJvamVjdFRpdGxlKVxuICAgIH1cbn0iLCJpbXBvcnQgTGlzdGVuZXJzIGZyb20gXCIuL0xpc3RlbmVyc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiO1xuXG5jb25zdCBEb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFuZWwnKVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaFBhZ2UgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldExpc3QoKTtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBwYW5lbC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBjb25zb2xlLmxvZygnZnJvbSByZWZyZXNoIGxpc3QgJyArIGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICByZW5kZXJQcm9qZWN0cyhsaXN0Ll9nZXRQcm9qZWN0cygpKVxuICAgICAgICByZW5kZXJUYXNrcyhsaXN0Ll9nZXRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KS5nZXRUYXNrcygpKVxuICAgICAgICByZW5kZXJBZGRCdXR0b25zKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudCh0eXBlLGlkLGFycmF5Q2xhc3NlcyxpblR5cGUsY29udGVudCxhcHBlbmRDaCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYoaWQpIGVsZW1lbnQuaWQgPSBpZDtcbiAgICAgICAgaWYoYXJyYXlDbGFzc2VzKSBhcnJheUNsYXNzZXMuZm9yRWFjaChcbiAgICAgICAgICAgIChteUNsYXNzKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xuICAgICAgICBpZihpblR5cGUpIGVsZW1lbnQudHlwZSA9IGluVHlwZTtcbiAgICAgICAgaWYoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuICAgICAgICBpZihhcHBlbmRDaCkgYXBwZW5kQ2guYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0LmdldFRpdGxlKClcblxuICAgICAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBwLWRpdi0ke25hbWV9YCwgWydwcm9qLWRpdiddLCBudWxsLCBudWxsLCBwYW5lbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3QyJywgYHAtdDItJHtuYW1lfWAgLFsncHJvai10MiddLCBudWxsLCBuYW1lLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCByaWdodFN1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgcC1yaWdodHN1YmRpdi0ke25hbWV9YCwgWydwcm9qLXJpZ2h0c3ViZGl2J10sIG51bGwsIG51bGwsIGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJyxgcC1lZGl0YnRuLSR7bmFtZX1gLFsncHJvai1lZGl0YnRuJ10sJ2J1dHRvbicsJ2VkaXQnLHJpZ2h0U3ViRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIGBwLWRlbGV0ZWJ0bi0ke25hbWV9YCwgWydwcm9qLWRlbGV0ZWJ0biddLCAnYnV0dG9uJywgJ2RlbGV0ZScsIHJpZ2h0U3ViRGl2KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAodGFza3MpID0+IHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRhc2suZ2V0VGl0bGUoKS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKVxuXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JyxgdC1kaXYtJHtuYW1lfWAsWyd0YXNrLWRpdiddLG51bGwsbnVsbCxjb250ZW50KTtcblxuICAgICAgICAgICAgY29uc3QgbGVmdFN1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgdC1sZWZ0c3ViZGl2LSR7bmFtZX1gLCBbJ3Rhc2stbGVmdHN1YmRpdiddLCBudWxsLCBudWxsLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsIGB0LWNoZWNrYm94LSR7dGFzay5nZXRJZCgpfWAsIFsndGFzay1jaGVja2JveCddLCAnY2hlY2tib3gnLCBudWxsLCBsZWZ0U3ViRGl2KTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmlzQ2hlY2tlZCgpIFxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCAndDMnLCBgdC10My0ke25hbWV9YCwgWyd0YXNrLXQzJ10sIG51bGwsIHRhc2suZ2V0VGl0bGUoKSwgbGVmdFN1YkRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVIdG1sRWxlbWVudCggJ3AnLCBgdC1kYXRlLSR7bmFtZX1gLCBbJ3Rhc2stZGF0ZSddLCBudWxsLCB0YXNrLmdldER1ZURhdGUoKSwgZGl2KTtcblxuICAgICAgICAgICAgY29uc3QgcmlnaHRTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYHQtcmlnaHRzdWJkaXYtJHtuYW1lfWAsIFsndGFzay1yaWdodHN1YmRpdiddLCBudWxsLCBudWxsLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgYHQtcHJpb3JpdHktJHtuYW1lfWAsIFsndGFzay1wcmlvcml0eSddLCBudWxsLCB0YXNrLmdldFByaW9yaXR5RGVjb2RlKCksIHJpZ2h0U3ViRGl2KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2suZ2V0UHJpb3JpdHlEZWNvZGUoKSlcblxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBgdC1lZGl0YnRuLSR7dGFzay5nZXRJZCgpfWAsIFsndGFzay1lZGl0YnRuJ10sICdidXR0b24nLCAnZWRpdCcsIHJpZ2h0U3ViRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoICdidXR0b24nLCBgdC1kZWxldGVidG4tJHt0YXNrLmdldElkKCl9YCwgWyd0YXNrLWRlbGV0ZWJ0biddLCAnYnV0dG9uJywgJ2RlbGV0ZScsIHJpZ2h0U3ViRGl2KTtcblxuICAgICAgICAgICAgaWYgKHRhc2suaXNDaGVja2VkKCkpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyQWRkQnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvakFkZEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLGBwcm9qLWFkZGJ0bmAsbnVsbCwnYnV0dG9uJywnK3Byb2onLHBhbmVsLCk7XG5cbiAgICAgICAgY29uc3QgdGFza0FkZEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLGB0YXNrLWFkZGJ0bmAsbnVsbCwnYnV0dG9uJywnK3Rhc2snLGNvbnRlbnQsKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEaWFsb2dEZWxldGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaWFsb2cnLCAnbW9kYWwtZGVsZXRlLWRpYWxvZycsbnVsbCxudWxsLG51bGwsY29udGVudClcblxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnbW9kYWwtZGVsZXRlLWNsb3NlYnRuJywgbnVsbCwgJ2J1dHRvbicsICd4JywgZGlhbG9nKVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ21vZGFsLWRlbGV0ZS1oMicsIG51bGwsIG51bGwsICdDb25maXJtIERlbGV0ZT8nLCBkaWFsb2cpXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdtb2RhbC1kZWxldGUtc3VibWl0YnRuJywgbnVsbCwgJ2J1dHRvbicsICdEZWxldGUnLCBkaWFsb2cpXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRGlhbG9nQWRkVGFzayA9IChlZGl0VGl0bGUsIGVkaXREZXNjcmlwdGlvbiwgZWRpdER1ZURhdGUsIGVkaXRQYXJlbnRQcm9qZWN0LCBlZGl0UHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpYWxvZycsICdtb2RhbC1hZGR0YXNrLWRpYWxvZycsbnVsbCxudWxsLG51bGwsY29udGVudClcblxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnbW9kYWwtYWRkdGFzay1jbG9zZWJ0bicsIG51bGwsICdidXR0b24nLCAneCcsIGRpYWxvZylcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdtb2RhbC1hZGR0YXNrLWgyJywgbnVsbCwgbnVsbCwgJ05ldyBUYXNrJywgZGlhbG9nKVxuICAgICAgICAgICAgaWYoZWRpdFRpdGxlKSB0aXRsZS5pbm5lclRleHQgPSAnRWRpdCBUYXNrJ1xuXG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW5wdXQnLCAnbW9kYWwtYWRkdGFzay1pbnB1dC10aXRsZScsIG51bGwsICd0ZXh0JywgbnVsbCwgZGlhbG9nKVxuICAgICAgICAgICAgaWYoZWRpdFRpdGxlKSBpbnB1dFRpdGxlLnZhbHVlID0gZWRpdFRpdGxlXG5cbiAgICAgICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCd0ZXh0YXJlYScsICdtb2RhbC1hZGR0YXNrLWlucHV0LWRlc2NyaXB0aW9uJywgbnVsbCwgbnVsbCwgbnVsbCwgZGlhbG9nKVxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLmNvbHMgPSAzMFxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnJvd3MgPSAzXG4gICAgICAgICAgICBpZihlZGl0RGVzY3JpcHRpb24pIGlucHV0RGVzY3JpcHRpb24udmFsdWUgID0gZWRpdERlc2NyaXB0aW9uXG5cbiAgICAgICAgY29uc3QgaW5wdXREdWVEYXRlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywgJ21vZGFsLWFkZHRhc2staW5wdXQtZHVlZGF0ZScsIG51bGwsICdkYXRlJywgbnVsbCwgZGlhbG9nKVxuICAgICAgICAgICAgaWYoZWRpdER1ZURhdGUpIGlucHV0RHVlRGF0ZS52YWx1ZSA9IGVkaXREdWVEYXRlXG5cbiAgICAgICAgY29uc3QgaW5wdXRTZWxlY3RQcmlvcml0eSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWxlY3QnLCAnbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eScsIG51bGwsIG51bGwsIG51bGwsIGRpYWxvZylcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TG93ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ29wdGlvbicsIGBtb2RhbC1hZGR0YXNrLWlucHV0LXByaW9yaXR5LWxvd2AsIG51bGwsIG51bGwsICdMb3cnLCBpbnB1dFNlbGVjdFByaW9yaXR5KVxuICAgICAgICAgICAgICAgIHByaW9yaXR5TG93LnZhbHVlID0gMFxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlOb3JtYWwgPSBjcmVhdGVIdG1sRWxlbWVudCgnb3B0aW9uJywgYG1vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHktbm9ybWFsYCwgbnVsbCwgbnVsbCwgJ05vIFByaW9yaXR5JywgaW5wdXRTZWxlY3RQcmlvcml0eSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eU5vcm1hbC52YWx1ZSA9IDFcbiAgICAgICAgICAgICAgICBwcmlvcml0eU5vcm1hbC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdvcHRpb24nLCBgbW9kYWwtYWRkdGFzay1pbnB1dC1wcmlvcml0eS1oaWdoYCwgbnVsbCwgbnVsbCwgJ0hpZ2gnLCBpbnB1dFNlbGVjdFByaW9yaXR5KVxuICAgICAgICAgICAgICAgIHByaW9yaXR5SGlnaC52YWx1ZSA9IDJcbiAgICAgICAgICAgICAgICBpZihlZGl0UHJpb3JpdHkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWRpdFByaW9yaXJ5OiAnICsgZWRpdFByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRTZWxlY3RQcmlvcml0eS5zZWxlY3RlZEluZGV4OiAnICsgaW5wdXRTZWxlY3RQcmlvcml0eS5zZWxlY3RlZEluZGV4KVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFNlbGVjdFByaW9yaXR5LnNlbGVjdGVkSW5kZXggPSBlZGl0UHJpb3JpdHl9XG5cbiAgICAgICAgY29uc3QgaW5wdXRTZWxlY3RQcm9qZWN0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlbGVjdCcsICdtb2RhbC1hZGR0YXNrLWlucHV0LXNlbGVjdC1wcm9qZWN0JywgbnVsbCwgbnVsbCwgbnVsbCwgZGlhbG9nKVxuICAgICAgICAgICAgU3RvcmFnZS5nZXRMaXN0KCkuX2dldFByb2plY3RzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNQcm9qZWN0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ29wdGlvbicsIGBtb2RhbC1hZGR0YXNrLWlucHV0LW9wdGlvbi1wcm9qJHtwcm9qZWN0LmdldFRpdGxlKCl9YCwgbnVsbCwgbnVsbCwgcHJvamVjdC5nZXRUaXRsZSgpLCBpbnB1dFNlbGVjdFByb2plY3QpXG4gICAgICAgICAgICAgICAgaWYoZWRpdFBhcmVudFByb2plY3QgJiYgKG9wdGlvbnNQcm9qZWN0LnZhbHVlID09PSBlZGl0UGFyZW50UHJvamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1Byb2plY3Quc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoIWVkaXRQYXJlbnRQcm9qZWN0ICYmIChvcHRpb25zUHJvamVjdC52YWx1ZSA9PT0gTGlzdGVuZXJzLmN1cnJlbnRQcm9qZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNQcm9qZWN0LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zUHJvamVjdC52YWx1ZSA9IHByb2plY3QuZ2V0VGl0bGUoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ21vZGFsLWFkZHRhc2stc3VibWl0YnRuJywgbnVsbCwgJ2J1dHRvbicsICdBZGQnLCBkaWFsb2cpXG4gICAgICAgICAgICBpZiAoZWRpdFRpdGxlKSBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ0VkaXQnXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRGlhbG9nQWRkUHJvaiA9IChlZGl0VGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpYWxvZycsICdtb2RhbC1hZGRwcm9qLWRpYWxvZycsbnVsbCxudWxsLG51bGwsY29udGVudClcblxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnbW9kYWwtYWRkcHJvai1jbG9zZWJ0bicsIG51bGwsICdidXR0b24nLCAneCcsIGRpYWxvZylcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdtb2RhbC1hZGRwcm9qLWgyJywgbnVsbCwgbnVsbCwgJ05ldyBQcm9qZWN0JywgZGlhbG9nKVxuICAgICAgICBpZihlZGl0VGl0bGUpIHRpdGxlLmlubmVyVGV4dCA9ICdFZGl0IHByb2plY3QnXG5cbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsIGBtb2RhbC1hZGRwcm9qLWlucHV0LXRpdGxlYCwgbnVsbCwgJ3RleHQnLCBudWxsLCBkaWFsb2cpXG4gICAgICAgIGlmKGVkaXRUaXRsZSkgaW5wdXRUaXRsZS52YWx1ZSA9IGVkaXRUaXRsZVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBgbW9kYWwtYWRkcHJvai1zdWJtaXRidG5gLCBudWxsLCAnYnV0dG9uJywgJ0FkZCcsIGRpYWxvZylcbiAgICB9XG5cblxuICAgIHJldHVybiB7IHJlbmRlclRhc2tzLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyQWRkQnV0dG9ucywgcmVuZGVyRGlhbG9nQWRkUHJvaiwgcmVuZGVyRGlhbG9nQWRkVGFzaywgcmVuZGVyRGlhbG9nRGVsZXRlLCByZWZyZXNoUGFnZSB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IERvbSIsImltcG9ydCBEb20gZnJvbSBcIi4vRE9NXCJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lcnMge1xuXG4gICAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gJ2RlZmF1bHQnXG4gICAgXG4gICAgc3RhdGljIGdldEN1cnJlbnRMaXN0KCkge1xuICAgICAgICByZXR1cm4gU3RvcmFnZS5nZXRMaXN0KClcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q3VycmVudFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgTGlzdGVuZXJzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5hbWVcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFBhZ2UoKSB7XG4gICAgICAgIERvbS5yZWZyZXNoUGFnZShMaXN0ZW5lcnMuY3VycmVudFByb2plY3QpXG4gICAgICAgIExpc3RlbmVycy5pbml0RG9tRWxlbWVudHMoKVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdE5ld1Byb2plY3REaWFsb2coKVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdE5ld1Rhc2tEaWFsb2coKVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdEVkaXREaWFsb2coKVxuICAgICAgICBMaXN0ZW5lcnMuaW5pdERlbGV0ZURpYWxvZygpXG5cbiAgICAgICAgY29uc29sZS5sb2coTGlzdGVuZXJzLmdldEN1cnJlbnRMaXN0KCkpXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdERvbUVsZW1lbnRzKCkge1xuXG4gICAgICAgIGNvbnN0IHBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1kaXYnKVxuICAgICAgICBcblxuICAgICAgICBjb25zdCB0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay10MycpXG5cbiAgICAgICAgLy89PT09IFNFTEVDVCBQUk9KID09PS8vXG4gICAgICAgIGxldCBwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai10MicpXG5cbiAgICAgICAgcFRpdGxlLmZvckVhY2godGl0bGUgPT4ge1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLnNldEN1cnJlbnRQcm9qZWN0KHRpdGxlLmlkLnNsaWNlKDUpKVxuICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGl2JylcblxuICAgICAgICAvLz09PT0gQ0hFQ0sgVEFTSyA9PT0vL1xuICAgICAgICBjb25zdCB0Q2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jaGVja2JveCcpXG5cbiAgICAgICAgdENoZWNrYm94LmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGNoZWNrYm94LmlkLnNsaWNlKDExKVxuXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5jaGVja1Rhc2soU3RvcmFnZS5nZXRUYXNrUGFyZW50KHRhc2tJZCksIHRhc2tJZCwgY2hlY2tib3guY2hlY2tlZClcbiAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLz09PT0gRURJVCBESUFMT0cgPT09Ly9cbiAgICBzdGF0aWMgaW5pdEVkaXREaWFsb2coKSB7ICAgIFxuICAgICAgICAvL1Rhc2tEaWFsb2cgZWw6IGFkZFRhc2s7IGFjdGlvbnM6IGFkZE5ld1Rhc2soKSwgcmVtb3ZlVGFzaygpXG4gICAgICAgIGNvbnN0IHRFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZWRpdGJ0bicpXG5cbiAgICAgICAgdEVkaXRCdG4uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGJ1dHRvbi5pZC5zbGljZSgxMClcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdFBhcmVudCA9IFN0b3JhZ2UuZ2V0VGFza1BhcmVudCh0YXNrSWQpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IFN0b3JhZ2UuZ2V0VGFza09iaih0YXNrUHJvamVjdFBhcmVudCwgdGFza0lkKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2suZ2V0VGl0bGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFzay5nZXREdWVEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrLmdldFByaW9yaXR5KClcblxuICAgICAgICAgICAgICAgIERvbS5yZW5kZXJEaWFsb2dBZGRUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1Byb2plY3RQYXJlbnQsIHRhc2tQcmlvcml0eSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2stZGlhbG9nJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFza05ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtdGl0bGUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrTmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbicpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2tOZXdEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtZHVlZGF0ZScpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHknKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRUYXNrUHJvalNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LXNlbGVjdC1wcm9qZWN0JylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0VGFza1N1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLXN1Ym1pdGJ0bicpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRWRpdFRhc2tDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWNsb3NlYnRuJylcbiAgICBcbiAgICAgICAgICAgICAgICBkaWFsb2dFZGl0VGFzay5zaG93TW9kYWwoKVxuXG4gICAgICAgICAgICAgICAgZGlhbG9nRWRpdFRhc2tTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayhkaWFsb2dFZGl0VGFza1Byb2pTZWxlY3QudmFsdWUsIGRpYWxvZ0VkaXRUYXNrTmV3VGl0bGUudmFsdWUsIGRpYWxvZ0VkaXRUYXNrTmV3RGVzY3JpcHRpb24udmFsdWUsIGRpYWxvZ0VkaXRUYXNrTmV3RHVlRGF0ZS52YWx1ZSwgZGlhbG9nQWRkVGFza1ByaW9yaXR5LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVRhc2sodGFza1Byb2plY3RQYXJlbnQsIHRhc2tJZCkgXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRUYXNrLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRUYXNrQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRUYXNrLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgLy9Qcm9qZWN0RGlhbG9nIGVsOiBhZGRQcm9qZWN0KCk7IGFjdGlvbjogZWRpdFByb2plY3RcbiAgICAgICAgY29uc3QgcEVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1lZGl0YnRuJylcblxuICAgICAgICBwRWRpdEJ0bi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvalRpdGxlID0gYnV0dG9uLmlkLnNsaWNlKDEwKTtcblxuICAgICAgICAgICAgICAgIERvbS5yZW5kZXJEaWFsb2dBZGRQcm9qKHByb2pUaXRsZSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otZGlhbG9nJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0UHJvak5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otaW5wdXQtdGl0bGUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0VkaXRQcm9qU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otc3VibWl0YnRuJylcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dFZGl0UHJvakNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otY2xvc2VidG4nKVxuXG4gICAgICAgICAgICAgICAgZGlhbG9nRWRpdFByb2ouc2hvd01vZGFsKClcblxuICAgICAgICAgICAgICAgIGRpYWxvZ0VkaXRQcm9qU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihkaWFsb2dFZGl0UHJvak5ld1RpdGxlLnZhbHVlLmluY2x1ZGVzKCcgJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NwYWNlIGlzIG5vdCBhbGxvd2VkIGhlcmUuIFxcblBsZWFzZSwgY2hvb3NlIGEgZGlmZmVyZW50IG5hbWUgb3IgdXNlXFwnX1xcJy4nKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuZWRpdFByb2plY3QocHJvalRpdGxlLCBkaWFsb2dFZGl0UHJvak5ld1RpdGxlLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coU3RvcmFnZS5nZXRMaXN0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dFZGl0UHJvai5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBkaWFsb2dFZGl0UHJvakNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaWFsb2dFZGl0UHJvai5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy89PT09IERJQUxPRyBERUxFVEUgPT09Ly9cbiAgICBzdGF0aWMgaW5pdERlbGV0ZURpYWxvZygpIHtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWRlbGV0ZWJ0biwgLnRhc2stZGVsZXRlYnRuJylcblxuICAgICAgICBkZWxldGVCdG4uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgbGV0IGRpYWxvZ0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxldGUtZGlhbG9nJylcbiAgICAgICAgICAgIGxldCBkaWFsb2dEZWxldGVTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVsZXRlLXN1Ym1pdGJ0bicpXG4gICAgICAgICAgICBsZXQgZGlhbG9nRGVsZXRlQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVsZXRlLWNsb3NlYnRuJylcbiAgICAgICAgICAgIGxldCBkaWFsb2dEZWxldGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxldGUtaDInKVxuICAgICAgICAgICAgbGV0IGlzUHJvamVjdCA9IGJ1dHRvbi5pZC5zdGFydHNXaXRoKCdwJylcblxuICAgICAgICAgICAgRG9tLnJlbmRlckRpYWxvZ0RlbGV0ZSgpXG5cbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGUuc2hvd01vZGFsKClcbiAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGVUaXRsZS5pbm5lclRleHQgPSBpc1Byb2plY3QgP1xuICAgICAgICAgICAgICAgICAgICBgRGVsZXRlIFByb2plY3QgJyR7YnV0dG9uLmlkLnNsaWNlKDEyKX0nP2AgOlxuICAgICAgICAgICAgICAgICAgICBgRGVsZXRlIFRhc2sgJyR7YnV0dG9uLmlkLnNsaWNlKDEyKX0nP2BcblxuICAgICAgICAgICAgICAgIGRpYWxvZ0RlbGV0ZVN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNQcm9qZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChidXR0b24uaWQuc2xpY2UoMTIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVRhc2soU3RvcmFnZS5nZXRUYXNrUGFyZW50KGJ1dHRvbi5pZC5zbGljZSgxMikpLCBidXR0b24uaWQuc2xpY2UoMTIpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0RlbGV0ZS5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBkaWFsb2dEZWxldGVDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRGVsZXRlLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLz09PT0gRElBTE9HIEFERCBORVcgVEFTSyA9PT0vL1xuICAgIHN0YXRpYyBpbml0TmV3VGFza0RpYWxvZygpIHtcbiAgICAgICAgbGV0IHRBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1hZGRidG4nKVxuXG4gICAgICAgIHRBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIERvbS5yZW5kZXJEaWFsb2dBZGRUYXNrKClcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWRpYWxvZycpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC10aXRsZScpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1kZXNjcmlwdGlvbicpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWlucHV0LWR1ZWRhdGUnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2staW5wdXQtcHJpb3JpdHknKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkVGFza1Byb2pTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkdGFzay1pbnB1dC1zZWxlY3QtcHJvamVjdCcpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRUYXNrU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHRhc2stc3VibWl0YnRuJylcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFRhc2tDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGR0YXNrLWNsb3NlYnRuJylcblxuICAgICAgICAgICAgZGlhbG9nQWRkVGFzay5zaG93TW9kYWwoKVxuXG4gICAgICAgICAgICBkaWFsb2dBZGRUYXNrU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayhkaWFsb2dBZGRUYXNrUHJvalNlbGVjdC52YWx1ZSwgZGlhbG9nQWRkVGFza1RpdGxlLnZhbHVlLCBkaWFsb2dBZGRUYXNrRGVzY3JpcHRpb24udmFsdWUsIGRpYWxvZ0FkZFRhc2tEdWVEYXRlLnZhbHVlLCBkaWFsb2dBZGRUYXNrUHJpb3JpdHkudmFsdWUpXG4gICAgICAgICAgICAgICAgZGlhbG9nQWRkVGFzay5jbG9zZSgpXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHVzaGVkIHN1Ym1pdCBhZGQgdGFzayEgJyArIGRpYWxvZ0FkZFRhc2tUaXRsZS52YWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkaWFsb2dBZGRUYXNrQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlhbG9nQWRkVGFzay5jbG9zZSgpXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vPT09PSBESUFMT0cgQUREIE5FVyBQUk9KRUNUID09PS8vXG5cbiAgICBzdGF0aWMgaW5pdE5ld1Byb2plY3REaWFsb2coKXtcbiAgICAgICAgbGV0IHBBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1hZGRidG4nKVxuXG4gICAgICAgIHBBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBEb20ucmVuZGVyRGlhbG9nQWRkUHJvaigpXG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0FkZFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1kaWFsb2cnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkUHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZHByb2otaW5wdXQtdGl0bGUnKVxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQWRkUHJvalN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGRwcm9qLXN1Ym1pdGJ0bicpXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dBZGRQcm9qQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkcHJvai1jbG9zZWJ0bicpXG5cbiAgICAgICAgICAgIGRpYWxvZ0FkZFByb2ouc2hvd01vZGFsKClcblxuICAgICAgICAgICAgZGlhbG9nQWRkUHJvalN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihkaWFsb2dBZGRQcm9qVGl0bGUudmFsdWUuaW5jbHVkZXMoJyAnKSl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTcGFjZSBpcyBub3QgYWxsb3dlZCBoZXJlLiBcXG5QbGVhc2UsIGNob29zZSBhIGRpZmZlcmVudCBuYW1lIG9yIHVzZVxcJ19cXCcuJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChkaWFsb2dBZGRQcm9qVGl0bGUudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0FkZFByb2ouY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lcnMubG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHVzaGVkIGFkZFByb2ogJyArIGRpYWxvZ0FkZFByb2pUaXRsZS52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGlhbG9nQWRkUHJvakNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpYWxvZ0FkZFByb2ouY2xvc2UoKVxuICAgICAgICAgICAgICAgIExpc3RlbmVycy5sb2FkUGFnZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfTtcblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cblxuICAgIGdldFRhc2soaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpXG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgfVxuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cblxuICAgIHNldFRhc2tzKHRhc2tzKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVRhc2soaWQpe1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0SWQoKSAhPT0gaWQpXG4gICAgfVxuXG4gICAgZWRpdFByb2plY3QobmV3VGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcblxuICAgIHN0YXRpYyBnZXRMaXN0KCkge1xuICAgICAgICBjb25zdCBkYXRhTGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBuZXcgQ29udGFpbmVyKCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2l0X2FwcCcpKVxuICAgICAgICApXG4gICAgICAgIGRhdGFMaXN0Ll9zZXRQcm9qZWN0cyhcbiAgICAgICAgICAgIGRhdGFMaXN0Ll9nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgZGF0YUxpc3QuX2dldFByb2plY3RzKClcbiAgICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2V0VGFza3MoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpXG4gICAgICAgICAgICAgICAgLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGFMaXN0O1xuICAgIH07XG4gICAgICBcbiAgICBzdGF0aWMgc2F2ZUxpc3QoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG9pdF9hcHAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRhc2tQYXJlbnQodGFza0lkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KCkuX2dldFByb2plY3RzKCk7XG4gICAgXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gcHJvamVjdC5nZXRUYXNrcygpLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQgZm91bmQ6ICcgKyBwcm9qZWN0LmdldFRpdGxlKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VGFza09iaihwcm9qZWN0VGl0bGUsIHRhc2tJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZnJvbSBzdG9yYWdlIGdldFRhc2tPYmohJyArIHByb2plY3RUaXRsZSArICcsICcgKyB0YXNrSWQpXG4gICAgICAgcmV0dXJuIFN0b3JhZ2UuZ2V0TGlzdCgpLl9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZ2V0VGFzayh0YXNrSWQpXG4gICAgfVxuICAgIFxuICAgIC8vPT0vPT0vL1xuXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KClcbiAgICAgICAgY3VycmVudExpc3QuX2FkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdFRpdGxlKSlcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdClcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSwgdGFza0Rlc2N0aXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KClcbiAgICAgICAgY3VycmVudExpc3QuX2dldFByb2plY3QocHJvamVjdFRpdGxlKS5hZGRUYXNrKG5ldyBUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2N0aXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KSlcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdCkgICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9kZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdCkgICAgICAgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tJZCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KSBcbiAgICB9XG5cbiAgICBzdGF0aWMgZWRpdFByb2plY3QocHJvamVjdFRpdGxlLCBuZXdUaXRsZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZWRpdFByb2plY3QobmV3VGl0bGUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KVxuICAgIH1cblxuICAgIHN0YXRpYyBjaGVja1Rhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUsIGlzQ2hlY2tlZCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZ2V0VGFzayh0YXNrVGl0bGUpLnNldENoZWNrZWQoaXNDaGVja2VkKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlTGlzdChjdXJyZW50TGlzdClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pZCA9IGAkeyh0aXRsZSB8fCAnXycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpfS0ke0RhdGUubm93KCl9YFxuICAgIH07XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHlEZWNvZGUoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnByaW9yaXR5KXtcbiAgICAgICAgICAgIGNhc2UgJzAnOiByZXR1cm4gJ2xvdyc7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnMSc6IHJldHVybiAnJztcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICcyJzogcmV0dXJuICdoaWdoJztcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRcbiAgICB9XG5cbiAgICBzZXRDaGVja2VkKGNoZWNrKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0VGl0bGUoKSArICcgd2FzIGNoZWNrZWQhICcgKyB0aGlzLmNoZWNrZWQgKyBjaGVjaylcbiAgICB9XG5cbiAgICBpc0NoZWNrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrZWRcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL1N0b3JhZ2VcIjtcbmltcG9ydCBMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kdWxlcy9MaXN0ZW5lcnNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuY29uc3QgZGVtb0luaXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICBTdG9yYWdlLmFkZFByb2plY3QoJ2RlZmF1bHQnKVxuICAgIFN0b3JhZ2UuYWRkUHJvamVjdCgnU2hvcCcpXG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KCdXb3JrJylcblxuICAgIFN0b3JhZ2UuYWRkVGFzaygnZGVmYXVsdCcsICdDbGVhbiByb29tJywgJ09yZ2FuaXplIGNsb3RoZXMgYW5kIGZ1cm5pdHVyZS4nLCAnMjAyMy0wMy0xMicsICcxJylcbiAgICBTdG9yYWdlLmFkZFRhc2soJ1Nob3AnLCAnQnV5IGdyb2NlcmllcycsICdHZXQgYnJlYWQsIG1pbGssIGVnZ3MsIGFuZCB2ZWdldGFibGVzLicsICcyMDIzLTAzLTE1JywgJzInKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnZGVmYXVsdCcsICdXYWxrIGRvZycsICdUYWtlIENoYXJsaWUgdG8gdGhlIHBhcmsgZm9yIGV4ZXJjaXNlLicsICcyMDIzLTAzLTE3JywgJzAnKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnV29yaycsICdTdHVkeSBtYXRoJywgJ1JldmlldyBjaGFwdGVyIDUgb24gbGluZWFyIGVxdWF0aW9ucy4nLCAnMjAyMy0wMy0yMCcsICcxJylcbiAgICBTdG9yYWdlLmFkZFRhc2soJ1dvcmsnLCAnRW1haWwgdGVhbScsICdTZW5kIHdlZWtseSByZXBvcnQgYW5kIHNjaGVkdWxlIG1lZXRpbmcuJywgJzIwMjMtMDMtMjInLCAnMicpXG4gICAgXG4gICAgTGlzdGVuZXJzLmxvYWRQYWdlKClcbiAgICAvL1N0b3JhZ2UuZGVsZXRlUHJvamVjdCgnU2hvcCcpXG4gICAgLy9TdG9yYWdlLmRlbGV0ZVRhc2soJ1dvcmsnLCdFbWFpbCB0ZWFtJylcbn1cblxuY29uc3QgcmVzZXQgPSAoKSA9PiBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuXG5MaXN0ZW5lcnMubG9hZFBhZ2UoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=