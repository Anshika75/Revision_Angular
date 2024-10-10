import { Component, Directive, ViewChild } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';


@Component({
  selector: 'app-card',
  standalone: true,
  // imports: [HighlightDirective], // Removed as it should be imported via an NgModule
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @ViewChild(HighlightDirective) highlightDirective!: HighlightDirective;
}
