import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import * as $ from 'jquery/dist/jquery';
import 'bootstrap-daterangepicker';
import * as moment from 'moment';
// import {daterangepicker} from 'bootstrap-daterangepicker';
@Directive({
  selector: '[appDaterange]'
})
export class DaterangeDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const start = moment().subtract(29, 'days');
    const end = moment();
    $(this.el.nativeElement).daterangepicker(
      {
        'startDate': start,
        'endDate': end,
        'showDropdowns': true,
        'linkedCalendars': false,
        'alwaysShowCalendars': true,

        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
          'Last 3 Month': [moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      });

    // cb(start, end);
  }
}
