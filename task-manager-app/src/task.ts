// task.ts
export class Task {
    constructor(public taskName: string, public isCompleted: boolean) {}

    displayTask() {
        console.log(`${this.taskName} is ${this.isCompleted ? 'completed' : 'not completed'}.`);
    }
}
