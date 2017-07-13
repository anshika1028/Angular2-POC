import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';
import { routing } from './transfer.routing';
@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TransferComponent]
})
export class TransferModule { }
