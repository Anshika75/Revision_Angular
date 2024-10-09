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
  tasks = ['Complete Angular Tutorial', 'Write Documentation', 'Submit Assignment']; // Array of task names
  addTask() {
    console.log('Add Task clicked');
  }

  deleteAllTasks() {
    console.log('Delete All Tasks clicked');
  }

  viewCompletedTasks() {
    console.log('View Completed Tasks clicked');
  }

}
