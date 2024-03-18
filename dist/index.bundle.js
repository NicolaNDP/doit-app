/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./src/modules/Container.js");





const dom = (() => {
    const content = document.querySelector('#content')

    function createHtmlElement(
        type,
        id,
        arrayClasses,
        inType,
        content
        ) {
        const element = document.createElement(type);
        if(id) element.id = id;
        if(arrayClasses) arrayClasses.forEach(
            (myClass) => element.classList.add(myClass));
        if(inType) element.type = inType
        if(content) element.innerText = content;
    
        return element;
    }
    
    const renderTaskRows = (tasks) => {
        tasks.forEach((task) => {
            const div = createHtmlElement(
                'div',
                `${task.id}`,
                null,
                null,
                null
                );
            content.appendChild(div);

            const checkbox = createHtmlElement(
                'input',
                'checkbox-task',
                null,
                'checkbox',
                null
            );
            checkbox.checked = task.checked;
            div.appendChild(checkbox);

            const title = createHtmlElement(
                't3',
                't3-task',
                null,
                null,
                `${task.title}`
            );
            div.appendChild(title);

            const editBtn = createHtmlElement(
                'button',
                'editbtn-task',
                null,
                null,
                'edit'
            );
            div.appendChild(editBtn)

            const deleteBtn = createHtmlElement(
                'button',
                'deletebtn-task',
                null,
                null,
                'delete'
            );
            div.appendChild(deleteBtn)

        })
    }
    return { renderTaskRows }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



class Project {
    constructor(title) {
        this.title = title
        this.tasks = []
        console.log('new project! ' + title)
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
            JSON.parse(localStorage.getItem('doit'))
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
        localStorage.setItem('doit', JSON.stringify(data));
    }

    static addProject(project) {
        const currentList = Storage.getList()
        currentList._addProject(project)
        Storage.saveList(currentList)
    }

    static addTask(projectTitle, task) {
        const currentList = Storage.getList()
        currentList._getProject(projectTitle).addTask(task)
        Storage.saveList(currentList)        
    }

    static deleteProject(projectTitle) {
        const currentList = Storage.getList()
        currentList._deleteProject(projectTitle)
        Storage.saveList(currentList)         
    }

    static deleteTask(projectTitle, id) {
        const currentList = Storage.getList()
        currentList._getProject(projectTitle).deleteTask(id);
        Storage.saveList(currentList) 
    }

    static editProject(projectTitle, newTitle) {
        const currentList = Storage.getList()
        currentList._getProject(projectTitle).editProject(newTitle);
        Storage.saveList(currentList)
    }

    //static edit task

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
    constructor(title, description, dueDate) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.checked = false
        this.id = `${(title || '_').toLowerCase().split(" ").join("_")}-${Date.now()}`
    };

    getId() {
        return this.id
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Task */ "./src/modules/Task.js");
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _modules_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Container */ "./src/modules/Container.js");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");






const demoInit = () => {
    localStorage.clear()
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"]('default'))
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"]('Shop'))
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"]('Work'))

    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask('default', new _modules_Task__WEBPACK_IMPORTED_MODULE_0__["default"]('Clean room', 'Organize clothes and furniture.', '2023-03-12'))
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask('Shop', new _modules_Task__WEBPACK_IMPORTED_MODULE_0__["default"]('Buy groceries', 'Get bread, milk, eggs, and vegetables.', '2023-03-15'))
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask('default', new _modules_Task__WEBPACK_IMPORTED_MODULE_0__["default"]('Walk dog', 'Take Charlie to the park for exercise.', '2023-03-17'))
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask('Work', new _modules_Task__WEBPACK_IMPORTED_MODULE_0__["default"]('Study math', 'Review chapter 5 on linear equations.', '2023-03-20'))
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask('Work', new _modules_Task__WEBPACK_IMPORTED_MODULE_0__["default"]('Email team', 'Send weekly report and schedule meeting.', '2023-03-22'))

    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject('Shop')
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask('Work','Email team')
}

const currentList = _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getList();
const currentProject = 'default'

_modules_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].renderTaskRows(currentList._getProject(currentProject).getTasks())

