import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) {
 }
 @HostListener('mouseenter') onMouseEnter() {
  this.highlight('rgb(33,37,41)');
  this.changeColor('white');

}
  changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
  this.changeColor('');

}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
  
}

}
