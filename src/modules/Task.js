export default class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checked = false
        this.id = `${(title || '_').toLowerCase().split(" ").join("_")}-${Date.now()}`
    };

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getDueDate() {
        return this.dueDate
    }

    getPriority() {
        return this.priority
    }

    getPriorityDecode() {
        switch(this.priority){
            case '0': return 'low';
            break
            case '1': return '';
            break
            case '2': return 'high';
            break
        }
    }

    getId() {
        return this.id
    }

    setChecked(check) {
        this.checked = check
        console.log(this.getTitle() + ' was checked! ' + this.checked + check)
    }

    isChecked() {
        return this.checked
    }

}