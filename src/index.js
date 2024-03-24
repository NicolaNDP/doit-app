import Storage from "./modules/Storage";
import Listeners from "./modules/Listeners";
import "./style.css"

const demoInit = () => {
    localStorage.clear()
    Storage.addProject('default')
    Storage.addProject('Shop')
    Storage.addProject('Work')

    Storage.addTask('default', 'Clean room', 'Organize clothes and furniture.', '2023-03-12', '1')
    Storage.addTask('Shop', 'Buy groceries', 'Get bread, milk, eggs, and vegetables.', '2023-03-15', '2')
    Storage.addTask('default', 'Walk dog', 'Take Charlie to the park for exercise.', '2023-03-17', '0')
    Storage.addTask('Work', 'Study math', 'Review chapter 5 on linear equations.', '2023-03-20', '1')
    Storage.addTask('Work', 'Email team', 'Send weekly report and schedule meeting.', '2023-03-22', '2')
    
    Listeners.loadPage()
    //Storage.deleteProject('Shop')
    //Storage.deleteTask('Work','Email team')
}

const reset = () => localStorage.clear()



Listeners.loadPage()

