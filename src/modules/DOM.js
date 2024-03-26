import Listeners from "./Listeners";
import Storage from "./Storage";

import iconDelete from "../assets/icon_delete.svg";
import iconAdd from "../assets/icon_add.svg";
import iconEdit from "../assets/icon_edit.svg";
import iconEsc from "../assets/icon_esc.svg";
import iconLogo from "../assets/icon_logo.svg";
import iconLowPriority from "../assets/icon_lpriority.svg";
import iconHighPriority from "../assets/icon_hpriority.svg";
import iconNoPriority from "../assets/icon_npriority.svg";

const Dom = (() => {
    const header = document.querySelector("#header");
    const content = document.querySelector("#content");
    const panel = document.querySelector("#panel");

    function refreshPage(currentProject) {
        const list = Storage.getList();
        content.innerHTML = "";
        panel.innerHTML = "";
        header.innerHTML = "";
        console.log(`from refresh list ${currentProject}`);
        renderHeader();
        renderProjects(list._getProjects());
        renderTasks(list._getProject(currentProject).getTasks());
        renderAddButtons();
    }

    function createHtmlElement(type, id, arrayClasses, inType, content, appendCh) {
        const element = document.createElement(type);
        if (id) element.id = id;
        if (arrayClasses) {
 arrayClasses.forEach(
            (myClass) => element.classList.add(myClass),
);
}
        if (inType) element.type = inType;
        if (content) element.innerText = content;
        if (appendCh) appendCh.appendChild(element);

        return element;
    }

    function renderHeader() {
        const div = createHtmlElement("div", "header-div", null, null, null, header);

        const title = createHtmlElement("h1", "header-title", null, null, "DOIT!", div);

        const logo = createHtmlElement("img", "header-logo", null, null, null, title);
        logo.src = iconLogo;

        const subTitle = createHtmlElement("p", "header-subtitle", null, null, "a to-do app", div);
    }

    const renderTasks = (tasks) => {
            const currentProject = createHtmlElement("t2", "title-currentproject", ["title-currentproject"], null, Listeners.currentProject, content);

            tasks.forEach((task) => {
            const name = task.getTitle().toLowerCase().split(" ").join("_");

            const div = createHtmlElement("div", `t-div-${task.getId()}`, ["task-div"], null, null, content);

            const leftSubDiv = createHtmlElement("div", `t-leftsubdiv-${name}`, ["task-leftsubdiv"], null, null, div);

            const checkbox = createHtmlElement("input", `t-checkbox-${task.getId()}`, ["task-checkbox"], "checkbox", null, leftSubDiv);
            checkbox.checked = task.isChecked();

            const title = createHtmlElement("p", `t-t3-${task.getId()}`, ["task-t3"], null, task.getTitle(), leftSubDiv);

            const date = createHtmlElement("p", `t-date-${name}`, ["task-date"], null, task.getDueDate_distanceFrom(), div);

            const priority = createHtmlElement("img", `t-priority-${name}`, ["task-priority"], null, null, div);
                if (task.getPriority() !== "1") {
                    priority.src = task.getPriority() === "0" ? iconLowPriority : iconHighPriority;
                } else {
                    priority.src = iconNoPriority;
                }

            const rightSubDiv = createHtmlElement("div", `t-rightsubdiv-${task.getId()}`, ["task-rightsubdiv"], null, null, div);
                rightSubDiv.style.visibility = "hidden";

            const editBtn = createHtmlElement("img", `t-editbtn-${task.getId()}`, ["task-editbtn", "highlight"], null, null, rightSubDiv);
                editBtn.src = iconEdit;

            const deleteBtn = createHtmlElement("img", `t-deletebtn-${task.getId()}`, ["task-deletebtn", "highlight"], null, null, rightSubDiv);
                deleteBtn.src = iconDelete;

            if (task.isChecked()) {
                title.style.textDecoration = "line-through";
                title.style.opacity = 0.3;
                date.style.opacity = 0.3;
                priority.style.opacity = 0.3;
                editBtn.style.display = "none";
            }
        });
    };

    const renderProjects = (projects) => {
        projects.forEach((project) => {
            const name = project.getTitle();

            const div = createHtmlElement("div", `p-div-${name}`, ["proj-div"], null, null, panel);

            const title = createHtmlElement("p", `p-t2-${name}`, ["proj-t2"], null, name, div);

            const rightSubDiv = createHtmlElement("div", `p-rightsubdiv-${name}`, ["proj-rightsubdiv"], null, null, div);
                rightSubDiv.style.visibility = "hidden";

            const editBtn = createHtmlElement("img", `p-editbtn-${name}`, ["proj-editbtn", "highlight"], null, null, rightSubDiv);
                editBtn.src = iconEdit;

            const deleteBtn = createHtmlElement("img", `p-deletebtn-${name}`, ["proj-deletebtn", "highlight"], null, null, rightSubDiv);
                deleteBtn.src = iconDelete;
        });
    };

    const renderAddButtons = () => {
        const projAddBtn = createHtmlElement("img", "proj-addbtn", ["highlight"], null, null, panel);
            projAddBtn.src = iconAdd;

        const taskAddBtn = createHtmlElement("img", "task-addbtn", ["highlight"], null, null, content);
            taskAddBtn.src = iconAdd;
    };

    const renderDialogDelete = () => {
        const dialog = createHtmlElement("dialog", "modal-delete-dialog", null, null, null, content);

        const closeBtn = createHtmlElement("img", "modal-delete-closebtn", ["close-btn", "highlight"], null, null, dialog);
            closeBtn.src = iconEsc;

        const title = createHtmlElement("p", "modal-delete-h2", null, null, "Confirm Delete?", dialog);

        const submitBtn = createHtmlElement("button", "modal-delete-submitbtn", null, "button", "Delete", dialog);
    };

    const renderDialogAddTask = (editTitle, editDescription, editDueDate, editParentProject, editPriority) => {
        const dialog = createHtmlElement("dialog", "modal-addtask-dialog", null, null, null, content);

        const headerSubDiv = createHtmlElement("div", "modal-addtask-headersubdiv", null, null, null, dialog);

        const closeBtn = createHtmlElement("img", "modal-addtask-closebtn", ["close-btn", "highlight"], null, null, headerSubDiv);
            closeBtn.src = iconEsc;

        const title = createHtmlElement("h2", "modal-addtask-h2", null, null, "New Task", headerSubDiv);
            if (editTitle) title.innerText = "Edit Task";

        const inputTitle = createHtmlElement("input", "modal-addtask-input-title", null, "text", null, dialog);
            inputTitle.placeholder = "Title";
            if (editTitle) inputTitle.value = editTitle;

        const inputDescription = createHtmlElement("textarea", "modal-addtask-input-description", null, null, null, dialog);
            inputDescription.placeholder = "Description";
            inputDescription.cols = 25;
            inputDescription.rows = 3;
                if (editDescription) inputDescription.value = editDescription;

        const inputDueDate = createHtmlElement("input", "modal-addtask-input-duedate", null, "date", null, dialog);
            if (editDueDate) inputDueDate.value = editDueDate;

        const selectorsSubDiv = createHtmlElement("div", "modal-addtask-selectorssubdiv", null, null, null, dialog);

        const inputSelectPriority = createHtmlElement("select", "modal-addtask-input-priority", null, null, null, selectorsSubDiv);
            const priorityLow = createHtmlElement("option", "modal-addtask-input-priority-low", null, null, "Low", inputSelectPriority);
                priorityLow.value = 0;
            const priorityNormal = createHtmlElement("option", "modal-addtask-input-priority-normal", null, null, "No Priority", inputSelectPriority);
                priorityNormal.value = 1;
                priorityNormal.setAttribute("selected", true);
            const priorityHigh = createHtmlElement("option", "modal-addtask-input-priority-high", null, null, "High", inputSelectPriority);
                priorityHigh.value = 2;
                if (editPriority >= 0) {
                    console.log(`editPrioriry: ${editPriority}`);
                    console.log(`inputSelectPriority.selectedIndex: ${inputSelectPriority.selectedIndex}`);
                    inputSelectPriority.selectedIndex = editPriority;
}

        const inputSelectProject = createHtmlElement("select", "modal-addtask-input-select-project", null, null, null, selectorsSubDiv);
            Storage.getList()._getProjects()
            .forEach((project) => {
                const optionsProject = createHtmlElement("option", `modal-addtask-input-option-proj${project.getTitle()}`, null, null, project.getTitle(), inputSelectProject);
                if (editParentProject && (optionsProject.value === editParentProject)) {
                    optionsProject.setAttribute("selected", true);
                } else if (!editParentProject && (optionsProject.value === Listeners.currentProject)) {
                    optionsProject.setAttribute("selected", true);
                }
                optionsProject.value = project.getTitle();
            });

        const submitBtn = createHtmlElement("button", "modal-addtask-submitbtn", null, "button", "Add", dialog);
            if (editTitle) submitBtn.innerText = "Edit";
    };

    const renderDialogAddProj = (editTitle) => {
        const dialog = createHtmlElement("dialog", "modal-addproj-dialog", null, null, null, content);

        const headerSubDiv = createHtmlElement("div", "modal-addproj-headersubdiv", null, null, null, dialog);

        const closeBtn = createHtmlElement("img", "modal-addproj-closebtn", ["close-btn", "highlight"], null, null, headerSubDiv);
            closeBtn.src = iconEsc;

        const title = createHtmlElement("h2", "modal-addproj-h2", null, null, "New Project", headerSubDiv);
        if (editTitle) title.innerText = "Edit project";

        const inputTitle = createHtmlElement("input", "modal-addproj-input-title", null, "text", null, dialog);
            inputTitle.placeholder = "Title";
            if (editTitle) inputTitle.value = editTitle;

        const submitBtn = createHtmlElement("button", "modal-addproj-submitbtn", null, "button", "Add", dialog);
    };

    const renderDialogCard = (id) => {
        const taskObject = Storage.getTaskObj(Storage.getTaskParent(id), id);

        const dialog = createHtmlElement("dialog", "modal-card-dialog", null, null, null, content);

        const headerSubDiv = createHtmlElement("div", "modal-card-headersubdiv", null, null, null, dialog);

        const closeBtn = createHtmlElement("img", "modal-card-closebtn", ["close-btn", "highlight"], null, null, headerSubDiv);
            closeBtn.src = iconEsc;

        const title = createHtmlElement("h3", "modal-card-h3", null, null, `${taskObject.getTitle()}`, headerSubDiv);

        const description = createHtmlElement("p", "modal-card-description", null, null, `${taskObject.getDescription()}`, dialog);

        const dueDate = createHtmlElement("p", "modal-card-duedate", null, null, `${taskObject.getDueDate()}, ${taskObject.getDueDate_distanceFrom()}`, dialog);

        const priority = createHtmlElement("img", "modal-card-priority", null, null, null, dialog);
        if (taskObject.getPriority() !== "1") {
            priority.src = taskObject.getPriority() === "0" ? iconLowPriority : iconHighPriority;
        } else {
            priority.src = iconNoPriority;
        }
    };

    return {
 renderTasks, renderProjects, renderAddButtons, renderDialogAddProj, renderDialogAddTask, renderDialogDelete, refreshPage, renderDialogCard,
};
})();

export default Dom;
