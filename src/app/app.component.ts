import {AfterViewInit, Component, DoCheck, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
// import * as $ from 'jquery/dist/jquery';
// import * as peity from 'peity/jquery.peity';
// import 'assets/hello';
// declare var pty: () => void;
declare var helloWorld;
declare var peity;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit,DoCheck, OnDestroy {
  title = 'app works!';
  value1: number;
  value2: number;
  value3: number;
  timer: any;
  barColor: any = '#ffffff';
  aaa: string;
  rdata = [1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,2,0,1,0,2,3,0,1,0,2,1,0,0,0,1,3,0,1,0,1,2,0,1,0,2,0,0,1,0,1,1,0,0,0,1,0,1,];
  constructor() {}
  ngOnInit() {
  }
  ngAfterViewInit() {
    var objThis = this;
     this.timer = setInterval(function() {
        objThis.value1 = Math.round(Math.random() * 10);
        objThis.value2 = Math.round(Math.random() * 10);
        if( objThis.value2 > 5) {
          this.barColor = 'red';
        } else {
          this.barColor = 'green';
        }
        $('#hello').helloWorld('jung');
         // console.log(this.value1);
/*
     let values = updatingChart.text().split(',');
     values.shift();
     values.push(random);

     updatingChart
     .text(values.join(','))
     .change();
*/
     }, 1000);

/*
    $(this.el.nativeElement).peity('pie');
    daterangepicker(this.options, function(val){
      console.log(val);
    });
  $('span.pie').peity('pie');
*/


/*
    $('#item').helloWorld('my life');
*/
// Either the plugin author provides the definition, or you write them yourself

  }
  peityFun() {
     const jQuery = $;
     jQuery('.pie').peity('pie');
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  ngDoCheck() {
    // this.value1 = this.aaa;
    // console.log(this.value1);


  }
}
