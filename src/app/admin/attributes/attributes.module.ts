import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesComponent } from './attributes.component';
import { AttributesViewComponent } from './attributes-view/attributes-view.component';
import { AttributesFormComponent } from './attributes-form/attributes-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: AttributesViewComponent
    },
    {
        path: 'add',
        component: AttributesFormComponent
    },
    {
        path: 'update',
        component: AttributesFormComponent
    }
]

@NgModule({
  declarations: [AttributesComponent, AttributesViewComponent, AttributesFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AttributesModule { }
