import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from "./task/task.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, TaskListComponent, TaskComponent],
  providers: [TaskService],
  // template: `
  //   <h1>Task Manager</h1>
  //   <input [(ngModel)]="newTaskName" placeholder="New Task Name" />
  //   <input [(ngModel)]="newTaskPriority" type="number" placeholder="Priority" />
  //   <button (click)="addTask()">Add Task</button>

  //   <ul>
  //     <li *ngFor="let task of tasks; let i = index">
  //       {{ task.name }} (Priority: {{ task.priority }}) 
  //       <button (click)="completeTask(i)">Complete</button>
  //     </li>
  //   </ul>
  // `,
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  newTaskName = '';
  newTaskPriority = 1;

  constructor(private taskService: TaskService) {}  // Injecting the TaskService

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();  // Load tasks on initialization
  }

  addTask(): void {
    const newTask: Task = {
      name: this.newTaskName,
      priority: this.newTaskPriority,
      isCompleted: false
    };
    this.taskService.addTask(newTask);
    this.newTaskName = '';
    this.newTaskPriority = 1;
  }

  completeTask(index: number): void {
    this.taskService.completeTask(index);
  }
}
