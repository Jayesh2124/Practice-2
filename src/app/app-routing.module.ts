import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalystTableComponent } from './analyst-table/analyst-table.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [

    { path: 'Panel', component: PanelComponent },
    { path: 'Analyst', component: AnalystTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
