import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { ComponentsModule } from '../_components/components.module';
import { DialogService } from '../_services/dialog.service';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    }
]

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FuseSharedModule,
    ComponentsModule
  ],
  providers: [
      DialogService
  ]
})
export class ProductModule { }
