import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestDialogComponent } from './interest-dialog/interest-dialog.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [InterestDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InterestDialogComponent
  ]
})
export class ComponentsModule { }
