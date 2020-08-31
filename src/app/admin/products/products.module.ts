import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: ProductsViewComponent
    },
    {
        path: 'add',
        component: ProductsFormComponent
    },
    {
        path: 'update',
        component: ProductsFormComponent
    }
]

@NgModule({
  declarations: [ProductsComponent, ProductsViewComponent, ProductsFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
