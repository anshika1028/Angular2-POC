import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartsModule } from '../pie-charts/pie-charts.module';
import { AccountsComponent } from './accounts.component';
import { GridModule } from '../grid/grid.module';
import { AccountsService } from './accounts.service';
@NgModule({
  imports: [
    CommonModule,
    PieChartsModule,
    GridModule
  ],
  declarations: [AccountsComponent],
  exports: [AccountsComponent],
  providers: [AccountsService]
})
export class AccountsModule { }
