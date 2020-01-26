import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CommerceCoreModule } from '../commerce-core/commerce-core.module';



@NgModule({
  declarations: [
    ECommerceComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CommerceCoreModule 
  ]
})
export class PagesModule { }
