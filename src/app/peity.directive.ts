import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import * as peity from 'peity';

@Directive({
  selector: '[appPeity]'
})
export class PeityDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const jQuery = $;
    jQuery(this.el.nativeElement).peity('pie');
  }
}
