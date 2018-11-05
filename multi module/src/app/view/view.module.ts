import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';

import { ViewComponent2Component } from './view-component2/view-component2.component';

@NgModule({
  declarations: [ViewComponentComponent, ViewComponent2Component],
  imports: [
    CommonModule
  ],
  exports:[ViewComponentComponent]
})
export class ViewModule { }
