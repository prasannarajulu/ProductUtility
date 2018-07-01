import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserXhr } from '@angular/http';
import {CustExtBrowserXhr} from './cust-ext-browser-xhr';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridProductsComponent } from './grid-products/grid-products.component';
import { AddorUpdateProductsComponent } from './addor-update-products/addor-update-products.component';

const appRoutes : Routes = [
		{ path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridProductsComponent,
    AddorUpdateProductsComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes),
	HttpClientModule,
	FormsModule
  ],
  providers: [
    ProductService,
    {provide: BrowserXhr, useClass:CustExtBrowserXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
