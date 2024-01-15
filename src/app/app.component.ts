import { Component } from '@angular/core';
import { DialogService } from './core/services/dialog.service';
import { Form1Component } from './components/molecules/form1/form1.component';
import { IUser } from './core/models/user';
import { DeleteDialogComponent } from './components/molecules/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _dialogService: DialogService) {}

  public async showForm1(): Promise<void> {
    const dialogRef = this._dialogService.showDialog<IUser>(
      Form1Component,
      {} as IUser
    );
    const result = await dialogRef.afterClosed().toPromise();
    console.log(result);
  }

  public async showForm1WithInitialData(): Promise<void> {
    const user: IUser = {
      name: 'John Doe',
      phone: '1234567890',
      email: 'maag@gmail.com',
    };

    const dialogRef = this._dialogService.showDialog<IUser>(
      Form1Component,
      user
    );
    const result = await dialogRef.afterClosed().toPromise();
    console.log(result);
  }

  public async showDeleteDialog(): Promise<void> {
    const dialogRef = this._dialogService.showDialog<boolean>(
      DeleteDialogComponent
    );
    const result = await dialogRef.afterClosed().toPromise();
    console.log(result);
  }
}
