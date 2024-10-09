// src/app/button/button.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';  // Default button label
  @Input() color: string = 'primary';   // Default button color
  @Output() btnClick = new EventEmitter<void>();

  handleClick(){
    this.btnClick.emit();
  }
}
