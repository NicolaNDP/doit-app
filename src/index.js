import Task from "./modules/Task";
import Project from "./modules/Project";
import Storage from "./modules/Storage";
import Container from "./modules/Container";
import dom from "./modules/DOM";

const demoInit = () => {
    localStorage.clear()
    Storage.addProject(new Project('default'))
    Storage.addProject(new Project('Shop'))
    Storage.addProject(new Project('Work'))

    Storage.addTask('default', new Task('Clean room', 'Organize clothes and furniture.', '2023-03-12'))
    Storage.addTask('Shop', new Task('Buy groceries', 'Get bread, milk, eggs, and vegetables.', '2023-03-15'))
    Storage.addTask('default', new Task('Walk dog', 'Take Charlie to the park for exercise.', '2023-03-17'))
    Storage.addTask('Work', new Task('Study math', 'Review chapter 5 on linear equations.', '2023-03-20'))
    Storage.addTask('Work', new Task('Email team', 'Send weekly report and schedule meeting.', '2023-03-22'))

    Storage.deleteProject('Shop')
    Storage.deleteTask('Work','Email team')
}

const currentList = Storage.getList();
const currentProject = 'default'

dom.renderTaskRows(currentList._getProject(currentProject).getTasks())

console.log(currentList)