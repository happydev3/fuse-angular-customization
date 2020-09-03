import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { CategoriesService } from 'app/admin/_services/categories.service';
import { Card } from '../../../_models/card.model';

@Component({
    selector: 'app-store-card',
    templateUrl: './store-card.component.html',
    styleUrls: ['./store-card.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StoreCardComponent implements OnInit {

    board: any;
    dialogRef: any;

    @Input()
    list;

    @ViewChild(FusePerfectScrollbarDirective)
    listScroll: FusePerfectScrollbarDirective;

    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {ScrumboardService} _categoriesService
     * @param {MatDialog} _matDialog
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _categoriesService: CategoriesService,
        private _matDialog: MatDialog
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._categoriesService.onBoardChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(board => {
                console.log(board);
                this.board = board;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On list name changed
     *
     * @param newListName
     */
    onListNameChanged(newListName): void
    {
        this.list.name = newListName;
    }

    /**
     * On card added
     *
     * @param newCardName
     */
    onCardAdd(newCardName): void
    {
        if ( newCardName === '' )
        {
            return;
        }

        this._categoriesService.addCard(this.list.id, new Card({name: newCardName}));

        setTimeout(() => {
            this.listScroll.scrollToBottom(0, 400);
        });
    }

    /**
     * Remove list
     *
     * @param listId
     */
    removeList(listId): void
    {
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the list and it\'s all cards?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                this._categoriesService.removeList(listId);
            }
        });
    }

    /**
     * Open card dialog
     *
     * @param cardId
     */
    openCardDialog(cardId): void
    {
        // this.dialogRef = this._matDialog.open(ScrumboardCardDialogComponent, {
        //     panelClass: 'scrumboard-card-dialog',
        //     data      : {
        //         cardId: cardId,
        //         listId: this.list.id
        //     }
        // });
        // this.dialogRef.afterClosed()
        //     .subscribe(response => {

        //     });
    }

    /**
     * On drop
     *
     * @param ev
     */
    onDrop(ev): void
    {
        this._categoriesService.updateBoard();
    }
}
