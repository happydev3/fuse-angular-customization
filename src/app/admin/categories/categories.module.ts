import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';
import { CategoryCardComponent } from './categories-view/category-card/category-card.component';
import { CategoriesService, BoardResolve } from '../_services/categories.service';
import { SubcategoryComponent } from './categories-view/category-card/subcategory/subcategory.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: CategoriesViewComponent
    },
    {
        path: 'add',
        component: CategoriesFormComponent
    },
    {
        path: 'update',
        component: CategoriesFormComponent
    }
]

@NgModule({
    declarations: [CategoriesComponent, CategoriesViewComponent, CategoriesFormComponent, CategoryCardComponent, SubcategoryComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule
    ],
    providers: [
        CategoriesService,
        BoardResolve
    ],
})
export class CategoriesModule { }
