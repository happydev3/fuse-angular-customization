import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DimensionsComponent } from './dimensions.component';
import { DimensionsViewComponent } from './dimensions-view/dimensions-view.component';
import { DimensionsFormComponent } from './dimensions-form/dimensions-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: DimensionsViewComponent
    },
    {
        path: 'add',
        component: DimensionsFormComponent
    },
    {
        path: 'update',
        component: DimensionsFormComponent
    }
]

@NgModule({
  declarations: [DimensionsComponent, DimensionsViewComponent, DimensionsFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DimensionsModule { }
