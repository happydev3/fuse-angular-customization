import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class CategoryComponent implements OnInit {

    categories = {
        id: 1,
        name: 'Category 1',
        stock: 70,
        childs: [
            {
                id: 2,
                name: 'sub 1',
                stock: 30
            },
            {
                id: 3,
                name: 'sub 2',
                stock: 40
            },
            {
                id: 4,
                name: 'sub 3',
                stock: 50
            },
            {
                id: 4,
                name: 'sub 4',
                stock: 60
            },
        ]
    }

    products = [
        {
            id: 1,
            name: 'product 1',
            id_category: 3,
            stock: 10
        },
        {
            id: 2,
            name: 'product 2',
            id_category: 2,
            stock: 21
        },
        {
            id: 3,
            name: 'product 3',
            id_category: 4,
            stock: 40
        },
        {
            id: 4,
            name: 'product 4',
            id_category: 2,
            stock: 12
        },
        {
            id: 5,
            name: 'product 5',
            id_category: 3,
            stock: 16
        },
        {
            id: 6,
            name: 'product 6',
            id_category: 2,
            stock: 15
        },
        {
            id: 7,
            name: 'product 7',
            id_category: 2,
            stock: 30
        },
        {
            id: 8,
            name: 'product 8',
            id_category: 3,
            stock: 10
        },
        {
            id: 9,
            name: 'product 9',
            id_category: 2,
            stock: 20
        },
        {
            id: 10,
            name: 'product 10',
            id_category: 4,
            stock: 70
        },
        {
            id: 11,
            name: 'product 12',
            id_category: 2,
            stock: 24
        },
        {
            id: 12,
            name: 'product 13',
            id_category: 2,
            stock: 27
        },
        {
            id: 13,
            name: 'product 14',
            id_category: 4,
            stock: 77
        },
        {
            id: 14,
            name: 'product 15',
            id_category: 3,
            stock: 39
        }
    ]

    constructor(
    ) { }

    ngOnInit(): void {
    }

}
