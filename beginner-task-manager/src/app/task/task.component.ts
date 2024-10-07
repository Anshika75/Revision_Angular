// src/app/task/task.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',                 // The selector that represents the task component
  standalone: true,
  templateUrl: './task.component.html',  // Link to the template file
  styleUrls: ['./task.component.css']    // Link to the style file
})
export class TaskComponent {
  taskName = 'Complete Angular Tutorial'; // Static task name for now
}
