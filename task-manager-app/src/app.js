"use strict";
// Interface to ensure consistency for all task types
// Base/Parent Task class
class Task {
    constructor(taskName, taskPriority, isCompleted, tags, assignee) {
        this.taskName = taskName;
        this.taskPriority = taskPriority;
        this.isCompleted = isCompleted;
        this.tags = tags;
        this.assignee = assignee;
    }
    displayTask() {
        if (this.tags) {
            console.log(`Task: ${this.taskName}, Priority: ${this.taskPriority}, Completed: ${this.isCompleted}, Tags: ${this.tags.join(", ")}, Assignee: ${this.assignee}`);
        }
        else {
            console.log(`Task: ${this.taskName}, Priority: ${this.taskPriority}, Completed: ${this.isCompleted}, Assignee: ${this.assignee}`);
        }
    }
    markComplete() {
        this.isCompleted = true;
        console.log(`${this.taskName} has been marked as completed.`);
    }
    changePriority(newPriority) {
        this.taskPriority = newPriority;
        console.log(`${this.taskName} priority has been changed to ${newPriority}.`);
    }
}
// WorkTask: Extends base / parent Task with a department property
class WorkTask extends Task {
    constructor(taskName, taskPriority, isCompleted, department, tags, assignee) {
        super(taskName, taskPriority, isCompleted, tags, assignee); // super() is used to call the constructor of the parent class (Task) with the required arguments for the parent class
        this.department = department;
    }
    displayTask() {
        super.displayTask();
        console.log(`Department: ${this.department}`);
    }
}
// PersonalTask: Extends base/parent Task with a reminderDate property
class PersonalTask extends Task {
    constructor(taskName, taskPriority, isCompleted, reminderDate, tags, assignee) {
        super(taskName, taskPriority, isCompleted, tags, assignee);
        this.reminderDate = reminderDate;
    }
    displayTask() {
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
