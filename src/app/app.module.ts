import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommerceCoreModule } from './commerce-core/commerce-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommerceCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
