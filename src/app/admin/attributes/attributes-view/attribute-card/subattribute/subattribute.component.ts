import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CategoriesService } from 'app/admin/_services/categories.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
    selector: 'app-subattribute',
    templateUrl: './subattribute.component.html',
    styleUrls: ['./subattribute.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SubattributeComponent implements OnInit {

    @Input()
    cardId;

    card: any;
    board: any;

    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _categoriesService: CategoriesService
    ) {
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._categoriesService.onBoardChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(board => {
                console.log(board);
                this.board = board;
                this.card = this.board.cards.filter((card) => {
                    return this.cardId === card.id;
                })[0];
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Is the card overdue?
     *
     * @param cardDate
     * @returns {boolean}
     */
    isOverdue(cardDate): boolean {
        return moment() > moment(new Date(cardDate));
    }

}
