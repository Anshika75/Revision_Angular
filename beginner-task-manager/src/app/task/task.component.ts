// src/app/task/task.component.ts
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports:[FormsModule, CommonModule],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  newTask = {
    name: '',
    priority: null,
  };

  tasks = [
    { name: 'Task 1', priority: 1, completed: false },
    { name: 'Task 2', priority: 2, completed: false },
  ];

  // Handle form submission
  onSubmit() {
    if (this.newTask.name && this.newTask.priority !== null) {
      this.tasks.push({
        name: this.newTask.name,
        priority: this.newTask.priority,
        completed: false,
      });
      this.newTask = { name: '', priority: null };  // Reset form
    }
  }
}