// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppComponent, TaskComponent],  // Add AppComponent to imports
  providers: [],
  bootstrap: []
})
export class AppModule {}
