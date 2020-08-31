import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';
import { LayoutModule } from 'app/layout/layout.module';

const adminRoute: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'stock',
                pathMatch: 'full'
            },
            {
                path: 'stock',
                loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
            },
            {
                path: 'categories',
                loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
            },
            {
                path: 'dimensions',
                loadChildren: () => import('./dimensions/dimensions.module').then(m => m.DimensionsModule)
            },
            {
                path: 'attributes',
                loadChildren: () => import('./attributes/attributes.module').then(m => m.AttributesModule)
            },
            {
                path: 'stores',
                loadChildren: () => import('./stores/stores.module').then(m => m.StoresModule)
            },
            {
                path: 'products',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
            }
        ]
    }
]

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
     // Fuse modules
    //  FuseModule.forRoot(fuseConfig),
     FuseProgressBarModule,
     FuseSharedModule,
     FuseSidebarModule,
     FuseThemeOptionsModule,

     // App modules
     LayoutModule,
    RouterModule.forChild(adminRoute)
  ]
})
export class AdminModule { }
