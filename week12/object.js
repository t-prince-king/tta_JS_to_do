function createTask(title, description, category) {
    return {
        title,
        description,
        category,
        completed: false,
 
        toggleCompleted() {
            this.completed = !this.completed;
        },

        displayDetails() {
            console.log(`\t Category: ${this.category}`);
            console.log(`\t Task: ${this.title}`);
            console.log(`\t Description: ${this.description}`);
            console.log(`${this.completed ? "\t Task is Completed" : "\t Task is not Completed"}`);
        },

        updateTaskTitle(newTitle) {
            this.title = newTitle
            console.log("Task Title Updated Successfully");   
        },
    
        updateTaskDescription(newDescription) {
            this.description = newDescription
            console.log("Task Description Updated Successfully");   
        },
    
        updateTaskCategory(newCategory) {
            this.category = newCategory
            console.log("Task Category Updated Successfully");   
        }
    };
}

function createWorkTask(title, description, deadline) {
    let task = createTask(title, description, "Work");
    return {
        ...task,
        deadline,

        toggleCompleted(){
            task.toggleCompleted();
        },

        displayDetails() {
            task.displayDetails();
            console.log(`\t Deadline: ${this.deadline}`);
        }
    }
}

function createPersonalTask(title, description, priority) {
    let task = createTask(title, description, "Personal")
    return {
        ...task,
        priority,

        toggleCompleted() {
            task.toggleCompleted()
        },

        displayDetails() {
            task.displayDetails()
            console.log(`\t Priority: ${this.priority}`)
        }
    }
}

let task1 = createTask("Buy Groceries", "Get milk, eggs and bread from the store.", "Shopping")
console.log("+---------------------------------------------------------------+");
