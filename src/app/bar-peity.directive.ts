import {AfterViewInit, Directive, ElementRef, Input, OnChanges} from '@angular/core';
// import * as $ from 'jquery/dist/jquery';
// import * as peity from 'peity/jquery.peity';
declare var $:any;
declare var peity:any;

@Directive({
  selector: '[appBarPeity]'
})
export class BarPeityDirective implements AfterViewInit, OnChanges {

  @Input() value: number;
  @Input() idx: number;
  objMyarg = {};
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
        if ( this.idx ) {
          var obj = $(this.el.nativeElement).peity('bar');
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
