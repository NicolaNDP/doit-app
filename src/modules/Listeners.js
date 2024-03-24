import Container from "./Container"
import Dom from "./DOM"
import Storage from "./Storage"

export default class Listeners {

    static currentProject = '' || Storage.getList()._getProjects()[0].getTitle() // || for  initialization
    
    static getCurrentList() {
        return Storage.getList()
    }

    static setCurrentProject(projectName) {
        Listeners.currentProject = projectName
    }

    static loadPage() {
            
        Dom.refreshPage(Listeners.currentProject)
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

                Storage.checkTask(Storage.getTaskParent(taskId), taskId, checkbox.checked)
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
                const taskProjectParent = Storage.getTaskParent(taskId)
                const task = Storage.getTaskObj(taskProjectParent, taskId)
                const taskTitle = task.getTitle()
                const taskDescription = task.getDescription()
                const taskDueDate = task.getDueDate()
                const taskPriority = task.getPriority()

                Dom.renderDialogAddTask(taskTitle, taskDescription, taskDueDate, taskProjectParent, taskPriority)

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
                    Storage.addTask(dialogEditTaskProjSelect.value, dialogEditTaskNewTitle.value, dialogEditTaskNewDescription.value, dialogEditTaskNewDueDate.value, dialogAddTaskPriority.value)
                    Storage.deleteTask(taskProjectParent, taskId) 
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

                Dom.renderDialogAddProj(projTitle)

                const dialogEditProj = document.querySelector('#modal-addproj-dialog')
                const dialogEditProjNewTitle = document.querySelector('#modal-addproj-input-title')
                const dialogEditProjSubmitBtn = document.querySelector('#modal-addproj-submitbtn')
                const dialogEditProjCloseBtn = document.querySelector('#modal-addproj-closebtn')

                dialogEditProj.showModal()

                dialogEditProjSubmitBtn.addEventListener('click', () => {
                    if(dialogEditProjNewTitle.value.includes(' ')){
                        alert('Space is not allowed here. \nPlease, choose a different name or use\'_\'.')
                    }else{
                        Storage.editProject(projTitle, dialogEditProjNewTitle.value)
                        console.log(Storage.getList())
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

                Dom.renderDialogDelete()
                
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
                            Storage.deleteProject(button.id.slice(12))
                            }else{
                                alert('Sorry, cannot delete current project, yet...\nChoose another project, then delete this one.')
                            }
                        }else{
                        Storage.deleteTask(Storage.getTaskParent(button.id.slice(12)), button.id.slice(12))
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

            Dom.renderDialogAddTask()

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
                Storage.addTask(dialogAddTaskProjSelect.value, dialogAddTaskTitle.value, dialogAddTaskDescription.value, dialogAddTaskDueDate.value, dialogAddTaskPriority.value)
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
            Dom.renderDialogAddProj()

            const dialogAddProj = document.querySelector('#modal-addproj-dialog')
            const dialogAddProjTitle = document.querySelector('#modal-addproj-input-title')
            const dialogAddProjSubmitBtn = document.querySelector('#modal-addproj-submitbtn')
            const dialogAddProjCloseBtn = document.querySelector('#modal-addproj-closebtn')

            dialogAddProj.showModal()

            dialogAddProjSubmitBtn.addEventListener('click', () => {
                if(dialogAddProjTitle.value.includes(' ')){
                    alert('Space is not allowed here. \nPlease, choose a different name or use\'_\'.');
                }else{
                    Storage.addProject(dialogAddProjTitle.value)
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