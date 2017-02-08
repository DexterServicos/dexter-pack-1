import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[validadeForms]'
})
export class ValidateFormDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.border = '1px solid green';
  }

  //escutando o DOM
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.nativeElement.style.background = 'yellow';
  }


}
