import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

    @Input() category: any;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    reset() {

    }

    categoryDetail(categoryID) {
        console.log(categoryID);
        this.router.navigate([`/category/${categoryID}`]);
    }

}
