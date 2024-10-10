// highlight.directive.ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // The name of the directive used in the template
})
export class HighlightDirective {
  @Input() highlightColor: string = 'yellow'; // Default color

  constructor(private el: ElementRef) { }

  // Listening to mouse enter event to apply the highlight
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  // Listening to mouse leave event to remove the highlight
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
