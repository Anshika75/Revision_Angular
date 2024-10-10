// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';


import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, FormsModule, AppComponent, TaskComponent, ReactiveFormsModule],  // Add AppComponent to imports
  providers: [],
  bootstrap: []
})
export class AppModule {}
