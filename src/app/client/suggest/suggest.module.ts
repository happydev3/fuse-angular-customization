import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestComponent } from './suggest.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { SuggestDashboardComponent } from './suggest-dashboard/suggest-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: SuggestComponent
    }
]

@NgModule({
  declarations: [SuggestComponent, SuggestDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FuseSharedModule
  ]
})
export class SuggestModule { }
