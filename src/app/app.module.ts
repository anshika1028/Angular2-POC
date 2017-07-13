import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommonService } from './services/common.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink } from '@angular/router'; 
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DashboardModule,
    HeaderModule,
    FooterModule,
    PageNotFoundModule
  ],

  providers: [CommonService],

  bootstrap: [AppComponent]
})
export class AppModule { }
