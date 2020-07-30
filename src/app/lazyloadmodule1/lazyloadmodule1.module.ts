import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyloadmodule1RoutingModule } from './lazyloadmodule1-routing.module';
import { Lazyloadmodule1Component } from './lazyloadmodule1.component';
import { Lazyloadc1Component } from '../lazyloadc1/lazyloadc1.component';
import { Lazyloadc2Component } from './lazyloadc2/lazyloadc2.component';
import { Lazyloadc3Component } from './lazyloadc3/lazyloadc3.component';


@NgModule({
  declarations: [Lazyloadmodule1Component, Lazyloadc1Component, Lazyloadc2Component, Lazyloadc3Component],
  imports: [
    CommonModule,
    Lazyloadmodule1RoutingModule
  ]
})
export class Lazyloadmodule1Module { }
