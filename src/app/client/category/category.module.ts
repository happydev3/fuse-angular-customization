import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { FuseSharedModule } from '@fuse/shared.module';

const routes: Routes = [
    {
        path: '',
        component: CategoryComponent
    }
]

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FuseSharedModule
  ]
})
export class CategoryModule { }
