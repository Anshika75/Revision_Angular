// Interface to ensure consistency for all task types

interface ITask {
    taskName: string;
    taskPriority: number;
    isCompleted: boolean;
    tags?: string[]; // ? - optional property in TypeScript, will be either an array of strings or undefined
    assignee?: string;
    
    displayTask(): void;
    markComplete(): void;
    changePriority(newPriority: number): void; // changePriority method to change the priority of a task, takes a new priority as an argument, and returns void i.e. nothing
}

// Base/Parent Task class

class Task implements ITask {
    taskName: string;
    taskPriority: number;
    isCompleted: boolean;
    tags?: string[];
    assignee?: string;

    constructor(taskName: string, taskPriority: number, isCompleted: boolean, tags?: string[], assignee?: string) {
        this.taskName = taskName;
        this.taskPriority = taskPriority;
        this.isCompleted = isCompleted;
        this.tags = tags;
        this.assignee = assignee;
    }

    displayTask(): void {
        if (this.tags) {
            console.log(`Task: ${this.taskName}, Priority: ${this.taskPriority}, Completed: ${this.isCompleted}, Tags: ${this.tags.join(", ")}, Assignee: ${this.assignee}`);
        } else{
            console.log(`Task: ${this.taskName}, Priority: ${this.taskPriority}, Completed: ${this.isCompleted}, Assignee: ${this.assignee}`);
        }
    }

    markComplete(): void {
        this.isCompleted = true;
        console.log(`${this.taskName} has been marked as completed.`);
    }

    changePriority(newPriority: number): void {
        this.taskPriority = newPriority;
        console.log(`${this.taskName} priority has been changed to ${newPriority}.`);
    }
}

// WorkTask: Extends base / parent Task with a department property
class WorkTask extends Task {
    department: string;

    constructor(taskName: string, taskPriority: number, isCompleted: boolean, department: string, tags?: string[], assignee?: string) {
        super(taskName, taskPriority, isCompleted, tags, assignee); // super() is used to call the constructor of the parent class (Task) with the required arguments for the parent class
        this.department = department;
    }

    displayTask(): void {
        super.displayTask();
        console.log(`Department: ${this.department}`);
    }
}

// PersonalTask: Extends base/parent Task with a reminderDate property
class PersonalTask extends Task {
    reminderDate?: string;

    constructor(taskName: string, taskPriority: number, isCompleted: boolean, reminderDate?: string, tags?: string[], assignee?: string) {
        super(taskName, taskPriority, isCompleted, tags, assignee);
        this.reminderDate = reminderDate;
    }

    displayTask(): void {
        super.displayTask();
        if (this.reminderDate) {
            console.log(`Reminder Date: ${this.reminderDate}`);
        }
    }
}

// Example Usage

// Create a WorkTask instance
const workTask1 = new WorkTask("Finish Angular Project", 1, false, "Development", ["work", "urgent"], "John Doe");
workTask1.displayTask();
workTask1.markComplete();
workTask1.changePriority(2);

// Create a PersonalTask instance
const personalTask1 = new PersonalTask("Buy Groceries", 3, false, "2024-10-08", ["personal", "shopping"], "Jane Doe");
personalTask1.displayTask();
personalTask1.changePriority(1);
