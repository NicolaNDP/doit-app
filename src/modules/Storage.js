import Container from "./Container";
import Task from "./Task";
import Project from "./Project";

export default class Storage {
    static getList() {
        const dataList = Object.assign(
            new Container(),
            JSON.parse(localStorage.getItem('doit'))
        )
        dataList._setProjects(
            dataList._getProjects()
            .map((project) => Object.assign(new Project(), project)
            )
        )
        dataList._getProjects()
        .forEach((project) => {
            project.setTasks(
                project.getTasks()
                .map((task) => Object.assign(new Task(), task))
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

