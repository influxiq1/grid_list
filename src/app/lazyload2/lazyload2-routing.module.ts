import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lazyload2Component } from './lazyload2.component';
import { DebouncetimeexampleComponent } from './debouncetimeexample/debouncetimeexample.component';
import { FacebookComponent } from '../socoalmedia/facebook/facebook.component';
import { DynamictemplateComponent } from '../dynamictemplate/dynamictemplate/dynamictemplate.component';
import { DynmicmaterialgridComponent } from './dynmicmaterialgrid/dynmicmaterialgrid.component';
import { PipeexampleComponent } from '../lazyload/pipeexample/pipeexample.component';

const routes: Routes = [
  { path: '', component: Lazyload2Component },
  { path: 'deboucetimeexample', component: DebouncetimeexampleComponent },
  { path: 'dynmictemplate', component: DynamictemplateComponent },
  { path: 'facebookexample', component: FacebookComponent },
  { path: 'pipeexample', component: PipeexampleComponent },
  { path: 'dynmicmaterialgrid', component: DynmicmaterialgridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyload2RoutingModule { }
