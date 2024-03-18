export default class Task {
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