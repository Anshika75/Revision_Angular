import { Injectable } from '@angular/core';

export interface Task {
  name: string;
  priority: number;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root'  // This means the service is available application-wide
})
export class TaskService {
  private tasks: Task[] = [];

  // Method to get tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Method to add a task
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // Method to complete a task
  completeTask(index: number): void {
    if (this.tasks[index]) {
      this.tasks[index].isCompleted = true;
    }
  }
}
