import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './thirdpartymodules/material-modules';
import { from } from 'rxjs';
import { HasmemoryleakComponent } from './jsmemoryleaks/hasmemoryleak/hasmemoryleak.component';
import { Page1Component } from './jsmemoryleaks/hasmemoryleak/page1/page1.component';
import { Page1sComponent } from './jsmemoryleaks/solvedmemoryleak/page1s/page1s.component';
import { Page2Component } from './jsmemoryleaks/hasmemoryleak/page2/page2.component';
import { Page2sComponent } from './jsmemoryleaks/solvedmemoryleak/page2s/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TakeuntilexampleComponent } from './jsmemoryleaks/solvedmemoryleak/takeuntilexample/takeuntilexample.component';
import { ExampleoftrackbyComponent } from './useoftrackbyinngfor/exampleoftrackby/exampleoftrackby.component';
import { PromisenobservableComponent } from './promisenobservable/promisenobservable.component';
import { SpreadComponent } from './spread/spread.component';

@NgModule({
  declarations: [
    AppComponent,
    HasmemoryleakComponent,
    Page1Component,
    Page2Component,
    HomeComponent,
    Page1sComponent,
    Page2sComponent,
    TakeuntilexampleComponent,
    ExampleoftrackbyComponent,
    PromisenobservableComponent,
    SpreadComponent
  ],
  imports: [
    BrowserModule,
    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule, 
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
