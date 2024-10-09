// src/app/app.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[FormsModule, CommonModule, CardComponent]
})
// src/app/app.component.ts
export class AppComponent {
  title = 'Task Manager';

  task = {
    name: 'Complete Angular Tutorial',
    priority: 'High',
    completed: false
  };
  }


