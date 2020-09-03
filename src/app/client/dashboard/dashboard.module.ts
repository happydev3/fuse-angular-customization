import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { SharedModule } from 'app/shared/shared.module';
import { FuseSharedModule } from '@fuse/shared.module';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
]

@NgModule({
  declarations: [DashboardComponent, DashboardCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FuseSharedModule
  ]
})
export class DashboardModule { }
