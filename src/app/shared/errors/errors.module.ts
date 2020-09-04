import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
    {
        path: '',
        component: Error404Component
    }
]


@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Error404Component
  ]
})
export class ErrorsModule { }
