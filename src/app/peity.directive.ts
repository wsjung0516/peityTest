import {AfterViewInit, Directive, ElementRef} from '@angular/core';

declare var $:any;
declare var peity:any;
@Directive({
  selector: '[appPeity]'
})
export class PeityDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    $(this.el.nativeElement).peity('pie');
  }
}