console.log(currentList)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNYOztBQUVBLG9CQUFvQix3REFBTztBQUMzQjs7QUFFQSxvREFBRzs7QUFFSCx3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gICAgfVxuXG4gICAgX3NldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xuICAgIH1cblxuICAgIF9nZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgICB9XG5cbiAgICBfZ2V0UHJvamVjdCh0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRpdGxlKVxuICAgIH1cblxuICAgIF9hZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgIH1cblxuICAgIF9kZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSAhPT0gcHJvamVjdFRpdGxlKVxuICAgIH1cbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgaWQsXG4gICAgICAgIGFycmF5Q2xhc3NlcyxcbiAgICAgICAgaW5UeXBlLFxuICAgICAgICBjb250ZW50XG4gICAgICAgICkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYoaWQpIGVsZW1lbnQuaWQgPSBpZDtcbiAgICAgICAgaWYoYXJyYXlDbGFzc2VzKSBhcnJheUNsYXNzZXMuZm9yRWFjaChcbiAgICAgICAgICAgIChteUNsYXNzKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xuICAgICAgICBpZihpblR5cGUpIGVsZW1lbnQudHlwZSA9IGluVHlwZVxuICAgICAgICBpZihjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJUYXNrUm93cyA9ICh0YXNrcykgPT4ge1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBgJHt0YXNrLmlkfWAsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgICAgICAgICAgICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94LXRhc2snLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3QzJyxcbiAgICAgICAgICAgICAgICAndDMtdGFzaycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIGAke3Rhc2sudGl0bGV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAnZWRpdGJ0bi10YXNrJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ2VkaXQnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pXG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgICdkZWxldGVidG4tdGFzaycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICdkZWxldGUnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4geyByZW5kZXJUYXNrUm93cyB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkb20iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICAgICAgY29uc29sZS5sb2coJ25ldyBwcm9qZWN0ISAnICsgdGl0bGUpXG4gICAgfTtcblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cblxuICAgIGdldFRhc2soaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpXG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgfVxuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cblxuICAgIHNldFRhc2tzKHRhc2tzKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVRhc2soaWQpe1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0SWQoKSAhPT0gaWQpXG4gICAgfVxuXG4gICAgZWRpdFByb2plY3QobmV3VGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgZ2V0TGlzdCgpIHtcbiAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IENvbnRhaW5lcigpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9pdCcpKVxuICAgICAgICApXG4gICAgICAgIGRhdGFMaXN0Ll9zZXRQcm9qZWN0cyhcbiAgICAgICAgICAgIGRhdGFMaXN0Ll9nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgZGF0YUxpc3QuX2dldFByb2plY3RzKClcbiAgICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2V0VGFza3MoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpXG4gICAgICAgICAgICAgICAgLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICAgICAgIClcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YUxpc3Q7XG4gICAgfTtcbiAgICAgIFxuICAgIHN0YXRpYyBzYXZlTGlzdChkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2l0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fYWRkUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUYXNrKHByb2plY3RUaXRsZSwgdGFzaykge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuYWRkVGFzayh0YXNrKVxuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KSAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KClcbiAgICAgICAgY3VycmVudExpc3QuX2RlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKVxuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KSAgICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3RUaXRsZSwgaWQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxuICAgICAgICBjdXJyZW50TGlzdC5fZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmRlbGV0ZVRhc2soaWQpO1xuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KSBcbiAgICB9XG5cbiAgICBzdGF0aWMgZWRpdFByb2plY3QocHJvamVjdFRpdGxlLCBuZXdUaXRsZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpXG4gICAgICAgIGN1cnJlbnRMaXN0Ll9nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZWRpdFByb2plY3QobmV3VGl0bGUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVMaXN0KGN1cnJlbnRMaXN0KVxuICAgIH1cblxuICAgIC8vc3RhdGljIGVkaXQgdGFza1xuXG4gIH1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmlkID0gYCR7KHRpdGxlIHx8ICdfJykudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9LSR7RGF0ZS5ub3coKX1gXG4gICAgfTtcblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZFxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL1N0b3JhZ2VcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vbW9kdWxlcy9Db250YWluZXJcIjtcbmltcG9ydCBkb20gZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcblxuY29uc3QgZGVtb0luaXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ2RlZmF1bHQnKSlcbiAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ1Nob3AnKSlcbiAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ1dvcmsnKSlcblxuICAgIFN0b3JhZ2UuYWRkVGFzaygnZGVmYXVsdCcsIG5ldyBUYXNrKCdDbGVhbiByb29tJywgJ09yZ2FuaXplIGNsb3RoZXMgYW5kIGZ1cm5pdHVyZS4nLCAnMjAyMy0wMy0xMicpKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnU2hvcCcsIG5ldyBUYXNrKCdCdXkgZ3JvY2VyaWVzJywgJ0dldCBicmVhZCwgbWlsaywgZWdncywgYW5kIHZlZ2V0YWJsZXMuJywgJzIwMjMtMDMtMTUnKSlcbiAgICBTdG9yYWdlLmFkZFRhc2soJ2RlZmF1bHQnLCBuZXcgVGFzaygnV2FsayBkb2cnLCAnVGFrZSBDaGFybGllIHRvIHRoZSBwYXJrIGZvciBleGVyY2lzZS4nLCAnMjAyMy0wMy0xNycpKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnV29yaycsIG5ldyBUYXNrKCdTdHVkeSBtYXRoJywgJ1JldmlldyBjaGFwdGVyIDUgb24gbGluZWFyIGVxdWF0aW9ucy4nLCAnMjAyMy0wMy0yMCcpKVxuICAgIFN0b3JhZ2UuYWRkVGFzaygnV29yaycsIG5ldyBUYXNrKCdFbWFpbCB0ZWFtJywgJ1NlbmQgd2Vla2x5IHJlcG9ydCBhbmQgc2NoZWR1bGUgbWVldGluZy4nLCAnMjAyMy0wMy0yMicpKVxuXG4gICAgU3RvcmFnZS5kZWxldGVQcm9qZWN0KCdTaG9wJylcbiAgICBTdG9yYWdlLmRlbGV0ZVRhc2soJ1dvcmsnLCdFbWFpbCB0ZWFtJylcbn1cblxuY29uc3QgY3VycmVudExpc3QgPSBTdG9yYWdlLmdldExpc3QoKTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gJ2RlZmF1bHQnXG5cbmRvbS5yZW5kZXJUYXNrUm93cyhjdXJyZW50TGlzdC5fZ2V0UHJvamVjdChjdXJyZW50UHJvamVjdCkuZ2V0VGFza3MoKSlcblxuY29uc29sZS5sb2coY3VycmVudExpc3QpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9