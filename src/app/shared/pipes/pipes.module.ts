import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPipe } from './product.pipe';



@NgModule({
  declarations: [ProductPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ProductPipe
  ]
})
export class PipesModule { }
