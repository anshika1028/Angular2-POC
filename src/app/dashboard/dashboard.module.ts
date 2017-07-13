import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AccountsModule } from '../accounts/accounts.module';

@NgModule({
  imports: [
    CommonModule,
    AccountsModule
  ],
  declarations: [
  	DashboardComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
