import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DimensionsComponent } from './dimensions.component';
import { DimensionsViewComponent } from './dimensions-view/dimensions-view.component';
import { DimensionsFormComponent } from './dimensions-form/dimensions-form.component';
import { RouterModule, Routes } from '@angular/router';
import { DimensionCardComponent } from './dimensions-view/dimension-card/dimension-card.component';
import { SharedModule } from 'app/shared/shared.module';
import { DimensionsService, BoardResolve } from '../_services/dimensions.service';

const routes: Routes = [
    {
        path: '',
        component: DimensionsComponent,
        children: [
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
    }
]

@NgModule({
  declarations: [DimensionsComponent, DimensionsViewComponent, DimensionsFormComponent, DimensionCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    DimensionsService,
    BoardResolve
  ]
})
export class DimensionsModule { }
