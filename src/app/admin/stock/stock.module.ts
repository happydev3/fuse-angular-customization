import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StockViewComponent } from './stock-view/stock-view.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: StockViewComponent
    },
    {
        path: 'add',
        component: StockFormComponent
    },
    {
        path: 'update',
        component: StockFormComponent
    }
]

@NgModule({
  declarations: [StockComponent, StockViewComponent, StockFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class StockModule { }
