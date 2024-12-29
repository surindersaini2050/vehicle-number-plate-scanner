import { inject, Injectable, Input } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private _snackBar = inject(MatSnackBar);

  constructor() { }

  openSnackBar(message: string,  durationInSeconds = 5,  horizontalPosition: MatSnackBarHorizontalPosition = 'center', verticalPosition: MatSnackBarVerticalPosition = 'top'  ) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      duration: 5 * 1000,
    });
  }
}
