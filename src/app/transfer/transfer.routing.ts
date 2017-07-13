import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferComponent } from './transfer.component';

const routes: Routes = [
  { path: '', component: TransferComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);