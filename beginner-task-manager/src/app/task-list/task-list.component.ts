// src/app/task-list/task-list.component.ts
import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [TaskComponent, CommonModule, ButtonComponent]
})
export class TaskListComponent {
  tasks = [
    { 
      name: 'Complete Angular project', 
      priority: 1, 
      isCompleted: false, 
      dueDate: new Date(2024, 9, 15), // October 15, 2024
      cost: 100
    },
    { 
      name: 'Review TypeScript basics', 
      priority: 2, 
      isCompleted: true, 
      dueDate: new Date(2024, 9, 10), // October 10, 2024
      cost: 50
    }
  ];
}
