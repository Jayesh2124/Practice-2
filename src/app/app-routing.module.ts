import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalystTableComponent } from './analyst-table/analyst-table.component';
import { CustomersComponent } from './customers/customers.component';
import { PanelComponent } from './panel/panel.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  
    { path: 'Panel', component: PanelComponent },     //this is the panel routing 

    { path: '', component: AnalystTableComponent },   //this component path is empty because to display it first on the action of login in panel
    { path: 'Analyst', component: AnalystTableComponent },  //and this is the original path of that component to display its path on the URL
    { path: 'Customer', component: CustomersComponent },  //regular routing
    { path: 'Products', component: ProductsComponent }, //regular routing 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
