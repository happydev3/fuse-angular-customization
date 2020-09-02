import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    url: string = this.router.url;

    constructor(
        private router: Router
    ) {
        // this.url = this.router.url;
     }

    ngOnInit(): void {

    }
}
