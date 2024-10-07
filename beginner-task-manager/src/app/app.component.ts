// src/app/app.component.ts
import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TaskComponent, ]
})
export class AppComponent {
  title = 'Task Manager';  // This is the title property
  description = 'Manage your daily tasks effectively';  // This is the description property
}
