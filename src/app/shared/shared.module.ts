import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FusePipesModule } from '@fuse/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { PipesModule } from './pipes/pipes.module';
// import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,

    NgxDnDModule,
    FusePipesModule,
    ReactiveFormsModule,
    CKEditorModule,
    IvyCarouselModule,

    PipesModule
    // ErrorsModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,

    NgxDnDModule,
    FusePipesModule,
    ReactiveFormsModule,
    CKEditorModule,
    IvyCarouselModule,

    PipesModule
    // ErrorsModule
  ]
})
export class SharedModule { }
