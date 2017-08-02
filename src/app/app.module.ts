import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DaterangeDirective } from './daterange.directive';
import { PeityDirective } from './peity.directive';
import {BarPeityDirective} from './bar-peity.directive';

@NgModule({
  declarations: [
    AppComponent,
    DaterangeDirective,
    PeityDirective,
    BarPeityDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
