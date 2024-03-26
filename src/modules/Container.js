export default class Container {
  constructor() {
    this.projects = [];
  }

  _setProjects(projects) {
    this.projects = projects;
  }

  _getProjects() {
    return this.projects;
  }

  _getProject(title) {
    return this.projects.find((project) => project.getTitle() === title);
  }

  _addProject(newProject) {
    return this.projects.push(newProject);
  }

  _deleteProject(projectTitle) {
    this.projects = this.projects.filter((project) => project.getTitle() !== projectTitle);
  }
}
