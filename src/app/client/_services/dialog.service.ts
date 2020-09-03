import { Injectable } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InterestDialogComponent } from '../_components/interest-dialog/interest-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog
  ) { }

  openInterestDialog() {
    this.dialog.open(InterestDialogComponent, {
        data: {
          animal: 'panda'
        }
      });
  }

}
