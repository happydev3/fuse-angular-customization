import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesComponent } from './attributes.component';
import { AttributesViewComponent } from './attributes-view/attributes-view.component';
import { AttributesFormComponent } from './attributes-form/attributes-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { AttributesService, BoardResolve } from '../_services/attributes.service';
import { AttributeCardComponent } from './attributes-view/attribute-card/attribute-card.component';
import { SubattributeComponent } from './attributes-view/attribute-card/subattribute/subattribute.component';

const routes: Routes = [
    {
        path: '',
        component: AttributesComponent,
        children: [
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
    }
]

@NgModule({
  declarations: [AttributesComponent, AttributesViewComponent, AttributesFormComponent, AttributeCardComponent, SubattributeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    AttributesService,
    BoardResolve
  ]
})
export class AttributesModule { }
