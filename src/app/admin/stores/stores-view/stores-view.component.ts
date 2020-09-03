import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { CategoriesService } from 'app/admin/_services/categories.service';

import { List } from '../../_models/list.model';

@Component({
    selector: 'app-stores-view',
    templateUrl: './stores-view.component.html',
    styleUrls: ['./stores-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class StoresViewComponent implements OnInit {

    category: any;

    // board: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _location: Location,
        private _categoriesService: CategoriesService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        const borderID = '32gfhaf2';
        this._categoriesService.getBoard(borderID).then((res) => {
            console.log(res);
            this.category = res;
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On list add
     *
     * @param newListName
     */
    onListAdd(newListName): void {
        if (newListName === '') {
            return;
        }

        this._categoriesService.addList(new List({ name: newListName }));
    }

    /**
     * On board name changed
     *
     * @param newName
     */
    onBoardNameChanged(newName): void {
        this._categoriesService.updateBoard();
        this._location.go('/apps/scrumboard/boards/' + this.category.id + '/' + this.category.uri);
    }

    /**
     * On drop
     *
     * @param ev
     */
    onDrop(ev): void {
        this._categoriesService.updateBoard();
    }

}
