import {AfterViewInit, Directive, ElementRef, Input, OnChanges} from '@angular/core';
import * as $ from 'jquery/dist/jquery';
import * as peity from 'peity/jquery.peity';

@Directive({
  selector: '[appBarPeity]'
})
export class BarPeityDirective implements AfterViewInit, OnChanges {

  @Input() value: number;
  @Input() idx: number;
  objMyarg = {};
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
        const jQuery = $;
        if ( this.idx ) {
          var obj = jQuery(this.el.nativeElement).peity('bar');
          this.objMyarg[this.idx] = obj;
        }
  }
  ngOnChanges() {
      var tMYARG = this.objMyarg[this.idx];
      if( tMYARG ) {
        var objThis = tMYARG;
        let values = objThis.text().split(',');
        values.shift();
        values.push(this.value);

        objThis
          .text(values.join(','))
          .change();

      }
  }
}
