import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { PieChartsComponent } from './pie-charts.component';
import { CommonService } from '../services/common.service';
import { PieChartsService } from './pie-charts.service';

@NgModule({
  imports: [
    CommonModule,
    Ng2GoogleChartsModule
  ],
  declarations: [
  	PieChartsComponent
  ],

  providers: [PieChartsService],
  exports: [PieChartsComponent]
})export class PieChartsModule { }
