// src/app/lifecycle-demo/lifecycle-demo.component.ts
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: `
    <div>
      <h3>Lifecycle Demo Component</h3>
      <p>This component demonstrates the Angular lifecycle hooks.</p>
    </div>
  `,
  styles: []
})
export class LifecycleDemoComponent implements OnInit, OnDestroy, AfterViewInit {
  
  constructor() {
    console.log('LifecycleDemoComponent Constructor');
  }

  // Called once after the component is initialized
  ngOnInit(): void {
    console.log('LifecycleDemoComponent ngOnInit');
    // Logic to initialize data or services
  }

  // Called once after the view has been fully initialized
  ngAfterViewInit(): void {
    console.log('LifecycleDemoComponent ngAfterViewInit');
    // Logic that depends on the view being fully rendered
  }

  // Called just before the component is destroyed
  ngOnDestroy(): void {
    console.log('LifecycleDemoComponent ngOnDestroy');
    // Cleanup logic (unsubscribe from observables, clear intervals)
  }
}
