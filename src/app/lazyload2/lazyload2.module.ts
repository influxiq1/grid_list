import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyload2RoutingModule } from './lazyload2-routing.module';
import { Lazyload2Component } from './lazyload2.component';
import { Lazyloadc1Component } from './lazyloadc1/lazyloadc1.component';
import { DebouncetimeexampleComponent } from './debouncetimeexample/debouncetimeexample.component';
import { FormsModule } from '@angular/forms';
import { FacebookComponent } from '../socoalmedia/facebook/facebook.component';
import { DynamictemplateComponent } from '../dynamictemplate/dynamictemplate/dynamictemplate.component';
import { DynmicmaterialgridComponent } from './dynmicmaterialgrid/dynmicmaterialgrid.component';
import { DemoMaterialModule } from '../thirdpartymodules/material-modules';
import { DemopipePipe } from '../demopipe.pipe';
import { PipeexampleComponent } from '../lazyload/pipeexample/pipeexample.component';


@NgModule({
  declarations: [Lazyload2Component,
    Lazyloadc1Component, DebouncetimeexampleComponent,
    FacebookComponent, DynamictemplateComponent,
     DynmicmaterialgridComponent,
     DemopipePipe,
     PipeexampleComponent],
  imports: [
    CommonModule,
    Lazyload2RoutingModule,
    FormsModule,
    DemoMaterialModule
  ]
})
export class Lazyload2Module { }
