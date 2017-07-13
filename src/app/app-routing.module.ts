import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trade', component: HeaderComponent },
  { path: 'transfer', loadChildren: 'app/transfer/transfer.module#TransferModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
	  	RouterModule.forRoot(
	      routes,
	      { enableTracing: true } // <-- debugging purposes only
	    ),
	    RouterModule.forRoot(routes)
	],
	exports: [RouterModule, RouterLink]
})
export class AppRoutingModule { }