import Task from "./Task";
import Project from "./Project";
import Storage from "./Storage";
import Container from "./Container";

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

export default dom