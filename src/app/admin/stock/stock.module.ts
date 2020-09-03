import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StockViewComponent } from './stock-view/stock-view.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

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
    SharedModule
  ]
})
export class StockModule { }
