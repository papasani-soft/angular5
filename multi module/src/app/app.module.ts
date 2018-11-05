import { ViewModule } from './view/view.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DisplayComponentComponent } from './display-component/display-component.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ViewModule,
  FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
