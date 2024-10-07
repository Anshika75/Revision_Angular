// Task Manager - Basic Setup with TypeScript

// 1. Explicitly declared types for task properties
let taskName: string = "Learn TypeScript";
let taskPriority: number = 1;
let isCompleted: boolean = false;

// 2. Type inference (TypeScript figures out the types automatically)
let taskDescription = "This is a sample task.";
let taskId = 101;
let isUrgent = true;

// Output the variables to console for debugging
console.log("Task Name:", taskName);
console.log("Task Priority:", taskPriority);
console.log("Is Completed:", isCompleted);
console.log("Task Description:", taskDescription);
console.log("Task ID:", taskId);
console.log("Is Urgent:", isUrgent);
