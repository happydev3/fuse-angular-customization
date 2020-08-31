import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import { StoresViewComponent } from './stores-view/stores-view.component';
import { StoresFormComponent } from './stores-form/stores-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

@NgModule({
  declarations: [StoresComponent, StoresViewComponent, StoresFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StoresModule { }
