// src/app/task/task.component.ts
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-task',
  standalone: true,
  imports:[FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  taskForm: FormGroup;
  tasks = [
    { name: 'Task 1', priority: 1, completed: false },
    { name: 'Task 2', priority: 2, completed: false },
  ];

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.minLength(3)]],  // Task name is required and must have at least 3 characters
      taskPriority: [null, [Validators.required, Validators.min(1), Validators.max(5)]],  // Priority must be between 1 and 5
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.tasks.push({
        name: this.taskForm.value.taskName,
        priority: this.taskForm.value.taskPriority,
        completed: false,
      });
      this.taskForm.reset();
    }
  }
}