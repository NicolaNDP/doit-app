import Storage from "./modules/Storage";
import Listeners from "./modules/Listeners";
import "./style.css"
import "./animations.css"

const demoInit = () => {
    Storage.addProject('default')
    Storage.addProject('Shop')
    Storage.addProject('Work')

    Storage.addTask('default', 'Clean room', 'Organize clothes and furniture.', '2023-03-12', '1')
    Storage.addTask('Shop', 'Buy groceries', 'Get bread, milk, eggs, and vegetables.', '2023-03-15', '2')
    Storage.addTask('default', 'Walk dog', 'Take Charlie to the park for exercise.', '2023-03-17', '0')
    Storage.addTask('Work', 'Study math', 'Review chapter 5 on linear equations.', '2023-03-20', '1')
    Storage.addTask('Work', 'Email team', 'Send weekly report and schedule meeting.', '2023-03-22', '2')

    Listeners.setCurrentProject(Storage.getList()._getProjects()[0].getTitle())
    
    Listeners.loadPage()
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
        Listeners.setCurrentProject(Storage.getList()._getProjects()[0].getTitle())
        Listeners.loadPage()
        console.log('data preloded!')
    }
}

initApp()

//Listeners.loadPage()

