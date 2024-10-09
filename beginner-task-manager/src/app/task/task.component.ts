// src/app/task/task.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() taskName!: string; // Input property to receive data from the parent
}
