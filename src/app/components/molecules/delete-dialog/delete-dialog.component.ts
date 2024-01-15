import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogComponent } from 'src/app/core/models/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements DynamicDialogComponent<boolean> {
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  initComponent(): void {}

}
