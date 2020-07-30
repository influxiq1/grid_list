import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './jsmemoryleaks/hasmemoryleak/page1/page1.component';
import { Page2Component } from './jsmemoryleaks/hasmemoryleak/page2/page2.component';
import { Page1sComponent } from './jsmemoryleaks/solvedmemoryleak/page1s/page1s.component';
import { Page2sComponent } from './jsmemoryleaks/solvedmemoryleak/page2s/page2.component';
import { TakeuntilexampleComponent } from './jsmemoryleaks/solvedmemoryleak/takeuntilexample/takeuntilexample.component';
import { ExampleoftrackbyComponent } from './useoftrackbyinngfor/exampleoftrackby/exampleoftrackby.component';
import { HomeComponent } from './home/home.component';
import { PromisenobservableComponent } from './promisenobservable/promisenobservable.component';
import { SpreadComponent } from './spread/spread.component';
// import {AppComponent} from './app.component';



const routes = [
  { path: '', component: HomeComponent },
  { path: 'home.html', component: HomeComponent },
  { path: 'promisenobservable.html', component: PromisenobservableComponent },
  { path: 'jsmemoryleak/hasmemoryleak/page1', component: Page1Component },
  { path: 'jsmemoryleak/hasmemoryleak/page2', component: Page2Component },
  { path: 'jsmemoryleak/solvedmemoryleak/page1', component: Page1sComponent },
  { path: 'jsmemoryleak/solvedmemoryleak/page2', component: Page2sComponent },
  { path: 'jsmemoryleak/solvedmemoryleak/takeuntilexample', component: TakeuntilexampleComponent },
  { path: 'useoftrackbyinngfor/exampleoftrackby', component: ExampleoftrackbyComponent },
  {path: 'spread', component: SpreadComponent},
  { path: 'lazyloadmodule1', loadChildren: () => import('./lazyloadmodule1/lazyloadmodule1.module').then(m => m.Lazyloadmodule1Module) },
  { path: 'laztload2', loadChildren: () => import('./lazyload2/lazyload2.module').then(m => m.Lazyload2Module) }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
