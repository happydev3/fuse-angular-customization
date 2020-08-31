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
        component: AdminComponent
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
