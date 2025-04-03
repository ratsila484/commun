import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-private-file',
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './delete-private-file.component.html',
  styleUrl: './delete-private-file.component.css'
})
export class DeletePrivateFileComponent {

}
