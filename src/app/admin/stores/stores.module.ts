import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import { StoresViewComponent } from './stores-view/stores-view.component';
import { StoresFormComponent } from './stores-form/stores-form.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreCardComponent } from './stores-view/store-card/store-card.component';
import { SharedModule } from 'app/shared/shared.module';
import { StoresService, BoardResolve } from '../_services/stores.service';

const routes: Routes = [
    {
        path: '',
        component: StoresComponent,
        children: [
            {
                path: '',
                redirectTo: 'view',
                pathMatch: 'full'
            },
            {
                path: 'view',
                component: StoresViewComponent
            },
            {
                path: 'add',
                component: StoresFormComponent
            },
            {
                path: 'update',
                component: StoresFormComponent
            }
        ]
    }
]

@NgModule({
  declarations: [StoresComponent, StoresViewComponent, StoresFormComponent, StoreCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    StoresService,
    BoardResolve
  ]
})
export class StoresModule { }
