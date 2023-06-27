import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'modal-auth',
  templateUrl: 'modal-auth.component.html',
  styleUrls: ['modal-auth.component.scss'],
})
export class ModalAuthDialog {
  constructor(public dialogRef: MatDialogRef<ModalAuthDialog>) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  close(): void {
    this.dialogRef.close(false);
  }

  ok(): void {
    this.dialogRef.close(true);
  }
}
