class Task {
    taskName: string;
    taskPriority: number;
    isCompleted: boolean;

    constructor(taskName: string, taskPriority: number, isCompleted: boolean) {
        this.taskName = taskName;
        this.taskPriority = taskPriority;
        this.isCompleted = isCompleted;
    }

    displayTask(): void {
        console.log(`Task: ${this.taskName}, Priority: ${this.taskPriority}, Completed: ${this.isCompleted}`);
    }
}
