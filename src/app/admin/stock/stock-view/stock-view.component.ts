import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

@Component({
    selector: 'app-stock-view',
    templateUrl: './stock-view.component.html',
    styleUrls: ['./stock-view.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class StockViewComponent implements OnInit {

    displayedColumns: string[] = ['category', 'subcategory', 'products', 'store', 'stock'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}

export interface PeriodicElement {
    subcategory: string;
    category: number;
    products: number;
    store: string;
    stock: number
}

const ELEMENT_DATA: PeriodicElement[] = [
    { category: 1, subcategory: 'Hydrogen', products: 1.0079, store: 'H', stock: 12 },
    { category: 2, subcategory: 'Helium', products: 4.0026, store: 'He', stock: 12 },
    { category: 3, subcategory: 'Lithium', products: 6.941, store: 'Li', stock: 12 },
    { category: 4, subcategory: 'Beryllium', products: 9.0122, store: 'Be', stock: 12 },
    { category: 5, subcategory: 'Boron', products: 10.811, store: 'B', stock: 12 },
    { category: 6, subcategory: 'Carbon', products: 12.0107, store: 'C', stock: 12 },
    { category: 7, subcategory: 'Nitrogen', products: 14.0067, store: 'N', stock: 12 },
    { category: 8, subcategory: 'Oxygen', products: 15.9994, store: 'O', stock: 12 },
    { category: 9, subcategory: 'Fluorine', products: 18.9984, store: 'F', stock: 12 },
    { category: 10, subcategory: 'Neon', products: 20.1797, store: 'Ne', stock: 12 },
    { category: 11, subcategory: 'Sodium', products: 22.9897, store: 'Na', stock: 12 },
    { category: 12, subcategory: 'Magnesium', products: 24.305, store: 'Mg', stock: 12 },
    { category: 13, subcategory: 'Aluminum', products: 26.9815, store: 'Al', stock: 12 },
    { category: 14, subcategory: 'Silicon', products: 28.0855, store: 'Si', stock: 12 },
    { category: 15, subcategory: 'Phosphorus', products: 30.9738, store: 'P', stock: 12 },
    { category: 16, subcategory: 'Sulfur', products: 32.065, store: 'S', stock: 12 },
    { category: 17, subcategory: 'Chlorine', products: 35.453, store: 'Cl', stock: 12 },
    { category: 18, subcategory: 'Argon', products: 39.948, store: 'Ar', stock: 12 },
    { category: 19, subcategory: 'Potassium', products: 39.0983, store: 'K', stock: 12 },
    { category: 20, subcategory: 'Calcium', products: 40.078, store: 'Ca', stock: 12 },
];