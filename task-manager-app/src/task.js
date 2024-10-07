"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
// task.ts
class Task {
    constructor(taskName, isCompleted) {
        this.taskName = taskName;
        this.isCompleted = isCompleted;
    }
    displayTask() {
        console.log(`${this.taskName} is ${this.isCompleted ? 'completed' : 'not completed'}.`);
    }
}
exports.Task = Task;
