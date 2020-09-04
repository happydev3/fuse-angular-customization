import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestComponent } from './suggest.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { SuggestDashboardComponent } from './suggest-dashboard/suggest-dashboard.component';
import { SuggestCategoryComponent } from './suggest-category/suggest-category.component';
import { SuggestProductComponent } from './suggest-product/suggest-product.component';

const routes: Routes = [
    {
        path: '',
        component: SuggestComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: SuggestDashboardComponent
            },
            {
                path: 'category/:id',
                component: SuggestCategoryComponent
            },
            {
                path: 'product/:id',
                component: SuggestProductComponent
            }
        ]
    }
]

@NgModule({
  declarations: [SuggestComponent, SuggestDashboardComponent, SuggestCategoryComponent, SuggestProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FuseSharedModule
  ]
})
export class SuggestModule { }
