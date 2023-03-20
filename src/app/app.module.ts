import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { AnalystTableComponent } from './analyst-table/analyst-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AnalystTableComponent,
    CustomersComponent,
    ProductsComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
