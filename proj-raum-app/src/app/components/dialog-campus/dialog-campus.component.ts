import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-campus',
  templateUrl: './dialog-campus.component.html',
  styleUrls: ['./dialog-campus.component.css']
})
export class DialogCampusComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCampusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
