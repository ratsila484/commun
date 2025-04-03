import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upadate-succeful',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './upadate-succeful.component.html',
  styleUrl: './upadate-succeful.component.css'
})
export class UpadateSuccefulComponent {
  constructor(
    public dialog: MatDialog
  ){}

  close(){
    this.dialog.closeAll();
    window.location.href = 'local';
  }

}
