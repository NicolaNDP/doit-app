import Listeners from "./Listeners";
import Storage from "./Storage";

const Dom = (() => {
    const content = document.querySelector('#content')
    const panel = document.querySelector('#panel')

    function refreshPage (currentProject) {
        const list = Storage.getList();
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
            Storage.getList()._getProjects()
            .forEach(project => {
                const optionsProject = createHtmlElement('option', `modal-addtask-input-option-proj${project.getTitle()}`, null, null, project.getTitle(), inputSelectProject)
                if(editParentProject && (optionsProject.value === editParentProject)) {
                    optionsProject.setAttribute('selected', true)
                }else if(!editParentProject && (optionsProject.value === Listeners.currentProject)){
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


export default Dom